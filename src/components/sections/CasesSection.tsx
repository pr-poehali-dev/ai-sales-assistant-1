import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface CasesSectionProps {
  isVisible: boolean;
  sectionRef: (el: HTMLElement | null) => void;
}

const CasesSection = ({ isVisible, sectionRef }: CasesSectionProps) => {
  const cases = [
    {
      title: "Чат-бот для салона красоты увеличил запись на 40%",
      industry: "Красота и здоровье",
      task: "Автоматизировать прием заявок с Instagram и WhatsApp после закрытия салона.",
      solution: "Внедрили AI-ассистента в Telegram, который отвечает на вопросы про услуги, прайс и записывает клиентов к мастеру.",
      result: "+40% к запросам в нерабочее время, экономия на зарплате менеджера 35 000 руб./мес.",
      icon: "Scissors",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Автосервис сократил время обработки заявок в 3 раза",
      industry: "Автосервис",
      task: "Ускорить обработку заявок на ремонт и диагностику автомобилей.",
      solution: "Создали бота для WhatsApp, который собирает информацию о проблеме, записывает на диагностику и отправляет предварительную смету.",
      result: "Время обработки заявки сократилось с 15 минут до 5 минут, +25% конверсия в запись.",
      icon: "Car",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Интернет-магазин увеличил средний чек на 30%",
      industry: "E-commerce",
      task: "Повысить конверсию и средний чек в онлайн-магазине товаров для дома.",
      solution: "Разработали AI-консультанта для сайта, который помогает с выбором товаров, отвечает на вопросы и предлагает комплементарные товары.",
      result: "Средний чек вырос на 30%, конверсия увеличилась на 18%, ROI бота 400%.",
      icon: "ShoppingCart",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      data-section="cases"
      className={`py-20 px-4 bg-gray-900/50 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-2 sm:px-4 ml-0 sm:ml-auto mr-auto">
        <div className="text-left sm:text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-600/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-emerald-500/30">
            <Icon name="TrendingUp" size={20} className="text-emerald-400" />
            <span className="text-emerald-300 font-medium">Реальные результаты</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Кейсы наших клиентов
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Посмотрите, как ИИ-ассистенты помогают реальным бизнесам увеличивать продажи и экономить время
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => (
            <Card 
              key={index} 
              className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-r ${caseItem.gradient} p-3 rounded-lg transform transition-transform duration-300 hover:scale-110 flex-shrink-0`}>
                    <Icon name={caseItem.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-400 font-medium mb-2 uppercase tracking-wider">
                      {caseItem.industry}
                    </div>
                    <h3 className="font-bold text-white mb-3 text-lg leading-tight">
                      {caseItem.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-300 mb-1">Задача клиента:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {caseItem.task}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300 mb-1">Решение:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {caseItem.solution}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <h4 className="text-sm font-semibold text-emerald-300 mb-2">Результат:</h4>
                    <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-lg p-3 border border-emerald-500/20">
                      <p className="text-emerald-200 text-sm font-medium leading-relaxed">
                        {caseItem.result}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/cases">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Смотреть все кейсы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;