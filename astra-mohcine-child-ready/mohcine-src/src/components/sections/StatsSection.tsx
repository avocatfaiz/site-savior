import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Users, Heart, MapPin } from "lucide-react";
import StatsSkeleton from "@/components/skeletons/StatsSkeleton";
import { getMohcineData } from "@/lib/content";

const defaultStats = [
  { icon: Rocket, value: 7, label: "مشاريع", suffix: "" },
  { icon: Users, value: 2724, label: "مستفيد", suffix: "" },
  { icon: Heart, value: 84, label: "متطوع", suffix: "" },
  { icon: MapPin, value: 10, label: "زيارات", suffix: "" },
];

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter = ({ end, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US")}
    </span>
  );
};

const StatsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = getMohcineData();
  const stats =
    data.stats && data.stats.length
      ? data.stats.map((stat, index) => ({
          ...(defaultStats[index] || defaultStats[0]),
          ...stat,
        }))
      : defaultStats;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <StatsSkeleton />;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 flex-wrap">
            <div className="w-12 md:w-16 h-[2px] bg-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-primary">إنجازاتنا</span> بالأرقام
            </h2>
            <div className="w-12 md:w-16 h-[2px] bg-primary" />
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-4">
            تعرف على الأرقام والإحصائيات التي حققناها
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-card border border-border"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">
                <Counter end={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
