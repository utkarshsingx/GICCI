import { advisoryCouncil } from "@/mocks/data";

export const AdvisoryCouncilSection = () => {
  return (
    <section className="bg-neutral-surface py-16">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Advisory Council
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
            Steering committee with policy, compliance, and international expertise
          </h2>
          <p className="mt-4 text-sm">
            An industry-led governance board ensures that platform interventions remain
            aligned with national trade priorities and MSME needs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advisoryCouncil.map((advisor) => (
            <article key={advisor.id} className="surface-card space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">{advisor.name}</h3>
                <p className="text-sm font-semibold text-brand-blue">
                  {advisor.designation}
                </p>
              </div>
              <p className="text-xs uppercase tracking-wide text-neutral-muted">
                {advisor.organisation}
              </p>
              <p className="text-sm text-neutral-muted">
                Focus: {advisor.focusArea}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

