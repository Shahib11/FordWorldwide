import React from 'react';
import { Shield, Clock, Anchor, Sparkles, CheckCircle2, ChevronRight, Luggage, Users } from 'lucide-react';
import { VEHICLES } from '../data/mockData';

interface HeroProps {
  onExploreFleet: () => void;
  onBookNow: () => void;
  currency: 'GBP' | 'USD' | 'EUR';
}

export const Hero: React.FC<HeroProps> = ({ onExploreFleet, onBookNow, currency }) => {
  const getCurrencySymbol = (curr: 'GBP' | 'USD' | 'EUR') => {
    switch (curr) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '£';
    }
  };

  const getMultiplier = (curr: 'GBP' | 'USD' | 'EUR') => {
    switch (curr) {
      case 'USD':
        return 1.3;
      case 'EUR':
        return 1.18;
      default:
        return 1;
    }
  };

  const sym = getCurrencySymbol(currency);
  const mul = getMultiplier(currency);

  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0A0B0E] border-b border-[#23262D]">
      {/* High Density Subtle Mesh Backdrop */}
      <div className="absolute inset-0 pointer-events-none subtle-mesh-bg opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Prop & Pitch */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#14161C] border border-[#23262D] text-[#C5A368] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A368]" />
              <span>Southampton Cruise Port VIP Chauffeur Service</span>
            </div>

            {/* Main Headline with High Density font-light + serif italic */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-[#E2E4E9] tracking-tight">
              London to Southampton <br />
              <span className="font-serif italic text-[#C5A368]">VIP Cruise Transfers</span>
            </h1>

            {/* Description */}
            <p className="text-[#8A8F98] max-w-xl text-sm leading-relaxed">
              Exclusive private transport solutions for cruise passengers. Door-to-deck service with professional British chauffeurs and a fleet designed for luxury, spacious luggage capacity, and punctuality.
            </p>

            {/* High Density Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="bg-[#14161C] border border-[#23262D] p-3 rounded-lg">
                <div className="text-[10px] uppercase font-bold text-[#8A8F98] tracking-wider">Luggage</div>
                <div className="text-xs font-bold text-[#E2E4E9] mt-0.5">Up to 7 Large Bags</div>
              </div>
              <div className="bg-[#14161C] border border-[#23262D] p-3 rounded-lg">
                <div className="text-[10px] uppercase font-bold text-[#8A8F98] tracking-wider">Meet & Greet</div>
                <div className="text-xs font-bold text-[#E2E4E9] mt-0.5">Terminal Porter Escort</div>
              </div>
              <div className="bg-[#14161C] border border-[#23262D] p-3 rounded-lg">
                <div className="text-[10px] uppercase font-bold text-[#8A8F98] tracking-wider">Radar Tracking</div>
                <div className="text-xs font-bold text-[#E2E4E9] mt-0.5">Flight & Vessel Live</div>
              </div>
              <div className="bg-[#14161C] border border-[#23262D] p-3 rounded-lg">
                <div className="text-[10px] uppercase font-bold text-[#8A8F98] tracking-wider">Transparent</div>
                <div className="text-xs font-bold text-[#E2E4E9] mt-0.5">Fixed All-Inclusive</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <button
                id="hero-book-now-btn"
                type="button"
                onClick={onBookNow}
                className="px-6 py-3.5 rounded-lg bg-[#C5A368] hover:bg-[#b59458] text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center cursor-pointer shadow-md"
              >
                <span>Calculate Fare & Book</span>
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </button>

              <button
                id="hero-explore-fleet-btn"
                type="button"
                onClick={onExploreFleet}
                className="px-5 py-3.5 rounded-lg bg-[#14161C] hover:bg-[#1C1F26] text-[#E2E4E9] font-bold text-xs uppercase tracking-wider border border-[#23262D] transition-all flex items-center cursor-pointer"
              >
                View The Fleet
              </button>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-[11px] text-[#8A8F98] border-t border-[#23262D]">
              <div className="flex items-center">
                <Shield className="w-3.5 h-3.5 text-[#C5A368] mr-1.5" />
                <span>TfL & Southampton Licensed</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 text-[#C5A368] mr-1.5" />
                <span>60 Mins Airport Waiting Included</span>
              </div>
              <div className="flex items-center">
                <Anchor className="w-3.5 h-3.5 text-[#C5A368] mr-1.5" />
                <span>All 5 Southampton Terminals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fleet Visual Cards & Rates Showcase */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-[#14161C] border border-[#23262D] rounded-2xl p-5 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#23262D]">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#C5A368] tracking-widest">Fleet Preview</div>
                  <h3 className="text-base font-bold text-white">VIP Port Transfer Classes</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#8A8F98]">From LHR Port</span>
                  <p className="text-lg font-bold text-[#C5A368]">
                    {sym}
                    {Math.round(250 * mul)}
                  </p>
                </div>
              </div>

              {/* High Density 3 Vehicle Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 pt-4">
                {VEHICLES.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="p-3 rounded-xl bg-[#1C1F26] hover:bg-[#23262D]/70 border border-[#23262D] transition-all cursor-pointer group"
                    onClick={onBookNow}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-black shrink-0 border border-[#23262D]">
                          <img
                            src={vehicle.imageUrl}
                            alt={vehicle.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-[#C5A368] font-bold">
                            {vehicle.id === 'v-class' ? 'Executive Choice' : vehicle.id === 'luxury-suv' ? 'First-Class SUV' : 'Standard SUV'}
                          </div>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#C5A368] transition-colors">
                            {vehicle.name}
                          </h4>
                          <span className="text-[10px] text-[#8A8F98]">Up to {vehicle.passengers} Pax • {vehicle.luggageCapacity.largeSuitcases} Large Bags</span>
                        </div>
                      </div>

                      <div className="text-right pl-2">
                        <div className="text-xs font-bold text-[#C5A368]">
                          {sym}
                          {Math.round(vehicle.baseFareSouthamptonFromHeathrow * mul)}
                        </div>
                        <span className="text-[9px] uppercase tracking-wider text-[#8A8F98] block">Select</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fast Quote Prompt Button */}
              <div className="mt-3 pt-3 border-t border-[#23262D]">
                <button
                  type="button"
                  onClick={onBookNow}
                  className="w-full py-2.5 rounded-lg bg-[#1C1F26] hover:bg-[#23262D] text-[#E2E4E9] hover:text-white border border-[#23262D] text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Open Rate Calculator & Booking Engine</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A368]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
