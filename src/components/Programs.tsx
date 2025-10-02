import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Programs = () => {
  const packages = [
    {
      name: 'СТАРТ',
      subtitle: 'Для молодых сайтов',
      price: 'от 25 000 ₽',
      period: 'в месяц',
      features: [
        'До 50 запросов в продвижении',
        'Технический аудит сайта',
        'Базовая оптимизация страниц',
        'Еженедельные отчёты',
        'Консультации по телефону'
      ],
      color: 'from-blue-500 to-blue-600',
      icon: '🚀'
    },
    {
      name: 'БИЗНЕС',
      subtitle: 'Для растущих компаний',
      price: 'от 45 000 ₽',
      period: 'в месяц',
      features: [
        'До 150 запросов в продвижении',
        'Расширенный технический аудит',
        'Оптимизация всех страниц',
        'Контент-маркетинг',
        'Ссылочное продвижение',
        'Персональный менеджер'
      ],
      color: 'from-purple-500 to-purple-600',
      icon: '💼',
      popular: true
    },
    {
      name: 'ПРЕМИУМ',
      subtitle: 'Для крупного бизнеса',
      price: 'от 85 000 ₽',
      period: 'в месяц',
      features: [
        'Неограниченное количество запросов',
        'Комплексный аудит конкурентов',
        'Продвижение в регионах',
        'Создание контента',
        'Активное ссылочное продвижение',
        'Команда специалистов',
        'Гарантия результата'
      ],
      color: 'from-orange-500 to-orange-600',
      icon: '👑'
    }
  ];

  const stats = [
    {
      value: '200+',
      label: 'Успешных проектов',
      icon: '📊'
    },
    {
      value: '8 лет',
      label: 'Опыт в SEO',
      icon: '⭐'
    },
    {
      value: '98%',
      label: 'Довольных клиентов',
      icon: '❤️'
    },
    {
      value: 'ТОП-10',
      label: 'Средний результат',
      icon: '🏆'
    }
  ];

  return (
    <section id="packages" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            ТАРИФЫ НА ПРОДВИЖЕНИЕ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий пакет для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-gray-200 bg-white hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-bold text-3xl text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'ring-4 ring-yellow-400' : ''}`}
            >
              {pkg.popular && (
                <div className="bg-yellow-400 text-primary text-center py-2 font-bold text-sm">
                  ПОПУЛЯРНЫЙ ТАРИФ
                </div>
              )}
              <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white`}>
                <div className="text-5xl mb-4">{pkg.icon}</div>
                <h3 className="font-heading font-bold text-2xl mb-2">
                  {pkg.name}
                </h3>
                <p className="text-white/80 text-sm mb-6">{pkg.subtitle}</p>
                <div className="mb-6">
                  <div className="font-bold text-3xl mb-1">{pkg.price}</div>
                  <div className="text-white/80 text-sm">{pkg.period}</div>
                </div>
                <Button 
                  className="w-full bg-white text-primary hover:bg-white/90 font-bold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Заказать
                </Button>
              </div>
              <div className="p-6 bg-white">
                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200">
          <div className="flex items-center gap-6">
            <div className="text-6xl">💡</div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3">
                НЕ ЗНАЕТЕ, КАКОЙ ТАРИФ ВЫБРАТЬ?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Закажите бесплатную консультацию, и наши специалисты помогут подобрать оптимальный пакет под ваши цели и бюджет. Проведём экспресс-анализ вашего сайта и конкурентов.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
