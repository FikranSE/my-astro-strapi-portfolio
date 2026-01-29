---
description: How to run and develop the Knowledge Base project
---

# Knowledge Base & Content Platform Workflow

This project consists of an **Astro** frontend and a **Strapi** backend.

## 1. Backend Setup (Strapi)
// turbo
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run develop`
4. Access the admin panel at `http://localhost:1337/admin`
5. Create your first admin user and start adding content to **Articles**, **Categories**, and **Tags**.

## 2. Frontend Setup (Astro)
// turbo
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your Strapi URL/Token.
4. Start the development server: `npm run dev`
5. Access the site at `http://localhost:4321`

## 3. Connecting Data
1. In Strapi, go to **Settings > API Tokens**.
2. Create a new token (Full Access or Custom with Read permissions).
3. Paste the token into `frontend/.env` as `STRAPI_TOKEN`.
4. Update `src/lib/strapi.ts` query to match your actual Strapi schema.

## 4. Deployment
- **Backend:** Deploy to Railway or Render using the `mysql` configuration (see `DATABASE.md`).
- **Frontend:** Connect your GitHub repo to Vercel and it will auto-detect Astro.
