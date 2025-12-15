import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted" id="about">
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
              <span className="text-primary">القيروان</span> بداية واعدة
            </h2>
            <div className="w-16 h-[2px] bg-primary" />
          </div>
          <p className="text-muted-foreground">جمعية القيروان</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* رسالتنا */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-primary/20"
          >
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full" />
              رسالتنا :
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              تمكين الشباب وتطوير قدراتهم وتنمية مهاراتهم وتعزيز أثرهم المجتمعي من خلال مبادرات مبتكرة وشراكات نوعية وبيئات ملهمة
            </p>
          </motion.div>

          {/* رؤيتنا */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-2xl p-8 shadow-card"
          >
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full" />
              رؤيتنا :
            </h3>
            <p className="text-cream/90 leading-relaxed">
              شباب مُمَكّن في بيئة مُلهِمة
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
