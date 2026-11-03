# Task Allocation — Two-Developer Plan

## Team context

- Developer A: project initiator, approximately 3 years of full-stack software development experience, backend-oriented, with prior hands-on React, Node.js, Pinecone, Groq, and hybrid RAG/LMS AI feature experience.
- Developer B: full-stack developer with approximately 2 years of experience.

These are proposed primary ownership areas, not exclusive boundaries. Both developers should understand the end-to-end product and review each other's work.

## Ownership model

### Developer A — Backend, AI/RAG, and architecture lead
Primary ownership:
- Backend architecture and shared API conventions.
- Environment/configuration and middleware.
- PostgreSQL/Prisma data model and migrations.
- Authentication/authorization backend.
- Document processing and ingestion services.
- Embedding and vector-store integration.
- Retrieval, hybrid search, reranking, and LangGraph workflow.
- Backend tests and AI evaluation design.

### Developer B — Frontend, product UX, and integration lead
Primary ownership:
- Frontend architecture and shared UI conventions.
- Reusable components and application layout.
- Authentication screens and frontend state.
- Knowledge-base and document-management screens.
- Chat experience, citations, and conversation history UI.
- RAG diagnostics/trace visualization UI.
- Frontend tests and E2E test implementation.
- API integration and frontend error/loading/empty states.

### Shared ownership
- Requirements and acceptance criteria.
- API contracts and data shape reviews.
- Security/privacy review.
- Pull-request reviews.
- Integration testing.
- Performance and reliability.
- Deployment planning in the later phase.

## Parallelization rules

1. Agree the API contract before frontend work depends on a backend endpoint.
2. Developer A should publish example request/response schemas and OpenAPI definitions early.
3. Developer B can build UI against typed mock data while the API is being implemented.
4. Both developers should agree shared TypeScript types or generated API types rather than duplicating incompatible shapes.
5. Avoid simultaneous edits to `app.ts`, route registration, global styles, or shared types without coordination.
6. Rotate PR reviews; each developer should review code outside their primary area.

## Initial issue backlog

Create one GitHub Issue for each row. Add labels such as `phase:foundation`, `area:backend`, `area:frontend`, `area:ai`, `type:testing`, `type:docs`, and priorities `P0`/`P1`/`P2`.

| ID | Issue | Primary owner | Dependency | Priority |
|---|---|---|---|---|
| FND-01 | Commit project documentation and onboarding package | A + B | Repository access | P0 |
| FND-02 | Verify clean clone and local setup on both machines | B, A supports | FND-01 | P0 |
| FND-03 | Finalize backend app/server/config and health route | A | Current backend scaffold | P0 |
| FND-04 | Add backend Jest + Supertest tests | A | FND-03 | P0 |
| FND-05 | Add frontend Vitest + Testing Library | B | Frontend scaffold | P0 |
| FND-06 | Add lint/typecheck/build/test scripts and CI | B leads, A reviews | FND-04, FND-05 | P1 |
| FND-07 | Establish OpenAPI/Swagger conventions | A | FND-03 | P1 |
| DATA-01 | Design initial Prisma schema and ERD | A leads, B reviews | FND-03 | P0 |
| DATA-02 | Configure local PostgreSQL connection and migrations | A | DATA-01 | P0 |
| AUTH-01 | Implement backend registration/login/current-user APIs | A | DATA-02 | P0 |
| AUTH-02 | Implement authentication UI and protected routes | B | API contract for AUTH-01 | P0 |
| KB-01 | Implement knowledge-base CRUD APIs and ownership tests | A | AUTH-01 | P0 |
| KB-02 | Implement knowledge-base dashboard and forms | B | KB-01 contract | P1 |
| DOC-01 | Implement secure document upload and local storage abstraction | A | KB-01 | P0 |
| DOC-02 | Implement PDF/DOCX/TXT/Markdown parsing and metadata tests | A | DOC-01 | P0 |
| DOC-03 | Implement document list/status/detail UI | B | DOC-01 API contract | P1 |
| RAG-01 | Implement chunking and local embedding service | A | DOC-02 | P0 |
| RAG-02 | Select and integrate vector store | A, both decide | RAG-01 | P0 |
| RAG-03 | Implement baseline retrieval and Groq answer generation | A | RAG-02 | P0 |
| RAG-04 | Define citation response contract and citation UI | A + B | RAG-03 contract | P0 |
| RAG-05 | Implement chat and conversation history UI | B | RAG-03 contract | P1 |
| RAG-06 | Implement hybrid retrieval and reranking experiments | A | Baseline RAG + evaluation set | P1 |
| GRAPH-01 | Implement LangGraph state and workflow nodes | A | Baseline RAG | P1 |
| GRAPH-02 | Build RAG trace/diagnostics UI | B | Trace/API contract | P1 |
| EVAL-01 | Create 30–50 curated RAG evaluation examples | A + B | Basic ingestion and RAG | P1 |
| EVAL-02 | Implement evaluation runner and quality report | A | EVAL-01 | P1 |
| E2E-01 | Add critical-path Playwright tests | B | Stable integrated UI/API | P1 |
| QA-01 | Security, performance, and reliability review | A + B | Core flows integrated | P1 |

## First sprint recommendation

Do not start all issues at once. Start with:
- FND-01: documentation and onboarding.
- FND-02: teammate's clean clone and local setup.
- FND-03: backend foundation verification.
- FND-04: backend tests.
- FND-05: frontend tests.
- FND-07: initial API documentation convention.

Developer A should own backend foundation and backend tests. Developer B should own frontend tests and verify local setup. Both should review the documentation and agree on the first data model before M2.

## Task sizing

Aim for issues that can be completed and reviewed in roughly half a day to two working days. Split larger items such as "implement RAG" into ingestion, embedding, indexing, retrieval, generation, citations, and evaluation tasks.

## Definition of done

A task is done only when its acceptance criteria pass, tests/type checks pass, docs are updated, the PR is reviewed and merged, and the GitHub issue is closed.
