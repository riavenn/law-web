'use client';

const About = () => {
  return (
    <section id="hakkimizda" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Resimler */}
          <div className="relative">
            {/* Büyük Resim */}
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg"
                alt="Hukuk bürosu danışmanlık"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Küçük Resim - Sağ üstte konumlandırılmış */}
            <div className="absolute -top-8 -right-8 z-20">
              <img
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Hukuk kitapları"
                className="w-32 h-20 sm:w-48 sm:h-32 object-cover rounded-lg shadow-xl border-4 border-white"
              />
            </div>

            {/* Dekoratif Element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-slate-200/50 rounded-full z-0"></div>
          </div>

          {/* Sağ Taraf - İçerik */}
          <div className="space-y-6">
            {/* Başlık */}
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
              Hakkımızda
            </h2>

            {/* Alt Başlık */}
            <h3 className="text-xl font-semibold text-slate-600">
              25 Yıllık Deneyim ile Hukuki Çözümler
            </h3>

            {/* Açıklama */}
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Adalet Hukuk Bürosu olarak, 25 yılı aşkın deneyimimizle müvekkillerimize
                en kaliteli hukuki hizmetleri sunmaktayız. Uzman kadromuz ve modern yaklaşımımızla,
                her türlü hukuki sorununuzda yanınızdayız.
              </p>

              <p>
                Müvekkil memnuniyetini ön planda tutarak, şeffaf, güvenilir ve etkili
                çözümler üretiyoruz. Hukuki süreçlerde size rehberlik ederken, haklarınızı
                korumak için elimizden gelen her şeyi yapıyoruz.
              </p>
            </div>

            {/* Özellikler */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                <span className="text-slate-700 font-medium">25+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                <span className="text-slate-700 font-medium">Uzman Kadro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                <span className="text-slate-700 font-medium">7/24 Destek</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                <span className="text-slate-700 font-medium">Güvenilir Hizmet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;