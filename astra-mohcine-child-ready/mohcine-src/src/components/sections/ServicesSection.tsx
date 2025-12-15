import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesSkeleton from "@/components/skeletons/ServicesSkeleton";
import { getMohcineData, pick, ServiceItem } from "@/lib/content";

const defaultServices = [
  {
    icon: BookOpen,
    title: "دعم المحتاجين مادياً",
    description: "نقدم الدعم المادي للمحتاجين من خلال برامج الزكاة والصدقات وكفالة الأيتام والأسر المحتاجة.",
    cta: "اقرأ المزيد",
  },
  {
    icon: Users,
    title: "تعليم دراسة وتلاوة القرآن الكريم",
    description: "برامج متكاملة لتعليم تلاوة القرآن الكريم وتجويده من خلال حلقات تحفيظ متخصصة ومعلمين مؤهلين.",
    cta: "اقرأ المزيد",
  },
  {
    icon: Heart,
    title: "حملات تبرع دائمة للمحتاجين",
    description: "حملات تبرع مستمرة لدعم المحتاجين والمساهمة في مشاريع الخير والتنمية المجتمعية.",
    cta: "اقرأ المزيد",
  },
];

const iconMap: Record<string, any> = {
  "book-open": BookOpen,
  users: Users,
  heart: Heart,
};

const mapService = (service: ServiceItem, fallback: typeof defaultServices[number]) => {
  const iconKey = typeof service.icon === "string" ? service.icon.toLowerCase() : "";
  const IconComponent = service.icon && typeof service.icon !== "string" ? service.icon : iconMap[iconKey] || fallback.icon;

  return {
    ...fallback,
    ...service,
    icon: IconComponent,
  };
};

const ServicesSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dataServices = getMohcineData().services;
  const services =
    dataServices && dataServices.length
      ? dataServices.map((item, index) => mapService(item, defaultServices[index] || defaultServices[0]))
      : defaultServices;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ServicesSkeleton />;
  }

  return (
    <section className="section-padding bg-muted" id="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدمات الجمعية
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = pick(service.icon as any, BookOpen);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card hover-lift group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-cream transition-all">
                  <Icon className="w-8 h-8 text-primary group-hover:text-cream" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="outline" size="sm">
                  {service.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
