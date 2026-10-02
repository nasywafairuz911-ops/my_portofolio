<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — Agent Notes

Single-page Next.js 16 portfolio (React 19, Tailwind CSS v4). No monorepo, no tests, no CI.

## Commands

- `npm run dev` — dev server (`next dev`, regenerates the block above; commit it if it changes)
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — eslint (Flat config + `eslint-config-next`)
- `npx tsc --noEmit` — typecheck (no script defined; tsconfig is `strict`, `noEmit`, `@/*` → `./src/*`)

## Structure

- `src/app/layout.tsx` — root layout, `next/font` Geist, metadata, Navbar + footer
- `src/app/page.tsx` — only route; anchor sections (`#tentang`, `#skill`, `#proyek`, `#pengalaman`, `#kontak`)
- `src/app/globals.css` — Tailwind v4 entry (`@import "tailwindcss"`, `@theme inline`); dark mode via `dark:` classes / `prefers-color-scheme`
- `src/components/Navbar.tsx` — only `"use client"` component (mobile menu state); everything else is Server Components
- `src/data/portfolio.ts` — all page content (profile, socials, skills, projects, experience); edit here, not in JSX
- `public/` — default `create-next-app` SVGs only; `profile.avatar` (`/avatar.svg`) referenced in data does not exist yet

## Conventions

- Import alias `@/*` maps to `src/*`.
- Content is Indonesian; keep it that way unless asked otherwise.
- Styling is Tailwind utilities inline; PostCSS uses `@tailwindcss/postcss` (v4, no `tailwind.config.js`).
