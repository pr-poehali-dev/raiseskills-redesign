import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Рейтинг поисковых систем. ТОП-10 популярных мировых поисковиков',
      views: '643 тыс.',
      date: '05.05.2020'
    },
    {
      title: 'История поисковых систем от создания и развития до наших дней',
      views: '234 тыс.',
      date: '15.03.2020'
    },
    {
      title: 'Как изучить спрос на товар до открытия интернет-магазина',
      views: '1,5 тыс.',
      date: '29.03.2019'
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            SEO блог
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полезные советы для самостоятельной SEO оптимизации сайтов
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    <Icon name="Eye" size={12} className="mr-1" />
                    {post.views}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {post.date}
                  </Badge>
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="ArrowRight" size={16} />
                  <span>Читать статью</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;