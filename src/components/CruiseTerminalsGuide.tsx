import React, { useState } from 'react';
import { Anchor, MapPin, Clock, Ship, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { CRUISE_TERMINALS } from '../data/mockData';

interface CruiseTerminalsGuideProps {
  onBookTerminal: (terminalId: string) => void;
}

export const CruiseTerminalsGuide: React.FC<CruiseTerminalsGuideProps> = ({ onBookTerminal }) => {
  const [selectedTerminal, setSelectedTerminal] = useState(CRUISE_TERMINALS[0]);

  return (
    <section id="cruise-terminals" className="py-24 bg-[#0A0B0E] relative border-b border-[#23262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#14161C] border border-[#23262D] text-[#C5A368] text-[10px] font-bold uppercase tracking-wider">
            <Anchor className="w-3.5 h-3.5" />
            <span>Southampton Port Authority Terminals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#E2E4E9] tracking-tight">
            Southampton <span className="font-serif italic text-[#C5A368]">Cruise Terminals Guide</span>
          </h2>
          <p className="text-[#8A8F98] text-sm leading-relaxed max-w-2xl mx-auto">
            FourFold Worldwide provides dedicated chauffeur access to all five active Southampton cruise berths. Direct drop-off at the baggage scanners &amp; seamless disembarkation meet &amp; greet.
          </p>
        </div>

        {/* Interactive Terminals Grid / Master-Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 5 Cols: Terminals List */}
          <div className="lg:col-span-5 space-y-2.5">
            {CRUISE_TERMINALS.map((terminal) => {
              const isSelected = selectedTerminal.id === terminal.id;
              return (
                <div
                  key={terminal.id}
                  onClick={() => setSelectedTerminal(terminal)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#1C1F26] border-[#C5A368] ring-1 ring-[#C5A368] shadow-md'
                      : 'bg-[#14161C] border-[#23262D] hover:border-[#3A3F4D]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        isSelected ? 'bg-[#C5A368] text-black font-bold' : 'bg-[#1C1F26] text-[#C5A368] border border-[#23262D]'
                      }`}>
                        <Anchor className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{terminal.name}</h4>
                        <p className="text-[10px] text-[#8A8F98] line-clamp-1">{terminal.dockNumber}</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#C5A368] font-bold">Details →</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 7 Cols: Selected Terminal Detailed Card */}
          <div className="lg:col-span-7 bg-[#14161C] border border-[#23262D] rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#23262D] pb-3.5">
                <div>
                  <span className="text-[10px] font-bold text-[#C5A368] uppercase tracking-widest block">
                    Active Cruise Terminal
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedTerminal.name}
                  </h3>
                </div>
                <div className="p-2.5 bg-[#1C1F26] border border-[#23262D] rounded-xl text-[#C5A368]">
                  <Ship className="w-5 h-5" />
                </div>
              </div>

              {/* Terminal Address & Location */}
              <div className="flex items-start space-x-2.5 text-xs text-[#E2E4E9]">
                <MapPin className="w-4 h-4 text-[#C5A368] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8A8F98] block text-[10px] uppercase font-bold">Port Access Location:</span>
                  <span className="font-semibold text-white">{selectedTerminal.dockNumber}</span>
                </div>
              </div>

              {/* Transit Times */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#1C1F26] border border-[#23262D]">
                  <div className="flex items-center space-x-2 text-[#8A8F98] text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A368]" />
                    <span className="text-[10px] uppercase font-bold">From London Heathrow (LHR)</span>
                  </div>
                  <p className="text-xs font-bold text-white">{selectedTerminal.transitTimeFromLHR}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#1C1F26] border border-[#23262D]">
                  <div className="flex items-center space-x-2 text-[#8A8F98] text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A368]" />
                    <span className="text-[10px] uppercase font-bold">From Central London</span>
                  </div>
                  <p className="text-xs font-bold text-white">{selectedTerminal.transitTimeFromLondon}</p>
                </div>
              </div>

              {/* Popular Cruise Ships & Lines */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-bold text-[#8A8F98] uppercase tracking-wider block">
                  Common Cruise Lines at this Terminal:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTerminal.popularCruiseLines.map((line, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#1C1F26] border border-[#23262D] text-[11px] text-[#C5A368] font-medium"
                    >
                      {line}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meet & Greet Procedure */}
              <div className="p-3.5 rounded-xl bg-[#1C1F26] border border-[#23262D] text-xs text-[#E2E4E9] flex items-start space-x-3">
                <ShieldCheck className="w-4 h-4 text-[#C5A368] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5 text-xs">FourFold Chauffeur Protocol:</strong>
                  <span className="text-[#8A8F98] text-[11px] leading-relaxed">{selectedTerminal.meetPointDescription}</span>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="pt-3.5 border-t border-[#23262D] flex items-center justify-between">
              <span className="text-xs text-[#8A8F98]">
                Traveling to or from {selectedTerminal.name.split('(')[0]}?
              </span>
              <button
                type="button"
                onClick={() => onBookTerminal(selectedTerminal.id)}
                className="px-4 py-2.5 rounded-xl bg-[#C5A368] hover:bg-[#b59458] text-black font-bold uppercase tracking-wider text-xs shadow-md transition-all cursor-pointer"
              >
                Book This Terminal →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
