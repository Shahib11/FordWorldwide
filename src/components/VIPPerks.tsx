import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Radio, 
  Sparkles, 
  Baby, 
  Wifi, 
  Luggage, 
  UserCheck, 
  CreditCard 
} from 'lucide-react';

export const VIPPerks: React.FC = () => {
  const perks = [
    {
      icon: UserCheck,
      title: 'PCO-Licensed Chauffeurs',
      description: 'Professional, suited, and vetted British chauffeurs providing courteous, white-glove assistance.',
    },
    {
      icon: Radio,
      title: 'Flight & Vessel Radar Tracking',
      description: 'We track your inbound flight or ship disembarkation in real-time so your driver is always on time.',
    },
    {
      icon: Clock,
      title: '60-Minute Free Waiting Time',
      description: 'Generous complimentary waiting time at Heathrow, Gatwick, and Southampton Cruise Docks.',
    },
    {
      icon: Luggage,
      title: 'Curbside Porter Assistance',
      description: 'We assist with heavy luggage straight from your hotel lobby or baggage carousel right to the cruise porter.',
    },
    {
      icon: Baby,
      title: 'Complimentary Child Seats',
      description: 'Isofix infant carriers, toddler seats, and booster cushions provided upon reservation request.',
    },
    {
      icon: Wifi,
      title: '5G Wi-Fi & Cold Spring Water',
      description: 'Fast, secure in-vehicle Wi-Fi, device charging cables, and complimentary chilled Harrogate Spring water.',
    },
  ];

  return (
    <section className="py-20 bg-[#0A0B0E] relative border-b border-[#23262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#14161C] border border-[#23262D] text-[#C5A368] text-[10px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The FourFold Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#E2E4E9] tracking-tight">
            Why Cruise Passengers Choose <span className="font-serif italic text-[#C5A368]">FourFold Worldwide</span>
          </h2>
          <p className="text-[#8A8F98] text-sm leading-relaxed max-w-2xl mx-auto">
            No public train luggage hassles, no crowded coaches, and no surprise surge fares. Pure door-to-ship distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#14161C] border border-[#23262D] hover:border-[#C5A368]/60 transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1C1F26] border border-[#23262D] text-[#C5A368] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#C5A368] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-xs text-[#8A8F98] leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
