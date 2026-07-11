# EventsCarousel Specification

- **Target file:** `src/components/EventsCarousel.tsx` (client component)
- **Interaction model:** CLICK-DRIVEN carousel (Swiper-like). Prev/next chevron arrows page the track; track is horizontally scrollable/draggable. NOT scroll-linked.
- **Data:** import `EVENTS` from `@/lib/events-data` (24 items: `{date, time, title, image, ticketsHref, reservationHref}`).

## Section
- `<section className="bg-events-gradient ...">` (utility already in globals: `linear-gradient(rgba(0,0,0,.5), #260303)` over `#260303`). Vertical padding ~80px.
- Heading `<h2>` "UPCOMING EVENTS": font `var(--font-beloved)` 40px 700 uppercase white, text-align center, margin-bottom ~40px.
- Below heading: the carousel row (arrows + track).
- Below track: centered "ALL EVENTS" outlined button → `/events` (same pill style: 1px white border, radius 10px, padding 12px 26px, Beloved 16px 700 uppercase, hover `bg-white text-black`). margin-top ~40px.

## Carousel mechanics
- Track: horizontal flex row, `gap: 24px`, `overflow-x: auto` with `.no-scrollbar`, `scroll-behavior: smooth`, `scroll-snap-type: x mandatory` (optional).
- Prev/next arrow buttons flank the track (absolute left/right, vertically centered) — circular, ~48px, bg `#ac0020`/bordo with subtle style, contain `ChevronLeftIcon` (rotate 180deg for right). Clicking scrolls the track by ~one card width × visible count. Use a `ref` + `scrollBy`.
- On desktop ~4–4.5 cards visible; the container is `.site-container` width but track can bleed.

## Event card (each)
- Width **242px**, height 315px, flex column, gap 4px, flex-shrink-0, `scroll-snap-align:start`.
- **Image wrap:** 242×242 square, `border-radius:20px`, `overflow:hidden`, `position:relative`.
  - `<Image>` `event.image` fill `object-cover`, rounded 20px.
  - **Hover overlay** (`.event_overlay`): `absolute inset-0`, `background: rgba(69,69,69,0.59)`, `border-radius:20px`, `opacity:0` → `opacity:1` on hover, `transition: 0.35s`, flex column `items-center justify-center gap-8` (32px). Contains two outlined buttons:
    - BUY TICKETS → `ticketsHref`
    - VIP RESERVATION → `reservationHref`
    - Both: outlined white pill, Beloved 16px 700 uppercase, padding ~10px 20px, radius ~10px. Hover on button: `bg-white text-black`.
- **Date** `<p>`: `event.date + " " + event.time` e.g. "Jul 9 Evening (after midnight)". Font `var(--font-neue)` (Neue Haas) 20px weight 400, line-height 25px, white. margin-top 8px.
- **Name** `<p>`: `event.title`, font `var(--font-beloved)` 24px weight 500 (700 ok), UPPERCASE, line-height 36px, white.

## Responsive
- Mobile: cards stay 242px (or slightly smaller ~220px), fewer visible, swipe/drag to scroll; arrows may hide on very small screens. Heading ~28px.
