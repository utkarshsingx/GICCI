import { featuredProfiles } from "@/mocks/data";

export const FeaturedProfilesSection = () => {
  return (
    <section className="container py-12 md:py-16" id="featured">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Buyer–Seller Engagement
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
            Spotlight on verified importers & exporters
          </h2>
          <p className="mt-4 max-w-2xl">
            Curated success stories from Prime members showcasing cross-border trade,
            compliance excellence, and sector leadership.
          </p>
        </div>
        <a
          href="#matchmaking"
          className="text-sm font-semibold text-brand-blue hover:text-brand-gold"
        >
          View buyer–seller matchmaking →
        </a>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {featuredProfiles.map((profile) => (
          <article key={profile.id} className="surface-card space-y-4">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                {profile.role}
              </span>
              <span className="text-xs uppercase tracking-wide text-brand-teal">
                {profile.sector}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-navy">{profile.name}</h3>
              <p className="text-sm font-semibold text-neutral-muted">{profile.company}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-blue">
                {profile.country}
              </p>
            </div>
            <p className="text-sm text-neutral-muted">{profile.highlight}</p>
            <div className="rounded-lg bg-brand-blue/10 px-4 py-3 text-sm font-semibold text-brand-blue">
              {profile.impactMetric}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

