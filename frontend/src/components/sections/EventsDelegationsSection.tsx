import { events } from "@/mocks/data";

export const EventsDelegationsSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16" id="events">
      <div className="absolute inset-0 bg-neutral-soft" aria-hidden />
      <div className="absolute inset-0 bg-brand-radial opacity-80" aria-hidden />
      <div className="container relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
              Events & Delegations
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
              RBSMs, trade missions, and policy briefings
            </h2>
            <p className="mt-4 text-sm">
              Engage with curated delegations and outreach initiatives coordinated with
              embassies and international chambers to expand global footprints.
            </p>
          </div>
          <a href="#delegations" className="text-sm font-semibold text-brand-blue">
            View delegation calendar →
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="surface-card space-y-4 border border-brand-blue/15 bg-white/85 backdrop-blur"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-brand-blue">
                <span>{event.category}</span>
                <span>{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-navy">{event.title}</h3>
              <p className="text-sm text-neutral-muted">{event.description}</p>
              <div className="flex flex-col gap-1 text-xs text-neutral-muted">
                <span>Location: {event.location}</span>
                <span>Organiser: {event.organiser}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

