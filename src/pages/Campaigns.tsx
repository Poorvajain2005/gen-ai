import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Campaigns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const campaignFeatures = [
    {
      title: "Multi-Stage Campaign Workflows",
      description: "Design complex campaign workflows with multiple stages including influencer outreach, content approval, posting schedules, and performance tracking.",
      icon: "🔄",
      details: [
        "Automated influencer outreach and follow-up sequences",
        "Multi-level approval processes for content and budgets",
        "Dynamic posting schedules based on optimal engagement times",
        "Real-time campaign progress tracking and milestone alerts"
      ]
    },
    {
      title: "Centralized Campaign Dashboard",
      description: "Manage all your campaigns from a single dashboard with real-time updates, performance metrics, and team collaboration tools.",
      icon: "📊",
      details: [
        "Real-time campaign performance metrics and KPIs",
        "Team collaboration and task assignment features",
        "Automated alerts for deadlines and milestones",
        "Customizable dashboard views for different team roles"
      ]
    },
    {
      title: "Content Management & Approval",
      description: "Streamline content creation, review, and approval processes with built-in collaboration tools and automated workflows.",
      icon: "✅",
      details: [
        "Content upload and review workflows",
        "Automated brand compliance checking",
        "Version control and revision tracking",
        "Legal approval and contract management"
      ]
    },
    {
      title: "Budget & Payment Management",
      description: "Track campaign budgets, manage influencer payments, and generate financial reports with automated payment processing.",
      icon: "💰",
      details: [
        "Real-time budget tracking and forecasting",
        "Automated payment scheduling and processing",
        "Multi-currency support and exchange rate management",
        "Detailed financial reporting and ROI analysis"
      ]
    },
    {
      title: "Performance Tracking & Optimization",
      description: "Monitor campaign performance in real-time with advanced analytics, A/B testing, and automated optimization recommendations.",
      icon: "📈",
      details: [
        "Real-time performance metrics and KPI tracking",
        "Automated A/B testing for content optimization",
        "AI-powered optimization recommendations",
        "Predictive analytics for campaign success"
      ]
    },
    {
      title: "Team Collaboration Tools",
      description: "Collaborate seamlessly with your team, clients, and influencers with built-in communication, task management, and approval workflows.",
      icon: "👥",
      details: [
        "Real-time messaging and collaboration tools",
        "Task assignment and progress tracking",
        "Client approval workflows and feedback systems",
        "Role-based access control and permissions"
      ]
    }
  ];

  const campaignTypes = [
    {
      type: "Product Launch",
      description: "Coordinate multi-influencer product launches with teaser campaigns, launch day blitz, and sustained promotion phases.",
      timeline: "4-8 weeks",
      bestFor: ["Ecommerce brands", "SaaS companies", "New product releases"]
    },
    {
      type: "Brand Awareness",
      description: "Build brand recognition through consistent messaging across multiple influencers and platforms.",
      timeline: "8-12 weeks",
      bestFor: ["New brands", "Market expansion", "Rebranding campaigns"]
    },
    {
      type: "User Generated Content",
      description: "Generate authentic user-generated content at scale for social proof and content marketing.",
      timeline: "2-6 weeks",
      bestFor: ["Social proof", "Content marketing", "Community building"]
    },
    {
      type: "Seasonal Campaigns",
      description: "Capitalize on seasonal trends and holidays with coordinated influencer campaigns.",
      timeline: "2-4 weeks",
      bestFor: ["Holiday promotions", "Seasonal products", "Event marketing"]
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Campaign Planning",
      description: "Define objectives, target audience, budget, and timeline with AI-powered strategy recommendations."
    },
    {
      step: "2",
      title: "Influencer Discovery",
      description: "Find and vet influencers using AI matching, audience analysis, and performance predictions."
    },
    {
      step: "3",
      title: "Outreach & Negotiation",
      description: "Automated outreach sequences, contract negotiations, and rate benchmarking."
    },
    {
      step: "4",
      title: "Content Creation",
      description: "Brief creation, content guidelines, approval workflows, and revision management."
    },
    {
      step: "5",
      title: "Campaign Execution",
      description: "Scheduled posting, real-time monitoring, and performance tracking."
    },
    {
      step: "6",
      title: "Analysis & Optimization",
      description: "Performance analysis, ROI calculation, and optimization recommendations."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">End-to-End Campaign Management</h1>
          <p className="text-lg text-gray-600 mb-8">
            Streamline your entire influencer marketing process from planning to performance analysis. 
            Manage hundreds of campaigns simultaneously with automated workflows, real-time tracking, and team collaboration tools.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🎯 Campaign Demo</h3>
            <p className="text-gray-600 mb-4">
              See how easy it is to manage complex influencer campaigns with our interactive demo.
            </p>
            <Link to="/demo" className="inline-block bg-gray-400 text-white px-6 py-3 rounded-md hover:bg-gray-500 transition">
              Book Campaign Demo
            </Link>
          </div>
        </section>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {campaignFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {feature.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Campaign Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaignTypes.map((campaign, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{campaign.type}</h3>
              <p className="text-sm text-gray-600 mb-3">{campaign.description}</p>
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-900">Timeline: </span>
                <span className="text-sm text-gray-600">{campaign.timeline}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Best for:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {campaign.bestFor.map((use, idx) => (
                    <li key={idx}>• {use}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Campaign Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-3 -left-3 bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 mt-4">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-gray-700 rounded-lg p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Campaigns?</h2>
          <p className="text-gray-300 mb-6">
            Join 5,000+ brands and agencies managing successful influencer campaigns with our platform. 
            From single campaigns to global initiatives, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="bg-white text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
              Book Campaign Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-700 transition">
              Start Free Trial
            </Link>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            14-day free trial • No credit card required • Manage unlimited campaigns
          </p>
        </div>
      </section>
    </main>
  );
};

export default Campaigns;
