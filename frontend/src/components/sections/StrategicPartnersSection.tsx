import Image from "next/image";

import { strategicPartners } from "@/mocks/data";

export const StrategicPartnersSection = () => {
  return (
    <section className="relative overflow-hidden py-12 text-white md:py-16">
      <figure className="absolute inset-0">
        <Image
          src="/images/chuttersnap-kyCNGGKCvyw-unsplash.jpg"
          alt="Strategic trade lanes for Telangana exporters"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </figure>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/70 to-brand-navy/40" aria-hidden />
      <div className="container relative z-10 space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Strategic Partnerships
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Collaboration with industry chambers and government programmes
          </h2>
          <p className="text-sm text-white/85">
            Institutional alliances ensure authoritative knowledge flows, compliance
            readiness, and global reach for Telangana members engaging with ports,
            free-trade zones, and embassy corridors.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {strategicPartners.map((partner) => (
            <article
              key={partner.id}
              className="rounded-2xl border border-white/25 bg-white/90 p-5 text-brand-navy shadow-glow backdrop-blur"
            >
              <h3 className="text-xl font-semibold">{partner.name}</h3>
              <p className="mt-2 text-sm text-neutral-muted">{partner.partnershipScope}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                Region: {partner.region}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

