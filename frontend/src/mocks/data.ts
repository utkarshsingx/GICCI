import {
  AdvisoryMember,
  AdminEventRecord,
  AdminUserSummary,
  Alliance,
  BuyerSellerMatch,
  ContactChannel,
  DashboardStat,
  EventRecord,
  FeaturedProfile,
  FinanceTransaction,
  KycDocumentStatus,
  KnowledgeResource,
  MarketInsight,
  EngagementThread,
  OnboardingTask,
  PerformanceMetric,
  PlatformMilestone,
  PolicyBrief,
  PolicyFeedbackItem,
  PrimeBenefit,
  ProductListing,
  RegistrationTimelineEvent,
  SectorCouncil,
  StrategicPartner,
  TradeProfile,
} from "@/types/entities";

export const dashboardStats: DashboardStat[] = [
  {
    id: "verified-msmes",
    label: "Verified MSMEs Onboarded",
    value: "1,240",
    delta: "+12% MoM",
    trend: "up",
  },
  {
    id: "trade-matches",
    label: "Buyer–Seller Matches",
    value: "368",
    delta: "+45 new this week",
    trend: "up",
  },
  {
    id: "policy-feedback",
    label: "Policy Advocacy Inputs",
    value: "92",
    delta: "7 pending submissions",
    trend: "steady",
  },
];

export const featuredProfiles: FeaturedProfile[] = [
  {
    id: "fp-1",
    name: "Priya Menon",
    role: "Exporter",
    company: "Telangana Agro Exports Pvt. Ltd.",
    sector: "Agri & Food Processing",
    country: "Singapore",
    highlight: "Closed 4 new overseas distribution agreements in Q3",
    impactMetric: "₹12 Cr export value",
  },
  {
    id: "fp-2",
    name: "Arjun Patel",
    role: "Importer",
    company: "GlobalFit Industries",
    sector: "Textiles & Apparel",
    country: "United Kingdom",
    highlight: "Sourced sustainable fabrics via Prime membership channels",
    impactMetric: "22% cost optimisation",
  },
  {
    id: "fp-3",
    name: "Leena Kapoor",
    role: "Exporter",
    company: "Hyderabad Pharma Alliance",
    sector: "Pharmaceuticals",
    country: "Brazil",
    highlight: "Onboarded through DGFT verification and RAMP support",
    impactMetric: "5 new LATAM partners",
  },
];

export const sectorCouncils: SectorCouncil[] = [
  {
    id: "sector-textiles",
    name: "Textiles & Technical Fabrics Sector Council",
    description:
      "Driving export diversification through smart fabrics and sustainable sourcing.",
    focusAreas: ["Circular supply chains", "FTA utilisation", "Skill upgrades"],
    memberCount: 320,
    growthRate: "+18% YoY",
  },
  {
    id: "sector-pharma",
    name: "Pharmaceuticals & Lifesciences Sector Council",
    description:
      "Global regulatory alignment, quality certifications, and R&D collaboration.",
    focusAreas: ["Regulatory fast-track", "ESG compliance", "Clinical data"],
    memberCount: 210,
    growthRate: "+23% YoY",
  },
  {
    id: "sector-it",
    name: "IT & Digital Services Sector Council",
    description:
      "Promoting digital exports, cross-border SaaS, and cybersecurity readiness.",
    focusAreas: ["Digital trade facilitation", "AI acceleration", "BPM services"],
    memberCount: 410,
    growthRate: "+31% YoY",
  },
];

export const events: EventRecord[] = [
  {
    id: "event-rbsm",
    title: "Bengaluru Reverse Buyer Seller Meet",
    date: "18 Dec 2025",
    location: "Bengaluru, India",
    category: "RBSM",
    organiser: "Jagadeesh Private Limited x FICCI",
    description:
      "Focused on advanced textiles and circular economy solutions with 40 international buyers.",
  },
  {
    id: "event-trade-mission",
    title: "Trade Mission: Telangana – UAE",
    date: "10 Jan 2026",
    location: "Dubai, UAE",
    category: "Trade Mission",
    organiser: "Government of Telangana",
    description:
      "Showcasing electronics, EV components, and agritech innovations to GCC distributors.",
  },
  {
    id: "event-webinar",
    title: "Webinar: Navigating DGFT Policy Updates 2026",
    date: "05 Feb 2026",
    location: "Virtual",
    category: "Webinar",
    organiser: "Policy & Advocacy Cell",
    description:
      "Deep dive into foreign trade policy 2026 with live Q&A for MSME exporters.",
  },
];

export const policyBriefs: PolicyBrief[] = [
  {
    id: "policy-ramp",
    title: "RAMP Initiative – Market Access Toolkit",
    summary:
      "Comprehensive readiness checklist for MSMEs to leverage RAMP export incentives.",
    source: "Ministry of MSME, GoI",
    publishedOn: "02 Nov 2025",
    link: "#",
  },
  {
    id: "policy-telangana",
    title: "Telangana MSME Export Promotion Policy 2025",
    summary:
      "Key highlights from the state policy including SEZ benefits and capital subsidies.",
    source: "Government of Telangana",
    publishedOn: "22 Oct 2025",
    link: "#",
  },
  {
    id: "policy-esg",
    title: "ESG Reporting Mandates for Exporters",
    summary:
      "Guidelines for ESG disclosures and certification pathways for prime members.",
    source: "ASSOCHAM Sustainability Council",
    publishedOn: "12 Sep 2025",
    link: "#",
  },
];

export const alliances: Alliance[] = [
  {
    id: "alliance-mou",
    title: "MoU with Singapore Indian Chamber of Commerce",
    region: "ASEAN",
    partnershipType: "MoU",
    contactPerson: "Tan Wei Ling",
    email: "trade@sicc.sg",
  },
  {
    id: "alliance-embassy",
    title: "Embassy of India – Berlin Trade Desk",
    region: "European Union",
    partnershipType: "Embassy",
    contactPerson: "Rajiv Menon",
    email: "trade.berlin@mea.gov.in",
  },
  {
    id: "alliance-chamber",
    title: "Brazil India Chamber of Commerce",
    region: "Latin America",
    partnershipType: "Chamber",
    contactPerson: "Gabriela Souza",
    email: "connect@bicc.org.br",
  },
];

export const knowledgeResources: KnowledgeResource[] = [
  {
    id: "resource-trade-finance",
    title: "Trade Finance & Letter of Credit Essentials",
    format: "Guide",
    level: "Foundation",
    duration: "2h self-paced",
    tags: ["Finance", "Risk"],
  },
  {
    id: "resource-iso-certification",
    title: "ISO 14001 Certification Roadmap",
    format: "Certification",
    level: "Advanced",
    duration: "4-week cohort",
    tags: ["Sustainability", "Compliance"],
  },
  {
    id: "resource-export-readiness",
    title: "Export Readiness Toolkit for MSMEs",
    format: "Toolkit",
    level: "Foundation",
    tags: ["RAMP", "Market Entry"],
  },
];

export const marketInsights: MarketInsight[] = [
  {
    id: "insight-620520",
    hsCode: "620520",
    product: "Men's Cotton Shirts",
    topMarkets: ["USA", "Germany", "UAE"],
    exportValue: "USD 480M",
    growth: "+8% YoY",
  },
  {
    id: "insight-300490",
    hsCode: "300490",
    product: "Pharmaceutical Medicines",
    topMarkets: ["Brazil", "South Africa", "UK"],
    exportValue: "USD 1.2B",
    growth: "+14% YoY",
  },
  {
    id: "insight-841890",
    hsCode: "841890",
    product: "HVAC & Cooling Systems",
    topMarkets: ["Singapore", "Qatar", "Canada"],
    exportValue: "USD 220M",
    growth: "+11% YoY",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    id: "contact-helpdesk",
    name: "Trade Facilitation Helpdesk",
    email: "helpdesk@importexporthub.in",
    phone: "+91-40-1234-5678",
    responseTime: "Response within 24 hours",
  },
  {
    id: "contact-policy",
    name: "Policy Advocacy Cell",
    email: "policy@importexporthub.in",
    responseTime: "Weekly synthesis report",
  },
  {
    id: "contact-membership",
    name: "Prime Membership Office",
    email: "prime@importexporthub.in",
    phone: "+91-40-2345-6789",
    responseTime: "Priority response under 6 hours",
  },
];

export const primeBenefits: PrimeBenefit[] = [
  {
    id: "prime-leads",
    title: "Verified Buyer–Seller Leads",
    description:
      "Curated international leads validated via trade commissioners and chambers.",
    icon: "LEAD",
  },
  {
    id: "prime-visibility",
    title: "Visibility Boost on Listings",
    description:
      "Prominent placement in sector councils with enhanced analytics dashboards.",
    icon: "BOOST",
  },
  {
    id: "prime-compliance",
    title: "Compliance Fast-Track",
    description:
      "Dedicated support for ISO, ESG, and DGFT documentation reviews.",
    icon: "SAFE",
  },
];

export const buyerSellerMatches: BuyerSellerMatch[] = [
  {
    id: "match-1",
    buyerCompany: "GlobalFit Industries, UK",
    buyerCountry: "United Kingdom",
    sellerCompany: "Hyderabad Smart Textiles",
    sellerCountry: "India",
    sector: "Technical Textiles",
    matchScore: 92,
    status: "Engaged",
  },
  {
    id: "match-2",
    buyerCompany: "São Paulo Pharma Partners",
    buyerCountry: "Brazil",
    sellerCompany: "Telangana BioPharma Cluster",
    sellerCountry: "India",
    sector: "Pharmaceuticals",
    matchScore: 88,
    status: "New",
  },
  {
    id: "match-3",
    buyerCompany: "Nordic Cold Chain Systems",
    buyerCountry: "Sweden",
    sellerCompany: "Vizag HVAC Components",
    sellerCountry: "India",
    sector: "Engineering & EV Supply",
    matchScore: 95,
    status: "Converted",
  },
];

export const advisoryCouncil: AdvisoryMember[] = [
  {
    id: "advisor-1",
    name: "Ravi Narayan",
    designation: "Former Additional DGFT",
    organisation: "Government of India",
    focusArea: "Trade policy alignment",
  },
  {
    id: "advisor-2",
    name: "Meera Srinivas",
    designation: "Chairperson",
    organisation: "Telangana MSME Board",
    focusArea: "RAMP implementation",
  },
  {
    id: "advisor-3",
    name: "Carlos Estevez",
    designation: "Director",
    organisation: "Brazil India Chamber of Commerce",
    focusArea: "LATAM market access",
  },
  {
    id: "advisor-4",
    name: "Aisha Khan",
    designation: "Head of Sustainability",
    organisation: "ASSOCHAM",
    focusArea: "ESG & compliance",
  },
];

export const kycDocuments: KycDocumentStatus[] = [
  {
    id: "kyc-udyam",
    documentName: "UDYAM Registration Certificate",
    status: "Approved",
    lastUpdated: "04 Nov 2025",
    reviewer: "Policy Cell",
  },
  {
    id: "kyc-dgft",
    documentName: "DGFT IEC License",
    status: "In Review",
    lastUpdated: "07 Nov 2025",
    reviewer: "DGFT Desk",
    notes: "Awaiting clarification on HS-code coverage",
  },
  {
    id: "kyc-gst",
    documentName: "GST Registration & Returns",
    status: "Pending",
    lastUpdated: "—",
  },
  {
    id: "kyc-esg",
    documentName: "ESG/ISO Compliance Certificates",
    status: "Pending",
    lastUpdated: "—",
  },
];

export const onboardingTasks: OnboardingTask[] = [
  {
    id: "task-profile",
    title: "Complete trade profile",
    description: "Add product lines, export markets, and team contacts.",
    status: "In Progress",
    owner: "Trade Facilitation Team",
    dueDate: "15 Nov 2025",
  },
  {
    id: "task-cert",
    title: "Upload compliance certificates",
    description: "Provide ISO, sustainability, or sector certifications.",
    status: "Not Started",
    owner: "Compliance Desk",
    dueDate: "22 Nov 2025",
  },
  {
    id: "task-orientation",
    title: "Attend sector council induction",
    description: "Join the IT & Digital Services Sector Council orientation webinar.",
    status: "Complete",
    owner: "Sector Council Office",
    dueDate: "10 Nov 2025",
  },
];

export const registrationTimeline: RegistrationTimelineEvent[] = [
  {
    id: "timeline-application",
    date: "01 Nov 2025",
    label: "Application Submitted",
    description: "Prime membership request received with UDYAM and IEC credentials.",
    status: "Completed",
  },
  {
    id: "timeline-review",
    date: "08 Nov 2025",
    label: "KYC Verification Review",
    description: "Policy cell reviewing DGFT IEC alignment and compliance documents.",
    status: "Current",
  },
  {
    id: "timeline-activation",
    date: "15 Nov 2025",
    label: "Account Activation",
    description: "Trade dashboard access enabled post document approval.",
    status: "Upcoming",
  },
];

export const adminUsers: AdminUserSummary[] = [
  {
    id: "user-001",
    company: "Telangana Agro Exports",
    contactName: "Priya Menon",
    role: "Exporter",
    sector: "Agri & Food Processing",
    status: "Active",
    lastActive: "9 Nov 2025",
  },
  {
    id: "user-002",
    company: "GlobalFit Industries",
    contactName: "Arjun Patel",
    role: "Importer",
    sector: "Textiles & Apparel",
    status: "Active",
    lastActive: "8 Nov 2025",
  },
  {
    id: "user-003",
    company: "Hyderabad Pharma Alliance",
    contactName: "Leena Kapoor",
    role: "Prime",
    sector: "Pharmaceuticals",
    status: "Pending",
    lastActive: "Awaiting activation",
  },
  {
    id: "user-004",
    company: "Jagadeesh Private Limited",
    contactName: "Policy Cell Admin",
    role: "Admin",
    sector: "Cross-sector",
    status: "Active",
    lastActive: "9 Nov 2025",
  },
];

export const adminEvents: AdminEventRecord[] = [
  {
    id: "admin-event-1",
    title: "Bengaluru Reverse Buyer Seller Meet",
    date: "18 Dec 2025",
    type: "RBSM",
    owner: "Events Desk",
    status: "Published",
  },
  {
    id: "admin-event-2",
    title: "Telangana – UAE Trade Mission",
    date: "10 Jan 2026",
    type: "Trade Mission",
    owner: "Global Alliances",
    status: "Draft",
  },
  {
    id: "admin-event-3",
    title: "DGFT Policy Update Webinar",
    date: "05 Feb 2026",
    type: "Webinar",
    owner: "Policy Cell",
    status: "Scheduled",
  },
];

export const performanceMetrics: PerformanceMetric[] = [
  {
    id: "metric-traffic",
    label: "Platform visits",
    value: "82,450",
    change: "+14% MoM",
    trend: "up",
  },
  {
    id: "metric-engagement",
    label: "Buyer–seller interactions",
    value: "6,420",
    change: "+9% MoM",
    trend: "up",
  },
  {
    id: "metric-conversion",
    label: "Lead conversion rate",
    value: "12.4%",
    change: "-1.2% vs last month",
    trend: "down",
  },
  {
    id: "metric-policy",
    label: "Policy submissions processed",
    value: "54",
    change: "+18 approvals",
    trend: "up",
  },
];

export const financeTransactions: FinanceTransaction[] = [
  {
    id: "txn-001",
    company: "Telangana Agro Exports",
    sector: "Agri & Food Processing",
    plan: "Prime",
    amount: "₹65,000",
    status: "Paid",
    date: "06 Nov 2025",
  },
  {
    id: "txn-002",
    company: "GlobalFit Industries",
    sector: "Textiles & Apparel",
    plan: "Prime",
    amount: "₹65,000",
    status: "Pending",
    date: "Due 12 Nov 2025",
  },
  {
    id: "txn-003",
    company: "Hyderabad Pharma Alliance",
    sector: "Pharmaceuticals",
    plan: "Trial",
    amount: "₹0",
    status: "Paid",
    date: "04 Nov 2025",
  },
  {
    id: "txn-004",
    company: "Vizag HVAC Components",
    sector: "Engineering & EV Components",
    plan: "Prime",
    amount: "₹65,000",
    status: "Failed",
    date: "03 Nov 2025",
  },
];

export const policyFeedbackQueue: PolicyFeedbackItem[] = [
  {
    id: "feedback-001",
    organisation: "Telangana Agro Exports",
    sector: "Agri & Food Processing",
    theme: "Logistics",
    submissionDate: "07 Nov 2025",
    priority: "High",
    status: "Escalated",
    summary:
      "Request for expedited reefer cargo slots through Chennai port; proposes additional subsidies.",
  },
  {
    id: "feedback-002",
    organisation: "Hyderabad Pharma Alliance",
    sector: "Pharmaceuticals",
    theme: "Regulation",
    submissionDate: "08 Nov 2025",
    priority: "Medium",
    status: "In Review",
    summary:
      "Seeking clarity on new DGFT documentation requirements for Latin America exports.",
  },
  {
    id: "feedback-003",
    organisation: "GlobalFit Industries",
    sector: "Textiles & Apparel",
    theme: "Finance",
    submissionDate: "06 Nov 2025",
    priority: "Low",
    status: "New",
    summary:
      "Exploring interest subvention schemes under RAMP for sustainable fabric investments.",
  },
];

export const tradeProfile: TradeProfile = {
  organisationName: "Jagadeesh Private Limited",
  sector: "IT & Digital Services",
  headquarters: "Hyderabad, Telangana",
  foundedYear: "2014",
  employeeCount: "120",
  exportMarkets: ["Singapore", "United Kingdom", "UAE", "Germany"],
  certifications: ["ISO 27001", "STPI Export Unit", "SEIS Beneficiary"],
  primeMemberSince: "July 2024",
};

export const productListings: ProductListing[] = [
  {
    id: "listing-001",
    productName: "Smart Supply Chain Platform",
    hsCode: "847130",
    sectorCouncil: "IT & Digital Services",
    targetMarkets: ["Singapore", "UAE"],
    complianceTags: ["DGFT Verified", "Data Protection"],
    status: "Published",
  },
  {
    id: "listing-002",
    productName: "AI Trade Insights Toolkit",
    hsCode: "852349",
    sectorCouncil: "IT & Digital Services",
    targetMarkets: ["United Kingdom", "USA"],
    complianceTags: ["GDPR Ready", "Innovation Grant"],
    status: "Under Review",
  },
  {
    id: "listing-003",
    productName: "Digital Customs Integration API",
    hsCode: "852380",
    sectorCouncil: "IT & Digital Services",
    targetMarkets: ["Germany"],
    complianceTags: ["API Sandbox", "FTA Compatible"],
    status: "Draft",
  },
];

export const engagementThreads: EngagementThread[] = [
  {
    id: "thread-001",
    partnerCompany: "Berlin Trade Tech GmbH",
    partnerCountry: "Germany",
    sector: "IT & Digital Services",
    lastMessageSnippet: "Awaiting pricing sheet for customs automation bundle.",
    updatedAt: "09 Nov 2025 · 14:20 CET",
    stage: "Active Negotiation",
  },
  {
    id: "thread-002",
    partnerCompany: "Dubai Logistics Council",
    partnerCountry: "UAE",
    sector: "Logistics & Supply Chain",
    lastMessageSnippet: "Scheduled RBSM follow-up during Telangana – UAE mission.",
    updatedAt: "08 Nov 2025 · 11:05 GST",
    stage: "New Lead",
  },
  {
    id: "thread-003",
    partnerCompany: "Singapore Smart Ports Authority",
    partnerCountry: "Singapore",
    sector: "Maritime",
    lastMessageSnippet: "Agreement finalised. Awaiting MoU paperwork.",
    updatedAt: "07 Nov 2025 · 09:45 SGT",
    stage: "Closed Won",
  },
];

export const strategicPartners: StrategicPartner[] = [
  {
    id: "partner-ficci",
    name: "FICCI",
    partnershipScope: "Policy advocacy & trade delegations",
    region: "Pan-India",
  },
  {
    id: "partner-cii",
    name: "CII",
    partnershipScope: "Sector councils & capacity building",
    region: "Pan-India",
  },
  {
    id: "partner-assocham",
    name: "ASSOCHAM",
    partnershipScope: "Sustainability & compliance programmes",
    region: "Pan-India",
  },
  {
    id: "partner-fieo",
    name: "FIEO",
    partnershipScope: "Market intelligence & export data",
    region: "Global",
  },
  {
    id: "partner-gem",
    name: "Government e-Marketplace (GeM)",
    partnershipScope: "Procurement opportunities",
    region: "India",
  },
];

export const platformMilestones: PlatformMilestone[] = [
  {
    id: "milestone-2024",
    year: "2024",
    title: "Blueprint and alignment workshops",
    description:
      "Framework co-created with Telangana MSME Department and leading chambers to align with RAMP priorities.",
  },
  {
    id: "milestone-2025",
    year: "2025",
    title: "Pilot launch with 500 MSMEs",
    description:
      "Successful onboarding of multi-sector MSMEs with DGFT and UDYAM verification integrations.",
  },
  {
    id: "milestone-2026",
    year: "2026",
    title: "Global outreach partnerships",
    description:
      "Formalised MoUs with ASEAN and LATAM chambers to facilitate cross-border buyer–seller engagements.",
  },
];

