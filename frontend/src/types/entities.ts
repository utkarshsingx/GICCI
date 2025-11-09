export type SectorCouncil = {
  id: string;
  name: string;
  description: string;
  focusAreas: string[];
  memberCount: number;
  growthRate: string;
};

export type FeaturedProfile = {
  id: string;
  name: string;
  role: "Importer" | "Exporter";
  company: string;
  sector: string;
  country: string;
  highlight: string;
  impactMetric: string;
};

export type PolicyBrief = {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedOn: string;
  link?: string;
};

export type EventRecord = {
  id: string;
  title: string;
  date: string;
  location: string;
  category: "Trade Mission" | "RBSM" | "Webinar" | "Summit";
  organiser: string;
  description: string;
};

export type Alliance = {
  id: string;
  title: string;
  region: string;
  partnershipType: "MoU" | "Embassy" | "Chamber";
  contactPerson: string;
  email: string;
};

export type KnowledgeResource = {
  id: string;
  title: string;
  format: "Guide" | "Certification" | "Toolkit" | "Standard";
  duration?: string;
  level: "Foundation" | "Advanced";
  tags: string[];
};

export type MarketInsight = {
  id: string;
  hsCode: string;
  product: string;
  topMarkets: string[];
  exportValue: string;
  growth: string;
};

export type DashboardStat = {
  id: string;
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "steady";
};

export type ContactChannel = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  responseTime: string;
};

export type PrimeBenefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type BuyerSellerMatch = {
  id: string;
  buyerCompany: string;
  buyerCountry: string;
  sellerCompany: string;
  sellerCountry: string;
  sector: string;
  matchScore: number;
  status: "New" | "Engaged" | "Converted";
};

export type AdvisoryMember = {
  id: string;
  name: string;
  designation: string;
  organisation: string;
  focusArea: string;
};

export type StrategicPartner = {
  id: string;
  name: string;
  partnershipScope: string;
  region: string;
};

export type PlatformMilestone = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export type KycDocumentStatus = {
  id: string;
  documentName: string;
  status: "Approved" | "Pending" | "In Review" | "Rejected";
  lastUpdated: string;
  reviewer?: string;
  notes?: string;
};

export type OnboardingTask = {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  status: "Complete" | "In Progress" | "Not Started";
  owner: string;
};

export type RegistrationTimelineEvent = {
  id: string;
  date: string;
  label: string;
  description: string;
  status: "Completed" | "Current" | "Upcoming";
};

export type AdminUserSummary = {
  id: string;
  company: string;
  contactName: string;
  role: "Exporter" | "Importer" | "Prime" | "Admin";
  sector: string;
  status: "Active" | "Pending" | "Suspended";
  lastActive: string;
};

export type AdminEventRecord = {
  id: string;
  title: string;
  date: string;
  type: "RBSM" | "Trade Mission" | "Webinar" | "Summit";
  owner: string;
  status: "Scheduled" | "Draft" | "Published";
};

export type PerformanceMetric = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "steady";
};

export type FinanceTransaction = {
  id: string;
  company: string;
  sector: string;
  plan: "Prime" | "Base" | "Trial";
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  date: string;
};

export type PolicyFeedbackItem = {
  id: string;
  organisation: string;
  sector: string;
  theme: "Logistics" | "Regulation" | "Finance" | "Market Access";
  submissionDate: string;
  priority: "High" | "Medium" | "Low";
  status: "New" | "In Review" | "Escalated" | "Resolved";
  summary: string;
};

export type TradeProfile = {
  organisationName: string;
  sector: string;
  headquarters: string;
  foundedYear: string;
  employeeCount: string;
  exportMarkets: string[];
  certifications: string[];
  primeMemberSince: string;
};

export type ProductListing = {
  id: string;
  productName: string;
  hsCode: string;
  sectorCouncil: string;
  targetMarkets: string[];
  complianceTags: string[];
  status: "Published" | "Draft" | "Under Review";
};

export type EngagementThread = {
  id: string;
  partnerCompany: string;
  partnerCountry: string;
  sector: string;
  lastMessageSnippet: string;
  updatedAt: string;
  stage: "New Lead" | "Active Negotiation" | "Closed Won" | "Closed Lost";
};

