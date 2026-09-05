import React from 'react';

interface NavbarProps {
  onBookNowClick: () => void;
  currentView?: 'home' | 'terms' | 'privacy';
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onBookNowClick,
  currentView = 'home',
  onNavigateHome
}) => {
  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xs border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={handleBrandClick}
          className="flex items-center space-x-2.5 group cursor-pointer text-left"
        >
          <div className="w-7 h-7 bg-slate-900 text-white flex items-center justify-center rounded font-bold text-xs tracking-wider">
            4F
          </div>
          <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            FourFold Worldwide
          </span>
        </button>

        {/* Minimal Navigation & Action */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {currentView !== 'home' ? (
            <button
              type="button"
              onClick={onNavigateHome}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Home
            </button>
          ) : (
            <>
              <a
                href="#fleet"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
              >
                Vehicles
              </a>

              <a
                href="#contact"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
              >
                Contact
              </a>
            </>
          )}

          <button
            type="button"
            onClick={onBookNowClick}
            className="px-3.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};
