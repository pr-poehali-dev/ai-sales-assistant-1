import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

interface TrustSectionProps {
  isVisible: boolean;
  sectionRef: (el: HTMLElement | null) => void;
}

const TrustSection = ({ isVisible, sectionRef }: TrustSectionProps) => {
  const stats = [
    {
      number: "150+",
      label: "Внедренных ботов",
      icon: "Bot"
    },
    {
      number: "40%",
      label: "Рост конверсии",
      icon: "TrendingUp"
    },
    {
      number: "24/7",
      label: "Поддержка клиентов",
      icon: "Clock"
    },
    {
      number: "3 дня",
      label: "Время запуска",
      icon: "Zap"
    }
  ];

  const testimonials = [
    {
      name: "Марина Козлова",
      business: "Студия маникюра «Ноготочки»",
      text: "После внедрения ИИ-бота количество записей увеличилось в 2 раза! Клиенты записываются даже ночью, когда я сплю. Очень удобно и прибыльно.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Алексей Морозов", 
      business: "Натяжные потолки «ПотолокПро»",
      text: "Бот обрабатывает все входящие заявки моментально. Раньше терял клиентов из-за того, что не мог сразу ответить. Теперь конверсия выросла на 35%!",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Елена Васильева",
      business: "Онлайн-школа английского",
      text: "ИИ-ассистент отвечает на все вопросы о курсах, записывает на пробные уроки. Экономлю 4-5 часов в день на общении с клиентами!",
      avatar: "👩‍🏫",
      rating: 5
    }
  ];

  const companies = [
    { name: "Beauty Studio", type: "Салон красоты" },
    { name: "TechRepair", type: "IT-сервис" },
    { name: "FoodDelivery", type: "Доставка еды" },
    { name: "AutoService", type: "Автосервис" },
    { name: "LangSchool", type: "Языковая школа" },
    { name: "CleanHouse", type: "Клининг" }
  ];

  return (
    <section 
      ref={sectionRef}
      data-section="trust"
      className={`py-20 px-4 bg-gradient-to-r from-slate-900/80 to-gray-900/80 transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-2 sm:px-4 ml-0 sm:ml-auto mr-auto">
        {/* Header */}
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Нам доверяют
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Присоединяйтесь к сотням довольных клиентов, которые уже автоматизировали свои продажи
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`bg-gray-800/50 border-gray-700 text-center hover-scale transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mx-auto w-fit mb-4">
                  <Icon name={stat.icon as any} size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Companies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Работаем с разными сферами бизнеса
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((company, index) => (
              <div 
                key={index}
                className={`bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center hover:bg-gray-800/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-2xl mb-2">🏢</div>
                <div className="text-sm font-semibold text-white">{company.name}</div>
                <div className="text-xs text-gray-400">{company.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Отзывы наших клиентов
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-gray-800/50 border-gray-700 hover-scale transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.business}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-600/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                100% Гарантия результата
              </h3>
              
              <p className="text-green-200 text-lg leading-relaxed">
                Если в течение 30 дней после запуска ИИ-бот не принесет результата — 
                <strong className="text-white"> вернем 100% оплаты</strong>. 
                Без лишних вопросов и бюрократии.
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-emerald-300">
                <Icon name="CheckCircle" size={20} />
                <span className="font-semibold">Юридическая гарантия в договоре</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;