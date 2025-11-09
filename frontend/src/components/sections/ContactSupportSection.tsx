import { contactChannels } from "@/mocks/data";

export const ContactSupportSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16" id="contact">
      <div className="absolute inset-0 bg-neutral-soft" aria-hidden />
      <div className="absolute inset-0 bg-brand-radial opacity-70" aria-hidden />
      <div className="container relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-teal">
            Contact & Support
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-navy">
            Dedicated helpdesk aligned with trade facilitation standards
          </h2>
          <p className="mt-4 text-sm">
            Reach out to specialised desks for policy queries, membership assistance,
            and global trade intelligence support.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactChannels.map((channel) => (
              <div
                key={channel.id}
                className="rounded-2xl border border-brand-blue/10 bg-white/85 p-5 shadow-glow backdrop-blur"
              >
                <p className="text-sm font-semibold text-brand-navy">{channel.name}</p>
                <p className="text-xs text-neutral-muted">Email: {channel.email}</p>
                {channel.phone ? (
                  <p className="text-xs text-neutral-muted">Phone: {channel.phone}</p>
                ) : null}
                <p className="mt-1 text-xs font-semibold text-brand-teal">
                  {channel.responseTime}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form className="glass-panel grid gap-4" id="enquiry-form">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-brand-teal">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-brand-teal">
              Business Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
            className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide text-brand-teal">
              Enquiry Type
            </label>
            <select
              id="subject"
              name="subject"
            className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            >
              <option>Trade Facilitation</option>
              <option>Policy Advocacy</option>
              <option>Prime Membership</option>
              <option>Compliance Support</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-brand-teal">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share your requirement or query..."
            className="mt-1 w-full rounded-lg border border-brand-blue/30 px-3 py-2 text-sm outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-brand-blue px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-gold hover:text-brand-navy"
          >
            Submit enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

