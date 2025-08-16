import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Play, 
  Star, 
  CheckCircle, 
  Users, 
  Target, 
  BarChart3, 
  Shield,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Influencer Discovery",
    description: "Find the perfect influencers with our advanced search and filtering system.",
    stats: "10M+ profiles"
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "Streamline your influencer campaigns from start to finish.",
    stats: "50+ integrations"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track campaign performance and ROI with detailed analytics.",
    stats: "Real-time data"
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "AI-powered fraud detection to ensure authentic partnerships.",
    stats: "99.9% accuracy"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Marketing, Shopify Store",
    content: "Gen Goodwill.ai transformed our influencer marketing. We saw 4.2x ROI in just 3 months!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "E-commerce Director",
    content: "The AI matching is incredible. We found influencers that perfectly aligned with our brand.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Thompson",
    role: "Brand Manager",
    content: "Campaign automation saved us 20+ hours per week. The ROI tracking is game-changing.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

export function ModernLanding() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              <Star className="h-4 w-4" />
              <span>Trusted by 1,500+ brands worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              End-to-End<br />
              Influencer Marketing<br />
              Platform
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Run your entire influencer program in one place. From discovering creators to tracking ROI, 
              we've got everything you need to scale your Shopify business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
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
                className="border-gray-300 hover:bg-gray-50"
                asChild
              >
                <Link to="/demo" className="flex items-center justify-center">
                  <Play className="mr-2 h-4 w-4" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.location.href = `/signup?email=${email}`}
              >
                Get Started
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              14-day free trial • No credit card required • Setup in 2 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Everything you need to succeed
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                From discovery to payment, we've got you covered with enterprise-grade tools
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="text-sm font-medium text-green-600">{feature.stats}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Loved by brands worldwide
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                See why 1,500+ brands choose Gen Goodwill.ai
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to get started?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Join 1,500+ brands using Gen Goodwill.ai to scale their influencer marketing
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href="tel:+917869712770" className="text-emerald-600 hover:underline">
                  +91 78697 12770
                </a>
                <p className="text-sm text-gray-600 mt-1">Available 9AM - 6PM IST</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href="mailto:contact@gen-goodwill.ai" className="text-teal-600 hover:underline">
                  contact@gen-goodwill.ai
                </a>
                <p className="text-sm text-gray-600 mt-1">Response within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">Mumbai, India</p>
                <p className="text-sm text-gray-600 mt-1">Global remote team</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 hover:bg-gray-50"
                asChild
              >
                <Link to="/demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
