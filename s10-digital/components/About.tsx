'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Modern Digital Partner for Modern Challenges
          </h2>

          <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-8">
            <p>
              In today's fast-paced digital landscape, businesses need more than just services—they need a strategic partner who understands both technology and creativity. That's where S10 Digital Solutions comes in.
            </p>
            <p>
              Founded on the belief that exceptional digital solutions should be accessible to everyone, we blend cutting-edge AI technology with human creativity to deliver results that matter. From startups to established businesses, we help our clients navigate the digital world with confidence.
            </p>
            <p>
              Our approach is simple: listen, understand, and deliver. We don't believe in one-size-fits-all solutions. Instead, we craft customized strategies that align with your unique goals and challenges. Whether it's building your brand identity, automating workflows, or creating a stunning online presence, we're here to make it happen.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border-l-4 border-blue-500">
            <p className="text-2xl font-semibold text-gray-800 italic">
              "You don't need a big team to achieve big results. You just need smart solutions."
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
