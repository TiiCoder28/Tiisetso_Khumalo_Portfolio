# Content System Guide

## Overview

Canonical project documentation now lives under the `docs/` folder. This guide remains the system-level overview, while feature-specific notes and change logs are recorded in dedicated docs files for each shipped capability.

This portfolio now includes a structured content system designed to do more than display static work. It supports:

- a public Build Log on the portfolio website
- a Sanity Studio admin experience for authoring and publishing content
- AI-assisted draft generation for blog posts
- AI-generated LinkedIn summaries for posts
- skills, tags, projects, and post relationships

The goal is to turn the portfolio into a living record of professional growth, project work, and technical learning.

## What Was Built

### Public Portfolio Frontend

The frontend is a Vue application deployed on Vercel. It now includes:

- a more prominent Build Log entry point in the hero section
- a blog listing page
- an individual blog post page
- rendering for structured Sanity post content
- support for hero images, galleries, attachments, project links, and referenced skills

### Sanity Studio

Sanity Studio acts as the headless CMS and authoring environment. It includes:

- `Post` documents
- `Project` documents
- `Skill` documents
- `Tag` documents
- a custom document action for generating a LinkedIn summary
- a custom Studio tool for generating full draft posts from rough notes

### Backend API

The FastAPI backend now supports:

- chatbot functionality for the portfolio
- LinkedIn summary generation
- AI draft post generation

This means the AI authoring workflow is separated from the public frontend and kept in the authoring/admin layer where it belongs.

## Architecture

### Frontend

Location:

- `portfolio_frontend`

Main responsibilities:

- render the public portfolio
- fetch published content from Sanity
- display blog lists and blog post pages

Key files:

- `portfolio_frontend/src/lib/sanity/client.js`
- `portfolio_frontend/src/lib/sanity/content.js`
- `portfolio_frontend/src/views/BlogListView.vue`
- `portfolio_frontend/src/views/BlogPostView.vue`
- `portfolio_frontend/src/components/HeroSection.vue`

### Studio

Location:

- `portfolio_studio`

Main responsibilities:

- content creation and editing
- draft workflow
- AI-assisted authoring tools
- summary generation actions

Key files:

- `portfolio_studio/schemaTypes/post.ts`
- `portfolio_studio/schemaTypes/project.ts`
- `portfolio_studio/schemaTypes/skill.ts`
- `portfolio_studio/schemaTypes/tag.ts`
- `portfolio_studio/actions/generateLinkedInSummaryAction.tsx`
- `portfolio_studio/tools/AiDraftPostTool.tsx`
- `portfolio_studio/sanity.config.ts`

### Backend

Location:

- `portfolio_backend`

Main responsibilities:

- chatbot API
- LinkedIn summary generation endpoint
- AI draft post generation endpoint

Key files:

- `portfolio_backend/app.py`
- `portfolio_backend/chatbot.py`

## Content Model

### Post

A post supports:

- title
- slug
- card summary
- full post content
- progress status
- featured flag
- hero image
- gallery
- attachments
- cover video URL
- related project
- GitHub/demo links
- skills learned
- tags
- LinkedIn summary
- published date

### Project

A project supports:

- title
- slug
- summary
- status
- hero image
- tech stack
- GitHub URL
- demo URL

### Skill

A skill supports:

- name
- category
- level

### Tag

A tag supports:

- title
- slug
- description

## AI Features

### 1. LinkedIn Summary Generation

This is a Sanity document action available on `Post` documents.

How it works:

1. Open a post in Sanity Studio
2. Trigger the `Generate LinkedIn Summary` action
3. Studio sends the post title and summary to the backend
4. The backend calls OpenAI
5. The generated summary is written back into the `linkedinSummary` field

Backend endpoint:

- `POST /linkedin-summary`

Implementation entry points:

- `portfolio_studio/actions/generateLinkedInSummaryAction.tsx`
- `portfolio_backend/app.py`
- `portfolio_backend/chatbot.py`

### 2. AI Draft Post Generator

This is a custom Sanity Studio tool.

How it works:

1. Open the `AI Draft Post` tool in Sanity Studio
2. Paste rough notes about a project, experiment, or learning entry
3. Optionally provide:
   - title hint
   - status
   - GitHub URL
   - demo URL
4. The Studio sends the notes to the backend
5. The backend asks OpenAI to return structured JSON
6. The Studio previews the generated content
7. When confirmed, the Studio creates a Sanity draft post

The draft generator creates:

- title
- card summary
- status
- structured body outline
- suggested skills
- suggested tags
- project links

Backend endpoint:

- `POST /draft-post`

Implementation entry points:

- `portfolio_studio/tools/AiDraftPostTool.tsx`
- `portfolio_backend/app.py`
- `portfolio_backend/chatbot.py`

## How the AI Draft Body Is Stored

The backend returns a structured draft body, and the Studio converts it into Sanity Portable Text blocks.

That means the AI does not write raw markdown into the field. Instead, it generates structured content which is transformed into:

- headings
- paragraphs
- bullet lists

This makes the content render properly on the public blog page and keeps the Studio schema aligned with Sanity's content model.

## Seeded Skills

The following skills were created and published so draft posts can reference them immediately:

- Python
- FastAPI
- Vue.js
- JavaScript
- TypeScript
- OpenAI API
- Prompt Engineering
- RAG Systems
- Agentic AI
- Machine Learning
- Deep Learning
- IoT Systems
- Embedded Systems
- Electronics
- Three.js
- WebGL

These are matched by name when generating draft posts in Studio.

## Environment Variables

### Frontend

Create a frontend env file based on:

- `portfolio_frontend/.env.example`

Key values:

- `VITE_PORTFOLIO_API_URL`
- `VITE_PUBLIC_SITE_URL`
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`
- `VITE_SANITY_USE_CDN`

### Studio

Create a Studio env file based on:

- `portfolio_studio/.env.example`

Key value:

- `SANITY_STUDIO_PORTFOLIO_API_URL=http://localhost:8000`

### Backend

The backend uses its `.env` file for runtime configuration, including:

- `OPENAI_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_KNOWLEDGE_TABLE`
- `SUPABASE_MATCH_RPC`
- `SUPABASE_SYNC_ON_STARTUP`
- frontend/studio URLs for CORS where needed

## How to Run Locally

### 1. Backend

From `portfolio_backend`:

```powershell
pip install -r requirements.txt
uvicorn app:app --reload
```

Runs on:

- `http://localhost:8000`

### 2. Sanity Studio

From `portfolio_studio`:

```powershell
npm install
npm run dev
```

Runs on:

- `http://localhost:3333`

### 3. Frontend

From `portfolio_frontend`:

```powershell
npm install
npm run dev
```

Runs on:

- `http://localhost:5173`

## Typical Authoring Workflow

### Manual Post Workflow

1. Open Sanity Studio
2. Create a new `Post`
3. Fill in title, summary, full post content, skills, tags, links, and media
4. Generate LinkedIn summary if needed
5. Publish

### AI-Assisted Workflow

1. Open Sanity Studio
2. Open the `AI Draft Post` tool
3. Paste rough notes
4. Generate the draft
5. Review the generated preview
6. Create the draft in Sanity
7. Edit and refine manually
8. Generate LinkedIn summary if needed
9. Publish

## Public Blog Rendering

The blog list page uses:

- the card summary first
- the full body text as preview fallback where appropriate

The post page renders:

- header metadata
- hero image
- full Portable Text content
- attachments
- gallery
- linked project context
- referenced skills

## Current Limitations

- tags only auto-link if matching tag documents already exist
- project linking is still manual unless extended later
- asset handling is still separate from the future Supabase storage work
- embeddings still use the current FAISS-based backend flow for now

## Planned Next Phase

The next phase is to move retrieval and asset infrastructure toward Supabase:

- Supabase Storage for uploaded assets
- Supabase Postgres for structured data where needed
- Supabase pgvector for embeddings and retrieval

## Supabase Retrieval Layer

The backend now includes an optional Supabase-backed knowledge store for retrieval.

What it does:

- keeps the existing FAISS flow as a safe fallback
- adds a pgvector-ready Supabase table for knowledge chunks
- can sync the currently loaded professional and tutorial knowledge chunks into Supabase
- can search Supabase first and fall back to FAISS if Supabase is not configured or unavailable

Implementation files:

- `portfolio_backend/supabase_store.py`
- `portfolio_backend/.env.example`
- `supabase/migrations/001_portfolio_knowledge.sql`

### Required backend environment variables

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_KNOWLEDGE_TABLE` (optional, defaults to `knowledge_chunks`)
- `SUPABASE_MATCH_RPC` (optional, defaults to `match_knowledge_chunks`)
- `SUPABASE_SYNC_ON_STARTUP` (optional, `true` or `false`)

### New backend endpoints

- `GET /knowledge/status`
- `POST /knowledge/sync`

### Setup flow

1. Create a Supabase project
2. Run the SQL in `supabase/migrations/001_portfolio_knowledge.sql`
3. Add the Supabase environment variables to `portfolio_backend/.env`
4. Restart the FastAPI backend
5. Call `POST /knowledge/sync` once to push the currently loaded knowledge chunks into Supabase

After that, retrieval will attempt Supabase pgvector search first and only fall back to FAISS if needed.

That phase will replace the current local FAISS-centered retrieval model with a more scalable managed approach.

## Summary

This system was built to make the portfolio an active professional platform instead of a static showcase.

It now supports:

- structured writing
- AI-assisted post creation
- LinkedIn summary generation
- skills and project relationships
- a public Build Log that communicates growth over time

The result is a portfolio that better reflects how work is actually done: through iteration, reflection, documentation, and continuous improvement.