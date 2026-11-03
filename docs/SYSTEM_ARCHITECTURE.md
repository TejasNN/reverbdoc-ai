# System Architecture

## 1. High-level architecture

```text
React + TypeScript frontend
          |
          | HTTPS / REST API
          v
Node.js + Express + TypeScript
  |          |             |
  |          |             +--> AI/RAG orchestration (LangChain.js / LangGraph.js)
  |          |                         |
  |          |                         +--> Groq LLM inference
  |          |                         +--> Local embedding model
  |          |                         +--> Dense vector retrieval
  |          |                         +--> BM25 sparse retrieval
  |          |                         +--> Reranker (later)
  |          |
  |          +--> Local file storage (development)
  |
  +--> PostgreSQL (users, knowledge bases, documents, conversations, messages,
  |                citations, evaluations and application metadata)
  |
  +--> Vector store (Pinecone candidate; pgvector fallback)
```

## 2. Architectural boundaries

### Frontend
Responsible for presentation, client-side state, form validation for usability, API calls, chat experience, citations, and diagnostic visualization. Backend authorization and validation remain authoritative.

### Backend API
Responsible for authentication, authorization, request validation, business rules, file handling, persistence, and exposing stable API contracts.

### Document ingestion
Logical stages:
1. Validate upload.
2. Store original file.
3. Parse supported format.
4. Normalize/clean extracted content.
5. Split into chunks while retaining source metadata.
6. Generate embeddings.
7. Index vectors and sparse-search data.
8. Update document ingestion status.

### Query pipeline
Planned stages:
1. Validate user, conversation, and knowledge-base access.
2. Resolve question and relevant conversation context.
3. Optionally rewrite/expand the query.
4. Retrieve dense and sparse candidates.
5. Merge and deduplicate candidates.
6. Rerank candidates (later enhancement).
7. Grade context relevance.
8. Generate an answer from selected evidence.
9. Check grounding and citation support.
10. Retry a bounded number of times or return an insufficient-evidence response.
11. Persist the conversation, answer, and citations.

## 3. Persistence responsibilities

PostgreSQL is the application system of record. Planned entities:
- User
- KnowledgeBase
- Document
- Conversation
- Message
- Citation
- Evaluation

Vector storage contains embeddings and retrieval metadata. It must not become the only source of truth for application ownership or document lifecycle.

## 4. Security boundaries

- Every knowledge-base/document/conversation operation must verify ownership or an explicitly granted permission.
- Retrieval filters must be scoped to the authorized user and knowledge base.
- Never trust client-supplied user IDs as authorization.
- Do not expose local file paths or raw internal errors to clients.
- Do not log API keys, credentials, document contents, or sensitive user data.
- Upload size and type limits must be enforced server-side.

## 5. Decisions still pending

- Pinecone vs pgvector final selection.
- Exact embedding model and embedding dimensions.
- Exact LLM model/provider configuration and quota handling.
- Reranker choice and acceptable latency.
- Authentication token/cookie strategy and refresh behavior.
- File retention/deletion policy.
- Background processing queue introduction and timing.
- Streaming transport for chat (SSE vs WebSocket).
- Production deployment architecture.
