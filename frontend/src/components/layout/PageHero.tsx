type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-brand-navy via-brand-teal to-brand-blue py-16 text-white">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">{description}</p>
        </div>
        {actions ? <div className="flex gap-4">{actions}</div> : null}
      </div>
    </section>
  );
};

