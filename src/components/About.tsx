import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
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

  return (
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
  );
};

export default About;
