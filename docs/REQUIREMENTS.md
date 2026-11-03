# Product Requirements

Status labels: **Planned** means intended but not implemented/verified; **Decision pending** means the team must decide before implementation.

## Functional requirements

### Identity and access
- Users can register, log in, and log out.
- Authenticated users can retrieve their own profile.
- Users cannot access another user's knowledge bases, documents, conversations, or vectors.
- Passwords must be securely hashed; secrets must not be stored in source control.

### Knowledge bases
- Users can create, list, view, update, and delete their knowledge bases.
- A knowledge base belongs to exactly one user unless shared access is explicitly designed later.
- Deleting a knowledge base must have a defined document/vector cleanup policy.

### Documents
- Initial supported formats: PDF, DOCX, TXT, Markdown.
- Validate file type, extension, size, and actual content where practical.
- Track ingestion status and useful failure details.
- Preserve source metadata such as document name and page number where the parser provides it.
- Support document deletion and re-indexing.
- OCR for scanned PDFs is a later enhancement, not a first milestone requirement.

### Question answering
- Questions are scoped to a selected knowledge base.
- Answers should use retrieved evidence from that knowledge base.
- Citations should link answers to document names, page numbers where available, and excerpts.
- Follow-up questions should use conversation context without leaking data across users or knowledge bases.
- When evidence is insufficient, the system should clearly communicate that limitation.
- Multi-document comparison is planned after the basic RAG flow works.

### RAG diagnostics
- Show retrieved chunks and their source metadata.
- Show retrieval/reranking scores when the underlying component provides meaningful scores.
- Show workflow stage outcomes and retry/fallback reasons.
- Do not label an arbitrary score as calibrated confidence.

## Non-functional requirements

- TypeScript strict mode for application code.
- Validate untrusted request data at runtime (Zod).
- Centralized error handling and structured, non-sensitive logging.
- Secure upload handling and authorization checks.
- Automated unit and integration tests for backend modules.
- Frontend component tests and critical user-flow E2E tests.
- API contracts documented with OpenAPI/Swagger.
- AI quality assessed using a curated evaluation dataset, separately from deterministic software tests.
- Local development must not require a GPU or Docker.
- No paid services or paid usage without explicit team approval.

## Initial acceptance principles

A feature is not complete merely because it works once on a developer's machine. A task should include:
1. Implementation and type checks.
2. Relevant automated tests.
3. Error and edge-case handling.
4. API/documentation updates where applicable.
5. Review and merge through a pull request.
6. A reproducible verification note in the issue or pull request.
