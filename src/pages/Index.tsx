import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const fishingSpots = [
    {
      id: 1,
      name: "Озеро Селигер",
      region: "Тверская область",
      rating: 4.8,
      fishTypes: ["Щука", "Окунь", "Судак"],
      reviews: 127,
    },
    {
      id: 2,
      name: "Река Волга",
      region: "Астраханская область",
      rating: 4.9,
      fishTypes: ["Сазан", "Лещ", "Сом"],
      reviews: 243,
    },
    {
      id: 3,
      name: "Ладожское озеро",
      region: "Ленинградская область",
      rating: 4.7,
      fishTypes: ["Форель", "Лосось", "Судак"],
      reviews: 89,
    },
  ];

  const articles = [
    {
      title: "Лучшие приманки для щуки зимой",
      date: "5 дней назад",
      author: "Сергей Рыбаков",
      readTime: "5 мин",
    },
    {
      title: "Секреты ловли на фидер",
      date: "1 неделя назад",
      author: "Анна Петрова",
      readTime: "8 мин",
    },
    {
      title: "Подготовка снастей к сезону",
      date: "2 недели назад",
      author: "Михаил Озеров",
      readTime: "6 мин",
    },
  ];

  const tournaments = [
    {
      name: "Кубок Волги 2025",
      date: "15-17 августа",
      location: "Астрахань",
      prize: "500 000 ₽",
      participants: 156,
    },
    {
      name: "Зимний турнир на Селигере",
      date: "20-22 февраля",
      location: "Осташков",
      prize: "200 000 ₽",
      participants: 89,
    },
  ];

  const faqs = [
    {
      question: "Как выбрать подходящее место для рыбалки?",
      answer:
        "Обратите внимание на отзывы других рыбаков, изучите карты глубин, проверьте прогноз погоды и активности рыбы. Наш сервис поможет найти проверенные места с высокими рейтингами.",
    },
    {
      question: "Какие документы нужны для рыбалки?",
      answer:
        "Для любительской рыбалки в большинстве водоёмов требуется лицензия. Проверьте требования для конкретного региона на официальных сайтах.",
    },
    {
      question: "Как подготовиться к первой рыбалке?",
      answer:
        "Начните с простых снастей, изучите базовые техники, выберите подходящее место для новичков. Рекомендуем сначала порыбачить с опытным наставником.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/img/d6df0ea6-0e9d-4c25-9fc6-1688793bfd4d.jpg')",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Рыболовное Сообщество
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Найдите лучшие места для рыбалки, делитесь опытом и участвуйте в
            турнирах
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg animate-scale-in font-semibold"
          >
            <Icon name="Users" className="mr-2" size={20} />
            Присоединиться к нам
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            О нашем сообществе
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Мы объединяем рыбаков со всей России. Здесь вы найдете карты лучших
            водоёмов с отметками, честные отзывы от опытных рыболовов и всю
            необходимую информацию для успешной рыбалки.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="Map"
                className="mx-auto mb-4 text-blue-600"
                size={48}
              />
              <h3 className="text-xl font-semibold mb-2">Карты водоёмов</h3>
              <p className="text-gray-600">
                Подробные карты с отметками лучших мест
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="MessageCircle"
                className="mx-auto mb-4 text-green-600"
                size={48}
              />
              <h3 className="text-xl font-semibold mb-2">Отзывы рыбаков</h3>
              <p className="text-gray-600">
                Честные отзывы от опытных рыболовов
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Trophy"
                className="mx-auto mb-4 text-yellow-600"
                size={48}
              />
              <h3 className="text-xl font-semibold mb-2">Турниры</h3>
              <p className="text-gray-600">
                Участвуйте в соревнованиях и выигрывайте призы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Fishing Spots */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные места для рыбалки
            </h2>
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg mb-8 relative overflow-hidden"
              style={{
                backgroundImage:
                  "url('/img/289b6a4b-066c-4f49-9b00-9fa8145745bb.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                <div className="text-white text-center">
                  <Icon name="Map" className="mx-auto mb-2" size={48} />
                  <p className="text-lg font-medium">
                    Интерактивная карта водоёмов
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {fishingSpots.map((spot) => (
              <Card key={spot.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{spot.name}</CardTitle>
                      <CardDescription>{spot.region}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="text-yellow-500" size={16} />
                      <span className="text-sm font-medium">{spot.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {spot.fishTypes.map((fish) => (
                      <Badge key={fish} variant="secondary">
                        {fish}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {spot.reviews} отзывов
                    </span>
                    <Button variant="outline" size="sm">
                      <Icon name="MapPin" className="mr-1" size={14} />
                      На карте
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Последние статьи и советы
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription>
                    {article.author} • {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {article.readTime} чтения
                    </span>
                    <Icon
                      name="ArrowRight"
                      className="text-blue-600"
                      size={16}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Предстоящие турниры
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tournaments.map((tournament, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{tournament.name}</CardTitle>
                  <CardDescription className="text-white/80">
                    {tournament.date} • {tournament.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-lg font-semibold">
                        Призовой фонд: {tournament.prize}
                      </p>
                      <p className="text-white/80">
                        {tournament.participants} участников
                      </p>
                    </div>
                    <Icon name="Trophy" className="text-yellow-400" size={32} />
                  </div>
                  <Button variant="secondary" className="w-full">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Есть вопросы или предложения? Мы всегда рады помочь!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="Mail"
                className="mx-auto mb-4 text-blue-600"
                size={32}
              />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@fishingcommunity.ru</p>
            </div>
            <div className="text-center">
              <Icon
                name="Phone"
                className="mx-auto mb-4 text-green-600"
                size={32}
              />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (800) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon
                name="MessageSquare"
                className="mx-auto mb-4 text-purple-600"
                size={32}
              />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-gray-600">@fishingcommunity</p>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Send" className="mr-2" size={16} />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Рыболовное Сообщество. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
