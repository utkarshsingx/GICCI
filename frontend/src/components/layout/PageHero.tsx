import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  backgroundImage?: string;
  imageAlt?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  actions,
  backgroundImage,
  imageAlt,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden py-12 text-white md:py-16">
      {backgroundImage ? (
        <figure className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={imageAlt ?? title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </figure>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-teal to-brand-blue" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-navy/85 via-brand-navy/60 to-brand-navy/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.25),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(31,111,235,0.18),transparent_45%)] opacity-80" />
      <div className="relative container flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="mx-auto max-w-3xl md:mx-0">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-white md:text-[44px]">
            {title}
          </h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">{description}</p>
        </div>
        {actions ? (
          <div className="flex flex-wrap justify-center gap-4 md:justify-end">
            {actions}
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
    </section>
  );
};

