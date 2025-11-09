import { tradeProfile } from "@/mocks/data";

export const TradeProfilePanel = () => {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Trade Profile Setup
          </p>
          <h2 className="text-xl font-semibold text-brand-navy">
            Organisation overview & export footprint
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Maintain updated organisation credentials to improve matchmaking accuracy and
            sector council recommendations.
          </p>
        </div>
        <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
          Edit profile
        </button>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
          <h3 className="text-lg font-semibold text-brand-navy">
            {tradeProfile.organisationName}
          </h3>
          <div className="mt-4 grid gap-4 text-sm text-neutral-muted md:grid-cols-2">
            <div>
              <p className="font-semibold text-brand-navy">Sector Council</p>
              <p>{tradeProfile.sector}</p>
            </div>
            <div>
              <p className="font-semibold text-brand-navy">Headquarters</p>
              <p>{tradeProfile.headquarters}</p>
            </div>
            <div>
              <p className="font-semibold text-brand-navy">Founded</p>
              <p>{tradeProfile.foundedYear}</p>
            </div>
            <div>
              <p className="font-semibold text-brand-navy">Team strength</p>
              <p>{tradeProfile.employeeCount}</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-brand-blue/15 bg-brand-blue/5 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-teal">
              Prime membership
            </p>
            <p className="text-sm font-semibold text-brand-navy">
              Member since {tradeProfile.primeMemberSince}
            </p>
          </div>
        </div>

        <aside className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Priority export markets
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {tradeProfile.exportMarkets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue"
              >
                {market}
              </span>
            ))}
          </div>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Certifications & programmes
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-navy">
            {tradeProfile.certifications.map((cert) => (
              <li key={cert} className="rounded-xl border border-brand-blue/15 bg-brand-blue/5 px-4 py-2">
                {cert}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

