import { policyFeedbackQueue } from "@/mocks/data";

const priorityStyles: Record<string, string> = {
  High: "bg-accent-coral/15 text-accent-coral border border-accent-coral/30",
  Medium: "bg-brand-gold/15 text-brand-gold border border-brand-gold/30",
  Low: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
};

const statusStyles: Record<string, string> = {
  "In Review": "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
  New: "bg-neutral-background text-brand-navy border border-neutral-border/70",
  Escalated: "bg-accent-amber/15 text-accent-amber border border-accent-amber/30",
  Resolved: "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30",
};

export const PolicyCellQueue = () => {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Policy Cell
          </p>
          <h2 className="text-2xl font-semibold text-brand-navy">
            Feedback synthesis & escalation tracker
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Review MSME submissions for DGFT, DPIIT, and state-level representations. Route
            priority items to appropriate chambers and government partners.
          </p>
        </div>
        <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
          Generate policy brief
        </button>
      </header>

      <div className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
        <div className="overflow-hidden rounded-2xl border border-neutral-border/70">
          <table className="min-w-full divide-y divide-neutral-border/70 text-sm">
            <thead className="bg-neutral-background/70 text-left text-xs uppercase tracking-[0.3em] text-brand-teal">
              <tr>
                <th className="px-4 py-3">Organisation</th>
                <th className="px-4 py-3">Sector Council</th>
                <th className="px-4 py-3">Theme</th>
                <th className="px-4 py-3">Submitted</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-border/70">
              {policyFeedbackQueue.map((item) => (
                <tr key={item.id} className="transition hover:bg-brand-blue/5">
                  <td className="px-4 py-3 text-sm text-brand-navy">
                    <p className="font-semibold">{item.organisation}</p>
                    <p className="text-xs text-neutral-muted">{item.summary}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-muted">{item.sector}</td>
                  <td className="px-4 py-3 text-sm text-brand-blue">{item.theme}</td>
                  <td className="px-4 py-3 text-xs text-neutral-muted">{item.submissionDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        priorityStyles[item.priority]
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        statusStyles[item.status]
                      }`}
                    >
                      {item.status}
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

