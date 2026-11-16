---
version: 1
slug: "src-routes-page-svelte"
primary_target: "src/routes/+page.svelte"
related_targets: ["src/routes/projects/+page.svelte"]
---

# Home (/) surface brief

Scope: the home page of aryaaji.com; its world extends to /projects, /projects/[slug], /notes, /about, /contact, /resume. Mode: Persuade.
Audience and job: founders and ops leads with a repetitive task, deciding in minutes whether to hire. Action: describe the task (lands in the contact form). Proof: Blur Your WhatsApp (<20KB), Skui (1,000+ users), in-house results (15+ h/week, 200+ users, ~40% faster reporting). Constraints: PRODUCT.md content restrictions; Catppuccin palette pinned by the user; navigation must be obvious.

## Direction contract

THESIS: The site is a task board. Work moves from "By hand" to "Automated"; Arya is the person who moves it. Refuses the split hero with a headline beside a laptop mockup and a row of equal service cards.
OWN-WORLD: Catppuccin Latte by day, Mocha by night (follows the visitor's system). Board surface is Mantle/Crust, columns are Base, cards are raised Surface with a coloured label stripe: Peach = by hand, Green = automated, Mauve = primary action, Blue = links, Yellow = highlight. Chips for estimates and prices, like due dates on a card. Bricolage Grotesque for titles, Atkinson Hyperlegible Next for text.
STORY: The visitor recognises their own chores as cards, sees them move to Automated with a real delivery estimate, then adds their own card.
FIRST VIEWPORT: Board title is the headline "If you do it twice, I'll make it a tool." with one line of who Arya is. Below, a full-width board: "By hand" column (three chore cards plus a working "Add your task" composer), arrow, "Automated" column receiving the same chores as tool cards with time and price chips. Primary action is the composer's "Describe it" button.
FORM: Kanban task board, position 2 of my grounded list (user chose the pick over the assigned keycap shortcut sheet). seed:ff5eeeeb508e9d74
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
