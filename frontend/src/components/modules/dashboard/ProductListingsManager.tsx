import { productListings } from "@/mocks/data";

const statusStyles: Record<string, string> = {
  Published: "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30",
  "Under Review": "bg-brand-gold/15 text-brand-gold border border-brand-gold/30",
  Draft: "bg-neutral-background text-brand-navy border border-neutral-border/70",
};

export const ProductListingsManager = () => {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Product & Trade Listings
          </p>
          <h2 className="text-xl font-semibold text-brand-navy">
            Manage export offerings and HS-code metadata
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Keep offerings updated with compliance tags and target markets to maximise
            visibility across sector councils and trade missions.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
            Import from CSV
          </button>
          <button className="rounded-full bg-brand-linear px-4 py-2 text-xs font-semibold text-white shadow-card transition hover:brightness-110">
            New listing
          </button>
        </div>
      </header>

      <div className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
        <div className="overflow-hidden rounded-2xl border border-neutral-border/70">
          <table className="min-w-full divide-y divide-neutral-border/70 text-sm">
            <thead className="bg-neutral-background/70 text-left text-xs uppercase tracking-[0.3em] text-brand-teal">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">HS Code</th>
                <th className="px-4 py-3">Sector Council</th>
                <th className="px-4 py-3">Target Markets</th>
                <th className="px-4 py-3">Compliance Tags</th>
                <th className="px-4 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-border/70">
              {productListings.map((listing) => (
                <tr key={listing.id} className="transition hover:bg-brand-blue/5">
                  <td className="px-4 py-3 text-sm text-brand-navy font-semibold">
                    {listing.productName}
                  </td>
                  <td className="px-4 py-3 text-sm text-brand-blue">{listing.hsCode}</td>
                  <td className="px-4 py-3 text-sm text-neutral-muted">
                    {listing.sectorCouncil}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {listing.targetMarkets.map((market) => (
                        <span
                          key={market}
                          className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue"
                        >
                          {market}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {listing.complianceTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-semibold text-brand-navy"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[listing.status]
                      }`}
                    >
                      {listing.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

