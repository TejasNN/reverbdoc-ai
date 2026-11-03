# DocuMind AI

AI-powered document intelligence platform built around retrieval-augmented generation (RAG).

DocuMind AI lets users upload documents, organize them into knowledge bases, ask questions grounded in those documents, and inspect how the system retrieved evidence and generated answers.

## Project goals

- Support PDF, DOCX, TXT, and Markdown documents.
- Parse, clean, chunk, embed, and index uploaded documents.
- Answer questions using retrieved document evidence.
- Display citations with document names, page numbers where available, and supporting excerpts.
- Support follow-up questions and multi-document comparison.
- Expose RAG diagnostics such as retrieved chunks, relevance scores, workflow stages, retry reasons, latency, and evaluation results.

## Repository structure

```text
documind-ai/
├── frontend/       # React + TypeScript application
├── backend/        # Node.js + Express + TypeScript API
├── evaluation/     # RAG evaluation datasets and experiments
├── e2e/            # End-to-end tests
├── docs/           # Product, architecture, onboarding and process docs
└── README.md
```

The repository structure will grow as modules are implemented. Do not create every planned directory prematurely.

## Documentation

Start with:
1. [Project overview](docs/PROJECT_OVERVIEW.md)
2. [Requirements](docs/REQUIREMENTS.md)
3. [Technical stack](docs/TECH_STACK.md)
4. [System architecture](docs/SYSTEM_ARCHITECTURE.md)
5. [Implementation roadmap](docs/IMPLEMENTATION_ROADMAP.md)
6. [Developer onboarding](docs/ONBOARDING.md)
7. [Development workflow](docs/DEVELOPMENT_WORKFLOW.md)
8. [Task allocation](docs/TASK_ALLOCATION.md)
9. [Technical decisions](docs/TECHNICAL_DECISIONS.md)
10. [Testing strategy](docs/TESTING_STRATEGY.md)

## Current development status

The project is in the local foundation phase. Node.js 20.20.2 and npm 10.8.2 are the current development baseline. The frontend and backend scaffolds have been created, and both projects have been aligned to TypeScript 6.0.3 and `@types/node` 20.x.

The backend architecture and first health endpoint have been proposed in the development conversation, but their successful local execution has not yet been confirmed. Check the GitHub Issues/Project board and the latest merged code before treating a task as complete.

## Important

- Never commit `.env`, API keys, database credentials, uploaded private documents, or local storage.
- Use pull requests for feature work; do not commit directly to `main`.
- Update documentation when an architectural decision or API contract changes.
- Do not introduce paid services or enable paid usage without an explicit team decision.
- Deployment choices are intentionally deferred until local development and testing are complete.
