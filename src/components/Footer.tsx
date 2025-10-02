import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <span className="font-bold text-xl">raiseskills</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Профессиональное SEO продвижение сайтов в Москве с 2012 года
            </p>
            <p className="text-xs text-gray-500">
              Помогаем бизнесу расти в поисковых системах Яндекс и Google
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Услуги</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="hover:text-primary transition-colors cursor-pointer">SEO продвижение</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Техническая оптимизация</p>
              <p className="hover:text-primary transition-colors cursor-pointer">SEO аудит сайта</p>
              <p className="hover:text-primary transition-colors cursor-pointer">Контент-маркетинг</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <p>Москва, Россия</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <a href="mailto:info@raiseskills.ru" className="hover:text-primary transition-colors">info@raiseskills.ru</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href="tel:+79504256908" className="hover:text-primary transition-colors">+7 950 425-69-08</a>
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com/raiseskills" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon name="Twitter" size={18} />
              </a>
              <a 
                href="mailto:info@raiseskills.ru" 
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
              >
                <Icon name="Mail" size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 raiseskills.ru — SEO продвижение сайтов. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;