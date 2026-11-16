---
name: Arya Aji Kusuma
theme: Dusk (Hallmark v2.0.0)
genre: modern-minimal
tokens: src/lib/styles/tokens.css
---

# Design system: aryaaji.com

Built with Hallmark, theme **Dusk**: a fog-pale first screen that falls into slate, smoked glass for the product, bone wells for screenshots. The page sells one thing: a developer who turns a chore you repeat into a tool.

## Colour

All colour goes through the tokens in `src/lib/styles/tokens.css`. No literal colours past the token block.

| Role | Token | Value |
| --- | --- | --- |
| Page (slate) | `--color-paper` | oklch(17.5% 0.014 268) |
| Raised slate | `--color-paper-2`, `--color-paper-3` | oklch(21% …), oklch(25% …) |
| Ink on slate | `--color-ink`, `--color-ink-2`, `--color-muted` | warm white, cool grey, muted grey |
| Footer shade | `--color-shade` | oklch(10% 0.022 268) |
| Signal 1: periwinkle | `--color-accent` (+ `-hi`, `-ink`, `-deep`, `-soft`) | oklch(77% 0.10 274) |
| Signal 2: apricot | `--color-accent-2` | oklch(83% 0.095 62) |
| Fog (hero) | `--color-fog`, `--color-day-ink`, `--color-day-muted` | pale warm fog with dark day ink |
| Bone well | `--color-well`, `--color-well-2`, `--color-card` | light surface holding one screenshot |

- Periwinkle is the action colour: primary buttons, links, focus, the "on" state of switches.
- Apricot has one job: the figures in the in-house ledger (what each tool replaced). Keep it to figures.
- Body text on slate is `--color-ink-2`; heads are `--color-ink`.

## Type

- Display: **Wix Madefor Display** (variable), weight 500, tracking -0.022em.
- Text: **Wix Madefor Text** (variable), 400 body, 600 labels, links and strong.
- Three weights in running use: 400, 500, 600.
- Labels are the body face a step smaller, sentence case, never tracked capitals, never mono.
- Curly quotes and apostrophes in prose. No dashes in copy; write "to" for ranges.

## Surfaces

- **Glass** (`.glass`): smoked slate with blur and a lit top edge. Used only on the hero product (Blur Your WhatsApp popup) and the in-house ledger.
- **Well** (`.well`): bone surface that holds a product screenshot.
- Radii: 18px card, 10px inner, pill for buttons and chips.

## Layout

- Shape: Workbench. Hero (Poster posture) → Blur Your WhatsApp case → in-house ledger → Skui → services table → statement close → index-column footer.
- Hero: headline of seven words or fewer, one sentence, one primary button plus one text link; the live product sits beside it.
- Container capped and centred; at 1920 the gutters grow, the measure does not.
- All spacing through `--space-*`, `--section-gap-*` and `--gap-columns`.

## Imagery

- The owner's product images in bone wells: `static/img/blur-your-whatsapp.webp`, `static/img/skui.webp`.
- Hero background: library photograph "Vallee-brouillard" by Thomas Bresson (CC BY 3.0, Wikimedia Commons), credited in the footer. Currently hotlinked; self-host it under `static/img/` when possible.
- Portrait: `static/img/arya.webp` on /about.

## Motion

- One drift on the hero photograph (48s), off under `prefers-reduced-motion`.
- Switch and blur transitions use transform, opacity and filter only. Never `transition: all`.

## Content rules

- Never mention the owner's statistical publications. Keep the day job low-key: "a large data organisation".
- Figures shown are the owner's own: about 40% faster reports, 15+ hours a week, 200+ officers, about $12,000 a year, 1,000+ Skui users.
