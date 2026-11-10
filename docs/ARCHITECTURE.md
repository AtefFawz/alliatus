# Architecture

Alliatus is a static React application built with Vite. The code is organized by feature, with shared layout and UI primitives separated from product-specific sections.

## High-level structure

```text
App
├── Header
│   ├── ThemeToggle
│   └── MobileNav
├── main
│   ├── Hero
│   ├── About
│   ├── Works
│   ├── Circle principles
│   ├── Guidance model
│   ├── Facilitator sample profiles
│   ├── Illustrative Pricing
│   ├── FAQ
│   └── Apply
│       └── ApplyForm
└── Footer
```

## Feature boundaries

### `features/landing`

Owns the landing-page sections, typed copy, and pricing calculations. Components remain presentational; data and pure calculation logic live outside the JSX. The facilitator section uses four explicitly fictional sample profiles and optimized local portraits to demonstrate the intended layout without implying a real staff directory.

### `features/apply`

Owns the application schema and form workflow:

1. `schema.ts` defines the fields and validates untrusted form values with Zod.
2. `apply-action.ts` maps `FormData` into typed values and field errors.
3. `submit.ts` is the network boundary. It only sends to a valid HTTPS endpoint (or localhost HTTP in development).
4. `apply-form.tsx` owns pending, validation-error, live-success, and demo-success UI states.

The default mode is deliberately non-persistent. When no endpoint is configured, the user sees an explicit preview confirmation. No personal data leaves the browser.

### `features/theme`

A small external store built on `useSyncExternalStore` synchronizes the selected preference with local storage, the browser's system color preference, and other tabs. The inline bootstrap in `index.html` applies the theme before the first paint.

### `components`

Layout components own page-level navigation and footer composition. UI primitives centralize accessible form controls, buttons, containers, headings, and reveal motion.

## State and side effects

- React state is local to the component or feature that owns it.
- Pricing is pure derived state; no duplicated price values are stored.
- Theme persistence is isolated in the theme store.
- Form network behavior is isolated in the submit adapter.
- Scroll-spy listeners are scheduled through `requestAnimationFrame` and cleaned up on unmount.

## Quality and accessibility

Strict TypeScript, ESLint, Prettier, Vitest, semantic landmarks, visible focus styles, keyboard-operable native FAQ disclosures, reduced-motion settings, and automated CI form the baseline quality checks.
