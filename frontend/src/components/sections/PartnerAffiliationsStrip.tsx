import Image from "next/image";
import { partnerAffiliations } from "@/mocks/data";

export const PartnerAffiliationsStrip = () => {
  return (
    <section className="border-y border-neutral-border/40 bg-neutral-surface py-8 md:py-10">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-teal">
          Strategic Alignment
        </p>
        <div className="mt-4 flex snap-x gap-6 overflow-x-auto pb-2 md:gap-10">
          {partnerAffiliations.map((partner) => (
            <div
              key={partner.id}
              className="flex min-w-[160px] snap-start items-center justify-center rounded-2xl border border-neutral-border bg-white px-6 py-4 shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

