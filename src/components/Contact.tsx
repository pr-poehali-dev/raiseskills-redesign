import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    site: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-primary via-purple-600 to-purple-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                ЗАКАЖИТЕ БЕСПЛАТНЫЙ АУДИТ САЙТА
              </h2>
              <p className="text-white/95 text-lg mb-6 leading-relaxed">
                Оставьте заявку, и мы проведём экспресс-анализ вашего сайта, выявим основные проблемы и предложим решения для роста в поисковой выдаче.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/95">Анализ позиций сайта</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/95">Выявление технических ошибок</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/95">Рекомендации по продвижению</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <div className="text-sm text-white/80">Телефон</div>
                    <a href="tel:+79504256908" className="text-xl font-bold hover:text-yellow-400 transition-colors">
                      +7 950 425-69-08
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <div className="text-sm text-white/80">Email</div>
                    <a href="mailto:info@raiseskills.ru" className="text-xl font-bold hover:text-yellow-400 transition-colors">
                      info@raiseskills.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
                Получить бесплатный аудит
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12 border-gray-200"
                  required
                />
                <Input
                  placeholder="Номер телефона"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12 border-gray-200"
                  required
                />
                <Input
                  placeholder="Адрес вашего сайта"
                  type="url"
                  value={formData.site}
                  onChange={(e) => setFormData({...formData, site: e.target.value})}
                  className="h-12 border-gray-200"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full h-12 bg-yellow-400 text-primary hover:bg-yellow-300 font-bold text-lg shadow-lg"
                >
                  ПОЛУЧИТЬ АУДИТ
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
