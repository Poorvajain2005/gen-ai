import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Enterprise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const enterpriseFeatures = [
    {
      title: "Global Campaign Coordination",
      description: "Manage influencer campaigns across multiple countries and markets with centralized control.",
      icon: "🌍",
      details: [
        "Multi-market campaign planning and execution",
        "Localized content and influencer selection",
        "Centralized budget and resource management",
        "Cross-market performance tracking"
      ]
    },
    {
      title: "Compliance & Brand Safety",
      description: "Ensure campaigns meet legal, regulatory, and brand safety standards worldwide.",
      icon: "🛡️",
      details: [
        "Automated compliance checks and approvals",
        "Brand safety monitoring and risk mitigation",
        "Legal contract management and archiving",
        "Global data privacy and GDPR compliance"
      ]
    },
    {
      title: "Enterprise-Grade Security",
      description: "Protect your data with bank-level security, encryption, and access controls.",
      icon: "🔒",
      details: [
        "SOC 2 Type II compliance",
        "Role-based access control and permissions",
        "Data encryption at rest and in transit",
        "Comprehensive audit trails"
      ]
    },
    {
      title: "Dedicated Support & SLA",
      description: "Receive priority support with dedicated account managers and service level agreements.",
      icon: "🤝",
      details: [
        "24/7 dedicated support",
        "Custom SLAs and uptime guarantees",
        "Onboarding and training programs",
        "Strategic consulting and campaign optimization"
      ]
    },
    {
      title: "Advanced Analytics & Reporting",
      description: "Access enterprise-grade analytics with customizable dashboards and white-label reporting.",
      icon: "📊",
      details: [
        "Customizable enterprise dashboards",
        "White-label client reporting",
        "Predictive analytics and AI insights",
        "Cross-market benchmarking"
      ]
    },
    {
      title: "Scalable Infrastructure",
      description: "Handle large-scale campaigns with robust infrastructure and API integrations.",
      icon: "⚙️",
      details: [
        "High-availability platform architecture",
        "API access for custom integrations",
        "Bulk data import/export",
        "Automated workflow orchestration"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Enterprise Influencer Marketing</h1>
        <p className="text-xl text-gray-600 mb-12">
          Empower your global marketing teams with enterprise-grade influencer marketing solutions that scale securely and compliantly.
        </p>
        
        <div className="bg-gray-700 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">🏢 Enterprise Demo</h3>
          <p className="text-gray-300 mb-6">
            Discover how enterprises manage global influencer campaigns with security and compliance.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/demo" className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Enterprise Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {enterpriseFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
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

      <section className="bg-gray-700 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Empower Your Enterprise?</h2>
          <p className="text-gray-300 mb-6">
            Join 200+ enterprises managing global influencer campaigns with confidence and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Enterprise Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
              Start Free Trial
            </Link>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            14-day free trial • No credit card required • Enterprise-grade security
          </p>
        </div>
      </section>
    </div>
  </main>
  );
};

export default Enterprise;
