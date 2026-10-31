export type Locale = 'pt' | 'en';

export interface CurrencyOption {
  code: string;
  name: string;
  flag: string;
  rateToUSD: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: 'coins' | 'map' | 'book-open' | 'backpack' | 'file-spreadsheet' | 'activity';
  colorClass: 'orange' | 'sky' | 'purple' | 'emerald';
}

export interface ComparisonRow {
  feature: string;
  nomadLog: string;
  wanderlog: string;
  polarsteps: string;
  isExclusive?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: 'free' | 'pro';
  name: string;
  badge?: string;
  price: string;
  billingPeriod?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}
