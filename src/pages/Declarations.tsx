import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, ShieldCheck } from "lucide-react";

const declarations = [
  {
    title: "Non-Use of Child Labour Declaration",
    description: "Parul Chemicals strictly prohibits the employment of child labour in all operations and supply chains, in compliance with national and international regulations.",
    icon: <ShieldCheck className="w-5 h-5 text-teal" />,
  },
  {
    title: "Environmental Compliance Declaration",
    description: "We declare our commitment to environmental protection and compliance with all applicable environmental laws, regulations, and standards in our manufacturing processes.",
    icon: <ShieldCheck className="w-5 h-5 text-teal" />,
  },
  {
    title: "Quality Assurance Declaration",
    description: "All products manufactured by Parul Chemicals undergo rigorous quality control and testing procedures to ensure they meet or exceed global quality standards.",
    icon: <ShieldCheck className="w-5 h-5 text-teal" />,
  },
  {
    title: "Regulatory Compliance Declaration",
    description: "Parul Chemicals operates in full compliance with all applicable local, national, and international regulatory requirements for chemical manufacturing and distribution.",
    icon: <ShieldCheck className="w-5 h-5 text-teal" />,
  },
  {
    title: "Safety & Health Declaration",
    description: "We are committed to providing a safe and healthy workplace for all employees and ensuring the safe handling, storage, and transportation of all our chemical products.",
    icon: <ShieldCheck className="w-5 h-5 text-teal" />,
  },
  {
    title: "Ethical Business Practices Declaration",
    description: "Parul Chemicals upholds the highest standards of ethical conduct in all business dealings, including transparency, integrity, and fair trade practices.",
    icon: <ShieldCheck className="w-5 h-5 text-teal" />,
  },
];

const Declarations = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      label="COMPLIANCE"
      title="Declarations"
      subtitle="Our commitment to transparency, safety, and ethical business practices."
    />

    <section className="py-20 md:py-28 hex-pattern">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {declarations.map((d) => (
            <div
              key={d.title}
              className="bg-card border border-border rounded-lg p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{d.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download notice */}
        <div className="mt-16 bg-navy text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <FileText className="w-10 h-10 text-amber mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold mb-3">Need Official Documents?</h3>
          <p className="font-body text-primary-foreground/60 max-w-lg mx-auto mb-6">
            For official declaration documents, certificates, or compliance records, please contact our team directly. We'll provide the documentation you need promptly.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-amber text-foreground font-heading text-sm font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all btn-shimmer"
          >
            <Download className="w-4 h-4" />
            Request Documents
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Declarations;
