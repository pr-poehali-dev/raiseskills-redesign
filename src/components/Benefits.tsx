import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Benefits = () => {
  const services = [
    {
      icon: 'Search',
      title: 'Технический аудит',
      description: 'Глубокий анализ сайта: скорость загрузки, мобильная версия, индексация, структура. Выявляем все проблемы.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'Target',
      title: 'Сбор семантики',
      description: 'Подбор эффективных ключевых слов с учётом конкурентов и специфики бизнеса. Работаем с ВЧ, СЧ и НЧ запросами.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'Code',
      title: 'Внутренняя оптимизация',
      description: 'Оптимизация метатегов, заголовков, текстов и структуры сайта под поисковые системы Яндекс и Google.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: 'FileText',
      title: 'Контент-маркетинг',
      description: 'Создание полезных статей и материалов для привлечения целевой аудитории. Уникальный SEO-контент.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'Link',
      title: 'Ссылочное продвижение',
      description: 'Наращивание качественной ссылочной массы с авторитетных тематических ресурсов. Только белые методы.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и отчёты',
      description: 'Еженедельные отчёты с динамикой позиций, трафика и конверсий. Полная прозрачность результатов.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="Zap" size={16} />
            Наши услуги
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4 text-gray-900">
            Что входит в SEO продвижение
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход для достижения максимального результата в поисковых системах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={`h-1 bg-gradient-to-r ${service.color}`} />
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-3xl text-gray-900 mb-4">
                Почему выбирают нас?
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Мы не просто SEO-агентство. Мы ваш партнёр в развитии бизнеса онлайн.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Прозрачная работа</h4>
                    <p className="text-gray-600 text-sm">Еженедельные отчёты и доступ к аналитике 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Индивидуальный подход</h4>
                    <p className="text-gray-600 text-sm">Стратегия под ваш бизнес и конкретные цели</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Гарантия результата</h4>
                    <p className="text-gray-600 text-sm">Договор с фиксацией KPI и сроков выполнения</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center border-0 shadow-md bg-white">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-600 text-sm">Успешных проектов</p>
              </Card>
              <Card className="p-6 text-center border-0 shadow-md bg-white">
                <div className="text-4xl font-bold text-purple-600 mb-2">8 лет</div>
                <p className="text-gray-600 text-sm">Опыт в SEO</p>
              </Card>
              <Card className="p-6 text-center border-0 shadow-md bg-white">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600 text-sm">Довольных клиентов</p>
              </Card>
              <Card className="p-6 text-center border-0 shadow-md bg-white">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600 text-sm">Поддержка</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
