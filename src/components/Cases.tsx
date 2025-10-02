import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Cases = () => {
  const cases = [
    {
      title: 'Интернет-магазин электроники',
      niche: 'E-commerce',
      duration: '6 месяцев',
      results: [
        { label: 'Рост трафика', value: '+320%', color: 'text-blue-600' },
        { label: 'Позиции ТОП-3', value: '89 запросов', color: 'text-green-600' },
        { label: 'Конверсия', value: '+45%', color: 'text-purple-600' }
      ],
      tasks: [
        'Техническая оптимизация скорости загрузки',
        'Переработка структуры каталога',
        'Создание 200+ уникальных описаний товаров',
        'Наращивание качественной ссылочной массы'
      ],
      icon: 'ShoppingCart',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Медицинская клиника',
      niche: 'Медицина',
      duration: '8 месяцев',
      results: [
        { label: 'Органические заявки', value: '+450%', color: 'text-green-600' },
        { label: 'Позиции ТОП-5', value: '124 запроса', color: 'text-blue-600' },
        { label: 'Средний чек', value: '+28%', color: 'text-orange-600' }
      ],
      tasks: [
        'Оптимизация под локальный поиск',
        'Создание медицинского блога',
        'Работа с отзывами и репутацией',
        'Настройка аналитики и колл-трекинга'
      ],
      icon: 'Heart',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Производство мебели',
      niche: 'B2B',
      duration: '5 месяцев',
      results: [
        { label: 'Целевой трафик', value: '+280%', color: 'text-purple-600' },
        { label: 'Позиции ТОП-10', value: '156 запросов', color: 'text-blue-600' },
        { label: 'B2B заявки', value: '+190%', color: 'text-green-600' }
      ],
      tasks: [
        'Разработка контент-стратегии для B2B',
        'Оптимизация под коммерческие запросы',
        'Внедрение структурированных данных',
        'Работа с отраслевыми каталогами'
      ],
      icon: 'Briefcase',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="cases" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="Trophy" size={16} />
            Наши кейсы
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4 text-gray-900">
            Реальные результаты наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изучите успешные проекты продвижения в разных нишах. Каждый кейс — это конкретные цифры и достижения.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                <div className={`bg-gradient-to-br ${caseItem.color} p-8 text-white flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon name={caseItem.icon as any} size={24} className="text-white" />
                      </div>
                      <div className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {caseItem.niche}
                      </div>
                    </div>
                    <h3 className="font-bold text-2xl mb-4">
                      {caseItem.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">Срок: {caseItem.duration}</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-xs text-white/80 mb-1">{result.label}</div>
                        <div className="text-2xl font-bold">{result.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 p-8 bg-white">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-4">Что было сделано:</h4>
                    <div className="space-y-3">
                      {caseItem.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="Check" size={14} className="text-green-600" />
                          </div>
                          <p className="text-gray-700">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-3xl font-bold ${result.color} mb-1`}>
                          {result.value}
                        </div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Хотите увидеть такие же результаты для своего бизнеса?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Получить бесплатный аудит
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
