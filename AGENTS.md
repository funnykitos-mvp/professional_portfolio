# AGENTS.md

## Cursor Cloud specific instructions

This repo is a static mentoring marketing site (vanilla HTML/CSS/JS) served by Vite. The React scaffolding under `src/` is **not** wired into the root `index.html` (no `#root` / `main.jsx`), so `npm run dev` serves the mentoring page, not the React app.

### Commands

Standard scripts are in `package.json`: `npm run dev`, `npm run lint`, `npm run build`, `npm run preview`. There is **no test suite**.

### Dev server gotchas

- `vite.config.js` sets `base: '/professional_portfolio/'`. Local URLs must include that path, e.g. `http://localhost:5173/professional_portfolio/`.
- Core UI interactions to smoke-test: language switcher (`#languageSelect` → EN/ES/PT via `script.js` i18n) and contact CTAs (`#contact`, `mailto:funnykitos@gmail.com`).
- No backend, database, Docker, or secrets are required for local development.
