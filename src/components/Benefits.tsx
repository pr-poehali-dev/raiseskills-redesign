import Icon from '@/components/ui/icon';

const Benefits = () => {
  const benefits = [
    {
      number: '1',
      title: 'УЧАТСЯ ПРОГРАММИРОВАТЬ',
      description: 'Верстать сайт, чтобы красиво делать в использовании игры, работа над поставкой ПК и наблюдением проектов с товарищами',
      icon: 'Code',
      color: 'from-blue-100 to-purple-100'
    },
    {
      number: '2',
      title: 'РАЗВИВАЮТ ЛОГИКУ И ИНТЕЛЛЕКТ',
      description: 'Программируя, ребенок учится решать интересные задачи, анализировать, разбирать проблему на части и находить решение',
      icon: 'Brain',
      color: 'from-pink-100 to-purple-100'
    },
    {
      number: '3',
      title: 'ПОДТЯГИВАЮТ АНГЛИЙСКИЙ',
      description: 'Все команды пишутся на английском, поэтому ребенок лучше его изучает через практику, а также расширяет словарный запас',
      icon: 'Globe',
      color: 'from-green-100 to-blue-100'
    },
    {
      number: '4',
      title: 'УЛУЧШАЮТ ШКОЛЬНУЮ УСПЕВАЕМОСТЬ',
      description: 'На уроках программирования дети изучают математику и физику через практику, что помогает понимать школьные предметы и добиваться успехов в школе',
      icon: 'GraduationCap',
      color: 'from-purple-100 to-pink-100'
    }
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          С НАМИ РЕБЯТА РАЗВИВАЮТСЯ
        </h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          С НЕСКОЛЬКИХ СТОРОН
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit) => (
            <div 
              key={benefit.number}
              className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-8 relative overflow-hidden`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-heading font-bold text-2xl text-primary flex-shrink-0">
                  {benefit.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-10">
                <Icon name={benefit.icon as any} size={80} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 flex items-center gap-6 border-2 border-yellow-200">
          <div className="text-6xl">🏆</div>
          <div>
            <h3 className="font-heading font-bold text-xl mb-2">
              А ЕЩЕ РЕБЯТА ОСВАИВАЮТ ПЕРСПЕКТИВНУЮ ПРОФЕССИЮ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Программист — одна из самых высокооплачиваемых и востребованных профессий во всем мире. Знания ребенка об обучении компьютеру, что поможет ему сделать первый шаг к успешному будущему.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
