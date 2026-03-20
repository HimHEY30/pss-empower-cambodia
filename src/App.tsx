import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<"en" | "kh">("en");

  const toggleLanguage = () => setLanguage((l) => (l === "en" ? "kh" : "en"));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar language={language} onLanguageToggle={toggleLanguage} />
          <Routes>
            <Route path="/" element={<Index language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/programs" element={<Programs language={language} />} />
            <Route path="/impact" element={<Impact language={language} />} />
            <Route path="/get-involved" element={<GetInvolved language={language} />} />
            <Route path="/news" element={<News language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer language={language} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
