import Link from "next/link";
import { policyHighlights } from "@/mocks/data";

export const PolicyHighlightsTicker = () => {
  return (
    <section className="bg-brand-navy text-white">
      <div className="container flex flex-col gap-4 overflow-hidden py-6 md:flex-row md:items-center md:gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
          Policy Highlights
        </p>
        <div className="flex-1">
          <div className="flex min-w-full gap-3 overflow-x-auto pb-2">
            {policyHighlights.map((item) => (
              <Link
                key={item.id}
                href={item.link ?? "#"}
                className="inline-flex min-w-[280px] shrink-0 items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-gold hover:bg-white/20 md:min-w-[320px]"
              >
                <span className="rounded-full bg-brand-gold px-2 py-1 text-xs font-semibold text-brand-navy">
                  {item.publishedOn}
                </span>
                <span className="truncate">{item.title}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                  {item.source}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

