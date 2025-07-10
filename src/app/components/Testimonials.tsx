'use client';

import { useState, useEffect } from 'react';

interface TestimonialProps {
  name: string;
  comment: string;
  imageUrl: string;
  imageAlt: string;
}

const TestimonialCard = ({ name, comment, imageUrl, imageAlt }: TestimonialProps) => {
  return (
    <div className="group bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-700 h-full">
      <div className="text-center mb-4">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-14 h-14 rounded-full object-cover mx-auto mb-3 border-2 border-slate-600"
        />
        <h3 className="font-semibold text-white mb-1 text-lg">{name}</h3>
      </div>

      <p className="text-white leading-relaxed italic text-sm">
        {comment}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Ahmet Kılıç",
      comment: "Boşanma davamda bana büyük destek oldular. Profesyonel yaklaşımları ve deneyimleri sayesinde süreci en az hasarla atlattık. Teşekkür ederim.",
      imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Ahmet Kılıç"
    },
    {
      name: "Fatma Şahin",
      comment: "İş hukuku konusundaki bilgileri ve deneyimleri gerçekten etkileyici. Haklarımı korumada bana çok yardımcı oldular.",
      imageUrl: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Fatma Şahin"
    },
    {
      name: "Mustafa Özdemir",
      comment: "Gayrimenkul alım-satımımda yaşadığım hukuki sorunları çok hızlı bir şekilde çözdüler. Kesinlikle tavsiye ederim.",
      imageUrl: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Mustafa Özdemir"
    },
    {
      name: "Elif Yıldız",
      comment: "Miras davamda gösterdikleri titizlik ve profesyonellik beni çok etkiledi. Sonuçtan son derece memnunum.",
      imageUrl: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Elif Yıldız"
    },
    {
      name: "Okan Demir",
      comment: "Ticari davamda beklediğimden çok daha iyi bir sonuç aldık. Ekibin deneyimi ve yaklaşımı gerçekten takdire şayan.",
      imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Okan Demir"
    },
    {
      name: "Selin Arslan",
      comment: "Ceza davamda beni temsil ettikleri süreçte her zaman yanımda hissettim. Profesyonel ve güvenilir bir ekip.",
      imageUrl: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400",
      imageAlt: "Selin Arslan"
    }
  ];

  // Group testimonials into slides - 1 for mobile, 3 for desktop
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const groupedTestimonials = [];
  const itemsPerSlide = isMobile ? 1 : 3;
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    groupedTestimonials.push(testimonials.slice(i, i + itemsPerSlide));
  }

  const handlePrevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? groupedTestimonials.length - 1 : prev - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % groupedTestimonials.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleManualNavigation = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Müvekkil Yorumları
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Yıllar içinde hizmet verdiğimiz müvekkillerimizin deneyimlerini ve
            memnuniyetlerini sizlerle paylaşıyoruz.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Navigation Arrows - Outside the cards */}
          <button
            onClick={() => handleManualNavigation(handlePrevSlide)}
            onKeyDown={(e) => handleKeyDown(e, () => handleManualNavigation(handlePrevSlide))}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-900/95 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg z-10 cursor-pointer"
            tabIndex={0}
            aria-label="Önceki yorum"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => handleManualNavigation(handleNextSlide)}
            onKeyDown={(e) => handleKeyDown(e, () => handleManualNavigation(handleNextSlide))}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-900/95 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg z-10 cursor-pointer"
            tabIndex={0}
            aria-label="Sonraki yorum"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden rounded-xl mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {groupedTestimonials.map((group, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
                    {group.map((testimonial, cardIndex) => (
                      <div key={cardIndex}>
                        <TestimonialCard
                          name={testimonial.name}
                          comment={testimonial.comment}
                          imageUrl={testimonial.imageUrl}
                          imageAlt={testimonial.imageAlt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {groupedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => setCurrentSlide(index))}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide 
                    ? 'bg-slate-700 shadow-lg' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                tabIndex={0}
                aria-label={`${index + 1}. slide'ı göster`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;