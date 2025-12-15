import { motion } from "framer-motion";
import { Gift, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const donationCards = [
  {
    icon: Gift,
    title: "دعم المحتاجين مادياً",
    description: "ساهم في دعم الأسر المحتاجة وكفالة الأيتام من خلال برامجنا الخيرية المتنوعة.",
    cta: "تبرع الآن",
    color: "from-secondary to-gold-light",
  },
  {
    icon: BookOpen,
    title: "كفالة طالب قرآني",
    description: "اكفل طالباً في حلقات التحفيظ واحصل على أجر تعليمه لكتاب الله تعالى.",
    cta: "ابدأ الكفالة",
    color: "from-primary to-teal-light",
  },
  {
    icon: Heart,
    title: "تبرع عام للجمعية",
    description: "ساهم في دعم أنشطة الجمعية وبرامجها المتنوعة لخدمة كتاب الله.",
    cta: "تبرع الآن",
    color: "from-secondary to-gold-light",
  },
];

const DonationSection = () => {
  return (
    <section className="section-padding bg-muted" id="donate">
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ساهم معنا في نشر كتاب الله من خلال برامج التبرع المتنوعة
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift group"
            >
              <div className={`h-2 bg-gradient-to-l ${card.color}`} />
              <div className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-10 h-10 text-cream" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {card.description}
                </p>
                <Button variant="gold" className="w-full">
                  {card.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
