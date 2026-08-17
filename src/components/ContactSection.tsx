import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Southampton Cruise Port VIP Transfer Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'fourfold-booking',
          'bot-field': '',
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          specialRequests: `Subject: ${formData.subject}\nMessage: ${formData.message}`,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello FourFold Worldwide Chauffeur Dispatch, I have an inquiry regarding a London to Southampton Cruise VIP transfer.'
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0A0B0E] relative border-b border-[#23262D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#14161C] border border-[#23262D] text-[#C5A368] text-[10px] font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>VIP Chauffeur Dispatch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#E2E4E9] tracking-tight">
                Contact <span className="font-serif italic text-[#C5A368]">FourFold Worldwide</span>
              </h2>
              <p className="text-[#8A8F98] text-xs leading-relaxed">
                Whether you need a bespoke private transfer, multi-vehicle cruise party coordination, or private aviation tarmac pickup at Farnborough / Biggin Hill, our operations team is available 24/7.
              </p>
            </div>

            <div className="space-y-3">
              {/* Telephone */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="p-3.5 rounded-2xl bg-[#14161C] border border-[#23262D] hover:border-[#C5A368]/60 flex items-center space-x-3.5 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#1C1F26] text-[#C5A368] border border-[#23262D]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8A8F98] uppercase font-bold tracking-wider block">24/7 VIP Phone Line</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#C5A368] transition-colors">
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-[#14161C] border border-[#23262D] hover:border-emerald-500/60 flex items-center space-x-3.5 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#1C1F26] text-emerald-400 border border-[#23262D]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8A8F98] uppercase font-bold tracking-wider block">Instant WhatsApp Concierge</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +44 7400 123456
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-3.5 rounded-2xl bg-[#14161C] border border-[#23262D] hover:border-[#C5A368]/60 flex items-center space-x-3.5 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#1C1F26] text-[#C5A368] border border-[#23262D]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8A8F98] uppercase font-bold tracking-wider block">Reservations &amp; Inquiries</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#C5A368] transition-colors">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </a>

              {/* Office Locations */}
              <div className="p-3.5 rounded-2xl bg-[#14161C] border border-[#23262D] flex items-center space-x-3.5">
                <div className="p-2.5 rounded-xl bg-[#1C1F26] text-[#C5A368] border border-[#23262D]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8A8F98] uppercase font-bold tracking-wider block">Operational Hubs</span>
                  <span className="text-xs font-semibold text-[#E2E4E9] block">
                    Mayfair, Central London &amp; Western Docks, Southampton Port
                  </span>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="p-3.5 rounded-xl bg-[#14161C] border border-[#23262D] text-xs text-[#8A8F98] flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-[#E2E4E9]">Instant Dispatch:</strong> All booking and contact requests are processed with 256-bit SSL encryption and instant notification to our on-duty operations team.
              </span>
            </div>
          </div>

          {/* Right 7 Cols: Contact Form */}
          <div className="lg:col-span-7 bg-[#14161C] border border-[#23262D] rounded-2xl p-6 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched</h3>
                <p className="text-[#8A8F98] text-xs max-w-md mx-auto">
                  Thank you for contacting FourFold Worldwide. Our VIP Chauffeur coordinator will reply within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#1C1F26] hover:bg-[#23262D] border border-[#23262D] text-[#E2E4E9] text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                name="fourfold-booking"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <h3 className="text-base font-bold text-white border-b border-[#23262D] pb-3">
                  Send a Direct Transfer Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lady Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1F26] border border-[#23262D] text-xs text-white placeholder-[#8A8F98]/50 focus:outline-none focus:border-[#C5A368]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1F26] border border-[#23262D] text-xs text-white placeholder-[#8A8F98]/50 focus:outline-none focus:border-[#C5A368]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-1">Telephone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7... or +1..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1F26] border border-[#23262D] text-xs text-white placeholder-[#8A8F98]/50 focus:outline-none focus:border-[#C5A368]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1F26] border border-[#23262D] text-xs text-white focus:outline-none focus:border-[#C5A368]"
                    >
                      <option value="Southampton Cruise Port VIP Transfer">Southampton Cruise Port VIP Transfer</option>
                      <option value="Mercedes V-Class Group Booking">Mercedes V-Class Group Booking</option>
                      <option value="Stonehenge or Windsor Castle Layover">Stonehenge or Windsor Castle Layover</option>
                      <option value="Private Jet Airport Pickup (Farnborough/LHR)">Private Jet Airport Pickup</option>
                      <option value="Other Custom Chauffeur Inquiry">Other Custom Chauffeur Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#8A8F98] mb-1">Your Message / Itinerary Details *</label>
                  <textarea
                    name="specialRequests"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide your cruise line, disembarkation date, luggage count, or any special requests..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1F26] border border-[#23262D] text-xs text-white placeholder-[#8A8F98]/50 focus:outline-none focus:border-[#C5A368]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#C5A368] hover:bg-[#b59458] text-black font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Transfer Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
