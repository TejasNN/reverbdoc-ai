# Testing Strategy

## Testing layers

### Backend unit tests
Use Jest for isolated functions/services:
- Environment validation.
- Zod schemas.
- Chunking and metadata transformations.
- Authorization policy helpers.
- Retrieval fusion/ranking helpers.
- LangGraph nodes with mocked dependencies.

### Backend integration tests
Use Jest + Supertest against the Express `app` export without binding a real port:
- Health endpoint.
- Not-found behavior.
- Validation errors.
- Authentication and authorization.
- Knowledge-base ownership.
- Document upload and lifecycle.
- RAG API contracts.

Use a dedicated test database for persistence integration tests. Mock Groq, vector database, and embedding providers in deterministic tests.

### Frontend tests
Use Vitest + React Testing Library:
- Components and forms.
- Loading, empty, success, and error states.
- Authentication behavior.
- Document upload interactions.
- Chat message and citation rendering.
- API client error handling.

### End-to-end tests
Use Playwright for critical flows once the integrated application is stable:
1. Register/login.
2. Create knowledge base.
3. Upload a document.
4. Wait for ingestion.
5. Ask a question.
6. Verify answer and citations.
7. Verify unauthorized access is rejected.

### RAG quality evaluation
Keep AI quality evaluation separate from ordinary software tests. Begin with 30–50 curated examples containing:
- Question.
- Expected answer or key facts.
- Expected supporting document/page/chunk.
- Knowledge-base scope.
- Expected refusal/insufficient-evidence cases.

Evaluate:
- Context precision and recall.
- Faithfulness/grounding.
- Answer relevance.
- Correctness against reference facts.
- Citation correctness.
- Latency and token usage where available.

LLM-based evaluation can consume provider quota; keep runs explicit and cost-controlled.

## Completion rule

Every implementation issue must state the relevant test cases and commands. A task is not done because a developer manually clicked through one happy path.
