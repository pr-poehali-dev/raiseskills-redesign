import Icon from '@/components/ui/icon';

const Benefits = () => {
  const benefits = [
    {
      number: '1',
      title: 'ТЕХНИЧЕСКИЙ АУДИТ',
      description: 'Полный анализ сайта: скорость загрузки, мобильная версия, структура, индексация. Выявляем все проблемы, мешающие продвижению.',
      icon: 'Search',
      color: 'from-blue-400 to-blue-600'
    },
    {
      number: '2',
      title: 'СБОР СЕМАНТИКИ',
      description: 'Подбор эффективных ключевых запросов с учётом конкурентов и специфики бизнеса. Работаем с высоко и низкочастотными запросами.',
      icon: 'Target',
      color: 'from-purple-400 to-purple-600'
    },
    {
      number: '3',
      title: 'ВНУТРЕННЯЯ ОПТИМИЗАЦИЯ',
      description: 'Оптимизация метатегов, заголовков, текстов и структуры сайта под поисковые системы Яндекс и Google.',
      icon: 'Settings',
      color: 'from-orange-400 to-orange-600'
    },
    {
      number: '4',
      title: 'КОНТЕНТ-МАРКЕТИНГ',
      description: 'Создание полезных статей и материалов для привлечения целевой аудитории. Уникальный контент для роста позиций.',
      icon: 'FileText',
      color: 'from-green-400 to-green-600'
    },
    {
      number: '5',
      title: 'ССЫЛОЧНОЕ ПРОДВИЖЕНИЕ',
      description: 'Наращивание качественной ссылочной массы с авторитетных и тематических ресурсов. Только белые методы продвижения.',
      icon: 'Link',
      color: 'from-pink-400 to-pink-600'
    },
    {
      number: '6',
      title: 'АНАЛИТИКА И ОТЧЁТЫ',
      description: 'Еженедельные отчёты с динамикой позиций, трафика и конверсий. Полная прозрачность результатов.',
      icon: 'BarChart3',
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            ЧТО ВХОДИТ В ПРОДВИЖЕНИЕ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексный подход для достижения максимального результата
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.number}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-8 h-full text-white relative overflow-hidden`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-heading font-bold text-2xl flex-shrink-0" style={{color: 'inherit'}}>
                    {benefit.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg mb-3">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/95 mb-6">
                  {benefit.description}
                </p>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <Icon name={benefit.icon as any} size={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
