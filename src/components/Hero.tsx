import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2">
              Частный SEO специалист
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Санал Эрдни-Горяев помогу создать и продвинуть сайт{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all hover:scale-105 text-lg px-8"
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
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-3xl opacity-20 animate-float" />
            <Card className="relative bg-white/80 backdrop-blur-sm border-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Icon name="TrendingUp" size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-3xl">+300%</div>
                    <div className="text-sm text-muted-foreground">Средний рост трафика</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20">
                    <div className="font-heading font-bold text-2xl mb-1">150+</div>
                    <div className="text-sm">Успешных проектов</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/20 border border-secondary/20">
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