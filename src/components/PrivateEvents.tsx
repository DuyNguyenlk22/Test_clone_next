import Image from "next/image";
import Link from "next/link";

export function PrivateEvents() {
  return (
    <section className="bg-bordo py-20">
      <div className="site-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-[34px] md:text-[50px] font-bold leading-[50px] text-white">
              PRIVATE EVENTS
            </h2>
            <p className="mt-3 text-xs font-extrabold tracking-[0.05em] text-white font-sf">
              11,000 SQUARE FEET | 900 guests
            </p>
            <Link
              href="/private-events"
              className="mt-6 inline-block border border-white rounded-[10px] px-[26px] py-3 font-heading text-base font-bold uppercase text-white hover:bg-white hover:text-black transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
          <div className="relative w-full aspect-[665/492]">
            <Image
              src="/images/private-events.webp"
              alt="Drai's private event bar interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
