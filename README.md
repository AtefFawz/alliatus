# Alliatus — Mastermind Circle Concept

Alliatus is a polished front-end product concept for a curated mastermind-circle community. The experience explores how small groups, thoughtful facilitation, and shared accountability could help independent professionals make progress.

> **Portfolio/demo notice:** This repository is a front-end concept, not a live membership business. Prices and plan features are illustrative. No payments, accounts, matchmaking, or live sessions are provided. The application form runs in explicit demo mode unless an HTTPS submission endpoint is configured.

## Product experience

- Editorial landing page with a distinct warm-neutral and golden-yellow visual system.
- Responsive navigation with scroll-aware active states and an accessible mobile menu.
- Light, dark, and system theme support, persisted across visits and synchronized across tabs.
- Scroll reveal and staggered motion using Motion, with reduced-motion support.
- Product story, proposed member journey, circle principles, guidance model, illustrative plans, and concept FAQ.
- Accessible application form with Zod validation, field-level errors, pending state, a honeypot, and a pluggable HTTPS endpoint.
- Demo form feedback that clearly states no personal information was transmitted or saved.
- Self-hosted Inter and Playfair Display fonts, optimized WebP assets, and metadata for sharing.

## Stack

- React 19 + TypeScript (strict mode)
- Vite 7
- Tailwind CSS v4 via the Vite plugin
- Motion (`motion/react`)
- Zod 4
- Vitest
- ESLint 9 + Prettier
- GitHub Actions for CI and GitHub Pages deployment

## Getting started

Node.js 22 is used by the project (`.nvmrc`). With nvm:

```bash
nvm install
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run TypeScript checks and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run strict TypeScript checks |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check Prettier formatting |
| `npm test` | Run unit tests with Vitest |
| `npm run check` | Run lint, formatting, typecheck, tests, and build |

## Application form integration

By default, the form is in **demo mode**. It validates the fields and displays a demo confirmation, but does not send or store the submitted values.

To enable real submission, set `VITE_APPLY_ENDPOINT` in `.env.local` to an HTTPS endpoint you control:

```env
VITE_APPLY_ENDPOINT=https://your-domain.example/api/applications
```

The endpoint receives a JSON `POST` body with the validated fields:

```json
{
  "name": "Alex Example",
  "email": "alex@example.com",
  "role": "freelancer",
  "stage": "growing",
  "goal": "I want structured peer support while I grow my independent practice.",
  "commitment": "on"
}
```

A successful 2xx response is treated as submitted. The endpoint must implement server-side validation, abuse prevention, privacy disclosures, and secure storage/retention. Do not put API secrets in `VITE_*` variables; Vite exposes them in the browser bundle. Plain HTTP is only accepted for localhost during development.

## Architecture

```text
src/
├── components/
│   ├── layout/                   # Header, mobile navigation, footer
│   ├── motion/                   # Reusable reveal primitive
│   └── ui/                       # Buttons, fields, containers, headings
├── features/
│   ├── apply/                    # Schema, form action, submit adapter, tests
│   ├── landing/                  # Page sections, typed content, pricing logic
│   └── theme/                    # Theme preference store and toggle
├── lib/                          # Site config, utilities, active-section hook
└── assets/                       # Self-hosted fonts and optimized imagery
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for module boundaries and [docs/REFACTOR.md](docs/REFACTOR.md) for the engineering changes made in this version.

## Deployment

The included GitHub Actions workflow deploys `dist/` to GitHub Pages when changes are pushed to `main`. In the workflow, `BASE_PATH` is set to `/<repository-name>/` so assets resolve correctly for a project site. For Vercel, Netlify, or a root-domain static host, use the default `/` base path.

## Content and launch checklist

Before presenting this as a real service, replace the illustrative plan amounts and features, publish real facilitator information only with consent, add verified member stories, configure the application endpoint, publish a privacy policy and terms, and connect a real payment/membership workflow. The current UI intentionally avoids fabricated ratings, member counts, testimonials, or staff profiles.

## License

MIT. See [LICENSE](LICENSE).
