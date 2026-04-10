import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    title: "Innovation and Customization",
    icon: "https://parulchemicals.in/wp-content/uploads/2024/10/solution.png",
    points: [
      "Cutting-edge research and development",
      "Tailored solutions to meet diverse industry needs",
      "Continuous improvement and adaptation to new trends",
    ],
  },
  {
    title: "Uncompromising Quality",
    icon: "https://parulchemicals.in/wp-content/uploads/2024/10/badge.png",
    points: [
      "Compliance with global quality standards",
      "Rigorous quality control and testing processes",
      "Reliable and long-lasting product performance",
    ],
  },
  {
    title: "Diverse Industry Expertise",
    icon: "https://parulchemicals.in/wp-content/uploads/2024/10/industry.png",
    points: [
      "Serving industries like Agrochemicals, Nutrition, and more",
      "Strong global presence and customer base",
      "Diverse product portfolio and industry expertise",
    ],
  },
];

const WhySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-navy hex-pattern-dark clip-diagonal" ref={ref}>
      <div className="container mx-auto px-6 py-8">
        <p className="font-heading text-xs tracking-[0.25em] uppercase text-teal mb-4">
          Why Choose Us
        </p>
        <h2 className="font-display text-3xl md:text-[48px] leading-tight text-primary-foreground mb-14">
          Why Parul Chemicals
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="w-16 h-16 mb-6 bg-cobalt/20 rounded-xl flex items-center justify-center p-3">
                <img src={pillar.icon} alt={pillar.title} className="w-10 h-10 object-contain brightness-0 invert" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-4">
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 font-body text-sm text-primary-foreground/70 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
