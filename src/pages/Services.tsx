import { Helmet } from 'react-helmet-async';
import Footer from '@/components/sections/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: "Bot",
      title: "Создание ИИ-ассистентов",
      description: "Разработка умных ботов для автоматизации продаж и поддержки клиентов",
      features: ["Telegram-боты", "VK-боты", "WhatsApp-боты", "Веб-чат"],
      price: "от 15 000 ₽"
    },
    {
      icon: "Settings",
      title: "Настройка и внедрение",
      description: "Полная настройка бота под ваш бизнес за 3 дня",
      features: ["Анализ бизнес-процессов", "Написание сценариев", "Интеграция с CRM", "Тестирование"],
      price: "от 25 000 ₽"
    },
    {
      icon: "Headphones",
      title: "Поддержка и обслуживание",
      description: "Техническая поддержка и доработка ботов",
      features: ["Мониторинг 24/7", "Обновления", "Консультации", "Доработки"],
      price: "от 5 000 ₽/мес"
    }
  ];

  const platforms = [
    { name: "Telegram", icon: "MessageCircle", color: "from-blue-500 to-blue-600" },
    { name: "VKontakte", icon: "Share2", color: "from-indigo-500 to-indigo-600" },
    { name: "WhatsApp", icon: "MessageSquare", color: "from-green-500 to-green-600" },
    { name: "Веб-сайт", icon: "Globe", color: "from-purple-500 to-purple-600" }
  ];

  return (
    <>
      <Helmet>
        <title>Услуги по созданию ИИ-ассистентов | Внедрение за 3 дня | Bot24.pro</title>
        <meta name="description" content="Профессиональная настройка AI-ботов для продаж и поддержки. Работаем с Telegram, VK, WhatsApp. Получите расчет стоимости под ваш проект." />
        <meta property="og:title" content="Услуги по созданию ИИ-ассистентов | Внедрение за 3 дня | Bot24.pro" />
        <meta property="og:description" content="Профессиональная настройка AI-ботов для продаж и поддержки. Работаем с Telegram, VK, WhatsApp. Получите расчет стоимости под ваш проект." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Услуги по созданию ИИ-ассистентов | Внедрение за 3 дня | Bot24.pro" />
        <meta name="twitter:description" content="Профессиональная настройка AI-ботов для продаж и поддержки. Работаем с Telegram, VK, WhatsApp. Получите расчет стоимости под ваш проект." />
        <link rel="canonical" href="https://bot24.pro/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Услуги по созданию
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block mt-2">
                ИИ-ассистентов
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Профессиональная настройка AI-ботов для продаж и поддержки. 
              Работаем с Telegram, VK, WhatsApp. Получите расчет стоимости под ваш проект.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Icon name="Calculator" size={20} className="mr-2" />
                Получить расчет стоимости
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Наши услуги
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Полный спектр услуг по созданию и внедрению ИИ-ассистентов для вашего бизнеса
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4">
                      <Icon name={service.icon as any} size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <Icon name="Check" size={16} className="text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-2xl font-bold text-emerald-400 mb-4">
                      {service.price}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Заказать услугу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Платформы для интеграции
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Создаем ботов для всех популярных платформ и мессенджеров
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-gradient-to-r ${platform.color} p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                    <Icon name={platform.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {platform.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Готовы автоматизировать ваш бизнес?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Получите бесплатную консультацию и расчет стоимости внедрения ИИ-ассистента для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;