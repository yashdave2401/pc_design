import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { PackageSearch, Send, Building2, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BuyProduct = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    requirements: ""
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.product || !form.quantity.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast({ title: "Request submitted!", description: "Our sales team will contact you with a quote shortly." });
      setForm({ name: "", email: "", company: "", phone: "", product: "", quantity: "", requirements: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        label="PURCHASE INQUIRY"
        title="Buy Products"
        subtitle="Request a quote or place an order for our pharmaceutical-grade plasticizers and specialized chemical compounds."
      />

      <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 bg-[#001D3D]/[0.02] mix-blend-multiply pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Context Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-3 block">
                  BULK & SPECIALTY ORDERS
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Premium Quality, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">
                    Delivered Globally.
                  </span>
                </h2>
                <p className="font-body text-slate-600 leading-relaxed text-lg mb-8">
                  Parul Chemicals ensures seamless supply chain solutions for your most critical manufacturing processes. Secure your inventory with our high-purity chemical compounds.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <PackageSearch className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-1">Custom Formulations</h3>
                    <p className="font-body text-slate-600 text-sm leading-relaxed">
                      Need specific grades? We provide tailored variations of TEC, DEP, and Fscalcival to match your distinct requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Building2 className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900 mb-1">Commercial Scale</h3>
                    <p className="font-body text-slate-600 text-sm leading-relaxed">
                      From pilot batches to full commercial manufacturing volumes, we maintain robust inventory to support your scale-up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl p-6 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-8">
                  <ShoppingCart className="w-6 h-6 text-slate-800" />
                  <h3 className="text-2xl font-heading font-bold text-slate-900">Order Request</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm font-semibold text-slate-700 mb-2 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-semibold text-slate-700 mb-2 block">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm font-semibold text-slate-700 mb-2 block">Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Pharmaceuticals"
                        className="flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-semibold text-slate-700 mb-2 block">Contact Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6 mt-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-sm font-semibold text-slate-700 mb-2 block">
                          Product Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 transition-all"
                        >
                          <option value="">Select a product</option>
                          <option value="tec">Triethyl Citrate (TEC)</option>
                          <option value="dep">Diethyl Phthalate (DEP)</option>
                          <option value="fscalcival">FS Calcival (FSC)</option>
                          <option value="multiple">Multiple / Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-body text-sm font-semibold text-slate-700 mb-2 block">
                          Estimated Quantity <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 500 KG / 5 Drums"
                          className="flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-sm font-semibold text-slate-700 mb-2 block">Additional Requirements</label>
                    <textarea
                      name="requirements"
                      value={form.requirements}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Specify packaging needs, delivery timeline, or technical specs..."
                      className="flex w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:border-amber-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-heading text-sm font-semibold px-8 py-4 rounded-xl hover:bg-slate-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-slate-900/20"
                  >
                    <Send className="w-4 h-4" />
                    {sending ? "Submitting Request…" : "Request Quote"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyProduct;
