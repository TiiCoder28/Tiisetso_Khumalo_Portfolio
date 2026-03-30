create extension if not exists vector;

create table if not exists public.knowledge_chunks (
  chunk_id text primary key,
  mode text not null,
  source text not null,
  content text not null,
  embedding vector(1536) not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists knowledge_chunks_mode_idx on public.knowledge_chunks (mode);
create index if not exists knowledge_chunks_source_idx on public.knowledge_chunks (source);
create index if not exists knowledge_chunks_embedding_idx
  on public.knowledge_chunks
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_knowledge_chunks_updated_at on public.knowledge_chunks;
create trigger set_knowledge_chunks_updated_at
before update on public.knowledge_chunks
for each row execute procedure public.set_updated_at();

create or replace function public.match_knowledge_chunks(
  query_embedding vector(1536),
  filter_mode text,
  match_count int default 3
)
returns table (
  chunk_id text,
  mode text,
  source text,
  content text,
  metadata jsonb,
  score float
)
language sql
stable
as $$
  select
    knowledge_chunks.chunk_id,
    knowledge_chunks.mode,
    knowledge_chunks.source,
    knowledge_chunks.content,
    knowledge_chunks.metadata,
    1 - (knowledge_chunks.embedding <=> query_embedding) as score
  from public.knowledge_chunks
  where knowledge_chunks.mode = filter_mode
  order by knowledge_chunks.embedding <=> query_embedding
  limit greatest(match_count, 1);
$$;
