import React from 'react';
import { Star, ChevronRight, Heart, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ReviewPageProps {
  onBackToHome?: () => void;
}

// Authentic Google Multicolor "G" Logo
const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Google logo">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// Authentic Trustpilot Green Star Logo
const TrustpilotLogo: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Trustpilot logo">
    <rect width="32" height="32" rx="7" fill="#00B67A" />
    <path
      d="M16 5.5l3.2 7.9h8.3l-6.7 4.9 2.6 7.9L16 21.3l-7.4 4.9 2.6-7.9-6.7-4.9h8.3L16 5.5z"
      fill="#FFFFFF"
    />
    <path
      d="M20.8 24.2l2.6 7.9-7.4-4.9 4.8-3z"
      fill="#005128"
    />
  </svg>
);

// Authentic TripAdvisor Owl Logo
const TripAdvisorLogo: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="TripAdvisor logo">
    <rect width="32" height="32" rx="7" fill="#00AF87" />
    {/* Eyebrows */}
    <path
      d="M7 12.5c2.2-2.5 6.2-2.8 9-.2 2.8-2.6 6.8-2.3 9 .2-.6.7-1.4 1.1-2.2 1.3-1.6-1.5-4.2-1.7-6-.3-.3.2-.6.2-.8 0-1.8-1.4-4.4-1.2-6 .3-.8-.2-1.6-.6-2.2-1.3z"
      fill="#FFFFFF"
    />
    {/* Left Eye */}
    <circle cx="11.5" cy="17.5" r="4.2" fill="#FFFFFF" />
    <circle cx="11.5" cy="17.5" r="2.5" fill="#D80027" />
    <circle cx="11.5" cy="17.5" r="1.2" fill="#000000" />
    {/* Right Eye */}
    <circle cx="20.5" cy="17.5" r="4.2" fill="#FFFFFF" />
    <circle cx="20.5" cy="17.5" r="2.5" fill="#00AF87" />
    <circle cx="20.5" cy="17.5" r="1.2" fill="#000000" />
    {/* Beak */}
    <polygon points="14.8,18 17.2,18 16,21.5" fill="#FFFFFF" />
  </svg>
);

export const ReviewPage: React.FC<ReviewPageProps> = ({ onBackToHome }) => {
  const reviews = [
    {
      id: 'google',
      name: 'Google Reviews',
      tagline: 'Fast review via your Google / Gmail account',
      url: 'https://maps.app.goo.gl/17MzZtjGsmmbM8kR7',
      hoverBorder: 'hover:border-blue-500',
      logo: GoogleLogo,
    },
    {
      id: 'trustpilot',
      name: 'Trustpilot',
      tagline: 'Review FourFold Worldwide on Trustpilot',
      url: 'https://uk.trustpilot.com/evaluate/fourfoldworldwide.com',
      hoverBorder: 'hover:border-emerald-600',
      logo: TrustpilotLogo,
    },
    {
      id: 'tripadvisor',
      name: 'TripAdvisor',
      tagline: 'Review your London & cruise chauffeur transfer',
      url: 'https://www.tripadvisor.com/UserReviewEdit-g186338-d34651218-FourFold_Worldwide-London_England.html',
      hoverBorder: 'hover:border-teal-600',
      logo: TripAdvisorLogo,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col justify-between py-6 px-4 sm:px-6">
      <div className="max-w-md w-full mx-auto my-auto space-y-6">
        {/* Top Branding Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center space-y-3.5">
          {/* Company Monogram Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 text-white shadow-md mx-auto">
            <span className="text-xl font-extrabold tracking-wider">4F</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              FourFold Worldwide
            </h1>
            <p className="text-xs font-medium text-slate-500">
              London &amp; Southampton Private Chauffeur Transfers
            </p>
          </div>

          {/* 5-Star Visual Prompt */}
          <div className="pt-1 flex flex-col items-center justify-center space-y-1.5">
            <div className="flex items-center justify-center space-x-1.5 text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-800">
              How was your journey today?
            </p>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Please take a moment to rate us on your preferred platform below.
            </p>
          </div>
        </div>

        {/* The 3 Review Action Options */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
            Tap to leave a review:
          </p>

          {reviews.map((platform) => {
            const LogoComponent = platform.logo;
            return (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full min-h-[74px] p-4 rounded-xl bg-white border-2 border-slate-200 ${platform.hoverBorder} shadow-xs hover:shadow-md transition-all flex items-center justify-between group active:scale-[0.99]`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-100 shadow-xs shrink-0">
                    <LogoComponent className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <span className="text-base font-bold text-slate-900 group-hover:text-slate-950 block">
                      {platform.name}
                    </span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {platform.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-slate-400 group-hover:text-slate-700 pl-2">
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Small Discreet Helper / Return to Website */}
        <div className="text-center pt-2 space-y-2">
          {onBackToHome && (
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer py-1.5 px-3 rounded-lg hover:bg-slate-200"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              <span>Back to Main Website</span>
            </button>
          )}

          <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Thank you for choosing FourFold Worldwide</span>
          </div>

          <p className="text-[10px] text-slate-400">
            Assistance: {COMPANY_INFO.phone}
          </p>
        </div>
      </div>
    </main>
  );
};
