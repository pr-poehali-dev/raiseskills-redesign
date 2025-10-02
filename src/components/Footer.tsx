import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900">RaiseSkills</span>
                <p className="text-xs text-gray-500">SEO агентство</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Профессиональное SEO продвижение сайтов в Москве. Помогаем бизнесу расти в поисковых системах с 2016 года.
            </p>
            <div className="flex gap-2">
              <a 
                href="https://twitter.com/raiseskills" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg bg-white border border-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
              >
                <Icon name="Twitter" size={16} />
              </a>
              <a 
                href="mailto:info@raiseskills.ru" 
                className="w-9 h-9 rounded-lg bg-white border border-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
              >
                <Icon name="Mail" size={16} />
              </a>
              <a 
                href="tel:+79504256908" 
                className="w-9 h-9 rounded-lg bg-white border border-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm"
              >
                <Icon name="Phone" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Услуги</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Технический аудит
              </a>
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                SEO продвижение
              </a>
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Контент-маркетинг
              </a>
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Аналитика и отчёты
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Компания</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                О нас
              </a>
              <a href="#cases" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Кейсы
              </a>
              <a href="#packages" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Тарифы
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Контакты
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+79504256908"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Icon name="Phone" size={16} className="flex-shrink-0" />
                <span>+7 950 425-69-08</span>
              </a>
              <a 
                href="mailto:info@raiseskills.ru"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Icon name="Mail" size={16} className="flex-shrink-0" />
                <span>info@raiseskills.ru</span>
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <Icon name="MapPin" size={16} className="flex-shrink-0" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear} RaiseSkills. Все права защищены.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
