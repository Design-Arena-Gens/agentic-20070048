'use client';

import { useEffect, useRef, useState } from 'react';
import { Testimonial } from '@/lib/db';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
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
    fetch('/api/content/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(err => console.error('Failed to load testimonials:', err));
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Early Clients Say
          </h2>
          <p className="text-xl text-gray-600">Real results from real people</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4 text-2xl">★★★★★</div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600">
          <p className="text-lg">Join our growing list of satisfied clients worldwide 🌍</p>
        </div>
      </div>
    </section>
  );
}
