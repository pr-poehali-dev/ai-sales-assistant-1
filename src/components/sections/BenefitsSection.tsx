import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

interface BenefitsSectionProps {
  isVisible: boolean;
  sectionRef: (el: HTMLElement | null) => void;
}

const BenefitsSection = ({ isVisible, sectionRef }: BenefitsSectionProps) => {
  const benefits = [
    {
      icon: "Zap",
      title: "Мгновенная обработка запросов",
      description: "Отвечает без задержек"
    },
    {
      icon: "MessageSquare",
      title: "Консультирует по услугам и продуктам",
      description: "Отвечает на все вопросы клиентов"
    },
    {
      icon: "Target",
      title: "Продаёт по заранее заданному сценарию",
      description: "Увеличивает конверсию"
    },
    {
      icon: "Clock",
      title: "Работает 24/7",
      description: "Даже когда вы офлайн"
    },
    {
      icon: "Sparkles",
      title: "Умная адаптация к клиентам",
      description: "Обучается на ваших данных и становится экспертом в вашей области"
    }
  ];

  const businesses = [
    "Мастера и специалисты: косметологи, мастера маникюра, репетиторы.",
    "Локальный бизнес: службы доставки, такси, клининговые компании, аренда оборудования.",
    "Онлайн-продавцы: интернет-магазины, инфобизнес, создатели курсов.",
    "Сфера услуг: юристы, бухгалтеры, IT-специалисты."
  ];

  const bonuses = [
    "Готовый ИИ-ассистент с вашими текстами",
    "Сценарий продаж и прогрева",
    "Встроенные кнопки: Telegram, ВКонтакте, WhatsApp",
    "Техподдержка и настройка под вашу нишу"
  ];

  return (
    <>
      {/* Benefits Section */}
      <section 
        ref={sectionRef}
        data-section="benefits"
        className={`py-20 px-4 bg-gray-900/50 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl px-2 sm:px-4 ml-0 sm:ml-auto mr-auto">
          <div className="text-left sm:text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              🚀 Преимущества ИИ-ассистента
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ваш цифровой ассистент, который никогда не спит и не берет отпуск
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`bg-gray-800/50 border-gray-700 hover-scale transition-all duration-500 hover:bg-gray-800/70 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg transform transition-transform duration-300 hover:scale-110">
                      <Icon name={benefit.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 transition-all duration-1000 delay-300">
        <div className="container mx-auto max-w-4xl px-2 sm:px-4 ml-0 sm:ml-auto mr-auto">
          <div className="text-left sm:text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Для кого это идеально подойдет
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Малому и среднему бизнесу, который хочет автоматизировать рутину и увеличить продажи без найма новых сотрудников.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {businesses.map((business, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 transition-all duration-500 hover:bg-gray-800/50 hover:border-emerald-500/50 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded transition-transform duration-300 hover:scale-110">
                  <Icon name="CheckCircle" size={20} className="text-white" />
                </div>
                <span className="text-gray-300">{business}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-gray-900/50 transition-all duration-1000 delay-400">
        <div className="container mx-auto max-w-4xl px-2 sm:px-4 ml-0 sm:ml-auto mr-auto">
          <div className="text-left sm:text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Что вы получите
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полный комплект для автоматизации продаж в вашем бизнесе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-500 hover:bg-gray-800/70 hover:border-pink-500/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-2 rounded mt-1 transition-transform duration-300 hover:scale-110">
                  <Icon name="Gift" size={20} className="text-white" />
                </div>
                <span className="text-gray-300 leading-relaxed">{bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;