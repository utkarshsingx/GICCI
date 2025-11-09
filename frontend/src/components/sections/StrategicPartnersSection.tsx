import { strategicPartners } from "@/mocks/data";

export const StrategicPartnersSection = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
          Strategic Partnerships
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
          Collaboration with industry chambers and government programmes
        </h2>
        <p className="mt-4 text-sm text-neutral-muted">
          Institutional alliances ensure authoritative knowledge flows, compliance
          readiness, and global reach for platform members.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {strategicPartners.map((partner) => (
          <article key={partner.id} className="surface-card space-y-3">
            <h3 className="text-xl font-semibold text-brand-navy">{partner.name}</h3>
            <p className="text-sm text-neutral-muted">{partner.partnershipScope}</p>
            <p className="text-xs uppercase tracking-wide text-brand-blue">
              Region: {partner.region}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

