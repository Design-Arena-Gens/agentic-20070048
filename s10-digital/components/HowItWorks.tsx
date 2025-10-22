'use client';

import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
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

  const steps = [
    {
      number: '01',
      title: 'Share Your Vision',
      description: 'Tell us about your goals, challenges, and what success looks like for you. We listen carefully to understand your needs.',
      icon: '💭'
    },
    {
      number: '02',
      title: 'We Craft the Solution',
      description: 'Our team combines creativity and AI technology to design a customized solution that exceeds your expectations.',
      icon: '🛠️'
    },
    {
      number: '03',
      title: 'Launch & Grow',
      description: 'We deliver your project on time and continue supporting you as your business grows and evolves.',
      icon: '🚀'
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Getting Started Is Simple
          </h2>
          <p className="text-xl text-gray-600">Three easy steps to transform your digital presence</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-2 text-center">STEP {step.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
