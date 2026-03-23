import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props { language: "en" | "kh"; }

const Contact = ({ language }: Props) => {
  const isKh = language === "kh";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-primary-foreground">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              {isKh ? "ទំនាក់ទំនង" : "Contact Us"}
            </span>
            <h1 className="font-display text-primary font-bold text-4xl md:text-5xl mt-2 mb-4">
              {isKh ? "សូមទំនាក់ទំនង" : "Get in Touch"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {isKh
                ? "ការសំណួរ ឬការផ្ដើម — យើងរីករាយទទួល"
                : "Whether you have questions about our programs, want to donate, or wish to partner — we'd love to hear from you."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="font-display font-bold text-2xl text-primary mb-6">
                {isKh ? "ផ្ញើសារ" : "Send Us a Message"}
              </h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary mb-2">
                    {isKh ? "អរគុណ!" : "Thank You!"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isKh ? "យើងនឹងតបវិញក្នុងពេល 24 ម៉ោង" : "We'll get back to you within 24 hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {isKh ? "ឈ្មោះ" : "Full Name"} *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                        placeholder={isKh ? "ឈ្មោះ..." : "Your name"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        {isKh ? "អ៊ីមែល" : "Email"} *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {isKh ? "ប្រធានបទ" : "Subject"}
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                    >
                      <option value="">{isKh ? "ជ្រើសរើស..." : "Select a topic..."}</option>
                      <option>{isKh ? "ដាក់ពាក្យចុះឈ្មោះ" : "Program Application"}</option>
                      <option>{isKh ? "ការបរិច្ចាគ" : "Donation Inquiry"}</option>
                      <option>{isKh ? "ការជាដៃគូ" : "Partnership Opportunity"}</option>
                      <option>{isKh ? "ការស្ម័គ្រចិត្ត" : "Volunteering"}</option>
                      <option>{isKh ? "ផ្សេងៗ" : "General Inquiry"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {isKh ? "សារ" : "Message"} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                      placeholder={isKh ? "សារ..." : "Your message..."}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-primary">
                    <Send className="w-4 h-4 mr-2" />
                    {isKh ? "ផ្ញើ" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-primary mb-6">
                  {isKh ? "ព័ត៌មានទំនាក់ទំនង" : "Contact Information"}
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, title: isKh ? "អាសយដ្ឋាន" : "Address", val: "Street 217, Phnom Penh, Cambodia" },
                    { icon: Mail, title: isKh ? "អ៊ីមែល" : "Email", val: "info@pss-cambodia.org" },
                    { icon: Phone, title: isKh ? "ទូរស័ព្ទ" : "Phone", val: "+855 23 000 000" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">{c.title}</div>
                        <div className="text-sm font-medium text-foreground">{c.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display font-bold text-lg text-primary mb-4">
                  {isKh ? "ហ្វេសប៊ុក & LinkedIn" : "Follow Us"}
                </h3>
                <div className="flex gap-3">
                  {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125220.68975977247!2d104.79843899999999!3d11.5563738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PSS Cambodia Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
