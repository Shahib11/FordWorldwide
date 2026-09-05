import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Luggage, 
  MessageCircle, 
  Calendar,
  Clock,
  MapPin,
  Car
} from 'lucide-react';
import { VEHICLES, CRUISE_TERMINALS, COMPANY_INFO } from '../data/mockData';
import { VehicleType } from '../types';

interface BookingCalculatorProps {
  selectedVehicleId?: VehicleType;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({ 
  selectedVehicleId = 'v-class' 
}) => {
  const [serviceType, setServiceType] = useState<'heathrow' | 'london' | 'southampton-london'>('heathrow');
  const [pickupAddress, setPickupAddress] = useState('London Heathrow Airport (LHR)');
  const [cruiseTerminal, setCruiseTerminal] = useState('ocean-terminal');
  const [pickupDate, setPickupDate] = useState(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [pickupTime, setPickupTime] = useState('10:30');
  const [vehicleCategory, setVehicleCategory] = useState<VehicleType>(selectedVehicleId);
  const [passengers, setPassengers] = useState(2);
  const [largeSuitcases, setLargeSuitcases] = useState(3);
  const [passengerName, setPassengerName] = useState('');
  const [flightOrShip, setFlightOrShip] = useState('');

  React.useEffect(() => {
    if (selectedVehicleId) {
      setVehicleCategory(selectedVehicleId);
    }
  }, [selectedVehicleId]);

  const currentVehicle = useMemo(() => {
    return VEHICLES.find(v => v.id === vehicleCategory) || VEHICLES[0];
  }, [vehicleCategory]);

  const priceCalculation = useMemo(() => {
    const isHeathrow = serviceType === 'heathrow';
    const base = isHeathrow 
      ? currentVehicle.baseFareSouthamptonFromHeathrow 
      : currentVehicle.baseFareSouthamptonFromLondon;

    return { totalGBP: base };
  }, [serviceType, currentVehicle]);

  const selectedTerminalName = useMemo(() => {
    const t = CRUISE_TERMINALS.find(item => item.id === cruiseTerminal);
    return t ? t.name : 'Southampton Cruise Port';
  }, [cruiseTerminal]);

  // Construct the direct WhatsApp message
  const routeDescription = serviceType === 'heathrow'
    ? `Heathrow Airport ➔ ${selectedTerminalName}`
    : serviceType === 'london'
      ? `Central London ➔ ${selectedTerminalName}`
      : `${selectedTerminalName} ➔ London / Airport`;

  const whatsappMessage = `*FourFold Worldwide - Cruise Transfer Quote Request*

• Route: ${routeDescription}
• Pickup Location: ${pickupAddress || 'London area'}
• Date & Time: ${pickupDate} at ${pickupTime}
• Vehicle: ${currentVehicle.name} (${currentVehicle.category})
• Passengers: ${passengers}
• Large Suitcases: ${largeSuitcases}
• Estimated Total: £${priceCalculation.totalGBP} (All-Inclusive)
${passengerName ? `• Guest Name: ${passengerName}\n` : ''}${flightOrShip ? `• Flight/Cruise Ship/Notes: ${flightOrShip}\n` : ''}
Hello, please confirm availability for this transfer.`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="booking-calculator" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Instant Transfer Quote
          </h2>
          <p className="text-slate-600 text-sm">
            Select your journey details and receive an immediate quote directly on WhatsApp.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7 shadow-xs space-y-5">
          {/* 1. Route Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              1. Select Route
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'heathrow', label: 'Heathrow ➔ Southampton' },
                { id: 'london', label: 'Central London ➔ Southampton' },
                { id: 'southampton-london', label: 'Southampton ➔ London' },
              ].map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setServiceType(r.id as any);
                    if (r.id === 'heathrow') setPickupAddress('London Heathrow Airport (LHR)');
                    else if (r.id === 'london') setPickupAddress('Central London Hotel / Address');
                    else setPickupAddress('Southampton Cruise Terminal');
                  }}
                  className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-colors cursor-pointer ${
                    serviceType === r.id
                      ? 'bg-amber-50 border-amber-600 text-slate-900 ring-1 ring-amber-600'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Pickup & Dropoff details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Pickup Location</span>
              </label>
              <input
                type="text"
                value={pickupAddress}
                onChange={e => setPickupAddress(e.target.value)}
                placeholder="e.g. Heathrow T2, T3, T4, T5 or Hotel Name"
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-amber-700" />
                <span>Southampton Cruise Terminal</span>
              </label>
              <select
                value={cruiseTerminal}
                onChange={e => setCruiseTerminal(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              >
                {CRUISE_TERMINALS.map(term => (
                  <option key={term.id} value={term.id}>
                    {term.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Date & Time */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>Date</span>
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={e => setPickupDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Time</span>
              </label>
              <input
                type="time"
                value={pickupTime}
                onChange={e => setPickupTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>Passengers</span>
              </label>
              <select
                value={passengers}
                onChange={e => setPassengers(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              >
                {[1, 2, 3, 4, 5, 6, 7].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Luggage className="w-3.5 h-3.5 text-amber-700" />
                <span>Large Bags</span>
              </label>
              <select
                value={largeSuitcases}
                onChange={e => setLargeSuitcases(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Suitcase' : 'Suitcases'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 4. Vehicle Selection */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              2. Choose Vehicle
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {VEHICLES.map((v) => {
                const isSelected = vehicleCategory === v.id;
                const fare = serviceType === 'heathrow'
                  ? v.baseFareSouthamptonFromHeathrow
                  : v.baseFareSouthamptonFromLondon;

                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVehicleCategory(v.id)}
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-amber-50/70 border-amber-600 ring-1 ring-amber-600'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-slate-900">{v.name}</span>
                      <span className="text-xs font-bold text-slate-900">£{fare}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Up to {v.passengers} passengers • {v.luggageCapacity.largeSuitcases} bags
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Optional details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs text-slate-600 mb-1">Your Name (Optional)</label>
              <input
                type="text"
                value={passengerName}
                onChange={e => setPassengerName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-600 mb-1">Flight # / Cruise Ship (Optional)</label>
              <input
                type="text"
                value={flightOrShip}
                onChange={e => setFlightOrShip(e.target.value)}
                placeholder="e.g. Flight BA 283 or Queen Anne"
                className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          {/* Total Fare & WhatsApp Quote Button */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-slate-500 block uppercase font-semibold">
                Fixed All-Inclusive Rate
              </span>
              <span className="text-2xl font-bold text-slate-900">
                £{priceCalculation.totalGBP}
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get WhatsApp Quote (£{priceCalculation.totalGBP})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
