import { Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getMohcineData, pick } from "@/lib/content";

const TopBar = () => {
  const data = getMohcineData();
  const phone = pick(data.topbar?.phone, "0559951124");
  const email = pick(data.topbar?.email, "info@qairouan.org.sa");
  const ctaText = pick(data.topbar?.ctaText, "طلب تطوع");
  const ctaLink = pick(data.topbar?.ctaLink, "/contact");

  return (
    <div className="bg-teal-dark text-cream py-2 text-sm hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="w-4 h-4" />
            <span dir="ltr">{phone}</span>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link to={ctaLink}>
            <Button variant="gold" size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
