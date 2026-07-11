# Drai's After Hours — Page Topology

Target: https://www.draisgroup.com/ (Webflow site). Dark, black-and-bordo nightclub theme.
Desktop page height ≈ 4037px at 1440px viewport. Content container = 1232px max, centered, 20px gutters.

## Global
- **Background:** pure black `#000` (body). Sections layer bordo `#260303` over it.
- **Fonts:** Beloved Sans (Bold) → headings/nav/buttons (renders as caps). Neue Haas Display → body/dates. SF Pro Display → small labels.
- **Nav:** `position: fixed`, z-index 99999, overlays all content.

## Section order (top → bottom)
1. **NavBar** (fixed overlay, 91px tall) — Drai's logo (left), links EVENTS/RESERVATIONS/PRIVATE EVENTS/PHOTOS/CONTACT (center), BOOK NOW outlined button (right). Transparent over hero, subtle bordo tint + `backdrop-filter: blur(5px)`.
2. **Hero** (`section_home-hero`, ~810px) — full-bleed background image (`hero-bg.avif`), centered: animated "Drai's" SVG wordmark + "AFTER HOURS" image + h1 tagline "The night, refined after midnight" + two outlined buttons (PRIVATE EVENTS, BOOK A TABLE).
3. **Upcoming Events** (`section is-bordo is-gradient`, ~680px) — heading "UPCOMING EVENTS", Swiper carousel of 24 event cards, prev/next chevron arrows, "ALL EVENTS" outlined button. Gradient bg: `linear-gradient(rgba(0,0,0,.5), #260303)` over `#260303`.
4. **The Drai's Experience** (part of big `section is-bordo`, bordo bg) — centered heading "THE DRAI'S EXPERIENCE" flanked by horizontal rules; then a two-column block: crowd image (left, 665×492) + right column "VIP / BOTTLE SERVICE" (50px), subtitle "THE BEST AFTER HOURS CLUB IN LAS VEGAS" (12px Inter 800), BOOK NOW button.
5. **Private Events** (bordo bg) — two-column: left column "PRIVATE EVENTS" (50px) + "11,000 SQUARE FEET | 900 guests" (12px) + LEARN MORE button; right image (`private-events.webp`, 665×492).
6. **Instagram Gallery** (`#insta-section`, 420px) — full-bleed horizontal marquee of photos (each 300×420, object-fit cover). One photo has "Nights that don't end 'til 6 AM" text baked in. Auto-scrolls left, infinite.
7. **Divider Monogram** (`section is-bordo`, ~241px) — large "D" monogram centered, flanked by two horizontal rules. Bordo bg.
8. **Footer** (`footer`, 371px, bg `#2c0906`) — Drai's logo, address (`3595 S Las Vegas Blvd.`, maps link) + phone (`(702) 777-3800`, tel link), social icons (Instagram/X/Facebook); three link columns DRAI'S / EXPLORE / HOURS; legal bar `© Drai's Group 2026 ... | Privacy Policy | Sitemap | Website Terms of Use | Legal`; "Powered by Speakeasy" bottom-right.

## Interaction models
- **NavBar:** fixed; keeps subtle bordo tint + blur throughout. Mobile: hamburger menu.
- **Events carousel:** click-driven (Swiper) — chevron arrows page through; draggable. NOT scroll-driven.
- **Gallery:** time-driven CSS marquee (infinite horizontal auto-scroll).
- Everything else: static flow content with hover states on buttons/cards.

## Colors
- Black `#000`, Bordo `#260303`, Footer bordo `#2c0906`, Brand crimson `#ac0020`, Accent red `#e53838`, White `#fff`, Muted grey `#a1a1a1`.
