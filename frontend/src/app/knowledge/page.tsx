import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { KnowledgeCapacitySection } from "@/components/sections/KnowledgeCapacitySection";
import { PolicyAdvocacySection } from "@/components/sections/PolicyAdvocacySection";
import { PlatformMilestonesSection } from "@/components/sections/PlatformMilestonesSection";

export default function KnowledgePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Knowledge & Capacity Building"
        title="Guides, certifications, and export readiness toolkits"
        description="Access structured learning journeys, standards roadmaps, and chamber-issued toolkits to accelerate compliance and global expansion."
        backgroundImage="/images/konstantin-dyadyun-RH760wgrHRc-unsplash.jpg"
        imageAlt="Capacity building workshop for Telangana exporters"
      />
      <KnowledgeCapacitySection />
      <PolicyAdvocacySection />
      <PlatformMilestonesSection />
    </SiteLayout>
  );
}

