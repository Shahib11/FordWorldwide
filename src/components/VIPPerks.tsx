import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Radio, 
  Baby, 
  Wifi, 
  Luggage, 
  UserCheck
} from 'lucide-react';

export const VIPPerks: React.FC = () => {
  const perks = [
    {
      icon: UserCheck,
      title: 'PCO-Licensed Chauffeurs',
      description: 'Professional, suited, and vetted British chauffeurs providing courteous, white-glove service.',
    },
    {
      icon: Radio,
      title: 'Flight & Vessel Radar Tracking',
      description: 'We track your inbound flight or ship disembarkation in real time so your driver is always waiting.',
    },
    {
      icon: Clock,
      title: '60-Minute Free Waiting Time',
      description: 'Generous complimentary waiting time at Heathrow, Gatwick, and Southampton cruise terminals.',
    },
    {
      icon: Luggage,
      title: 'Luggage Porter Assistance',
      description: 'Full assistance with heavy suitcases straight from the arrivals hall to the vehicle trunk.',
    },
    {
      icon: Baby,
      title: 'Complimentary Child Seats',
      description: 'Isofix infant carriers, toddler seats, and booster cushions provided upon reservation request.',
    },
    {
      icon: Wifi,
      title: 'Wi-Fi & Chilled Water',
      description: 'In-vehicle Wi-Fi, device charging cables, and complimentary bottled mineral water.',
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Service Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Why Travel With FourFold Worldwide
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            No train station staircases or crowded coach buses. A relaxed, direct door-to-ship private chauffeur service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {perk.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
