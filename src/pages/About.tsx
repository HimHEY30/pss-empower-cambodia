import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { usePage } from "@/hooks/useApi";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const { language } = useLanguage();
  const { data: pageData, isLoading, error } = usePage('about');
  const isKh = language === "kh";

  // Fallback content if API is not available
  const fallbackValues = [
    { icon: Target, title: isKh ? "គុណភាព" : "Excellence", desc: isKh ? "ផ្តល់ការបណ្តុះបណ្តាលកម្រិតខ្ពស់" : "Delivering top-quality IT education and mentorship" },
    { icon: Heart, title: isKh ? "ការចូលរួម" : "Inclusion", desc: isKh ? "ផ្តោតលើយុវវ័យខ្វះខាត" : "Prioritizing youth from underprivileged rural backgrounds" },
    { icon: Eye, title: isKh ? "ការផ្លាស់ប្តូរ" : "Transformation", desc: isKh ? "ផ្លាស់ប្តូរជីវិតតាមរយៈការអប់រំ" : "Life-changing education that creates lasting impact" },
    { icon: Award, title: isKh ? "ភាពជាអ្នកដឹកនាំ" : "Leadership", desc: isKh ? "បណ្តុះអ្នកដឹកនាំថ្ងៃស្អែក" : "Cultivating the next generation of Cambodian leaders" },
  ];

  const fallbackTimeline = [
    { year: "2005", title: isKh ? "PNC ត្រូវបានស្ថាបនា" : "PNC Founded", desc: isKh ? "Passerelles Numériques Cambodia ចាប់ផ្តើម" : "Passerelles Numériques Cambodia launches its first IT training program" },
    { year: "2010", title: isKh ? "ពង្រីកកម្មវិធី" : "Program Expansion", desc: isKh ? "ពង្រីកទៅស្រុកបន្ថែម" : "Expanded to reach more rural provinces across Cambodia" },
    { year: "2019", title: isKh ? "ជោគជ័យ 400+" : "400+ Graduates Employed", desc: isKh ? "400+ ស្ថាបត្យករ" : "Over 400 graduates placed in quality employment" },
    { year: "2025", title: isKh ? "PSS ត្រូវបានបង្កើត" : "PSS Established", desc: isKh ? "PSS បន្តបេសកកម្ម PNC" : "PSS is founded, continuing and expanding PNC's transformative mission" },
  ];

  const fallbackTeam = [
    { name: "Dr. Sovannara Chan", role: isKh ? "នាយកប្រតិបត្តិ" : "Executive Director", initials: "SC" },
    { name: "Pisey Heng", role: isKh ? "នាយកបណ្តុះបណ្តាល" : "Director of Training", initials: "PH" },
    { name: "Sopheak Lim", role: isKh ? "ប្រធានគ្រប់គ្រង" : "Operations Manager", initials: "SL" },
    { name: "Ratana Khim", role: isKh ? "ប្រធានហិរញ្ញវត្ថុ" : "Finance Director", initials: "RK" },
  ];

  // Use API data or fallback
  const page = pageData?.data;
  const heroSection = page?.sections?.find(s => s.type === 'hero');
  const missionSection = page?.sections?.find(s => s.type === 'mission');
  const visionSection = page?.sections?.find(s => s.type === 'vision');
  const valuesSection = page?.sections?.find(s => s.type === 'values');
  const timelineSection = page?.sections?.find(s => s.type === 'timeline');
  const teamSection = page?.sections?.find(s => s.type === 'team');

  if (isLoading) {
    return (
      <main className="pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    console.warn('Failed to load page from API, using fallback content:', error);
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "អំពីយើង" : "About PSS"}
            </span>
            <h1 className="text-primary font-display font-bold text-4xl md:text-5xl mt-2 mb-4">
              {page?.title || (isKh ? "ប្រវត្តិ និងបេសកកម្ម" : "Our Story & Mission")}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {page?.content || (isKh
                ? "PSS បានបង្កើតក្នុងឆ្នាំ ២០២៥ ដើម្បីបន្តបេសកកម្មរបស់ PNC"
                : "Founded in 2025, PSS carries forward the transformative legacy of Passerelles Numériques Cambodia, bringing quality IT education to underprivileged Cambodian youth.")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <img src={heroSection?.image_url || aboutTeam} alt="PSS students" className="rounded-2xl shadow-primary w-full object-cover h-80 lg:h-96" />
            </div>
            <div className="space-y-8">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/15">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-secondary" />
                  <h3 className="font-display font-bold text-xl text-primary">{isKh ? "បេសកកម្ម" : "Mission"}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {missionSection?.content || (isKh
                    ? "ផ្តល់ការបណ្តុះបណ្តាល IT ដ៏ល្អ ជំនាញវិជ្ជាជីវៈ និងជំនួយសម្រាប់ការស្វែងរកការងារ ដល់យុវវ័យខ្វះខាត"
                    : "To provide high-quality IT training, professional skills, and employment support to underprivileged Cambodian youth, enabling them to access quality employment and build sustainable livelihoods.")}
                </p>
              </div>
              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-secondary" />
                  <h3 className="font-display font-bold text-xl text-primary">{isKh ? "ចក្ខុវិស័យ" : "Vision"}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {visionSection?.content || (isKh
                    ? "ប្រទេសកម្ពុជាដែលយុវវ័យទាំងអស់ ដោយមិនគិតពីប្រវត្តិ មានសិទ្ធិទទួលបានឱកាសសិក្សា"
                    : "A Cambodia where all youth, regardless of background, have access to quality education and the opportunities to fulfil their potential in the digital economy.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background khmer-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
              {valuesSection?.title || (isKh ? "គុណតម្លៃស្នូល" : "Core Values")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fallbackValues.map((v, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-card hover-lift border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
              {timelineSection?.title || (isKh ? "ប្រវត្តិសាស្ត្រ" : "Our Journey")}
            </h2>
            <p className="text-muted-foreground">{timelineSection?.content || (isKh ? "ពី PNC ដល់ PSS — ២០ ឆ្នាំ" : "From PNC to PSS — 20 years of transforming lives")}</p>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            {fallbackTimeline.map((item, i) => (
              <div key={i} className="relative flex gap-8 mb-10 pl-8">
                <div className="absolute left-0 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shrink-0 shadow-primary">
                  {item.year}
                </div>
                <div className="ml-10 bg-background rounded-xl p-5 border border-border hover-lift flex-1">
                  <h3 className="font-display font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-3">
              {teamSection?.title || (isKh ? "ក្រុមការងារ" : "Our Team")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fallbackTeam.map((m, i) => (
              <div key={i} className="bg-primary-dark/60 rounded-2xl p-6 text-center border border-primary-foreground/10 hover-lift">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl text-secondary-foreground">
                  {m.initials}
                </div>
                <h3 className="font-display font-bold text-primary-foreground">{m.name}</h3>
                <p className="text-secondary text-sm mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
