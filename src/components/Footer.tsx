import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-8 px-4 border-t">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-heading font-bold text-2xl text-primary mb-4">
              ШК
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              SEO продвижение сайтов в Москве с 2012 года
            </p>
            <p className="text-xs text-muted-foreground">
              Проект raiseskills — место, где каждый может прокачать свои знания в области SEO или создания сайтов
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Услуги</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="hover:text-primary transition-colors cursor-pointer">SEO продвижение</p>
              <p className="hover:text-primary transition-colors cursor-pointer">SEO оптимизация</p>
              <p className="hover:text-primary transition-colors cursor-pointer">SEO аудит</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Создание сайтов</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <p>Москва, Россия</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <p>info@raiseskills.ru</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <p>+7 950 425-69-08</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com/raiseskills" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Icon name="Twitter" size={18} className="text-primary" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Icon name="Mail" size={18} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 RAISESKILLS. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
