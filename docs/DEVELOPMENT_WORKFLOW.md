# Development Workflow

## 1. Branch strategy

Use `main` as the stable integration branch. Do not develop directly on `main`.

Branch naming:
- `feature/<short-description>`
- `fix/<short-description>`
- `test/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

Examples:
- `feature/backend-health-api`
- `feature/knowledge-base-crud`
- `feature/document-upload`
- `fix/pdf-page-metadata`
- `test/rag-retrieval`

## 2. Daily workflow

Before starting:
```powershell
git switch main
git pull origin main
git switch -c feature/<issue-short-name>
```

While working:
- Keep a branch focused on one issue or a tightly related set of changes.
- Commit logical units of work.
- Do not commit secrets, local uploads, build output, or dependencies.
- Run relevant tests and type checks.

Before pushing:
```powershell
git status
git diff --check
git add <specific-files>
git commit -m "feat: describe the change"
git push -u origin HEAD
```

Use clear commit prefixes:
- `feat:`
- `fix:`
- `test:`
- `docs:`
- `refactor:`
- `chore:`

## 3. Pull requests

Every feature/fix/documentation change should use a pull request unless the team explicitly agrees otherwise for a trivial repository-maintenance change.

PR description should include:
- Linked issue (`Closes #123`).
- What changed and why.
- Important implementation decisions.
- How it was tested, with commands and results.
- Screenshots for meaningful UI changes.
- API/OpenAPI changes where relevant.
- Known limitations or follow-up issues.

## 4. Reviews

The non-author developer reviews the PR where practical.

Review for:
- Correctness and acceptance criteria.
- Security and authorization.
- Error handling and edge cases.
- Type safety and maintainability.
- Tests and meaningful assertions.
- API compatibility.
- Secret or private-data leakage.
- Documentation updates.

A review is not just approval of formatting. Ask questions when the design is unclear.

## 5. Merge policy

- Require a passing CI check once CI is configured.
- Resolve review comments.
- Prefer squash merge for a focused feature branch, unless the team wants to preserve individual commits.
- Delete merged branches.
- Pull the updated `main` before starting the next issue.

## 6. Coordination

- Keep the GitHub Issue as the status record.
- Record blockers and decisions in issue comments.
- Agree API request/response contracts before parallel frontend/backend implementation.
- Avoid both developers editing the same core files simultaneously.
- Integrate small changes frequently rather than waiting for a large end-of-phase merge.
- Use short pairing sessions for cross-cutting changes.

## 7. Security and cost controls

- Never commit `.env`, API keys, credentials, private documents, or personal data.
- Use `.env.example` with placeholder values only.
- Do not enable paid service usage without explicit agreement.
- Keep uploaded files and local databases out of Git.
- Review dependency changes and package engine compatibility.
