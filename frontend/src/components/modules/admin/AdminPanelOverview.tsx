import { adminEvents, adminUsers } from "@/mocks/data";

const statusChipStyles: Record<string, string> = {
  Active: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
  Pending: "bg-accent-amber/10 text-accent-amber border border-accent-amber/30",
  Suspended: "bg-accent-coral/10 text-accent-coral border border-accent-coral/30",
  Published: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
  Scheduled: "bg-brand-gold/10 text-brand-gold border border-brand-gold/30",
  Draft: "bg-neutral-background text-brand-navy border border-neutral-border/70",
};

const summaryCards = [
  {
    id: "summary-users",
    label: "Total verified members",
    value: "1,240",
    delta: "+32 since last week",
  },
  {
    id: "summary-events",
    label: "Active events & delegations",
    value: "12",
    delta: "5 in draft pipeline",
  },
  {
    id: "summary-feedback",
    label: "Policy feedback submissions",
    value: "92",
    delta: "7 pending responses",
  },
];

export const AdminPanelOverview = () => {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Administrative Control
          </p>
          <h2 className="text-2xl font-semibold text-brand-navy">
            Manage members, events, and policy pipelines
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Oversight console for chamber administrators to onboard MSMEs, publish trade
            delegations, and synthesise policy advocacy insights.
          </p>
        </div>
        <div className="inline-flex gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-xs text-brand-blue shadow-glow">
          <span className="font-semibold uppercase tracking-[0.2em]">Last sync: </span>
          <span>09 Nov 2025 · 06:30 PM IST</span>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {summaryCards.map((card) => (
          <div
            key={card.id}
            className="surface-card border border-brand-blue/15 bg-white/90 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-teal">{card.label}</p>
            <p className="mt-3 text-3xl font-semibold text-brand-navy">{card.value}</p>
            <p className="text-xs text-brand-blue">{card.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="surface-card border border-brand-blue/15 bg-white/90 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">Member registry</h3>
              <p className="text-sm text-neutral-muted">
                Monitor onboarding status, sector allocation, and platform activity.
              </p>
            </div>
            <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
              Export CSV
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-border/70">
            <table className="min-w-full divide-y divide-neutral-border/70 text-sm">
              <thead className="bg-neutral-background/70 text-left text-xs uppercase tracking-[0.3em] text-brand-teal">
                <tr>
                  <th className="px-4 py-3">Organisation</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Sector Council</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-border/70">
                {adminUsers.map((user) => (
                  <tr key={user.id} className="transition hover:bg-brand-blue/5">
                    <td className="px-4 py-3 text-sm text-brand-navy">{user.company}</td>
                    <td className="px-4 py-3 text-sm text-neutral-muted">{user.contactName}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-brand-blue">
                      {user.role}
                    </td>
                    <td className="px-4 py-3 text-sm text-brand-navy">{user.sector}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          statusChipStyles[user.status]
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-neutral-muted">
                      {user.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="surface-card border border-brand-blue/15 bg-white/90 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-brand-navy">Event operations</h3>
              <p className="text-sm text-neutral-muted">
                Track delegated events requiring publishing or policy review.
              </p>
            </div>
            <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
              Create event
            </button>
          </div>
          <div className="mt-5 space-y-4">
            {adminEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-neutral-border/70 px-4 py-3 transition hover:border-brand-blue/30"
              >
                <p className="text-xs uppercase tracking-wide text-brand-teal">
                  {event.date} · {event.type}
                </p>
                <p className="text-sm font-semibold text-brand-navy">{event.title}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-neutral-muted">Owner: {event.owner}</span>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      statusChipStyles[event.status]
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

