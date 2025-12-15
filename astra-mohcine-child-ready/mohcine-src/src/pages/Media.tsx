import { motion } from "framer-motion";
import { Newspaper, Image, Video, Calendar, ArrowLeft, Play, Eye, Share2 } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import newsImage1 from "@/assets/news-1.jpg";
import newsImage2 from "@/assets/news-2.jpg";
import newsImage3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    id: 1,
    title: "انطلاق برنامج روح القيروان للموسم الجديد",
    excerpt: "أعلنت جمعية القيروان عن انطلاق الموسم الجديد من برنامج روح القيروان بمشاركة أكثر من 100 شاب وشابة من مختلف المناطق، حيث يهدف البرنامج إلى تطوير مهارات القيادة والعمل الجماعي",
    date: "15 ذو الحجة 1445هـ",
    image: newsImage1,
    category: "برامج",
    featured: true,
  },
  {
    id: 2,
    title: "توقيع شراكة استراتيجية مع مؤسسة الملك عبدالعزيز",
    excerpt: "وقعت الجمعية اتفاقية شراكة استراتيجية لدعم برامج تنمية الشباب وتأهيلهم للسوق العمل من خلال برامج تدريبية متخصصة",
    date: "10 ذو الحجة 1445هـ",
    image: newsImage2,
    category: "شراكات",
  },
  {
    id: 3,
    title: "نثر الخير يدعم 500 أسرة في رمضان",
    excerpt: "تم توزيع السلال الغذائية على الأسر المحتاجة ضمن برنامج نثر الخير الرمضاني بالتعاون مع شركائنا في العطاء",
    date: "5 ذو الحجة 1445هـ",
    image: newsImage3,
    category: "مبادرات",
  },
  {
    id: 4,
    title: "تخريج الدفعة الثالثة من مسرعات القيادة",
    excerpt: "احتفلت الجمعية بتخريج 30 شاباً من برنامج مسرعات القيادة المكثف الذي استمر لمدة 6 أشهر",
    date: "1 ذو الحجة 1445هـ",
    image: newsImage1,
    category: "تخريج",
  },
  {
    id: 5,
    title: "إطلاق منصة التطوع الإلكترونية",
    excerpt: "أطلقت الجمعية منصة إلكترونية جديدة لتسهيل تسجيل المتطوعين ومتابعة ساعات التطوع",
    date: "25 ذو القعدة 1445هـ",
    image: newsImage2,
    category: "إطلاقات",
  },
  {
    id: 6,
    title: "زيارة معالي وزير الموارد البشرية للجمعية",
    excerpt: "استقبلت الجمعية معالي وزير الموارد البشرية والتنمية الاجتماعية للاطلاع على برامج الجمعية وإنجازاتها",
    date: "20 ذو القعدة 1445هـ",
    image: newsImage3,
    category: "زيارات",
  },
];

const photoAlbums = [
  { id: 1, title: "حفل تخريج مسرعات القيادة", count: 45, cover: newsImage1, date: "15 ذو الحجة 1445هـ" },
  { id: 2, title: "فعالية نادي القيروان الموسمي", count: 32, cover: newsImage2, date: "10 ذو الحجة 1445هـ" },
  { id: 3, title: "توقيع الشراكات الاستراتيجية", count: 18, cover: newsImage3, date: "5 ذو الحجة 1445هـ" },
  { id: 4, title: "ديوانية الشيخ محمد المهنا", count: 24, cover: newsImage1, date: "1 ذو الحجة 1445هـ" },
  { id: 5, title: "فرحة عيد مع الأيتام", count: 56, cover: newsImage2, date: "1 شوال 1445هـ" },
  { id: 6, title: "برنامج مرساة التدريبي", count: 28, cover: newsImage3, date: "15 رمضان 1445هـ" },
  { id: 7, title: "ملتقى الشباب السنوي", count: 72, cover: newsImage1, date: "10 رمضان 1445هـ" },
  { id: 8, title: "حفل إفطار المتطوعين", count: 38, cover: newsImage2, date: "5 رمضان 1445هـ" },
];

const videoItems = [
  { id: 1, title: "فيلم وثائقي عن جمعية القيروان", duration: "5:30", cover: newsImage1, views: 1250 },
  { id: 2, title: "كلمة رئيس مجلس الإدارة", duration: "3:45", cover: newsImage2, views: 890 },
  { id: 3, title: "رحلة برنامج روح القيروان", duration: "8:20", cover: newsImage3, views: 2100 },
  { id: 4, title: "شهادات المستفيدين من برامجنا", duration: "4:15", cover: newsImage1, views: 1450 },
  { id: 5, title: "يوم في حياة متطوع", duration: "6:00", cover: newsImage2, views: 780 },
  { id: 6, title: "كيف تنضم كمتطوع؟", duration: "2:30", cover: newsImage3, views: 3200 },
];

const MediaPage = () => {
  const { section } = useParams();

  const renderNews = () => (
    <div className="space-y-8">
      {/* Featured News */}
      {newsItems.filter(n => n.featured).map(item => (
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-primary text-cream text-xs px-3 py-1 rounded-full">
                {item.category}
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{item.excerpt}</p>
              <Link 
                to="#" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                قراءة المزيد
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.filter(n => !n.featured).map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-primary text-cream text-xs px-3 py-1 rounded-full">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.excerpt}</p>
              <Link 
                to="#" 
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
              >
                قراءة المزيد
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );

  const renderPhotos = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {photoAlbums.map((album, index) => (
        <motion.div
          key={album.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group cursor-pointer"
        >
          <div className="relative h-48 overflow-hidden">
            <img 
              src={album.cover} 
              alt={album.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 left-4">
              <h3 className="text-white font-bold mb-1 line-clamp-1">{album.title}</h3>
              <div className="flex items-center justify-between text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  <span>{album.count} صورة</span>
                </div>
                <span>{album.date}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderVideos = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoItems.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group cursor-pointer"
        >
          <div className="relative h-52 overflow-hidden">
            <img 
              src={video.cover} 
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-primary mr-[-4px]" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
              {video.duration}
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-1">{video.title}</h3>
            <div className="flex items-center justify-between text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{video.views.toLocaleString()} مشاهدة</span>
              </div>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>مشاركة</span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const getTitle = () => {
    switch (section) {
      case "news": return "الأخبار";
      case "photos": return "ألبوم الصور";
      case "videos": return "ألبوم الفيديو";
      default: return "المركز الإعلامي";
    }
  };

  const getDescription = () => {
    switch (section) {
      case "news": return "آخر أخبار وفعاليات الجمعية ومستجداتها";
      case "photos": return "معرض صور من فعاليات وأنشطة ومناسبات الجمعية";
      case "videos": return "مكتبة فيديو تضم أفلام وثائقية ولقاءات ومقاطع عن الجمعية";
      default: return "تابع آخر أخبار وفعاليات ومحتوى الجمعية المرئي والمصور";
    }
  };

  const getIcon = () => {
    switch (section) {
      case "news": return Newspaper;
      case "photos": return Image;
      case "videos": return Video;
      default: return Newspaper;
    }
  };

  const Icon = getIcon();

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
                <Icon className="w-5 h-5 text-cream" />
                <span className="text-cream text-sm">المركز الإعلامي</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-cream mb-4">{getTitle()}</h1>
              <p className="text-cream/80 text-base md:text-lg max-w-2xl mx-auto">{getDescription()}</p>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs for sections */}
        {section && (
          <section className="bg-card border-b border-border sticky top-0 z-20">
            <div className="container-custom">
              <nav className="flex items-center gap-1 overflow-x-auto py-2">
                {[
                  { key: "news", label: "الأخبار", icon: Newspaper },
                  { key: "photos", label: "الصور", icon: Image },
                  { key: "videos", label: "الفيديو", icon: Video },
                ].map(tab => (
                  <Link
                    key={tab.key}
                    to={`/media/${tab.key}`}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                      section === tab.key 
                        ? 'bg-primary text-cream' 
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </Link>
                ))}
              </nav>
            </div>
          </section>
        )}

        {section ? (
          <section className="section-padding bg-background">
            <div className="container-custom">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-primary">الرئيسية</Link>
                <span>/</span>
                <Link to="/media" className="hover:text-primary">المركز الإعلامي</Link>
                <span>/</span>
                <span className="text-foreground">{getTitle()}</span>
              </nav>

              {section === "news" && renderNews()}
              {section === "photos" && renderPhotos()}
              {section === "videos" && renderVideos()}
            </div>
          </section>
        ) : (
          <>
            {/* Media Categories */}
            <section className="section-padding bg-background">
              <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { key: "news", title: "الأخبار", icon: Newspaper, desc: "آخر الأخبار والمستجدات", count: newsItems.length },
                    { key: "photos", title: "ألبوم الصور", icon: Image, desc: "معرض صور الفعاليات", count: photoAlbums.length },
                    { key: "videos", title: "ألبوم الفيديو", icon: Video, desc: "مكتبة الفيديو", count: videoItems.length },
                  ].map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={`/media/${item.key}`}
                        className="block bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all group text-center h-full"
                      >
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <item.icon className="w-10 h-10 text-cream" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                        <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                          {item.count} عنصر
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Latest News Preview */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">آخر الأخبار</h2>
                    <Link to="/media/news" className="text-primary font-medium hover:underline flex items-center gap-2">
                      عرض الكل
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {newsItems.slice(0, 3).map((item, index) => (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all group"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 bg-primary text-cream text-xs px-2 py-1 rounded-full">
                            {item.category}
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-muted-foreground text-xs mb-2">{item.date}</p>
                          <h3 className="text-sm font-bold text-foreground line-clamp-2">{item.title}</h3>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>

                {/* Latest Photos Preview */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">أحدث الألبومات</h2>
                    <Link to="/media/photos" className="text-primary font-medium hover:underline flex items-center gap-2">
                      عرض الكل
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {photoAlbums.slice(0, 4).map((album, index) => (
                      <motion.div
                        key={album.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative h-40 rounded-xl overflow-hidden group cursor-pointer"
                      >
                        <img 
                          src={album.cover} 
                          alt={album.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-3 right-3 left-3">
                          <h4 className="text-white text-sm font-bold line-clamp-1">{album.title}</h4>
                          <p className="text-white/70 text-xs">{album.count} صورة</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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

export default MediaPage;
