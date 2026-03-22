## 2026-03-09

- Design direction decided: "Editorial White Cube" hybrid style → documented in `docs/design_brief.md`
- Tech stack decided: Astro + Tailwind CSS + Vercel (Path A — static, no CMS)
  - Rejected Next.js: chatbot is a separate microservice (script embed), no API routes needed in site
  - Rejected GitHub Pages: Vercel chosen for zero-config Astro deploy + preview deployments
  - Animation: CSS transitions only (no Framer Motion / GSAP)
  - AI chatbot microservice integrated via `<script>` tag
- Phase 1 (Design Direction): COMPLETE
- Phase 2 (Tech Stack): COMPLETE
- Phase 3 (Build Scaffold): COMPLETE
  - Bun 1.3.10 installed via brew
  - Astro 5.18 scaffolded, Tailwind CSS v4 + sitemap integrations added
  - Note: Tailwind v4 installed (not v3) — design tokens via `@theme {}` in global.css, no tailwind.config.mjs
  - All 11 pages built: Home, Projects index, 6 project slugs, Sketches, About, Contact
  - `bun run build` → 0 errors | `bunx astro check` → 0 TS errors, 0 warnings
  - Content Collection: 6 placeholder .md project files created
  - vercel.json configured for Bun deploy
  - PROJECT.md created as navigation hub
- Runbook created: `deliverables/software_ai_engineering/projects/astro_portfolio_runbook.md` — full lifecycle reference (design → deploy, 9 sections)

## 2026-03-22

- About page portrait: wired up `/public/images/porlin_ing_profile_image.png` → `BioBlock.astro` ✅
- Projects categorization: added `projectType` field to schema + all 16 .md files
  - Professional (2): baitong-hotel, link-house-renovation
  - Competition (4): provincial-gateway, commercial-building, historical-residence, street-furniture
  - Portfolio (10): office-facade, office-building-2/3, classical-villa, modern-villa/2, vacation-house/2, shophouse, interior-design
- ProjectGrid: grouped by projectType with section headers (Professional Projects / Competition / Design Studies)
- Created `SectionHeading` component → `src/components/ui/SectionHeading.astro` — mandatory for all `<h2>` section labels
- Created `CoverImage` component → `src/components/ui/CoverImage.astro` — mandatory for all fixed-aspect-ratio images
  - Props: src, alt, aspect (default 4/3 via inline style), bg, class, imgClass, loading
  - Wired into ProjectCard.astro (with imgClass for hover scale, slot for overlay)
  - Wired into SketchGrid.astro (aspect=4/3, bg=#E0DBD0)
- Documented both UI components in CLAUDE.md with rules + rationale
- Confirmed: `bun run dev` works, projects page renders correctly with 3 sections
- baitong-hotel.md: synced images array to renamed files on disk (25 images, prefix-ordered 1_→6_), updated coverImage to `1_img-029.jpg`
- Schema fix: `year` changed from `z.number()` to `z.union([z.number(), z.string()])` → supports both `2023` and `"2017-2019"` ranges
- Fixed: project_status.md corrected — cover images were already wired for all 16 projects (stale "remaining" item removed)
- Mobile navigation: added hamburger menu to SiteNav.astro
  - Desktop: unchanged (horizontal links)
  - Mobile: hamburger button → full-screen dark overlay (bg-black/65) with normal-sized links (font-sans text-sm uppercase)
  - Hamburger animates to X on open; overlay fades in/out (0.3s CSS transition)
  - Fixed: removed browser default button outline (border-none bg-transparent)
  - Fixed: changed from solid canvas bg + huge serif text → semi-transparent dark bg + normal text (industry standard)
- Git: created feature/phase-4-content branch, committed all project files (232 files), pushed to remote → Vercel preview deployed
- .gitignore: added .DS_Store exclusion
