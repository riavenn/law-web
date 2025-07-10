'use client';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const ServiceCard = ({ title, description, imageUrl, imageAlt }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      {/* Resim - Tüm kartı kaplıyor */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />

        {/* Overlay - İçerik burada */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Aile Hukuku",
      description: "Boşanma, velayet, nafaka, mal paylaşımı ve aile içi hukuki sorunlarınızda uzman desteği.",
      imageUrl: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Aile hukuku danışmanlığı"
    },
    {
      title: "İş Hukuku",
      description: "İşçi hakları, iş sözleşmeleri, mobbing, kıdem tazminatı ve işveren-işçi uyuşmazlıkları.",
      imageUrl: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "İş hukuku danışmanlığı"
    },
    {
      title: "Gayrimenkul Hukuku",
      description: "Tapu işlemleri, kira uyuşmazlıkları, emlak alım-satımı ve gayrimenkul yatırım danışmanlığı.",
      imageUrl: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Gayrimenkul hukuku danışmanlığı"
    },
    {
      title: "Ceza Hukuku",
      description: "Suç duyuruları, savunma hazırlığı, ceza davalarında temsil ve hukuki müdafaa hizmetleri.",
      imageUrl: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Ceza hukuku danışmanlığı"
    },
    {
      title: "Ticaret Hukuku",
      description: "Şirket kuruluşu, ticari sözleşmeler, ortaklık uyuşmazlıkları ve ticari dava takipleri.",
      imageUrl: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Ticaret hukuku danışmanlığı"
    },
    {
      title: "Miras Hukuku",
      description: "Miras paylaşımı, vasiyet işlemleri, mirastan feragat ve miras uyuşmazlıklarının çözümü.",
      imageUrl: "https://images.pexels.com/photos/5668854/pexels-photo-5668854.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Miras hukuku danışmanlığı"
    }
  ];

  return (
    <section id="hizmetler" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Hizmetlerimiz
          </h2>
          <h3 className="text-xl font-semibold text-slate-600 mb-6">
            Hukukun Her Alanında Uzman Çözümler
          </h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Deneyimli avukat kadromuz ile hukukun farklı alanlarında kapsamlı hizmet sunuyoruz.
            Her müvekkilimizin ihtiyaçlarına özel çözümler üreterek, hukuki süreçlerde
            güvenilir bir partner olarak yanınızdayız.
          </p>
        </div>

        {/* Hizmetler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                imageAlt={service.imageAlt}
              />
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="text-center mt-8">
          <button
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold shadow-lg border border-slate-700 cursor-pointer"
            tabIndex={0}
            aria-label="Tüm hizmetlerimizi görüntüle"
          >
            Tüm Hizmetlerimiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;