# NavBar Specification

- **Target file:** `src/components/NavBar.tsx` (client component — mobile menu toggle)
- **Interaction model:** static-fixed overlay + mobile hamburger.

## Layout
- `position: fixed; top:0; left:0; right:0; z-index:99999;` height 91px.
- Background `rgba(38,3,3,0.1)`, `backdrop-filter: blur(5px)`.
- Inner row: `.site-container`, flex, `align-items:center; justify-content:space-between`, full height.
- Left: `DraisLogo` (from `@/components/icons`), white, ~66×54 (height ≈ 40px, `h-10 w-auto`).
- Center: nav links row, gap ~28px.
- Right: BOOK NOW button.

## Links (verbatim, order)
EVENTS `/events` · RESERVATIONS `/reservations` · PRIVATE EVENTS `/private-events` · PHOTOS `/photos` · CONTACT `/contact`
- Style: white, 14px, uppercase, font `var(--font-beloved)` (class `font-heading`), letter-spacing normal, line-height 14px. Hover: `opacity:0.7` transition 0.2s.

## BOOK NOW button `/events`
- Outlined pill: `border:1px solid #fff; border-radius:10px; padding:12px 26px; color:#fff; background:transparent;` font `var(--font-beloved)` 16px 700 uppercase. Hover: `background:#fff; color:#000;` transition 0.3s.

## Responsive
- **≤991px:** hide center links + BOOK NOW; show `MenuIcon` (hamburger, white, 34px) at right. Clicking toggles a full-width dropdown panel (bordo `#260303` bg) listing the 5 links stacked + BOOK NOW, each 16px uppercase white.
- **Desktop:** hide hamburger.
- Logo stays left at all sizes.

## Notes
- Use `useState` for mobile menu open/close. Add `"use client"`.
