'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleMenuToggle();
    }
  };

  const handleContactClick = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleContactClick();
    }
  };

  return (
    <nav className="backdrop-blur-md bg-slate-900/95 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo ve Şirket Adı */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L3 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-9-5z" />
                <path d="M12 7v10M8 11h8" />
              </svg>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">Adalet Hukuk</h1>
              <p className="text-xs text-white/80">Bürosu</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white/90 hover:text-white font-medium px-2 py-1 rounded"
              tabIndex={0}
              aria-label="Anasayfa"
            >
              Anasayfa
            </a>
            <a
              href="#hakkimizda"
              className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg px-2 py-1 rounded"
              tabIndex={0}
              aria-label="Hakkımızda"
            >
              Hakkımızda
            </a>
            <a
              href="#hizmetler"
              className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg px-2 py-1 rounded"
              tabIndex={0}
              aria-label="Hizmetler"
            >
              Hizmetler
            </a>
            <a
              href="#ekip"
              className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg px-2 py-1 rounded"
              tabIndex={0}
              aria-label="Ekibimiz"
            >
              Ekibimiz
            </a>
          </div>

          {/* İletişim Butonu */}
          <div className="hidden md:block">
            <button
              onClick={handleContactClick}
              onKeyDown={handleContactKeyDown}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-medium shadow-md border border-slate-600 cursor-pointer"
              tabIndex={0}
              aria-label="Hemen İletişime Geç"
            >
              Hemen İletişime Geç
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
              className="text-white/90 hover:text-white focus:outline-none focus:text-white cursor-pointer hover:bg-slate-700/50 p-2 rounded"
              tabIndex={0}
              aria-label="Menüyü aç/kapat"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/90 backdrop-blur-md border-t border-slate-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#anasayfa"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-slate-700/50 rounded-md"
                tabIndex={0}
                aria-label="Anasayfa"
              >
                Anasayfa
              </a>
              <a
                href="#hakkimizda"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md"
                tabIndex={0}
                aria-label="Hakkımızda"
              >
                Hakkımızda
              </a>
              <a
                href="#hizmetler"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md"
                tabIndex={0}
                aria-label="Hizmetler"
              >
                Hizmetler
              </a>
              <a
                href="#ekip"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md"
                tabIndex={0}
                aria-label="Ekibimiz"
              >
                Ekibimiz
              </a>
              <button
                onClick={handleContactClick}
                onKeyDown={handleContactKeyDown}
                className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium border border-slate-600 cursor-pointer"
                tabIndex={0}
                aria-label="Hemen İletişime Geç"
              >
                Hemen İletişime Geç
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;