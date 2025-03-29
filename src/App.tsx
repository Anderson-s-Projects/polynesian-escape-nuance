
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DestinationDetail from "./pages/DestinationDetail";
import FAQ from "./pages/FAQ";
import AllDestinations from "./pages/AllDestinations";
import OurStory from "./pages/OurStory";
import PackageDetail from "./pages/PackageDetail";

const queryClient = new QueryClient();

// Get base path from Vite config
const basePath = import.meta.env.BASE_URL || '/';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basePath}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/destinations" element={<AllDestinations />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/package/:type" element={<PackageDetail />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
