<div align="center">

# arya-aji.github.io

**Personal portfolio & blog — built with SvelteKit 2, Svelte 5, and the Catppuccin color system.**

[Live Site](https://arya-aji.github.io) · [Projects](https://arya-aji.github.io/projects) · [Blog](https://arya-aji.github.io/posts)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| **🎨 Catppuccin Theming** | 4 theme flavors (Latte, Frappé, Macchiato, Mocha) × 14 accent colors — live-switchable with `localStorage` persistence |
| **🌐 Bilingual Blog** | Markdown posts with Indonesian 🇮🇩 / English 🇬🇧 toggle, powered by MDSvex |
| **🗺️ Interactive Map** | Leaflet.js map pinpointing Jakarta with real-time local clock |
| **📂 Project Showcase** | Paginated gallery with featured carousel, tags, GitHub & live-demo links |
| **⚡ Static Site** | Pre-rendered to pure HTML/CSS/JS via `adapter-static` — fast, cacheable, zero runtime server |
| **🖥️ Responsive Design** | Mobile-first layout with breakpoints at 768 px and 640 px |
| **🧩 Glassmorphism UI** | Frosted-glass cards, animated background blobs, and smooth page transitions |

## 🛠️ Tech Stack

- **Framework** — [SvelteKit 2](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev) (Runes)
- **Language** — TypeScript 5
- **Build Tool** — Vite 7
- **Markdown** — [MDSvex](https://mdsvex.pngwn.io) (`.md` files with Svelte components)
- **Styling** — [Catppuccin](https://catppuccin.com) CSS variables · [Montserrat](https://fontsource.org/fonts/montserrat) via Fontsource
- **Icons** — [Lucide](https://lucide.dev)
- **Maps** — [Leaflet](https://leafletjs.com)
- **Deployment** — GitHub Actions → GitHub Pages

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/    # Navbar, Hero, Footer, DashboardGrid, FeaturedProjects …
│   ├── content/       # Markdown blog posts (bilingual frontmatter)
│   ├── data/          # Project metadata & tag color mappings
│   ├── stores/        # Theme, accent, and background-effect stores
│   ├── styles/        # global.css + catppuccin.css
│   └── utils/         # Blog-post fetcher with language fallback
├── routes/
│   ├── +page.svelte        # Home — hero, featured projects, dashboard grid
│   ├── about/              # Biography & photo gallery
│   ├── posts/              # Blog listing + [slug] dynamic pages
│   └── projects/           # Full project gallery with pagination
└── static/
    ├── posts/              # Blog post images & covers
    └── photo.png           # Profile photo
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20

### Install & Run

```bash
# Clone
git clone https://github.com/arya-aji/arya-aji.github.io.git
cd arya-aji.github.io

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it locally.

### Build for Production

```bash
npm run build    # outputs to /build
npm run preview  # preview the production build
```

### Type Checking

```bash
npm run check
```

## 🚢 Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Build** — `npm ci` → `npm run build` (Node 20)
2. **Deploy** — Uploads `/build` to GitHub Pages

The site is served as a fully static site — no server required.

## 📝 Writing Blog Posts

Add a new `.md` file in `src/lib/content/posts/`:

```markdown
---
title_id: "Judul dalam Bahasa Indonesia"
title_en: "Title in English"
summary_id: "Ringkasan singkat"
summary_en: "Short summary"
date: "2026-04-02"
tags:
  - svelte
  - web-dev
---

Your markdown content here. You can embed Svelte components too!
```

Place any post images in `static/posts/<slug>/`.

## 📄 License

© 2026 Arya Aji Kusuma. All rights reserved.
