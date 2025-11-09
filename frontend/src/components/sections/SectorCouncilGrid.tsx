import { sectorCouncils } from "@/mocks/data";

export const SectorCouncilGrid = () => {
  return (
    <section className="container py-12 md:py-16" id="sectors">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
          Sector Councils
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
          Industry councils anchored in export excellence
        </h2>
        <p className="mt-4 text-sm">
          Tap into council insights, upcoming delegations, and curated opportunities
          across textiles, pharma, IT, and emerging sectors aligned with national
          trade priorities.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {sectorCouncils.map((sector) => (
          <article key={sector.id} className="surface-card space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy">{sector.name}</h3>
              <p className="mt-2 text-sm text-neutral-muted">{sector.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-brand-blue">
              {sector.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-brand-blue/30 px-3 py-1"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm font-semibold text-brand-teal">
              <span>{sector.memberCount.toLocaleString()} members</span>
              <span>{sector.growthRate}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

