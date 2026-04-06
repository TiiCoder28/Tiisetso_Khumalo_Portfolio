# 2026-03-30 Content Platform And Supabase

## Summary

This update turned the portfolio into a documented content platform with a public Build Log, Sanity authoring workflow, AI-assisted author tooling, and a Supabase-backed knowledge store for chatbot retrieval. The portfolio now behaves less like a static CV and more like a living system for documenting growth across AI, machine learning, IoT, agentic AI, and engineering work.

## Added

- Sanity-backed blog list and blog post pages in the frontend.
- Sanity schema types for posts, projects, skills, and tags.
- Sanity Studio custom actions and tools for LinkedIn summary generation and AI draft post creation.
- Supabase knowledge-store integration for chatbot retrieval.
- Supabase SQL migration for the `knowledge_chunks` table and vector search RPC.
- Backend endpoints for `GET /knowledge/status` and `POST /knowledge/sync`.
- Backend `.env.example` documenting required OpenAI, CORS, and Supabase settings.
- A `docs/` folder to keep feature delivery notes in the repo.
- Seeded Sanity skills for reuse in draft posts and published content.
- Seeded Sanity tags so posts can be classified consistently.

## Changed

- The homepage now pushes visitors toward the Build Log more clearly.
- The blog post page now uses a responsive two-column layout when sidebar content exists.
- The gallery behaves as a horizontal rail on smaller screens and a stacked sidebar module on larger screens.
- Attachments now use available width more effectively on larger breakpoints.
- The chatbot can now search Supabase first and fall back to FAISS when Supabase is unavailable.
- The content model now supports richer editorial relationships between posts, skills, tags, and projects.
- The portfolio now presents growth and learning as a first-class part of the public experience.

## Removed

- Dependence on keeping the knowledge store local-only in FAISS.
- Reliance on public-facing AI summary controls in the frontend.
- The need to keep all embeddings loaded into the constrained backend instance.

## Updated

- `CONTENT_SYSTEM_GUIDE.md` to reflect the docs folder and backend environment variables.
- `README.md` to point contributors to the documentation structure.
- `HeroSection.vue` to stop referencing generated `/dist` paths during development.

## Why

- Sanity gives the portfolio a real authoring workflow instead of hard-coded content.
- Supabase provides a managed Postgres-backed vector-search layer that scales better than an in-memory-only FAISS flow.
- The post page needed a cleaner sidebar treatment so media feels intentional rather than appended below the article.
- A `docs/` folder makes feature history durable instead of leaving implementation context only in chat history.
- Offloading embeddings and retrieval helps the backend stay responsive on a 0.5 GB Render instance.

## Outcome

- Posts are authored and stored in Sanity.
- Skills and tags can be managed directly in Sanity and reused across posts.
- Chatbot knowledge chunks can be migrated from local storage into Supabase and searched there.
- The frontend post experience is easier to read on mobile and desktop.
- The repo now has a repeatable documentation pattern for future features.
- Retrieval is faster and operationally lighter because embeddings no longer have to live only in local backend storage.

## What We Learned

- Supabase uses Postgres underneath, which means it can be used as a vector database for embeddings when the schema and retrieval flow are designed correctly.
- Moving from local FAISS indexes to Supabase is a practical migration path for a portfolio-scale retrieval system.
- Sanity is effective not just for posts, but also for structured supporting content like skills and tags.
- Reusable taxonomy in Sanity improves authoring speed, consistency, and future filtering options.
- Performance decisions matter more on a small backend footprint, and moving embeddings out of the app process reduced backend pressure significantly.
