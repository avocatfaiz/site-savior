import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgramsSkeleton from "@/components/skeletons/ProgramsSkeleton";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import quranHero from "@/assets/quran-hero.jpg";
import mosqueInterior from "@/assets/mosque-interior.jpg";
import heroPattern from "@/assets/hero-pattern.jpg";
import { getMohcineData } from "@/lib/content";
import { useNavigate } from "react-router-dom";

const defaultPrograms = [
  {
    id: 1,
    image: news1,
    title: "روح القيروان",
    description: "برنامج يهدف إلى تعزيز الهوية الوطنية والانتماء للمجتمع من خلال أنشطة ثقافية وتوعوية متنوعة تستهدف الشباب في مختلف الأعمار.",
    objectives: [
      "تعزيز الهوية الوطنية لدى الشباب",
      "تنمية روح الانتماء للمجتمع",
      "تقديم أنشطة ثقافية متنوعة",
      "بناء جيل واعي ومنتمي"
    ],
    beneficiaries: "500+",
    duration: "على مدار العام",
    location: "حي القيروان - الرياض",
  },
  {
    id: 2,
    image: news2,
    title: "مسرعات القيادة",
    description: "برنامج تدريبي مكثف يهدف إلى تطوير المهارات القيادية للشباب وتأهيلهم لقيادة المبادرات المجتمعية والمشاريع التطوعية.",
    objectives: [
      "تطوير المهارات القيادية",
      "التدريب على إدارة المشاريع",
      "بناء فرق العمل الفعالة",
      "تأهيل قادة المستقبل"
    ],
    beneficiaries: "200+",
    duration: "3 أشهر",
    location: "مقر الجمعية",
  },
  {
    id: 3,
    image: news3,
    title: "ديوانية الشيخ محمد المهنا",
    description: "ملتقى أسبوعي يجمع الشباب مع الخبراء والمختصين في مختلف المجالات لتبادل الخبرات والمعرفة وبناء العلاقات المهنية.",
    objectives: [
      "تبادل الخبرات والمعرفة",
      "بناء شبكة علاقات مهنية",
      "الاستفادة من خبرات الكبار",
      "تعزيز التواصل بين الأجيال"
    ],
    beneficiaries: "300+",
    duration: "أسبوعياً",
    location: "ديوانية الشيخ محمد المهنا",
  },
  {
    id: 4,
    image: quranHero,
    title: "مرساة",
    description: "برنامج تعليمي متكامل يهدف إلى تعليم القرآن الكريم وتحفيظه للشباب بأساليب تعليمية حديثة ومتطورة.",
    objectives: [
      "تعليم القرآن الكريم",
      "تحفيظ القرآن بأساليب حديثة",
      "تعزيز الارتباط بكتاب الله",
      "تخريج حفظة متقنين"
    ],
    beneficiaries: "400+",
    duration: "فصل دراسي كامل",
    location: "مقر الجمعية",
  },
  {
    id: 5,
    image: mosqueInterior,
    title: "فرحة عيد",
    description: "مبادرة موسمية لإدخال الفرحة على قلوب الأطفال والأسر المحتاجة في مناسبات الأعياد من خلال الهدايا والفعاليات الترفيهية.",
    objectives: [
      "إدخال الفرحة على الأسر المحتاجة",
      "توزيع الهدايا على الأطفال",
      "تنظيم فعاليات ترفيهية",
      "تعزيز روح التكافل"
    ],
    beneficiaries: "1000+",
    duration: "موسم الأعياد",
    location: "حي القيروان والأحياء المجاورة",
  },
  {
    id: 6,
    image: heroPattern,
    title: "نادي القيروان الموسمي",
    description: "برنامج صيفي شامل يقدم أنشطة تعليمية وترفيهية ورياضية متنوعة للشباب خلال الإجازة الصيفية.",
    objectives: [
      "استثمار أوقات الفراغ",
      "تقديم أنشطة تعليمية متنوعة",
      "تنمية المواهب والمهارات",
      "بناء صداقات إيجابية"
    ],
    beneficiaries: "350+",
    duration: "الإجازة الصيفية",
    location: "مقر الجمعية",
  },
];

interface Program {
  id: number;
  image: string;
  title: string;
  description: string;
  objectives: string[];
  beneficiaries: string;
  duration: string;
  location: string;
}

const ProgramsSection = () => {
  const navigate = useNavigate();
  const dataPrograms = getMohcineData().programs;
  const programs =
    dataPrograms && dataPrograms.length
      ? dataPrograms.map((program, index) => ({
          ...(defaultPrograms[index] || defaultPrograms[0]),
          ...program,
          objectives:
            program.objectives && program.objectives.length
              ? program.objectives
              : defaultPrograms[index]?.objectives || [],
        }))
      : defaultPrograms;
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProgramsSkeleton />;
  }

  return (
    <>
      <section className="section-padding bg-background" id="programs">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                <span className="text-primary">برامجنا</span> ومشاريعنا
              </h2>
              <div className="w-16 h-[2px] bg-primary" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programs.map((program, index) => (
              <motion.button
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card hover-lift text-right"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <ArrowLeft className="w-5 h-5 text-teal-dark" />
                  </div>
                  <h3 className="text-cream text-center font-semibold text-sm">
                    {program.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-48 md:h-64">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/40 to-transparent" />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-background/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 right-4 left-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedProgram.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProgram.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-lg font-bold text-foreground">{selectedProgram.beneficiaries}</p>
                    <p className="text-xs text-muted-foreground">مستفيد</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-bold text-foreground">{selectedProgram.duration}</p>
                    <p className="text-xs text-muted-foreground">المدة</p>
                  </div>
                  <div className="bg-muted rounded-xl p-4 text-center">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-bold text-foreground leading-tight">{selectedProgram.location}</p>
                    <p className="text-xs text-muted-foreground">الموقع</p>
                  </div>
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">أهداف البرنامج</h3>
                  <ul className="space-y-2">
                    {selectedProgram.objectives.map((objective, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button
                    variant="gold"
                    className="flex-1"
                    type="button"
                    onClick={() => {
                      setSelectedProgram(null);
                      navigate("/volunteer");
                    }}
                  >
                    سجل الآن
                  </Button>
                  <Button variant="outline" type="button" onClick={() => setSelectedProgram(null)}>
                    إغلاق
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProgramsSection;
