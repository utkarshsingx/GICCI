import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/PageHero";
import { UserRegistrationKyc } from "@/components/modules/onboarding/UserRegistrationKyc";
import { AdminPanelOverview } from "@/components/modules/admin/AdminPanelOverview";
import { ReportsAndFinance } from "@/components/modules/admin/ReportsAndFinance";
import { PolicyCellQueue } from "@/components/modules/admin/PolicyCellQueue";
import { TradeProfilePanel } from "@/components/modules/dashboard/TradeProfilePanel";
import { ProductListingsManager } from "@/components/modules/dashboard/ProductListingsManager";
import { EngagementCommunications } from "@/components/modules/dashboard/EngagementCommunications";
import { ComplianceCentre } from "@/components/modules/dashboard/ComplianceCentre";

export default function DashboardPage() {
  return (
    <SiteLayout showAnnouncements={false}>
      <PageHero
        eyebrow="Member Workspace"
        title="Trade dashboard & onboarding centre"
        description="Review your KYC status, complete onboarding tasks, and prepare to engage with verified buyer–seller opportunities across sector councils."
      />

      <main className="container py-16">
        <div className="space-y-12">
          <TradeProfilePanel />
          <ProductListingsManager />
          <EngagementCommunications />
          <ComplianceCentre />
          <UserRegistrationKyc />
          <AdminPanelOverview />
          <ReportsAndFinance />
          <PolicyCellQueue />
        </div>
      </main>
    </SiteLayout>
  );
}

