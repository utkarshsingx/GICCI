import { financeTransactions, performanceMetrics } from "@/mocks/data";

const trendIcon: Record<string, string> = {
  up: "▲",
  down: "▼",
  steady: "◆",
};

const statusTagStyles: Record<string, string> = {
  Paid: "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30",
  Pending: "bg-brand-gold/15 text-brand-gold border border-brand-gold/30",
  Failed: "bg-accent-coral/15 text-accent-coral border border-accent-coral/30",
};

export const ReportsAndFinance = () => {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Reports & Finance
          </p>
          <h2 className="text-2xl font-semibold text-brand-navy">
            Performance analytics and subscription management
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Visualise platform engagement, track sector performance, and reconcile Prime
            membership revenue with Razorpay / Stripe integration checkpoints.
          </p>
        </div>
        <div className="inline-flex gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-xs text-brand-blue shadow-glow">
          <span className="font-semibold uppercase tracking-[0.2em]">Last generated:</span>
          <span>09 Nov 2025 · 05:45 PM IST</span>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <div
            key={metric.id}
            className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-teal">
              {metric.label}
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-brand-navy">{metric.value}</span>
              <span className="text-xs font-semibold text-brand-blue">
                {trendIcon[metric.trend]} {metric.change}
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-brand-blue/10">
              <div
                className="h-full rounded-full bg-brand-linear"
                style={{ width: metric.trend === "up" ? "72%" : metric.trend === "down" ? "38%" : "55%" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">
                Membership revenue tracker
              </h3>
              <p className="text-sm text-neutral-muted">
                Reconcile Prime plan collections and follow up on pending renewals.
              </p>
            </div>
            <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
              Export ledger
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-border/70">
            <table className="min-w-full divide-y divide-neutral-border/70 text-sm">
              <thead className="bg-neutral-background/70 text-left text-xs uppercase tracking-[0.3em] text-brand-teal">
                <tr>
                  <th className="px-4 py-3">Organisation</th>
                  <th className="px-4 py-3">Sector</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-border/70">
                {financeTransactions.map((txn) => (
                  <tr key={txn.id} className="transition hover:bg-brand-blue/5">
                    <td className="px-4 py-3 text-sm text-brand-navy">{txn.company}</td>
                    <td className="px-4 py-3 text-sm text-neutral-muted">{txn.sector}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-brand-blue">{txn.plan}</td>
                    <td className="px-4 py-3 text-sm text-brand-navy">{txn.amount}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          statusTagStyles[txn.status]
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-neutral-muted">
                      {txn.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
          <h3 className="text-lg font-semibold text-brand-navy">Highlights & alerts</h3>
          <div className="mt-4 space-y-4 text-sm text-brand-blue">
            <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-4">
              <p className="font-semibold text-brand-navy">Upcoming revenue actions</p>
              <p className="mt-1 text-sm text-brand-blue">
                7 Prime renewals due this month; auto reminders scheduled via Razorpay.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-4 text-brand-navy">
              <p className="font-semibold">Engagement insights</p>
              <p className="mt-1 text-sm">
                IT & Digital Services sector leading interactions; textiles cohort flagged for additional buyer outreach.
              </p>
            </div>
            <div className="rounded-2xl border border-accent-emerald/30 bg-accent-emerald/10 p-4 text-brand-navy">
              <p className="font-semibold">Compliance pipeline</p>
              <p className="mt-1 text-sm">
                18 certificates pending verification—escalated to Compliance Desk for action within 48 hours.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

