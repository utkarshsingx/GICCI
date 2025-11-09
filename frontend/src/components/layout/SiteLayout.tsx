import { ReactNode } from "react";
import { AnnouncementsRibbon } from "@/components/layout/AnnouncementsRibbon";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type SiteLayoutProps = {
  children: ReactNode;
  showAnnouncements?: boolean;
};

export const SiteLayout = ({
  children,
  showAnnouncements = true,
}: SiteLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-background">
      {showAnnouncements ? <AnnouncementsRibbon /> : null}
      <Header />
      <main className="relative flex-1">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,111,235,0.07),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(57,185,203,0.08),transparent_50%)]" />
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

