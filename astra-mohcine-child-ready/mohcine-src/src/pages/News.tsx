import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import { getMohcineData } from "@/lib/content";

const defaultNews = [
  {
    id: 1,
    image: news1,
    date: "15 نوفمبر 2024",
    title: "احتفال الجمعية باليوم الوطني",
    excerpt: "أقامت الجمعية فعاليات متنوعة بمناسبة اليوم الوطني السعودي تضمنت مسابقات قرآنية وأنشطة ثقافية متعددة شارك فيها عدد كبير من الطلاب والطالبات.",
    category: "فعاليات",
  },
  {
    id: 2,
    image: news2,
    date: "10 نوفمبر 2024",
    title: "ألبوم صور افتتاح المقر الجديد",
    excerpt: "تم افتتاح المقر الجديد للجمعية في حي الملك فهد بحضور عدد من المسؤولين والداعمين والمهتمين بالشأن القرآني.",
    category: "أخبار",
  },
  {
    id: 3,
    image: news3,
    date: "5 نوفمبر 2024",
    title: "ألبوم صور معرض الكتاب 2024",
    excerpt: "شاركت الجمعية في معرض الرياض الدولي للكتاب بجناح متميز عرضت فيه برامجها وخدماتها القرآنية.",
    category: "معارض",
  },
  {
    id: 4,
    image: news1,
    date: "1 نوفمبر 2024",
    title: "تخريج دفعة جديدة من الحفاظ",
    excerpt: "أقامت الجمعية حفل تخريج الدفعة الخامسة عشرة من حفاظ القرآن الكريم وسط حضور أولياء الأمور والمشرفين.",
    category: "تخريج",
  },
  {
    id: 5,
    image: news2,
    date: "25 أكتوبر 2024",
    title: "دورة تدريبية للمعلمين",
    excerpt: "نظمت الجمعية دورة تدريبية مكثفة لمعلمي الحلقات القرآنية في مجال أساليب التدريس الحديثة.",
    category: "تدريب",
  },
  {
    id: 6,
    image: news3,
    date: "20 أكتوبر 2024",
    title: "توقيع شراكة استراتيجية",
    excerpt: "وقعت الجمعية اتفاقية شراكة استراتيجية مع جهات حكومية وخاصة لدعم برامج التحفيظ.",
    category: "شراكات",
  },
];

const NewsPage = () => {
  const dataNews = getMohcineData().news;
  const allNews =
    dataNews && dataNews.length
      ? dataNews.map((item, index) => ({
          ...(defaultNews[index % defaultNews.length] || defaultNews[0]),
          ...item,
          image: item.image || defaultNews[index % defaultNews.length].image,
        }))
      : defaultNews;

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-cream" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-2 border-cream" />
          </div>
          <div className="container-custom relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">أخبار الجمعية</h1>
            <p className="text-cream/80 text-lg">آخر الأخبار والفعاليات والمستجدات</p>
          </div>
        </section>

        {/* News Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                تحميل المزيد
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default NewsPage;
