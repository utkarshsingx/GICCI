import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContactSupportSection } from "@/components/sections/ContactSupportSection";
import { StrategicPartnersSection } from "@/components/sections/StrategicPartnersSection";
import { GlobalAlliancesSection } from "@/components/sections/GlobalAlliancesSection";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact & Support"
        title="Reach the dedicated trade facilitation helpdesk"
        description="Access MSME support desks, partnership teams, and policy advocacy coordinators for timely assistance on membership, compliance, and global outreach."
      />
      <ContactSupportSection />
      <StrategicPartnersSection />
      <GlobalAlliancesSection />
    </SiteLayout>
  );
}

