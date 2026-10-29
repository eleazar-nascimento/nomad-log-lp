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
  iconName: 'coins' | 'map' | 'book-open' | 'backpack';
  colorClass: 'orange' | 'sky' | 'purple' | 'emerald';
}

export interface ComparisonRow {
  scenario: string;
  traditional: string;
  nomadLog: string;
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

