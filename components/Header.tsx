
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          AI Teacher's Portal
        </h1>
        <p className="mt-1 text-sm sm:text-base text-slate-600">
          Discover the best AI tools to empower your teaching.
        </p>
      </div>
    </header>
  );
};

export default Header;
