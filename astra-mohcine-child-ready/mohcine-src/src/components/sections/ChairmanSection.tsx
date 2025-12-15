import { motion } from "framer-motion";
import { getMohcineData, pick } from "@/lib/content";
import chairmanImage from "@/assets/chairman.png";

const defaults = {
  title: "كلمة رئيس مجلس الادارة",
  intro: "بسم الله الرحمن الرحيم",
  para1: "الحمد لله، والصلاة والسلام على نبينا محمد، وعلى آله وصحبه وسلم.. أما بعد:",
  para2:
    "الشباب هم الوقود الحقيقي، والمحرك الرئيس لمستقبل هذا البلد المعطاء، والطموح، وهم القوة البشـرية في بناء المجتمع، ودفع عجلة التنمية؛ لمزيد من التقدم؛ والنجاح؛ وفقا لما أكدت عليه رؤية 2030، ومن هذا المنطلق تأتي مهمتنا، في جمعية القيروان لتنمية الشباب؛ بتوفير بيئة ممكنة، وملهمة للشباب؛ من خلال تبني العديد من المبادرات، والبرامج التنموية، والأنشطة الاجتماعية، بالشراكة مع الجهات ذات العلاقة، والاختصاص.",
  para3:
    "ويسرنا، في جمعية القيروان، أن ندعو الجميع إلى التعاون، والإسهام، في دعم أنشطة الجمعية، وبرامجها التنموية..",
  signoff: "والله ولي التوفيق.",
  name: "د. فؤاد بن عبدالكريم العبدالكريم",
  role: "رئيس مجلس الإدارة",
};

const ChairmanSection = () => {
  const data = getMohcineData().chairman || {};
  const chairman = {
    title: pick(data.title, defaults.title),
    intro: pick(data.intro, defaults.intro),
    para1: pick(data.para1, defaults.para1),
    para2: pick(data.para2, defaults.para2),
    para3: pick(data.para3, defaults.para3),
    signoff: pick(data.signoff, defaults.signoff),
    name: pick(data.name, defaults.name),
    role: pick(data.role, defaults.role),
  };

  return (
    <section id="chairman" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-cream" />
        <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-2 border-cream" />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Chairman Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <img src={chairmanImage} alt={chairman.name} className="w-full h-full object-cover" />
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-secondary/20" />
              <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-secondary/30" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 text-cream"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">{chairman.title}</h2>

            <div className="space-y-4 text-cream/90 leading-relaxed">
              <p className="font-amiri text-lg">{chairman.intro}</p>
              <p>{chairman.para1}</p>
              <p>{chairman.para2}</p>
              <p>{chairman.para3}</p>
              <p className="font-semibold">{chairman.signoff}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/20">
              <p className="text-secondary font-bold text-lg">{chairman.name}</p>
              <p className="text-cream/70 text-sm">{chairman.role}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
