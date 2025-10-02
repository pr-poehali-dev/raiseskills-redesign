import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-r from-primary via-purple-600 to-purple-500 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 border-0 text-white">
                ДЛЯ БИЗНЕСА
              </Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-tight">
                SEO ПРОДВИЖЕНИЕ<br />ДЛЯ ВАШЕГО БИЗНЕСА
              </h1>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-xs font-bold">+</span>
                  </div>
                  <p className="text-white/95">Научим вашего ребенка программированию с нуля</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-xs font-bold">+</span>
                  </div>
                  <p className="text-white/95">Каждое занятие проходит в группах с опытным педагогом</p>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold px-8 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ОФОРМИТЬ ЗАЯВЛЕНИЕ
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl" />
                <div className="relative bg-white rounded-full p-4 shadow-2xl">
                  <Badge className="bg-yellow-400 text-primary font-bold border-0 text-sm px-4 py-2">
                    Онлайн<br />формат
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
