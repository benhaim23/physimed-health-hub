
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/9517cafd-887f-421a-85e8-41ba5866a617.png" 
                alt="Physimed Logo" 
                className="h-10 mr-2" 
              />
              <span className="hidden md:inline-block text-physimed-800 font-serif text-xl font-bold">Physimed</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-physimed font-medium link-underline">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-physimed font-medium link-underline">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-physimed font-medium link-underline">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-physimed font-medium link-underline">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-physimed font-medium link-underline">Contact</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full flex items-center gap-2">
              <Phone size={16} />
              <span className="hidden lg:inline">514-747-8192</span>
            </Button>
            <Button asChild size="sm" className="bg-physimed hover:bg-physimed-700 text-white rounded-full">
              <Link to="/booking">
                <Calendar size={16} className="mr-2" />
                Book Now
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMenu} className="p-1">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col space-y-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">Contact</Link>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" size="sm" className="rounded-full justify-center">
                <Phone size={16} className="mr-2" />
                514-747-8192
              </Button>
              <Button asChild size="sm" className="bg-physimed hover:bg-physimed-700 text-white rounded-full justify-center">
                <Link to="/booking">
                  <Calendar size={16} className="mr-2" />
                  Book Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
