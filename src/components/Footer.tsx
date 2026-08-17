import React from 'react';
import { ShieldCheck, Phone, Mail, MessageCircle, Anchor, Car, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, CRUISE_TERMINALS, VEHICLES } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello FourFold Worldwide Chauffeur Dispatch, I would like to book a Southampton transfer.'
  )}`;

  return (
    <footer className="bg-[#0A0B0E] text-[#8A8F98] text-xs border-t border-[#23262D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#14161C] border border-[#23262D] flex items-center justify-center">
                <span className="font-bold text-sm text-[#C5A368] tracking-widest">4F</span>
              </div>
              <div>
                <span className="font-bold text-sm tracking-wider text-white uppercase block">
                  FourFold Worldwide
                </span>
                <span className="text-[9px] text-[#C5A368] font-bold uppercase tracking-widest">
                  VIP Chauffeur &amp; Cruise Transfers
                </span>
              </div>
            </div>

            <p className="text-[#8A8F98] text-xs leading-relaxed max-w-sm">
              London&apos;s premier luxury private chauffeur service specializing in bespoke London Heathrow (LHR), Gatwick (LGW), and Central London to Southampton Cruise Port transfers.
            </p>

            <div className="flex items-center space-x-3 text-[#8A8F98] pt-1">
              <span className="flex items-center text-emerald-400 text-[10px] font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                Licensed &amp; Insured
              </span>
              <span>•</span>
              <span className="text-[10px] uppercase font-bold text-[#8A8F98]">Netlify Forms Certified</span>
            </div>
          </div>

          {/* Southampton Terminals Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center text-[#C5A368]">
              <Anchor className="w-3.5 h-3.5 mr-1.5" />
              Southampton Terminals
            </h4>
            <ul className="space-y-2 text-xs">
              {CRUISE_TERMINALS.map((t) => (
                <li key={t.id}>
                  <a href="#cruise-terminals" className="text-[#8A8F98] hover:text-[#C5A368] transition-colors">
                    {t.name.split('(')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center text-[#C5A368]">
              <Car className="w-3.5 h-3.5 mr-1.5" />
              VIP Fleet
            </h4>
            <ul className="space-y-2 text-xs">
              {VEHICLES.map((v) => (
                <li key={v.id}>
                  <a href="#fleet" className="text-[#8A8F98] hover:text-[#C5A368] transition-colors">
                    {v.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#booking-calculator" className="text-[#C5A368] hover:underline font-bold text-[11px]">
                  Compare Luggage Limits →
                </a>
              </li>
            </ul>
          </div>

          {/* 24/7 Dispatch Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A368]">
              24/7 Chauffeur Dispatch
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center text-[#E2E4E9] hover:text-[#C5A368] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A368]" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-2" />
                WhatsApp: +44 7400 123456
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center text-[#E2E4E9] hover:text-[#C5A368] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 mr-2 text-[#C5A368]" />
                {COMPANY_INFO.email}
              </a>
            </div>
            <p className="text-[11px] text-[#8A8F98] pt-1">
              Operating around the clock 365 days a year for transatlantic and worldwide cruise departures.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#23262D] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8A8F98] text-[10px] uppercase font-medium">
          <p>© {new Date().getFullYear()} FourFold Worldwide. All rights reserved. Registered in England &amp; Wales.</p>

          <div className="flex items-center space-x-4">
            <span>Netlify Forms Compatible</span>
            <span>GDPR Compliant</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#14161C] hover:bg-[#1C1F26] border border-[#23262D] text-[#E2E4E9] transition-colors flex items-center space-x-1 cursor-pointer font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
