"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@/components/icons";
import { EVENTS } from "@/lib/events-data";

const SCROLL_STEP = (242 + 24) * 3;

export function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: "smooth" });
  };

  return (
    <section className="bg-events-gradient py-20">
      <h2 className="text-center font-heading text-[40px] font-bold uppercase text-white mb-10">
        UPCOMING EVENTS
      </h2>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous events"
          onClick={() => scroll(-1)}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-12 w-12 bg-crimson text-white rounded-full grid place-items-center"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          type="button"
          aria-label="Next events"
          onClick={() => scroll(1)}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-12 w-12 bg-crimson text-white rounded-full grid place-items-center"
        >
          <ChevronLeftIcon className="h-6 w-6 rotate-180" />
        </button>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-5"
        >
          {EVENTS.map((e, i) => (
            <div key={`${e.title}-${i}`} className="flex-shrink-0 w-[242px] flex flex-col gap-1">
              <div className="group relative w-[242px] h-[242px] rounded-[20px] overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="242px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 rounded-[20px] flex flex-col items-center justify-center gap-8 opacity-0 transition-opacity duration-[350ms] group-hover:opacity-100"
                  style={{ background: "rgba(69,69,69,0.59)" }}
                >
                  <Link
                    href={e.ticketsHref}
                    className="border border-white rounded-[10px] px-5 py-2.5 font-heading text-base font-bold uppercase text-white hover:bg-white hover:text-black transition-colors text-center"
                  >
                    BUY TICKETS
                  </Link>
                  <Link
                    href={e.reservationHref}
                    className="border border-white rounded-[10px] px-5 py-2.5 font-heading text-base font-bold uppercase text-white hover:bg-white hover:text-black transition-colors text-center"
                  >
                    VIP RESERVATION
                  </Link>
                </div>
              </div>

              <p className="mt-2 text-xl leading-[25px] text-white" style={{ fontFamily: "var(--font-neue)" }}>
                {e.date} {e.time}
              </p>
              <p className="font-heading text-2xl leading-9 uppercase text-white">{e.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/events"
        className="mt-10 mx-auto block w-fit border border-white rounded-[10px] px-[26px] py-3 font-heading text-base font-bold uppercase text-white hover:bg-white hover:text-black transition-colors"
      >
        ALL EVENTS
      </Link>
    </section>
  );
}
