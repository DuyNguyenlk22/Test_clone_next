import { DMonogram } from "@/components/icons";

export function DividerMonogram() {
  return (
    <section className="bg-bordo py-12">
      <div className="site-container">
        <div className="flex items-center justify-center gap-8">
          <div className="h-px flex-1 bg-white/40" />
          <DMonogram className="h-[100px] md:h-[132px] w-auto text-white shrink-0" />
          <div className="h-px flex-1 bg-white/40" />
        </div>
      </div>
    </section>
  );
}
