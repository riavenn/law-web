'use client';

const Header = () => {
  const handleServicesClick = () => {
    const servicesSection = document.getElementById('hizmetler');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleServicesClick();
    }
  };

  return (
    <header className="relative min-h-screen flex items-center">
      {/* İçerik */}
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Üst Başlık */}
        <div className="mb-6">
          <span className="inline-block bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-md">
            Profesyonel Hukuki Danışmanlık
          </span>
        </div>

        {/* Ana Başlık */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="inline-block">Adalet ve Güven</span>
          <span className="block text-slate-200 mt-2">
            Bizim Önceliğimiz
          </span>
        </h1>

        {/* Slogan */}
        <p className="text-xl sm:text-2xl text-slate-100 mb-8 font-medium">
          Hukukun Gücüyle, Haklarınızın Yanında
        </p>

        {/* Açıklama */}
        <p className="text-lg text-slate-50 mb-12 max-w-3xl leading-relaxed">
          25 yıllık deneyimimizle, bireysel ve kurumsal müvekkillerimize
          en kaliteli hukuki hizmetleri sunuyoruz. Uzman kadromuz ve
          güvenilir yaklaşımımızla haklarınızı koruyoruz.
        </p>

        {/* Hizmetler Butonu */}
        <div className="flex justify-start">
          <button
            onClick={handleServicesClick}
            onKeyDown={handleKeyDown}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-400/20 border border-slate-700 cursor-pointer"
            tabIndex={0}
            aria-label="Hizmetlerimizi görüntüle">
            Hizmetlerimiz
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;