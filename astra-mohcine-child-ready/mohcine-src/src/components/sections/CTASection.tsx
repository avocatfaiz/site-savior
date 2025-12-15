import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { getMohcineData, pick } from "@/lib/content";

const CTASection = () => {
  const data = getMohcineData();
  const primaryTitle = pick(data.cta?.title, "كن شريكنا في تمكين الشباب");
  const primaryDescription = pick(
    data.cta?.description,
    "انضم إلينا في تحقيق رؤية تمكين الشباب من خلال برامج ومبادرات نوعية تصنع فارقاً في المستقبل."
  );
  const primaryButtonText = pick(data.cta?.buttonText, "تواصل معنا");
  const primaryButtonLink = pick(data.cta?.buttonLink, "/contact");

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-cream" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-cream/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 text-center"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cream mb-3 md:mb-4">
              {primaryTitle}
            </h3>
            <p className="text-cream/80 mb-4 md:mb-6 text-sm md:text-base">
              {primaryDescription}
            </p>
            <Link to={primaryButtonLink}>
              <Button variant="heroOutline" size="lg" className="gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                {primaryButtonText}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary/20 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 text-center"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cream mb-3 md:mb-4">
              شارك في التطوع
            </h3>
            <p className="text-cream/80 mb-4 md:mb-6 text-sm md:text-base">
              ساهم بوقتك وخبرتك لدعم برامج الجمعية، وسنوجهك إلى الفرصة الأنسب لك.
            </p>
            <Link to="/volunteer">
              <Button variant="gold" size="lg" className="gap-2 w-full sm:w-auto">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                سجل كمتطوع
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
