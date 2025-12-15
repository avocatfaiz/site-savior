import { motion } from "framer-motion";
import { FileText, Users, DollarSign, BarChart, BookOpen, Download, ExternalLink, Shield, Award } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const governanceItems = {
  policies: {
    title: "اللوائح والسياسات",
    icon: FileText,
    description: "اللوائح والسياسات المنظمة لعمل الجمعية",
    content: [
      { title: "لائحة العمل الداخلية", desc: "تنظم سير العمل اليومي والإجراءات الإدارية في الجمعية", downloadable: true },
      { title: "سياسة الخصوصية", desc: "تحدد كيفية جمع واستخدام وحماية بيانات المستفيدين والمتطوعين", downloadable: true },
      { title: "لائحة الموارد البشرية", desc: "تنظم شؤون الموظفين والعاملين في الجمعية", downloadable: true },
      { title: "سياسة التطوع", desc: "تحدد آليات وشروط التطوع في الجمعية", downloadable: true },
      { title: "سياسة الشراكات المجتمعية", desc: "تنظم العلاقة مع الشركاء والجهات الداعمة", downloadable: true },
      { title: "لائحة المشتريات والتعاقدات", desc: "تحدد آليات الشراء والتعاقد مع الموردين", downloadable: true },
    ]
  },
  meetings: {
    title: "اجتماعات الجمعية",
    icon: Users,
    description: "محاضر ومقررات اجتماعات مجلس الإدارة والجمعية العمومية",
    content: [
      { title: "اجتماع مجلس الإدارة الرابع - 1445هـ", desc: "تم مناقشة خطط التوسع وزيادة عدد المستفيدين واعتماد برامج جديدة", date: "15 شعبان 1445هـ" },
      { title: "اجتماع الجمعية العمومية السنوي", desc: "تم اعتماد التقرير السنوي والميزانية العمومية وانتخاب أعضاء مجلس الإدارة", date: "1 رجب 1445هـ" },
      { title: "اجتماع مجلس الإدارة الثالث - 1445هـ", desc: "تم اعتماد البرامج الجديدة للشباب ومناقشة تطوير الهيكل التنظيمي", date: "20 جمادى الأولى 1445هـ" },
      { title: "اجتماع اللجنة التنفيذية", desc: "تم متابعة تنفيذ القرارات والمشاريع الحالية ومراجعة مؤشرات الأداء", date: "5 ربيع الثاني 1445هـ" },
      { title: "اجتماع مجلس الإدارة الثاني - 1445هـ", desc: "تم مراجعة الخطة الاستراتيجية واعتماد الموازنة التقديرية", date: "10 صفر 1445هـ" },
      { title: "اجتماع مجلس الإدارة الأول - 1445هـ", desc: "تم تقييم أداء العام الماضي ووضع الأهداف للعام الجديد", date: "1 محرم 1445هـ" },
    ]
  },
  "financial-policy": {
    title: "اللائحة المالية",
    icon: DollarSign,
    description: "اللوائح المالية المنظمة للصرف والإيرادات",
    content: [
      { title: "نظام الصرف والمدفوعات", desc: "تحدد آليات صرف المبالغ والموافقات المطلوبة وصلاحيات التوقيع", downloadable: true },
      { title: "نظام جمع التبرعات", desc: "تنظم عمليات جمع التبرعات وتوثيقها وإصدار الإيصالات", downloadable: true },
      { title: "سياسة الاستثمار", desc: "تحدد آليات استثمار أموال الجمعية وفق الضوابط الشرعية", downloadable: true },
      { title: "نظام المراجعة الداخلية", desc: "تنظم عمليات المراجعة والتدقيق المالي الدوري", downloadable: true },
      { title: "سياسة إدارة المخاطر المالية", desc: "تحدد آليات تقييم وإدارة المخاطر المالية", downloadable: true },
    ]
  },
  "financial-statements": {
    title: "القوائم المالية",
    icon: BarChart,
    description: "القوائم والتقارير المالية للجمعية",
    content: [
      { title: "الميزانية العمومية 1445هـ", desc: "القوائم المالية للسنة المالية المنتهية في 30 ذو الحجة 1445هـ", downloadable: true, year: "1445هـ" },
      { title: "قائمة الإيرادات والمصروفات 1445هـ", desc: "تفاصيل الإيرادات والمصروفات للسنة المالية الحالية", downloadable: true, year: "1445هـ" },
      { title: "تقرير المراجع الخارجي 1445هـ", desc: "تقرير مكتب المراجعة المعتمد من وزارة التجارة", downloadable: true, year: "1445هـ" },
      { title: "الموازنة التقديرية 1446هـ", desc: "الموازنة المعتمدة للسنة المالية القادمة", downloadable: true, year: "1446هـ" },
      { title: "الميزانية العمومية 1444هـ", desc: "القوائم المالية للسنة المالية السابقة", downloadable: true, year: "1444هـ" },
    ]
  },
  "annual-reports": {
    title: "التقارير السنوية",
    icon: BookOpen,
    description: "التقارير السنوية الشاملة لأنشطة وإنجازات الجمعية",
    content: [
      { title: "التقرير السنوي 1445هـ", desc: "ملخص شامل لأنشطة وإنجازات الجمعية خلال العام يشمل البرامج والمستفيدين والشراكات", downloadable: true, featured: true },
      { title: "تقرير البرامج والمشاريع", desc: "تفاصيل البرامج المنفذة وعدد المستفيدين ومؤشرات الأثر", downloadable: true },
      { title: "تقرير التطوع", desc: "إحصائيات وإنجازات قطاع التطوع وتكريم المتطوعين المتميزين", downloadable: true },
      { title: "تقرير الشراكات", desc: "ملخص الشراكات المجتمعية والمؤسسية والإنجازات المشتركة", downloadable: true },
      { title: "التقرير السنوي 1444هـ", desc: "ملخص أنشطة وإنجازات العام السابق", downloadable: true },
    ]
  },
};

const boardMembers = [
  { name: "أ. محمد بن عبدالله المهنا", role: "رئيس مجلس الإدارة", featured: true },
  { name: "أ. أحمد بن سعد القحطاني", role: "نائب رئيس مجلس الإدارة" },
  { name: "أ. خالد بن فهد العتيبي", role: "عضو مجلس الإدارة" },
  { name: "أ. سليمان بن محمد الدوسري", role: "عضو مجلس الإدارة" },
  { name: "أ. عبدالرحمن بن أحمد الشمري", role: "عضو مجلس الإدارة" },
];

const GovernancePage = () => {
  const { section } = useParams();
  const currentSection = section && governanceItems[section as keyof typeof governanceItems] 
    ? governanceItems[section as keyof typeof governanceItems]
    : null;

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-cream" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-2 border-cream" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-cream/30" />
          </div>
          <div className="container-custom relative text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-cream" />
                <span className="text-cream text-sm">الشفافية والمساءلة</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-cream mb-4">
                {currentSection ? currentSection.title : "الحوكمة"}
              </h1>
              <p className="text-cream/80 text-base md:text-lg max-w-2xl mx-auto">
                {currentSection ? currentSection.description : "نلتزم بأعلى معايير الشفافية والحوكمة الرشيدة لضمان تحقيق أهدافنا بكفاءة وفعالية"}
              </p>
            </motion.div>
          </div>
        </section>

        {currentSection ? (
          /* Specific Section Content */
          <section className="section-padding bg-background">
            <div className="container-custom">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-primary">الرئيسية</Link>
                <span>/</span>
                <Link to="/governance" className="hover:text-primary">الحوكمة</Link>
                <span>/</span>
                <span className="text-foreground">{currentSection.title}</span>
              </nav>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentSection.content.map((item: any, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow ${item.featured ? 'md:col-span-2 border-2 border-primary' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${item.featured ? 'bg-primary' : 'bg-primary/10'} flex items-center justify-center shrink-0`}>
                        <currentSection.icon className={`w-6 h-6 ${item.featured ? 'text-cream' : 'text-primary'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            {item.date && (
                              <p className="text-primary text-xs mt-2">{item.date}</p>
                            )}
                            {item.year && (
                              <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mt-2">{item.year}</span>
                            )}
                          </div>
                          {item.downloadable && (
                            <button className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-cream flex items-center justify-center text-primary transition-colors">
                              <Download className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Back Link */}
              <div className="mt-8 text-center">
                <Link 
                  to="/governance" 
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <span>العودة للحوكمة</span>
                </Link>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Board Members Section */}
            <section className="section-padding bg-muted">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-10"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">مجلس الإدارة</h2>
                  <p className="text-muted-foreground">أعضاء مجلس إدارة جمعية القيروان</p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {boardMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-card rounded-2xl p-6 text-center shadow-card ${member.featured ? 'border-2 border-primary' : ''}`}
                    >
                      <div className={`w-20 h-20 mx-auto rounded-full ${member.featured ? 'bg-primary' : 'bg-primary/10'} flex items-center justify-center mb-4`}>
                        <Award className={`w-10 h-10 ${member.featured ? 'text-cream' : 'text-primary'}`} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary text-sm">{member.role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Governance Categories */}
            <section className="section-padding bg-background">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-10"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">وثائق الحوكمة</h2>
                  <p className="text-muted-foreground">اطلع على لوائح وسياسات وتقارير الجمعية</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(governanceItems).map(([key, item], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={`/governance/${key}`}
                        className="block bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all group h-full"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <item.icon className="w-8 h-8 text-cream" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          <span>عرض التفاصيل</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Compliance Section */}
            <section className="section-padding bg-primary text-cream">
              <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-cream/10 flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">مرخصة رسمياً</h3>
                    <p className="text-cream/80 text-sm">مسجلة لدى وزارة الموارد البشرية والتنمية الاجتماعية</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-cream/10 flex items-center justify-center mb-4">
                      <BarChart className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">شفافية مالية</h3>
                    <p className="text-cream/80 text-sm">قوائم مالية مدققة ومنشورة للعموم</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-cream/10 flex items-center justify-center mb-4">
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">حوكمة رشيدة</h3>
                    <p className="text-cream/80 text-sm">التزام بأفضل ممارسات الحوكمة المؤسسية</p>
                  </motion.div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default GovernancePage;
