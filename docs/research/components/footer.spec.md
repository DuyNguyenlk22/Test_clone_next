# Footer Specification

- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static, link hover.
- Background: `#2c0906`. Padding ~64px top / ~40px bottom, `.site-container` inside.

## Layout (desktop): two-region grid
Top region: flex row `justify-between`, gap large.
- **Left block:**
  - `DraisLogo` (icons), white, ~h-14 w-auto.
  - Row: `LocationIcon` (white 24px) + `<a href="https://maps.app.goo.gl/sx3ZEi92iFkPadVE7">3595 S Las Vegas Blvd.</a>` (white, ~16px, `var(--font-neue)`). margin-top ~24px.
  - Row: `PhoneIcon` + `<a href="tel:(702)777-3800">(702) 777-3800</a>`.
  - Social row (margin-top ~16px), gap 16px: `InstagramIcon`, `XIcon`, `FacebookIcon` (white, ~20px), each a link `#`.
- **Right block:** three columns, gap ~48px. Column heading style: white, ~16px, weight 700, uppercase, `var(--font-beloved)`, margin-bottom ~16px. Links: white, ~14–15px, `var(--font-beloved)` uppercase, line-height ~2, hover `opacity:0.7`.
  - **DRAI'S:** EVENTS `/events`, RESERVATIONS `/reservations`, PRIVATE EVENTS `/private-events`, BLOG `/blog`, CONTACT `/contact`
  - **EXPLORE:** PHOTOS `/photos`, PRESS `/press`, CAREERS `/careers`, FAQs `/faqs`, BOOK A ROOM `/book-a-room`
  - **HOURS:** (heading) then plain text `<p>` "Thursday - Sunday:" and `<p>` "Doors at 1AM" (white, `var(--font-neue)` ~15px).

## Bottom legal bar
- Row, margin-top ~48px, `justify-between`, small text ~12px, muted white (`text-white/70`), `var(--font-neue)`:
  - Left: "© Drai's Group 2026. All Rights Reserved | Privacy Policy | Sitemap | Website Terms of Use | Legal" (the `|`-separated items after the copyright are links `#`, subtle).
  - Right: "Powered by" small + `/images/speakeasy-logo.avif` (Speakeasy wordmark, white, height ~16px). Stack the "Powered by" label above the logo, right-aligned.

## Responsive
- ≤767px: stack left block above the three columns; three columns become 2-col or stacked; legal bar stacks (copyright above, powered-by below). Everything left-aligned.
