import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-deep text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            src="https://parulchemicals.in/wp-content/uploads/2024/01/logo-1.png"
            alt="Parul Chemicals Logo"
            className="h-10 mb-4 brightness-0 invert"
          />
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
            Committed to offering high-quality and innovative Plasticizers to enrich all forms of life.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 text-primary-foreground/80">Useful Links</h4>
          <ul className="space-y-2.5">
            {[
              ["Home", "/"],
              ["About Us", "/about-us"],
              ["Certificates", "/certificates/"],
              ["Declarations", "/declarations/"],
              ["Contact Us", "/contact-us/"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="link-underline font-body text-sm text-primary-foreground/50 hover:text-teal transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 text-primary-foreground/80">Product Range</h4>
          <ul className="space-y-2.5">
            {[
              ["Triethyl Citrate (TEC)", "/triethyl-citrate/"],
              ["DiEthyl Phthalate (DEP)", "/diethyl-phthalate/"],
              ["F.S. Calcival", "/fscalcival/"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="link-underline font-body text-sm text-primary-foreground/50 hover:text-teal transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 text-primary-foreground/80">Contact Details</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-teal flex-shrink-0" />
              <a href="mailto:parulchemicals2016@gmail.com" className="font-body text-sm text-primary-foreground/50 hover:text-teal transition-colors">
                parulchemicals2016@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-teal flex-shrink-0" />
              <a href="tel:+919427784082" className="font-body text-sm text-primary-foreground/50 hover:text-teal transition-colors">
                +91 94277 84082
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-teal flex-shrink-0" />
              <span className="font-body text-sm text-primary-foreground/50">
                Ranjan Society 2 Near, Lions Hall Race Course, Vadodara, Gujarat, 380007
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 text-xs font-body text-primary-foreground/40">
          <a href="#" className="hover:text-teal transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-teal transition-colors">Shipping Policy</a>
          <a href="#" className="hover:text-teal transition-colors">Refund Policy</a>
        </div>
        <p className="text-xs font-body text-primary-foreground/40">
          © 2025 Parul Chemicals. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
