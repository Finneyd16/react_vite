<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Repo snapshot

This is a small React + Vite front-end project. Key facts:

- Entrypoint: `src/main.jsx` renders `App`.
- UI: plain React components under `src/` (e.g. `App.jsx`, `Display.jsx`, `pages/*`, `Components/*`).
- Build/dev: Vite (see `package.json` scripts: `dev`, `build`, `preview`).

## What to do first (high value tasks)

- Preserve `index.html` and `src/main.jsx` bootstrapping when making structural changes.
- Reuse existing component files under `src/Components` and `src/pages` for new UI work.
- Respect Bootstrap import in `src/main.jsx` (project uses Bootstrap 4.6 CSS and JS).

## Project conventions and patterns (observable)

- Function components with default exports (e.g. `App.jsx`, `Components/Api.jsx`). Keep this consistent.
- Styling: a mix of global CSS (`index.css`, `App.css`) and CSS modules (`*.module.css`). Prefer CSS modules for new component-local styles.
- Routing: `react-router-dom` is a dependency. If adding routes, update `App.jsx` entry and add new `pages/*` components.

## Developer workflows (how to run & build)

- Start dev server with HMR:

```powershell
npm run dev
```

- Produce a production build:

```powershell
npm run build
```

- Preview a production build locally:

```powershell
npm run preview
```

- Lint JavaScript files with the repo ESLint config:

```powershell
npm run lint
```

Note: the project uses Vite and the `@vitejs/plugin-react` plugin configured in `vite.config.js`.

## Common pitfalls and code smells found in this repo

- Duplicate imports or small syntax issues: `src/Components/Api.jsx` currently contains duplicated import lines and an empty component — fix by removing the duplicate import and implementing or deleting the unused component.
- Ensure React imports match usage — this project uses React 19 and JSX runtime; prefer importing named hooks directly (e.g. `import React, { useState } from 'react'`) only when used.

## Integration points & external deps

- Bootstrap (CSS + JS) is imported in `src/main.jsx` and affects global layout and components.
- `react-router-dom` is installed; look for future routing additions in `App.jsx` or new `pages/*` files.
- `styled-components` is available — if introducing CSS-in-JS, prefer scoping it to new components and avoid mixing with module CSS for the same component.

## Guidance for PRs and edits

- Keep changes small and focused: modify one component or page per PR.
- When adding routes, update `App.jsx` and add navigation in `Components/Header.jsx` if present.
- Run `npm run lint` before committing. If adding dependencies, update `package.json` accordingly.

## Examples (from this codebase)

- Fixing `src/Components/Api.jsx`: remove duplicate `import React` line and export a single functional component.
- Adding a new page: create `src/pages/Example.jsx`, add a route in `App.jsx`, and add a link in the header component.

If something here is unclear or you want me to expand a section (for tests, CI, or component patterns), tell me which area to improve.
