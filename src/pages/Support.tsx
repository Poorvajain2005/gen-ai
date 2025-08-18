import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 5 minutes",
      icon: "💬"
    },
    {
      title: "Email Support", 
      description: "Send us detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "< 2 hours",
      icon: "📧"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Business hours",
      responseTime: "Immediate",
      icon: "📞"
    },
    {
      title: "Help Center",
      description: "Browse our comprehensive documentation",
      availability: "24/7",
      responseTime: "Self-service",
      icon: "📚"
    }
  ];

  const quickLinks = [
    { title: "Getting Started Guide", href: "/help/getting-started" },
    { title: "Campaign Setup Tutorial", href: "/help/campaigns" },
    { title: "Payment & Billing", href: "/help/billing" },
    { title: "API Documentation", href: "/api" },
    { title: "Platform Status", href: "/status" },
    { title: "Feature Requests", href: "/feedback" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need, when you need it. Our support team is here to ensure your success with our platform.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{option.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Available:</span> {option.availability}</p>
                <p><span className="font-medium">Response:</span> {option.responseTime}</p>
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Contact Now
              </button>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-between"
              >
                <span className="font-medium text-gray-900">{link.title}</span>
                <span className="text-green-600">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-gray-300 mb-6">
            Our support team is standing by to help you succeed. Get in touch now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
              Start Live Chat
            </button>
            <Link to="/book-call" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition">
              Schedule Call
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Support;