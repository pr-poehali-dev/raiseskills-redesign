import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white py-4 px-4">
      <nav className="container mx-auto max-w-5xl flex items-center justify-between">
        <div className="font-heading font-bold text-3xl text-primary">
          ШК
        </div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#courses" className="hover:text-primary transition-colors">Курсы</a>
          <a href="#benefits" className="hover:text-primary transition-colors">Как проходит обучение</a>
          <a href="#programs" className="hover:text-primary transition-colors">Просмотр детям</a>
          <a href="#contact" className="hover:text-primary transition-colors">Частые вопросы</a>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <Icon name="Phone" size={16} className="text-primary" />
          +7 950 425-69-08
        </div>
      </nav>
    </header>
  );
};

export default Header;