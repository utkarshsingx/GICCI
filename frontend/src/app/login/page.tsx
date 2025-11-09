import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";

const loginSteps = [
  "Verify UDYAM/DGFT credentials to activate trade facilitation services.",
  "Complete KYC documentation upload for compliance review.",
  "Access buyer–seller engagement dashboards and policy alerts.",
];

export default function LoginPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Trade Login"
        title="Access your trade facilitation workspace"
        description="Secure login for registered MSMEs, exporters, importers, and policy cell administrators. Manage listings, respond to engagements, and submit policy inputs."
      />

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="glass-panel grid gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
              >
                Registered Email
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
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wide text-brand-teal"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-3 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-brand-blue">
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
              className="rounded-full bg-brand-linear px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:brightness-110"
            >
              Sign in to dashboard
            </button>
          </form>

          <aside className="space-y-6 rounded-2xl border border-brand-blue/15 bg-white/90 p-8 shadow-glow backdrop-blur">
            <h2 className="font-display text-2xl text-brand-navy">
              Secure verification and onboarding
            </h2>
            <p className="text-sm text-neutral-muted">
              Login access is enabled post KYC verification and approval by the trade
              facilitation desk. Ensure all certification documents remain updated for
              seamless platform access.
            </p>
            <ul className="space-y-3 text-sm text-brand-blue">
              {loginSteps.map((step) => (
                <li
                  key={step}
                  className="rounded-xl border border-brand-blue/15 bg-brand-blue/5 px-4 py-3"
                >
                  {step}
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-brand-gold/40 bg-brand-gold/20 p-4 text-sm text-brand-navy">
              New to the platform?{" "}
              <a href="/join" className="font-semibold text-brand-blue">
                Apply for Prime membership
              </a>{" "}
              to initiate onboarding.
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

