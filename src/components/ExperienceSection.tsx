import Image from "next/image";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <section className="bg-bordo py-20">
      <div className="site-container">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-1 bg-white/40" />
          <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-white md:whitespace-nowrap">
            THE DRAI’S EXPERIENCE
          </h2>
          <div className="h-px flex-1 bg-white/40" />
        </div>
      </div>
      <div className="site-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[665/492]">
            <Image
              src="/images/experience.webp"
              alt="Drai's crowd holding neon signs"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-heading text-[50px] font-bold leading-[50px] text-white">
              VIP
              <br />
              BOTTLE SERVICE
            </h3>
            <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.05em] text-white font-sf">
              THE BEST AFTER HOURS CLUB IN LAS VEGAS
            </p>
            <Link
              href="/events"
              className="mt-6 border border-white rounded-[10px] px-[26px] py-3 font-heading text-base font-bold uppercase text-white hover:bg-white hover:text-black transition-colors"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
