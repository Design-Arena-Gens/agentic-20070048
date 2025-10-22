'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message);
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('An error occurred. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setStatusMessage('');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Smart Together
          </h2>
          <p className="text-xl text-gray-300">Get in touch and let's start your digital transformation</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-all"
                >
                  <option value="" className="text-gray-900">Select a service</option>
                  <option value="design" className="text-gray-900">Design & Branding</option>
                  <option value="marketing" className="text-gray-900">Digital Marketing</option>
                  <option value="resume" className="text-gray-900">Resume Building</option>
                  <option value="ai" className="text-gray-900">AI-Powered Tools</option>
                  <option value="web" className="text-gray-900">Web Development</option>
                  <option value="other" className="text-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {statusMessage && (
                <div className={`p-4 rounded-lg text-center ${status === 'success' ? 'bg-green-500/20 border border-green-500' : 'bg-red-500/20 border border-red-500'}`}>
                  {statusMessage}
                </div>
              )}
            </form>
          </div>

          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Other Ways to Connect</h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span className="text-3xl mr-4">💬</span>
                  <div>
                    <div className="font-semibold">Chat on WhatsApp</div>
                    <div className="text-sm text-gray-300">Quick responses</div>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <span className="text-3xl mr-4">📧</span>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-gray-300">hello@s10digitalsolutions.com</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <span className="text-3xl mr-4">🌍</span>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-sm text-gray-300">Sri Lanka, serving clients worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <h4 className="font-bold text-lg mb-3">Why Choose S10?</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Fast response times
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Transparent pricing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Quality guaranteed
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Ongoing support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
