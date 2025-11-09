import {
  kycDocuments,
  onboardingTasks,
  registrationTimeline,
} from "@/mocks/data";

const statusBadgeStyles: Record<string, string> = {
  Approved: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
  "In Review": "bg-accent-amber/10 text-accent-amber border border-accent-amber/30",
  Pending: "bg-neutral-background text-brand-navy border border-neutral-border/70",
  Rejected: "bg-accent-coral/10 text-accent-coral border border-accent-coral/30",
};

export const UserRegistrationKyc = () => {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            User Registration & KYC
          </p>
          <h2 className="text-2xl font-semibold text-brand-navy">
            Verify credentials to activate trade dashboard access
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Track document approvals, monitor onboarding tasks, and stay aligned with
            chamber-led compliance requirements to unlock Prime membership capabilities.
          </p>
        </div>
        <div className="rounded-full border border-brand-blue/30 bg-white/70 px-4 py-2 text-xs font-semibold text-brand-blue shadow-glow">
          Current status: DGFT review in progress
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="surface-card border border-brand-blue/15 bg-white/90 backdrop-blur">
            <h3 className="text-lg font-semibold text-brand-navy">Document checklist</h3>
            <p className="text-sm text-neutral-muted">
              Provide verified documents to the policy cell and DGFT liaison to complete
              your onboarding.
            </p>
            <div className="mt-6 space-y-4">
              {kycDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-2xl border border-neutral-border/60 px-4 py-3 transition hover:border-brand-blue/30"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">
                        {doc.documentName}
                      </p>
                      <p className="text-xs text-neutral-muted">
                        Last updated: {doc.lastUpdated === "—" ? "Pending submission" : doc.lastUpdated}
                      </p>
                      {doc.notes ? (
                        <p className="mt-1 text-xs text-accent-amber">{doc.notes}</p>
                      ) : null}
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        statusBadgeStyles[doc.status]
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card border border-brand-blue/15 bg-white/90 backdrop-blur">
            <h3 className="text-lg font-semibold text-brand-navy">Onboarding tasks</h3>
            <p className="text-sm text-neutral-muted">
              Coordinate with facilitation desks to complete outstanding tasks ahead of
              account activation.
            </p>
            <div className="mt-6 space-y-4">
              {onboardingTasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-2xl border border-neutral-border/60 px-4 py-3 transition hover:border-brand-blue/30"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">{task.title}</p>
                      <p className="text-xs text-neutral-muted">{task.description}</p>
                      <p className="mt-1 text-xs text-brand-blue">Owner: {task.owner}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                        {task.status}
                      </span>
                      {task.dueDate ? (
                        <span className="text-xs text-neutral-muted">
                          Due {task.dueDate}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="surface-card border border-brand-blue/15 bg-white/90 backdrop-blur">
          <h3 className="text-lg font-semibold text-brand-navy">Registration timeline</h3>
          <p className="text-sm text-neutral-muted">
            Monitor key milestones from submission to activation. The policy cell will
            notify you when additional information is required.
          </p>
          <div className="mt-6 space-y-5">
            {registrationTimeline.map((event) => (
              <div key={event.id} className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-brand-blue/40 bg-brand-blue/10" />
                <p className="text-xs uppercase tracking-wide text-brand-teal">{event.date}</p>
                <p className="text-sm font-semibold text-brand-navy">{event.label}</p>
                <p className="text-xs text-neutral-muted">{event.description}</p>
                <span className="mt-2 inline-flex rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-brand-blue">
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

