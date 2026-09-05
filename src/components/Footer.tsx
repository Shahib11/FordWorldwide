import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello FourFold Worldwide, I would like to book a Southampton transfer.'
  )}`;

  return (
    <footer className="bg-slate-50 text-slate-600 text-xs border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & info */}
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
            4F
          </div>
          <div>
            <span className="font-bold text-slate-900 block">FourFold Worldwide</span>
            <span className="text-[11px] text-slate-500">London &amp; Southampton Private Cruise Transfers</span>
          </div>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
            className="flex items-center text-slate-700 hover:text-slate-900 font-medium"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-amber-700" />
            {COMPANY_INFO.phone}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-emerald-700 hover:text-emerald-800 font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1" />
            WhatsApp
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center text-slate-700 hover:text-slate-900 font-medium"
          >
            <Mail className="w-3.5 h-3.5 mr-1 text-amber-700" />
            {COMPANY_INFO.email}
          </a>
        </div>

        {/* Legal links & Copyright */}
        <div className="flex flex-col sm:items-end gap-1.5 text-[11px] text-slate-500">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Privacy Policy (GDPR)
            </button>
          </div>
          <p className="text-slate-400">
            © {new Date().getFullYear()} FourFold Worldwide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
