# Hero Specification

- **Target file:** `src/components/Hero.tsx`
- **Screenshot ref:** full-viewport dark club interior, centered logo lockup.
- **Interaction model:** static (optional fade-in on the wordmark).

## Layout
- `<section>` relative, min-height ~810px (use `min-h-[100svh]` capped; original ≈ 810px at 1440). Use `h-[810px]` desktop, `min-h-[85vh]` mobile.
- **Background:** `/images/hero-bg.avif` via `next/image` `fill` `object-cover object-center`, OR a div with `background-image`. Add a subtle dark overlay is NOT needed (image is already dark), but a faint `bg-black/10` is fine.
- Content centered with fl: `flex flex-col items-center justify-center text-center`, positioned in lower-middle. Content container max ~600px.

## Content (top → bottom, centered)
1. **Drai's wordmark** — `DraisLogo` from `@/components/icons`, white, large: width ~320–360px (`w-[340px] h-auto`). Sits above "AFTER HOURS".
2. **AFTER HOURS wordmark** — `next/image` `/images/after-hours-logo.avif`, alt "AFTER HOURS", displayed 320×77 (`w-[320px] h-auto`). Sits directly under the Drai's script (they form one lockup — minimal gap; the script overlaps slightly above).
3. **Tagline `<h1>`** — text "The night, refined after midnight" (verbatim, mixed-case in DOM but renders uppercase-looking via Beloved Sans). Style: font `var(--font-beloved)`, ~25px, weight 700, white, letter-spacing slight. Render with `uppercase` to match visual "THE NIGHT, REFINED AFTER MIDNIGHT". margin-top ~24px.
4. **Buttons row** — gap ~16px, margin-top ~28px:
   - PRIVATE EVENTS → `/private-events`
   - BOOK A TABLE → `/reservations`
   - Both: outlined pill `border:1px solid #fff; border-radius:10px; padding:12px 26px; color:#fff; background:transparent;` font `var(--font-beloved)` 16px 700 uppercase. Hover: `bg-white text-black` transition 0.3s.

## Responsive
- Mobile (≤767): wordmark width ~240px; tagline ~20px; buttons stack? No — keep side by side but allow wrap; padding reduces. Content vertically centered.
