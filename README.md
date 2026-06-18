# AI-Powered Customer Email Automation Platform

Enterprise SaaS platform for automating customer support email triage, AI-assisted replies, escalation management, analytics, and knowledge-base powered RAG workflows.

## Stack

- Frontend: React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, Recharts, React Query, Zustand
- Backend: Spring Boot 3, Java 21, PostgreSQL, Redis, JWT-ready security, OpenAI/Gmail integration seams
- Deployment: Docker Compose for frontend, backend, PostgreSQL, Redis, and Chroma

## Quick start

```bash
cp .env.example .env
docker compose up --build
```

Frontend: http://localhost:5173
Backend API: http://localhost:8080/api

## Local development

```bash
cd frontend && npm install && npm run dev
cd backend && ./mvnw spring-boot:run
```

## Core workflows

1. Gmail accounts connect through OAuth endpoints.
2. Inbox sync jobs poll accounts every 60 seconds.
3. Emails are classified for category, sentiment, intent, and confidence.
4. RAG retrieves knowledge snippets for grounded replies.
5. Escalation rules route legal, VIP, repeat-risk, attachment, and low-confidence cases.
6. Dashboard analytics summarize performance, sentiment, volume, and response time.
