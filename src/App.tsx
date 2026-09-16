import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingCalculator } from './components/BookingCalculator';
import { FleetSection } from './components/FleetSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ReviewPage } from './components/ReviewPage';
import { VehicleType } from './types';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './data/mockData';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('v-class');
  const [currentView, setCurrentView] = useState<'home' | 'terms' | 'privacy' | 'review'>('home');

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash === '#review' || hash === '#reviews' || path === '/review' || path === '/reviews') {
        setCurrentView('review');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms' || hash === '#terms-and-conditions') {
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#privacy' || hash === '#privacy-policy' || hash === '#gdpr') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentView('home');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateTo = (view: 'home' | 'terms' | 'privacy' | 'review') => {
    setCurrentView(view);
    if (view === 'review') {
      window.location.hash = 'review';
    } else if (view === 'terms') {
      window.location.hash = 'terms';
    } else if (view === 'privacy') {
      window.location.hash = 'privacy';
    } else {
      window.history.pushState(null, '', window.location.pathname.replace(/\/review.*$/, ''));
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCalculator = () => {
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById('booking-calculator');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById('booking-calculator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectVehicleFromFleet = (vehicleId: VehicleType) => {
    setSelectedVehicle(vehicleId);
    scrollToCalculator();
  };

  const whatsappFloatingUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello FourFold Worldwide, I would like to check availability for a London to Southampton Cruise Port transfer.'
  )}`;

  // If viewing the mobile-first review page (QR code / email link), render standalone with zero distractions
  if (currentView === 'review') {
    return <ReviewPage onBackToHome={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-900 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar 
        onBookNowClick={scrollToCalculator}
        currentView={currentView}
        onNavigateHome={() => navigateTo('home')}
      />

      {/* Main Content */}
      <main className="flex-1">
        {currentView === 'terms' ? (
          <TermsAndConditions 
            onBackToHome={() => navigateTo('home')}
            onOpenPrivacy={() => navigateTo('privacy')}
          />
        ) : currentView === 'privacy' ? (
          <PrivacyPolicy 
            onBackToHome={() => navigateTo('home')}
          />
        ) : (
          <>
            <Hero onBookNow={scrollToCalculator} />

            <BookingCalculator selectedVehicleId={selectedVehicle} />

            <FleetSection onSelectVehicle={handleSelectVehicleFromFleet} />

            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerms={() => navigateTo('terms')}
        onOpenPrivacy={() => navigateTo('privacy')}
        onOpenReview={() => navigateTo('review')}
      />

      {/* Floating WhatsApp Direct Contact */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={whatsappFloatingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-xs font-semibold"
          title="Direct WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp 24/7</span>
        </a>
      </div>
    </div>
  );
}
