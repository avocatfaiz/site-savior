import { motion } from "framer-motion";
import { getMohcineData, pick } from "@/lib/content";

const defaultMapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8267853837147!2d46.67195!3d24.7055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzE5LjgiTiA0NsKwNDAnMTkuMSJF!5e0!3m2!1sar!2ssa!4v1702500000000!5m2!1sar!2ssa";

const MapSection = () => {
  const data = getMohcineData();
  const address = pick(data.contact?.address, "الرياض - المملكة العربية السعودية");
  const mapSrc = pick((data.contact as any)?.mapEmbed, defaultMapSrc);

  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative"
      >
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع الجمعية"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />

        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-background/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-elevated max-w-[280px] md:max-w-xs">
          <h3 className="font-bold text-foreground text-sm md:text-base mb-1">مقر الجمعية</h3>
          <p className="text-muted-foreground text-xs md:text-sm">{address}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default MapSection;
