import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Programs = () => {
  const stats = [
    {
      value: '150+',
      label: 'Успешных проектов',
      icon: 'Briefcase'
    },
    {
      value: '7 лет',
      label: 'Опыт в SEO',
      icon: 'Award'
    },
    {
      value: '95%',
      label: 'Довольных клиентов',
      icon: 'Users'
    },
    {
      value: '24/7',
      label: 'Поддержка',
      icon: 'Headphones'
    }
  ];

  const cases = [
    {
      title: 'Интернет-магазин электроники',
      result: '+320% трафика за 6 месяцев',
      positions: 'ТОП-3 по 89 запросам',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Медицинская клиника',
      result: '+450% органических заявок',
      positions: 'ТОП-5 по 124 запросам',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Производство мебели',
      result: '+280% целевого трафика',
      positions: 'ТОП-10 по 156 запросам',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="cases" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Наши результаты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные кейсы продвижения сайтов наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon as any} size={24} className="text-primary" />
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`bg-gradient-to-br ${caseItem.color} p-8 h-full text-white`}>
                <div className="mb-6">
                  <Icon name="TrendingUp" size={40} className="opacity-80" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">
                  {caseItem.title}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{caseItem.result}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{caseItem.positions}</span>
                  </div>
                </div>
                <Button 
                  variant="secondary"
                  className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
