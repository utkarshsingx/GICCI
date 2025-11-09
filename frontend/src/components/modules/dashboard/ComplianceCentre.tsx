import { kycDocuments } from "@/mocks/data";

const statusStyles: Record<string, string> = {
  Approved: "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30",
  "In Review": "bg-brand-gold/15 text-brand-gold border border-brand-gold/30",
  Pending: "bg-neutral-background text-brand-navy border border-neutral-border/70",
  Rejected: "bg-accent-coral/15 text-accent-coral border border-accent-coral/30",
};

export const ComplianceCentre = () => {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Compliance & Certification
          </p>
          <h2 className="text-xl font-semibold text-brand-navy">
            Upload & monitor statutory approvals
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-muted">
            Ensure exports remain compliant with international standards and chamber
            requirements. Use this centre to track renewals and reviewer feedback.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
            Upload certificate
          </button>
          <button className="rounded-full border border-brand-blue/20 px-4 py-2 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
            Request validation
          </button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {kycDocuments.map((doc) => (
          <article
            key={doc.id}
            className="surface-card border border-brand-blue/15 bg-white/95 backdrop-blur transition hover:border-brand-blue/30"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-brand-navy">{doc.documentName}</h3>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  statusStyles[doc.status]
                }`}
              >
                {doc.status}
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral-muted">
              Last updated: {doc.lastUpdated === "—" ? "Pending submission" : doc.lastUpdated}
            </p>
            {doc.reviewer ? (
              <p className="text-xs text-brand-blue">Reviewer: {doc.reviewer}</p>
            ) : null}
            {doc.notes ? (
              <p className="mt-2 text-xs text-accent-amber">{doc.notes}</p>
            ) : null}
            <div className="mt-4 flex items-center gap-2">
              <button className="rounded-full border border-brand-blue/20 px-3 py-1 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
                View file
              </button>
              <button className="rounded-full border border-brand-blue/20 px-3 py-1 text-xs font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10">
                Add notes
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

