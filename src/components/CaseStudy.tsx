import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const CaseStudy = () => {
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

  return (
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
  );
};

export default CaseStudy;
