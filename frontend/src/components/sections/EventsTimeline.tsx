import { events } from "@/mocks/data";

export const EventsTimeline = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Events Timeline
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
            Upcoming delegations & policy briefings
          </h2>
          <p className="mt-3 text-sm text-neutral-muted">
            Track chamber-led missions, webinars, and RBSMs to plan market outreach.
          </p>
        </div>
        <a href="/events" className="text-sm font-semibold text-brand-blue hover:text-brand-gold">
          View full calendar →
        </a>
      </div>

      <div className="mt-8 space-y-6">
        {events.map((event, index) => (
          <div key={event.id} className="relative pl-8">
            <span className="absolute left-0 top-2 flex h-full flex-col items-center">
              <span className="h-3 w-3 rounded-full border border-brand-blue/40 bg-brand-blue/20" />
              {index !== events.length - 1 ? (
                <span className="mt-1 h-full w-px flex-1 bg-brand-blue/10" aria-hidden />
              ) : null}
            </span>
            <div className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-brand-teal">
                <span>{event.date}</span>
                <span>{event.category}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">{event.title}</h3>
              <p className="mt-2 text-sm text-neutral-muted">{event.description}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-brand-blue">
                <span className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1">
                  {event.location}
                </span>
                <span className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1">
                  {event.organiser}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

