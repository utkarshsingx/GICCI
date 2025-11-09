import { platformMilestones } from "@/mocks/data";

export const PlatformMilestonesSection = () => {
  return (
    <section className="bg-neutral-surface py-12 md:py-16">
      <div className="container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
          Platform Roadmap
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
          Milestones in building India&apos;s trade facilitation hub
        </h2>

        <div className="mt-8 space-y-6">
          {platformMilestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="grid gap-4 rounded-2xl border border-neutral-border bg-white p-6 md:grid-cols-[120px_1fr]"
            >
              <div className="flex flex-col items-start gap-2">
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                  {milestone.year}
                </span>
                <span className="text-sm font-semibold text-brand-teal">
                  Phase {index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-navy">{milestone.title}</h3>
                <p className="mt-2 text-sm text-neutral-muted">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

