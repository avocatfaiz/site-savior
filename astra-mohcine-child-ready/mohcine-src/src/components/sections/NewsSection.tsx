import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsGridSkeleton } from "@/components/skeletons";
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
    excerpt: "أقامت الجمعية فعاليات متنوعة بمناسبة اليوم الوطني السعودي تضمنت مسابقات قرآنية وأنشطة ثقافية.",
    category: "فعاليات",
  },
  {
    id: 2,
    image: news2,
    date: "10 نوفمبر 2024",
    title: "ألبوم صور افتتاح المقر الجديد",
    excerpt: "تم افتتاح المقر الجديد للجمعية في حي الملك فهد بحضور عدد من المسؤولين والداعمين.",
    category: "أخبار",
  },
  {
    id: 3,
    image: news3,
    date: "5 نوفمبر 2024",
    title: "ألبوم صور معرض الكتاب 2024",
    excerpt: "شاركت الجمعية في معرض الرياض الدولي للكتاب بجناح متميز عرضت فيه برامجها وخدماتها.",
    category: "معارض",
  },
];

const NewsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dataNews = getMohcineData().news;
  const newsItems =
    dataNews && dataNews.length
      ? dataNews.map((item, index) => ({
          ...(defaultNews[index % defaultNews.length] || defaultNews[0]),
          ...item,
          image: item.image || defaultNews[index % defaultNews.length].image,
        }))
      : defaultNews;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-background" id="news">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            أخبار الجمعية
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        {isLoading ? (
          <NewsGridSkeleton count={3} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift group"
              >
                <div className="relative h-48 overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
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
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <a href={item.link || "#"}>
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <a href="/news">عرض جميع الأخبار</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
