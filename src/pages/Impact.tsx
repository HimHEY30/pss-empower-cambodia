import { Quote, TrendingUp, Users, Briefcase } from "lucide-react";
import studentSuccess1 from "@/assets/student-success-1.jpg";
import studentSuccess2 from "@/assets/student-success-2.jpg";
import aboutTeam from "@/assets/about-team.jpg";

interface Props { language: "en" | "kh"; }

const Impact = ({ language }: Props) => {
  const isKh = language === "kh";

  const stories = [
    {
      name: "Sophea Meng",
      origin: isKh ? "មកពី Kampong Cham" : "From Kampong Cham Province",
      role: isKh ? "វិស្វករសូហ្វវែរ, Grab Cambodia" : "Software Engineer @ Grab Cambodia",
      before: isKh ? " កសិករ, គ្មានបទពិសោធន៍ IT" : "Farmer's daughter with zero IT experience",
      after: isKh ? "ប្រាក់ខែ $800/ខែ" : "Earning $800/month as a professional developer",
      img: studentSuccess1,
      quote: isKh
        ? "PSS ផ្តល់ឱ្យខ្ញុំនូវឱកាស ដែលខ្ញុំមិនហ៊ានស្រមមើលឃើញ"
        : "PSS gave me an opportunity I never dared to dream of. Today I support my entire family.",
    },
    {
      name: "Dara Keo",
      origin: isKh ? "មកពី Siem Reap" : "From Siem Reap Province",
      role: isKh ? "Front-end Developer, Pathmazing" : "Front-end Developer @ Pathmazing",
      before: isKh ? "គ្រួសារក្រ, ចេញពីសាលារៀន" : "School dropout due to family poverty",
      after: isKh ? "ប្រាក់ខែ $600/ខែ និងលើកស្ទួយអាហារូបករណ៍" : "Earning $600/month and mentors current PSS students",
      img: studentSuccess2,
      quote: isKh
        ? "ខ្ញុំប្រែក្លាយបានពីការចាកចេញពីសាលា ទៅជាដៃគូអ្នកបង្ហាត់"
        : "I went from a school dropout to a professional developer who now mentors others.",
    },
    {
      name: "Channary Ros",
      origin: isKh ? "មកពី Prey Veng" : "From Prey Veng Province",
      role: isKh ? "UX Designer, Smart Axiata" : "UX Designer @ Smart Axiata",
      before: isKh ? "ស្ត្រីជនបទ គ្មានការងារ" : "Rural woman with no technical background",
      after: isKh ? "ក្លាយជា UX Designer ជំនាញ" : "Now a skilled UX designer at a leading telecom",
      img: aboutTeam,
      quote: isKh
        ? "PSS បង្ហាញខ្ញុំថា ស្ត្រីខ្មែរអាចមានការងារ tech ដ៏ល្អ"
        : "PSS showed me that Cambodian women belong in tech. I'm proof of that.",
    },
  ];

  const outcomes = [
    { icon: Users, val: "520+", label: isKh ? "សិស្សបានបញ្ចប់" : "Graduates" },
    { icon: Briefcase, val: "87%", label: isKh ? "ត្រូវបានជួលក្នុង 3 ខែ" : "Employed within 3 months" },
    { icon: TrendingUp, val: "3x", label: isKh ? "ប្រាក់ខែខ្ពស់ជាង" : "Average income increase" },
  ];

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-primary-foreground">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "ផលប៉ះពាល់" : "Impact & Stories"}
            </span>
            <h1 className="text-primary font-display font-bold text-4xl md:text-5xl mt-2 mb-4">
              {isKh ? "ការផ្លាស់ប្តូរជីវិតជាក់ស្តែង" : "Real Lives, Real Change"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isKh
                ? "ស្វែងយល់ពីរបៀបដែល PSS ផ្លាស់ប្តូរជីវិតរបស់យុវវ័យខ្មែរ"
                : "Discover how PSS is changing lives, families, and communities across Cambodia through education and opportunity."}
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {outcomes.map((o, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-background border border-border shadow-card">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mx-auto mb-3">
                  <o.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="font-display font-bold text-3xl text-primary mb-1">{o.val}</div>
                <p className="text-muted-foreground text-sm">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
              {isKh ? "ផ្លូវនៃការផ្លាស់ប្តូរ" : "Transformation Stories"}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {isKh ? "ជីវិតព្យួររ ដល់ស្ថានភាពវិជ្ជាជីវៈ" : "From challenging beginnings to professional success"}
            </p>
          </div>
          <div className="space-y-16">
            {stories.map((s, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <img src={s.img} alt={s.name} className="rounded-2xl shadow-card w-full h-72 object-cover" />
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-secondary text-sm font-medium">{s.origin}</span>
                    <h3 className="font-display font-bold text-2xl text-primary mt-1">{s.name}</h3>
                    <p className="text-muted-foreground text-sm">{s.role}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-muted rounded-xl border border-border">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{isKh ? "មុន PSS" : "Before PSS"}</div>
                      <p className="text-sm text-foreground font-medium">{s.before}</p>
                    </div>
                    <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                      <div className="text-xs text-secondary uppercase tracking-wide mb-1">{isKh ? "ក្រោយ PSS" : "After PSS"}</div>
                      <p className="text-sm text-foreground font-medium">{s.after}</p>
                    </div>
                  </div>
                  <blockquote className="relative pl-6 border-l-4 border-secondary">
                    <Quote className="w-5 h-5 text-secondary absolute -left-1 top-0 opacity-50" />
                    <p className="text-muted-foreground italic text-base leading-relaxed">"{s.quote}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
