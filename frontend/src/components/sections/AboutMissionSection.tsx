export const AboutMissionSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Mission & Alignment
          </p>
          <h2 className="text-3xl font-semibold text-brand-navy">
            Establishing a unified digital ecosystem for international trade facilitation
          </h2>
          <p className="text-sm text-neutral-muted">
            The Import–Export Community Platform places Telangana&apos;s exporters at the
            centre while drawing on FICCI, CII, and ASSOCHAM playbooks to ensure
            institutional credibility, policy alignment, and sustainable cross-border
            growth.
          </p>
          <p className="text-sm text-neutral-muted">
            Co-created with the Government of Telangana and aligned with national
            RAMP incentives, the platform supports export growth, import substitution,
            and competitiveness through verified connections and policy engagement.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-brand-blue/20 bg-white p-8 shadow-card">
          <h3 className="text-xl font-semibold text-brand-navy">
            Strategic Objectives
          </h3>
          <ul className="space-y-3 text-sm text-neutral-muted">
            <li>
              • Digitise trade facilitation across buyer–seller engagement, market
              intelligence, and policy advocacy.
            </li>
            <li>
              • Accelerate MSME export readiness with compliance workflows, analytics, and
              knowledge resources.
            </li>
            <li>
              • Foster global alliances with embassies and chambers to unlock new market
              opportunities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

