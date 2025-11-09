import { BuyerSellerEngagementSection } from "@/components/sections/BuyerSellerEngagementSection";
import { ContactSupportSection } from "@/components/sections/ContactSupportSection";
import { EventsDelegationsSection } from "@/components/sections/EventsDelegationsSection";
import { FeaturedProfilesSection } from "@/components/sections/FeaturedProfilesSection";
import { GlobalAlliancesSection } from "@/components/sections/GlobalAlliancesSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { KnowledgeCapacitySection } from "@/components/sections/KnowledgeCapacitySection";
import { MarketIntelligenceSection } from "@/components/sections/MarketIntelligenceSection";
import { PolicyAdvocacySection } from "@/components/sections/PolicyAdvocacySection";
import { PrimeMembershipSection } from "@/components/sections/PrimeMembershipSection";
import { SectorCouncilGrid } from "@/components/sections/SectorCouncilGrid";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function Home() {
  return (
    <SiteLayout>
      <HomeHero />
      <FeaturedProfilesSection />
      <PolicyAdvocacySection />
      <SectorCouncilGrid />
      <EventsDelegationsSection />
      <BuyerSellerEngagementSection />
      <KnowledgeCapacitySection />
      <MarketIntelligenceSection />
      <GlobalAlliancesSection />
      <PrimeMembershipSection />
      <ContactSupportSection />
    </SiteLayout>
  );
}
