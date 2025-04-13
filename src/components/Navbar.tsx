
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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
                className="h-16 mr-2" // Enlarged logo height from h-10 to h-16
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-physimed font-medium link-underline">{t("home")}</Link>
            <Link to="/services" className="text-gray-700 hover:text-physimed font-medium link-underline">{t("services")}</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-physimed font-medium link-underline">{t("pricing")}</Link>
            <Link to="/about" className="text-gray-700 hover:text-physimed font-medium link-underline">{t("about")}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-physimed font-medium link-underline">{t("contact")}</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="outline" size="sm" className="rounded-full flex items-center gap-2">
              <Phone size={16} />
              <span className="hidden lg:inline">514-747-8192</span>
            </Button>
            <Button asChild size="sm" className="bg-physimed hover:bg-physimed-700 text-white rounded-full">
              <Link to="/booking">
                <Calendar size={16} className="mr-2" />
                {t("book_now")}
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
            <Link to="/" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">{t("home")}</Link>
            <Link to="/services" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">{t("services")}</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">{t("pricing")}</Link>
            <Link to="/about" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">{t("about")}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-physimed py-2 border-b border-gray-100">{t("contact")}</Link>
            <div className="flex flex-col space-y-3 pt-3">
              <div className="flex justify-center">
                <LanguageSelector />
              </div>
              <Button variant="outline" size="sm" className="rounded-full justify-center">
                <Phone size={16} className="mr-2" />
                514-747-8192
              </Button>
              <Button asChild size="sm" className="bg-physimed hover:bg-physimed-700 text-white rounded-full justify-center">
                <Link to="/booking">
                  <Calendar size={16} className="mr-2" />
                  {t("book_now")}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
