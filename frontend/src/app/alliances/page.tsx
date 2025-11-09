import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { GlobalAlliancesSection } from "@/components/sections/GlobalAlliancesSection";
import { StrategicPartnersSection } from "@/components/sections/StrategicPartnersSection";
import { ContactSupportSection } from "@/components/sections/ContactSupportSection";

export default function AlliancesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Global Trade Alliances"
        title="Embassy desks, chambers, and cross-border partnership leads"
        description="Leverage institutional MoUs, embassy trade cells, and chamber networks to unlock market entry support, procurement opportunities, and bilateral engagements."
      />
      <GlobalAlliancesSection />
      <StrategicPartnersSection />
      <ContactSupportSection />
    </SiteLayout>
  );
}

