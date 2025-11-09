const notices = [
  {
    id: "notice-1",
    message:
      "RAMP Cohort 3 applications close on 30 November — priority onboarding for Telangana MSMEs.",
  },
  {
    id: "notice-2",
    message:
      "New DGFT advisory on export documentation digitisation released. Review the compliance centre.",
  },
];

export const AnnouncementsRibbon = () => {
  return (
    <div className="bg-brand-navy py-2 text-sm text-white">
      <div className="container flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        {notices.map((notice) => (
          <p key={notice.id} className="flex-1 text-center md:text-left">
            {notice.message}
          </p>
        ))}
      </div>
    </div>
  );
};

