'use client';

import { useEffect, useState, useRef } from 'react';

interface StatisticItemProps {
  number: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
}

const StatisticItem = ({ number, label, suffix = '', icon }: StatisticItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 saniye
      const steps = 60;
      const increment = number / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div 
      ref={elementRef}
      className="text-center p-8 bg-white rounded-lg shadow-lg border border-slate-100"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div className="text-4xl font-bold text-slate-800 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      
      <div className="text-slate-600 font-medium">
        {label}
      </div>
    </div>
  );
};

const Statistics = () => {
  const statistics = [
    {
      number: 1250,
      label: "Memnun Müşteri",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L7.5 17.5C7.09 17.66 6.84 18.08 6.84 18.54V21H8.16V19.39L10.5 18.39L13 20.93L15.5 18.39L17.84 19.39V21H19.16V18.54C19.16 18.08 18.91 17.66 18.5 17.5L15 16V11C16.1 11 17 10.1 17 9Z"/>
        </svg>
      )
    },
    {
      number: 850,
      label: "Çözülen Dava",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H5V8H6.33L7 19C7.1 20.1 8 21 9.1 21H14.9C16 21 16.9 20.1 17 19L17.67 8H19V6H16ZM10 4H14V6H10V4ZM9.1 8H14.9L14.2 19H9.8L9.1 8Z"/>
          <path d="M12 10V17M10 12V15M14 12V15"/>
        </svg>
      )
    },
    {
      number: 45,
      label: "Kazanılan Ödül",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 16L3 5L8.5 12L12 4L15.5 12L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19S5.4 18 6 18H18C18.6 18 19 18.4 19 19Z"/>
        </svg>
      )
    },
    {
      number: 25,
      label: "Yıllık Deneyim",
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L17 14L18 22L12 19L6 22L7 14L2 9L10.91 8.26L12 2Z"/>
          <path d="M12 6V18M8 10L16 10"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Rakamlarla Başarımız
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Yıllar içinde elde ettiğimiz başarılar ve müvekkillerimizin güvenini kazanmamızın kanıtları
          </p>
        </div>
        
        {/* İstatistikler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index}>
              <StatisticItem
                number={stat.number}
                label={stat.label}
                suffix={stat.suffix}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;