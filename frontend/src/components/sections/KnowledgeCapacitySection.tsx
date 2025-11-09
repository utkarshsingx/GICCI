import { knowledgeResources } from "@/mocks/data";

export const KnowledgeCapacitySection = () => {
  return (
    <section className="section-shell py-12 md:py-16" id="knowledge">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
              Knowledge & Capacity Building
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
              Training, certifications, and export readiness toolkits
            </h2>
            <p className="mt-4 text-sm">
              Structured learning journeys aligned with Government of India programmes
              to elevate compliance, finance, and market expansion capabilities.
            </p>
          </div>
          <a href="#learning" className="text-sm font-semibold text-brand-blue">
            View full learning library →
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {knowledgeResources.map((resource) => (
            <article
              key={resource.id}
              className="surface-card space-y-4 border border-brand-blue/10 bg-white/85 backdrop-blur"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-brand-blue">
                <span>{resource.format}</span>
                <span>{resource.level}</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy">{resource.title}</h3>
              {resource.duration ? (
                <p className="text-xs font-semibold text-brand-teal">
                  Duration: {resource.duration}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-2 text-xs text-brand-blue/80">
                {resource.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-blue/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

