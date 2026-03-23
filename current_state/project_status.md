# Project Status — Porlin Portfolio Website

**Last updated:** 2026-03-23

---

## Current Phase

**Phase 1: Design Direction** — COMPLETE ✅

**Phase 2: Tech Stack** — COMPLETE ✅

**Phase 3: Build Scaffold** — COMPLETE ✅

**Phase 4: Content / Assets** — IN PROGRESS 🔄

**Phase 5: AI Chatbot** — NOT STARTED

---

## Phase 4 Progress

### Completed ✅

- About page portrait — real photo wired up (`/images/porlin_ing_profile_image.png`)
- Content schema — added `projectType` field (`professional | competition | portfolio`)
- All 16 project `.md` files — `projectType` field added to each
- ProjectGrid — grouped by projectType with 3 section headers
- `SectionHeading` component — created, documented in CLAUDE.md
- `CoverImage` component — created, documented in CLAUDE.md; wired into ProjectCard + SketchGrid
- SketchGrid — aspect ratio fixed to `4/3`, background `#E0DBD0`, glightbox intact
- Projects page — confirmed working (`bun run dev` ✅)

### Completed ✅ (continued)

- Cover images — all 16 projects have real `coverImage` paths (no placeholders remaining)
- baitong-hotel.md — images array synced to renamed files (25 images, prefix-ordered 1_→6_)
- Content schema — `year` now accepts number or string (supports ranges like `2017-2019`)

### Completed ✅ (continued)

- Mobile hamburger menu — `SiteNav.astro` updated; full-screen dark overlay, normal-sized links, hamburger↔X animation
- Git branch `feature/phase-4-content` pushed; Vercel preview deployed
- Project detail gallery — replaced stacked layout with 2-column glightbox grid (`[slug].astro`)
- images[] arrays — coverImage added as first entry across all 15 remaining project `.md` files
- `BackToTop` component — created, added to `BaseLayout.astro` (appears on all pages after 400px scroll)
- Home hero image — updated to real baitong hotel photo

### Completed ✅ (continued)

- GitHub Actions workflow — triggers on push to `development`, builds with Bun, deploys to `gh-pages`
- `astro.config.mjs` — conditional `base`/`site` for GitHub Pages vs Vercel (uses `GITHUB_ACTIONS` env var)
- Staging URL: https://PorlinIng.github.io/portfolio/

### Remaining 🔄

- Waiting for Porlin to fact-check all project details (descriptions, year, role, firm, etc.)
- Waiting for Porlin to review all images per project — keep, replace, or remove

---

## Project Classification

| Type | Count | Projects |
|---|---|---|
| Professional | 2 | baitong-hotel, link-house-renovation |
| Competition | 4 | provincial-gateway, commercial-building, historical-residence, street-furniture |
| Portfolio | 10 | office-facade, office-building-2/3, classical-villa, modern-villa/2, vacation-house/2, shophouse, interior-design |

---

## UI Component Rules (MANDATORY)

| Component | Path | Use For |
|---|---|---|
| `SectionHeading` | `src/components/ui/SectionHeading.astro` | ALL `<h2>` section labels |
| `CoverImage` | `src/components/ui/CoverImage.astro` | ALL fixed-aspect-ratio images |

See `CLAUDE.md` for full usage docs.

---

## Decisions Made

| Decision             | Choice                                               | Notes                         |
| -------------------- | ---------------------------------------------------- | ----------------------------- |
| Design style         | Editorial White Cube                                 | See `docs/design_brief.md` §3 |
| Color palette        | Warm off-white + concrete gray + timber accent       | See `docs/design_brief.md` §4 |
| Typography direction | Refined serif titles + clean sans-serif body         | See `docs/design_brief.md` §4 |
| Site structure       | 5 sections: Home, Projects, Sketches, About, Contact | See `docs/design_brief.md` §5 |
| Framework            | Astro 5.18                                           | Static site, no CMS needed    |
| Styling              | Tailwind CSS v4 (not v3) — CSS @theme tokens         | No tailwind.config.mjs        |
| Package manager      | Bun 1.3.10                                           |                               |
| Hosting              | Vercel                                               | Zero-config Astro deploy      |
| Animation            | CSS transitions only                                 | No Framer Motion / GSAP       |
| AI integration       | Chatbot microservice via `<script>` embed            | Separate service, Phase 5     |
| Sketch aspect ratio  | `4/3` (landscape)                                    | Most sketch images are landscape |
| Dynamic CSS          | Inline `style` (not Tailwind utilities)              | Tailwind can't scan dynamic class strings |

---

## Next Step

Blocked — waiting for Porlin's review:
- Fact-check all project details (title, year, role, description, firm)
- Review images per project — decide what to keep, replace, or remove

---

## Key Files

| File                           | Purpose                                                        |
| ------------------------------ | -------------------------------------------------------------- |
| `docs/design_brief.md`         | Full design analysis, style direction, palette, structure      |
| `archive/porlin_portfolio.pdf` | Source portfolio (59 pages) — reference for content and images |
| `PROJECT.md`                   | Full file structure + command reference                        |
| `CLAUDE.md`                    | Project rules + UI component docs                              |
