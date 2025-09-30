
import React from 'react';
import type { App } from '../types';
import AppCard from './AppCard';

interface AppGridProps {
  apps: App[];
}

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  if (apps.length === 0) {
    return (
        <div className="text-center py-16 px-6 bg-white rounded-lg border border-slate-200 shadow-sm">
            <div className="mx-auto h-12 w-12 text-slate-400">
                <i className="fa-solid fa-magnifying-glass fa-3x"></i>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-800">No matching apps found</h3>
            <p className="mt-1 text-slate-500">Try adjusting your filters to find what you're looking for.</p>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default AppGrid;
