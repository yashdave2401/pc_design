interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ label, title, subtitle }: PageHeaderProps) => (
  <section className="relative hero-gradient-mesh pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="container mx-auto px-6 relative z-10">
      <span className="inline-block font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber mb-4">
        {label}
      </span>
      <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="font-body text-lg text-primary-foreground/60 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
