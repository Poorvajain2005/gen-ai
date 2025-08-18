import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Payments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paymentFeatures = [
    {
      title: "Global Payment Processing",
      description: "Send and receive payments in 135+ currencies with support for local payment methods, bank transfers, and digital wallets worldwide.",
      icon: "🌍",
      details: [
        "135+ currencies supported with real-time exchange rates",
        "Local bank transfers in 50+ countries",
        "Digital wallet integrations (PayPal, Venmo, Cash App)",
        "ACH, SEPA, and SWIFT payment rails"
      ]
    },
    {
      title: "Automated Payouts",
      description: "Schedule and automate influencer payments based on campaign milestones, performance metrics, or custom triggers.",
      icon: "⚡",
      details: [
        "Automated payment scheduling based on campaign milestones",
        "Performance-based payment triggers and bonuses",
        "Bulk payment processing for multiple influencers",
        "Automatic tax form collection and compliance"
      ]
    },
    {
      title: "Escrow & Dispute Resolution",
      description: "Secure escrow services that protect both brands and influencers with built-in dispute resolution and mediation services.",
      icon: "🔒",
      details: [
        "Secure escrow holding until deliverables are met",
        "Built-in dispute resolution and mediation",
        "Automated release triggers based on performance metrics",
        "Legal compliance and documentation support"
      ]
    },
    {
      title: "Tax Compliance & Reporting",
      description: "Automated tax compliance with 1099 generation, international tax treaties, and comprehensive financial reporting.",
      icon: "📋",
      details: [
        "Automated 1099 generation and filing",
        "International tax treaty compliance",
        "Comprehensive financial reporting and analytics",
        "Audit trail and documentation management"
      ]
    },
    {
      title: "Performance-Based Payments",
      description: "Create performance-based payment structures tied to engagement, conversions, or custom KPIs with real-time tracking.",
      icon: "📊",
      details: [
        "Performance-based payment structures and bonuses",
        "Real-time KPI tracking and payment triggers",
        "Custom performance metrics and milestones",
        "Automated bonus calculations and payouts"
      ]
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, encryption, fraud detection, and comprehensive audit trails.",
      icon: "🛡️",
      details: [
        "SOC 2 Type II compliance and certification",
        "256-bit encryption and secure data transmission",
        "Real-time fraud detection and prevention",
        "Comprehensive audit trails and compliance reporting"
      ]
    }
  ];

  const paymentMethods = [
    {
      method: "Bank Transfer",
      description: "Direct bank transfers in 50+ countries",
      processingTime: "1-3 business days",
      fees: "1.5% + $0.30"
    },
    {
      method: "PayPal",
      description: "Instant payments to PayPal accounts",
      processingTime: "Instant",
      fees: "2.9% + $0.30"
    },
    {
      method: "Wise",
      description: "Low-cost international transfers",
      processingTime: "1-2 business days",
      fees: "0.5-1.5%"
    },
    {
      method: "Cryptocurrency",
      description: "Bitcoin, Ethereum, and stablecoins",
      processingTime: "10-30 minutes",
      fees: "1% + network fees"
    }
  ];

  const securityFeatures = [
    {
      title: "Bank-Level Security",
      description: "256-bit SSL encryption and SOC 2 Type II compliance"
    },
    {
      title: "Fraud Detection",
      description: "AI-powered fraud detection and prevention systems"
    },
    {
      title: "Compliance",
      description: "PCI DSS Level 1 and GDPR compliant"
    },
    {
      title: "Audit Trail",
      description: "Complete transaction history and audit trails"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Global Payment Processing</h1>
          <p className="text-xl text-gray-600 mb-12">
            Secure and efficient payment processing for influencer campaigns with support for 135+ currencies, 
            automated payouts, and comprehensive compliance features.
          </p>
          
          <div className="bg-gray-700 rounded-2xl p-8 text-white mb-12">
            <h3 className="text-2xl font-bold mb-4">💳 Payment Demo</h3>
            <p className="text-gray-300 mb-6">
              See how easy it is to process payments globally with our secure payment system.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/demo" className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                Book Payment Demo
              </Link>
              <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition">
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Payment Processing Features</h2>
            <p className="text-xl text-gray-600">Everything you need to process payments globally and efficiently</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paymentFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Supported Payment Methods</h2>
            <p className="text-gray-600">Multiple payment options to suit your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{method.method}</h3>
                <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-900">Processing: </span>
                  <span className="text-sm text-gray-600">{method.processingTime}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">Fees: </span>
                  <span className="text-sm text-gray-600">{method.fees}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security & Compliance</h2>
            <p className="text-gray-600">Enterprise-grade security for your peace of mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Payments?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 10,000+ brands processing millions in influencer payments securely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Payment Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition">
              Start Free Trial
            </Link>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            14-day free trial • No credit card required • 135+ currencies supported
          </p>
        </section>
      </div>
    </main>
  );
};

export default Payments;
