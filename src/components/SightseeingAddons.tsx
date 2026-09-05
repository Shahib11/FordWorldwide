import React from 'react';
import { Compass, Landmark, Shield, Clock, ArrowRight } from 'lucide-react';
import { SIGHTSEEING_STOPS } from '../data/mockData';

interface SightseeingAddonsProps {
  onSelectLayover: (layoverId: string) => void;
}

export const SightseeingAddons: React.FC<SightseeingAddonsProps> = ({ onSelectLayover }) => {
  const stops = SIGHTSEEING_STOPS.filter(s => s.id !== 'none');

  return (
    <section id="sightseeing" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Optional Layovers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            En-Route Sightseeing Layovers
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Add a relaxed stopover to your journey while your chauffeur securely attends to your luggage inside the vehicle.
          </p>
        </div>

        {/* Sightseeing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stops.map((stop) => {
            return (
              <div
                key={stop.id}
                className="rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 p-5 flex flex-col justify-between transition-all shadow-xs group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-white text-amber-700 border border-slate-200">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      +£{stop.extraPrice}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {stop.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 mt-1">
                      <Clock className="w-3 h-3 text-amber-700" />
                      <span>{stop.duration} Stopover</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stop.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3 border-t border-slate-200/80 space-y-2.5">
                  <div className="flex items-center space-x-1.5 text-[10px] font-semibold text-emerald-700">
                    <Shield className="w-3 h-3" />
                    <span>Luggage minded in vehicle</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectLayover(stop.id)}
                    className="w-full py-2 rounded-lg bg-white group-hover:bg-slate-900 text-slate-800 group-hover:text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-1 cursor-pointer border border-slate-300 group-hover:border-slate-900"
                  >
                    <span>Add to Booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
