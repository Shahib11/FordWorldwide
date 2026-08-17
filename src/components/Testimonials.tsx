import React from 'react';
import { Star, Quote, Anchor, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0B0E] relative border-b border-[#23262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#14161C] border border-[#23262D] text-[#C5A368] text-[10px] font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#C5A368] text-[#C5A368]" />
            <span>Verified Cruise Passenger Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#E2E4E9] tracking-tight">
            Trusted by Travelers <span className="font-serif italic text-[#C5A368]">Worldwide</span>
          </h2>
          <p className="text-[#8A8F98] text-sm leading-relaxed max-w-2xl mx-auto">
            From Cunard transatlantic crossings to Mediterranean and Caribbean voyages, read how FourFold Worldwide elevates port transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#14161C] border border-[#23262D] hover:border-[#C5A368]/50 transition-all flex flex-col justify-between space-y-5 shadow-lg relative group"
            >
              <Quote className="w-8 h-8 text-[#23262D] absolute top-5 right-5" />

              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A368] text-[#C5A368]" />
                  ))}
                </div>

                <p className="text-xs text-[#E2E4E9] italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#23262D] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-white">{item.author}</h4>
                  <span className="text-[11px] text-[#C5A368] font-semibold">{item.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-[11px] text-[#8A8F98]">
                  <Anchor className="w-3 h-3 text-[#C5A368] shrink-0" />
                  <span className="line-clamp-1">{item.trip}</span>
                </div>
                <span className="inline-block text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-[#1C1F26] border border-[#23262D] text-[#8A8F98] mt-1">
                  {item.vehicle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
