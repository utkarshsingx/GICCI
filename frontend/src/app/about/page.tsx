import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AboutMissionSection } from "@/components/sections/AboutMissionSection";
import { AdvisoryCouncilSection } from "@/components/sections/AdvisoryCouncilSection";
import { StrategicPartnersSection } from "@/components/sections/StrategicPartnersSection";
import { PlatformMilestonesSection } from "@/components/sections/PlatformMilestonesSection";
import { PrimeMembershipSection } from "@/components/sections/PrimeMembershipSection";

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About The Platform"
        title="Institutionally aligned trade facilitation ecosystem"
        description="Jagadeesh Private Limited partners with chambers and government programmes to deliver a digital-first platform that advances MSME competitiveness, international outreach, and policy feedback loops."
        backgroundImage="/images/chuttersnap-fN603qcEA7g-unsplash.jpg"
        imageAlt="Business leaders collaborating at a Telangana trade summit"
      />
      <AboutMissionSection />
      <AdvisoryCouncilSection />
      <StrategicPartnersSection />
      <PlatformMilestonesSection />
      <PrimeMembershipSection />
    </SiteLayout>
  );
}

