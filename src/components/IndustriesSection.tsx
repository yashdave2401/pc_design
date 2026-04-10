const industries = [
  { icon: "💊", label: "Pharmaceutical" },
  { icon: "🌾", label: "Agrochemical" },
  { icon: "🥗", label: "Nutrition" },
  { icon: "🧴", label: "Consumer Products" },
  { icon: "🏭", label: "Industrial" },
  { icon: "🍱", label: "Food & Beverage" },
];

const IndustriesSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <p className="font-heading text-xs tracking-[0.25em] uppercase text-teal mb-4">
        Our Reach
      </p>
      <h2 className="font-heading text-3xl md:text-[48px] leading-tight text-foreground mb-14">
        Industries We Serve
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {industries.map((ind) => (
          <div
            key={ind.label}
            className="group flex items-center gap-3 border border-teal/40 rounded-full px-6 py-4 transition-all duration-300 hover:bg-teal hover:border-teal cursor-default"
          >
            <span className="text-2xl">{ind.icon}</span>
            <span className="font-heading text-sm font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
              {ind.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
