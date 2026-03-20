import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import pssLogo from "@/assets/pss_logo.png";

const navLinks = [
  { href: "/", label: "Home", labelKh: "ទំព័រដើម" },
  { href: "/about", label: "About Us", labelKh: "អំពីយើង" },
  { href: "/programs", label: "Programs", labelKh: "កម្មវិធី" },
  { href: "/impact", label: "Impact", labelKh: "ផលប៉ះពាល់" },
  { href: "/get-involved", label: "Get Involved", labelKh: "ចូលរួម" },
  { href: "/news", label: "News", labelKh: "ព័ត៌មាន" },
  { href: "/contact", label: "Contact", labelKh: "ទំនាក់ទំនង" },
];

interface NavbarProps {
  language: "en" | "kh";
  onLanguageToggle: () => void;
}

const Navbar = ({ language, onLanguageToggle }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-primary py-2"
          : "bg-primary/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={pssLogo} 
              alt="PSS Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-primary-foreground font-display font-bold text-base leading-tight">
                PSS Cambodia
              </div>
              <div className="text-primary-foreground/70 text-xs leading-tight">
                Promoting Skills for Success
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {language === "en" ? link.label : link.labelKh}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground text-sm px-2 py-1.5 rounded-lg hover:bg-primary-foreground/10 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language === "en" ? "ខ្មែរ" : "EN"}</span>
            </button>

            {/* Donate CTA */}
            <Link to="/get-involved">
              <Button
                size="sm"
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold shadow-warm hidden sm:flex"
              >
                {language === "en" ? "Donate Now" : "បរិច្ចាគឥឡូវ"}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-primary-foreground p-2 rounded-lg hover:bg-primary-foreground/10 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t border-primary-foreground/20 pt-3 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.href
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {language === "en" ? link.label : link.labelKh}
                </Link>
              ))}
              <Link to="/get-involved" className="mt-2">
                <Button className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold">
                  {language === "en" ? "Donate Now" : "បរិច្ចាគឥឡូវ"}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
