import { buyerSellerMatches } from "@/mocks/data";

const statusStyles: Record<string, string> = {
  New: "bg-brand-blue/10 text-brand-blue",
  Engaged: "bg-accent-amber/10 text-accent-amber",
  Converted: "bg-accent-emerald/10 text-accent-emerald",
};

export const BuyerSellerEngagementSection = () => {
  return (
    <section className="container py-12 md:py-16" id="matchmaking">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Buyer–Seller Engagement
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
            Intelligent matchmaking outcomes powered by trade signals
          </h2>
          <p className="mt-4 text-sm">
            Data-backed recommendations curated through HS-code alignment, market intent
            signals, and compliance readiness benchmarks.
          </p>
        </div>
        <a href="#dashboard" className="text-sm font-semibold text-brand-blue">
          Open matchmaking dashboard →
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-brand-blue/15 bg-white/95 shadow-glow backdrop-blur">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-border/70 text-sm">
          <thead className="bg-brand-blue/10 text-left text-xs uppercase tracking-[0.25em] text-brand-teal">
            <tr>
              <th className="px-4 py-3">Buyer</th>
              <th className="px-4 py-3">Seller</th>
              <th className="px-4 py-3">Sector Council</th>
              <th className="px-4 py-3">Match Score</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-border/60">
            {buyerSellerMatches.map((match) => (
              <tr key={match.id} className="transition hover:bg-brand-blue/5">
                <td className="px-4 py-4">
                  <p className="font-semibold text-brand-navy">{match.buyerCompany}</p>
                  <p className="text-xs text-neutral-muted">{match.buyerCountry}</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-semibold text-brand-navy">{match.sellerCompany}</p>
                  <p className="text-xs text-neutral-muted">{match.sellerCountry}</p>
                </td>
                <td className="px-4 py-4 text-brand-blue">{match.sector}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-neutral-border/80">
                      <div
                        className="h-full rounded-full bg-brand-blue"
                        style={{ width: `${match.matchScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-brand-navy">
                      {match.matchScore}%
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      statusStyles[match.status]
                    }`}
                  >
                    {match.status}
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

