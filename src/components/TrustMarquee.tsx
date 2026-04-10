const items = [
  "ISO CERTIFIED",
  "PHARMACEUTICAL GRADE",
  "GLOBAL EXPORT READY",
  "AGROCHEMICAL APPROVED",
  "RIGOROUS QUALITY CONTROL",
  "VADODARA, GUJARAT",
  "SERVING GLOBAL INDUSTRIES",
];

const TrustMarquee = () => (
  <div className="bg-card border-y border-border overflow-hidden py-4">
    <div className="animate-marquee flex whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="font-heading text-xs tracking-[0.2em] text-foreground mx-6 flex items-center gap-6">
          {item}
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" />
        </span>
      ))}
    </div>
  </div>
);

export default TrustMarquee;
