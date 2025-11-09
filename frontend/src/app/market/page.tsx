import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { MarketIntelligenceSection } from "@/components/sections/MarketIntelligenceSection";
import { BuyerSellerEngagementSection } from "@/components/sections/BuyerSellerEngagementSection";
import { EventsDelegationsSection } from "@/components/sections/EventsDelegationsSection";

export default function MarketPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Market Intelligence & Reports"
        title="HS-code analytics and export performance dashboards"
        description="Surface verified trade insights from India Trade Portal, FIEO datasets, and embassy networks to prioritise expansion markets."
      />
      <MarketIntelligenceSection />
      <BuyerSellerEngagementSection />
      <EventsDelegationsSection />
    </SiteLayout>
  );
}

