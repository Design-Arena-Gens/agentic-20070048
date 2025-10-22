'use client';

import { useEffect, useRef, useState } from 'react';
import { Partner } from '@/lib/db';

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const [partners, setPartners] = useState<Partner[]>([]);
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
    fetch('/api/content/partners')
      .then(res => res.json())
      .then(data => setPartners(data))
      .catch(err => console.error('Failed to load partners:', err));
  }, []);

  return (
    <section ref={sectionRef} id="partners" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by These Brands
          </h2>
          <p className="text-lg text-gray-600">Join our network of successful partners</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`flex flex-col items-center transition-all duration-500 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-2 grayscale hover:grayscale-0 transition-all duration-300">
                {partner.logo}
              </div>
              <div className="text-sm font-semibold text-gray-700">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
