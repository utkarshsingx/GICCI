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
    <>
      {showAnnouncements ? <AnnouncementsRibbon /> : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

