# aryaaji.com

Portfolio and lead-generation site of Arya Aji Kusuma: Chrome extensions, internal tools and automation.

- **Stack:** SvelteKit 2 + Svelte 5, prerendered with `adapter-static`, deployed to GitHub Pages by `.github/workflows/deploy.yml`, served through Cloudflare.
- **Design:** Catppuccin (Latte in light mode, Mocha in dark mode), Bricolage Grotesque + Atkinson Hyperlegible Next. Product context lives in `PRODUCT.md`; visual system in `DESIGN.md`.
- **Content:** projects in `src/lib/data/work.ts`, services and process in `src/lib/data/services.ts`, notes in `src/lib/data/notes.ts` plus one route per note under `src/routes/notes/`.

## Develop

```sh
npm install
npm run dev
npm run build   # outputs to build/
```

The contact form posts to Web3Forms. Set `PUBLIC_WEB3FORMS_KEY` in `.env` locally and as a repository secret for the deploy workflow.

## Design tooling

[Impeccable](https://impeccable.style) is installed as a project skill in `.claude/skills/impeccable` (Claude Code: `/impeccable critique`, `/impeccable audit`, …).
