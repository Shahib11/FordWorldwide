import React from 'react';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
          London &amp; Southampton Cruise Transfers
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Private chauffeur transfers between Heathrow, Gatwick, London hotels, and all Southampton cruise terminals. Fixed fares with meet &amp; greet included.
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={onBookNow}
            className="px-6 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-xs transition-colors cursor-pointer"
          >
            Calculate Fare &amp; WhatsApp Quote
          </button>
        </div>
      </div>
    </section>
  );
};
