'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">S10 Digital Solutions</h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses with AI-powered digital solutions. Based in Sri Lanka, serving clients worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400 transition-colors">
                📷
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors">
                💼
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-400 transition-colors">
                💬
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 S10 Digital Solutions. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover:scale-110"
            aria-label="Scroll to top"
          >
            ⬆️
          </button>
        </div>
      </div>
    </footer>
  );
}
