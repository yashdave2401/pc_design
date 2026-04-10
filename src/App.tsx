import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Declarations from "./pages/Declarations.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import BuyProduct from "./pages/BuyProduct.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/declarations" element={<Declarations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/buy" element={<BuyProduct />} />
          <Route path="/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
