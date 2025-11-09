import { BuyerSellerEngagementSection } from "@/components/sections/BuyerSellerEngagementSection";
import { ContactSupportSection } from "@/components/sections/ContactSupportSection";
import { EventsTimeline } from "@/components/sections/EventsTimeline";
import { FeaturedProfilesSection } from "@/components/sections/FeaturedProfilesSection";
import { GlobalAlliancesMap } from "@/components/sections/GlobalAlliancesMap";
import { HomeHero } from "@/components/sections/HomeHero";
import { KnowledgeCapacitySection } from "@/components/sections/KnowledgeCapacitySection";
import { KnowledgePreviewSection } from "@/components/sections/KnowledgePreviewSection";
import { MarketIntelligenceSection } from "@/components/sections/MarketIntelligenceSection";
import { MarketPreviewSection } from "@/components/sections/MarketPreviewSection";
import { PartnerAffiliationsStrip } from "@/components/sections/PartnerAffiliationsStrip";
import { PolicyAdvocacySection } from "@/components/sections/PolicyAdvocacySection";
import { PolicyHighlightsTicker } from "@/components/sections/PolicyHighlightsTicker";
import { PrimeMembershipSection } from "@/components/sections/PrimeMembershipSection";
import { SectorCouncilGrid } from "@/components/sections/SectorCouncilGrid";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function Home() {
  return (
    <SiteLayout>
      <HomeHero />
      <PartnerAffiliationsStrip />
      <PolicyHighlightsTicker />
      <FeaturedProfilesSection />
      <PolicyAdvocacySection />
      <SectorCouncilGrid />
      <EventsTimeline />
      <GlobalAlliancesMap />
      <KnowledgePreviewSection />
      <BuyerSellerEngagementSection />
      <KnowledgeCapacitySection />
      <MarketPreviewSection />
      <MarketIntelligenceSection />
      <PrimeMembershipSection />
      <ContactSupportSection />
    </SiteLayout>
  );
}
