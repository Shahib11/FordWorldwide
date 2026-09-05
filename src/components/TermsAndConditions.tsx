import React from 'react';
import { ArrowLeft, FileText, CheckCircle2, Shield, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface TermsAndConditionsProps {
  onBackToHome: () => void;
  onOpenPrivacy?: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ 
  onBackToHome,
  onOpenPrivacy
}) => {
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
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              <span>Service Agreement</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 text-xs">
              Last updated: September 2026 • FourFold Worldwide
            </p>
          </div>

          {/* 1. Introduction & Booking */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              1. Bookings &amp; Service Agreement
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              These terms and conditions govern all private chauffeur transfers, airport collections, and cruise port transport services provided by <strong>FourFold Worldwide</strong>. By requesting a quote, confirming a journey via WhatsApp, phone, or email, you agree to be bound by these terms.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              All bookings are subject to vehicle availability and driver scheduling confirmation by FourFold Worldwide. A booking is formally confirmed once journey details, pickup time, and pricing have been agreed upon with our dispatch team.
            </p>
          </section>

          {/* 2. Pricing & Currency */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              2. Transparent Fixed Pricing (GBP £)
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              All fares quoted by FourFold Worldwide are priced exclusively in <strong>Pound Sterling (GBP £)</strong>. Our quoted rates are fixed and include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start space-x-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>All standard tolls, London Congestion Charge, and ULEZ compliance fees.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start space-x-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Airport terminal drop-off / short-stay arrival car park fees.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start space-x-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct meet-and-greet in the arrivals hall or hotel lobby with luggage assistance.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start space-x-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct door-to-terminal transport to your specific Southampton berth.</span>
              </div>
            </div>
          </section>

          {/* 3. Waiting Times & Flight Tracking */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              3. Flight Tracking &amp; Waiting Times
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              For all airport collections (London Heathrow, London Gatwick, London City, Stansted, Luton), our operations team monitors incoming commercial flights in real time. We adjust your chauffeur’s arrival accordingly for delays or early landings.
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2 leading-relaxed">
              <li><strong>Airport Arrivals:</strong> We provide <strong>60 minutes of complimentary waiting time</strong> commencing from the moment the aircraft touches down. Additional waiting time, if requested, is charged at standard hourly chauffeur rates.</li>
              <li><strong>Hotels &amp; Residential Pickups:</strong> We provide <strong>15 minutes of complimentary waiting time</strong> from the scheduled booking time.</li>
              <li><strong>Southampton Port Disembarkation:</strong> Your driver will coordinate pickup times based on your cruise line&apos;s allocated luggage tag disembarkation slot.</li>
            </ul>
          </section>

          {/* 4. Luggage & Vehicle Capacity */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              4. Passenger &amp; Luggage Capacity
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              For your comfort and to adhere to UK vehicle safety regulations, each vehicle type has strict passenger and luggage limits:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-2 leading-relaxed">
              <li><strong>Mercedes-Benz V-Class:</strong> Up to 7 passengers and up to 7-8 large suitcases plus cabin bags.</li>
              <li><strong>Luxury SUV (e.g. Range Rover / Mercedes GLS):</strong> Up to 4 passengers and up to 4 large suitcases.</li>
              <li><strong>Executive SUV (e.g. Mercedes GLE / Audi Q7):</strong> Up to 4 passengers and up to 3-4 large suitcases.</li>
            </ul>
            <p className="text-xs text-slate-600 leading-relaxed">
              Luggage must not obstruct the driver’s rear-view vision or compromise vehicle safety. If you are traveling with excess luggage, please inform us in advance so we can arrange suitable vehicle capacity.
            </p>
          </section>

          {/* 5. Cancellations & Amendments */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              5. Cancellations &amp; Rescheduling
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We understand travel plans can change due to airline or cruise line scheduling. You may cancel or amend your booking by contacting dispatch via WhatsApp or email:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-2 leading-relaxed">
              <li><strong>More than 24 hours before pickup:</strong> Full refund or free rescheduling to your new date/time.</li>
              <li><strong>Between 12 and 24 hours before pickup:</strong> Rescheduling available free of charge subject to vehicle availability.</li>
              <li><strong>Under 12 hours or No-Show:</strong> Where the chauffeur has already been dispatched, the full booking charge applies.</li>
            </ul>
          </section>

          {/* 6. Conduct & Vehicle Care */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              6. Passenger Conduct &amp; Safety
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              All vehicles operate a strict <strong>no-smoking and no-vaping policy</strong>. Seatbelts must be worn at all times in compliance with UK law. FourFold Worldwide reserves the right to refuse transport to any passenger displaying abusive, dangerous, or excessively intoxicated behavior. A valeting fee may be charged if a vehicle requires professional cleaning due to passenger negligence.
            </p>
          </section>

          {/* 7. Delays & Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              7. Delays &amp; Force Majeure
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              While we always plan routes with ample buffer time and monitor live motorway traffic (M3, M25, M27), FourFold Worldwide shall not be held liable for delays caused by circumstances beyond our reasonable control, including extreme weather events, motorway closures, major road accidents, port security lock-downs, or civil disruptions.
            </p>
          </section>

          {/* 8. Data Protection & GDPR */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              8. Privacy &amp; GDPR Compliance
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We process all client information in strict accordance with the UK General Data Protection Regulation (UK GDPR). We never sell your personal contact details or travel data. For full details on how your information is handled and how to exercise your statutory privacy rights, please read our{' '}
              {onOpenPrivacy ? (
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-amber-800 underline font-semibold hover:text-amber-900 cursor-pointer"
                >
                  Privacy Policy &amp; GDPR Notice
                </button>
              ) : (
                <a href="#privacy" className="text-amber-800 underline font-semibold">
                  Privacy Policy &amp; GDPR Notice
                </a>
              )}.
            </p>
          </section>

          {/* 9. Governing Law */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-600 mr-2" />
              9. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              These Terms and Conditions and any dispute or claim arising out of or in connection with our services shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>.
            </p>
          </section>

          {/* Contact details footer */}
          <section className="border-t border-slate-200 pt-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900">
              Questions Regarding Our Terms?
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
                <Shield className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                Licensed Chauffeur Operator
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
