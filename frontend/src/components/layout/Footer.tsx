import Link from "next/link";

const footerLinks = [
  {
    heading: "Trade Facilitation",
    links: [
      { label: "About the Platform", href: "/about" },
      { label: "Sector Councils", href: "/sectors" },
      { label: "Global Alliances", href: "/alliances" },
    ],
  },
  {
    heading: "Governance",
    links: [
      { label: "Policy Advocacy Cell", href: "/policy" },
      { label: "Knowledge Hub", href: "/knowledge" },
      { label: "Prime Membership", href: "/contact#enquiry-form" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Contact Helpdesk", href: "/contact" },
      { label: "Events & Delegations", href: "/events" },
      { label: "Market Intelligence", href: "/market" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-border bg-neutral-surface">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-xl text-brand-navy">
              Import–Export Community Platform
            </p>
            <p className="mt-4 text-sm">
              Empowering MSMEs through verified connections, market intelligence,
              and policy-aligned engagement across global value chains.
            </p>
          </div>

          {footerLinks.map(({ heading, links }) => (
            <div key={heading}>
              <p className="font-display text-lg text-brand-navy">{heading}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-brand-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-border pt-6 text-xs text-neutral-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Jagadeesh Private Limited. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#">Legal & Compliance</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

