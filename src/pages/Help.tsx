import { useEffect } from "react";
import { Link } from "react-router-dom";

const Help = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Everything you need to know to launch your first influencer campaign",
      icon: "🚀",
      articles: [
        "Campaign Setup Guide",
        "Influencer Discovery Tutorial",
        "Budget Planning Calculator",
        "ROI Tracking Setup"
      ]
    },
    {
      title: "Platform Features",
      description: "Master all platform features and advanced capabilities",
      icon: "⚙️",
      articles: [
        "Dashboard Navigation",
        "Analytics & Reporting",
        "Payment Processing",
        "Team Collaboration"
      ]
    },
    {
      title: "Best Practices",
      description: "Industry best practices and proven strategies for success",
      icon: "📚",
      articles: [
        "Campaign Optimization Tips",
        "Influencer Relationship Management",
        "Content Guidelines",
        "Performance Benchmarking"
      ]
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and technical problems",
      icon: "🔧",
      articles: [
        "Account Setup Issues",
        "Payment Problems",
        "Campaign Errors",
        "Integration Issues"
      ]
    },
    {
      title: "API Documentation",
      description: "Complete API reference and integration guides",
      icon: "💻",
      articles: [
        "API Authentication",
        "Endpoint Reference",
        "SDK Documentation",
        "Rate Limits"
      ]
    },
    {
      title: "Community & Support",
      description: "Connect with other users and get expert help",
      icon: "👥",
      articles: [
        "Community Forum",
        "Live Chat Support",
        "Video Tutorials",
        "Webinar Schedule"
      ]
    }
  ];

  const supportChannels = [
    {
      channel: "Live Chat",
      availability: "24/7",
      responseTime: "Under 5 minutes",
      description: "Instant support for urgent issues"
    },
    {
      channel: "Email Support",
      availability: "24/7",
      responseTime: "Within 2 hours",
      description: "Detailed support for complex issues"
    },
    {
      channel: "Phone Support",
      availability: "Business hours",
      responseTime: "Immediate",
      description: "Enterprise customers only"
    },
    {
      channel: "Community Forum",
      availability: "24/7",
      responseTime: "Peer support",
      description: "Learn from other users"
    }
  ];

  const resources = [
    {
      type: "Video Tutorials",
      count: "50+",
      description: "Step-by-step video guides"
    },
    {
      type: "Documentation",
      count: "200+",
      description: "Comprehensive written guides"
    },
    {
      type: "Webinars",
      count: "Monthly",
      description: "Live training sessions"
    },
    {
      type: "Case Studies",
      count: "100+",
      description: "Real success stories"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Help & Support Center</h1>
        <p className="text-xl text-gray-600 mb-12">
          Get the help you need with comprehensive documentation, tutorials, and expert support.
        </p>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">💬 Need Help?</h3>
          <p className="text-blue-100 mb-6">
            Our support team is available 24/7 to help you succeed.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Contact Support
            </Link>
            <Link to="/demo" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Book Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {helpCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{category.title}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {category.articles.map((article, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {article}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Support Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{channel.channel}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Availability: </span>{channel.availability}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Response: </span>{channel.responseTime}
              </p>
              <p className="text-sm text-gray-600">{channel.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{resource.count}</h3>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">{resource.type}</h4>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-blue-100 mb-6">
            Our team is here to ensure your success with comprehensive support and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Contact Support
            </Link>
            <Link to="/demo" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Book Demo
            </Link>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            24/7 support • Comprehensive documentation • Expert guidance
          </p>
        </div>
      </section>
    </main>
  );
};

export default Help;
