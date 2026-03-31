# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ARCA** is a psychology clinic management system (Brazilian Portuguese UI) built as a Turborepo monorepo with two apps:

- `apps/backend` — NestJS REST API on port 3333
- `apps/frontend` — Next.js 15 web app on port 3000

Domain: patient waitlist, therapy sessions (atendimentos), medical records (prontuários), audit logging, and role-based access for estagiários (interns) and supervisors.

## Commands

### Root (runs both apps via Turborepo)

```bash
npm run dev          # Start backend (port 3333) + frontend (port 3000) concurrently
npm run build        # Build all apps
npm run lint         # Lint all apps
npm run format       # Prettier format all TS/TSX/MD files
npm run check-types  # TypeScript type checking across all apps
```

### Backend only

```bash
npm run -w backend start:dev      # Watch mode dev server
npm run -w backend test           # Run unit tests
npm run -w backend test:watch     # Watch mode tests
npm run -w backend test:cov       # Coverage report
npm run -w backend test:e2e       # E2E tests (uses test/jest-e2e.json)
npm run -w backend db:seed        # Seed database
```

To run a single test file:

```bash
cd apps/backend && npx jest src/path/to/file.spec.ts
```

### Database (from `apps/backend/`)

```bash
npx prisma migrate dev            # Apply migrations
npx prisma migrate deploy         # Deploy to production
npx prisma studio                 # Open Prisma Studio UI
npx prisma generate               # Regenerate Prisma client
```

## Architecture

### Backend (NestJS)

Standard NestJS modular architecture. Each domain is a self-contained module in `apps/backend/src/`:

| Module            | Purpose                                                   |
| ----------------- | --------------------------------------------------------- |
| `auth/`           | JWT + Local strategies, Passport guards, login endpoint   |
| `users/`          | User CRUD (estagiários/supervisors)                       |
| `waitlist/`       | Patient waiting list (lista de espera)                    |
| `session/`        | Therapy sessions (atendimentos)                           |
| `medical_record/` | Session records (prontuários) with encryption             |
| `audit/`          | Audit log — global interceptor captures all operations    |
| `crypto/`         | AES encryption service used by medical_record             |
| `pdf/`            | PDF generation from templates                             |
| `prisma/`         | PrismaService (extends PrismaClient with lifecycle hooks) |

**Key patterns:**

- All input validation via class-validator DTOs
- `AuditInterceptor` is registered globally — logs user, action, entity, IP, timestamp to `LogAuditoria` table
- Role-based access controlled via `roleId` on `Usuario` model
- Medical record `conteudo` field is encrypted at rest using `CryptoService`

**Medical record types** (DTOs in `medical_record/dto/`):

- `triagem` — initial triage record
- `evolucao` — session evolution note
- `alta` — discharge report
- `encaminhamento` — referral

### Frontend (Next.js 15 App Router)

Authentication uses **NextAuth v4** with a Credentials provider that calls the backend `/auth/login` endpoint. The JWT token from the backend is stored in the NextAuth session.

- `middleware.ts` — protects `/dashboard/*` routes, enforces role-based redirects
- `lib/api.ts` — Axios instance that automatically injects `Authorization: Bearer {token}` from NextAuth session
- `app/api/auth/[...nextauth]/route.ts` — NextAuth handler
- `components/ui/` — shadcn/ui components (new-york style, neutral base, lucide icons)

**Auth flow:** Login form → NextAuth CredentialsProvider → backend `/auth/login` → JWT stored in session → Axios interceptor adds token to all API calls.

**Route structure:**

```
app/
├── login/                          # Public login page
├── lista-espera/
│   ├── cadastro/                   # Public patient self-registration
│   └── consulta/                   # Public waitlist position check
└── dashboard/                      # All protected (requires auth)
    ├── agenda/                     # Calendar view
    ├── atendimento/
    │   └── cadastro/               # Create new session
    ├── auditoria/                  # Audit logs viewer
    ├── fluxo-atendimento/          # Session workflow
    ├── lista-espera/               # Waitlist management
    │   └── cadastro/
    ├── pacientes/[id]/             # Patient detail
    ├── perfil/                     # User profile
    ├── relatorios/
    │   ├── psicoterapia/[id]/      # Psychotherapy report (edit, aprovar)
    │   └── triagem/[id]/           # Triage report (edit, aprovar)
    ├── unauthorized/               # Access denied page
    └── usuarios/
        └── cadastro/               # Create user
```

**Auth components** (`components/auth/`):

- `ConditionalRender.tsx` — renders children only if user has required role
- `ProtectedRoute.tsx` — client-side route guard
- `withRoleProtection.tsx` — HOC for role-based page protection

### Database Schema (Prisma / PostgreSQL)

Core entities:

- `Usuario` — clinic users with `roleId`, `CRP` (psychologist registration number), `isActive`
- `ListaEspera` — patients on the waiting list with demographic data
- `Atendimento` — therapy session linking an intern + supervisor + patient
- `Prontuario` — session notes/medical record attached to an `Atendimento` (content encrypted)
- `LogAuditoria` — immutable audit trail with action type, affected entity, IP, JSON details

Several lookup/enum tables: `Role`, `Genero`, `Etnia`, `Escolaridade`, `StatusListaEspera`, `StatusAtendimento`, `TipoAtendimento`, `StatusProntuario`, `TipoProntuario`.

## Domain Knowledge

### Clinical Workflow (Fluxo de Atendimento)

Understanding this flow is essential — the entire system models it:

1. **Em Espera** — Patient self-registers on the public waitlist. Receives a random UUID to check their position. CPF prevents duplicate registrations.
2. **Em Triagem** — Secretary schedules a triage session (`TipoAtendimento = triagem`). Intern fills the triage report (`Prontuario` type `triagem`). Supervisor reviews and decides:
   - **Encaminhamento interno** → patient moves to psychotherapy queue
   - **Encaminhamento externo** → referral document (PDF) generated, patient exits system
3. **Triagem Aprovada / Aguardando Psicoterapia** — Patient approved for psychotherapy, waiting for session scheduling.
4. **Em Psicoterapia** — Secretary schedules recurring psychotherapy sessions. After each session, intern fills an evolution report (`evolucao`). Supervisor approves each report.
5. **Alta / Encaminhado** — Supervisor generates discharge (`alta`) or referral (`encaminhamento`) document (PDF), patient exits the system.

### User Roles and Access Control

Four roles with decreasing privileges (stored as `roleId` on `Usuario`):

| Role         | PT Name     | Key Permissions                                                                    |
| ------------ | ----------- | ---------------------------------------------------------------------------------- |
| `ADMIN`      | Coordenador | Full access including audit logs, fluxo-atendimento dashboard, user management     |
| `SECRETARIO` | Secretário  | Schedule sessions, manage waitlist, view fluxo-atendimento, manage patients        |
| `SUPERVISOR` | Supervisor  | Approve/reject intern reports, generate alta/encaminhamento, see own patients only |
| `ESTAGIARIO` | Estagiário  | Fill session reports, see own patients only                                        |

Critical access rules:

- **Audit logs** (`/dashboard/auditoria`): Coordinator only
- **Fluxo de atendimento** (`/dashboard/fluxo-atendimento`): Coordinator + Secretary only
- **Patient visibility**: Coordinator/Secretary see all patients; Supervisor/Estagiário see only their assigned patients
- **User creation**: A user can only create users with a role equal to or lower than their own
- **Waitlist**: All internal roles can read/edit; public can self-register and check position

### Regulatory Context

- The system follows **CFP Resolution n.º 06/2019** for psychological document formats
- **LGPD** (Brazilian data protection law) compliance is enforced via the `LogAuditoria` table
- Supervisors must have a **CRP** (Conselho Regional de Psicologia registration number) stored on their user record
- The `pdf/` module generates official documents (PEP, alta, encaminhamento) that follow CFP standards

## Environment Variables

**Backend** (`apps/backend/.env`):

```
DATABASE_URL=           # Supabase connection pooling URL
DIRECT_URL=             # Direct URL for Prisma migrations
JWT_SECRET=
JWT_TTL=5h
JWT_TOKEN_AUDIENCE=arca_api
JWT_TOKEN_ISSUER=arca_server
ENCRYPTION_KEY=         # AES key for medical record encryption
```

**Frontend** (`apps/frontend/.env`):

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
API_URL=http://localhost:3333   # or http://arca_backend:3333 in Docker
```

## Prisma Notes

The repo has a `prisma.config.ts` at `apps/backend/prisma.config.ts` (Prisma 6 config format). Migrations live in `apps/backend/prisma/migrations/`. Always run Prisma CLI commands from `apps/backend/`.
