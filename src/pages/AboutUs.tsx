import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Target, Eye, Beaker, Users, Globe, Award } from "lucide-react";

const values = [
  {
    icon: <Beaker className="w-6 h-6 text-teal" />,
    title: "Innovation",
    desc: "Pioneering new plasticizer formulations through cutting-edge R&D and continuous improvement.",
  },
  {
    icon: <Award className="w-6 h-6 text-teal" />,
    title: "Quality",
    desc: "Every batch undergoes rigorous quality control to meet global pharmaceutical-grade standards.",
  },
  {
    icon: <Users className="w-6 h-6 text-teal" />,
    title: "Customer Focus",
    desc: "Tailored solutions designed around each client's unique formulation requirements.",
  },
  {
    icon: <Globe className="w-6 h-6 text-teal" />,
    title: "Global Reach",
    desc: "Serving industries across the US and worldwide from our Gujarat manufacturing base.",
  },
];

const AboutUs = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHeader
      label="WHO WE ARE"
      title="About Parul Chemicals"
      subtitle="Rooted in Gujarat, reaching the globe with pharmaceutical-grade plasticizer solutions."
    />

    {/* Story Section */}
    <section className="py-20 md:py-28 hex-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src="https://parulchemicals.in/wp-content/uploads/2024/01/pic5.jpg"
              alt="Parul Chemicals manufacturing facility"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-4 left-4 bg-navy text-primary-foreground px-4 py-2 rounded-md font-body text-sm font-medium">
              Est. 2016 · Vadodara, Gujarat
            </div>
          </div>

          <div>
            <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-teal mb-3 block">
              OUR STORY
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of Chemical Excellence
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Founded in 2016, Parul Chemicals has rapidly established itself as a trusted manufacturer
                of high-quality plasticizers. Based in the industrial heartland of Vadodara, Gujarat, we
                combine deep chemical expertise with modern manufacturing practices.
              </p>
              <p>
                We are committed to offering innovative plasticizer solutions that enrich all forms of life.
                Our vision is to be a global innovative solutions provider serving Pharmaceutical, Nutrition,
                Agrochemical, Consumer, and Industrial customers with customised products that are cost-effective
                and conform to excellent quality standards.
              </p>
              <p>
                With a focus on sustainability, compliance, and customer satisfaction, we continue to expand
                our reach to serve industries across the globe — building partnerships grounded in trust,
                technical precision, and consistent quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-amber" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber">
                OUR MISSION
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">
              Delivering Excellence in Every Molecule
            </h2>
            <p className="font-body text-primary-foreground/60 leading-relaxed">
              To be a leading manufacturer and supplier of pharmaceutical-grade plasticizers, delivering
              innovative, cost-effective, and globally compliant solutions. We strive to exceed customer
              expectations through rigorous quality control, continuous R&D, and a commitment to
              sustainability and safety across every product we manufacture.
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-teal" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-teal">
                OUR VISION
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">
              Global Innovation, Local Expertise
            </h2>
            <p className="font-body text-primary-foreground/60 leading-relaxed">
              To be recognized as a world-class innovative solutions provider across diverse industries —
              from pharmaceuticals and nutrition to agrochemicals and consumer products. We envision a future
              where Parul Chemicals is synonymous with quality, trust, and cutting-edge chemical innovation
              on the global stage.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 md:py-28 hex-pattern">
      <div className="container mx-auto px-6">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-teal mb-3 block">
          WHAT DRIVES US
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card border border-border rounded-lg p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutUs;
