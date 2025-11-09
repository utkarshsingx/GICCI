import { engagementThreads } from "@/mocks/data";

const stageStyles: Record<string, string> = {
  "New Lead": "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
  "Active Negotiation": "bg-brand-gold/15 text-brand-gold border border-brand-gold/30",
  "Closed Won": "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30",
  "Closed Lost": "bg-accent-coral/15 text-accent-coral border border-accent-coral/30",
};

export const EngagementCommunications = () => {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Buyer–Seller Engagement
          </p>
          <h2 className="text-xl font-semibold text-brand-navy">
            Messages & negotiation threads
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Track communications with potential partners, align with sector councils, and
            escalate high-value leads to the trade facilitation desk.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
            Filter threads
          </button>
          <button className="rounded-full bg-brand-linear px-4 py-2 text-xs font-semibold text-white shadow-card transition hover:brightness-110">
            Start new conversation
          </button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {engagementThreads.map((thread) => (
          <article
            key={thread.id}
            className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur transition hover:border-brand-blue/30"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-brand-navy">
                {thread.partnerCompany}
              </h3>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  stageStyles[thread.stage]
                }`}
              >
                {thread.stage}
              </span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-brand-teal">
              {thread.partnerCountry} · {thread.sector}
            </p>
            <p className="mt-3 text-sm text-neutral-muted">{thread.lastMessageSnippet}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-brand-blue">
              <span>{thread.updatedAt}</span>
              <button className="text-xs font-semibold text-brand-blue hover:text-brand-gold">
                Open thread →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

