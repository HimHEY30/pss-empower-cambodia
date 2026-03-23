import { useState } from "react";
import { Heart, Users, Handshake, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { usePage } from "@/hooks/useApi";

const GetInvolved = () => {
  const { language } = useLanguage();
  const { data: pageData, isLoading, error } = usePage('get-involved');
  const isKh = language === "kh";
  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donated, setDonated] = useState(false);

  const amounts = [10, 25, 50, 100, 250];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setDonated(true);
    setTimeout(() => setDonated(false), 4000);
  };

  // Fallback content if API is not available
  const fallbackImpacts = [
    { amount: "$10", impact: isKh ? "ផ្គត់ផ្គង់ textbook ១ ខែ" : "Provides 1 month of textbooks" },
    { amount: "$25", impact: isKh ? "ទ្រទ្រង់ meal ១ ខែ" : "Covers meals for 1 student for a month" },
    { amount: "$50", impact: isKh ? "ទ្រទ្រង់ internet 1 ខែ" : "Funds internet access for a student for a month" },
    { amount: "$100", impact: isKh ? "ស្គ្រីបចំណាយ ១ ខែ" : "Covers monthly scholarship for one student" },
    { amount: "$250", impact: isKh ? "ហ្នឹងគ្រឿងឧបករណ៍" : "Provides a laptop for a student" },
  ];

  // Use API data or fallback
  const page = pageData?.data;
  const impactsSection = page?.sections?.find(s => s.type === 'impacts');

  // Use API data or fallback
  const impacts = impactsSection?.content?.impacts || fallbackImpacts;

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
              {isKh ? "ចូលរួម" : "Get Involved"}
            </span>
            <h1 className="text-primary font-display font-bold text-4xl md:text-5xl mt-2 mb-4">
              {isKh ? "ជួយផ្លាស់ប្តូរជីវិត" : "Help Change a Life Today"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isKh
                ? "ការជួយរបស់អ្នក ជាការចូលរួមផ្ទាល់ ក្នុងការផ្លាស់ប្តូរជីវិតយុវវ័យខ្មែរ"
                : "Whether you donate, volunteer, or partner with us — every contribution creates lasting change for Cambodian youth."}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Ways */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Heart, title: isKh ? "បរិច្ចាគ" : "Donate", color: "secondary", desc: isKh ? "ជំនួយហិរញ្ញវត្ថុដល់ students" : "Fund scholarships and program costs", link: "#donate" },
              { icon: Users, title: isKh ? "ស្ម័គ្រចិត្ត" : "Volunteer", color: "primary", desc: isKh ? "ចែករំលែកជំនាញ ចំណេះ" : "Share your expertise as a mentor or trainer", link: "#volunteer" },
              { icon: Handshake, title: isKh ? "ជាដៃគូ" : "Partner", color: "primary", desc: isKh ? "ភ្ជាប់ graduates ជាមួយការងាររបស់អ្នក" : "Connect our graduates with employment opportunities", link: "#partner" },
            ].map((way, i) => (
              <a key={i} href={way.link} className="block bg-background rounded-2xl p-8 border border-border shadow-card hover-lift text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${way.color === "secondary" ? "bg-secondary/15" : "bg-primary/10"}`}>
                  <way.icon className={`w-8 h-8 ${way.color === "secondary" ? "text-secondary" : "text-primary"}`} />
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-2">{way.title}</h3>
                <p className="text-muted-foreground text-sm">{way.desc}</p>
              </a>
            ))}
          </div>

          {/* Donation Form */}
          <div id="donate" className="max-w-2xl mx-auto">
            <div className="bg-background rounded-2xl p-8 shadow-card border border-border">
              <h2 className="font-display font-bold text-2xl text-primary mb-2">
                {isKh ? "ធ្វើការបរិច្ចាគ" : "Make a Donation"}
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                {isKh ? "ការបរិច្ចាគទាំងអស់ប្រើប្រាស់ 100% សម្រាប់ students" : "100% of donations go directly to student scholarships and program costs"}
              </p>

              {/* Progress */}
              <div className="bg-muted rounded-full h-3 mb-2 overflow-hidden">
                <div className="h-full bg-gradient-warm rounded-full" style={{ width: "68%" }} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mb-6">
                <span>{isKh ? "បានប្រមូល $34,000" : "$34,000 raised"}</span>
                <span className="font-semibold text-secondary">68% of $50,000 goal</span>
              </div>

              <form onSubmit={handleDonate}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => { setDonationAmount(a); setCustomAmount(""); }}
                      className={`px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all ${
                        donationAmount === a
                          ? "bg-secondary text-secondary-foreground border-secondary shadow-warm"
                          : "bg-muted text-foreground border-border hover:border-secondary hover:text-secondary"
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
                <div className="mb-5">
                  <input
                    type="number"
                    placeholder={isKh ? "ចំនួនផ្ទាល់ខ្លួន..." : "Custom amount ($)"}
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setDonationAmount(null); }}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold shadow-warm"
                  disabled={donated}
                >
                  {donated ? (
                    <><Check className="w-4 h-4 mr-2" /> {isKh ? "អរគុណ!" : "Thank You!"}</>
                  ) : (
                    <><Heart className="w-4 h-4 mr-2" /> {isKh ? "បរិច្ចាគ" : "Donate"} ${donationAmount || customAmount || "—"}</>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impact per $ */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-3">
              {isKh ? "ការបរិច្ចាគរបស់អ្នកផ្លាស់ប្តូរអ្វី?" : "Your Donation Impact"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {impacts.map((im, i) => (
              <div key={i} className="bg-primary-dark/60 rounded-2xl p-5 border border-primary-foreground/10 text-center hover-lift">
                <div className="font-display font-bold text-3xl text-secondary mb-2">{im.amount}</div>
                <p className="text-primary-foreground/75 text-sm">{im.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Partner */}
      <section id="volunteer" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-2xl text-primary mb-3">
                {isKh ? "ស្ម័គ្រចិត្ត" : "Volunteer with Us"}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {isKh
                  ? "ចែករំលែកជំនាញ IT ការបង្ហាត់ ភាសា ឬជំនាញ soft skills"
                  : "Share your expertise in IT, mentoring, language coaching, or career guidance. Time commitment is flexible."}
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold">
                  {isKh ? "ចុះឈ្មោះ" : "Sign Up to Volunteer"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div id="partner" className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <Handshake className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-display font-bold text-2xl text-primary mb-3">
                {isKh ? "ភ្ជាប់ជាដៃគូ" : "Become a Partner"}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {isKh
                  ? "ភ្ជាប់ graduates ជាមួយក្រុមហ៊ុន ឬជំទូលការសិក្សា"
                  : "Hire our graduates, sponsor the program, or partner to provide internships and real-world projects."}
              </p>
              <Link to="/contact">
                <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold">
                  {isKh ? "ទំនាក់ទំនងយើង" : "Contact for Partnership"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
