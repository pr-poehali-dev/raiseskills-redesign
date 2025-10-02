import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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

  const benefits = [
    {
      icon: 'Award',
      title: 'Опыт с 2012 года',
      description: '13+ лет практики в SEO и создании сайтов'
    },
    {
      icon: 'User',
      title: 'Частный специалист',
      description: 'Персональный подход, работа напрямую без посредников'
    },
    {
      icon: 'FileCheck',
      title: 'Ручная работа',
      description: 'Персональный ручной аудит и оптимизация'
    },
    {
      icon: 'Target',
      title: 'Долгосрочный результат',
      description: 'Фокус на стабильный рост трафика и продаж'
    }
  ];

  const caseStudy = {
    title: 'Увеличение трафика на 300%',
    industry: 'Строительная тематика',
    duration: '6-8 месяцев',
    results: [
      { label: 'Рост трафика', value: '+300%' },
      { label: 'Семантика', value: '1000+ запросов' },
      { label: 'Позиции', value: 'ТОП-3' }
    ],
    description: 'Проект по продаже материалов и покрытий для искусственных футбольных полей. Комплексная работа включала аудит, разработку структуры, создание семантического ядра и качественный контент.'
  };

  const blogPosts = [
    {
      title: 'Рейтинг поисковых систем. ТОП-10 популярных мировых поисковиков',
      views: '643 тыс.',
      date: '05.05.2020'
    },
    {
      title: 'История поисковых систем от создания и развития до наших дней',
      views: '234 тыс.',
      date: '15.03.2020'
    },
    {
      title: 'Как изучить спрос на товар до открытия интернет-магазина',
      views: '1,5 тыс.',
      date: '29.03.2019'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-heading font-bold text-2xl bg-gradient-to-r from-[#FF8B6B] via-[#4ECDIC4] to-[#FFE66D] bg-clip-text text-transparent">
            RAISESKILLS
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О специалисте</a>
            <a href="#case" className="hover:text-primary transition-colors">Кейс</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-[#FF8B6B] to-[#FEC6A1] hover:opacity-90 transition-opacity">
            Консультация
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE66D]/10 via-[#4ECDIC4]/10 to-[#FF8B6B]/10 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-gradient-to-r from-[#FF8B6B] to-[#FEC6A1] text-white border-0">
                Частный SEO специалист
              </Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Санал Эрдни-Горяев помогу создать и продвинуть сайт{' '}
                <span className="bg-gradient-to-r from-[#FF8B6B] via-[#4ECDIC4] to-primary bg-clip-text text-transparent">
                  вашей компании
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Занимаюсь SEO продвижением сайтов в поисковых системах Яндекс и Google с 2012 года
              </p>
              <p className="text-lg mb-8 font-medium">
                Получите бесплатную консультацию, увеличьте продажи и трафик на Вашем сайте
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#FF8B6B] to-[#FEC6A1] hover:opacity-90 transition-all hover:scale-105 text-lg px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-accent/10 transition-all hover:scale-105 text-lg px-8"
                  onClick={() => document.getElementById('case')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Смотреть кейсы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF8B6B] via-[#4ECDIC4] to-[#FFE66D] rounded-3xl blur-2xl opacity-30 animate-float" />
              <Card className="relative bg-white/80 backdrop-blur-sm border-2 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8B6B] to-[#FEC6A1] flex items-center justify-center">
                      <Icon name="TrendingUp" size={32} className="text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-3xl">+300%</div>
                      <div className="text-sm text-muted-foreground">Средний рост трафика</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#4ECDIC4]/20 to-[#0EA5E9]/20">
                      <div className="font-heading font-bold text-2xl mb-1">150+</div>
                      <div className="text-sm">Успешных проектов</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#FFE66D]/20 to-[#FEF7CD]/20">
                      <div className="font-heading font-bold text-2xl mb-1">13+</div>
                      <div className="text-sm">Лет опыта</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                О специалисте
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Частный SEO специалист и вебмастер с опытом работы с 2012 года
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF8B6B] to-[#FEC6A1] flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <p className="text-lg">Опыт работы штатным SEO специалистом (инхаус практика)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF8B6B] to-[#FEC6A1] flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <p className="text-lg">Автор SEO блога raiseskills.ru с полезными материалами</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF8B6B] to-[#FEC6A1] flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <p className="text-lg">Все методики основаны на реальной практике и опыте</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#FFE66D]/20 to-[#FEF7CD]/20 rounded-2xl border-2 border-[#FFE66D]/30">
                <p className="text-lg font-medium italic">
                  "SEO продвижение — это не волшебство, а конкретная продуманная работа. Комплексная работа по SEO дает долгосрочный результат в виде трафика и продаж"
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ECDIC4] to-[#0EA5E9] flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon as any} size={28} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="case" className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#2563eb] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF8B6B] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4ECDIC4] rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              Кейс
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              {caseStudy.title}
            </h2>
            <p className="text-xl text-white/80">
              {caseStudy.industry} • {caseStudy.duration}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {caseStudy.results.map((result, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="font-heading font-bold text-5xl mb-2 bg-gradient-to-r from-[#FFE66D] to-[#FEF7CD] bg-clip-text text-transparent">
                    {result.value}
                  </div>
                  <p className="text-white/80">{result.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                {caseStudy.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-bold text-lg mb-3">Ключевые составляющие успеха:</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-[#FFE66D] flex-shrink-0 mt-0.5" />
                      <span>Хорошо проработанная структура сайта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-[#FFE66D] flex-shrink-0 mt-0.5" />
                      <span>Полный охват всех ключевых слов из тематики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-[#FFE66D] flex-shrink-0 mt-0.5" />
                      <span>Продуманная работа над контентом сайта</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-3">Выполненные работы:</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-[#4ECDIC4] flex-shrink-0 mt-0.5" />
                      <span>Комплексный аудит сайта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-[#4ECDIC4] flex-shrink-0 mt-0.5" />
                      <span>Анализ структур конкурентов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-[#4ECDIC4] flex-shrink-0 mt-0.5" />
                      <span>Создание уникальной структуры</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              SEO блог
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные советы для самостоятельной SEO оптимизации сайтов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      <Icon name="Eye" size={12} className="mr-1" />
                      {post.views}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {post.date}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="ArrowRight" size={16} />
                    <span>Читать статью</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Получить бесплатную консультацию
            </h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму и я свяжусь с вами в течение часа
            </p>
          </div>
          <Card className="border-2 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Адрес сайта</label>
                  <Input 
                    placeholder="https://example.com"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-[#FF8B6B] to-[#FEC6A1] hover:opacity-90 transition-all hover:scale-105 text-lg h-14"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-heading font-bold text-2xl mb-4 bg-gradient-to-r from-[#FF8B6B] via-[#4ECDIC4] to-[#FFE66D] bg-clip-text text-transparent">
                RAISESKILLS
              </div>
              <p className="text-white/70 mb-4">
                SEO продвижение сайтов в Москве с 2012 года
              </p>
              <p className="text-white/70 text-sm">
                Проект raiseskills — место, где каждый может прокачать свои знания в области SEO или создания сайтов
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <div className="space-y-2 text-white/70">
                <p className="hover:text-white transition-colors cursor-pointer">SEO продвижение</p>
                <p className="hover:text-white transition-colors cursor-pointer">SEO оптимизация</p>
                <p className="hover:text-white transition-colors cursor-pointer">SEO аудит</p>
                <p className="hover:text-white transition-colors cursor-pointer">Создание сайтов</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70 mb-4">
                <p>Москва, Россия</p>
                <p>info@raiseskills.ru</p>
              </div>
              <div className="flex gap-3">
                <a href="https://twitter.com/raiseskills" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2024 RAISESKILLS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
