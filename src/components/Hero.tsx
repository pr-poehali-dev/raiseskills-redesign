import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-primary via-purple-600 to-purple-500 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 border-0 text-white backdrop-blur-sm">
                ⚡ ЭФФЕКТИВНОЕ SEO ПРОДВИЖЕНИЕ
              </Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-tight">
                SEO продвижение сайтов в Москве
              </h1>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                Заказать SEO продвижение и оптимизацию сайтов под ключ. Недорогие цены на раскрутку сайта в поисковых системах Яндекс и Google. Результат от 3 месяцев.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <p className="text-white/95 text-lg">Рост позиций в ТОП-10 Яндекс и Google</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <p className="text-white/95 text-lg">Увеличение органического трафика до 300%</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <p className="text-white/95 text-lg">Прозрачная отчётность каждую неделю</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-yellow-400 text-primary hover:bg-yellow-300 font-bold px-8 shadow-lg text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ЗАКАЗАТЬ ПРОДВИЖЕНИЕ
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  Бесплатный аудит
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
                <img 
                  src="/img/52d9ae93-16bf-4f95-be92-a9813231f13a.jpg" 
                  alt="SEO Analytics"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
