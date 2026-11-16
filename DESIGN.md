---
name: Arya Aji Kusuma
description: A freelance developer's site built as a kanban task board, where manual chores move from "By hand" to "Automated".
colors:
  page-base: "#eff1f5"
  board-mantle: "#e6e9ef"
  column-crust: "#dce0e8"
  card-paper: "#f8f9fb"
  ink-text: "#4c4f69"
  ink-heading: "#383a4f"
  ink-subtext: "#5c5f77"
  placeholder-subtext0: "#6c6f85"
  line-surface0: "#ccd0da"
  line-strong-surface1: "#bcc0cc"
  action-mauve: "#8839ef"
  action-mauve-deep: "#7428d8"
  on-action: "#ffffff"
  link-blue: "#1e66f5"
  by-hand-peach: "#fe640b"
  automated-green: "#40a02b"
  stripe-yellow: "#df8e1d"
  stripe-teal: "#179299"
  error-red: "#d20f39"
  mauve-tint: "#e8dcfb"
  peach-tint: "#fbe3d6"
  green-tint: "#dcefd6"
  mocha-page-base: "#1e1e2e"
  mocha-board-mantle: "#181825"
  mocha-column-crust: "#11111b"
  mocha-card-surface0: "#313244"
  mocha-ink-text: "#cdd6f4"
  mocha-ink-heading: "#e3e8fb"
  mocha-ink-subtext: "#bac2de"
  mocha-line-strong-surface1: "#45475a"
  mocha-action-mauve: "#cba6f7"
  mocha-action-mauve-deep: "#dcc3fa"
  mocha-on-action: "#11111b"
  mocha-link-blue: "#89b4fa"
  mocha-by-hand-peach: "#fab387"
  mocha-automated-green: "#a6e3a1"
  mocha-stripe-yellow: "#f9e2af"
  mocha-stripe-teal: "#94e2d5"
  mocha-mauve-tint: "#352c4a"
  mocha-green-tint: "#2c3a32"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.5rem + 3.6vw, 4rem)"
    fontWeight: 760
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title-lg:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  card-title:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Atkinson Hyperlegible Next Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.3
  button:
    fontFamily: "Bricolage Grotesque Variable, Segoe UI, system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 650
    lineHeight: 1.2
rounded:
  chip: "999px"
  card: "10px"
  column: "14px"
  panel: "18px"
spacing:
  card-gap: "0.5rem"
  board-gap: "0.75rem"
  board-pad: "0.75rem"
  board-pad-wide: "1rem"
  column-pad: "0.75rem"
  card-pad: "0.8rem 0.85rem 0.65rem"
  section-y: "3.5rem"
  section-y-wide: "5.5rem"
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  wrap: "76rem"
  measure: "66ch"
components:
  button-primary:
    backgroundColor: "{colors.action-mauve}"
    textColor: "{colors.on-action}"
    typography: "{typography.button}"
    rounded: "{rounded.card}"
    padding: "0.78em 1.2em"
  button-primary-hover:
    backgroundColor: "{colors.action-mauve-deep}"
    textColor: "{colors.on-action}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.action-mauve}"
    typography: "{typography.button}"
    rounded: "{rounded.card}"
    padding: "0.78em 1.2em"
  button-ghost-hover:
    backgroundColor: "{colors.mauve-tint}"
    textColor: "{colors.action-mauve}"
  chip:
    backgroundColor: "{colors.column-crust}"
    textColor: "{colors.ink-text}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "0.2em 0.65em"
  chip-on-column:
    backgroundColor: "{colors.board-mantle}"
    textColor: "{colors.ink-text}"
    rounded: "{rounded.chip}"
    padding: "0.2em 0.65em"
  chip-outcome:
    backgroundColor: "{colors.green-tint}"
    textColor: "{colors.ink-heading}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "0.25em 0.7em"
  task-card:
    backgroundColor: "{colors.card-paper}"
    textColor: "{colors.ink-heading}"
    typography: "{typography.card-title}"
    rounded: "{rounded.card}"
    padding: "0.8rem 0.85rem 0.65rem"
  board-column:
    backgroundColor: "{colors.column-crust}"
    rounded: "{rounded.column}"
    padding: "0.75rem"
  board:
    backgroundColor: "{colors.board-mantle}"
    rounded: "{rounded.panel}"
    padding: "0.75rem"
  input:
    backgroundColor: "{colors.card-paper}"
    textColor: "{colors.ink-heading}"
    rounded: "{rounded.card}"
    padding: "0.7rem 0.85rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-text}"
    rounded: "{rounded.chip}"
    padding: "0.45rem 0.75rem"
  nav-link-current:
    backgroundColor: "{colors.mauve-tint}"
    textColor: "{colors.action-mauve}"
  monogram:
    backgroundColor: "{colors.action-mauve}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.chip}"
    size: "2.1rem"
---

# Design System: Arya Aji Kusuma

## Overview

**Creative North Star: "The Task Board"**

The whole site is one kanban board. A chore someone does by hand is a card; the work Arya sells is moving that card into the "Automated" column with a real estimate on it. Every recurring container on the site is built from the same three layers of a board: a Mantle board panel, Crust columns inside it, and raised paper cards inside those. Services are columns of the chores they absorb, the process is four columns with one card each, and project outcomes are written as chips, like due dates on a task.

Colour is Catppuccin, never hand-mixed: Latte in daylight, Mocha when the visitor's system is dark, switched only by `prefers-color-scheme` (there is no toggle). The palette carries meaning on the board: Peach marks work done by hand, Green marks automated work, Mauve is the one action and the person who moves the work, Blue is a link. Density is medium and calm: soft rounded containers, short card titles in a highly legible text face, and big, tight Bricolage titles above them.

Motion is a single story beat. On the home board, after hydration, the three chores strike through in "By hand" and arrive one by one in "Automated". The page renders in its finished state without JavaScript and skips the play under reduced motion.

**Key Characteristics:**
- Board, column, card: three nested tonal layers do almost all the layout work.
- A coloured stripe on the top edge of a card is its label.
- Chips (pill shapes) carry every estimate, price, count and outcome.
- One mauve action per view; the "aa" monogram is the same mauve.
- Latte and Mocha are equal citizens; every role token has both values.

## Colors

The canonical Catppuccin Latte and Mocha flavours, mapped onto board roles; a handful of tints and two heading inks are the only values not taken from the published palette.

### Primary
- **Action Mauve** (Latte `action-mauve`, Mocha `mocha-action-mauve`): the primary button, the composer's "Describe it", the "aa" monogram and the mover badge between board columns, the current nav item, text selection, the focus ring and the process step numbers. Hover deepens to **Deep Mauve** (`action-mauve-deep`; in Mocha it lightens instead, `mocha-action-mauve-deep`). On-action text is white in Latte and Crust in Mocha.
- **Mauve Tint** (`mauve-tint`): ghost-button hover and current-nav fill.

### Secondary
- **By-hand Peach** (`by-hand-peach`): the "By hand" column dot, the stripe on chore cards and the strike-through line on a chore that has been moved. It marks manual work and nothing else.
- **Automated Green** (`automated-green`): the "Automated" column dot and the automation service stripe. **Green Tint** (`green-tint`) fills outcome chips ("15+ hours a week removed", "1,000+ users").

### Tertiary
- **Stripe Yellow** (`stripe-yellow`) and **Stripe Teal** (`stripe-teal`): card label stripes by kind of tool. Yellow for Chrome extensions, Green for automation, Teal for internal tools and dashboards.
- **Link Blue** (`link-blue`): inline links only, underlined 1px, thickening to 2px on hover.
- **Error Red** (`error-red`): only as a 14% wash with a 45% outline on the contact form's error message.

### Neutral
- **Page Base** (`page-base`): the page background and the sticky header (at 92% with a blur).
- **Board Mantle** (`board-mantle`): every board panel and the footer.
- **Column Crust** (`column-crust`): columns inside a board, default chips, tag pills, aside panels (contact, case-study ask).
- **Card Paper** (`card-paper`, Mocha `mocha-card-surface0`): raised cards and form fields; the lightest surface in Latte, the raised Surface0 in Mocha.
- **Ink Text / Heading / Subtext** (`ink-text`, `ink-heading`, `ink-subtext`): body copy, titles and card titles, secondary copy and metadata.
- **Line** (`line-surface0`) and **Strong Line** (`line-strong-surface1`): 1px panel borders and dividers; 1.5px input borders, the dashed composer outline and the neutral stripe on a moved card.

### Named Rules
**The Label Stripe Rule.** A card's colour lives in a 4-5px stripe on its top edge, painted into the background so it follows the corner. The card body stays neutral paper. Never flood a card with its label colour.

**The Two Flavours Rule.** Every role token is defined for Latte and Mocha in `:root` and its `prefers-color-scheme: dark` block. A new colour is not finished until it has both values.

**The Meaning Rule.** Peach is by hand, Green is automated, Mauve is the action. Don't use Peach or Green decoratively, and don't use Mauve for anything a visitor can't act on except the monogram and mover that stand for Arya.

## Typography

**Display Font:** Bricolage Grotesque Variable (with Segoe UI, system-ui)
**Body Font:** Atkinson Hyperlegible Next Variable (with Segoe UI, system-ui)
**Label/Mono Font:** ui-monospace, Cascadia Code, Consolas for code in notes only

**Character:** Bricolage brings a heavy, slightly quirky voice to titles, buttons and the monogram; Atkinson keeps everything a visitor has to actually read plain and legible for second-language English readers.

### Hierarchy
- **Display** (760, `clamp(2.4rem, 1.5rem + 3.6vw, 4rem)`, 1.02, -0.035em): page h1. The home h1 runs a little smaller (`clamp(2.2rem, 1.4rem + 3.2vw, 3.6rem)`) and is capped at 14ch so the board stays in the first viewport.
- **Headline** (700, `clamp(2.1rem, 1.5rem + 2.4vw, 3rem)`, 1.1, -0.03em): section h2s, sitting left of a one-line subtext in a two-column section head on wide screens.
- **Title** (700, 1.6rem / 1.3rem): service columns, project cards, note titles (1.6rem); smaller card and aside titles (1.3rem). The footer sign-off uses 2rem at 720.
- **Card title** (Atkinson 600, 1.0625rem, 1.4): text on task cards. Cards are read, not shouted, so they use the body face.
- **Body** (400, 1.0625rem, 1.6): everything else, with prose capped at 66ch and ledes at 1.3rem, 50ch, in subtext ink.
- **Label** (0.86rem, 1.3): chips, counts, dates, breadcrumbs and captions. Sentence case, no tracking.

### Named Rules
**The Two Faces Rule.** Bricolage for things you scan (titles, buttons, the monogram, step numbers); Atkinson for things you read, including card text. No third face outside code blocks.

## Layout

Content sits in a centred wrap of up to 76rem with a fluid gutter (`clamp(1rem, 4vw, 2.5rem)`). Sections breathe at 3.5rem vertical padding, 5.5rem from 760px. A section head is a single column on mobile and splits into title-left, one-line-explanation-right from 860px.

The board is the spatial unit. A board panel pads 0.75rem (1rem from 760-880px), columns sit 0.75rem apart and pad 0.75-1rem, and cards stack 0.5rem apart. Services and process columns use `auto-fit` grids (min 19rem and 14rem) so they wrap to a single stacked column on mobile without a separate layout. The home board is By hand, a mover badge with an arrow, then Automated across three tracks from 880px; below that the columns stack and the arrow rotates to point down.

Inner pages (projects, notes, about, contact, resume) are plain reading layouts in the same wrap: a main column plus an optional Crust aside (20rem or a 1.5fr/1fr split). Notes list as rows split by 1px lines with an 8rem date column. The header collapses into a "Menu" toggle below 820px.

## Elevation & Depth

Depth is mostly tonal: Base, then a Mantle board, then Crust columns, then paper cards. Shadows appear only on the paper layer (cards, mini project cards, the portrait, the lead project image) and as a response to state. Both shadows are soft, ink-tinted and offset straight down; Mocha uses deeper black versions.

### Shadow Vocabulary
- **Card rest** (`--shadow`: `0 1px 2px rgb(76 79 105 / 0.08), 0 6px 16px -8px rgb(76 79 105 / 0.22)`): every raised card at rest, the mobile nav drawer, and the primary button on hover.
- **Card lifted** (`--shadow-lift`: `0 2px 4px rgb(76 79 105 / 0.1), 0 18px 32px -16px rgb(76 79 105 / 0.35)`): an Automated card on hover and a card mid-arrival.

### Named Rules
**The Paper Only Rule.** Boards and columns never cast shadows; they are flat tonal fields with at most a 1px line. Only the card layer lifts.

## Shapes

Everything is rounded, and the radius steps with the layer: pills (999px) for chips, nav links, counts and the monogram circle; 10px for cards, buttons and inputs; 14px for columns; 18px for board panels, images and asides. The composer is the one dashed shape (1.5px dashed Strong Line), marking an empty slot waiting for a card. The arrow between columns is a hand-drawn-weight SVG stroke (2px, round caps).

## Components

### Buttons
Solid and confident, with no movement on hover.
- **Shape:** gently rounded (10px), 1.5px border in the fill colour.
- **Primary:** Action Mauve fill, on-action text, Bricolage 650 at 1.02rem, padding 0.78em 1.2em.
- **Hover / Focus:** fill and border deepen to Deep Mauve and the card-rest shadow appears (0.15s ease). Focus is the global 3px mauve outline at 3px offset.
- **Ghost:** transparent with a mauve border and mauve text; hover fills with Mauve Tint and no shadow. Used for the secondary action beside a primary (for example "Hire me on Upwork", "See all work").

### Chips
- **Style:** pill, 0.86rem, Column Crust fill on page or card surfaces; inside a column they switch to Board Mantle so they still read. A chip can lead with a 12px stroked clock SVG for delivery time.
- **Variants:** the kind chip is bold; the price chip is bold in heading ink; outcome chips use Green Tint.

### Cards / Containers
- **Task card:** Card Paper, 10px corners, padding 0.8rem 0.85rem 0.65rem, card-rest shadow, a top label stripe (5px on the home board, 4px in service columns), a card title and a row of chips.
- **Moved card (By hand):** stays in place at full contrast, drops to the Column fill with a 1px inset Strong Line, a neutral stripe and the title struck through in 2px Peach.
- **Automated card hover:** lifts 2px and tilts -0.4deg with the lifted shadow, like a card picked up.
- **Board / Column:** see Layout. A highlighted column (the lead service) gets a 2px inset mauve ring at 60%.
- **Project card:** a 16:10 image in an 18px frame with a 1px line, or, without an image, a Mantle panel with outcome chips.

### Inputs / Fields
- **Style:** Card Paper fill, 1.5px Strong Line border, 10px corners (8px inside the composer), heading ink, labels in bold body text above the field.
- **Focus:** 3px mauve outline at zero offset and a mauve border.
- **Error:** a red-washed message panel with a 1px red outline; the field itself does not change colour.

### Navigation
Sticky header on translucent Base with a 10px backdrop blur and a 1px bottom line. The "aa" mauve monogram and the name sit left; pill nav links (600 weight) sit right with a compact primary button. Hover fills a link with Column Crust; the current page gets Mauve Tint with mauve text. Below 820px a pill "Menu" toggle opens a full-width drawer with stacked 10px-rounded links. A skip link appears on focus as a mauve pill.

### The Moving Board (signature)
The home hero: By hand (three chore cards with time-cost chips, then the dashed "Your task" composer whose "Describe it" button carries the typed text to the contact form), the mauve "aa" mover with an arrow, and Automated (tool cards with kind, time and price chips). Columns show live counts ("0 left", "3 done"). Arrival animation: 0.7s `cubic-bezier(0.16, 1, 0.3, 1)` from 48px left with a -1.5deg tilt and a 4px overshoot, staggered 600ms after an 800ms wait.

### Imagery and rasters
Images are real screenshots or the owner's pixel-art portrait, set in 18px frames with a 1px line or the card-rest shadow. `static/img/arya.webp`, `blur-your-whatsapp.webp` and `skui.webp` are the owner's existing assets re-encoded to WebP. `static/og.png` (1200×630, the Latte board with the thesis headline), `static/apple-touch-icon.png` (mauve tile) and `static/favicon.png` / `favicon.ico` (mauve "aa" disc) were rendered by Claude from HTML in Bricolage Grotesque and this palette with headless Chrome. Re-render them from HTML if the palette or monogram changes; never hand-edit the rasters.

## Do's and Don'ts

### Do:
- **Do** build new sections from the board, column, card layers before inventing a new container.
- **Do** put estimates, prices, counts and outcomes in chips, and tie them to real numbers.
- **Do** label a card with a top stripe in its role colour (Peach by hand; Yellow, Green or Teal by kind of tool).
- **Do** define every new colour for both Latte and Mocha, taking values from the Catppuccin flavours.
- **Do** keep one solid mauve button per view, with any secondary action as a ghost button.
- **Do** render animated states in their finished form first and play motion only after hydration, never under reduced motion.

### Don't:
- **Don't** add shadows to boards or columns; only cards lift.
- **Don't** fill a card with its label colour or use Peach or Green as decoration.
- **Don't** add a light/dark toggle or a third flavour; the system follows the visitor's setting.
- **Don't** set card text in Bricolage or add a third typeface.
- **Don't** bring back the earlier green "aa" tile. The system monogram is the mauve circle, and the favicon, touch icon and OG image now use it.
