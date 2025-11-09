import { marketPreview } from "@/mocks/data";

export const MarketPreviewSection = () => {
  return (
    <section className="bg-neutral-surface py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">
              Market Intelligence Preview
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
              Priority HS codes & market signals
            </h2>
            <p className="mt-3 text-sm text-neutral-muted">
              Snapshot of high-opportunity trade corridors backed by India Trade Portal
              and FIEO data.
            </p>
          </div>
          <a href="/market" className="text-sm font-semibold text-brand-blue hover:text-brand-gold">
            Open full analytics →
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
          {marketPreview.map((item) => (
            <article
              key={item.id}
              className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur transition hover:border-brand-blue/40"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-brand-teal">
                <span>HS {item.hsCode}</span>
              </div>
              <p className="mt-3 text-sm text-brand-navy">{item.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-brand-blue">
                {item.priorityMarkets.map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 font-semibold"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

