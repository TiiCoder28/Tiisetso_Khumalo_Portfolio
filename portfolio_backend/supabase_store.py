import logging
import os
from typing import Any

from supabase import Client, create_client

logger = logging.getLogger(__name__)


class SupabaseKnowledgeStore:
    def __init__(
        self,
        url: str,
        key: str,
        table_name: str = "knowledge_chunks",
        rpc_name: str = "match_knowledge_chunks",
    ):
        self.table_name = table_name
        self.rpc_name = rpc_name
        self.client: Client = create_client(url, key)

    @classmethod
    def from_env(cls) -> "SupabaseKnowledgeStore | None":
        url = os.getenv("SUPABASE_URL", "").strip()
        key = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "").strip()

        if not url or not key:
            return None

        return cls(
            url=url,
            key=key,
            table_name=os.getenv("SUPABASE_KNOWLEDGE_TABLE", "knowledge_chunks"),
            rpc_name=os.getenv("SUPABASE_MATCH_RPC", "match_knowledge_chunks"),
        )

    def search(self, embedding: list[float], mode: str, top_k: int = 3) -> list[dict[str, Any]]:
        response = self.client.rpc(
            self.rpc_name,
            {
                "query_embedding": embedding,
                "filter_mode": mode,
                "match_count": top_k,
            },
        ).execute()
        return response.data or []

    def upsert_chunks(self, mode: str, records: list[dict[str, Any]]) -> int:
        if not records:
            return 0

        payload = []
        for record in records:
            payload.append(
                {
                    "chunk_id": record["chunk_id"],
                    "mode": mode,
                    "source": record["source"],
                    "content": record["content"],
                    "embedding": record["embedding"],
                    "metadata": record.get("metadata", {}),
                }
            )

        self.client.table(self.table_name).upsert(payload, on_conflict="chunk_id").execute()
        return len(payload)

    def healthcheck(self) -> dict[str, Any]:
        response = self.client.table(self.table_name).select("chunk_id", count="exact").limit(1).execute()
        return {
            "configured": True,
            "table": self.table_name,
            "count": response.count or 0,
        }
