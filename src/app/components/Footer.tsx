'use client';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@hukukburosu.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+902121234567';
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <footer id="footer" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ana Footer İçeriği */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sol Kısım - Logo ve Büro Bilgileri */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Adalet Hukuk Bürosu</h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              25 yıllık deneyimimizle, bireysel ve kurumsal müvekkillerimize
              en kaliteli hukuki hizmetleri sunuyoruz. Adalet ve güven bizim önceliğimizdir.
            </p>
          </div>

          {/* Orta Kısım - İletişim Bilgileri */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">İletişim Bilgileri</h4>

            {/* Telefon */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <button
                onClick={handlePhoneClick}
                onKeyDown={(e) => handleKeyDown(e, handlePhoneClick)}
                className="text-slate-300 hover:text-slate-100 cursor-pointer"
                tabIndex={0}
                aria-label="Telefon numarasını ara"
              >
                +90 (212) 123 45 67
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <button
                onClick={handleEmailClick}
                onKeyDown={(e) => handleKeyDown(e, handleEmailClick)}
                className="text-slate-300 hover:text-slate-100 cursor-pointer"
                tabIndex={0}
                aria-label="Email gönder"
              >
                info@hukukburosu.com
              </button>
            </div>

            {/* Adres */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="text-slate-300">
                <p>Levent Mahallesi, Büyükdere Caddesi</p>
                <p>No: 123, Kat: 5, Şişli/İstanbul</p>
              </div>
            </div>
          </div>

          {/* Sağ Kısım - Sosyal Medya */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <button
                onClick={() => handleSocialClick('https://linkedin.com')}
                onKeyDown={(e) => handleKeyDown(e, () => handleSocialClick('https://linkedin.com'))}
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer"
                tabIndex={0}
                aria-label="LinkedIn'de takip edin"

              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>

              {/* Facebook */}
              <button
                onClick={() => handleSocialClick('https://facebook.com')}
                onKeyDown={(e) => handleKeyDown(e, () => handleSocialClick('https://facebook.com'))}
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer"
                tabIndex={0}
                aria-label="Facebook'ta takip edin"

              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Twitter */}
              <button
                onClick={() => handleSocialClick('https://twitter.com')}
                onKeyDown={(e) => handleKeyDown(e, () => handleSocialClick('https://twitter.com'))}
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer"
                tabIndex={0}
                aria-label="Twitter'da takip edin"

              >
                <svg className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>

              {/* Instagram */}
              <button
                onClick={() => handleSocialClick('https://instagram.com')}
                onKeyDown={(e) => handleKeyDown(e, () => handleSocialClick('https://instagram.com'))}
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center cursor-pointer"
                tabIndex={0}
                aria-label="Instagram'da takip edin"

              >
                <svg className="w-5 h-5 text-white transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright */}
        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Adalet Hukuk Bürosu. Tüm hakları saklıdır.</p>
            <p className="mt-2 text-sm">
              Bu web sitesindeki tüm içerik telif hakkı ile korunmaktadır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;