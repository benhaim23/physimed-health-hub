
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Home, FileText, CreditCard, Users, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: t("home"), icon: Home, path: "/" },
    { name: t("services"), icon: FileText, path: "/services" },
    { name: t("pricing"), icon: CreditCard, path: "/pricing" },
    { name: t("about"), icon: Users, path: "/about" },
    { name: t("contact"), icon: MessageSquare, path: "/contact" },
  ];

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/9517cafd-887f-421a-85e8-41ba5866a617.png" 
                alt="Physimed Logo" 
                className="h-16" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Menubar className="border-none shadow-none bg-transparent relative mr-4">
              {navItems.map((item) => (
                <MenubarMenu key={item.path}>
                  <Link to={item.path}>
                    <MenubarTrigger 
                      className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-physimed font-medium tracking-wide transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </MenubarTrigger>
                  </Link>
                </MenubarMenu>
              ))}
            </Menubar>
          </div>
          
          <div className="hidden md:flex items-center space-x-5">
            <LanguageSelector />
            <Button variant="outline" size="sm" className="rounded-full flex items-center gap-2 border-physimed-300 hover:bg-physimed-50 transition-colors duration-300">
              <Phone size={16} className="text-physimed" />
              <span className="hidden lg:inline">514-747-8192</span>
            </Button>
            <Button asChild size="sm" className="bg-physimed hover:bg-physimed-700 text-white rounded-full shadow-sm transition-all duration-300 hover:shadow-md">
              <Link to="/booking">
                <Calendar size={16} className="mr-2" />
                {t("book_now")}
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMenu} className="p-1 hover:bg-physimed-50">
              {isMenuOpen ? <X size={24} className="text-physimed" /> : <Menu size={24} className="text-physimed" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="flex items-center gap-2 text-gray-700 hover:text-physimed py-2 border-b border-gray-100 transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-3">
              <div className="flex justify-center">
                <LanguageSelector />
              </div>
              <Button variant="outline" size="sm" className="rounded-full justify-center border-physimed-300 hover:bg-physimed-50 transition-colors duration-200">
                <Phone size={16} className="mr-2 text-physimed" />
                514-747-8192
              </Button>
              <Button asChild size="sm" className="bg-physimed hover:bg-physimed-700 text-white rounded-full justify-center shadow-sm hover:shadow-md transition-all duration-300">
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
