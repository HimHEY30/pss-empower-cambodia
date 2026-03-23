import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { usePage } from "@/hooks/useApi";
import heroStudents from "@/assets/hero-students.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import studentSuccess1 from "@/assets/student-success-1.jpg";
import studentSuccess2 from "@/assets/student-success-2.jpg";

const News = () => {
  const { language } = useLanguage();
  const { data: pageData, isLoading, error } = usePage('news');
  const isKh = language === "kh";

  // Fallback content if API is not available
  const fallbackPosts = [
    {
      id: 1,
      img: heroStudents,
      cat: isKh ? "ព่訊ប្រចាំខែ" : "Program Update",
      date: "March 10, 2025",
      title: isKh ? "ថ្នាក់ PSS លើកទី ១ ចាប់ផ្តើមការសិក្សា" : "PSS Welcomes Its Inaugural Cohort of 20 Students",
      excerpt: isKh
        ? "PSS ពិធីបើករបស់ខ្លួនជាមួយ students ២០ នាក់ ប្តេជ្ញាចិត្ត"
        : "Twenty motivated students from across Cambodia began their 2-year IT training journey at PSS's inaugural cohort in Phnom Penh.",
    },
    {
      id: 2,
      img: aboutTeam,
      cat: isKh ? "ដៃគូ" : "Partnership",
      date: "February 20, 2025",
      title: isKh ? "PSS ចុះ MOU ជាមួយ Pathmazing" : "PSS Signs MOU with Pathmazing for Graduate Hiring",
      excerpt: isKh
        ? "Pathmazing ប្រកាសភ្ជាប់ជាដៃគូ"
        : "Leading Cambodian tech company Pathmazing has committed to hiring PSS graduates and providing internship placements each year.",
    },
    {
      id: 3,
      img: studentSuccess1,
      cat: isKh ? "ជោគជ័យ" : "Success Story",
      date: "January 15, 2025",
      title: isKh ? "Sophea Meng ទទួលបានការងារ Grab" : "Sophea Meng Lands Dream Job at Grab Cambodia",
      excerpt: isKh
        ? "ប្រវត្តិ Sophea — PNC graduate ធ្លាប់ — ឥឡូវ Software Engineer"
        : "PSS/PNC alumna Sophea Meng shares how the program transformed her life from rural student to professional software engineer.",
    },
    {
      id: 4,
      img: studentSuccess2,
      cat: isKh ? "ព្រឹត្តិការណ៍" : "Event",
      date: "December 5, 2024",
      title: isKh ? "PNC ប្រារព្ធ ១៩ ឆ្នាំ និង Transition ទៅ PSS" : "PNC Celebrates 19 Years and Transitions to PSS",
      excerpt: isKh
        ? "PNC ធ្វើពិធីប្រារព្ធ ១៩ ឆ្នាំ ហើយប្រកាសការផ្លាស់ប្តូរ"
        : "The annual PNC ceremony celebrated 19 years of impact and officially announced the organizational transition to PSS for 2025.",
    },
    {
      id: 5,
      img: aboutTeam,
      cat: isKh ? "ព่訊ប្រចាំខែ" : "Program Update",
      date: "November 20, 2024",
      title: isKh ? "ការបើករបស់ PSS Mentorship Program" : "PSS Launches Alumni Mentorship Network",
      excerpt: isKh
        ? "PSS ចាប់ផ្តើម Mentorship Network"
        : "Over 50 PNC alumni have signed up to mentor incoming PSS students, creating a powerful support network for new learners.",
    },
    {
      id: 6,
      img: studentSuccess1,
      cat: isKh ? "ជំនួយ" : "Funding",
      date: "October 8, 2024",
      title: isKh ? "AFD ផ្តល់ [$200K] ដល់ PSS" : "AFD Awards $200,000 Grant to PSS",
      excerpt: isKh
        ? "AFD ដៃគូរហ័ស ផ្តល់ [$200,000]"
        : "The Agence Française de Développement has awarded PSS a $200,000 grant to expand its reach to rural provinces in 2025.",
    },
  ];

  // Use API data or fallback
  const page = pageData?.data;
  const postsSection = page?.sections?.find(s => s.type === 'posts');

  // Use API data or fallback
  const posts = postsSection?.content?.posts || fallbackPosts;

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

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-primary-foreground">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "ព័ត៌មាន" : "News & Updates"}
            </span>
            <h1 className="font-display text-primary font-bold text-4xl md:text-5xl mt-2 mb-4">
              {isKh ? "ការអប់ រំ & ការផ្លាស់ប្ដូរ" : "Stories of Education & Change"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isKh
                ? "ព័ត៌មានថ្មីៗ ឱកាស ហើយ ការព្យួររ"
                : "Stay up to date with our latest news, events, student achievements, and organizational updates."}
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-12 bg-card rounded-2xl overflow-hidden shadow-card border border-border hover-lift">
            <div className="grid lg:grid-cols-2">
              <img src={posts[0].img} alt={posts[0].title} className="w-full h-64 lg:h-full object-cover" />
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold bg-secondary/15 text-secondary px-3 py-1 rounded-full">{posts[0].cat}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {posts[0].date}
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-3">{posts[0].title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
                <Link to="/news" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all">
                  {isKh ? "អានបន្ថែម" : "Read More"} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover-lift">
                <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3 h-3 text-secondary" />
                    <span className="text-xs font-semibold text-secondary">{post.cat}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-primary mb-2 leading-snug">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link to="/news" className="text-secondary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    {isKh ? "អានបន្ថែម" : "Read More"} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
