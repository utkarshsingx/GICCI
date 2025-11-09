import Link from "next/link";
import { knowledgePreview } from "@/mocks/data";

export const KnowledgePreviewSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Knowledge Preview
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
            Toolkits & certifications to accelerate readiness
          </h2>
          <p className="mt-3 text-sm text-neutral-muted">
            Access curated learning journeys developed with FICCI, CII, and ASSOCHAM
            knowledge partners.
          </p>
        </div>
        <Link
          href="/knowledge"
          className="text-sm font-semibold text-brand-blue hover:text-brand-gold"
        >
          Explore knowledge hub →
        </Link>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
        {knowledgePreview.map((item) => (
          <article
            key={item.id}
            className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur transition hover:border-brand-blue/40"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-teal">
              {item.format}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-brand-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-muted">{item.description}</p>
            <Link
              href={item.link}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              View details <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

