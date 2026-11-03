# Developer Onboarding

Welcome to DocuMind AI. This guide helps a new contributor prepare a local development environment.

## 1. Before starting

Required:
- Windows 10/11 or another supported development OS.
- Git.
- Node.js 20.20.2 baseline for the current team setup.
- npm 10.8.2 baseline.
- VS Code or another TypeScript-capable editor.
- PostgreSQL 17 local instance; pgAdmin can be used to administer it.
- GitHub access to the DocuMind AI repository.

The project currently targets local development without Docker or a GPU.

## 2. Clone the repository

Use the actual repository URL shared by the repository owner:

```powershell
git clone <REPOSITORY_URL>
cd documind-ai
```

Do not copy another developer's `.env` file. Create your own local environment file from the example.

## 3. Frontend setup

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

Run the frontend build:

```powershell
npm run build
```

Frontend test scripts will be added when Vitest is configured. Do not assume tests are available until the scripts exist.

## 4. Backend setup

```powershell
cd ..\backend
npm install
```

Create a local environment file:

```powershell
Copy-Item .env.example .env
```

Only do this if `.env` does not already exist. Edit `.env` with your own local values.

The initial example configuration is expected to include:

```env
NODE_ENV=development
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

Start the backend once the `src/server.ts` implementation is present:

```powershell
npm run dev
```

Check the health endpoint if it has been implemented:

```powershell
Invoke-RestMethod http://localhost:5000/api/v1/health
```

Run available checks:

```powershell
npm run typecheck
npm run build
npm test
```

Some scripts may not exist yet in the current branch. Check `package.json` before running them.

## 5. PostgreSQL

Use pgAdmin to connect to the local PostgreSQL 17 server. The planned application database name is `documind_ai`.

The database may not yet be created or connected to the backend. Confirm the current migration/setup issue before assuming database integration is complete.

Never put database passwords in source code or commit `.env`.

## 6. AI provider credentials

Groq credentials and any vector-store credentials must be created and configured individually by each developer when the relevant integration is implemented. Use `.env.example` to document variable names only; never put real values there.

Do not enable paid usage or overages. Confirm current provider quotas and model availability before relying on a free tier.

## 7. First contribution

1. Read `PROJECT_OVERVIEW.md`, `TECH_STACK.md`, `SYSTEM_ARCHITECTURE.md`, and `TECHNICAL_DECISIONS.md`.
2. Open the GitHub Project board.
3. Pick an issue in **Ready** assigned to you.
4. Read its acceptance criteria and dependencies.
5. Create a feature branch.
6. Implement and test the task.
7. Open a pull request linked to the issue.
8. Request review from the other developer.
9. Address feedback and merge only after required checks pass.

## 8. Troubleshooting

- If npm reports a peer-dependency conflict, do not immediately use `--force` or `--legacy-peer-deps`; share the full error and resolve the version conflict.
- If a package does not support Node 20, do not independently upgrade Node; discuss a compatible version or a team-wide runtime change.
- If the API cannot connect to PostgreSQL, verify service status, database name, host, port, username, password, and connection string.
- If environment validation fails, inspect variable names and formats; do not bypass validation to make the server start.
- If a test needs external services, mock the provider for deterministic unit/integration tests. Keep live-provider tests separate and optional.

## 9. Definition of ready

A task is ready when its goal, scope, acceptance criteria, dependencies, and owner are clear.

## 10. Definition of done

A task is done when:
- Acceptance criteria are met.
- Relevant tests pass.
- Typecheck/lint/build checks pass as applicable.
- API and technical documentation are updated.
- A teammate has reviewed the pull request.
- The change is merged and the issue is closed.
