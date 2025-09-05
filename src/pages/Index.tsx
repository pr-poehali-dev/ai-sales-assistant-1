import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Обрабатывает входящие мгновенно",
      description: "Не теряет клиентов"
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
      icon: "Settings",
      title: "Настраивается под ваш бизнес",
      description: "За 1–2 дня"
    }
  ];

  const businesses = [
    "Мастера и специалисты (маникюр, косметология)",
    "Окна, натяжные потолки, ремонт",
    "Обучение и онлайн-услуги",
    "Интернет-магазины и товары",
    "Службы доставки, такси и аренда"
  ];

  const bonuses = [
    "Готовый ИИ-ассистент с вашими текстами",
    "Сценарий продаж и прогрева",
    "Встроенные кнопки: Telegram, ВКонтакте, WhatsApp",
    "Техподдержка и настройка под вашу нишу"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Bot" size={16} />
              ИИ-технологии для бизнеса
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ИИ-продавец и ассистент для бизнеса
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Заявки 24/7 без менеджеров
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Ваш виртуальный сотрудник, который не спит и не болеет. Отвечает на заявки, консультирует клиентов и продаёт — пока вы занимаетесь делом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover-scale">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать ИИ-ассистента
              </Button>
              
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg hover-scale">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Преимущества ИИ-ассистента
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover-scale transition-all duration-300 hover:bg-gray-800/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Для кого это подходит
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {businesses.map((business, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded">
                  <Icon name="CheckCircle" size={20} className="text-white" />
                </div>
                <span className="text-gray-300">{business}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Что вы получите
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-2 rounded mt-1">
                  <Icon name="Gift" size={20} className="text-white" />
                </div>
                <span className="text-gray-300 leading-relaxed">{bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Bots Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Примеры чат-ботов
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Icon name="Bot" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">@pluchki_bot</h3>
                <p className="text-blue-300 mb-4">Бот для прогрева аудитории</p>
                <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Посмотреть в Telegram
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-700">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Icon name="ShoppingCart" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">@pocovorimzzzz_bot</h3>
                <p className="text-purple-300 mb-4">Бот для продаж</p>
                <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-800">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Посмотреть в Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Готовы автоматизировать продажи?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Свяжитесь с нами и получите персональную консультацию
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 hover-scale">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram: @cocozzAAA
            </Button>
            
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 hover-scale">
              <Icon name="Users" size={20} className="mr-2" />
              Канал: ИИ для бизнеса
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">🎁 Бонусы при заказе:</h3>
            <div className="text-gray-300 space-y-2">
              <div>🎁 Бесплатный аудит вашей воронки</div>
              <div>🎁 3 шаблона под разные ниши</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;