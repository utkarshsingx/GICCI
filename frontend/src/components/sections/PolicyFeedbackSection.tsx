export const PolicyFeedbackSection = () => {
  return (
    <section className="container py-12 md:py-16" id="feedback">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
            MSME Feedback Loop
          </p>
          <h2 className="text-3xl font-semibold text-brand-navy">
            Submit policy insights and industry challenges
          </h2>
          <p className="text-sm text-neutral-muted">
            The Policy Advocacy Cell synthesises MSME submissions for chamber-led
            representations to DGFT, DPIIT, and state export promotion councils. Share
            tariff, compliance, and logistics inputs to inform quarterly policy notes.
          </p>
          <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-6 text-sm text-brand-blue">
            Latest submission deadline: <strong>15 December 2025</strong> for inclusion in
            the Q4 MSME Competitiveness Dossier.
          </div>
        </div>

        <form className="surface-card grid gap-4">
          <div>
            <label
              htmlFor="org-name"
              className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
            >
              Organisation Name
            </label>
            <input
              id="org-name"
              type="text"
              className="mt-1 w-full rounded-lg border border-neutral-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
              placeholder="Registered business entity"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="sector"
                className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
              >
                Sector Council
              </label>
              <select
                id="sector"
                className="mt-1 w-full rounded-lg border border-neutral-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
              >
                <option>Textiles & Technical Fabrics</option>
                <option>Pharmaceuticals & Lifesciences</option>
                <option>IT & Digital Services</option>
                <option>Agri & Food Processing</option>
                <option>Engineering & EV Components</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="region"
                className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
              >
                Export Region
              </label>
              <select
                id="region"
                className="mt-1 w-full rounded-lg border border-neutral-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
              >
                <option>ASEAN</option>
                <option>European Union</option>
                <option>Latin America</option>
                <option>Middle East & Africa</option>
                <option>North America</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="input-detail"
              className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
            >
              Policy Input
            </label>
            <textarea
              id="input-detail"
              rows={4}
              className="mt-1 w-full rounded-lg border border-neutral-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
              placeholder="Summarise your key policy ask or regulatory concern"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-brand-blue px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-gold hover:text-brand-navy"
          >
            Submit feedback
          </button>
        </form>
      </div>
    </section>
  );
};

