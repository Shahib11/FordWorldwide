import React, { useState } from 'react';
import { Anchor, MapPin, Clock, Ship, ShieldCheck } from 'lucide-react';
import { CRUISE_TERMINALS } from '../data/mockData';

interface CruiseTerminalsGuideProps {
  onBookTerminal: (terminalId: string) => void;
}

export const CruiseTerminalsGuide: React.FC<CruiseTerminalsGuideProps> = ({ onBookTerminal }) => {
  const [selectedTerminal, setSelectedTerminal] = useState(CRUISE_TERMINALS[0]);

  return (
    <section id="cruise-terminals" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <Anchor className="w-3.5 h-3.5" />
            <span>Port Navigation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Southampton Cruise Terminals Guide
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Direct VIP chauffeur drop-off and pickup across all Southampton cruise berths with luggage assistance.
          </p>
        </div>

        {/* Terminals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 5 Cols: Terminals List */}
          <div className="lg:col-span-5 space-y-2.5">
            {CRUISE_TERMINALS.map((terminal) => {
              const isSelected = selectedTerminal.id === terminal.id;
              return (
                <div
                  key={terminal.id}
                  onClick={() => setSelectedTerminal(terminal)}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-600 ring-1 ring-amber-600 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-md ${
                        isSelected ? 'bg-amber-700 text-white font-bold' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Anchor className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">{terminal.name}</h3>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{terminal.dockNumber}</p>
                      </div>
                    </div>
                    <span className="text-xs text-amber-800 font-semibold">Details →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 7 Cols: Selected Terminal Detailed Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-semibold text-amber-800 uppercase tracking-wider block">
                    Selected Terminal
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {selectedTerminal.name}
                  </h3>
                </div>
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-amber-700">
                  <Ship className="w-5 h-5" />
                </div>
              </div>

              {/* Terminal Address */}
              <div className="flex items-start space-x-2 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Port Address:</span>
                  <span className="font-semibold text-slate-900">{selectedTerminal.dockNumber}</span>
                </div>
              </div>

              {/* Transit Times */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center space-x-1.5 text-slate-500 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span className="text-[10px] uppercase font-bold">From Heathrow (LHR)</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900">{selectedTerminal.transitTimeFromLHR}</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center space-x-2 text-slate-500 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span className="text-[10px] uppercase font-bold">From Central London</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900">{selectedTerminal.transitTimeFromLondon}</p>
                </div>
              </div>

              {/* Popular Cruise Lines */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-semibold text-slate-700 block">
                  Common Cruise Lines:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTerminal.popularCruiseLines.map((line, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meet & Greet Procedure */}
              <div className="p-3.5 rounded-lg bg-amber-50/60 border border-amber-200 text-xs flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Meet &amp; Greet Service:</strong>
                  <span className="text-slate-600 text-xs">{selectedTerminal.meetPointDescription}</span>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Travelling via {selectedTerminal.name.split('(')[0]}?
              </span>
              <button
                type="button"
                onClick={() => onBookTerminal(selectedTerminal.id)}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Book Transfer to This Terminal →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
