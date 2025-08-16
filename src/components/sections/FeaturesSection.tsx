import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  BarChart3, 
  CreditCard, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EnhancedHoverCard, EnhancedHoverCardContent, EnhancedHoverCardTrigger } from "@/components/ui/enhanced-hover-card";

const features = [
  {
    title: "AI-Powered Discovery",
    description: "Find the perfect influencers using advanced AI algorithms that analyze audience demographics, engagement rates, and brand affinity.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    features: [
      "10M+ influencer database",
      "Advanced filtering options",
      "Audience analysis",
      "Brand safety scoring"
    ]
  },
  {
    title: "Campaign Management",
    description: "Streamline your entire influencer marketing workflow from outreach to content approval and performance tracking.",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    features: [
      "Automated outreach",
      "Content approval workflow",
      "Real-time tracking",
      "Performance analytics"
    ]
  },
  {
    title: "Secure Payments",
    description: "Handle payments globally with support for multiple currencies, automated invoicing, and compliance management.",
    icon: CreditCard,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    features: [
      "Multi-currency support",
      "Automated invoicing",
      "Tax compliance",
      "Secure transactions"
    ]
  },
  {
    title: "Relationship Management",
    description: "Build and maintain strong relationships with influencers through personalized communication and automated follow-ups.",
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    features: [
      "Personalized messaging",
      "Automated follow-ups",
      "Relationship scoring",
      "Communication history"
    ]
  },
  {
    title: "Real-time Analytics",
    description: "Track campaign performance with comprehensive analytics, ROI calculations, and actionable insights.",
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-200",
    features: [
      "ROI tracking",
      "Engagement metrics",
      "Audience insights",
      "Custom reports"
    ]
  },
  {
    title: "Content Automation",
    description: "Automate content collection, approval workflows, and repurposing across multiple platforms.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    borderColor: "border-yellow-200",
    features: [
      "Auto content collection",
      "Approval workflows",
      "Multi-platform posting",
      "Content repurposing"
    ]
  }
];

const stats = [
  { value: "10M+", label: "Influencers", icon: Users },
  { value: "1,500+", label: "Brands", icon: Star },
  { value: "$100M+", label: "Payments", icon: CreditCard },
  { value: "4.9/5", label: "Rating", icon: CheckCircle }
];

export function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> scale your influencer marketing</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From discovery to payments, we've built the most comprehensive platform for influencer marketing success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <EnhancedHoverCard key={index}>
              <EnhancedHoverCardTrigger asChild>
                <div
                  className={cn(
                    "group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer",
                    "bg-gradient-to-br hover:shadow-2xl hover:scale-105 hover:-translate-y-2",
                    feature.bgColor,
                    feature.borderColor,
                    hoveredFeature === index && "shadow-2xl scale-105 -translate-y-2"
                  )}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center mb-8 shadow-lg",
                    feature.color
                  )}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3 text-sm text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover Arrow */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              </EnhancedHoverCardTrigger>
              
              <EnhancedHoverCardContent className="w-80">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                  <div className="pt-2">
                    <Button size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </EnhancedHoverCardContent>
            </EnhancedHoverCard>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by leading brands</h3>
            <p className="text-gray-600">Join thousands of companies scaling their influencer marketing</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <stat.icon className="h-6 w-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg" asChild>
            <Link to="/signup">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            14-day free trial • No credit card required • Setup in 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}