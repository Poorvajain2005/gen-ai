import { Search, MessageSquare, BarChart3, CreditCard, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    name: "Influencer Discovery",
    description: "Find the perfect influencers with our advanced search and filtering system.",
    icon: Search,
    details: [
      "10M+ influencer database",
      "Advanced filtering options",
      "AI-powered recommendations",
      "Audience quality analysis"
    ]
  },
  {
    name: "Campaign Management",
    description: "Streamline your influencer campaigns from start to finish.",
    icon: MessageSquare,
    details: [
      "Automated outreach templates",
      "Contract management",
      "Content approval workflows",
      "Real-time collaboration"
    ]
  },
  {
    name: "Performance Analytics",
    description: "Track campaign performance and ROI with detailed analytics.",
    icon: BarChart3,
    details: [
      "Real-time tracking",
      "ROI calculations",
      "Engagement metrics",
      "Custom reporting"
    ]
  },
  {
    name: "Payment Processing",
    description: "Automate influencer payments with secure, global payment solutions.",
    icon: CreditCard,
    details: [
      "Global payment support",
      "Automated payouts",
      "Tax compliance",
      "Payment tracking"
    ]
  },
  {
    name: "Fraud Detection",
    description: "AI-powered fraud detection to ensure authentic influencer partnerships.",
    icon: Shield,
    details: [
      "Fake follower detection",
      "Engagement authenticity",
      "Bot identification",
      "Quality scoring"
    ]
  },
  {
    name: "API Integration",
    description: "Connect with your existing tools and platforms seamlessly.",
    icon: Zap,
    details: [
      "Shopify integration",
      "Social platform APIs",
      "CRM connections",
      "Custom webhooks"
    ]
  }
];

export function FeaturesSection() {
  return (
    <div className="bg-background-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need for successful influencer marketing
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From discovery to payment, we've got you covered with enterprise-grade tools
            and insights to scale your influencer program.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={feature.name} 
                className="hover-lift animate-fade-in-up bg-gradient-card border-border-light"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                      <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base font-semibold leading-7 text-foreground">
                      {feature.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-2 leading-7 text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-muted-foreground">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}