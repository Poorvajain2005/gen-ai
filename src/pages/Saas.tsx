import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Saas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const saasStrategies = [
    {
      title: "User Acquisition Campaigns",
      description: "Drive qualified trial sign-ups and demo bookings through B2B influencer partnerships.",
      icon: "🚀",
      details: [
        "Thought leader partnerships in your industry",
        "Developer advocate programs",
        "SaaS review influencer campaigns",
        "LinkedIn thought leadership content"
      ]
    },
    {
      title: "Trust & Credibility Building",
      description: "Establish your SaaS as the industry leader through expert endorsements and social proof.",
      icon: "🤝",
      details: [
        "Industry expert endorsements and testimonials",
        "Customer success story campaigns",
        "Product review and comparison content",
        "Trust-building thought leadership"
      ]
    },
    {
      title: "Developer & Technical Content",
      description: "Reach technical audiences through developer advocates and technical influencers.",
      icon: "💻",
      details: [
        "Developer advocate partnerships",
        "Technical tutorial and demo content",
        "API integration showcase campaigns",
        "GitHub and Stack Overflow influencer campaigns"
      ]
    },
    {
      title: "Trial-to-Paid Conversion",
      description: "Optimize trial-to-paid conversion rates with targeted influencer content and retargeting.",
      icon: "📈",
      details: [
        "Trial user onboarding optimization",
        "Feature demonstration campaigns",
        "Customer success story retargeting",
        "Upgrade and expansion campaigns"
      ]
    },
    {
      title: "Enterprise Lead Generation",
      description: "Generate high-value enterprise leads through executive-level influencer partnerships.",
      icon: "🏢",
      details: [
        "C-suite executive partnerships",
        "Enterprise case study campaigns",
        "Industry conference and event partnerships",
        "Executive thought leadership content"
      ]
    },
    {
      title: "Community Building",
      description: "Build and nurture your SaaS community through authentic influencer relationships.",
      icon: "👥",
      details: [
        "Community ambassador programs",
        "User-generated content campaigns",
        "Customer advocacy programs",
        "Community event and webinar partnerships"
      ]
    }
  ];

  const saasMetrics = [
    {
      metric: "Trial Sign-ups",
      value: "300%",
      description: "Increase in qualified trial sign-ups"
    },
    {
      metric: "Conversion Rate",
      value: "25%",
      description: "Trial-to-paid conversion rate improvement"
    },
    {
      metric: "CAC Reduction",
      value: "40%",
      description: "Customer acquisition cost reduction"
    },
    {
      metric: "Enterprise Leads",
      value: "500%",
      description: "Increase in enterprise-qualified leads"
    }
  ];

  const saasTypes = [
    {
      type: "B2B SaaS",
      focus: "Lead generation and enterprise sales",
      kpis: "MQLs, SQLs, enterprise deals"
    },
    {
      type: "Developer Tools",
      focus: "Developer adoption and technical content",
      kpis: "GitHub stars, API usage, developer sign-ups"
    },
    {
      type: "Productivity Tools",
      focus: "User acquisition and retention",
      kpis: "Daily active users, retention rates, upgrade rates"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">SaaS Influencer Marketing</h1>
        <p className="text-xl text-gray-600 mb-12">
          Drive user acquisition, build trust, and scale your SaaS business with strategic B2B influencer partnerships.
        </p>
        
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">💻 SaaS Demo</h3>
          <p className="text-green-100 mb-6">
            See how SaaS companies drive 300%+ more trials with B2B influencer campaigns.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/demo" className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book SaaS Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {saasStrategies.map((strategy, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">{strategy.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{strategy.title}</h3>
            <p className="text-gray-600 mb-4">{strategy.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {strategy.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saasMetrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">{metric.value}</h3>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">{metric.metric}</h4>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">SaaS Campaign Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {saasTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{type.type}</h3>
              <p className="text-sm text-gray-600 mb-2">{type.focus}</p>
              <p className="text-sm">
                <span className="font-medium text-gray-900">KPIs: </span>
                <span className="text-gray-600">{type.kpis}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your SaaS?</h2>
          <p className="text-green-100 mb-6">
            Join 1,000+ SaaS companies driving 300%+ more trials with B2B influencer campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book SaaS Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition">
              Start Free Trial
            </Link>
          </div>
          <p className="text-green-100 text-sm mt-4">
            14-day free trial • No credit card required • 300% trial increase
          </p>
        </div>
      </section>
    </div>
  </main>
  );
};

export default Saas;
