import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const About = () => {
  const advantages = [
    {
      icon: 'Shield',
      title: 'Белые методы продвижения',
      description: 'Используем только легальные методы, рекомендованные Яндекс и Google. Никаких санкций и рисков для вашего сайта.'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: '8 лет на рынке SEO. Прошли более 200 проектов в разных нишах. Знаем, как работать с любой конкуренцией.'
    },
    {
      icon: 'FileText',
      title: 'Прозрачная отчётность',
      description: 'Еженедельные детальные отчёты о проделанной работе. Доступ к аналитике в реальном времени 24/7.'
    },
    {
      icon: 'Target',
      title: 'Индивидуальная стратегия',
      description: 'Не используем шаблоны. Разрабатываем уникальную стратегию под ваш бизнес, бюджет и конкурентов.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Icon name="Award" size={16} />
              О нас
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-gray-900">
              Профессиональное SEO-агентство в Москве
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              RaiseSkills — это команда экспертов по поисковому продвижению с 8-летним опытом. 
              Мы помогаем бизнесу выходить в ТОП поисковых систем и увеличивать продажи через органический трафик.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              За годы работы мы вывели в ТОП-10 более 200 проектов в самых разных нишах: 
              от интернет-магазинов до медицинских клиник и производственных компаний.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-sm text-gray-600">Проектов в ТОП</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <p className="text-sm text-gray-600">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">8 лет</div>
                <p className="text-sm text-gray-600">На рынке SEO</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="p-6 border-0 shadow-md hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${
                  index === 0 ? 'bg-blue-100' :
                  index === 1 ? 'bg-purple-100' :
                  index === 2 ? 'bg-green-100' : 'bg-orange-100'
                } flex items-center justify-center mb-4`}>
                  <Icon 
                    name={advantage.icon as any} 
                    size={24} 
                    className={
                      index === 0 ? 'text-blue-600' :
                      index === 1 ? 'text-purple-600' :
                      index === 2 ? 'text-green-600' : 'text-orange-600'
                    }
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {advantage.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-bold text-3xl mb-4">
                Как мы работаем над вашим проектом
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Наш подход основан на прозрачности, качестве и результате. Каждый этап продвижения согласуется с вами.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Icon name="Rocket" size={64} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h4 className="font-bold text-lg mb-2">Аудит и анализ</h4>
              <p className="text-white/80 text-sm">
                Изучаем ваш сайт, конкурентов и целевую аудиторию
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h4 className="font-bold text-lg mb-2">Стратегия</h4>
              <p className="text-white/80 text-sm">
                Составляем индивидуальный план продвижения с KPI
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h4 className="font-bold text-lg mb-2">Оптимизация</h4>
              <p className="text-white/80 text-sm">
                Устраняем ошибки, улучшаем контент и техническую часть
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h4 className="font-bold text-lg mb-2">Результат</h4>
              <p className="text-white/80 text-sm">
                Отслеживаем рост позиций и корректируем стратегию
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
