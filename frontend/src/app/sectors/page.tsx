import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { SectorCouncilGrid } from "@/components/sections/SectorCouncilGrid";
import { BuyerSellerEngagementSection } from "@/components/sections/BuyerSellerEngagementSection";
import { KnowledgeCapacitySection } from "@/components/sections/KnowledgeCapacitySection";

export default function SectorsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sector Councils"
        title="Industry-led councils shaping export competitiveness"
        description="Join sector councils tailored to textiles, pharmaceuticals, IT, and high-growth clusters to access curated opportunities, analytics, and mentorship."
        backgroundImage="/images/ryan-kwok-zr4K6Q13Rrk-unsplash (1).jpg"
        imageAlt="Sector council leaders strategising market expansion"
      />
      <SectorCouncilGrid />
      <BuyerSellerEngagementSection />
      <KnowledgeCapacitySection />
    </SiteLayout>
  );
}

