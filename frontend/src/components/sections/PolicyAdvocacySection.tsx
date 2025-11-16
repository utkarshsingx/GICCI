import Image from "next/image";

import { policyBriefs } from "@/mocks/data";

export const PolicyAdvocacySection = () => {
  return (
    <section className="section-shell border-y border-neutral-border/40 py-12 md:py-16" id="policy">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
              Policy Advocacy Hub
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
              Institutional policy updates & MSME feedback loops
            </h2>
            <p className="mt-4 text-sm">
              Track live advisories, submit industry feedback, and stay aligned with
              Government of Telangana&apos;s export cell and national directives to accelerate
              trade readiness.
            </p>
            <a href="#feedback" className="mt-4 inline-flex text-sm font-semibold text-brand-blue hover:text-brand-gold">
              Submit MSME feedback →
            </a>
          </div>

          <figure className="relative h-64 overflow-hidden rounded-3xl border border-brand-blue/20 bg-white/70 shadow-glow">
            <Image
              src="/images/john-simmons-N7_NUUtCkDU-unsplash.jpg"
              alt="Policy roundtable with trade officials"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Telangana EXIM policy cell
            </figcaption>
          </figure>
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

