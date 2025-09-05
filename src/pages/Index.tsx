import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEffect, useState, useRef } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Intersection Observer для анимаций при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязательный';
    } else {
      // Простая проверка: должен содержать минимум 10 цифр
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Телефон должен содержать минимум 10 цифр';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Создаём ссылку для Telegram с данными формы
      const telegramMessage = `Новая заявка на ИИ-ассистента!\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}${formData.message ? `\nСообщение: ${formData.message}` : ''}`;
      const telegramUrl = `https://t.me/cocozzAAA?text=${encodeURIComponent(telegramMessage)}`;
      
      window.open(telegramUrl, '_blank');
      alert('Спасибо! Ваша заявка отправляется в Telegram.');
      setFormData({ name: '', phone: '', message: '' });
    }
  };

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
      <section 
        ref={el => sectionRefs.current[0] = el}
        data-section="hero"
        className={`relative overflow-hidden py-20 px-4 transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg hover-scale"
                onClick={() => window.open('https://t.me/cocozzAAA', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать ИИ-ассистента
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg hover-scale"
                onClick={() => {
                  const demoSection = document.querySelector('[data-section="demo"]');
                  if (demoSection) {
                    demoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        data-section="benefits"
        className={`py-20 px-4 bg-gray-900/50 transition-all duration-1000 delay-200 ${
          isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Преимущества ИИ-ассистента
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`bg-gray-800/50 border-gray-700 hover-scale transition-all duration-500 hover:bg-gray-800/70 ${
                  isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
      <section 
        ref={el => sectionRefs.current[2] = el}
        data-section="audience"
        className={`py-20 px-4 transition-all duration-1000 delay-300 ${
          isVisible.audience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Для кого это подходит
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {businesses.map((business, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 transition-all duration-500 hover:bg-gray-800/50 hover:border-emerald-500/50 ${
                  isVisible.audience ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
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
      <section 
        ref={el => sectionRefs.current[3] = el}
        data-section="features"
        className={`py-20 px-4 bg-gray-900/50 transition-all duration-1000 delay-400 ${
          isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Что вы получите
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700 transition-all duration-500 hover:bg-gray-800/70 hover:border-pink-500/50 ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

      {/* Demo Bots Section */}
      <section 
        ref={el => sectionRefs.current[4] = el}
        data-section="demo"
        className={`py-20 px-4 transition-all duration-1000 delay-500 ${
          isVisible.demo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Примеры чат-ботов
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <Card className={`bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700 cursor-pointer hover-scale transition-all duration-500 ${
                  isVisible.demo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
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
                  "Отвечает на частые вопросы о услугах",
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
                  isVisible.demo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
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

      {/* Contact Section */}
      <section 
        ref={el => sectionRefs.current[5] = el}
        data-section="contact"
        className={`py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 transition-all duration-1000 delay-600 ${
          isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Готовы автоматизировать продажи?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12">
              Свяжитесь с нами и получите персональную консультацию
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Оставьте заявку
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                      placeholder="Ваше имя"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                      }}
                      className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                      placeholder="+7 999 123 45 67 или 8 999 123 45 67"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 resize-none"
                      rows={4}
                      placeholder="Опишите ваш бизнес и задачи..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg hover-scale"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Свяжитесь с нами
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white hover-scale"
                    onClick={() => window.open('https://t.me/cocozzAAA', '_blank')}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram: @cocozzAAA
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full lg:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover-scale"
                    onClick={() => window.open('https://t.me/iidlyabiz', '_blank')}
                  >
                    <Icon name="Users" size={20} className="mr-2" />
                    Канал: ИИ для бизнеса
                  </Button>
                </div>
              </div>
              
              <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Gift" size={20} className="text-pink-400" />
                  Бонусы при заказе:
                </h3>
                <div className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Бесплатный аудит вашей воронки</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span>3 шаблона под разные ниши</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                    <span>Персональная настройка под вашу нишу</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;