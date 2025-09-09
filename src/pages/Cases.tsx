import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/sections/Footer';

const Cases = () => {
  const cases = [
    {
      title: "Чат-бот для салона красоты увеличил запись на 40%",
      industry: "Красота и здоровье",
      client: "Салон красоты «Элегант»",
      task: "Автоматизировать прием заявок с Instagram и WhatsApp после закрытия салона.",
      solution: "Внедрили AI-ассистента в Telegram, который отвечает на вопросы про услуги, прайс и записывает клиентов к мастеру.",
      result: "+40% к запросам в нерабочее время, экономия на зарплате менеджера 35 000 руб./мес.",
      metrics: [
        { label: "Увеличение заявок", value: "+40%" },
        { label: "Экономия в месяц", value: "35 000 ₽" },
        { label: "Время внедрения", value: "3 дня" }
      ],
      icon: "Scissors",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Автосервис сократил время обработки заявок в 3 раза",
      industry: "Автосервис",
      client: "СТО «АвтоМастер»",
      task: "Ускорить обработку заявок на ремонт и диагностику автомобилей.",
      solution: "Создали бота для WhatsApp, который собирает информацию о проблеме, записывает на диагностику и отправляет предварительную смету.",
      result: "Время обработки заявки сократилось с 15 минут до 5 минут, +25% конверсия в запись.",
      metrics: [
        { label: "Ускорение обработки", value: "в 3 раза" },
        { label: "Рост конверсии", value: "+25%" },
        { label: "Экономия времени", value: "10 мин/заявка" }
      ],
      icon: "Car",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Интернет-магазин увеличил средний чек на 30%",
      industry: "E-commerce",
      client: "Интернет-магазин «ДомУют»",
      task: "Повысить конверсию и средний чек в онлайн-магазине товаров для дома.",
      solution: "Разработали AI-консультанта для сайта, который помогает с выбором товаров, отвечает на вопросы и предлагает комплементарные товары.",
      result: "Средний чек вырос на 30%, конверсия увеличилась на 18%, ROI бота 400%.",
      metrics: [
        { label: "Рост среднего чека", value: "+30%" },
        { label: "Рост конверсии", value: "+18%" },
        { label: "ROI бота", value: "400%" }
      ],
      icon: "ShoppingCart",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Образовательный центр автоматизировал запись на курсы",
      industry: "Образование",
      client: "Центр «ПрофРост»",
      task: "Автоматизировать консультации и запись на курсы профессиональной переподготовки.",
      solution: "Внедрили бота в VK и Telegram, который консультирует по программам, помогает выбрать курс и записывает на обучение.",
      result: "Заявки выросли на 60%, время менеджера освободилось на 4 часа в день.",
      metrics: [
        { label: "Рост заявок", value: "+60%" },
        { label: "Экономия времени", value: "4 ч/день" },
        { label: "Конверсия в оплату", value: "+35%" }
      ],
      icon: "GraduationCap",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Стоматологическая клиника увеличила записи на 45%",
      industry: "Медицина",
      client: "Клиника «СтомаПлюс»",
      task: "Упростить запись к врачу и автоматизировать напоминания о приемах.",
      solution: "Создали умного ассистента, который записывает пациентов, отправляет напоминания и отвечает на частые вопросы о процедурах.",
      result: "Записи выросли на 45%, количество пропусков сократилось на 70%.",
      metrics: [
        { label: "Рост записей", value: "+45%" },
        { label: "Снижение пропусков", value: "-70%" },
        { label: "Экономия на администраторе", value: "40 000 ₽/мес" }
      ],
      icon: "Heart",
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "Ресторан увеличил заказы доставки на 50%",
      industry: "Ресторанный бизнес",
      client: "Ресторан «Вкусно&Точка»",
      task: "Увеличить продажи доставки и упростить процесс заказа.",
      solution: "Разработали бота для приема заказов с интеграцией в кухню и систему доставки.",
      result: "Заказы доставки выросли на 50%, средний чек увеличился на 20%.",
      metrics: [
        { label: "Рост заказов доставки", value: "+50%" },
        { label: "Рост среднего чека", value: "+20%" },
        { label: "Скорость обработки", value: "в 2 раза быстрее" }
      ],
      icon: "UtensilsCrossed",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Кейсы внедрения ИИ-ассистентов | Реальные результаты клиентов | Bot24.pro</title>
        <meta name="description" content="Реальные кейсы внедрения ИИ-ассистентов в различные отрасли. Посмотрите, как наши клиенты увеличивают продажи и автоматизируют бизнес-процессы." />
        <meta name="keywords" content="кейсы чат-ботов, результаты внедрения ИИ, примеры автоматизации бизнеса, успешные проекты" />
        <link rel="canonical" href="https://bot24.pro/cases" />
        <meta property="og:title" content="Кейсы внедрения ИИ-ассистентов | Реальные результаты клиентов | Bot24.pro" />
        <meta property="og:description" content="Реальные кейсы внедрения ИИ-ассистентов в различные отрасли. Посмотрите, как наши клиенты увеличивают продажи и автоматизируют бизнес-процессы." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Навигация */}
        <div className="container mx-auto px-4 pt-8">
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-emerald-300">Кейсы</span>
            </div>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-600/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-emerald-500/30">
              <Icon name="TrendingUp" size={20} className="text-emerald-400" />
              <span className="text-emerald-300 font-medium">Доказанные результаты</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Кейсы наших
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-green-500 bg-clip-text text-transparent block mt-2">
                клиентов
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Посмотрите, как ИИ-ассистенты помогают реальным бизнесам различных отраслей 
              увеличивать продажи, экономить время и автоматизировать процессы
            </p>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`bg-gradient-to-r ${caseItem.gradient} p-4 rounded-xl transform transition-transform duration-300 hover:scale-110 flex-shrink-0`}>
                        <Icon name={caseItem.icon as any} size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-emerald-400 font-medium mb-2 uppercase tracking-wider">
                          {caseItem.industry}
                        </div>
                        <h2 className="font-bold text-white mb-2 text-xl leading-tight">
                          {caseItem.title}
                        </h2>
                        <div className="text-sm text-gray-400 mb-4">
                          Клиент: <span className="text-gray-300">{caseItem.client}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-blue-300 mb-2 flex items-center gap-2">
                          <Icon name="Target" size={16} />
                          Задача клиента:
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {caseItem.task}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-2">
                          <Icon name="Lightbulb" size={16} />
                          Решение:
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {caseItem.solution}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-emerald-300 mb-3 flex items-center gap-2">
                          <Icon name="BarChart3" size={16} />
                          Результат:
                        </h3>
                        
                        <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-lg p-4 border border-emerald-500/20 mb-4">
                          <p className="text-emerald-200 leading-relaxed font-medium">
                            {caseItem.result}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3">
                          {caseItem.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center bg-gray-900/50 rounded-lg p-3 border border-gray-700/50">
                              <div className="text-emerald-400 font-bold text-lg">
                                {metric.value}
                              </div>
                              <div className="text-gray-400 text-xs mt-1">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Хотите такой же результат для своего бизнеса?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Получите бесплатную консультацию и персональный план внедрения 
              ИИ-ассистента в ваш бизнес
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/cocozzAAA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </a>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  На главную
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Cases;