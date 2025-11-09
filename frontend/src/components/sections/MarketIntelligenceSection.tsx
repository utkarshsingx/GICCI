import { marketInsights } from "@/mocks/data";

export const MarketIntelligenceSection = () => {
  return (
    <section className="container py-16" id="market">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Market Intelligence & Reports
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
            HS-code insights and export performance dashboards
          </h2>
          <p className="mt-4 text-sm">
            Discover high-growth markets, compare export values, and prioritise
            expansion routes backed by FIEO and India Trade Portal datasets.
          </p>
        </div>
        <form className="glass-panel flex flex-col gap-3 md:w-80">
          <label htmlFor="hs-search" className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
            HS Code Quick Lookup
          </label>
          <input
            id="hs-search"
            type="text"
            placeholder="Try 620520 or 300490"
            className="rounded-lg border border-brand-blue/30 px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/40"
          />
          <button
            type="submit"
            className="rounded-lg bg-brand-blue px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-navy"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {marketInsights.map((insight) => (
          <article
            key={insight.id}
            className="surface-card space-y-4 border border-brand-blue/10 bg-white/85 backdrop-blur"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-brand-blue">
              <span>HS Code {insight.hsCode}</span>
              <span>{insight.growth}</span>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy">{insight.product}</h3>
            <p className="text-sm text-neutral-muted">
              Export Value: {insight.exportValue}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-brand-blue">
              {insight.topMarkets.map((market) => (
                <span key={market} className="rounded-full border border-brand-blue/40 px-3 py-1">
                  {market}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

