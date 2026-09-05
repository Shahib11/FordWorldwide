import React from 'react';
import { Users, Luggage, Check, ArrowRight } from 'lucide-react';
import { VEHICLES } from '../data/mockData';
import { VehicleType } from '../types';

interface FleetSectionProps {
  onSelectVehicle: (vehicleId: VehicleType) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  return (
    <section id="fleet" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Our Vehicles
          </h2>
          <p className="text-slate-600 text-sm">
            Comfortable, spacious private vehicles with guaranteed luggage capacity and professional chauffeurs.
          </p>
        </div>

        {/* 3 Main Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {VEHICLES.map((vehicle) => {
            const isFeatured = vehicle.id === 'v-class';
            const heathrowFare = vehicle.baseFareSouthamptonFromHeathrow;
            const londonFare = vehicle.baseFareSouthamptonFromLondon;

            return (
              <div
                key={vehicle.id}
                className={`rounded-xl flex flex-col overflow-hidden bg-white border transition-all ${
                  isFeatured
                    ? 'border-amber-600 shadow-sm ring-1 ring-amber-600'
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Vehicle Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {vehicle.badge && (
                    <div className="absolute top-2.5 right-2.5 bg-amber-700 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-xs">
                      {vehicle.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{vehicle.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{vehicle.tagline}</p>

                    {/* Capacity Bar */}
                    <div className="grid grid-cols-2 gap-2 p-2 mt-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                      <div className="flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-700" />
                        <span className="font-semibold text-slate-800 text-xs">Up to {vehicle.passengers}</span>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <Luggage className="w-3.5 h-3.5 text-amber-700" />
                        <span className="font-semibold text-slate-800 text-xs">{vehicle.luggageCapacity.largeSuitcases} Bags</span>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <div className="space-y-1 mt-3">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Box & Button */}
                  <div className="pt-2.5 border-t border-slate-100 space-y-2">
                    <div className="flex justify-between items-baseline text-xs">
                      <span className="text-slate-500">From Heathrow:</span>
                      <span className="text-sm font-bold text-slate-900">£{heathrowFare}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectVehicle(vehicle.id)}
                      className={`w-full py-2 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center space-x-1 cursor-pointer ${
                        isFeatured
                          ? 'bg-slate-900 hover:bg-slate-800 text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <span>Select Vehicle</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
