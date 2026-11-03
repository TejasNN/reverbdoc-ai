# Implementation Roadmap

This roadmap is ordered by dependencies. Milestones are not calendar commitments; estimate them together after breaking work into issues.

## M0 — Team and repository foundation
- Confirm repository access for both developers.
- Merge project documentation.
- Agree on branch protection and pull-request checks.
- Verify each developer can clone and run the current scaffold.

## M1 — Application foundation
- Finalize backend TypeScript configuration and Express app/server separation.
- Validate environment configuration with Zod.
- Add centralized errors, not-found handling, health route.
- Configure backend Jest + Supertest.
- Configure frontend Vitest + React Testing Library.
- Establish OpenAPI/Swagger conventions.
- Add CI checks for typecheck, lint, build, and tests.

## M2 — Data and identity foundation
- Define Prisma schema and PostgreSQL connection.
- Add migrations and test database strategy.
- Implement registration, login, logout/session handling, and current-user endpoint.
- Add authorization middleware and tests.

## M3 — Knowledge bases
- Implement knowledge-base CRUD.
- Enforce ownership rules.
- Add frontend knowledge-base list/create/detail flows.

## M4 — Document ingestion
- Implement secure upload and local file storage abstraction.
- Parse PDF, DOCX, TXT, Markdown.
- Preserve page/source metadata where possible.
- Implement cleaning, chunking, embedding, and indexing.
- Track ingestion status and failures.
- Add duplicate, delete, and re-index behavior.

## M5 — Basic RAG
- Implement knowledge-base-scoped semantic retrieval.
- Integrate Groq generation.
- Return source-grounded answers and citations.
- Persist conversations and messages.
- Add insufficient-context behavior.

## M6 — Advanced retrieval
- Add BM25 sparse retrieval and hybrid fusion.
- Add query rewriting/multi-query only after baseline evaluation.
- Evaluate and add reranking.
- Add metadata filters and retrieval diagnostics.

## M7 — LangGraph orchestration
- Model typed workflow state.
- Implement nodes and conditional edges.
- Add relevance grading, grounding checks, bounded retries, and fallback.
- Add persistence/checkpointing and trace inspection.
- Test graph nodes with mocked dependencies and run separate live evaluations.

## M8 — Frontend product experience
- Complete dashboard, knowledge-base and document management.
- Complete chat, citations, follow-up questions, and multi-document comparison.
- Build RAG trace/diagnostics interface.
- Add accessible loading, empty, error, and retry states.

## M9 — Quality and evaluation
- Add Playwright critical-path tests.
- Build 30–50 curated evaluation examples initially.
- Measure context precision/recall, faithfulness, answer relevance, and correctness where feasible.
- Profile latency, memory, and retrieval quality.
- Fix security, reliability, and performance issues.

## M10 — Deployment planning
Only after local implementation and testing are complete, decide on hosting, storage, CI/CD, observability, cost controls, backups, and production security.
