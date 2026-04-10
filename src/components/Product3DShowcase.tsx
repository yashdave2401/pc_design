import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const products = [
  {
    id: "tec",
    name: "Triethyl Citrate",
    abbr: "TEC",
    color: "#00A8D4",
    img: "/product1.png",
    formula: "C₁₂H₂₀O₇",
    desc: "A non-toxic, biodegradable plasticizer widely used in pharmaceutical film coatings, food packaging, and cosmetics. Conforms to global quality standards."
  },
  {
    id: "calcival",
    name: "FS Calcival",
    abbr: "FSC",
    color: "#F5A623",
    img: "/product2.png",
    formula: "Ca²⁺",
    desc: "A specialized calcium-based compound engineered for nutritional supplements and pharmaceutical formulations with exceptional bioavailability."
  },
  {
    id: "dep",
    name: "Diethyl Phthalate",
    abbr: "DEP",
    color: "#7C6FFF",
    img: "/product3.png",
    formula: "C₁₂H₁₄O₄",
    desc: "A versatile plasticizer used in cosmetics, pharmaceuticals, and as a solvent in agrochemical formulations. Reliable and long-lasting performance."
  }
];

// A single product "slide" driven by a continuous scrollProgress MotionValue
// peak=0 means fully active, negative=scrolled past, positive=upcoming
const ProductSlide = ({
  product,
  scrollYProgress,
  peakAt,        // value of scrollYProgress when this product is fully active (0, 0.5, 1)
  spread,        // how many progress units wide the transition is
}: {
  product: typeof products[0];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  peakAt: number;
  spread: number;
}) => {
  // Distance from the active point (ranges from -1 to +1 across the spread)
  const distRaw = useTransform(scrollYProgress, (v) => (v - peakAt) / spread);

  // Tighter spring = faster visual response while staying smooth
  const dist = useSpring(distRaw, { stiffness: 180, damping: 28, mass: 0.6 });

  // Image: scale up when active, shrink when away
  const imgScale = useTransform(dist, [-1, 0, 1], [0.6, 1, 0.6]);
  // Image: translate so upcoming comes from right, past exits left
  const imgX = useTransform(dist, [-1.2, 0, 1.2], ["-60%", "0%", "60%"]);
  const imgOpacity = useTransform(dist, [-0.8, -0.2, 0, 0.2, 0.8], [0, 0.6, 1, 0.6, 0]);
  const imgRotateY = useTransform(dist, [-1, 0, 1], [-25, 0, 25]);
  const imgRotateZ = useTransform(dist, [-1, 0, 1], [-8, 0, 8]);

  // Text: slides up from below when becoming active, exits upward
  const textY = useTransform(dist, [-1, 0, 1], ["60px", "0px", "-60px"]);
  const textOpacity = useTransform(dist, [-0.4, -0.1, 0, 0.1, 0.4], [0, 0.8, 1, 0.8, 0]);
  const textBlur = useTransform(dist, [-0.4, -0.1, 0, 0.1, 0.4], [6, 1, 0, 1, 6]);

  // Glow orb
  const orbOpacity = useTransform(dist, [-0.5, 0, 0.5], [0, 0.45, 0]);
  const orbScale = useTransform(dist, [-0.5, 0, 0.5], [0.7, 1, 0.7]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16 w-full h-full">

        {/* TEXT */}
        <motion.div
          className="flex flex-col justify-center h-full"
          style={{
            y: textY,
            opacity: textOpacity,
            filter: useTransform(textBlur, (v) => `blur(${v}px)`)
          }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-auto">
            <div
              className="font-mono text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: product.color }}
            >
              {product.formula}
            </div>
            <h2 className="text-5xl md:text-6xl font-display text-white mb-6 leading-tight">
              {product.name}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-md mb-10">
              {product.desc}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 font-heading font-semibold text-[15px] uppercase tracking-wider group"
              style={{ color: product.color }}
            >
              View Details
              <span className="h-[2px] w-8 bg-current group-hover:w-12 transition-all duration-500 ease-out" />
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="relative h-full flex items-center justify-center">
          {/* Glow Orb */}
          <motion.div
            className="absolute w-[380px] h-[380px] rounded-full blur-[130px] mix-blend-screen"
            style={{
              backgroundColor: product.color,
              opacity: orbOpacity,
              scale: orbScale,
            }}
          />

          {/* Product Image with floating loop */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              scale: imgScale,
              x: imgX,
              opacity: imgOpacity,
              rotateY: imgRotateY,
              rotateZ: imgRotateZ,
            }}
          >
            {/* Floating sub-wrapper for idle sway - independent loop */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotateZ: [-0.8, 0.8, -0.8] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="w-[85%] max-h-[600px] flex items-center justify-center filter drop-shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Product3DShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Single scroll source - drives absolutely everything
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ─── One-scroll-per-product wheel interceptor ───────────────────────────
  // The container is 300vh. Each product is at 0, 100vh, 200vh from top.
  // One wheel tick scrolls exactly windowHeight pixels → jumps one product.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let locked = false;
    let lockTimer: ReturnType<typeof setTimeout>;

    const onWheel = (e: WheelEvent) => {
      const rect = el.getBoundingClientRect();
      // Only intercept when the section is sticking (rect.top <= 0 and still in view)
      const inSection = rect.top <= 2 && rect.bottom > window.innerHeight - 2;
      if (!inSection) return;

      e.preventDefault();
      if (locked) return;
      locked = true;

      const step = window.innerHeight; // exactly one product step
      const dir = e.deltaY > 0 ? 1 : -1;
      window.scrollBy({ top: dir * step, behavior: "smooth" });

      // Release lock after spring settles (~700ms)
      clearTimeout(lockTimer);
      lockTimer = setTimeout(() => { locked = false; }, 700);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      clearTimeout(lockTimer);
    };
  }, []);
  // ─────────────────────────────────────────────────────────────────────────

  // Background glow color morphs continuously via scroll
  const bgColor0 = useTransform(scrollYProgress, [0, 0.5, 1], [
    products[0].color,
    products[1].color,
    products[2].color
  ]);

  // Big watermark text opacity pulses per product
  const watermarkOpacity0 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.04, 0, 0]);
  const watermarkOpacity1 = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 0.04, 0]);
  const watermarkOpacity2 = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 0, 0.04]);

  // Progress pill heights driven by scroll directly
  const pip0 = useTransform(scrollYProgress, [0, 0.25], [40, 12]);
  const pip1 = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [12, 40, 12]);
  const pip2 = useTransform(scrollYProgress, [0.75, 1], [12, 40]);

  return (
    <div id="product-showcase" ref={containerRef} style={{ height: "300vh", position: "relative" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#060D18]">

        {/* Continuously transitioning background glow */}
        <motion.div
          className="absolute inset-0 opacity-20 z-0 transition-none"
          style={{ backgroundColor: bgColor0 }}
        />

        {/* Watermarks - one per product, driven by scroll */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
          {[watermarkOpacity0, watermarkOpacity1, watermarkOpacity2].map((op, i) => (
            <motion.div
              key={products[i].id + "-wm"}
              className="absolute text-[25vw] font-black tracking-tighter whitespace-nowrap text-white"
              style={{ opacity: op }}
            >
              {products[i].abbr}
            </motion.div>
          ))}
        </div>

        {/* Each product slide rendered on top — all always present, visibility driven by scroll */}
        <div className="absolute inset-0 z-10" style={{ perspective: "1200px" }}>
          {products.map((p, i) => (
            <ProductSlide
              key={p.id}
              product={p}
              scrollYProgress={scrollYProgress}
              peakAt={i * 0.5}   // 0, 0.5, 1.0
              spread={0.4}
            />
          ))}
        </div>

        {/* Navigation pills — scroll-driven heights */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
          {[pip0, pip1, pip2].map((h, i) => (
            <motion.button
              key={products[i].id + "-pip"}
              onClick={() => {
                const el = containerRef.current;
                if (!el) return;
                const target = el.offsetTop + (i / 2) * (el.offsetHeight - window.innerHeight);
                window.scrollTo({ top: target, behavior: "smooth" });
              }}
              aria-label={`Go to ${products[i].name}`}
              className="w-2.5 rounded-full cursor-pointer focus:outline-none"
              style={{ height: h, backgroundColor: products[i].color }}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product3DShowcase;

