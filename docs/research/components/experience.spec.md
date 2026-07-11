# ExperienceSection Specification

- **Target file:** `src/components/ExperienceSection.tsx`
- **Interaction model:** static, hover on button.
- Section background: bordo `#260303` (`bg-card` / `bg-bordo`). Vertical padding ~80px. Contains TWO parts.

## Part A — Flanked heading "THE DRAI'S EXPERIENCE"
- Row inside `.site-container`: `flex items-center gap-6`.
  - A horizontal rule `<div className="h-px flex-1 bg-white/40" />`
  - `<h2>` "THE DRAI'S EXPERIENCE" (use curly apostrophe: THE DRAI'S EXPERIENCE), font `var(--font-beloved)` 40px 700, white, whitespace-nowrap, no wrap.
  - Another `<div className="h-px flex-1 bg-white/40" />`
- margin-bottom ~64px.

## Part B — VIP / Bottle Service two-column
- Grid/flex two columns, `.site-container`, gap ~48px, `items-center`.
- **Left column:** image `/images/experience.webp`, alt "Drai's crowd holding neon signs", `object-cover`, rounded (~small radius or 0 — original 0px, but a subtle `rounded-xl` acceptable; keep 0 to match). Aspect ~665×492 → use `aspect-[665/492] w-full`.
- **Right column:** centered text `flex flex-col items-center text-center justify-center`:
  - `<h3>` two lines: "VIP" then "BOTTLE SERVICE" (use `<br/>` or two spans). Font `var(--font-beloved)` ~50px 700, white, line-height ~50px, text-align center.
  - `<p>` "THE BEST AFTER HOURS CLUB IN LAS VEGAS" — font `Inter`-like; use `var(--font-sf)` or a plain sans, 12px, weight 800, uppercase, letter-spacing ~0.05em, white. margin-top ~12px.
  - **BOOK NOW** button → `/events`: outlined white pill, padding 12px 26px, radius 10px, Beloved 16px 700 uppercase, hover `bg-white text-black`. margin-top ~24px.

## Responsive
- ≤767px: stack columns — image on top, text below; heading ~34px; keep centered.
