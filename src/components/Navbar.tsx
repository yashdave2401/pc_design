import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Products",
    href: "#product-showcase",
    children: [
      { label: "Triethyl Citrate", href: "#product-showcase" },
      { label: "Diethyl Phthalate", href: "#product-showcase" },
      { label: "Fscalcival", href: "#product-showcase" },
    ],
  },
  { label: "Certificates", href: "/certificates" },
  { label: "Declarations", href: "/declarations" },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/parul_logo.png"
            alt="Parul Chemicals Logo"
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="nav-underline flex items-center gap-1 pb-1 font-body text-sm font-medium transition-colors text-slate-700 hover:text-slate-900"
                  onClick={() => {
                    document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' });
                    setDropdownOpen(false);
                  }}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-4 animate-fade-up">
                    <div className="w-52 bg-white/90 backdrop-blur-lg rounded-lg shadow-2xl border border-border/40 py-2">
                    {link.children.map((child, index) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' });
                          setDropdownOpen(false);
                        }}
                        className="block px-4 py-2.5 text-sm font-body text-slate-700 hover:bg-slate-100/60 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="nav-underline pb-1 font-body text-sm font-medium transition-colors text-slate-700 hover:text-slate-900"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        {/* Desktop CTA */}
        <a
          href="/buy"
          className="hidden lg:inline-flex items-center gap-1 bg-amber text-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition-all btn-shimmer"
        >
          Buy Product →
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-slate-700" />
          ) : (
            <Menu className="w-6 h-6 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 font-heading text-2xl font-semibold hover:text-amber transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/buy"
            className="mt-4 bg-amber text-foreground font-heading text-lg font-semibold px-8 py-3 rounded-full animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Buy Product →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
