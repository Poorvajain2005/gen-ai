import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Agencies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const agencyFeatures = [
    {
      title: "White-Label Platform",
      description: "Offer influencer marketing services under your own brand with complete white-label customization.",
      icon: "🏷️",
      details: [
        "Custom branding and domain mapping",
        "White-label client reports and dashboards",
        "Branded email communications",
        "Custom proposal templates"
      ]
    },
    {
      title: "Multi-Client Management",
      description: "Manage multiple client campaigns simultaneously with dedicated workspaces and team collaboration.",
      icon: "👥",
      details: [
        "Dedicated client workspaces and permissions",
        "Team collaboration and task assignment",
        "Client approval workflows",
        "Bulk campaign management tools"
      ]
    },
    {
      title: "Profitability Optimization",
      description: "Maximize agency margins with automated workflows, bulk pricing, and performance optimization.",
      icon: "💰",
      details: [
        "Automated campaign workflows to reduce manual work",
        "Bulk pricing and volume discounts",
        "Performance optimization recommendations",
        "Margin tracking and profitability analysis"
      ]
    },
    {
      title: "Client Reporting & Analytics",
      description: "Generate beautiful, branded reports that showcase your agency's value and campaign performance.",
      icon: "📊",
      details: [
        "Automated white-label reporting",
        "Custom report templates for each client",
        "Real-time performance dashboards",
        "ROI tracking and attribution"
      ]
    },
    {
      title: "Influencer Discovery & Vetting",
      description: "Find and vet influencers efficiently with AI-powered matching and automated outreach.",
      icon: "🔍",
      details: [
        "AI-powered influencer matching for clients",
        "Automated influencer outreach and follow-up",
        "Influencer vetting and compliance checking",
        "Performance prediction and risk assessment"
      ]
    },
    {
      title: "Scalable Campaign Management",
      description: "Scale your agency's operations without increasing headcount through automation and workflows.",
      icon: "⚡",
      details: [
        "Automated campaign workflows and triggers",
        "Bulk content approval and scheduling",
        "Performance optimization at scale",
        "Client communication automation"
      ]
    }
  ];

  const agencyBenefits = [
    {
      benefit: "50% Time Savings",
      description: "Reduce campaign management time through automation"
    },
    {
      benefit: "3x More Clients",
      description: "Scale operations without increasing team size"
    },
    {
      benefit: "40% Higher Margins",
      description: "Optimize pricing and reduce operational costs"
    },
    {
      benefit: "90% Client Retention",
      description: "Deliver better results with advanced analytics"
    }
  ];

  const clientTypes = [
    {
      type: "SMB Clients",
      budget: "$5K-50K/month",
      strategy: "Micro-influencer campaigns with high ROI focus"
    },
    {
      type: "Mid-Market",
      budget: "$50K-500K/month",
      strategy: "Multi-tier campaigns with brand awareness"
    },
    {
      type: "Enterprise",
      budget: "$500K+/month",
      strategy: "Global campaigns with celebrity partnerships"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Agency Solutions</h1>
        <p className="text-xl text-gray-600 mb-12">
          Scale your agency's influencer marketing services with white-label solutions, 
          multi-client management, and profitability optimization.
        </p>
        
        <div className="bg-gray-700 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">🏢 Agency Demo</h3>
          <p className="text-emerald-100 mb-6">
            See how agencies scale to 100+ clients with our white-label platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/demo" className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Agency Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {agencyFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {feature.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Agency Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agencyBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-emerald-600 mb-2">{benefit.benefit}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Client Segmentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{client.type}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Budget: </span>{client.budget}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Strategy: </span>{client.strategy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-700 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Agency?</h2>
          <p className="text-emerald-100 mb-6">
            Join 500+ agencies managing 10,000+ clients with our white-label platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Agency Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition">
              Start Free Trial
            </Link>
          </div>
          <p className="text-emerald-100 text-sm mt-4">
            14-day free trial • No credit card required • White-label ready
          </p>
        </div>
      </section>
    </div>
  </main>
  );
};

export default Agencies;
