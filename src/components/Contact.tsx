import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    site: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="Mail" size={16} />
            Связаться с нами
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4 text-gray-900">
            Получите бесплатный SEO-аудит
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Оставьте заявку прямо сейчас и получите подробный анализ вашего сайта с рекомендациями по продвижению
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-10 text-white">
            <h3 className="font-bold text-3xl mb-6">
              Что вы получите в аудите?
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Search" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Анализ позиций</h4>
                  <p className="text-white/90">
                    Проверим текущие позиции вашего сайта по ключевым запросам в Яндекс и Google
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertTriangle" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Технические ошибки</h4>
                  <p className="text-white/90">
                    Выявим проблемы, которые мешают индексации и продвижению сайта
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Анализ конкурентов</h4>
                  <p className="text-white/90">
                    Изучим стратегии конкурентов и найдём возможности для обгона
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">План продвижения</h4>
                  <p className="text-white/90">
                    Составим пошаговый план работ с прогнозом результатов
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h4 className="font-semibold text-lg mb-4">Свяжитесь с нами напрямую:</h4>
              <div className="space-y-4">
                <a 
                  href="tel:+79504256908"
                  className="flex items-center gap-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Телефон</div>
                    <div className="font-semibold">+7 950 425-69-08</div>
                  </div>
                </a>
                <a 
                  href="mailto:info@raiseskills.ru"
                  className="flex items-center gap-3 hover:bg-white/10 p-3 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Email</div>
                    <div className="font-semibold">info@raiseskills.ru</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Адрес</div>
                    <div className="font-semibold">Москва, Россия</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <Input
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Телефон *
                </label>
                <Input
                  placeholder="+7 (___) ___-__-__"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Адрес сайта *
                </label>
                <Input
                  placeholder="https://example.com"
                  type="url"
                  value={formData.site}
                  onChange={(e) => setFormData({...formData, site: e.target.value})}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Комментарий (необязательно)
                </label>
                <Textarea
                  placeholder="Расскажите о ваших целях и задачах..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg shadow-lg"
              >
                Получить бесплатный аудит
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
