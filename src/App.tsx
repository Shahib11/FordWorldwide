import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingCalculator } from './components/BookingCalculator';
import { FleetSection } from './components/FleetSection';
import { CruiseTerminalsGuide } from './components/CruiseTerminalsGuide';
import { SightseeingAddons } from './components/SightseeingAddons';
import { VIPPerks } from './components/VIPPerks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VehicleType } from './types';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/mockData';

export default function App() {
  const [currency, setCurrency] = useState<'GBP' | 'USD' | 'EUR'>('GBP');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('v-class');

  const scrollToCalculator = () => {
    const el = document.getElementById('booking-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFleet = () => {
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectVehicleFromFleet = (vehicleId: VehicleType) => {
    setSelectedVehicle(vehicleId);
    scrollToCalculator();
  };

  const handleSelectTerminal = (_terminalId: string) => {
    scrollToCalculator();
  };

  const handleSelectLayover = (_layoverId: string) => {
    scrollToCalculator();
  };

  const whatsappFloatingUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello FourFold Worldwide, I would like to check availability for a VIP London to Southampton Cruise Port transfer.'
  )}`;

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#E2E4E9] selection:bg-[#C5A368]/30 selection:text-white">
      {/* Navigation */}
      <Navbar
        onBookNowClick={scrollToCalculator}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onExploreFleet={scrollToFleet}
          onBookNow={scrollToCalculator}
          currency={currency}
        />

        <BookingCalculator
          currency={currency}
          selectedVehicleId={selectedVehicle}
        />

        <FleetSection
          onSelectVehicle={handleSelectVehicleFromFleet}
          currency={currency}
        />

        <CruiseTerminalsGuide
          onBookTerminal={handleSelectTerminal}
        />

        <SightseeingAddons
          onSelectLayover={handleSelectLayover}
          currency={currency}
        />

        <VIPPerks />

        <Testimonials />

        <FaqSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24/7 VIP Concierge Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
        <a
          href={whatsappFloatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#14161C] hover:bg-[#1C1F26] text-[#E2E4E9] border border-[#23262D] hover:border-[#C5A368]/50 p-3 sm:px-4 sm:py-2.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs font-semibold uppercase tracking-wider"
          title="Direct WhatsApp with VIP Chauffeur Dispatch"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 sm:mr-2" />
          <span className="hidden sm:inline text-xs font-bold text-[#E2E4E9]">VIP WhatsApp 24/7</span>
        </a>
      </div>
    </div>
  );
}
