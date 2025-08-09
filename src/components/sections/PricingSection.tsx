import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, Users, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { EnhancedHoverCard, EnhancedHoverCardContent, EnhancedHoverCardTrigger } from "@/components/ui/enhanced-hover-card";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with influencer marketing",
    price: { monthly: 99, yearly: 79 },
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    features: [
      "Up to 100 influencer searches",
      "Basic analytics dashboard",
      "Email support",
      "Standard integrations",
      "Campaign templates",
      "Basic reporting"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses scaling their influencer programs",
    price: { monthly: 299, yearly: 239 },
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    features: [
      "Unlimited influencer searches",
      "Advanced analytics & reporting",
      "Priority support",
      "All integrations",
      "Custom campaign templates",
      "ROI tracking",
      "Payment processing",
      "Team collaboration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex influencer marketing needs",
    price: { monthly: 999, yearly: 799 },
    icon: Crown,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    features: [
      "Everything in Professional",
      "Custom AI models",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security",
      "White-label options",
      "API access",
      "Custom reporting"
    ],
    popular: false
  }
];

const features = [
  "14-day free trial",
  "No setup fees",
  "Cancel anytime",
  "24/7 support",
  "99.9% uptime",
  "GDPR compliant"
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

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
            <span>Simple, Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the plan that
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> fits your needs</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={cn("text-sm font-medium", !isYearly ? "text-gray-900" : "text-gray-500")}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                isYearly ? "bg-blue-600" : "bg-gray-200"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  isYearly ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", isYearly ? "text-gray-900" : "text-gray-500")}>
              Yearly
              <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <EnhancedHoverCard key={index}>
              <EnhancedHoverCardTrigger asChild>
                <div
                  className={cn(
                    "relative p-10 rounded-3xl border transition-all duration-500 cursor-pointer group",
                    "bg-gradient-to-br hover:shadow-2xl hover:scale-105 hover:-translate-y-2",
                    plan.bgColor,
                    plan.borderColor,
                    plan.popular && "ring-2 ring-purple-500 shadow-xl"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-10">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center mx-auto mb-6 shadow-lg",
                      plan.color
                    )}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                    <p className="text-gray-600 mb-8 text-lg">{plan.description}</p>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">
                          ${isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-gray-500 ml-2 text-xl">/month</span>
                      </div>
                      {isYearly && (
                        <p className="text-sm text-gray-500 mt-2">billed annually</p>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-4">
                        <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={cn(
                      "w-full py-4 text-lg font-bold transition-all duration-300 rounded-xl",
                      plan.popular 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                    )}
                    asChild
                  >
                    <Link to="/signup">
                      {plan.popular ? "Start Free Trial" : "Get Started"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </EnhancedHoverCardTrigger>
              
              <EnhancedHoverCardContent className="w-80">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">{plan.name} Plan</h4>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  <div className="pt-2">
                    <Button size="sm" className="w-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </EnhancedHoverCardContent>
            </EnhancedHoverCard>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Included with all plans</h3>
            <p className="text-gray-600">Everything you need to succeed with influencer marketing</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">{feature}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Our team is here to help you choose the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 