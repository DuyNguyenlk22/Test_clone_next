import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/events-data";

export function GalleryMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-bordo h-[300px] md:h-[420px]">
      <div
        className="flex h-full w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": "50s" } as React.CSSProperties}
      >
        {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((src, i) => (
          <div
            key={i}
            className="relative h-[300px] w-[214px] shrink-0 md:h-[420px] md:w-[300px]"
          >
            <Image
              src={src}
              alt="Drai's nightlife"
              width={300}
              height={420}
              className="h-[300px] w-[214px] object-cover md:h-[420px] md:w-[300px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
