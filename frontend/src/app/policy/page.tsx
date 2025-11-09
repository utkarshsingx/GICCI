import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { PolicyAdvocacySection } from "@/components/sections/PolicyAdvocacySection";
import { PolicyFeedbackSection } from "@/components/sections/PolicyFeedbackSection";
import { EventsDelegationsSection } from "@/components/sections/EventsDelegationsSection";

export default function PolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Policy Advocacy Hub"
        title="Stay ahead of policy updates and co-create export-friendly reforms"
        description="Access curated advisories from FICCI, CII, and ASSOCHAM policy cells, track new MSME schemes, and share ground-level inputs for national representations."
      />
      <PolicyAdvocacySection />
      <PolicyFeedbackSection />
      <EventsDelegationsSection />
    </SiteLayout>
  );
}

