import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  "10M+ Influencer Database",
  "AI-Powered Matching",
  "Real-time Analytics",
  "Secure Payments",
  "Campaign Automation",
  "ROI Tracking"
];

const stats = [
  { value: "10M+", label: "Influencers" },
  { value: "1,500+", label: "Brands" },
  { value: "$100M+", label: "Payments Processed" },
  { value: "4.9/5", label: "Customer Rating" }
];

export function ModernHero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4" />
              <span>Trusted by 1,500+ brands worldwide</span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">End-to-End</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Influencer Marketing
                </span>
                <br />
                <span className="text-gray-900">Platform</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Run your entire influencer program in one place. From discovering creators to tracking ROI, 
                we've got everything you need to scale your Shopify business.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  asChild
                >
                  <Link to="/signup" className="flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                  asChild
                >
                  <Link to="/demo" className="flex items-center justify-center">
                    <Play className="mr-2 h-4 w-4" />
                    Get a Demo
                  </Link>
                </Button>
              </div>
              
              {/* Email Capture */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button 
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800"
                  onClick={() => window.location.href = `/signup?email=${email}`}
                >
                  Get Started
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">
                14-day free trial • No credit card required • Setup in 2 minutes
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Campaign Overview</h3>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Live</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2.4M</div>
                    <div className="text-sm text-gray-600">Reach</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">8.7%</div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">4.2x</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-900">Sarah Chen</div>
                      <div className="text-sm text-gray-600">Fashion Influencer • 2.1M followers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div>
                      <div className="font-medium text-gray-900">Marcus Rodriguez</div>
                      <div className="text-sm text-gray-600">Tech Creator • 850K followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
              <Star className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-3 rounded-full shadow-lg">
              <Play className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
