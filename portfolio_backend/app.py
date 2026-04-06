import os
import logging
from contextlib import asynccontextmanager
from typing import Optional
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from chatbot import PortfolioChatbot, generate_linkedin_summary, generate_post_draft

# Load environment variables
load_dotenv()

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S')

# Global chatbot instance
chatbot: Optional[PortfolioChatbot] = None


def normalize_origin(origin: str) -> str:
    return origin.strip().rstrip("/")


def get_allowed_origins() -> list[str]:
    origins = [
        "http://localhost:5173",
        "http://localhost:3333",
        "http://localhost:8000",
        os.getenv("FRONTEND_URL", ""),
        os.getenv("PUBLIC_SITE_URL", ""),
        os.getenv("STUDIO_URL", ""),
    ]
    normalized = [normalize_origin(origin) for origin in origins if origin and origin.strip()]
    return [origin for origin in dict.fromkeys(normalized) if origin]


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load the knowledge base when the app starts."""
    global chatbot
    logging.info("Starting Portfolio API...")
    logging.info("Allowed CORS origins: %s", get_allowed_origins())
    chatbot = PortfolioChatbot()
    
    # Load both knowledge bases separately
    logging.info("Loading professional knowledge base...")
    chatbot.load_knowledge_base("knowledge_base", mode="professional")
    
    logging.info("Loading tutorial knowledge base...")
    chatbot.load_knowledge_base("knowledge_base", mode="tutorial")
    
    logging.info("Chatbot ready!")
    yield
    logging.info("Shutting down...")


# Initialize FastAPI app
app = FastAPI(
    title="Tii's Portfolio API",
    description="AI Chatbot API for portfolio website",
    version="1.0.0",
    lifespan=lifespan
)

# CORS - Allow your frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request/Response models
class ChatRequest(BaseModel):
    message: str
    mode: str = "professional"  # "professional" or "tutorial"
    history: list = []


class ChatResponse(BaseModel):
    answer: str
    mode: str
    sources: list = []


class LinkedInSummaryRequest(BaseModel):
    title: str
    excerpt: str = ""
    body: str = ""
    url: str | None = None


class LinkedInSummaryResponse(BaseModel):
    summary: str
    link: str | None = None


class DraftPostRequest(BaseModel):
    notes: str
    title_hint: str = ""
    status: str = "in-progress"
    github_url: str = ""
    demo_url: str = ""


class DraftPostResponse(BaseModel):
    title: str
    excerpt: str
    status: str
    tags: list[str] = []
    skills: list[str] = []
    body: list[dict] = []


class KnowledgeSyncResponse(BaseModel):
    synced: dict[str, int]
    provider: str


# ============== ENDPOINTS ==============

@app.get("/")
async def root():
    """Health check endpoint."""
    return {"status": "online", "message": "Tii's Portfolio API is running!"}


@app.get("/health")
async def health():
    """Health check for monitoring."""
    if not chatbot:
        return {"status": "healthy", "chatbot": "not initialized"}
    
    pro_ready = chatbot.indexes["professional"]["is_initialized"]
    tut_ready = chatbot.indexes["tutorial"]["is_initialized"]
    
    return {
        "status": "healthy",
        "professional": "ready" if pro_ready else "not loaded",
        "tutorial": "ready" if tut_ready else "not loaded"
    }


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Main chat endpoint.
    
    - mode: "professional" for CV/experience questions
    - mode: "tutorial" for space effects code explanations
    """
    if not chatbot:
        raise HTTPException(status_code=503, detail="Chatbot not initialized")
    
    # Check if the requested mode is initialized
    if not chatbot.indexes[request.mode]["is_initialized"]:
        raise HTTPException(status_code=503, detail=f"{request.mode} knowledge base not loaded")
    
    try:
        # Get response from chatbot
        answer = chatbot.chat(
            question=request.message,
            mode=request.mode,
            history=request.history
        )
    
        # Search with mode to get correct sources
        search_results = chatbot.search(request.message, mode=request.mode, top_k=3)
        sources = [r["source"] for r in search_results]
        
        return ChatResponse(
            answer=answer,
            mode=request.mode,
            sources=sources
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/linkedin-summary", response_model=LinkedInSummaryResponse)
async def linkedin_summary(request: LinkedInSummaryRequest):
    """Generate a LinkedIn-ready summary for a blog post."""
    try:
        summary = generate_linkedin_summary(
            title=request.title,
            excerpt=request.excerpt,
            body=request.body,
        )
        return LinkedInSummaryResponse(summary=summary, link=request.url)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/draft-post", response_model=DraftPostResponse)
async def draft_post(request: DraftPostRequest):
    """Generate a structured draft post from rough notes."""
    try:
        draft = generate_post_draft(
            notes=request.notes,
            title_hint=request.title_hint,
            status=request.status,
            github_url=request.github_url,
            demo_url=request.demo_url,
        )
        return DraftPostResponse(**draft)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/knowledge/sync", response_model=KnowledgeSyncResponse)
async def sync_knowledge_store():
    """Sync the currently loaded knowledge chunks into Supabase, if configured."""
    if not chatbot:
        raise HTTPException(status_code=503, detail="Chatbot not initialized")

    if not chatbot.supabase_store:
        raise HTTPException(status_code=400, detail="Supabase knowledge store not configured")

    try:
        synced = chatbot.sync_all_modes_to_supabase()
        return KnowledgeSyncResponse(synced=synced, provider="supabase")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/knowledge/status")
async def knowledge_status():
    if not chatbot:
        return {"configured": False, "provider": None}

    if not chatbot.supabase_store:
        return {"configured": False, "provider": None}

    try:
        details = chatbot.supabase_store.healthcheck()
        return {"provider": "supabase", **details}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/status")
async def status():
    """Get chatbot status and loaded documents."""
    if not chatbot:
        return {"initialized": False, "professional_docs": 0, "tutorial_docs": 0}
    
    return {
        "professional": {
            "initialized": chatbot.indexes["professional"]["is_initialized"],
            "documents": len(chatbot.indexes["professional"]["documents"])
        },
        "tutorial": {
            "initialized": chatbot.indexes["tutorial"]["is_initialized"],
            "documents": len(chatbot.indexes["tutorial"]["documents"])
        },
        "knowledge_store": {
            "provider": "supabase" if chatbot.supabase_store else None,
            "configured": bool(chatbot.supabase_store),
        }
    }




# Run with: uvicorn app:app --reload
if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("app:app", host="0.0.0.0", port=port, reload=False)
