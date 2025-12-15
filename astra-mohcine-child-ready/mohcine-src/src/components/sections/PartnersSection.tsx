import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import PartnersSkeleton from "@/components/skeletons/PartnersSkeleton";
import partner1 from "@/assets/partners/partner-1.webp";
import partner2 from "@/assets/partners/partner-2.webp";
import partner3 from "@/assets/partners/partner-3.webp";
import partner4 from "@/assets/partners/partner-4.webp";
import partner5 from "@/assets/partners/partner-5.webp";
import partner6 from "@/assets/partners/partner-6.webp";
import partner7 from "@/assets/partners/partner-7.webp";
import partner8 from "@/assets/partners/partner-8.webp";
import partner9 from "@/assets/partners/partner-9.webp";
import partner10 from "@/assets/partners/partner-10.webp";
import partner11 from "@/assets/partners/partner-11.webp";
import partner12 from "@/assets/partners/partner-12.webp";
import partner13 from "@/assets/partners/partner-13.webp";
import partner14 from "@/assets/partners/partner-14.webp";
import partner15 from "@/assets/partners/partner-15.webp";
import partner16 from "@/assets/partners/partner-16.webp";
import partner17 from "@/assets/partners/partner-17.webp";
import partner18 from "@/assets/partners/partner-18.webp";
import partner19 from "@/assets/partners/partner-19.webp";
import partner20 from "@/assets/partners/partner-20.webp";
import partner21 from "@/assets/partners/partner-21.webp";
import partner22 from "@/assets/partners/partner-22.webp";
import partner23 from "@/assets/partners/partner-23.webp";
import partner24 from "@/assets/partners/partner-24.webp";
import partner25 from "@/assets/partners/partner-25.webp";
import partner26 from "@/assets/partners/partner-26.webp";
import partner27 from "@/assets/partners/partner-27.webp";
import partner28 from "@/assets/partners/partner-28.webp";
import partner29 from "@/assets/partners/partner-29.webp";
import partner30 from "@/assets/partners/partner-30.webp";

const partners = [
  { id: 1, name: "وزارة الموارد البشرية والتنمية الاجتماعية", logo: partner1 },
  { id: 2, name: "المركز الوطني لتنمية القطاع غير الربحي", logo: partner2 },
  { id: 3, name: "مجلس الجمعيات الأهلية", logo: partner3 },
  { id: 4, name: "مؤسسة الجميح الخيرية", logo: partner4 },
  { id: 5, name: "صندوق دعم الجمعيات", logo: partner5 },
  { id: 6, name: "الراجحي الإنسانية", logo: partner6 },
  { id: 7, name: "طاقات الشباب", logo: partner7 },
  { id: 8, name: "مبادر - جمعية تنمية مهارات الشباب", logo: partner8 },
  { id: 9, name: "جمعية قمم الشبابية", logo: partner9 },
  { id: 10, name: "كفاءات لتنمية المعارف وتطوير المهارات", logo: partner10 },
  { id: 11, name: "السبيعي الخيرية", logo: partner11 },
  { id: 12, name: "مدارس الفرسان العالمية", logo: partner12 },
  { id: 13, name: "مؤسسة سليمان أبانمي الأهلية", logo: partner13 },
  { id: 14, name: "مؤسسة محمد بن عبدالعزيز الجميح الأهلية", logo: partner14 },
  { id: 15, name: "أوقاف الضحيان", logo: partner15 },
  { id: 16, name: "مؤسسة عبداللطيف العيسى الخيرية", logo: partner16 },
  { id: 17, name: "غيث", logo: partner17 },
  { id: 18, name: "الجميح الخيرية", logo: partner18 },
  { id: 19, name: "صندوق أسرة الماجد", logo: partner19 },
  { id: 20, name: "المجلس التخصصي للجمعيات الشبابية", logo: partner20 },
  { id: 21, name: "روح الإبداع للفعاليات الترفيهية", logo: partner21 },
  { id: 22, name: "عجلان وإخوانه", logo: partner22 },
  { id: 23, name: "مامولا", logo: partner23 },
  { id: 24, name: "قيادة - دراسات قياس تمكين", logo: partner24 },
  { id: 25, name: "تاسوما", logo: partner25 },
  { id: 26, name: "شاورما كلاسك", logo: partner26 },
  { id: 27, name: "الشاورما الطازجة", logo: partner27 },
  { id: 28, name: "أحلى الألوان", logo: partner28 },
  { id: 29, name: "جمعية سقيا الماء", logo: partner29 },
  { id: 30, name: "المجلس النجدي", logo: partner30 },
];

const PartnersSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = { mobile: 2, tablet: 3, desktop: 4 };
  
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return itemsPerView.desktop;
    if (window.innerWidth < 640) return itemsPerView.mobile;
    if (window.innerWidth < 1024) return itemsPerView.tablet;
    return itemsPerView.desktop;
  };

  const [visibleItems, setVisibleItems] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const maxIndex = Math.max(0, partners.length - visibleItems);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  if (isLoading) {
    return <PartnersSkeleton />;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted" id="partners">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 flex-wrap">
            <div className="w-12 md:w-16 h-[2px] bg-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-primary">شركاء</span> العطاء
            </h2>
            <div className="w-12 md:w-16 h-[2px] bg-primary" />
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-4">
            نفخر بشراكاتنا المميزة مع مؤسسات رائدة تدعم رؤيتنا في تمكين الشباب
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all -mr-2 md:-mr-4"
            aria-label="السابق"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all -ml-2 md:-ml-4"
            aria-label="التالي"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8 md:mx-14">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="group flex-shrink-0"
                  style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * 16 / visibleItems}px)` }}
                >
                  <div className="aspect-square bg-card rounded-xl md:rounded-2xl border-2 border-border p-3 md:p-4 flex items-center justify-center shadow-sm group-hover:border-primary group-hover:shadow-card transition-all overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center text-xs md:text-sm text-muted-foreground mt-2 md:mt-3 px-1 leading-tight line-clamp-2">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6 flex-wrap">
            {Array.from({ length: Math.ceil(partners.length / visibleItems) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(Math.min(index * visibleItems, maxIndex))}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / visibleItems) === index
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`الانتقال إلى الصفحة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
