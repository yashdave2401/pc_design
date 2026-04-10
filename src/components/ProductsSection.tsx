const products = [
  {
    name: "Triethyl Citrate (TEC)",
    image:
      "https://parulchemicals.in/wp-content/uploads/2024/10/triethyl_citrate-1024x1024.jpeg",
    formula: "C₁₂H₂₀O₇",
    tags: ["Pharmaceutical", "Food Grade"],
    description:
      "A non-toxic, biodegradable plasticizer widely used in pharmaceutical film coatings, food packaging, and cosmetics.",
    href: "/triethyl-citrate/",
  },
  {
    name: "FS Calcival",
    image:
      "https://parulchemicals.in/wp-content/uploads/2024/10/fscalcival-1.jpeg",
    formula: "",
    tags: ["Nutrition", "Pharmaceutical"],
    description:
      "FS Calcival is a specialized calcium-based compound designed for nutritional supplements and pharmaceutical formulations.",
    href: "/fscalcival/",
  },
  {
    name: "Diethyl Phthalate (DEP)",
    image:
      "https://parulchemicals.in/wp-content/uploads/2024/10/diethyl_phthalate-1024x1024.jpeg",
    formula: "C₁₂H₁₄O₄",
    tags: ["Industrial", "Agrochemical"],
    description:
      "A versatile plasticizer used in cosmetics, pharmaceuticals, and as a solvent in agrochemical formulations.",
    href: "/diethyl-phthalate/",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 md:py-32 bg-background hex-pattern">
    <div className="container mx-auto px-6">
      <p className="font-heading text-xs tracking-[0.25em] uppercase text-teal mb-4">
        What We Make
      </p>
      <h2 className="font-heading text-3xl md:text-[48px] leading-tight text-foreground mb-3">
        Our Products
      </h2>
      <p className="font-body text-muted-foreground mb-14 max-w-lg">
        Pharmaceutical-grade solutions engineered for global compliance
      </p>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, i) => (
          <a
            key={product.name}
            href={product.href}
            className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate/20"
            style={{ marginTop: i === 1 ? "2rem" : "0" }}
          >
            {/* Formula watermark */}
            {product.formula && (
              <span className="absolute top-6 right-6 font-mono text-4xl text-primary-foreground/[0.06] font-bold select-none z-0">
                {product.formula}
              </span>
            )}

            <div className="relative z-10">
              <div className="h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} product`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-heading tracking-wider uppercase text-teal border border-teal/30 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-heading text-xl font-semibold text-slate-800 mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                <span className="inline-flex items-center gap-1 text-amber font-heading text-sm font-semibold transition-all group-hover:gap-2">
                  View Details →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
