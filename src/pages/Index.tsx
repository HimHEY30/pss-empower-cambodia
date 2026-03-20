import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, GraduationCap, TrendingUp, ChevronDown, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudents from "@/assets/hero-students.jpg";
import studentSuccess1 from "@/assets/student-success-1.jpg";
import studentSuccess2 from "@/assets/student-success-2.jpg";

interface Props { language: "en" | "kh"; }

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

const useSectionFade = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const StatCard = ({ icon: Icon, value, suffix, label }: { icon: any; value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref as any} className="text-center p-6">
      <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-secondary" />
      </div>
      <div className="font-display font-bold text-4xl text-primary mb-1">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

const Index = ({ language }: Props) => {
  const isKh = language === "kh";
  const s1 = useSectionFade();
  const s2 = useSectionFade();
  const s3 = useSectionFade();
  const s4 = useSectionFade();

  const stats = [
    { icon: Users, value: 520, suffix: "+", label: isKh ? "សិស្សបានបណ្តុះបណ្តាល" : "Students Trained" },
    { icon: Briefcase, value: 87, suffix: "%", label: isKh ? "ត្រូវបានជួល" : "Employment Rate" },
    { icon: GraduationCap, value: 18, suffix: "", label: isKh ? "ឆ្នាំនៃបទពិសោធន៍" : "Years of Experience" },
    { icon: TrendingUp, value: 40, suffix: "+", label: isKh ? "ដៃគូក្រុមហ៊ុន" : "Company Partners" },
  ];

  const testimonials = [
    {
      name: "Sophea Meng",
      role: isKh ? "វិស្វករសូហ្វវែរ, Grab Cambodia" : "Software Engineer, Grab Cambodia",
      text: isKh
        ? "PSS បានផ្លាស់ប្តូរជីវិតខ្ញុំ។ ខ្ញុំបានឡើងពីអ្នកស្រុកស្រែដែលមិនដែលប៉ះកុំព្យូទ័រ ដល់ក្លាយជាអ្នកអភិវឌ្ឍន៍ software ។"
        : "PSS completely transformed my life. I went from a rural student who had never touched a computer to a professional software developer in just two years.",
      img: studentSuccess1,
    },
    {
      name: "Dara Keo",
      role: isKh ? "អ្នកអភិវឌ្ឍន៍ Front-end, Pathmazing" : "Front-end Developer, Pathmazing",
      text: isKh
        ? "កម្មវិធីបណ្តុះបណ្តាល IT ២ ឆ្នាំបានផ្តល់ឱ្យខ្ញុំនូវវិជ្ជាជីវៈ និងទំនុកចិត្ត។"
        : "The 2-year IT training program gave me both the technical skills and the confidence to compete in the job market. Today I work at a leading tech company.",
      img: studentSuccess2,
    },
  ];

  const programs = [
    {
      icon: "💻",
      title: isKh ? "ការអភិវឌ្ឍន៍ Web" : "Web Development",
      desc: isKh ? "HTML, CSS, JavaScript, React, PHP, MySQL" : "Full-stack web development with modern technologies",
    },
    {
      icon: "🧠",
      title: isKh ? "ជំនាញទន់" : "Soft Skills",
      desc: isKh ? "ការទំនាក់ទំនង, ភាពជាអ្នកដឹកនាំ" : "Communication, leadership, and professional development",
    },
    {
      icon: "🏢",
      title: isKh ? "ការត្រៀមខ្លួន" : "Career Readiness",
      desc: isKh ? "ការសម្ភាសន៍, ចំណងជើងការងារ" : "Interview prep, resume writing, and job placement",
    },
  ];

  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroStudents}
          alt="Cambodian students learning IT"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        {/* Cambodian-inspired subtle pattern overlay */}
        <div className="absolute inset-0 khmer-pattern opacity-30" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-1.5 text-secondary text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-count-pulse" />
              {isKh ? "ស្ថាបនា ២០២៥ — ភ្នំពេញ, កម្ពុជា" : "Established 2025 — Phnom Penh, Cambodia"}
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {isKh ? (
                <>ផ្តល់អំណាចដល់<br /><span className="text-secondary">យុវវ័យខ្មែរ</span><br />តាមរយៈជំនាញ</>
              ) : (
                <>Empowering<br /><span className="text-secondary">Cambodian Youth</span><br />Through Skills & Education</>
              )}
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {isKh
                ? "PSS ផ្តល់ការបណ្តុះបណ្តាល IT ២ ឆ្នាំដល់យុវវ័យខ្មែរដែលខ្វះខាត ដើម្បីបើកឱកាសការងារ"
                : "PSS provides a 2-year IT training program for underprivileged Cambodian youth — opening pathways to quality employment and a brighter future."}
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/get-involved">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold shadow-warm px-7">
                  {isKh ? "បរិច្ចាគឥឡូវ" : "Donate Now"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/15 px-7">
                  {isKh ? "ចូលរួមកម្មវិធី" : "Join Program"}
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground/80 bg-transparent hover:bg-primary-foreground/10 px-7">
                  {isKh ? "ជាដៃគូ" : "Partner With Us"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* STATS */}
      <section id="stats" ref={s1 as any} className="section-fade py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
              {isKh ? "ផលប៉ះពាល់របស់យើង" : "Our Impact in Numbers"}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {isKh ? "ជាបន្តនៃ PNC ២០ ឆ្នាំ យើងបន្តផ្លាស់ប្តូរជីវិត" : "Building on 20 years of PNC's legacy, PSS continues to transform lives across Cambodia"}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-gradient-subtle rounded-2xl hover-lift cursor-default">
                <StatCard {...stat} />
                <p className="text-center text-sm text-muted-foreground pb-6 px-4 -mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section ref={s2 as any} className="section-fade py-20 bg-background khmer-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "កម្មវិធីសិក្សា" : "What We Offer"}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2 mb-3">
              {isKh ? "កម្មវិធី IT ២ ឆ្នាំ" : "2-Year IT Training Program"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isKh
                ? "កម្មវិធីបណ្តុះបណ្តាលរួមមាន ការអភិវឌ្ឍន៍ Software ជំនាញទន់ និងការត្រៀមខ្លួន"
                : "A comprehensive program combining technical skills, soft skills, and professional development to ensure our graduates are job-ready."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {programs.map((prog, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 shadow-card hover-lift border border-border">
                <div className="text-4xl mb-4">{prog.icon}</div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">{prog.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/programs">
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 shadow-primary">
                {isKh ? "ស្វែងយល់ពីកម្មវិធី" : "Explore Full Program"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={s3 as any} className="section-fade py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "រឿងជោគជ័យ" : "Success Stories"}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mt-2 mb-3">
              {isKh ? "ពីជីវិតជាក់ស្តែង" : "Real Student Journeys"}
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">
              {isKh ? "ជោគជ័យរបស់ students ជាការបំណង្ហាញ" : "Hear directly from students whose lives have been transformed through PSS"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-primary-dark/60 rounded-2xl p-8 border border-primary-foreground/10 hover-lift">
                <Quote className="w-8 h-8 text-secondary mb-4 opacity-80" />
                <p className="text-primary-foreground/85 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-secondary" />
                  <div>
                    <div className="font-display font-bold text-primary-foreground">{t.name}</div>
                    <div className="text-secondary text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/impact">
              <Button variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8">
                {isKh ? "ពិនិត្យរឿងទាំងអស់" : "View All Success Stories"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section ref={s4 as any} className="section-fade py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "ជួយដល់យើង" : "Support Our Mission"}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2 mb-4">
              {isKh ? "ការបរិច្ចាគម្នាក់ — ផ្លាស់ប្តូរជីវិតមួយ" : "One Donation, One Changed Life"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isKh
                ? "ការបរិច្ចាគរបស់អ្នកផ្តល់ឱ្យសិស្សម្នាក់នូវឱកាសសិក្សា"
                : "Your donation funds scholarships, equipment, and mentorship for underprivileged youth in Cambodia."}
            </p>
            {/* Progress Bar */}
            <div className="bg-muted rounded-full h-4 mb-3 overflow-hidden">
              <div
                className="h-full bg-gradient-warm rounded-full transition-all duration-1000"
                style={{ width: "68%" }}
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mb-8">
              <span>{isKh ? "បានប្រមូល $34,000" : "$34,000 raised"}</span>
              <span className="font-semibold text-secondary">68%</span>
              <span>{isKh ? "គោលដៅ $50,000" : "Goal: $50,000"}</span>
            </div>
            <Link to="/get-involved">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-10 shadow-warm text-base">
                {isKh ? "បរិច្ចាគឥឡូវ" : "Donate Now"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-14 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-widest mb-8">
            {isKh ? "ដៃគូរបស់យើង" : "Our Trusted Partners"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Grab", "Pathmazing", "Manulife", "Smart Axiata", "Wing Bank", "USAID", "AFD"].map((p) => (
              <div key={p} className="font-display font-bold text-lg text-muted-foreground hover:text-primary transition-colors cursor-default">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
