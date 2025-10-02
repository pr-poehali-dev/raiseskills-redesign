import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              SEO продвижение сайтов
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
              Выведем ваш сайт в ТОП поисковых систем
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Комплексное SEO продвижение с гарантией результата. Увеличим органический трафик и привлечем целевых клиентов из Яндекс и Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
              >
                Смотреть кейсы
              </Button>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-green-600" />
                <span className="text-sm text-gray-700">Результат от 3 месяцев</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-green-600" />
                <span className="text-sm text-gray-700">Работа по договору</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-green-600" />
                <span className="text-sm text-gray-700">Прозрачная отчётность</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">ТОП-10</div>
                <p className="text-gray-700 text-lg">в поисковой выдаче<br />Яндекс и Google</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-gray-900">+250%</div>
                  <div className="text-sm text-gray-600">рост трафика</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
