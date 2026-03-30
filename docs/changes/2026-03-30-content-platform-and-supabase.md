# 2026-03-30 Content Platform And Supabase

## Summary

This update turned the portfolio into a documented content platform with a public Build Log, Sanity authoring workflow, AI-assisted author tooling, and an optional Supabase-backed knowledge store for chatbot retrieval.

## Added

- Sanity-backed blog list and blog post pages in the frontend.
- Sanity schema types for posts, projects, skills, and tags.
- Sanity Studio custom actions and tools for LinkedIn summary generation and AI draft post creation.
- Supabase knowledge-store integration for chatbot retrieval.
- Supabase SQL migration for the `knowledge_chunks` table and vector search RPC.
- Backend endpoints for `GET /knowledge/status` and `POST /knowledge/sync`.
- Backend `.env.example` documenting required OpenAI, CORS, and Supabase settings.
- A `docs/` folder to keep feature delivery notes in the repo.

## Changed

- The homepage now pushes visitors toward the Build Log more clearly.
- The blog post page now uses a responsive two-column layout when sidebar content exists.
- The gallery behaves as a horizontal rail on smaller screens and a stacked sidebar module on larger screens.
- Attachments now use available width more effectively on larger breakpoints.
- The chatbot can now search Supabase first and fall back to FAISS when Supabase is unavailable.

## Removed

- Dependence on keeping the knowledge store local-only in FAISS.
- Reliance on public-facing AI summary controls in the frontend.

## Updated

- `CONTENT_SYSTEM_GUIDE.md` to reflect the docs folder and backend environment variables.
- `README.md` to point contributors to the documentation structure.
- `HeroSection.vue` to stop referencing generated `/dist` paths during development.

## Why

- Sanity gives the portfolio a real authoring workflow instead of hard-coded content.
- Supabase provides a managed vector-search layer that scales better than an in-memory-only FAISS flow.
- The post page needed a cleaner sidebar treatment so media feels intentional rather than appended below the article.
- A `docs/` folder makes feature history durable instead of leaving implementation context only in chat history.

## Outcome

- Posts are authored and stored in Sanity.
- Chatbot knowledge chunks can be synchronized to Supabase and searched there.
- The frontend post experience is easier to read on mobile and desktop.
- The repo now has a repeatable documentation pattern for future features.
