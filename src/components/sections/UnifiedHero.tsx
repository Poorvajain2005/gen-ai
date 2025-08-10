import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, CheckCircle, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { EnhancedHoverCard, EnhancedHoverCardContent, EnhancedHoverCardTrigger } from "@/components/ui/enhanced-hover-card";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  { text: "10M+ Influencer Database", icon: Users },
  { text: "AI-Powered Matching", icon: Sparkles },
  { text: "Real-time Analytics", icon: TrendingUp },
  { text: "Secure Payments", icon: Zap },
  { text: "Campaign Automation", icon: CheckCircle },
  { text: "ROI Tracking", icon: Star }
];

const stats = [
  { value: "10M+", label: "Influencers", icon: Users },
  { value: "1,500+", label: "Brands", icon: Star },
  { value: "$100M+", label: "Payments Processed", icon: TrendingUp },
  { value: "4.9/5", label: "Customer Rating", icon: CheckCircle }
];

export function UnifiedHero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      {/* Background and decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-purple-100/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-float-delayed" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <EnhancedHoverCard>
              <EnhancedHoverCardTrigger asChild>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
                  <Star className="h-4 w-4" />
                  <span>Trusted by 1,500+ brands worldwide</span>
                </div>
              </EnhancedHoverCardTrigger>
              <EnhancedHoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Join the community</h4>
                  <p className="text-sm text-gray-600">
                    Brands like Nike, Shopify, and Uber trust us to scale their influencer marketing programs.
                  </p>
                </div>
              </EnhancedHoverCardContent>
            </EnhancedHoverCard>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">End-to-End</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Influencer Marketing
                </span>
                <br />
                <span className="text-gray-900">Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Run your entire influencer program in one place. From discovering creators to tracking ROI, 
                we've got everything you need to scale your business.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.text} className="flex items-center space-x-2 group">
                  <div className="p-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <feature.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature.text}</span>
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
                  className="bg-gray-900 hover:bg-gray-800 whitespace-nowrap"
                  onClick={() => window.location.href = `/signup?email=${email}`}
                >
                  Get Started
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center sm:text-left">
                14-day free trial • No credit card required • Setup in 2 minutes
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <stat.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                    <div className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:min-h-[600px] flex items-center justify-center">
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200/50 z-10 transform hover:scale-105 transition-all duration-500">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="font-semibold text-gray-900 text-lg">Campaign Overview</h3>
                  </div>
                  <span className="text-sm text-green-600 bg-green-100 px-4 py-2 rounded-full font-medium shadow-sm">Live</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold text-blue-600 mb-1">2.4M</div>
                    <div className="text-sm text-gray-600 font-medium">Reach</div>
                    <div className="text-xs text-green-600 mt-1">+12% from last month</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold text-purple-600 mb-1">8.7%</div>
                    <div className="text-sm text-gray-600 font-medium">Engagement</div>
                    <div className="text-xs text-green-600 mt-1">+5% from last month</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold text-green-600 mb-1">4.2x</div>
                    <div className="text-sm text-gray-600 font-medium">ROI</div>
                    <div className="text-xs text-green-600 mt-1">+23% from last month</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-lg">Top Performers</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                        alt="Sarah Chen"
                        className="w-12 h-12 rounded-full object-cover border-3 border-gray-200 shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Sarah Chen</div>
                        <div className="text-sm text-gray-600">Marketing Director • Fashion Nova</div>
                      </div>
                      <div className="text-xs text-green-600 bg-green-100 px-3 py-2 rounded-full font-medium shadow-sm">
                        +453%
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                        alt="Marcus Rodriguez"
                        className="w-12 h-12 rounded-full object-cover border-3 border-gray-200 shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
                        <div className="text-sm text-gray-600">Growth Manager • TechFlow</div>
                      </div>
                      <div className="text-xs text-green-600 bg-green-100 px-3 py-2 rounded-full font-medium shadow-sm">
                        +296%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
