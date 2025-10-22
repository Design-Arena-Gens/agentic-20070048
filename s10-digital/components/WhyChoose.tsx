'use client';

import { useEffect, useRef, useState } from 'react';

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: '⚡',
      title: 'AI-Driven Efficiency',
      description: 'Leverage cutting-edge AI technology to automate tasks, optimize workflows, and achieve results faster than traditional methods.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🎯',
      title: 'Customized for You',
      description: 'No cookie-cutter solutions. Every project is tailored to your unique needs, goals, and brand identity.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '🤝',
      title: 'Reliable & Transparent',
      description: 'Clear communication, honest timelines, and dedicated support. We\'re here for you every step of the way.',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section ref={sectionRef} id="why-choose" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Businesses and Professionals Trust S10
          </h2>
          <p className="text-xl text-gray-300">The difference that sets us apart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity rounded-2xl blur-xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                <div className={`text-6xl mb-4 inline-block bg-gradient-to-r ${benefit.gradient} text-transparent bg-clip-text`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
