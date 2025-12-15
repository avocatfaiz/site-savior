import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Governance from "./pages/Governance";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get basename from window.Mohcine_DATA if available (WordPress), otherwise use default
const getBasename = () => {
  if (typeof window !== 'undefined' && (window as any).Mohcine_DATA?.basename) {
    return (window as any).Mohcine_DATA.basename;
  }
  // Default: no basename for production WordPress at root
  return '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter 
        basename={getBasename()}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/governance/:section" element={<Governance />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:section" element={<Media />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
