import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShieldCheck, Menu, X, Anchor, Car, Calendar, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello FourFold Worldwide, I would like to inquire about a VIP private transfer to/from Southampton Cruise Port.'
  )}`;

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0B0E]/95 backdrop-blur-md border-b border-[#23262D] shadow-2xl py-3'
          : 'bg-[#0A0B0E]/90 border-b border-[#23262D] py-4'
      }`}
    >
      {/* Top micro bar for VIP dispatch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-xs text-[#8A8F98] border-b border-[#23262D] pb-2">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-[#C5A368] font-medium tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Licensed VIP Private Hire • London & Southampton Port
          </span>
          <span className="text-[#4F5561]">|</span>
          <span className="flex items-center text-[#8A8F98]">
            <Anchor className="w-3.5 h-3.5 mr-1 text-[#8A8F98]" />
            Specialists in Southampton Cruise Port Transfers
          </span>
        </div>
        <div className="flex items-center space-x-5">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center hover:text-[#C5A368] text-[#E2E4E9] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-[#C5A368]" />
            {COMPANY_INFO.phone}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1" />
            WhatsApp 24/7
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm shrink-0">
            <span className="text-black font-black text-xl leading-none">F</span>
          </div>
          <div>
            <span className="text-lg sm:text-xl font-bold tracking-tight uppercase italic text-white">
              FourFold <span className="font-light text-[#8A8F98]">Worldwide</span>
            </span>
            <p className="text-[9px] uppercase tracking-widest text-[#8A8F98] -mt-0.5 hidden sm:block">
              VIP Private Cruise Transfers
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-widest text-[#8A8F98]">
          <a href="#booking-calculator" className="hover:text-white transition-colors flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1 text-[#C5A368]" />
            Instant Quote
          </a>
          <a href="#fleet" className="hover:text-white transition-colors flex items-center">
            <Car className="w-3.5 h-3.5 mr-1 text-[#C5A368]" />
            The Fleet
          </a>
          <a href="#cruise-terminals" className="hover:text-white transition-colors flex items-center">
            <Anchor className="w-3.5 h-3.5 mr-1 text-[#C5A368]" />
            Southampton Port
          </a>
          <a href="#sightseeing" className="hover:text-white transition-colors flex items-center">
            <Compass className="w-3.5 h-3.5 mr-1 text-[#C5A368]" />
            Sightseeing
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* VIP Line badge & Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <div className="text-xs font-bold border border-[#23262D] px-3.5 py-2 rounded-full text-[#E2E4E9] hidden xl:block">
            VIP LINE: {COMPANY_INFO.phone}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#14161C] border border-[#23262D] text-emerald-400 hover:border-emerald-500/40 transition-all"
            title="Chat directly with VIP Chauffeur Dispatch on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            id="nav-book-transfer-btn"
            type="button"
            onClick={onBookNowClick}
            className="px-4 py-2 rounded-lg bg-[#C5A368] hover:bg-[#b59458] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Request Booking
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#14161C] text-[#E2E4E9] hover:text-white border border-[#23262D]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0B0E] border-b border-[#23262D] px-5 pt-4 pb-6 mt-3 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-xs font-semibold uppercase tracking-wider text-[#8A8F98]">
            <a
              href="#booking-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-[#E2E4E9] hover:text-[#C5A368] py-1"
            >
              <Calendar className="w-4 h-4 mr-3 text-[#C5A368]" />
              Instant Quote & Booking
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-[#E2E4E9] hover:text-[#C5A368] py-1"
            >
              <Car className="w-4 h-4 mr-3 text-[#C5A368]" />
              The Fleet (V-Class & Executive SUVs)
            </a>
            <a
              href="#cruise-terminals"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-[#E2E4E9] hover:text-[#C5A368] py-1"
            >
              <Anchor className="w-4 h-4 mr-3 text-[#C5A368]" />
              Southampton Terminals Guide
            </a>
            <a
              href="#sightseeing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center text-[#E2E4E9] hover:text-[#C5A368] py-1"
            >
              <Compass className="w-4 h-4 mr-3 text-[#C5A368]" />
              Sightseeing Layovers
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E4E9] hover:text-[#C5A368] py-1"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#E2E4E9] hover:text-[#C5A368] py-1"
            >
              Contact & Dispatch
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNowClick();
              }}
              className="w-full py-3 rounded-lg bg-[#C5A368] hover:bg-[#b59458] text-black font-bold uppercase tracking-wider text-xs shadow-lg"
            >
              Request Booking
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-[#14161C] border border-[#23262D] text-emerald-400 font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp VIP Line ({COMPANY_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
