import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Heart, CheckCircle } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    years: "",
    message: "",
  });
  const [status, setStatus] = useState<{ state: "idle" | "loading" | "success" | "error"; message: string }>({
    state: "idle",
    message: "",
  });

  const apiBase = `${window.location.origin}/wordpress/wp-json/Mohcine/v1`;

  const handleChange =
    (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: "error", message: "يرجى تعبئة الاسم والبريد والرسالة." });
      return;
    }

    setStatus({ state: "loading", message: "جاري الإرسال..." });
    try {
      const res = await fetch(`${apiBase}/volunteer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, form: "volunteer" }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "تعذّر إرسال الطلب.");
      }
      setStatus({ state: "success", message: data.message || "تم استلام طلبك، سنعاود التواصل معك." });
      setFormData({ name: "", phone: "", email: "", years: "", message: "" });
    } catch (err: any) {
      setStatus({ state: "error", message: err?.message || "حدث خطأ غير متوقع." });
    }
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
          <div className="container-custom relative text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">بوابتك للتطوع</h1>
            <p className="text-cream/80 text-base md:text-lg max-w-2xl mx-auto">
              انضم لفرق العمل وكن جزءاً من مبادرات جمعية القيروان لخدمة المجتمع.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">مزايا التطوع معنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "شبكة علاقات تطوعية", desc: "تتعرف على متطوعين وقادة مجتمع وتشارك معهم الأثر." },
                { icon: Heart, title: "خدمة مجتمعية حقيقية", desc: "تساهم في برامجنا ومبادراتنا النوعية الموجهة للشباب." },
                { icon: CheckCircle, title: "خبرة وشهادات", desc: "تحصل على خبرة عملية وشهادة مشاركة تقديراً لجهودك." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-card text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">قدّم طلب التطوع الآن</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="الاسم الكامل" value={formData.name} onChange={handleChange("name")} />
                  <Input placeholder="رقم الجوال" type="tel" dir="ltr" value={formData.phone} onChange={handleChange("phone")} />
                </div>
                <Input placeholder="البريد الإلكتروني" type="email" value={formData.email} onChange={handleChange("email")} />
                <Input placeholder="العمر" type="number" value={formData.years} onChange={handleChange("years")} />
                <Textarea placeholder="حدثنا عن دوافعك للتطوع ومجالات اهتماماتك" rows={4} value={formData.message} onChange={handleChange("message")} />
                {status.message && (
                  <p className={`text-sm ${status.state === "error" ? "text-red-500" : "text-green-500"}`} aria-live="polite">
                    {status.message}
                  </p>
                )}
                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={status.state === "loading"}>
                  {status.state === "loading" ? "جاري الإرسال..." : "إرسال الطلب"}
                </Button>
              </form>
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

export default VolunteerPage;
