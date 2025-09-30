
export enum PricingTier {
  Free = 'Free',
  Freemium = 'Freemium',
  Paid = 'Paid',
}

export interface App {
  id: number;
  name: string;
  description: string;
  icon: string; // Font Awesome class name e.g., 'fa-solid fa-robot'
  usageTypes: string[];
  yearGroups: string[];
  pricing: PricingTier;
  url: string;
}
