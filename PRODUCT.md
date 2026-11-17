# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: founders, operations leads and small teams outside Indonesia who are looking for a freelance developer, usually arriving from Upwork, LinkedIn or a search result. They have a repetitive manual task (copy-pasting between web apps, spreadsheet wrangling, recurring reports) and want it gone without hiring a full-time engineer. They are deciding, in a few minutes, whether this person is credible, understands their kind of problem, and is low-risk to hire.

Secondary: recruiters and hiring managers checking the resume for part-time or contract remote roles.

## Product Purpose

aryaaji.com is the personal portfolio and lead-generation site of Arya Aji Kusuma, a freelance full-stack developer in Jakarta. It exists to turn a qualified visitor into a written task description (contact form, email or Upwork). Success is an inbound brief that describes a concrete repetitive task.

## Positioning

"If you do it twice, I'll make it a tool." Arya is professionally lazy: he removes repetitive work for a living. Chrome extensions are the lead specialty and the strongest differentiator (he ships his own, including a sub-20KB, zero-dependency privacy extension on the Chrome Web Store). Internal tools/dashboards and Python data/workflow automation are supporting services. Background in applied statistics plus years of building in-house tools for a large data organisation back the claim with results, not adjectives.

## Operating Context

- Work is async and written-first, in English (Indonesian also available).
- Projects are small, well-scoped and fixed-price. Default payment path is Upwork escrow, released per milestone after the client tests it; direct email contact is also accepted.
- Deliverables: source code, a short guide, and for extensions a Chrome Web Store-ready package.
- Reply target: a fixed quote within 24 hours.
- Arya does this alongside a full-time in-house role, so the site never promises same-day turnaround or office-hours availability.

## Capabilities and Constraints

- Services: Chrome extensions (Manifest V3; scraping/export, autofill, added buttons and shortcuts), internal tools and dashboards (admin panels, approval flows, maps, auth and payments), data and workflow automation (Excel/Google Sheets, REST API sync, OpenStreetMap geocoding, scheduled Python jobs), LLM integration.
- Stack he works in: SvelteKit, Next.js, TypeScript, FastAPI, Python, PostgreSQL, Prisma, Leaflet, Google Apps Script, LLM APIs.
- Typical delivery: extensions 3–5 days, internal tools 1–2 weeks, automations 2–4 days.
- Published price: Chrome extensions $149–$349. Other services are quoted per scope; do not invent prices.
- The site is English-only for now (target clients are international).
- Contact form posts to Web3Forms using `PUBLIC_WEB3FORMS_KEY` from the build environment.

## Brand Commitments

- Name: Arya Aji Kusuma. Short: Arya. Monogram "aa".
- Voice: plain, direct, a little self-deprecating ("professionally lazy"), never salesy. Specific numbers over adjectives.
- Line used as the site's thesis: "If you do it twice, I'll make it a tool."
- Portrait asset: a pixel-art self-portrait (`static/img/arya.webp`).

### Content restrictions (binding)

- Never mention the statistical publications he produces in his day job (for example any "… dalam angka" publication), explicitly or by name.
- Keep the day job low-key: describe it as in-house work for a large (public-sector) data organisation. Do not feature the employer's name, logo or internal app names, and do not make it the headline of any page.
- Do not use or describe internal or official data from the day job.

## Evidence on Hand

- Blur Your WhatsApp: Chrome Web Store extension, under 20KB, zero dependencies, no trackers; competitors were 30MB+. Engineering write-up from his own LinkedIn posts (one post reached about 1.9k impressions). Assets: `static/img/blur-your-whatsapp.webp`, store link, GitHub `arya-aji/blur-your-whatsapp`.
- Skui (tryout.aryaaji.com): SaaS exam simulator for SIMAK UI applicants, Next.js + FastAPI + PostgreSQL + Midtrans, 1,000+ users. Asset: `static/img/skui.webp`.
- MiniTube PiP: one-click Picture-in-Picture extension (Chrome Web Store). Asset image is an AI-generated mock with garbled text; treat as weak evidence.
- In-house results (anonymised): 5+ full-stack apps, reporting about 40% faster, 15+ hours/week of manual data work removed, dashboards used by 200+ field officers, about $12,000/year saved on licences, LLM features automating about 80% of routine content and metadata classification.
- Education: D4 Applied Statistics, Politeknik Statistika STIS (2014–2018).
- Profiles: Upwork `aryaajik`, GitHub `arya-aji`, LinkedIn `arya-aji-kusuma`, email hello@aryaaji.com.
- Absent, never fabricate: client testimonials, client logos, Upwork ratings or job counts, Chrome Web Store user counts or ratings, named external clients.

## Product Principles

1. Show the removed work, not the tech: every claim ties to time saved, size, users or a before/after task.
2. Proof over promise: real shipped products and real numbers only; when evidence is missing, say less.
3. Low-risk to hire: fixed quotes, escrow, a clear process and a reply-time promise are visible wherever a visitor decides.
4. Small and fast, like the work: the site itself should be light, quick and dependency-lean, because that is the craft being sold.
5. One ask: describe your task. Every page leads to the same action.

## Accessibility & Inclusion

Visitors read in English as a second language often; keep copy plain and sentences short. Meet WCAG 2.2 AA (contrast, keyboard focus, reduced motion).
