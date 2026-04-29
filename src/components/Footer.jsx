import { FaYoutube, FaFacebook, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t-[8px] border-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-200">Product</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-200">Company</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-gray-200">Resources</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 DigiTools. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaYoutube className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaFacebook className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaXTwitter className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
