import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Calendar } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getMohcineData, pick } from "@/lib/content";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const defaultAbout = {
  origin:
    "جمعية القيروان لتنمية الشباب هي جمعية أهلية سعودية تأسست بموجب ترخيص من وزارة الموارد البشرية والتنمية الاجتماعية. تهدف الجمعية إلى تمكين الشباب وتطوير قدراتهم من خلال برامج تنموية متميزة تساهم في بناء جيل قادر على المشاركة الفاعلة في تحقيق رؤية المملكة 2030.",
  vision: "شباب مُمَكّن في بيئة مُلهمِة",
  mission:
    "تمكين الشباب وتطوير قدراتهم من خلال برامج تنموية متميزة وشراكات فاعلة تساهم في بناء جيل قادر على المشاركة الفاعلة في تحقيق رؤية المملكة 2030.",
  goals: [
    "تمكين الشباب وتطوير قدراتهم",
    "توفير بيئة ملهمة ومحفزة للإبداع",
    "بناء شراكات فاعلة مع القطاعات المختلفة",
    "تنفيذ برامج تنموية متميزة",
    "المساهمة في تحقيق رؤية 2030",
    "تعزيز روح المسؤولية المجتمعية",
  ],
  timeline: [
    {
      year: "1443هـ",
      title: "التأسيس",
      description: "تأسست جمعية القيروان لتنمية الشباب بموجب ترخيص وزارة الموارد البشرية",
    },
    {
      year: "1444هـ",
      title: "الانطلاق",
      description: "إطلاق أولى البرامج التنموية للشباب",
    },
    {
      year: "1445هـ",
      title: "التوسع",
      description: "زيادة عدد المستفيدين وتوسيع نطاق البرامج",
    },
    {
      year: "1446هـ",
      title: "النمو",
      description: "تحقيق شراكات استراتيجية مع جهات رائدة",
    },
  ],
};

const AboutPage = () => {
  const location = useLocation();
  const data = getMohcineData().about || {};

  const origin = pick(data.origin, defaultAbout.origin);
  const vision = pick(data.vision, defaultAbout.vision);
  const mission = pick(data.mission, defaultAbout.mission);
  const goals = data.goals && data.goals.length ? data.goals : defaultAbout.goals;
  const timeline = data.timeline && data.timeline.length ? data.timeline : defaultAbout.timeline;

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-cream" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-2 border-cream" />
          </div>
          <div className="container-custom relative text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-cream mb-4">عن الجمعية</h1>
            <p className="text-cream/80 text-base md:text-lg">
              نمكّن الشباب ونبني بيئة ملهمة عبر شراكات وبرامج نوعية
            </p>
          </div>
        </section>

        {/* About Content */}
        <section id="origin" className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">من نحن</h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{origin}</p>
            </div>

            {/* Vision & Mission Cards */}
            <div id="vision" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center mb-4 md:mb-6">
                  <Eye className="w-7 h-7 md:w-8 md:h-8 text-cream" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">الرؤية</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{vision}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-secondary flex items-center justify-center mb-4 md:mb-6">
                  <Target className="w-7 h-7 md:w-8 md:h-8 text-teal-dark" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">الرسالة</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{mission}</p>
              </motion.div>
            </div>

            {/* Goals */}
            <div id="goals" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-10">
                أهداف الجمعية
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {goals.map((goal, index) => (
                  <motion.div
                    key={`${goal}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Lightbulb className="w-5 h-5 text-cream" />
                    </div>
                    <span className="text-foreground font-medium">{goal}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-foreground text-center mb-10">المسار الزمني</h2>
              <div className="max-w-3xl mx-auto">
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-cream" />
                      </div>
                      {index < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                    </div>
                    <div className="pb-8">
                      <span className="text-secondary font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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

export default AboutPage;
