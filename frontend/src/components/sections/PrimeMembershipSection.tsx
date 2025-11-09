import { primeBenefits } from "@/mocks/data";

export const PrimeMembershipSection = () => {
  return (
    <section className="relative overflow-hidden py-12 text-white md:py-16" id="prime">
      <div className="absolute inset-0 bg-brand-linear" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.35),transparent_55%)]" aria-hidden />
      <div className="container relative grid gap-10 text-center md:grid-cols-[1fr_1.2fr] md:items-center md:text-left">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Prime Membership
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Priority visibility, verified leads, and compliance acceleration
          </h2>
          <p className="mt-4 text-sm text-white/80">
            Designed for growth-ready MSMEs seeking deeper integration into global value
            chains with institutional trust signals and concierge support.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#apply-prime"
              className="rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold uppercase tracking-wide text-brand-navy hover:bg-white"
            >
              Apply for Prime
            </a>
            <a
              href="#download-brief"
              className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:border-white"
            >
              Download membership brief
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {primeBenefits.map((benefit) => (
            <article
              key={benefit.id}
              className="rounded-2xl border border-white/25 bg-white/15 p-6 shadow-glow backdrop-blur-lg transition hover:border-brand-gold/60"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {benefit.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-white/80">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

