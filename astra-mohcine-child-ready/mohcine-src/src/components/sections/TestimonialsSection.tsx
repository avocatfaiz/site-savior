import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Quote, Star } from "lucide-react";
import TestimonialsSkeleton from "@/components/skeletons/TestimonialsSkeleton";

const testimonials = [
  {
    id: 1,
    name: "محمد العتيبي",
    role: "متطوع في برنامج روح القيروان",
    quote: "تجربتي مع جمعية القيروان كانت ملهمة بكل ما تحمله الكلمة من معنى. البيئة التي توفرها الجمعية تساعد الشباب على اكتشاف إمكانياتهم وتطوير مهاراتهم القيادية.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة الدوسري",
    role: "مستفيدة من برنامج مسرعات القيادة",
    quote: "برنامج مسرعات القيادة غيّر نظرتي لنفسي وقدراتي. الآن أستطيع قيادة المشاريع والمبادرات بثقة أكبر. شكراً لجمعية القيروان على هذه الفرصة الرائعة.",
    rating: 5,
  },
  {
    id: 3,
    name: "عبدالله الشمري",
    role: "متطوع سابق",
    quote: "العمل مع فريق جمعية القيروان علمني الكثير عن العمل الجماعي والتطوعي. أنصح كل شاب يريد تطوير نفسه بالانضمام لهذه الجمعية المتميزة.",
    rating: 5,
  },
  {
    id: 4,
    name: "نورة القحطاني",
    role: "مشاركة في فعالية فرحة عيد",
    quote: "فعالية فرحة عيد كانت تجربة رائعة جمعتنا بالمجتمع. سعيدة جداً بالمشاركة ورؤية البسمة على وجوه الأطفال. جمعية القيروان تقوم بعمل عظيم.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (isLoading) {
    return <TestimonialsSkeleton />;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 text-cream/5 hidden md:block">
        <Quote className="w-32 md:w-40 h-32 md:h-40" />
      </div>
      <div className="absolute bottom-10 left-10 text-cream/5 hidden md:block">
        <Quote className="w-24 md:w-32 h-24 md:h-32 rotate-180" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cream mb-4">
            آراء المستفيدين والمتطوعين
          </h2>
          <div className="w-20 md:w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-cream/80 mt-4 text-sm md:text-base max-w-2xl mx-auto px-4">
            نفخر بثقة المستفيدين والمتطوعين الذين شاركوا معنا رحلة التمكين والتطوير
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="bg-cream/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-secondary mx-auto mb-4 md:mb-6" />
                
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4 md:mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-secondary" />
                  ))}
                </div>
                
                <p className="text-cream text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                  {testimonials[current].quote}
                </p>
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-teal-dark font-bold text-lg md:text-xl">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-cream text-sm md:text-base">{testimonials[current].name}</p>
                    <p className="text-cream/70 text-xs md:text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-all"
              aria-label="السابق"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "bg-secondary w-6" : "bg-cream/40 w-2"
                  }`}
                  aria-label={`انتقل للشهادة ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-all"
              aria-label="التالي"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
