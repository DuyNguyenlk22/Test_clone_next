# PrivateEvents + DividerMonogram Specification

Two components in ONE file's scope but create TWO files:
- `src/components/PrivateEvents.tsx`
- `src/components/DividerMonogram.tsx`
Both static. Section background bordo `#260303`.

## PrivateEvents.tsx
- Section, bordo bg, vertical padding ~80px.
- Two-column layout inside `.site-container`, gap ~48px, `items-center`:
  - **Left column** (text, left-aligned):
    - `<h2>` "PRIVATE EVENTS" — font `var(--font-beloved)` ~50px 700, white, line-height ~50px.
    - `<p>` "11,000 SQUARE FEET | 900 guests" (verbatim) — 12px, weight 800, uppercase, letter-spacing ~0.05em, white, `var(--font-sf)`/plain sans. margin-top ~12px.
    - **LEARN MORE** button → `/private-events`: outlined white pill (border 1px #fff, radius 10px, padding 12px 26px, Beloved 16px 700 uppercase, hover `bg-white text-black`). margin-top ~24px.
  - **Right column:** image `/images/private-events.webp`, alt "Drai's private event bar interior", `object-cover`, `aspect-[665/492] w-full`, no radius (or subtle).
- Note: on the live site the text column is left, image right.

## Responsive (PrivateEvents)
- ≤767px: stack — text above, image below (or image above text). Heading ~34px.

## DividerMonogram.tsx
- Section, bordo bg, vertical padding ~48px.
- Row inside `.site-container`: `flex items-center gap-8 justify-center`:
  - horizontal rule `<div className="h-px flex-1 bg-white/40" />`
  - `DMonogram` from `@/components/icons`, white, height ~132px (`h-[132px] w-auto`), flex-shrink-0.
  - horizontal rule `<div className="h-px flex-1 bg-white/40" />`
- The two rules should NOT touch the monogram — gap ~32px each side.

## Responsive (Divider)
- Mobile: monogram ~100px tall; rules shorten.
