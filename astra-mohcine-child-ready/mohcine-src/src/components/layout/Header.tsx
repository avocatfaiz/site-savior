import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Search, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { getMohcineData } from "@/lib/content";

const defaultNavItems = [
  { label: "الرئيسية", href: "/", icon: Home },
  {
    label: "عن الجمعية",
    href: "/about",
    children: [
      { label: "نشأة الجمعية", href: "/about#origin" },
      { label: "الرؤية والرسالة", href: "/about#vision" },
      { label: "أهداف الجمعية", href: "/about#goals" },
      { label: "كلمة رئيس مجلس الإدارة", href: "/#chairman" },
    ],
  },
  {
    label: "الحوكمة",
    href: "/governance",
    children: [
      { label: "اللوائح والسياسات", href: "/governance/policies" },
      { label: "الإجتماعات الجمعية", href: "/governance/meetings" },
      { label: "اللائحة المالية", href: "/governance/financial-policy" },
      { label: "القوائم المالية", href: "/governance/financial-statements" },
      { label: "التقارير السنوية", href: "/governance/annual-reports" },
    ],
  },
  { label: "الخدمات الإلكترونية", href: "/#services" },
  { label: "البرامج والمشاريع", href: "/#programs" },
  {
    label: "المركز الإعلامي",
    href: "/media",
    children: [
      { label: "الأخبار", href: "/media/news" },
      { label: "ألبوم الصور", href: "/media/photos" },
      { label: "ألبوم الفيديو", href: "/media/videos" },
    ],
  },
  { label: "اتصل بنا", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dataNav = getMohcineData().nav;
  const navItems = dataNav && dataNav.length ? dataNav : defaultNavItems;

  const [visibleItems, setVisibleItems] = useState(navItems.length);
  const [showOverflow, setShowOverflow] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Show all items on xl screens (1280px+)
      // On lg screens (1024-1279px), calculate based on available space
      if (width >= 1280) {
        setVisibleItems(navItems.length);
      } else if (width >= 1024) {
        // Show fewer items on narrower lg screens
        if (width >= 1180) {
          setVisibleItems(navItems.length);
        } else if (width >= 1100) {
          setVisibleItems(6); // Hide last item
        } else {
          setVisibleItems(5); // Hide last 2 items
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleNavItems = navItems.slice(0, visibleItems);
  const overflowNavItems = navItems.slice(visibleItems);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-lg border-b border-border">
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="8" fill="hsl(var(--primary))" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <circle
                      key={i}
                      cx={50 + 20 * Math.cos((angle * Math.PI) / 180)}
                      cy={50 + 20 * Math.sin((angle * Math.PI) / 180)}
                      r="5"
                      fill="hsl(var(--primary))"
                    />
                  ))}
                  {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
                    <circle
                      key={i + 8}
                      cx={50 + 32 * Math.cos((angle * Math.PI) / 180)}
                      cy={50 + 32 * Math.sin((angle * Math.PI) / 180)}
                      r="4"
                      fill="hsl(var(--primary))"
                    />
                  ))}
                </svg>
              </div>
              <div className="text-foreground">
                <h1 className="font-bold text-xl leading-tight text-primary">جمعية القيروان</h1>
                <p className="text-xs text-muted-foreground">جمعية القيروان الأهلية لتنمية الشباب</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0 bg-card rounded-full px-2 py-1 shadow-card border border-border mx-4">
            {visibleNavItems.map((item) => (
              <div
                key={item.label}
                className="relative group flex-shrink-0"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm whitespace-nowrap ${
                    item.label === "الرئيسية" ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label === "الرئيسية" && <Home className="w-4 h-4" />}
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 bg-card rounded-lg shadow-elevated py-2 min-w-[200px] border border-border mt-1 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors text-sm"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Overflow Menu - only shows when items don't fit */}
            {overflowNavItems.length > 0 && (
              <div
                className="relative flex-shrink-0"
                onMouseEnter={() => setShowOverflow(true)}
                onMouseLeave={() => setShowOverflow(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm text-foreground">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
                <AnimatePresence>
                  {showOverflow && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-card rounded-lg shadow-elevated py-2 min-w-[200px] border border-border mt-1 z-50"
                    >
                      {overflowNavItems.map((item) => (
                        <div key={item.label}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors text-sm font-medium"
                          >
                            {item.label}
                          </Link>
                          {item.children && (
                            <div className="pr-4 border-r-2 border-primary/20 mr-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block px-4 py-1.5 text-muted-foreground hover:text-primary transition-colors text-xs"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <button className="p-2 rounded-full border border-border bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0">
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card overflow-hidden border-t border-border"
          >
            <nav className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block py-3 px-4 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pr-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block py-2 px-4 text-muted-foreground hover:text-primary text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="gold" className="w-full">
                    طلب تطوع
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
