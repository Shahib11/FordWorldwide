import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, Lock, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation back */}
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-xs space-y-8">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>UK &amp; EU GDPR Compliant</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Privacy Policy &amp; GDPR Notice
            </h1>
            <p className="text-slate-500 text-xs">
              Last updated: September 2026 • FourFold Worldwide
            </p>
          </div>

          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              1. Introduction &amp; Data Controller
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              FourFold Worldwide (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides luxury chauffeur and private transfer services across London, Heathrow, Gatwick, and Southampton Cruise Port terminals. We are committed to protecting and respecting your personal privacy in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the EU General Data Protection Regulation (EU GDPR).
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              For the purposes of applicable data protection law, the Data Controller is <strong>FourFold Worldwide</strong>. If you have any questions regarding how your personal information is collected, stored, or processed, please contact our Data Protection Officer at <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-800 underline font-medium">{COMPANY_INFO.email}</a>.
            </p>
          </section>

          {/* 2. Personal Data We Collect */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              2. Information We Collect
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We collect only the essential personal details needed to provide and coordinate your chauffeur transfer services:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2 leading-relaxed">
              <li><strong>Contact Information:</strong> Your full name, telephone / WhatsApp number, and email address.</li>
              <li><strong>Journey &amp; Itinerary Data:</strong> Pickup address (hotel, residence, or airport terminal), drop-off location (e.g., Southampton Ocean Terminal, Mayflower Terminal), pickup dates, and scheduled times.</li>
              <li><strong>Flight &amp; Cruise Details:</strong> Flight numbers for flight delay monitoring, cruise ship name, cabin references if provided, passenger counts, and luggage quantities.</li>
              <li><strong>Customer Requests:</strong> Child booster seat requirements, accessibility preferences, or layover requests (e.g., Stonehenge / Windsor Castle).</li>
              <li><strong>Communications:</strong> Records of WhatsApp messages, phone calls, or email correspondence regarding your booking inquiry or transfer dispatch.</li>
            </ul>
          </section>

          {/* 3. Legal Basis for Processing Under GDPR */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              3. Legal Basis for Processing (GDPR Article 6)
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under UK and EU GDPR, we process your personal data under the following lawful grounds:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Performance of Contract</span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Processing necessary to provide quotes, confirm bookings, dispatch drivers, and transport you to your destination (Art. 6(1)(b)).
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Legal Obligation</span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Retaining booking dispatch records to comply with UK Private Hire Operator licensing rules and tax/accounting laws (Art. 6(1)(c)).
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Legitimate Interests</span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Real-time driver coordination, service quality assurance, flight delay tracking, and customer support (Art. 6(1)(f)).
                </p>
              </div>
            </div>
          </section>

          {/* 4. WhatsApp and Communications */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              4. WhatsApp Quotes &amp; Third-Party Communication
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              When you initiate an instant quote via WhatsApp, you communicate directly with our dispatch team. WhatsApp provides end-to-end encryption for message content. We do not sell, rent, or trade your phone number or messages to third-party advertisers. Your phone number is used exclusively to facilitate driver meet-and-greet communication and booking confirmations.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              5. How Long We Keep Your Data
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, and statutory licensing obligations. Chauffeur dispatch logs and invoices are retained in accordance with UK private hire regulations and HMRC requirements, after which records are securely deleted or anonymized.
            </p>
          </section>

          {/* 6. Your Rights Under GDPR */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              6. Your Rights Under GDPR
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              As a data subject in the United Kingdom or European Union, you hold comprehensive rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-900 block">Right to Access</span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Request a copy of the personal data we hold about you at any time.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-900 block">Right to Rectification</span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Request correction of inaccurate or incomplete contact or journey information.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-900 block">Right to Erasure (To Be Forgotten)</span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Request deletion of your data when it is no longer required for statutory licensing or contract execution.
                </p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-900 block">Right to Restriction &amp; Objection</span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Object to processing based on legitimate interests or request temporary restriction of processing.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              To exercise any of your GDPR rights, simply email our team at <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-800 underline font-medium">{COMPANY_INFO.email}</a>. We will respond within one month as prescribed by law.
            </p>
          </section>

          {/* 7. Supervisory Authority */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              7. Complaints &amp; UK Information Commissioner (ICO)
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you have any concerns regarding how we handle your personal data, you have the right to lodge a complaint with the UK supervisory authority:
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-0.5">
              <span className="font-bold text-slate-900 block">Information Commissioner&apos;s Office (ICO)</span>
              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF, United Kingdom</p>
              <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline">https://ico.org.uk</a> • Helpline: 0303 123 1113</p>
            </div>
          </section>

          {/* 8. Contact details */}
          <section className="border-t border-slate-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900">
              Contact FourFold Worldwide
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-600">
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-amber-700" />
                {COMPANY_INFO.email}
              </span>
              <span className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-700" />
                {COMPANY_INFO.phone}
              </span>
              <span className="flex items-center">
                <Lock className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                256-bit SSL Secure
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
