import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello FourFold Worldwide, I have an inquiry regarding a London to Southampton Cruise transfer.'
  )}`;

  return (
    <section id="contact" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Need Help or Custom Itinerary?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Our chauffeur dispatch team is available 24/7 for instant bookings, flight tracking, and custom cruise connections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 flex flex-col items-center justify-center space-y-1 transition-colors group"
          >
            <div className="p-2 rounded-full bg-amber-50 text-amber-800 border border-amber-200 group-hover:bg-amber-100">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[11px] uppercase font-bold text-slate-500">Phone / Call</span>
            <span className="text-xs font-bold text-slate-900">{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 hover:border-emerald-400 flex flex-col items-center justify-center space-y-1 transition-colors group"
          >
            <div className="p-2 rounded-full bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-[11px] uppercase font-bold text-emerald-700">WhatsApp 24/7</span>
            <span className="text-xs font-bold text-slate-900">{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 flex flex-col items-center justify-center space-y-1 transition-colors group"
          >
            <div className="p-2 rounded-full bg-amber-50 text-amber-800 border border-amber-200 group-hover:bg-amber-100">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-[11px] uppercase font-bold text-slate-500">Email</span>
            <span className="text-xs font-bold text-slate-900">{COMPANY_INFO.email}</span>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-1">
          <MapPin className="w-3.5 h-3.5 text-amber-700" />
          <span>Serving London Heathrow (LHR), Gatwick (LGW), Central London &amp; Southampton Cruise Terminals</span>
        </div>
      </div>
    </section>
  );
};
