import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        label="GET IN TOUCH"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for inquiries, bulk orders, or technical support."
      />

      <section className="py-20 md:py-28 hex-pattern">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-teal mb-3 block">
                  REACH US
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Whether you're sourcing plasticizers for pharmaceuticals, nutrition, or industrial applications —
                  our team is ready to help.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="mailto:parulchemicals2016@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">Email</p>
                    <p className="font-body text-sm text-muted-foreground group-hover:text-teal transition-colors">
                      parulchemicals2016@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+919427784082" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">Phone</p>
                    <p className="font-body text-sm text-muted-foreground group-hover:text-teal transition-colors">
                      +91 94277 84082
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">Address</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Ranjan Society 2 Near, Lions Hall Race Course,
                      <br />
                      Vadodara, Gujarat, 380007
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="Your full name"
                      className="flex h-11 w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-body ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      maxLength={255}
                      placeholder="you@company.com"
                      className="flex h-11 w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-body ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a subject</option>
                    <option value="pricing">Pricing & Bulk Orders</option>
                    <option value="technical">Technical Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="documentation">Documentation Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    maxLength={2000}
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="flex w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-body ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 md:h-80 bg-navy relative overflow-hidden">
        <iframe
          title="Parul Chemicals Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169!2d73.1812!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzI2LjAiTiA3M8KwMTAnNTIuMyJF!5e0!3m2!1sen!2sin!4v1"
          className="w-full h-full border-0 opacity-70"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
