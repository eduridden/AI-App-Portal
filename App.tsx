
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import AppGrid from './components/AppGrid';
import { ALL_APPS, USAGE_TYPES, YEAR_GROUPS, PRICING_TIERS } from './constants';
import type { App as AppType } from './types';
import { PricingTier } from './types';

const App: React.FC = () => {
  const [apps] = useState<AppType[]>(ALL_APPS);
  const [selectedUsage, setSelectedUsage] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedPricing, setSelectedPricing] = useState<string>('All');

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const usageMatch = selectedUsage === 'All' || app.usageTypes.includes(selectedUsage);
      const yearMatch = selectedYear === 'All' || app.yearGroups.includes(selectedYear);
      const pricingMatch = selectedPricing === 'All' || app.pricing === selectedPricing;
      return usageMatch && yearMatch && pricingMatch;
    });
  }, [apps, selectedUsage, selectedYear, selectedPricing]);

  const pricingOptions = ['All', ...Object.values(PricingTier)];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          usageTypes={['All', ...USAGE_TYPES]}
          yearGroups={['All', ...YEAR_GROUPS]}
          pricingTiers={pricingOptions}
          selectedUsage={selectedUsage}
          selectedYear={selectedYear}
          selectedPricing={selectedPricing}
          onUsageChange={setSelectedUsage}
          onYearChange={setSelectedYear}
          onPricingChange={setSelectedPricing}
        />
        <AppGrid apps={filteredApps} />
      </main>
    </div>
  );
};

export default App;
