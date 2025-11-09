import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { EventsDelegationsSection } from "@/components/sections/EventsDelegationsSection";
import { GlobalAlliancesSection } from "@/components/sections/GlobalAlliancesSection";
import { PrimeMembershipSection } from "@/components/sections/PrimeMembershipSection";

export default function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events & Delegations"
        title="Engage with global trade missions, RBSMs, and policy briefings"
        description="Secure participation in curated delegations, embassy-led roundtables, and virtual policy dialogues to expand your international footprint."
      />
      <EventsDelegationsSection />
      <GlobalAlliancesSection />
      <PrimeMembershipSection />
    </SiteLayout>
  );
}

