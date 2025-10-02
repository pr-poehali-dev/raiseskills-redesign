import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Search',
      title: 'SEO-аудит сайта',
      price: 'от 15 000 ₽',
      description: 'Комплексный SEO аудит включает технический анализ ошибок, внутренний аудит контента и мета-тегов, внешний аудит ссылок сайта, юзабилити аудит, анализ трафика конкурентов',
      features: ['Технический анализ', 'Аудит контента', 'Анализ конкурентов']
    },
    {
      icon: 'TrendingUp',
      title: 'SEO продвижение',
      price: 'Индивидуально',
      description: 'Комплексное продвижение сайта в поисковых системах Яндекс и Google. Результат от 6 месяцев. Рост позиций и трафика сайта',
      features: ['Яндекс и Google', 'ТОП позиции', 'Рост трафика']
    },
    {
      icon: 'Settings',
      title: 'SEO оптимизация',
      price: 'под ключ',
      description: 'SEO оптимизация сайтов под ключ в Москве. Техническая оптимизация, контентная оптимизация, внутренняя оптимизация',
      features: ['Техническая', 'Контентная', 'Внутренняя']
    },
    {
      icon: 'Globe',
      title: 'Создание сайтов',
      price: 'под ключ',
      description: 'Создание и разработка сайтов. Помощь в создании и продвижении сайта компании',
      features: ['Разработка', 'Дизайн', 'Поддержка']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Услуги по SEO-продвижению
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к продвижению вашего бизнеса в интернете
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8B6B]/5 via-[#4ECDIC4]/5 to-[#FFE66D]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF8B6B] to-[#FEC6A1] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <Badge variant="secondary" className="text-sm font-bold">
                    {service.price}
                  </Badge>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
