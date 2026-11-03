# Technical Stack

This document records the current intended stack. Versions and provider quotas must be checked before adding/upgrading packages.

## Frontend
- React
- TypeScript
- Vite
- Tailwind CSS (planned styling system)
- Vitest + React Testing Library (planned test stack)
- Playwright for end-to-end tests (later phase)

## Backend
- Node.js 20.20.2 development baseline
- Express 5
- TypeScript 6.0.3
- Zod 4 for runtime validation
- dotenv for local environment configuration
- Helmet for security headers
- cors for controlled cross-origin access
- Prisma ORM (planned)
- PostgreSQL 17 local development database
- Multer for multipart uploads (planned)
- Jest + Supertest (planned backend testing)
- OpenAPI/Swagger (planned API documentation)

## AI and RAG
- LangChain.js for document processing, splitting, embeddings, retrievers, and model integrations.
- LangGraph.js for stateful workflow orchestration, conditional routing, bounded retries, and checkpointing.
- Groq API as the initial LLM inference provider, subject to its current free-tier terms and model-specific limits.
- Transformers.js with a small open-source embedding model such as `all-MiniLM-L6-v2` for local embeddings, subject to CPU/RAM performance testing.
- Pinecone Starter is a candidate vector store, subject to current free-tier limits. PostgreSQL + pgvector is the fallback and remains a decision to validate before committing to a provider.
- Local BM25 implementation/library for sparse retrieval.
- Local open-source reranker may be evaluated later; CPU performance on the development machine must be measured.
- Local tracing/debugging first. LangSmith is optional and only if the team can remain within an acceptable no-charge usage configuration.
- RAG evaluation through a curated dataset and custom scripts initially; Ragas is an optional Python-based evaluation tool.

## Infrastructure and local development
- PostgreSQL 17 is available locally through pgAdmin.
- Local file storage during development.
- Redis + BullMQ may be introduced if/when background job processing is needed.
- Docker is not required for local development.
- Deployment and cloud infrastructure are deliberately deferred.

## Cost and compatibility policy
- Free tiers have quotas and may change. Confirm current terms and usage limits before use.
- Do not enable pay-as-you-go, paid overages, or billing upgrades without explicit agreement from both developers.
- Check package `engines` and peer dependencies against Node.js 20 before installing.
- Do not upgrade Node.js or major framework versions independently; discuss and record the decision first.
