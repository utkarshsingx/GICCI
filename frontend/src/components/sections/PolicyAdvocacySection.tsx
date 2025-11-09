import { policyBriefs } from "@/mocks/data";

export const PolicyAdvocacySection = () => {
  return (
    <section className="section-shell border-y border-neutral-border/40 py-12 md:py-16" id="policy">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
              Policy Advocacy Hub
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
              Institutional policy updates & MSME feedback loops
            </h2>
            <p className="mt-4 text-sm">
              Track live policy advisories, submit industry feedback, and stay aligned
              with Government of India directives to accelerate export readiness.
            </p>
          </div>
          <a href="#feedback" className="text-sm font-semibold text-brand-blue hover:text-brand-gold">
            Submit MSME feedback →
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {policyBriefs.map((brief) => (
            <article
              key={brief.id}
              className="surface-card flex flex-col gap-4 border border-brand-blue/10 bg-surface-mesh"
            >
              <p className="text-xs uppercase tracking-wide text-brand-teal">
                {brief.source}
              </p>
              <h3 className="text-xl font-semibold text-brand-navy">{brief.title}</h3>
              <p className="text-sm text-neutral-muted">{brief.summary}</p>
              <div className="mt-auto flex items-center justify-between text-xs text-neutral-muted">
                <span>Published {brief.publishedOn}</span>
                <a href={brief.link ?? "#"} className="font-semibold text-brand-blue">
                  Read brief →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

