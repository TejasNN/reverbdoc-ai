# Technical Decisions and Decision Log

This file is the team's source of truth for architectural decisions. Update it when a decision changes. Distinguish confirmed decisions from proposals.

## Confirmed working decisions

### TD-001 — Local-first development
**Decision:** Complete local implementation and testing before choosing deployment infrastructure.

**Reason:** Avoid premature cloud/deployment complexity and cost while core workflows are still changing.

### TD-002 — Runtime baseline
**Decision:** Current local development baseline is Node.js 20.20.2 and npm 10.8.2.

**Reason:** The project owner requested to retain Node 20 for compatibility investigation. Check package engine requirements before adding dependencies. Revisit the runtime as a team before production deployment because Node 20 is an older/EOL runtime line.

### TD-003 — TypeScript baseline
**Decision:** TypeScript 6.0.3 and `@types/node` 20.x are currently aligned in frontend and backend.

**Reason:** Keep compiler and runtime type definitions consistent while scaffolding.

### TD-004 — Backend framework
**Decision:** Node.js + Express 5 + TypeScript.

### TD-005 — Frontend framework
**Decision:** React + TypeScript + Vite.

### TD-006 — Local database
**Decision:** PostgreSQL 17 is the local development database candidate/available service; pgAdmin is used for administration. Prisma is planned as the ORM.

## Proposed decisions to validate

### TD-P01 — LLM provider
Groq is the initial inference provider candidate. Confirm the exact model, free-tier quota, data handling terms, and fallback behavior before integration.

### TD-P02 — Embeddings
Use a local Transformers.js model such as `all-MiniLM-L6-v2` to avoid a hosted embedding API cost. Benchmark CPU latency and memory on the target machine.

### TD-P03 — Vector store
Pinecone Starter is a candidate, with PostgreSQL + pgvector as fallback. Make the final choice after checking current quotas, setup friction, metadata filters, and local testing needs.

### TD-P04 — RAG orchestration
Use LangChain.js for components and LangGraph.js for stateful workflow orchestration. Keep deterministic transformations in ordinary code where possible.

### TD-P05 — Tracing
Start with local tracing/debug records. Consider LangSmith only if its current free usage and billing controls meet the team's no-paid-usage policy.

### TD-P06 — Reranking
Evaluate a local open-source cross-encoder only after baseline retrieval exists. Benchmark CPU latency and memory before adopting it.

## Decision process

For a material decision, record:
- Context/problem.
- Options considered.
- Decision and status (proposed/accepted/deprecated).
- Reasons and trade-offs.
- Date and decision owners.
- Follow-up tasks.

No developer should silently change a major dependency, provider, database, API contract, or architecture decision.
