import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-heading font-bold text-2xl bg-gradient-to-r from-[#FF8B6B] via-[#4ECDIC4] to-[#FFE66D] bg-clip-text text-transparent">
          RAISESKILLS
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#about" className="hover:text-primary transition-colors">О специалисте</a>
          <a href="#case" className="hover:text-primary transition-colors">Кейс</a>
          <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
          <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="bg-gradient-to-r from-[#FF8B6B] to-[#FEC6A1] hover:opacity-90 transition-opacity">
          Консультация
        </Button>
      </nav>
    </header>
  );
};

export default Header;
