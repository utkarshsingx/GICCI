import { dashboardStats } from "@/mocks/data";

export const HomeHero = () => {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-brand-linear opacity-95" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.3),transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div className="container relative grid gap-10 py-16 text-center md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-20 md:text-left">
        <div className="space-y-6">
          <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-1 text-xs uppercase tracking-[0.3em] text-brand-gold shadow-glow md:justify-start">
            Digital trade facilitation hub
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Connecting India&apos;s MSMEs to global markets with policy-grade
            credibility.
          </h1>
          <p className="mx-auto max-w-xl text-base text-white/85 md:mx-0">
            Built on frameworks from FICCI, CII, and ASSOCHAM to deliver verified
            buyer–seller engagement, market intelligence, and policy advocacy in one
            unified platform aligned with the RAMP initiative.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#join"
              className="inline-flex items-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-navy transition hover:bg-white/90 hover:text-brand-navy"
            >
              Join the network
            </a>
            <a
              href="#policy"
              className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Explore policy advocacy
            </a>
          </div>
        </div>

        <div className="glass-panel mx-auto max-w-md md:ml-auto md:max-w-none">
          <p className="font-display text-lg text-brand-navy">
            Platform Impact Snapshot
          </p>
          <p className="mt-2 text-sm text-neutral-muted">
            Live metrics for buyer–seller engagement, policy feedback, and verified MSME onboarding under the RAMP mandate.
          </p>
          <div className="mt-6 grid gap-4">
            {dashboardStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl border border-brand-blue/20 bg-white/90 p-4 shadow-glow"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-brand-navy">
                  {stat.value}
                </p>
                {stat.delta ? (
                  <p className="mt-1 text-xs font-medium text-brand-teal">
                    {stat.delta}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

