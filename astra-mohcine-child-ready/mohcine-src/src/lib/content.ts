export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ServiceItem = {
  title: string;
  description: string;
  cta?: string;
  icon?: string;
};

export type ProgramItem = {
  title: string;
  description: string;
  objectives: string[];
  beneficiaries?: string;
  duration?: string;
  location?: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

export type NewsItem = {
  id?: number | string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  image?: string;
  link?: string;
};

export type CtaItem = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  hours?: string;
  mapEmbed?: string;
};

export type ChairmanInfo = {
  title?: string;
  intro?: string;
  para1?: string;
  para2?: string;
  para3?: string;
  signoff?: string;
  name?: string;
  role?: string;
};

export type TimelineItem = {
  year?: string;
  title?: string;
  description?: string;
};

export type AboutInfo = {
  origin?: string;
  vision?: string;
  mission?: string;
  goals?: string[];
  timeline?: TimelineItem[];
};

export type MohcineData = {
  assetsBase?: string;
  chairman?: ChairmanInfo;
  about?: AboutInfo;
  topbar?: {
    phone?: string;
    email?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  nav?: NavItem[];
  heroSlides?: { title?: string; image?: string }[];
  services?: ServiceItem[];
  programs?: ProgramItem[];
  stats?: StatItem[];
  cta?: CtaItem;
  contact?: ContactInfo;
  whatsapp?: {
    phone?: string;
    message?: string;
    label?: string;
  };
  news?: NewsItem[];
};

declare global {
  interface Window {
    Mohcine_DATA?: MohcineData;
  }
}

export const getMohcineData = (): MohcineData => window.Mohcine_DATA ?? {};

export const pick = <T>(value: T | undefined, fallback: T): T =>
  value !== undefined && value !== null ? value : fallback;
