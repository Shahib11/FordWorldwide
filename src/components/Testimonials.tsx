import React from 'react';
import { Star, Quote, Anchor } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Passenger Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            From Cunard transatlantic crossings to worldwide cruise voyages, read what our passengers say about our private transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-7 h-7 text-slate-100 absolute top-5 right-5" />

              <div className="space-y-3 relative z-10">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">{item.author}</h3>
                  <span className="text-[11px] text-slate-500">{item.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-[11px] text-slate-500">
                  <Anchor className="w-3 h-3 text-amber-700 shrink-0" />
                  <span className="line-clamp-1">{item.trip}</span>
                </div>
                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 mt-1">
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
