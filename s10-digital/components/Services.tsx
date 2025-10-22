'use client';

import { useEffect, useRef, useState } from 'react';
import { Service } from '@/lib/db';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
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

  useEffect(() => {
    fetch('/api/content/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Failed to load services:', err));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Stand Out in the Digital World
          </h2>
          <p className="text-xl text-gray-600">Comprehensive solutions tailored to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 italic border-l-4 border-blue-500 pl-4">
                {service.justification}
              </p>
              <ul className="space-y-2">
                {service.subServices.map((subService, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="mr-2 text-green-500">✓</span>
                    {subService}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
