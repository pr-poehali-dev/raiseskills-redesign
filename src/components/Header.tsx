import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b shadow-sm">
      <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
        <div className="font-heading font-bold text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          RAISESKILLS
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#about" className="hover:text-primary transition-colors">О специалисте</a>
          <a href="#case" className="hover:text-primary transition-colors">Кейсы</a>
          <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
          <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
          Консультация
        </Button>
      </nav>
    </header>
  );
};

export default Header;