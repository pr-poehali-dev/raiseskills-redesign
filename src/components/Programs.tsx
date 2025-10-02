import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Programs = () => {
  const programs = [
    {
      name: 'КУРС MIDDLE',
      age: '9-12 ЛЕТ',
      lessons: '8 МЕСЯЦЕВ',
      description: 'Ребята будут использовать возможности программы Scratch, создавать игры и мультики, как блочно, так и текстово. Много лайфхаков.',
      price: 'от 4 500 ₽ / месяц',
      color: 'from-primary to-purple-600',
      icon: '👦'
    },
    {
      name: 'КУРС HIGH',
      age: '10-12 ЛЕТ',
      lessons: '12 МЕСЯЦЕВ',
      description: 'Ребята будут основательно программировать на настоящем языке Python, создавать игры и практические проекты, научатся думать как разработчик.',
      price: 'от 5 500 ₽ / месяц',
      color: 'from-orange-500 to-red-500',
      icon: '🧑'
    },
    {
      name: 'КУРС SUPER',
      age: '12-14 ЛЕТ',
      lessons: '8 МЕСЯЦЕВ',
      description: 'Ребята будут продолжать изучать Python для создания продвинутых игр и приложений, изучат ООП, библиотеки, создадут портфолио.',
      price: 'от 6 500 ₽ / месяц',
      color: 'from-green-500 to-emerald-600',
      icon: '👨'
    },
    {
      name: 'КУРС EXPERT',
      age: '14-16 ЛЕТ',
      lessons: '12 МЕСЯЦЕВ',
      description: 'Ребята будут изучать профессиональные инструменты разработки, создавать веб-приложения, работать с базами данных и API.',
      price: 'от 7 500 ₽ / месяц',
      color: 'from-purple-600 to-pink-600',
      icon: '👩'
    }
  ];

  return (
    <section id="programs" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          ВЫБЕРИТЕ ПОДХОДЯЩУЮ
        </h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          ПРОГРАММУ ДЛЯ ВАШЕГО РЕБЁНКА
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-white/20 border-0 text-white text-xs">
                    {program.age}
                  </Badge>
                  <Badge className="bg-white/20 border-0 text-white text-xs">
                    {program.lessons}
                  </Badge>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3">
                  {program.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-white text-primary font-bold border-0">
                    {program.price}
                  </Badge>
                  <Button 
                    size="sm"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Подробнее →
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <div className="text-6xl mb-2">{program.icon}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
