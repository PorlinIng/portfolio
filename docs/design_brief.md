# Design Brief — Porlin's Architecture Portfolio Website

**Created:** 2026-03-09
**Status:** Design direction agreed. Tech stack TBD.

---

## 1. About Porlin

- Architect (ING PORLIN) with several years of professional experience
- Trained in architecture; has a deep love for design across all scales
- Also a maker/artist — handcrafted a paper art installation (small folded boxes tied together, hung from ceiling)
- Detail-oriented with high standards for visual quality

---

## 2. Portfolio Analysis

### Work covered in the portfolio PDF (59 pages)

| Category | Projects |
|---|---|
| Architectural concept sketches | ~8 hand-drawn ink sketches (2019–2020) |
| Professional architecture | Baitong Hotel & Resort (ASMA architects) |
| Facade design | Office buildings (multiple variants), Shop houses, Link House Renovation |
| Residential | Classical Villa, Modern Villa, Vacation House |
| Interior design 3D | Living rooms, bedrooms, dining/kitchen, kid bedrooms, classroom |
| Competition | Provincial Gate Way to Cambodia Heritage (CSA Design Competition) |

### Consistent aesthetic signals observed

**Biophilic** — nearly every project integrates lush greenery: hanging vines, green walls, tropical planting, rooftop gardens.

**Material palette** — warm white / off-white, exposed concrete, warm timber, marble surfaces, brass/gold accents. Selective, never garish color use.

**Refinement** — even the most experimental sketches are precise and controlled. Nothing is rough or loud.

**Range** — can execute bold gestural forms (ink sketches, competition entry bridge structure) AND quiet luxury (interior renders).

**Handcraft sensibility** — the ink sketches, physical scale model (Provincial Gate Way), and paper art all point to someone who values the tactile, made-by-hand quality.

**Narrative thinking** — the competition entry shows she can articulate concept → analysis → design clearly (concept from Khmer mythology, form derived from 4 cultural elements, master plan, section drawings).

---

## 3. Design Style Decision

### Chosen style: "Editorial White Cube"

A hybrid of two styles:

- **White Cube**: Gallery-like, image-led, breathing white space, sparse typography — like a clean contemporary art museum or high-end fashion house
- **Editorial**: Each project reads like a magazine story — concept → process → outcome — like Dezeen, Wallpaper*, or firm sites like Kengo Kuma Associates or Snøhetta

### Why this fits

- High visual standards → White Cube gives the clean, uncluttered space the work deserves
- Versatile portfolio (sketches + renders + competition boards + interiors) → Editorial treatment handles all typologies without feeling inconsistent
- Handcraft roots → Editorial style can honor process (sketches) not just polished outcomes
- Biophilic thread → Warm palette and breathing space echo her architectural language

### Styles explicitly ruled out

| Style | Reason |
|---|---|
| Neo-Brutalism / Anti-Design | Clashes completely with her refined sensibility |
| Bento Grid | Too tech/product-y; doesn't suit architecture culture |
| Interactive 3D / Immersive | Overkill; her content is image-based, not 3D-model-based |

---

## 4. Visual Identity

### Color palette (derived from her work)

| Role | Color | Source |
|---|---|---|
| Background | `#F7F4EF` — warm off-white | Her marble interiors, luxury living rooms |
| Text | `#1C1C1A` — near-black | Ink sketches |
| Accent | `#C4A067` — warm sand/timber | Wood tones in almost every project |
| Secondary | `#8C8C7A` — concrete gray | Exposed concrete facades |
| Optional highlight | Sage green (very subtle) | Biophilic / greenery thread |

### Typography direction

- **Project titles / headings**: Refined serif — signals architecture culture, editorial quality
- **Body / navigation**: Clean sans-serif — legible, modern, minimal
- **No decorative or display fonts** — the images do the visual work

---

## 5. Site Structure (proposed)

```
Homepage
  └── One cinematic hero image (best render or Baitong Hotel pool shot)
  └── Name + minimal tagline
  └── Navigation only

Projects
  └── Large image grid, breathing room between items
  └── Hover: project name appears
  └── Click: enter project page

Each Project Page
  └── Title + one-liner concept
  └── Images alternating with brief text (magazine-style scroll)
  └── Project details at bottom (type, year, role)

Sketches
  └── Dedicated page for hand-drawn work
  └── Cream/paper-texture background to echo physical sketchbook
  └── Differentiates her from architects who show only digital renders

About
  └── Brief, confident bio
  └── No current employment details beyond architecture

Contact
  └── Minimal — email or form
```

---

## 6. Micro-detail Notes

- Subtle parallax on images that contain greenery (biophilic nod, not gimmicky)
- No auto-playing video, no loading screens with animations
- Mobile-first: architecture clients browse on phones too
- Images must be high resolution — the renders are the product
- Page transitions: subtle fade, nothing that feels like a tech demo

---

## 7. What to Exclude

- No mention of current occupation outside architecture
- No timeline or chronology that reveals gaps in architectural practice
- The paper art installation is not in the PDF — include only if Porlin explicitly approves
