import Image from "next/image";
import Link from "next/link";
import { DraisLogo } from "@/components/icons";
import { cn } from "@/lib/utils";

const pillClasses =
  "border border-white rounded-[10px] px-[26px] py-3 font-heading text-base font-bold uppercase text-white transition-colors hover:bg-white hover:text-black";

export function Hero() {
  return (
    <section className="relative h-[810px] min-h-[85vh] w-full overflow-hidden">
      <Image
        src="/images/hero-bg.avif"
        alt="Drai's After Hours interior"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="site-container flex flex-col items-center">
          <DraisLogo className="w-[240px] md:w-[340px] h-auto text-white" />
          <Image
            src="/images/after-hours-logo.avif"
            alt="AFTER HOURS"
            width={320}
            height={77}
            className="w-[300px] md:w-[320px] h-auto -mt-2"
          />

          <h1 className="font-heading text-[25px] font-bold uppercase tracking-wide text-white mt-6">
            The night, refined after midnight
          </h1>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href="/private-events" className={cn(pillClasses)}>
              Private Events
            </Link>
            <Link href="/reservations" className={cn(pillClasses)}>
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
