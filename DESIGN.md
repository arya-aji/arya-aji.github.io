---
name: Arya Aji Kusuma
theme: Monochrome editorial (v3)
reference: https://www.noorrehman.me/
tokens: src/lib/styles/tokens.css
---

# Design system: aryaaji.com

A white page, black ink and one oversized name. The layout follows the reference portfolio (noorrehman.me): giant two-word name with the portrait standing over it, a floating pill nav, numbered rows, project cards with a TLDR, and a big contact headline.

## Colour

All colour goes through `src/lib/styles/tokens.css`. Token names are kept from v2, so inner pages pick up the theme automatically.

| Role | Token | Value |
| --- | --- | --- |
| Page | `--color-paper` | #ffffff |
| Wells, thumbnails | `--color-paper-2`, `--color-well` | #f6f6f6, #f4f4f4 |
| Ink | `--color-ink`, `--color-ink-2`, `--color-muted` | #0a0a0a, #3d3d3d, #6e6e6e |
| Hairlines | `--color-rule` | #e6e6e6 |
| Action | `--color-accent` | same as ink (black buttons, black links) |
| Available / live | `--color-live` | #22c55e, only for the status dot and "Live" badges |

## Type

- Display: **Archivo Variable**, weight 900, width axis 112 to 125, tracking about -0.04em. Used for the mega name, section headings and card titles (800).
- Text: **Inter Variable**, 400 body, 500 to 600 labels.
- Eyebrows: Inter 500, uppercase, letter-spacing 0.32em, muted, above every section heading.
- The hero name: first word solid, second word outlined (`-webkit-text-stroke`).

## Components

- **Floating pill nav** (`Header.svelte`): live status chip (pulsing green dot, "Available", hairline divider, muted "Replies in 24h"), plain single-line links, black "Let’s talk" button. The reply promise hides under 64rem; links collapse to a menu button under 52rem.
- **Buttons**: black filled pill and outlined ghost pill; `.arrow` adds a north-east arrow. `.sm` for card actions.
- **Numbered rows** (experience, services): index `01`, title, muted sub-line, bullets with a 2px black left rule, outline tag pills, date or price on the right.
- **Project card** (`WorkCard.svelte`): grey thumbnail with a status badge, title, tagline, "TLDR" summary, four stack tags, Case study + external link buttons. In-house work without screenshots gets an outlined monogram plate with two outcome chips.
- **Filter chips**: All plus one per project kind; the active chip is filled black.

## Imagery

- Hero portrait: `static/img/arya-cutout.webp`, the owner's pixel-art portrait with the background removed, greyscale, faded at the bottom with a mask.
- Product images: `static/img/blur-your-whatsapp.webp`, `static/img/skui.webp`, shown `contain` in grey wells.

## Motion

- Hero name rises in, portrait fades up, role line types and deletes with a blinking caret.
- Sections and rows reveal on scroll (`.reveal`, only when JS runs).
- Cards lift 3px on hover. All motion is off under `prefers-reduced-motion`.

## Content rules

- The day job is shown openly: Computer Specialist at BPS-Statistics Indonesia, Jakarta Pusat. Never mention the statistical publications.
- Figures shown are the owner's own: about 40% faster reports, 15+ hours a week, 200+ officers, about $12,000 a year, 1,000+ Skui users.
