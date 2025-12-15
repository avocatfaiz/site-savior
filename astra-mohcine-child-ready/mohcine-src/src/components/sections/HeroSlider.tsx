import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import quranHero from "@/assets/quran-hero.jpg";
import mosqueInterior from "@/assets/mosque-interior.jpg";
import heroPattern from "@/assets/hero-pattern.jpg";
import readingHero from "@/assets/reading-hero.jpg";
import { getMohcineData, pick } from "@/lib/content";

const slides = [
  {
    id: 1,
    image: quranHero,
    title: "القيروان بداية واعدة",
  },
  {
    id: 2,
    image: mosqueInterior,
    title: "القيروان بداية واعدة",
  },
  {
    id: 3,
    image: heroPattern,
    title: "القيروان بداية واعدة",
  },
  {
    id: 4,
    image: readingHero,
    title: "القيروان بداية واعدة",
  },
];

const HeroSlider = () => {
  const data = getMohcineData();
  const dataSlides = data.heroSlides;
  const mergedSlides = slides.map((slide, index) => ({
    ...slide,
    title: pick(dataSlides?.[index]?.title, slide.title),
    image: pick(dataSlides?.[index]?.image, slide.image),
  }));

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mergedSlides[currentSlide].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/80 via-teal-dark/50 to-teal-dark/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container-custom flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
              {mergedSlides[currentSlide].title}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm flex items-center justify-center text-cream transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur-sm flex items-center justify-center text-cream transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {mergedSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-cream/40 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
