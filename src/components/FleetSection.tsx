import React, { useState } from 'react';
import { Users, Luggage, Wifi, Coffee, Check, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { VEHICLES } from '../data/mockData';
import { VehicleType } from '../types';

interface FleetSectionProps {
  onSelectVehicle: (vehicleId: VehicleType) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  const [activeVehicleId, setActiveVehicleId] = useState<VehicleType>('v-class');

  return (
    <section id="fleet" className="py-24 bg-[#0A0B0E] relative border-b border-[#23262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#14161C] border border-[#23262D] text-[#C5A368] text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive London &amp; Southampton Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#E2E4E9] tracking-tight">
            Our Luxury <span className="font-serif italic text-[#C5A368]">Private Transfer Fleet</span>
          </h2>
          <p className="text-[#8A8F98] text-sm leading-relaxed max-w-2xl mx-auto">
            Meticulously maintained, sanitized, and chauffeur-driven vehicles tailored for cruise passenger luggage, family comfort, and VIP prestige.
          </p>
        </div>

        {/* Tab Pills for Fast Switch */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {VEHICLES.map((vehicle) => (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => setActiveVehicleId(vehicle.id)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 cursor-pointer border ${
                activeVehicleId === vehicle.id
                  ? 'bg-[#C5A368] text-black border-[#C5A368] shadow-md'
                  : 'bg-[#14161C] text-[#8A8F98] hover:text-[#E2E4E9] hover:border-[#3A3F4D] border-[#23262D]'
              }`}
            >
              <span>{vehicle.name}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
                activeVehicleId === vehicle.id ? 'bg-black/15 text-black' : 'bg-[#1C1F26] text-[#C5A368]'
              }`}>
                {vehicle.category}
              </span>
            </button>
          ))}
        </div>

        {/* 3 Main Vehicle Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {VEHICLES.map((vehicle) => {
            const isFeatured = vehicle.id === 'v-class';
            const heathrowFare = vehicle.baseFareSouthamptonFromHeathrow;
            const londonFare = vehicle.baseFareSouthamptonFromLondon;

            return (
              <div
                key={vehicle.id}
                className={`rounded-2xl flex flex-col overflow-hidden transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#14161C] border border-[#C5A368] ring-1 ring-[#C5A368] shadow-xl'
                    : 'bg-[#14161C] border border-[#23262D] shadow-lg'
                }`}
              >
                {/* Badge */}
                {vehicle.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-[#C5A368] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow">
                    {vehicle.badge}
                  </div>
                )}

                {/* Vehicle Image */}
                <div className="relative h-52 w-full overflow-hidden bg-[#1C1F26]">
                  <img
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161C] via-transparent to-black/40" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-bold text-[#C5A368] uppercase tracking-wider block">
                      {vehicle.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{vehicle.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                  {/* Capacity Bar */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-[#1C1F26] border border-[#23262D] text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-[#14161C] text-[#C5A368] border border-[#23262D]">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[#8A8F98] block text-[9px] uppercase font-bold">Guests</span>
                        <span className="font-bold text-white text-xs">Up to {vehicle.passengers}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 rounded-lg bg-[#14161C] text-[#C5A368] border border-[#23262D]">
                        <Luggage className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[#8A8F98] block text-[9px] uppercase font-bold">Luggage</span>
                        <span className="font-bold text-white text-xs">{vehicle.luggageCapacity.largeSuitcases} Large + {vehicle.luggageCapacity.cabinBags} Cabin</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#8A8F98] uppercase tracking-wider block">
                      Chauffeur Inclusions:
                    </span>
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-[#E2E4E9]">
                        <Check className="w-3.5 h-3.5 text-[#C5A368] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Box */}
                  <div className="pt-3.5 border-t border-[#23262D]">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs text-[#8A8F98]">Heathrow ⇄ Southampton</span>
                      <span className="text-sm font-bold text-[#C5A368]">£{heathrowFare}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-[#8A8F98]">Central London ⇄ Southampton</span>
                      <span className="text-sm font-bold text-white">£{londonFare}</span>
                    </div>
                    <p className="text-[10px] text-[#8A8F98] mt-1.5">
                      *All-inclusive: Includes Meet &amp; Greet, tolls, parking, and 60-min airport wait time.
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => onSelectVehicle(vehicle.id)}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#C5A368] hover:bg-[#b59458] text-black shadow-md'
                        : 'bg-[#1C1F26] hover:bg-[#23262D] text-[#E2E4E9] border border-[#23262D]'
                    }`}
                  >
                    <span>Select {vehicle.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Luggage Capacity Matrix Breakdown */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#14161C] border border-[#23262D] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-bold text-[#C5A368] uppercase tracking-widest block">
                Cruise Baggage Advisory
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How Much Luggage Do You Have for Your Cruise?
              </h3>
              <p className="text-xs text-[#8A8F98] leading-relaxed">
                Cruise itineraries (especially 7 to 28-day transatlantic voyages) require ample trunk space. Our Mercedes V-Class provides class-leading rear cargo volume so all large Samsonite/Rimowa cases fit without compromising legroom.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#1C1F26] border border-[#23262D]">
                <h4 className="font-bold text-white text-xs mb-1">Mercedes V-Class</h4>
                <p className="text-xs text-[#C5A368] font-bold mb-1.5">Max 7 Large + 7 Hand Bags</p>
                <p className="text-[11px] text-[#8A8F98]">
                  Ideal for: 4-7 passengers on extended cruise sailings with 2+ bags per person.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C1F26] border border-[#23262D]">
                <h4 className="font-bold text-white text-xs mb-1">Luxury First-Class SUV</h4>
                <p className="text-xs text-[#C5A368] font-bold mb-1.5">Max 4 Large + 4 Hand Bags</p>
                <p className="text-[11px] text-[#8A8F98]">
                  Ideal for: 1-3 VIP passengers wanting premier luxury and 1-2 bags per person.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C1F26] border border-[#23262D]">
                <h4 className="font-bold text-white text-xs mb-1">Standard Executive SUV</h4>
                <p className="text-xs text-[#C5A368] font-bold mb-1.5">Max 3-4 Large + 4 Hand Bags</p>
                <p className="text-[11px] text-[#8A8F98]">
                  Ideal for: 1-3 passengers with standard luggage loads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
