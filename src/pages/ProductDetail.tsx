import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

interface ProductInfo {
  name: string;
  formula?: string;
  image: string;
  tags: string[];
  description: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
}

const products: Record<string, ProductInfo> = {
  "triethyl-citrate": {
    name: "Triethyl Citrate (TEC)",
    formula: "C₁₂H₂₀O₇",
    image:
      "https://parulchemicals.in/wp-content/uploads/2024/10/triethyl_citrate-1024x1024.jpeg",
    tags: ["Pharmaceutical", "Food Grade"],
    description: [
      "Triethyl Citrate (TEC) is a non-toxic, biodegradable plasticizer widely used across pharmaceutical, food, and cosmetic industries. It serves as an excellent plasticizer for cellulose-based polymers in film coatings of tablets and capsules.",
      "TEC is preferred for its safety profile — it is Generally Recognized As Safe (GRAS) by the FDA, making it ideal for applications requiring direct or indirect food contact.",
      "At Parul Chemicals, our TEC is manufactured under stringent quality controls to ensure pharmaceutical-grade purity and consistency in every batch.",
    ],
    applications: [
      "Pharmaceutical film coatings (tablets & capsules)",
      "Food packaging & food-contact materials",
      "Cosmetics and personal care formulations",
      "Adhesives and sealants",
      "Polymer modification and plasticization",
    ],
    specifications: [
      { label: "CAS Number", value: "77-93-0" },
      { label: "Molecular Formula", value: "C₁₂H₂₀O₇" },
      { label: "Molecular Weight", value: "276.28 g/mol" },
      { label: "Appearance", value: "Clear, colorless liquid" },
      { label: "Purity", value: "≥ 99.0%" },
      { label: "Grade", value: "Pharmaceutical / Food Grade" },
    ],
  },
  "diethyl-phthalate": {
    name: "Diethyl Phthalate (DEP)",
    formula: "C₁₂H₁₄O₄",
    image:
      "https://parulchemicals.in/wp-content/uploads/2024/10/diethyl_phthalate-1024x1024.jpeg",
    tags: ["Industrial", "Agrochemical"],
    description: [
      "Diethyl Phthalate (DEP) is a versatile plasticizer and solvent used extensively across industrial, pharmaceutical, and agrochemical applications. It offers excellent solvency, low volatility, and good compatibility with a wide range of polymers.",
      "DEP is commonly used as a plasticizer in cellulose ester-based coatings, as a solvent carrier in fragrances and cosmetics, and as an excipient in pharmaceutical formulations.",
      "Parul Chemicals manufactures DEP to exacting quality standards, ensuring reliable performance for even the most demanding industrial applications.",
    ],
    applications: [
      "Pharmaceutical enteric coatings",
      "Cosmetics and fragrance formulations",
      "Agrochemical solvent and carrier",
      "Industrial plasticizer for cellulose esters",
      "Detergent and soap manufacturing",
    ],
    specifications: [
      { label: "CAS Number", value: "84-66-2" },
      { label: "Molecular Formula", value: "C₁₂H₁₄O₄" },
      { label: "Molecular Weight", value: "222.24 g/mol" },
      { label: "Appearance", value: "Clear, colorless liquid" },
      { label: "Purity", value: "≥ 99.0%" },
      { label: "Grade", value: "Industrial / Pharmaceutical" },
    ],
  },
  fscalcival: {
    name: "FS Calcival",
    image:
      "https://parulchemicals.in/wp-content/uploads/2024/10/fscalcival-1.jpeg",
    tags: ["Nutrition", "Pharmaceutical"],
    description: [
      "FS Calcival is a specialized calcium-based compound designed for nutritional supplements and pharmaceutical formulations. It provides a highly bioavailable source of calcium suitable for tablets, capsules, and powder formulations.",
      "Engineered for optimal absorption and stability, FS Calcival meets the rigorous requirements of the nutraceutical and pharmaceutical industries.",
      "Parul Chemicals offers FS Calcival with comprehensive documentation and quality certificates to support your regulatory compliance needs.",
    ],
    applications: [
      "Nutritional supplement formulations",
      "Pharmaceutical calcium tablets and capsules",
      "Powder-based health supplements",
      "Fortified food products",
      "Veterinary nutritional products",
    ],
    specifications: [
      { label: "Type", value: "Calcium-based compound" },
      { label: "Appearance", value: "White to off-white powder" },
      { label: "Grade", value: "Pharmaceutical / Nutraceutical" },
      { label: "Solubility", value: "Slightly soluble in water" },
      { label: "Shelf Life", value: "24 months" },
    ],
  },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? products[slug] : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader label="PRODUCT" title="Product Not Found" />
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="font-body text-muted-foreground">
            The requested product could not be found.
          </p>
          <a
            href="/"
            className="inline-block mt-6 bg-primary text-primary-foreground font-heading text-sm font-semibold px-6 py-3 rounded-full"
          >
            ← Back Home
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        label="OUR PRODUCTS"
        title={product.name}
        subtitle={product.tags.join(" · ")}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg object-cover aspect-square bg-navy/5"
              />
              {product.formula && (
                <span className="absolute bottom-4 right-4 font-mono-chem text-xs bg-navy text-primary-foreground px-3 py-1.5 rounded-md">
                  {product.formula}
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-teal text-teal font-body text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 font-body text-muted-foreground leading-relaxed mb-10">
                {product.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Applications */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Applications
              </h3>
              <ul className="space-y-2 mb-10">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>

              {/* Specifications */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Specifications
              </h3>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                {product.specifications.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between px-5 py-3 font-body text-sm ${
                      i % 2 === 0 ? "bg-muted/30" : ""
                    }`}
                  >
                    <span className="text-muted-foreground font-medium">
                      {spec.label}
                    </span>
                    <span className="text-foreground font-mono-chem">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-primary-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Interested in {product.name}?
          </h2>
          <p className="font-body text-primary-foreground/60 mb-8 max-w-lg mx-auto">
            Get in touch with our team for pricing, bulk orders, and technical
            specifications.
          </p>
          <a
            href="/contact-us"
            className="inline-flex bg-amber text-foreground font-heading text-sm font-semibold px-8 py-3 rounded-full hover:brightness-110 transition-all btn-shimmer"
          >
            Contact Us →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
