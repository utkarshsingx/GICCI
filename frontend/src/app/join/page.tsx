import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";

const membershipBenefits = [
  "Verified buyer–seller lead pipeline aligned to your Sector Council.",
  "Visibility boost across policy advocacy, market intelligence, and event showcases.",
  "Dedicated compliance concierge for DGFT, ISO, ESG, and export financing.",
];

export default function JoinPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Join Network"
        title="Prime membership onboarding for MSMEs & trade partners"
        description="Submit your organisation profile to participate in matchmaking programmes, capacity building cohorts, and global trade delegations managed under FICCI, CII, and ASSOCHAM guidelines."
      />

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <form className="glass-panel grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
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
                  placeholder="Registered entity"
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                />
              </div>
              <div>
                <label
                  htmlFor="udyam"
                  className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
                >
                  UDYAM Registration / IEC
                </label>
                <input
                  id="udyam"
                  type="text"
                  placeholder="UDYAM-TS-123456"
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                />
              </div>
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
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
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
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
                >
                  Primary Contact
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Name & designation"
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
                >
                  Official Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="prime@company.com"
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
                >
                  Contact Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91-XXXXXXXXXX"
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="priorities"
                className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
              >
                Trade Priorities
              </label>
              <textarea
                id="priorities"
                rows={4}
                placeholder="Describe target markets, product lines, and support requirements."
                className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-brand-linear px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:brightness-110"
            >
              Submit membership application
            </button>
          </form>

          <aside className="space-y-6 rounded-2xl border border-brand-blue/15 bg-white/90 p-8 shadow-glow backdrop-blur">
            <h2 className="font-display text-2xl text-brand-navy">
              Why upgrade to Prime membership?
            </h2>
            <ul className="space-y-3 text-sm text-brand-blue">
              {membershipBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-xl border border-brand-blue/15 bg-brand-blue/5 px-4 py-3"
                >
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-brand-gold/40 bg-brand-gold/20 p-4 text-sm text-brand-navy">
              Once approved, onboarding specialists will guide document verification, virtual orientation, and sector council induction within 5 business days.
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-teal">
              Alignment: RAMP · DGFT · Telangana MSME Department
            </p>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

