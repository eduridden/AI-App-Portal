
import React from 'react';

interface FilterBarProps {
  usageTypes: string[];
  yearGroups: string[];
  pricingTiers: string[];
  selectedUsage: string;
  selectedYear: string;
  selectedPricing: string;
  onUsageChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onPricingChange: (value: string) => void;
}

const FilterSelect: React.FC<{
  label: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  icon: string;
}> = ({ label, value, options, onChange, icon }) => (
  <div className="relative w-full">
    <i className={`fa-solid ${icon} absolute top-1/2 left-3 transform -translate-y-1/2 text-slate-400 pointer-events-none`}></i>
    <select
      aria-label={label}
      value={value}
      onChange={onChange}
      className="w-full pl-9 pr-8 py-2.5 text-sm font-medium border border-slate-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
       <i className="fa-solid fa-chevron-down text-xs"></i>
    </div>
  </div>
);

const FilterBar: React.FC<FilterBarProps> = ({
  usageTypes,
  yearGroups,
  pricingTiers,
  selectedUsage,
  selectedYear,
  selectedPricing,
  onUsageChange,
  onYearChange,
  onPricingChange,
}) => {
  return (
    <div className="mb-8 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FilterSelect
          label="Filter by usage type"
          value={selectedUsage}
          options={usageTypes}
          onChange={(e) => onUsageChange(e.target.value)}
          icon="fa-briefcase"
        />
        <FilterSelect
          label="Filter by year group"
          value={selectedYear}
          options={yearGroups}
          onChange={(e) => onYearChange(e.target.value)}
          icon="fa-user-group"
        />
        <FilterSelect
          label="Filter by pricing"
          value={selectedPricing}
          options={pricingTiers}
          onChange={(e) => onPricingChange(e.target.value)}
          icon="fa-tags"
        />
      </div>
    </div>
  );
};

export default FilterBar;
