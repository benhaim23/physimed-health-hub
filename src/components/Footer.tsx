
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Brief Description */}
          <div className="space-y-3">
            <img 
              src="/lovable-uploads/fef01cf2-8eeb-4a0e-9684-c6d3f203c692.png" 
              alt="Physimed Logo" 
              className="h-14 w-auto" 
            />
            <p className="text-gray-600 max-w-xs">
              Premium healthcare services for professionals.
            </p>
            <div className="flex space-x-4 pt-1">
              <a href="https://www.facebook.com" className="text-gray-500 hover:text-physimed transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.twitter.com" className="text-gray-500 hover:text-physimed transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com" className="text-gray-500 hover:text-physimed transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-500 hover:text-physimed transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-physimed transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-physimed transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-physimed transition-colors">Pricing Plans</Link></li>
              <li><Link to="/booking" className="text-gray-600 hover:text-physimed transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-physimed transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-physimed transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone size={16} className="text-physimed mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">514-747-8192</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="text-physimed mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">info@physimed.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-physimed mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">6363 Trans-Canada Highway, Suite 400, St-Laurent, QC H4T 1Z9</span>
              </li>
              <li className="flex items-start">
                <Clock size={16} className="text-physimed mt-1 mr-2 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>Mon-Fri: 7am-9pm</p>
                  <p>Sat-Sun: 8am-5pm</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Newsletter</h3>
            <p className="text-gray-600 mb-3 text-sm">Stay updated with our latest health services.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-physimed focus:border-physimed text-sm"
              />
              <button 
                type="submit" 
                className="w-full px-3 py-2 bg-physimed text-white rounded-md hover:bg-physimed-700 transition duration-300 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 text-xs hover:text-physimed">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 text-xs hover:text-physimed">Terms of Service</Link>
            <Link to="/faq" className="text-gray-500 text-xs hover:text-physimed">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
