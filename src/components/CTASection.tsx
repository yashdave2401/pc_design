const CTASection = () => (
  <section className="relative py-24 md:py-32 overflow-hidden" style={{
    background: "linear-gradient(135deg, hsl(205,100%,30%), hsl(185,100%,35%))"
  }}>
    {/* Floating particles */}
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-primary-foreground/20"
        style={{
          left: `${(i * 8.3) % 100}%`,
          top: `${(i * 13.7) % 100}%`,
          animation: `float-particle ${3 + (i % 3)}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
        }}
      />
    ))}

    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="font-display text-3xl md:text-[52px] leading-tight text-primary-foreground mb-6">
        Let's connect to<br />discuss more
      </h2>
      <p className="font-body text-lg text-primary-foreground/60 max-w-xl mx-auto mb-10">
        Whether you're sourcing for pharma, nutrition, or industrial needs — we're ready to build a solution for you.
      </p>
      <a
        href="/contact-us/"
        className="inline-flex items-center gap-2 bg-amber text-foreground font-heading text-base font-semibold px-10 py-4 rounded-full hover:brightness-110 transition-all btn-shimmer shadow-lg"
      >
        Connect Now →
      </a>
    </div>
  </section>
);

export default CTASection;
