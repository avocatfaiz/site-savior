import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
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
      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, form: "contact" }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "تعذّر إرسال الرسالة.");
      }
      setStatus({ state: "success", message: data.message || "تم استلام رسالتك." });
      setFormData({ name: "", email: "", phone: "", topic: "", message: "" });
    } catch (err: any) {
      setStatus({ state: "error", message: err?.message || "حدث خطأ غير متوقع." });
    }
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-cream" />
            <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-2 border-cream" />
          </div>
          <div className="container-custom relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">تواصل معنا</h1>
            <p className="text-cream/80 text-lg">نسعد بتلقي استفساراتك وشراكاتك وملاحظاتك عبر النموذج أو القنوات التالية.</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">أرسل رسالتك</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">الاسم الكامل *</label>
                      <Input placeholder="الاسم" value={formData.name} onChange={handleChange("name")} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني *</label>
                      <Input type="email" placeholder="example@email.com" value={formData.email} onChange={handleChange("email")} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">رقم الجوال</label>
                      <Input type="tel" placeholder="05xxxxxxxx" value={formData.phone} onChange={handleChange("phone")} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">الموضوع</label>
                      <Input placeholder="موضوع الرسالة" value={formData.topic} onChange={handleChange("topic")} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">نص الرسالة *</label>
                    <Textarea rows={6} placeholder="اكتب رسالتك هنا..." value={formData.message} onChange={handleChange("message")} />
                  </div>
                  {status.message && (
                    <p className={`text-sm ${status.state === "error" ? "text-red-500" : "text-green-500"}`} aria-live="polite">
                      {status.message}
                    </p>
                  )}
                  <Button variant="gold" size="lg" className="w-full" type="submit" disabled={status.state === "loading"}>
                    <Send className="w-5 h-5 ml-2" />
                    {status.state === "loading" ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                {/* Map */}
                <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463879.0177871825!2d46.54234!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع جمعية القيروان"
                  />
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "العنوان", value: "الرياض - حي القيروان - المملكة العربية السعودية" },
                    { icon: Phone, label: "هاتف", value: "0559951124", href: "tel:+966559951124" },
                    { icon: Mail, label: "البريد", value: "info@qairouan.org.sa", href: "mailto:info@qairouan.org.sa" },
                    { icon: Clock, label: "أوقات العمل", value: "الأحد - الخميس: 8 ص - 4 م" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-6 rounded-xl bg-muted">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-cream" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
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

export default ContactPage;
