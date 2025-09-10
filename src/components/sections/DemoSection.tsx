import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface DemoSectionProps {
  isVisible: boolean;
  sectionRef: (el: HTMLElement | null) => void;
}

const DemoModal = ({ title, botName, description, features }: {
  title: string;
  botName: string;
  description: string;
  features: string[];
}) => (
  <DialogContent className="max-w-2xl bg-gray-900 border-gray-700">
    <DialogHeader>
      <DialogTitle className="text-2xl text-white">{title}</DialogTitle>
      <DialogDescription className="text-gray-400">
        {description}
      </DialogDescription>
    </DialogHeader>
    
    <div className="space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h4 className="text-white font-semibold mb-3">Возможности бота:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <Icon name="CheckCircle" size={16} className="text-green-400 mt-1 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-700">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <Icon name="MessageSquare" size={24} className="text-white" />
          </div>
          <div>
            <h5 className="text-white font-semibold">Демонстрация диалога</h5>
            <p className="text-blue-300 text-sm">Пример общения с ботом</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-gray-700 p-3 rounded-lg">
            <div className="text-gray-400 text-xs mb-1">Клиент:</div>
            <div className="text-white">Привет! Расскажите о ваших услугах</div>
          </div>
          <div className="bg-blue-900/50 p-3 rounded-lg">
            <div className="text-blue-300 text-xs mb-1">@{botName}:</div>
            <div className="text-white">Здравствуйте! 👋 Рад вас видеть! Я помогу вам с выбором наших услуг. У нас есть несколько популярных направлений...</div>
          </div>
        </div>
      </div>
      
      <Button 
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        onClick={() => window.open(`https://t.me/${botName}`, '_blank')}
      >
        <Icon name="ExternalLink" size={16} className="mr-2" />
        Перейти к боту в Telegram
      </Button>
    </div>
  </DialogContent>
);

const DemoSection = ({ isVisible, sectionRef }: DemoSectionProps) => {
  return (
    <section 
      ref={sectionRef}
      data-section="demo"
      className={`py-20 px-4 transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-4xl px-2 sm:px-4 ml-0 sm:ml-auto mr-auto">
        <h2 className="text-4xl font-bold text-left sm:text-center text-white mb-16">
          Примеры чат-ботов
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <Card className={`bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700 cursor-pointer hover-scale transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon name="Bot" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">@pluchki_bot</h3>
                  <p className="text-blue-300 mb-4">Бот для прогрева аудитории</p>
                  <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-800">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть демо
                  </Button>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DemoModal 
              title="Бот для прогрева @pluchki_bot"
              botName="pluchki_bot"
              description="Прогревает подписчиков, рассказывает о пользе услуг и подготавливает к покупке"
              features={[
                "Отвечает на частые вопросы об услугах",
                "Рассказывает о преимуществах вашего бизнеса",
                "Подготавливает клиентов к покупке",
                "Собирает контактные данные",
                "Передаёт горячие лиды вам"
              ]}
            />
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Card className={`bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-700 cursor-pointer hover-scale transition-all duration-500 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon name="ShoppingCart" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">@pocovorimzzzz_bot</h3>
                  <p className="text-purple-300 mb-4">Бот для продаж</p>
                  <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-800">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть демо
                  </Button>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DemoModal 
              title="Бот для продаж @pocovorimzzzz_bot"
              botName="pocovorimzzzz_bot"
              description="Продаёт услуги, обрабатывает заявки и закрывает сделки"
              features={[
                "Проводит полную консультацию",
                "Подбирает подходящие услуги",
                "Считает стоимость и сроки",
                "Оформляет заказ и принимает оплату",
                "Отправляет уведомления менеджерам"
              ]}
            />
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;