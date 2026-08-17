import React from 'react';
import { Compass, Landmark, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { SIGHTSEEING_STOPS } from '../data/mockData';

interface SightseeingAddonsProps {
  onSelectLayover: (layoverId: string) => void;
  currency: 'GBP' | 'USD' | 'EUR';
}

export const SightseeingAddons: React.FC<SightseeingAddonsProps> = ({ onSelectLayover, currency }) => {
  const stops = SIGHTSEEING_STOPS.filter(s => s.id !== 'none');

  const { symbol, multiplier } = React.useMemo(() => {
    switch (currency) {
      case 'USD':
        return { symbol: '$', multiplier: 1.3 };
      case 'EUR':
        return { symbol: '€', multiplier: 1.18 };
      default:
        return { symbol: '£', multiplier: 1.0 };
    }
  }, [currency]);

  return (
    <section id="sightseeing" className="py-24 bg-[#0A0B0E] relative border-b border-[#23262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#14161C] border border-[#23262D] text-[#C5A368] text-[10px] font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Turn Your Transfer into a Royal Day Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#E2E4E9] tracking-tight">
            En-Route Sightseeing <span className="font-serif italic text-[#C5A368]">Layovers</span>
          </h2>
          <p className="text-[#8A8F98] text-sm leading-relaxed max-w-2xl mx-auto">
            Since the route between London Heathrow and Southampton Port runs directly past Britain&apos;s most iconic historic landmarks, you can add an effortless 1.5 to 2-hour stopover while your chauffeur securely minds your cruise luggage.
          </p>
        </div>

        {/* Sightseeing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stops.map((stop) => {
            const price = Math.round(stop.extraPrice * multiplier);
            return (
              <div
                key={stop.id}
                className="rounded-2xl bg-[#14161C] border border-[#23262D] hover:border-[#C5A368]/60 p-5 flex flex-col justify-between transition-all duration-300 shadow-lg group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-[#1C1F26] text-[#C5A368] border border-[#23262D]">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#C5A368]">
                      +{symbol}{price}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#C5A368] transition-colors">
                      {stop.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-[11px] text-[#8A8F98] mt-1">
                      <Clock className="w-3 h-3 text-[#C5A368]" />
                      <span>{stop.duration} Stopover Included</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#8A8F98] leading-relaxed">
                    {stop.description}
                  </p>
                </div>

                <div className="pt-4 mt-3.5 border-t border-[#23262D] space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-[10px] uppercase font-bold text-emerald-400">
                    <Shield className="w-3 h-3" />
                    <span>Luggage safe in vehicle</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectLayover(stop.id)}
                    className="w-full py-2.5 rounded-xl bg-[#1C1F26] group-hover:bg-[#C5A368] text-[#E2E4E9] group-hover:text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 cursor-pointer border border-[#23262D] group-hover:border-[#C5A368]"
                  >
                    <span>Add to Transfer</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
