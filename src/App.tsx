import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import About from "./pages/About";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ResponsiveTabsDemo from "./pages/ResponsiveTabsDemo";
import Discovery from "./pages/Discovery";
import Campaigns from "./pages/Campaigns";
import Analytics from "./pages/Analytics";
import Payments from "./pages/Payments";
import Ecommerce from "./pages/Ecommerce";
import Saas from "./pages/Saas";
import Agencies from "./pages/Agencies";
import Enterprise from "./pages/Enterprise";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Webinars from "./pages/Webinars";
import Help from "./pages/Help";
import Influencers from "./pages/Influencers";
import Settings from "./pages/Settings";
import Api from "./pages/Api";
import Customers from "./pages/Customers";
import BookCall from "./pages/BookCall";
import Updates from "./pages/Updates";
import Careers from "./pages/Careers";
import OurData from "./pages/OurData";
import Helpdesk from "./pages/Helpdesk";
import AskQuestion from "./pages/AskQuestion";
import Academy from "./pages/Academy";
import Management from "./pages/Management";
import Inbox from "./pages/Inbox";
import ShopifyIntegration from "./pages/ShopifyIntegration";
import CampaignMonitoring from "./pages/CampaignMonitoring";
import { Layout } from "@/components/layout/Layout";
import { ModernHeader } from "@/components/layout/ModernHeader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ModernHeader />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/tabs-demo" element={<ResponsiveTabsDemo />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/saas" element={<Saas />} />
              <Route path="/agencies" element={<Agencies />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/help" element={<Help />} />
              <Route path="/api" element={<Api />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/our-data" element={<OurData />} />
              <Route path="/helpdesk" element={<Helpdesk />} />
              <Route path="/ask-question" element={<AskQuestion />} />
              <Route path="/book-call" element={<BookCall />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/management" element={<Management />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/shopify-integration" element={<ShopifyIntegration />} />
              <Route path="/campaign-monitoring" element={<CampaignMonitoring />} />
              <Route
                path="/influencers"
                element={
                  <ProtectedRoute>
                    <Influencers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
