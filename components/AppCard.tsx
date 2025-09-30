
import React from 'react';
import type { App } from '../types';
import { PricingTier } from '../types';

interface AppCardProps {
  app: App;
}

const pricingColors: Record<PricingTier, string> = {
  [PricingTier.Free]: 'bg-green-100 text-green-800',
  [PricingTier.Freemium]: 'bg-blue-100 text-blue-800',
  [PricingTier.Paid]: 'bg-purple-100 text-purple-800',
};

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <i className={`${app.icon} text-2xl text-slate-600`}></i>
              </div>
              <div>
                  <h2 className="text-lg font-bold text-slate-900">{app.name}</h2>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${pricingColors[app.pricing]}`}>
                      {app.pricing}
                  </span>
              </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600 leading-relaxed">{app.description}</p>
        
        <div className="mt-4">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Usage Types</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {app.usageTypes.map((type) => (
              <span key={type} className="px-2 py-1 text-xs text-slate-700 bg-slate-100 rounded-md">
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Year Groups</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {app.yearGroups.map((group) => (
              <span key={group} className="px-2 py-1 text-xs text-sky-700 bg-sky-100 rounded-md">
                {group}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 px-6 py-4 rounded-b-xl border-t border-slate-200">
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Visit Site <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"></i>
        </a>
      </div>
    </div>
  );
};

export default AppCard;
