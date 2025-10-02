import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-heading font-bold text-2xl mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              RAISESKILLS
            </div>
            <p className="text-white/70 mb-4">
              SEO продвижение сайтов в Москве с 2012 года
            </p>
            <p className="text-white/70 text-sm">
              Проект raiseskills — место, где каждый может прокачать свои знания в области SEO или создания сайтов
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Услуги</h4>
            <div className="space-y-2 text-white/70">
              <p className="hover:text-white transition-colors cursor-pointer">SEO продвижение</p>
              <p className="hover:text-white transition-colors cursor-pointer">SEO оптимизация</p>
              <p className="hover:text-white transition-colors cursor-pointer">SEO аудит</p>
              <p className="hover:text-white transition-colors cursor-pointer">Создание сайтов</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-white/70 mb-4">
              <p>Москва, Россия</p>
              <p>info@raiseskills.ru</p>
            </div>
            <div className="flex gap-3">
              <a href="https://twitter.com/raiseskills" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; 2024 RAISESKILLS. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;