'use client';

import { useEffect, useRef, useState } from 'react';
import { PortfolioItem } from '@/lib/db';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [filter, setFilter] = useState<string>('All');
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
    fetch('/api/content/portfolio')
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error('Failed to load portfolio:', err));
  }, []);

  const categories = ['All', ...Array.from(new Set(portfolio.map(item => item.category)))];
  const filteredPortfolio = filter === 'All' ? portfolio : portfolio.filter(item => item.category === filter);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600">See what we've created for our clients</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                {item.image}
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPortfolio.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
