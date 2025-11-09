import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";

const assistanceCards = [
  {
    title: "Prime onboarding",
    description: "Upload UDYAM & IEC documents, schedule KYC review.",
    href: "/join",
  },
  {
    title: "Policy submissions",
    description: "Share MSME inputs for DGFT and DPIIT representations.",
    href: "/policy#feedback",
  },
  {
    title: "Trade facilitation desk",
    description: "Connect with helpdesk for compliance and matchmaking support.",
    href: "/contact",
  },
];

const securitySteps = [
  "OTP verification for new devices",
  "Role-based access for Admin, Prime, and Policy users",
  "Encrypted session management aligned with RAMP governance",
];

export default function LoginPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Trade Login"
        title="Access your trade facilitation workspace"
        description="Secure entry point for MSMEs, importers, exporters, and policy administrators to manage listings, engagements, and compliance."
      />

      <section className="container my-10 grid gap-6 md:grid-cols-3">
        {assistanceCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="surface-card border border-brand-blue/15 bg-white/90 backdrop-blur transition hover:border-brand-blue/40"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-teal">Support</p>
            <h3 className="mt-2 text-lg font-semibold text-brand-navy">{card.title}</h3>
            <p className="mt-3 text-sm text-neutral-muted">{card.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Explore <span aria-hidden>→</span>
            </span>
          </a>
        ))}
      </section>

      <section className="container pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <form className="glass-panel space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
                >
                  Registered email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                />
              </div>
              <div>
                <label
                  htmlFor="otp"
                  className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
                >
                  OTP / Token (optional)
                </label>
                <input
                  id="otp"
                  type="text"
                  placeholder="6-digit security code"
                  className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
              >
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
              />
            </div>
            <div className="flex flex-col gap-3 border-t border-brand-blue/20 pt-4 text-xs text-brand-blue md:flex-row md:items-center md:justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="size-3 accent-brand-blue" />
                Remember this device
              </label>
              <a href="#reset" className="font-semibold hover:text-brand-gold">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-linear px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:brightness-110"
            >
              Sign in to dashboard
            </button>
            <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-4 text-xs text-brand-blue">
              Access restricted to verified members. Contact the helpdesk for role upgrades or account activation queries.
            </div>
          </form>

          <aside className="space-y-6 rounded-2xl border border-brand-blue/15 bg-white/90 p-8 shadow-glow backdrop-blur">
            <h2 className="font-display text-2xl text-brand-navy">
              Secure verification and onboarding
            </h2>
            <p className="text-sm text-neutral-muted">
              Login access is enabled post KYC verification and approval by the trade
              facilitation desk. Ensure documents remain updated for seamless platform use.
            </p>
            <ul className="space-y-3 text-sm text-brand-blue">
              {securitySteps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-3 rounded-xl border border-brand-blue/15 bg-brand-blue/5 px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-blue" />
                  {step}
                </li>
              ))}
            </ul>
            <div className="grid gap-3 text-sm">
              <div className="rounded-xl border border-brand-gold/40 bg-brand-gold/20 p-4 text-brand-navy">
                New to the platform?{" "}
                <a href="/join" className="font-semibold text-brand-blue">
                  Apply for Prime membership
                </a>{" "}
                to initiate onboarding.
              </div>
              <div className="rounded-xl border border-brand-blue/15 bg-brand-blue/5 p-4 text-brand-blue">
                Need assistance? Call the Trade Facilitation Helpdesk (+91-40-1234-5678) or write to helpdesk@importexporthub.in.
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-brand-teal">
              <span className="rounded-full border border-brand-teal/30 px-3 py-1">
                FICCI
              </span>
              <span className="rounded-full border border-brand-teal/30 px-3 py-1">
                CII
              </span>
              <span className="rounded-full border border-brand-teal/30 px-3 py-1">
                ASSOCHAM
              </span>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

