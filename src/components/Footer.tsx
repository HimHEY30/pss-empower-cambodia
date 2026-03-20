import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import pssLogo from "@/assets/pss_logo.png";

interface FooterProps {
  language: "en" | "kh";
}

const Footer = ({ language }: FooterProps) => {
  const isKh = language === "kh";

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Strip */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-secondary-foreground font-display font-bold text-lg">
                {isKh ? "ចុះឈ្មោះព័ត៌មានថ្មី" : "Stay Updated with PSS"}
              </h3>
              <p className="text-secondary-foreground/90 text-sm">
                {isKh
                  ? "ទទួលបានព័ត៌មានថ្មីៗ"
                  : "Get the latest news on our programs and student success stories"}
              </p>
            </div>
            <form
              className="flex gap-2 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={isKh ? "អ៊ីមែលរបស់អ្នក" : "Your email address"}
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/30 text-secondary-foreground placeholder:text-secondary-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-foreground/40"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                {isKh ? "ចុះឈ្មោះ" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
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
            </div>
            <p className="text-primary-foreground/75 text-sm leading-relaxed mb-5">
              {isKh
                ? "ការលើកកម្ពស់ជំនាញដើម្បីជោគជ័យ — ផ្តល់ឱ្យយុវវ័យខ្មែរនូវជំនាញ IT ដ៏ល្អ"
                : "Empowering Cambodian youth with IT skills and professional development since 2025, continuing the legacy of Passerelles Numériques Cambodia."}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              {isKh ? "តំណភ្ជាប់រហ័ស" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", en: "About Us", kh: "អំពីយើង" },
                { href: "/programs", en: "Our Programs", kh: "កម្មវិធី" },
                { href: "/impact", en: "Impact & Stories", kh: "ផលប៉ះពាល់" },
                { href: "/get-involved", en: "Donate", kh: "បរិច្ចាគ" },
                { href: "/news", en: "News & Blog", kh: "ព័ត៌មាន" },
                { href: "/contact", en: "Contact", kh: "ទំនាក់ទំនង" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/75 hover:text-secondary transition-colors"
                  >
                    {isKh ? link.kh : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              {isKh ? "កម្មវិធីសិក្សា" : "Programs"}
            </h4>
            <ul className="space-y-2.5">
              {[
                { en: "2-Year IT Training", kh: "វគ្គ IT ២ ឆ្នាំ" },
                { en: "Web Development", kh: "អភិវឌ្ឍន៍គេហទំព័រ" },
                { en: "Soft Skills Training", kh: "ជំនាញទន់" },
                { en: "Career Readiness", kh: "ការត្រៀមខ្លួនសម្រាប់ការងារ" },
                { en: "Apply Now", kh: "ដាក់ពាក្យ" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/programs"
                    className="text-sm text-primary-foreground/75 hover:text-secondary transition-colors"
                  >
                    {isKh ? item.kh : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary-foreground/50 mb-4">
              {isKh ? "ទំនាក់ទំនង" : "Contact Us"}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/75">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/75">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href="mailto:info@pss-cambodia.org"
                  className="hover:text-secondary transition-colors"
                >
                  info@pss-cambodia.org
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/75">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a
                  href="tel:+85523000000"
                  className="hover:text-secondary transition-colors"
                >
                  +855 23 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <p>
            © 2025 Promoting Skills for Success (PSS) Cambodia. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-3 h-3 text-secondary fill-secondary" /> for
            Cambodian youth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
