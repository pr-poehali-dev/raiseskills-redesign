import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-50">
      <nav className="container mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">RS</span>
          </div>
          <span className="font-bold text-xl">raiseskills</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors text-sm">Услуги</a>
          <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors text-sm">Преимущества</a>
          <a href="#cases" className="text-gray-700 hover:text-primary transition-colors text-sm">Кейсы</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors text-sm">Контакты</a>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Консультация
          </Button>
        </div>
        <div className="md:hidden">
          <Icon name="Menu" size={24} className="text-gray-700" />
        </div>
      </nav>
    </header>
  );
};

export default Header;