import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3, label: "Core Products", suffix: "" },
  { value: 100, label: "Quality Certified", suffix: "%" },
  { value: 6, label: "Industries Served", suffix: "+" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 30));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl text-cobalt font-bold">
        {count}{suffix}
      </p>
      <p className="font-body text-sm text-muted-foreground mt-1">{/* label set by parent */}</p>
    </div>
  );
};

const AboutSection = () => (
  <section className="py-24 md:py-32 bg-background hex-pattern">
    <div className="container mx-auto px-6">
      <p className="font-heading text-xs tracking-[0.25em] uppercase text-teal mb-4">
        Who We Are
      </p>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://parulchemicals.in/wp-content/uploads/2024/01/pic5.jpg"
              alt="Parul Chemicals manufacturing facility in Vadodara, Gujarat"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal/30 to-cobalt/20" />
          </div>
          <div className="absolute bottom-4 left-4 bg-navy text-primary-foreground px-5 py-3 rounded-xl font-heading text-sm font-semibold shadow-xl">
            Est. 2016 · Vadodara, Gujarat
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="font-heading text-3xl md:text-[42px] leading-tight text-foreground mb-6">
            Welcome to<br />Parul Chemicals
          </h2>
          <p className="font-body text-base md:text-[17px] text-muted-foreground leading-relaxed mb-4">
            Parul Chemicals is committed to offering high-quality and innovative
            Plasticizers to enrich all forms of life.
          </p>
          <p className="font-body text-base md:text-[17px] text-muted-foreground leading-relaxed mb-8">
            We want to be a global Innovative Solutions provider serving
            Pharmaceutical, Nutrition, Agrochemical, Consumer and Industrial
            customers with our customised products and solutions that are
            innovative, cost-effective and conforming to excellent quality
            standards.
          </p>
          <a
            href="/about-us"
            className="inline-flex items-center gap-2 bg-cobalt text-primary-foreground font-heading text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-cobalt-light transition-colors mb-10"
          >
            Know More →
          </a>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
