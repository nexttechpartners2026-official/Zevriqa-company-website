export interface MediaItem {
  id: string;
  url?: string | null;
  alt?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  width?: number | null;
  height?: number | null;
}

export interface BannerData {
  type?: 'video' | 'singleImage' | 'carousel' | 'none';
  videoUrl?: string;
  singleImage?: {
    image?: MediaItem | null;
    imageUrl?: string;
    title?: string;
    subtitle?: string;
  };
  carouselSlides?: Array<{
    id?: string | number;
    image?: MediaItem | null;
    imageUrl?: string;
    title?: string;
    subtitle?: string;
  }>;
}

export interface HeroData {
  kicker?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: MediaItem | null;
  imageAlt?: string;
}

export interface TrustedByData {
  label?: string;
  companies?: Array<{
    id?: string;
    name: string;
    logo?: MediaItem | null;
  }>;
}

export interface AboutData {
  kicker?: string;
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  image?: MediaItem | null;
  imageAlt?: string;
}

export interface FeatureServiceItem {
  id?: string;
  icon?: string;
  title: string;
  desc: string;
}

export interface FeaturesData {
  kicker?: string;
  title?: string;
  services?: FeatureServiceItem[];
}

export interface SolutionItem {
  id?: string;
  title: string;
  desc: string;
}

export interface SolutionsData {
  kicker?: string;
  title?: string;
  items?: SolutionItem[];
}

export interface SectorItem {
  id?: string;
  title: string;
  image?: MediaItem | null;
}

export interface SectorsData {
  kicker?: string;
  title?: string;
  items?: SectorItem[];
}

export interface ToolItem {
  id?: string;
  name: string;
}

export interface ToolsData {
  kicker?: string;
  title?: string;
  items?: ToolItem[];
}

export interface ProcessStep {
  id?: string;
  num: string;
  title: string;
  desc: string;
}

export interface ProcessData {
  kicker?: string;
  title?: string;
  steps?: ProcessStep[];
}

export interface FlawlessFeature {
  id?: string;
  title: string;
  desc: string;
}

export interface FlawlessData {
  subtitle?: string;
  title?: string;
  image?: MediaItem | null;
  features?: FlawlessFeature[];
}

export interface StatItem {
  id?: string;
  number: string;
  label: string;
}

export interface StatsData {
  items?: StatItem[];
}

export interface TestimonialItem {
  id?: string;
  quote: string;
  name: string;
  title: string;
  image?: MediaItem | null;
  avatarUrl?: string;
}

export interface TestimonialsData {
  subtitle?: string;
  title?: string;
  items?: TestimonialItem[];
}

export interface BlogPostItem {
  id?: string;
  title: string;
  date?: string;
  image?: MediaItem | null;
  imageUrl?: string;
  link?: string;
}

export interface BlogData {
  kicker?: string;
  title?: string;
  posts?: BlogPostItem[];
}

export interface FAQItem {
  id?: string;
  q: string;
  a: string;
}

export interface FAQData {
  subtitle?: string;
  title?: string;
  items?: FAQItem[];
}

export interface CtaData {
  title?: string;
  desc?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface HomePageData {
  banner?: BannerData;
  hero?: HeroData;
  trustedBy?: TrustedByData;
  about?: AboutData;
  features?: FeaturesData;
  solutions?: SolutionsData;
  sectors?: SectorsData;
  tools?: ToolsData;
  process?: ProcessData;
  flawless?: FlawlessData;
  stats?: StatsData;
  testimonials?: TestimonialsData;
  blog?: BlogData;
  faq?: FAQData;
  cta?: CtaData;
}

export interface AboutHeroData {
  title?: string;
  subtitle?: string;
}

export interface EmpoweringData {
  kicker?: string;
  title?: string;
  desc1?: string;
  desc2?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: MediaItem | null;
  imageUrl?: string;
  imageAlt?: string;
}

export interface JourneyMilestone {
  id?: string;
  year: string;
  title: string;
  desc: string;
}

export interface JourneyData {
  kicker?: string;
  title?: string;
  desc?: string;
  milestones?: JourneyMilestone[];
}

export interface MissionData {
  kicker?: string;
  title?: string;
  missionTitle?: string;
  missionDesc?: string;
  visionTitle?: string;
  visionDesc?: string;
  image?: MediaItem | null;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ValueItem {
  id?: string;
  icon?: string;
  title: string;
  desc: string;
}

export interface ValuesData {
  kicker?: string;
  title?: string;
  items?: ValueItem[];
}

export interface DifferentPoint {
  id?: string;
  icon?: string;
  title: string;
  desc: string;
}

export interface DifferentData {
  kicker?: string;
  title?: string;
  desc?: string;
  items?: DifferentPoint[];
}

export interface AboutPageData {
  hero?: AboutHeroData;
  empowering?: EmpoweringData;
  journey?: JourneyData;
  mission?: MissionData;
  values?: ValuesData;
  different?: DifferentData;
  cta?: CtaData;
}

export interface WorkTag {
  id?: string;
  name: string;
}

export interface WorkProjectItem {
  id?: string | number;
  title: string;
  desc: string;
  tags?: WorkTag[] | string[];
  image?: MediaItem | null;
  imageUrl?: string;
}

export interface WorkCategoryItem {
  id?: string;
  title: string;
  items?: WorkProjectItem[];
}

export interface WorksHeroData {
  title?: string;
  description?: string;
}

export interface WorksPageData {
  hero?: WorksHeroData;
  categories?: WorkCategoryItem[];
  cta?: CtaData;
}

export interface ServicesHeroData {
  title?: string;
  desc?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface ServicesOverviewItem {
  id?: string;
  icon?: string;
  label: string;
}

export interface ServicesOverviewData {
  kicker?: string;
  title?: string;
  items?: ServicesOverviewItem[];
}

export interface ServiceDetailFeature {
  id?: string;
  name: string;
}

export interface ServiceDetailItem {
  id?: string | number;
  title: string;
  kicker: string;
  desc: string;
  features?: ServiceDetailFeature[] | string[];
  image?: MediaItem | null;
  imageUrl?: string;
  imagePosition?: 'right' | 'left' | string;
}

export interface ServiceDetailsData {
  items?: ServiceDetailItem[];
}

export interface TechToolItem {
  id?: string;
  name: string;
}

export interface TechCategoryItem {
  id?: string;
  title: string;
  tools?: TechToolItem[] | string[];
}

export interface TechStackData {
  kicker?: string;
  title?: string;
  categories?: TechCategoryItem[];
}

export interface ProcessStepItem {
  id?: string;
  num: string;
  title: string;
  desc: string;
}

export interface ProcessStepsData {
  kicker?: string;
  title?: string;
  steps?: ProcessStepItem[];
}

export interface DomainItem {
  id?: string;
  title: string;
  image?: MediaItem | null;
  imageUrl?: string;
}

export interface DomainExpertiseData {
  kicker?: string;
  title?: string;
  items?: DomainItem[];
}

export interface StatsBannerFeature {
  id?: string;
  icon?: string;
  title: string;
  desc: string;
}

export interface StatsBannerData {
  kicker?: string;
  title?: string;
  features?: StatsBannerFeature[];
}

export interface CaseStudyItem {
  id?: string;
  kicker: string;
  title: string;
  desc: string;
  image?: MediaItem | null;
  imageUrl?: string;
}

export interface CaseStudiesData {
  kicker?: string;
  title?: string;
  items?: CaseStudyItem[];
}

export interface ServicesFaqItem {
  id?: string;
  question: string;
  answer: string;
}

export interface ServicesFaqData {
  title?: string;
  faqs?: ServicesFaqItem[];
}

export interface ServicesPageData {
  hero?: ServicesHeroData;
  overview?: ServicesOverviewData;
  details?: ServiceDetailsData;
  techStack?: TechStackData;
  process?: ProcessStepsData;
  domainExpertise?: DomainExpertiseData;
  statsBanner?: StatsBannerData;
  caseStudies?: CaseStudiesData;
  faq?: ServicesFaqData;
  cta?: CtaData;
}

export interface PhoneNumberItem {
  id?: string;
  number: string;
}

export interface SiteSettingsData {
  brandDescription?: string;
  copyright?: string;
  tagline?: string;
  email?: string;
  phoneNumbers?: PhoneNumberItem[] | string[];
  whatsappNumber?: string;
  whatsappMessage?: string;
  address?: string;
  googleMapsUrl?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
}

export interface ContactHeroData {
  title?: string;
  desc?: string;
}

export interface ContactIntroData {
  kicker?: string;
  title?: string;
  desc?: string;
}

export interface ContactFormData {
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  detailsLabel?: string;
  detailsPlaceholder?: string;
  buttonText?: string;
}

export interface ContactPageData {
  hero?: ContactHeroData;
  intro?: ContactIntroData;
  form?: ContactFormData;
}
