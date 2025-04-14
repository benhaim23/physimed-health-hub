
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9517cafd-887f-421a-85e8-41ba5866a617.png" 
                alt="Physimed Logo" 
                className="h-12 mr-2" 
              />
              <h3 className="text-physimed-800 font-serif text-xl font-bold">Physimed</h3>
            </div>
            <p className="text-gray-600 max-w-xs">Premium corporate medical plans and comprehensive healthcare services, personalized for professionals.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-gray-500 hover:text-physimed">
                <Facebook size={20} />
              </a>
              <a href="https://www.twitter.com" className="text-gray-500 hover:text-physimed">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com" className="text-gray-500 hover:text-physimed">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-500 hover:text-physimed">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-physimed">Home</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-physimed">Our Services</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-physimed">Pricing Plans</Link></li>
              <li><Link to="/booking" className="text-gray-600 hover:text-physimed">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-physimed">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-physimed">About Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-physimed mt-1 mr-2" />
                <span className="text-gray-600">514-747-8192</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-physimed mt-1 mr-2" />
                <span className="text-gray-600">info@physimed.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-physimed mt-1 mr-2" />
                <span className="text-gray-600">6363 Trans-Canada Highway, Suite 400, St-Laurent, QC H4T 1Z9</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-physimed mt-1 mr-2" />
                <div className="text-gray-600">
                  <p>Monday-Friday: 7am-9pm</p>
                  <p>Saturday-Sunday: 8am-5pm</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with our latest health services and corporate plans.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-physimed focus:border-transparent"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-physimed text-white rounded-md hover:bg-physimed-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Physimed. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-physimed">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-physimed">Terms of Service</Link>
            <Link to="/faq" className="text-gray-500 text-sm hover:text-physimed">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
