import Icon from '@/components/ui/icon';

const Benefits = () => {
  const benefits = [
    {
      title: 'Технический аудит',
      description: 'Полный анализ сайта: скорость загрузки, мобильная версия, структура, индексация',
      icon: 'Search'
    },
    {
      title: 'Сбор семантики',
      description: 'Подбор эффективных ключевых запросов с учётом конкурентов и специфики бизнеса',
      icon: 'Target'
    },
    {
      title: 'Внутренняя оптимизация',
      description: 'Оптимизация метатегов, заголовков, текстов и структуры сайта под поисковые системы',
      icon: 'Settings'
    },
    {
      title: 'Контент-маркетинг',
      description: 'Создание полезных статей и материалов для привлечения целевой аудитории',
      icon: 'FileText'
    },
    {
      title: 'Ссылочное продвижение',
      description: 'Наращивание качественной ссылочной массы с авторитетных и тематических ресурсов',
      icon: 'Link'
    },
    {
      title: 'Аналитика и отчёты',
      description: 'Еженедельные отчёты с динамикой позиций, трафика и конверсий',
      icon: 'BarChart3'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Комплексное SEO продвижение
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы используем все инструменты для достижения максимального результата
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={benefit.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
