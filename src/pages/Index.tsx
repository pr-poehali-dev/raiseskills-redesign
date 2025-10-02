import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
      description: 'Глубокий анализ вашего сайта с выявлением всех технических и контентных проблем'
    },
    {
      icon: 'TrendingUp',
      title: 'Продвижение в ТОП',
      description: 'Комплексное продвижение сайта в поисковых системах Яндекс и Google'
    },
    {
      icon: 'Target',
      title: 'Увеличение трафика',
      description: 'Привлечение целевых посетителей и рост конверсии вашего сайта'
    },
    {
      icon: 'FileText',
      title: 'Контент-маркетинг',
      description: 'Создание оптимизированного контента, который привлекает клиентов'
    }
  ];

  const benefits = [
    {
      icon: 'Award',
      title: 'Опыт с 2012 года',
      description: 'Более 10 лет успешной работы в SEO'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Стратегия под ваш бизнес и нишу'
    },
    {
      icon: 'BarChart3',
      title: 'Прозрачная отчетность',
      description: 'Регулярные отчеты о проделанной работе'
    },
    {
      icon: 'CheckCircle2',
      title: 'Гарантия результата',
      description: 'Достижение KPI или возврат средств'
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
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
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
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                SEO продвижение сайтов в{' '}
                <span className="bg-gradient-to-r from-[#FF8B6B] via-[#4ECDIC4] to-primary bg-clip-text text-transparent">
                  Москве
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Частный специалист Санал Эрдни-Горяев, занимаюсь seo продвижением сайтов в поисковых системах Яндекс и Google c 2012 года.
              </p>
              <p className="text-lg mb-8">
                Получите бесплатную консультацию, увеличьте продажи и трафик на Вашем сайте.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#FF8B6B] to-[#FEC6A1] hover:opacity-90 transition-all hover:scale-105 text-lg px-8"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-accent/10 transition-all hover:scale-105 text-lg px-8"
                >
                  Мои кейсы
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
                      <div className="font-heading font-bold text-3xl">+320%</div>
                      <div className="text-sm text-muted-foreground">Средний рост трафика</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#4ECDIC4]/20 to-[#0EA5E9]/20">
                      <div className="font-heading font-bold text-2xl mb-1">150+</div>
                      <div className="text-sm">Успешных проектов</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#FFE66D]/20 to-[#FEF7CD]/20">
                      <div className="font-heading font-bold text-2xl mb-1">10+</div>
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
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF8B6B]/5 via-[#4ECDIC4]/5 to-[#FFE66D]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF8B6B] to-[#FEC6A1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#2563eb] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF8B6B] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4ECDIC4] rounded-full filter blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Почему выбирают меня
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Преимущества работы с частным специалистом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFE66D] to-[#FEF7CD] flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-[#1A1F2C]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
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
              <p className="text-white/70">
                SEO продвижение сайтов в Москве с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>Москва, Россия</p>
                <p>info@raiseskills.ru</p>
                <p>+7 (999) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Phone" size={20} />
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
