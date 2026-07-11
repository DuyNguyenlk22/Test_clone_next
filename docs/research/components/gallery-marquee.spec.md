# GalleryMarquee Specification

- **Target file:** `src/components/GalleryMarquee.tsx` (client component recommended, or pure CSS)
- **Interaction model:** TIME-DRIVEN CSS marquee — infinite horizontal auto-scroll to the left.
- **Data:** import `GALLERY_PHOTOS` from `@/lib/events-data` (12 image paths).

## Layout
- Section `#insta-section`, full-bleed (no `.site-container` max-width — spans 100% viewport width), height ~420px, `overflow: hidden`, bordo/black bg.
- Inner track: a flex row containing the photos **duplicated twice** (render `[...GALLERY_PHOTOS, ...GALLERY_PHOTOS]`) so the loop is seamless.
- Apply `className="animate-marquee"` (keyframes `marquee-x` already in globals: translateX(0) → translateX(-50%)). Set `--marquee-duration: 40s` (or ~60s for a slower feel).
- Each photo: `width: 300px; height: 420px; flex-shrink:0; object-fit: cover;` no border-radius, no gap (or a tiny 2px gap). Use `next/image` with fixed width/height 300×420, `object-cover`.
- One of the photos already contains the baked-in text "Nights that don't end 'til 6 AM" — no separate overlay needed.

## Notes
- `.animate-marquee` uses the container translating -50% since the list is doubled → seamless loop.
- Pause on hover is optional (`hover:[animation-play-state:paused]`).

## Responsive
- Mobile: photos can shrink to ~220×300; section height ~300px. Marquee continues.
