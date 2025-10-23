
# Blog Apuntes

Modern SvelteKit blog/notes app with TypeScript, TailwindCSS, mdsvex, modular components, and smooth view transitions.

## Features

- **SvelteKit**: File-based routing, SSR, and view transitions.
- **TypeScript**: Type safety throughout the codebase.
- **TailwindCSS**: Custom theme, typography, and accent colors.
- **mdsvex**: Markdown rendering for posts and notes.
- **Modular Components**: BlogPost, PostHeader, PostContent, BackToTopButton for maintainable UI.
- **Dynamic Routing**: Supports `/blog/[category]/[slug]` for posts.
- **View Transitions**: Smooth navigation animations using SvelteKit's API.
- **ESLint & Prettier**: Code quality and formatting enforced.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

- `src/routes/` — SvelteKit pages and layouts
- `src/lib/components/` — Modular Svelte components
- `src/lib/types/` — TypeScript types
- `.github/copilot-instructions.md` — Project setup checklist

## Documentation

See `.github/copilot-instructions.md` for setup and development best practices.
