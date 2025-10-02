import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
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
  );
};

export default Hero;
