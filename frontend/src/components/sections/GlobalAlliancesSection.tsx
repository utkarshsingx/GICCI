import { alliances } from "@/mocks/data";

export const GlobalAlliancesSection = () => {
  return (
    <section className="section-shell py-16" id="alliances">
      <div className="container">
        <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
          Global Trade Alliances
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
          International chambers, embassies, and MoU partners
        </h2>
        <p className="mt-4 text-sm">
          Access partnership desks, embassy coordinators, and sectoral MoUs to unlock
          cross-border procurement and market access opportunities.
        </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {alliances.map((alliance) => (
            <article
              key={alliance.id}
              className="surface-card space-y-3 border border-brand-blue/10 bg-white/85 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-wide text-brand-blue">
                {alliance.partnershipType} · {alliance.region}
              </p>
              <h3 className="text-lg font-semibold text-brand-navy">{alliance.title}</h3>
              <div className="rounded-lg bg-brand-blue/5 px-4 py-3 text-sm text-neutral-muted">
                <p>Contact: {alliance.contactPerson}</p>
                <p>Email: {alliance.email}</p>
              </div>
              <a href="#connect" className="text-sm font-semibold text-brand-blue">
                Schedule a connect →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

