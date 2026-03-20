import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, BookOpen, Users, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudents from "@/assets/hero-students.jpg";
import aboutTeam from "@/assets/about-team.jpg";

interface Props { language: "en" | "kh"; }

const Programs = ({ language }: Props) => {
  const isKh = language === "kh";

  const curriculum = [
    {
      year: isKh ? "ឆ្នាំ ១" : "Year 1",
      color: "primary",
      topics: [
        isKh ? "HTML & CSS គ្រឹះ" : "HTML & CSS Fundamentals",
        isKh ? "JavaScript ចំណូលទៅក្នុង" : "Introduction to JavaScript",
        isKh ? "ការប្រើប្រាស់ Linux" : "Linux & Command Line",
        isKh ? "SQL & Databases" : "SQL & Databases",
        isKh ? "English Communication" : "English Communication",
        isKh ? "ជំនាញការងារ" : "Professional Skills",
      ],
    },
    {
      year: isKh ? "ឆ្នាំ ២" : "Year 2",
      color: "secondary",
      topics: [
        isKh ? "React / Vue.js" : "React / Vue.js",
        isKh ? "Node.js / PHP Backend" : "Node.js / PHP Backend",
        isKh ? "Git & Version Control" : "Git & Version Control",
        isKh ? "Project Management" : "Project Management",
        isKh ? "ការបង្ហាញ" : "Public Speaking",
        isKh ? "ការស្វែងរកការងារ" : "Job Placement Support",
      ],
    },
  ];

  const steps = [
    { num: "01", title: isKh ? "ដាក់ពាក្យ" : "Apply Online", desc: isKh ? "បំពេញពាក្យស្នើ" : "Fill in our online application form with your background" },
    { num: "02", title: isKh ? "ការអានអ្នកដាក់ពាក្យ" : "Selection Test", desc: isKh ? "ធ្វើតេស្ត" : "Take our aptitude and motivation test" },
    { num: "03", title: isKh ? "ការសម្ភាស" : "Interview", desc: isKh ? "ការសម្ភាសសង្ខេប" : "Short interview with our admissions team" },
    { num: "04", title: isKh ? "ចូលរៀន" : "Enroll", desc: isKh ? "ចូលរៀន ២ ឆ្នាំ" : "Begin your 2-year transformative journey with PSS" },
  ];

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroStudents} alt="IT Training" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-primary-foreground">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "កម្មវិធីសិក្សា" : "Our Programs"}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl mt-2 mb-4">
              {isKh ? "កម្មវិធី IT ២ ឆ្នាំ" : "2-Year IT Training Program"}
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              {isKh
                ? "ការបណ្តុះបណ្តាលពេញលេញ ស្ថាបនាលើបទពិសោធន៍ PNC ២០ ឆ្នាំ"
                : "A comprehensive, scholarship-based program built on 20 years of PNC experience, designed to take motivated students from zero to job-ready."}
            </p>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Clock, val: "2", unit: isKh ? "ឆ្នាំ" : "Years", label: isKh ? "រយៈពេលបណ្តុះបណ្តាល" : "Full-time Training" },
              { icon: BookOpen, val: "100%", unit: "", label: isKh ? "អាហារូបករណ៍" : "Scholarship-Based" },
              { icon: Users, val: "20", unit: "", label: isKh ? "នាក់ក្នុងថ្នាក់" : "Students per Cohort" },
              { icon: Monitor, val: "87%", unit: "", label: isKh ? "អត្រាការងារ" : "Employment Rate" },
            ].map((h, i) => (
              <div key={i} className="text-center p-6 bg-background rounded-2xl border border-border shadow-card hover-lift">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center mx-auto mb-3">
                  <h.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="font-display font-bold text-3xl text-primary">{h.val}<span className="text-xl">{h.unit}</span></div>
                <p className="text-muted-foreground text-sm mt-1">{h.label}</p>
              </div>
            ))}
          </div>

          {/* Curriculum */}
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
              {isKh ? "កម្មវិធីសិក្សា" : "Curriculum Overview"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((yr, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${i === 0 ? "border-primary/20 bg-primary/5" : "border-secondary/20 bg-secondary/5"}`}>
                <h3 className={`font-display font-bold text-2xl mb-6 ${i === 0 ? "text-primary" : "text-secondary-dark"}`}>
                  {yr.year}
                </h3>
                <ul className="space-y-3">
                  {yr.topics.map((t, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className={`w-4 h-4 shrink-0 ${i === 0 ? "text-primary" : "text-secondary"}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 bg-background khmer-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
                {isKh ? "ជីវិតសិស្ស" : "Student Life"}
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mt-2 mb-4">
                {isKh ? "ច្រើនជាងការសិក្សា" : "More Than Coding"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {isKh
                  ? "ក្រៅពីការសិក្សាសរសេរកូដ សិស្សត្រូវចូលរួមក្នុងព្រឹត្តិការណ៍វប្បធម៌ ការទស្សនកិច្ច ហ្គែម ហើយត្រូវទទួលបានការណែនាំអំពីវិជ្ជាជីវៈ"
                  : "Beyond coding, students participate in cultural events, company visits, sports, and receive continuous mentorship from industry professionals and alumni."}
              </p>
              <ul className="space-y-3">
                {[
                  isKh ? "ការណែនាំ 1-to-1 ពី Alumni" : "1-on-1 mentorship from PSS alumni",
                  isKh ? "ទស្សនកិច្ចក្រុមហ៊ុន" : "Company visits and tech talks",
                  isKh ? "ការប្រកួតកូដ" : "Hackathons and coding competitions",
                  isKh ? "ការណែនាំភាសាអង់គ្លេស" : "English language support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <img src={aboutTeam} alt="Student life" className="rounded-2xl shadow-card object-cover h-80 w-full" />
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-3">
              {isKh ? "ដំណើរការដាក់ពាក្យ" : "How to Apply"}
            </h2>
            <p className="text-primary-foreground/70">
              {isKh ? "ដំណើរការសាមញ្ញ ១ ខែ" : "Simple 4-step process taking 4-6 weeks"}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((s, i) => (
              <div key={i} className="bg-primary-dark/60 rounded-2xl p-6 border border-primary-foreground/10 hover-lift">
                <div className="text-4xl font-display font-bold text-secondary mb-3">{s.num}</div>
                <h3 className="font-display font-bold text-primary-foreground mb-2">{s.title}</h3>
                <p className="text-primary-foreground/65 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-10 shadow-warm">
                {isKh ? "ដាក់ពាក្យឥឡូវ" : "Apply Now"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;
