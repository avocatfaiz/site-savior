import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "عن الجمعية", href: "/about" },
  { label: "البرامج والمشاريع", href: "/programs" },
  { label: "الأخبار", href: "/news" },
  { label: "اتصل بنا", href: "/contact" },
];

const services = [
  { label: "التسجيل كعضو", href: "/volunteer" },
  { label: "طلب تطوع", href: "/volunteer" },
  { label: "أعضاء مجلس الإدارة", href: "/governance/board" },
  { label: "الأنظمة الأساسية", href: "/governance/regulations" },
];

const Footer = () => {
  return (
    <footer className="mohcine-footer bg-teal-dark text-cream">
      <div className="container-custom max-w-6xl mx-auto py-10 md:py-12 lg:py-14 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 items-start" dir="ltr">
          {/* Newsletter (left) */}
          <div className="text-right space-y-4" dir="rtl">
            <h3 className="font-bold text-xl text-secondary">النشرة البريدية</h3>
            <p className="text-sm text-cream/80">احصل على آخر الأخبار والفعاليات</p>
            <div className="flex gap-2" dir="rtl">
              <input
                type="email"
                className="newsletter-field flex w-full rounded-lg border-2 px-4 py-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-secondary transition-all disabled:cursor-not-allowed disabled:opacity-50 bg-cream/10 border-cream/20 text-foreground placeholder:text-white text-sm h-9 md:h-10"
                style={{
                  borderRadius: "10px",
                  borderColor: "hsl(45deg 100% 96% / 0.2)",
                  color: "white",
                  backgroundColor: "hsl(45deg 100% 96% / 0.1)",
                }}
                placeholder="البريد الإلكتروني"
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-l from-gold to-gold-light text-teal-dark hover:opacity-90 shadow-gold font-bold shrink-0 h-9 w-9 md:h-10 md:w-10"
                aria-label="إرسال البريد"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send w-4 h-4"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
              </button>
            </div>
            <div className="pt-2 space-y-3">
              <h3 className="font-bold text-xl text-secondary">تابعنا</h3>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/966559951124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-[#25D366] flex items-center justify-center transition-all"
                  aria-label="واتساب"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all"
                  aria-label="انستغرام"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-[#FFFC00] hover:text-black flex items-center justify-center transition-all"
                  aria-label="بنترست"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.217-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641 0 12.017 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick links & services */}
          <div className="text-right space-y-4" dir="rtl">
            <div>
              <h3 className="font-bold text-xl mb-4 text-secondary">روابط سريعة</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-cream/80 hover:text-secondary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-secondary">خدمات</h3>
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-cream/80 hover:text-secondary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact info */}
          <div className="text-right space-y-4 flex flex-col items-end" dir="rtl">
            <h3 className="font-bold text-xl text-secondary w-full text-right">?.???"?^?.???? ???"???^?????"</h3>
            <ul className="space-y-3 flex flex-col items-end text-right w-full" dir="rtl">
              <li className="flex items-center gap-3 w-full text-right justify-start">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-cream/80 text-right leading-snug">???"?.?.?"???? ???"???????S?? ???"?????^???S?? - ???"???S????</span>
              </li>
              <li className="flex items-center gap-3 w-full text-right justify-start">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:0559951124" className="text-sm text-cream/80 hover:text-cream text-right" dir="ltr">
                  0559951124
                </a>
              </li>
              <li className="flex items-center gap-3 w-full text-right justify-start">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@qairouan.org.sa" className="text-sm text-cream/80 hover:text-cream break-all text-right">
                  info@qairouan.org.sa
                </a>
              </li>
              <li className="flex items-center gap-3 w-full text-right justify-start">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm text-cream/80 text-right">???"?????? - ???"???.?S??: 8 ?? - 4 ?.</span>
              </li>
            </ul>

            <div className="mt-2 flex items-center gap-3 bg-cream/10 border border-cream/20 rounded-xl p-3 w-full max-w-sm justify-end">
              <div className="flex-1 text-right">
                <p className="text-sm text-cream/60">?????????????? ?^?????. ???S????</p>
                <p className="text-sm font-semibold">???"?.?????? ???"?^?????S ?"?"?'?????? ???S?? ???"???????S</p>
              </div>
              <ExternalLink className="w-5 h-5 text-secondary shrink-0" />
            </div>
          </div>
          {/* Logo & vision (rightmost) */}
          <div className="text-center lg:text-right lg:flex lg:flex-col lg:items-end space-y-4 w-full" dir="rtl">
            <div className="flex items-center gap-3 justify-center lg:justify-end">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="8" fill="hsl(var(--secondary))" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <circle
                      key={i}
                      cx={50 + 20 * Math.cos((angle * Math.PI) / 180)}
                      cy={50 + 20 * Math.sin((angle * Math.PI) / 180)}
                      r="5"
                      fill="hsl(var(--secondary))"
                    />
                  ))}
                  {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
                    <circle
                      key={i + 8}
                      cx={50 + 32 * Math.cos((angle * Math.PI) / 180)}
                      cy={50 + 32 * Math.sin((angle * Math.PI) / 180)}
                      r="4"
                      fill="hsl(var(--secondary))"
                    />
                  ))}
                </svg>
              </div>
              <div className="text-center lg:text-right">
                <h3 className="font-bold text-2xl text-cream leading-tight">جمعية القيروان</h3>
                <p className="text-sm text-cream/80">لتنمية الشباب</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              رؤيتنا في تمكين الشباب وتنمية مهاراتهم هي المحرك الأساسي لمبادراتنا لمجتمع نشط يحتاج إلى الشباب للتطور والإبداع.
            </p>
            <p className="text-cream/70 text-sm max-w-sm mx-auto lg:mx-0">حقوق النشر محفوظة لجمعية القيروان 2025 ©</p>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-cream/15 flex items-center justify-center text-sm text-cream/90 text-center" dir="rtl">
          <span className="whitespace-nowrap">2025 جمعية القيروان لتنمية الشباب. جميع الحقوق محفوظة ©</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
