# Drai's After Hours — Behaviors Bible

## NavBar
- `position: fixed`, top 0, full width, z-index 99999, height 91px.
- Background: `rgba(38,3,3,0.1)` with `backdrop-filter: blur(5px)` (subtle bordo tint over hero).
- No dramatic shrink-on-scroll observed; stays consistent. Links: white, 14px, uppercase (Beloved Sans). Hover: subtle opacity/underline.
- BOOK NOW: outlined white pill, 1px border, radius ~10px.
- **Responsive:** links collapse into a hamburger menu below ~991px (Webflow default breakpoint). Mobile menu slides/opens a panel.

## Hero
- Full-viewport background image, dark. Centered content.
- "Drai's" wordmark animates in (Lottie stroke draw on load) — clone can render static SVG, optional subtle fade-in.
- Buttons: outlined white pills. Hover: fill/opacity shift, ~0.3s.

## Events carousel (Swiper)
- **INTERACTION MODEL: click-driven carousel.** Prev/next chevron arrows on the sides; slides are draggable. Not scroll-linked.
- Card: 242px wide, image 242×242 rounded 20px, then date (20px Neue) + name (24px Beloved uppercase). Gap 24px between cards.
- **Card hover:** an overlay (`position:absolute`, inset 0, `background: rgba(69,69,69,0.59)`, radius 20px) fades in (`opacity 0 → 1`, `transition: 0.35s`) revealing two stacked outlined buttons BUY TICKETS / VIP RESERVATION (gap 32px, centered).
- Arrow buttons: circular, sit at left/right; chevron icon; hover highlight.

## Experience / Private Events
- Static two-column layouts. Images `object-fit: cover`, 665×492, no radius.
- Heading rows (THE DRAI'S EXPERIENCE, divider) have horizontal rule lines on both sides (flex row: line / text / line, `align-items:center`).
- Buttons (BOOK NOW, LEARN MORE): outlined white pill, padding `12px 26px`, radius `10px`. Hover: fill/opacity.

## Instagram Gallery marquee
- **INTERACTION MODEL: time-driven CSS marquee.** Photos scroll horizontally left, infinite loop (duplicate the set for seamless wrap). Each photo 300px × 420px, `object-fit: cover`, full-bleed (no container max-width). No gap or a very small gap.

## Divider Monogram
- Static. Large "D" centered with a horizontal rule on each side (like the Experience heading pattern).

## Footer
- Static. Link hover: opacity/underline. Social icons hover highlight.

## Responsive breakpoints (Webflow defaults)
- **≤991px (tablet):** nav → hamburger. Two-column sections may stay 2-col or begin stacking.
- **≤767px:** two-column Experience/Private Events stack to single column (image above text or vice-versa); headings shrink (e.g. 50px → ~34px).
- **≤479px (mobile):** full single-column, generous vertical spacing, buttons full-width-ish, event cards ~scaled.
