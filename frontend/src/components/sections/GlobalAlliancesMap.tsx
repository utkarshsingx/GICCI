import { alliances } from "@/mocks/data";

export const GlobalAlliancesMap = () => {
  const grouped = alliances.reduce<Record<string, typeof alliances>>((acc, alliance) => {
    acc[alliance.region] = acc[alliance.region] ?? [];
    acc[alliance.region].push(alliance);
    return acc;
  }, {});

  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Global Alliances
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-navy">
            Chambers & embassies by region
          </h2>
          <p className="mt-3 text-sm text-neutral-muted">
            Connect with international trade desks to coordinate delegations, market
            entry, and policy follow-ups.
          </p>
          <div className="mt-6 space-y-6">
            {Object.entries(grouped).map(([region, list]) => (
              <div key={region} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
                  {region}
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {list.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-4 text-sm text-brand-navy"
                    >
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-brand-teal">
                        {item.partnershipType}
                      </p>
                      <p className="mt-2 text-xs text-neutral-muted">
                        {item.contactPerson} · {item.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden rounded-2xl border border-brand-blue/15 bg-gradient-to-br from-brand-navy via-brand-blue/70 to-brand-teal/60 p-8 text-white shadow-card lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-gold">
              Outreach Map
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              MoUs across ASEAN, EU, LATAM, and GCC corridors
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Embassy trade wings and chambers coordinate verified matchmaking for Prime
              members and policy consultations.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
            Powered by FICCI · CII · ASSOCHAM networks
          </p>
        </div>
      </div>
    </section>
  );
};

