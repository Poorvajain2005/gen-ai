import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for small businesses starting their influencer journey",
    monthlyPrice: 79,
    yearlyPrice: 79 * 12 * 0.8, // 20% discount
    features: [
      "Up to 5 campaigns",
      "10K influencer database access",
      "Basic analytics",
      "Email support",
      "Campaign templates",
      "Content approval tools",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "Best for growing brands with regular influencer campaigns",
    monthlyPrice: 149,
    yearlyPrice: 149 * 12 * 0.8, // consistent discount
    features: [
      "Unlimited campaigns",
      "Full 10M+ influencer database",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom campaign workflows",
      "Automated payments",
      "Fraud detection",
      "Team collaboration",
      "API access",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex influencer programs",
    monthlyPrice: 499,
    yearlyPrice: 499 * 12 * 0.8,
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated account manager",
      "White-label solutions",
      "Advanced security",
      "Custom reporting",
      "SLA guarantees",
      "Training & onboarding",
      "Multi-brand management",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

const comparisonFeatures = [
  {
    feature: "Campaigns",
    starter: "5",
    professional: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Influencer Database",
    starter: "10K",
    professional: "10M+",
    enterprise: "10M+",
  },
  {
    feature: "Analytics",
    starter: "Basic",
    professional: "Advanced",
    enterprise: "Custom",
  },
  {
    feature: "Support",
    starter: "Email",
    professional: "Priority",
    enterprise: "Dedicated Manager",
  },
  {
    feature: "API Access",
    starter: "❌",
    professional: "✅",
    enterprise: "✅",
  },
  {
    feature: "Custom Integrations",
    starter: "❌",
    professional: "❌",
    enterprise: "✅",
  },
  {
    feature: "White-label",
    starter: "❌",
    professional: "❌",
    enterprise: "✅",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-700">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Choose the perfect plan for your business
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start with a 14-day free trial. No credit card required. Cancel
            anytime.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-16 flex justify-center items-center gap-4">
          <span
            className={`text-sm ${
              !isYearly
                ? "text-foreground font-semibold"
                : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-green-700"
          />
          <span
            className={`text-sm ${
              isYearly
                ? "text-foreground font-semibold"
                : "text-muted-foreground"
            }`}
          >
            Yearly
          </span>
          <Badge
            variant="secondary"
            className="ml-2 bg-green-100 text-green-700"
          >
            Save 20%
          </Badge>
        </div>

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`hover-lift animate-fade-in-up ${
                plan.popular
                  ? "ring-2 ring-green-700 bg-white scale-105"
                  : "bg-white"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold leading-8 text-foreground">
                    {plan.name}
                  </CardTitle>
                  {plan.popular && (
                    <Badge
                      variant="default"
                      className="bg-green-700 text-white"
                    >
                      <Star className="mr-1 h-3 w-3" />
                      Most Popular
                    </Badge>
                  )}
                </div>
                <CardDescription className="mt-4 text-sm leading-6 text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    $
                    {isYearly
                      ? (plan.yearlyPrice / 12).toFixed(0)
                      : plan.monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">
                    /month
                  </span>
                </p>
                {isYearly && (
                  <p className="text-sm text-muted-foreground">
                    Billed annually (${plan.yearlyPrice}/year)
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full mb-8"
                  size="lg"
                >
                  {plan.cta}
                </Button>
                <ul
                  role="list"
                  className="space-y-3 text-sm leading-6 text-muted-foreground"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-5 w-6 flex-none text-green-700"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature comparison table */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">
            Feature Comparison
          </h3>
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-green-700 bg-green-50">
                    Professional
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr
                    key={item.feature}
                    className={index % 2 === 0 ? "bg-background/50" : ""}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      {item.starter}
                    </td>
                    <td className="px-6 py-4 text-center text-green-700 font-semibold bg-green-50">
                      {item.professional}
                    </td>
                    <td className="px-6 py-4 text-center text-muted-foreground">
                      {item.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
