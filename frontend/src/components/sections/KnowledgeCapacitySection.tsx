import Image from "next/image";

import { knowledgeResources } from "@/mocks/data";

export const KnowledgeCapacitySection = () => {
  return (
    <section className="section-shell py-12 md:py-16" id="knowledge">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
              Knowledge & Capacity Building
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
              Training, certifications, and export readiness toolkits
            </h2>
            <p className="mt-4 text-sm">
              Structured learning journeys aligned with Government of Telangana export
              priorities and national programmes to elevate compliance, finance, and
              market expansion capabilities.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-end">
            <a href="#learning" className="text-sm font-semibold text-brand-blue">
              View full learning library →
            </a>
            <figure className="relative h-48 w-full overflow-hidden rounded-2xl border border-brand-blue/20 bg-white/60 shadow-card md:w-64">
              <Image
                src="/images/konstantin-dyadyun-RH760wgrHRc-unsplash.jpg"
                alt="Capacity building workshop for Telangana MSMEs"
                fill
                sizes="(min-width: 768px) 256px, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-navy">
                Skilling cohorts
              </figcaption>
            </figure>
          </div>
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

