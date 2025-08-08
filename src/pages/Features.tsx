import { Layout } from "@/components/layout/Layout";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MessageSquare, 
  BarChart3, 
  CreditCard, 
  Shield, 
  Zap,
  Users,
  Globe,
  Smartphone,
  Target,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const advancedFeatures = [
  {
    category: "Discovery & Recruitment",
    icon: Search,
    features: [
      {
        name: "AI-Powered Matching",
        description: "Our AI analyzes your brand, target audience, and campaign goals to recommend the perfect influencer matches.",
        icon: Target
      },
      {
        name: "Global Database Access",
        description: "Access over 10 million influencer profiles across Instagram, TikTok, YouTube, and emerging platforms.",
        icon: Globe
      },
      {
        name: "Audience Quality Analysis",
        description: "Deep-dive into follower demographics, authenticity scores, and engagement quality metrics.",
        icon: Users
      }
    ]
  },
  {
    category: "Campaign Management",
    icon: MessageSquare,
    features: [
      {
        name: "Automated Workflows",
        description: "Set up custom approval workflows, content guidelines, and automated follow-ups to streamline operations.",
        icon: Zap
      },
      {
        name: "Real-Time Collaboration",
        description: "Enable seamless communication between your team, influencers, and stakeholders in one platform.",
        icon: Users
      },
      {
        name: "Content Approval System",
        description: "Review, approve, and provide feedback on influencer content before it goes live.",
        icon: CheckCircle
      }
    ]
  },
  {
    category: "Analytics & Insights",
    icon: BarChart3,
    features: [
      {
        name: "Cross-Platform Tracking",
        description: "Monitor performance across all social media platforms with unified analytics and reporting.",
        icon: Smartphone
      },
      {
        name: "ROI Optimization",
        description: "Advanced attribution modeling to track conversions and optimize your influencer marketing ROI.",
        icon: TrendingUp
      },
      {
        name: "Competitive Intelligence",
        description: "Monitor competitor campaigns and benchmark your performance against industry standards.",
        icon: BarChart3
      }
    ]
  }
];

export default function Features() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background via-background-subtle to-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              ✨ Complete Feature Suite
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Everything you need for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                influencer marketing success
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From discovery to payment, our comprehensive platform handles every aspect 
              of your influencer marketing program with enterprise-grade security and reliability.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <FeaturesSection />

      {/* Advanced Features */}
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advanced Features for Enterprise Teams
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Powerful tools designed for scaling influencer programs at the enterprise level.
            </p>
          </div>

          <div className="space-y-16">
            {advancedFeatures.map((category, categoryIndex) => (
              <div key={category.category} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <div className="flex items-center gap-x-3 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
                
                <div className="grid gap-6 lg:grid-cols-3">
                  {category.features.map((feature, featureIndex) => (
                    <Card 
                      key={feature.name} 
                      className="hover-lift bg-gradient-card animate-fade-in-up"
                      style={{ animationDelay: `${(categoryIndex * 200) + (featureIndex * 100)}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-x-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20">
                            <feature.icon className="h-4 w-4 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{feature.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security & Trust */}
      <div className="bg-background-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Shield className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Enterprise-Grade Security
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Your data and campaigns are protected with bank-level security measures, 
              compliance certifications, and privacy-first architecture.
            </p>
            
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">SOC 2 Compliant</h3>
                <p className="mt-2 text-muted-foreground">Audited security controls and procedures</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">GDPR Ready</h3>
                <p className="mt-2 text-muted-foreground">Full compliance with data protection regulations</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">99.9% Uptime</h3>
                <p className="mt-2 text-muted-foreground">Reliable infrastructure with SLA guarantees</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to transform your influencer marketing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              Join thousands of brands already using our platform to build authentic creator relationships and drive measurable results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="premium" size="lg">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}