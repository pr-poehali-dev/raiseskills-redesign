import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 py-3 px-4 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <div>
            <span className="font-bold text-xl text-gray-900">RaiseSkills</span>
            <p className="text-xs text-gray-500">SEO агентство</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">Услуги</a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</a>
          <a href="#packages" className="text-gray-700 hover:text-primary transition-colors font-medium">Тарифы</a>
          <a href="#cases" className="text-gray-700 hover:text-primary transition-colors font-medium">Кейсы</a>
          <a href="tel:+79504256908" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium">
            <Icon name="Phone" size={18} />
            +7 950 425-69-08
          </a>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Бесплатный аудит
          </Button>
        </div>
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-gray-700" />
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4">
          <div className="flex flex-col gap-3">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>О нас</a>
            <a href="#packages" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Тарифы</a>
            <a href="#cases" className="text-gray-700 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Кейсы</a>
            <a href="tel:+79504256908" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium py-2">
              <Icon name="Phone" size={18} />
              +7 950 425-69-08
            </a>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Бесплатный аудит
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;