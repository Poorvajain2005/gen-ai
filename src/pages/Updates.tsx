import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

const Updates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updates = [
    {
      date: "December 15, 2024",
      version: "v2.4.0",
      title: "Enhanced AI Matching & Global Expansion",
      type: "Major Release",
      features: [
        "Improved AI influencer matching algorithm with 40% better accuracy",
        "Added support for 15 new countries including Brazil, India, and Japan",
        "New bulk campaign management tools for agencies",
        "Enhanced fraud detection with real-time verification"
      ]
    },
    {
      date: "November 28, 2024", 
      version: "v2.3.2",
      title: "Performance Improvements & Bug Fixes",
      type: "Update",
      features: [
        "50% faster dashboard loading times",
        "Fixed campaign export functionality",
        "Improved mobile responsiveness",
        "Enhanced search filters for influencer discovery"
      ]
    },
    {
      date: "November 10, 2024",
      version: "v2.3.0", 
      title: "TikTok Integration & Advanced Analytics",
      type: "Major Release",
      features: [
        "Full TikTok integration with 5M+ creator profiles",
        "Advanced ROI attribution tracking",
        "New white-label reporting for agencies",
        "Automated compliance checking for global campaigns"
      ]
    }
  ];

  const upcomingFeatures = [
    {
      title: "YouTube Shorts Integration",
      description: "Connect with YouTube Shorts creators and track short-form video performance",
      eta: "Q1 2025"
    },
    {
      title: "AI Content Generation",
      description: "Generate campaign briefs and content ideas using AI",
      eta: "Q1 2025"
    },
    {
      title: "Advanced Competitor Analysis",
      description: "Track competitor campaigns and benchmark performance",
      eta: "Q2 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Platform Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest features, improvements, and enhancements to our influencer marketing platform.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Updates</h2>
          <div className="space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{update.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span>{update.date}</span>
                      <span>•</span>
                      <span>{update.version}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    update.type === 'Major Release' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {update.type}
                  </span>
                </div>
                <ul className="space-y-2">
                  {update.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="text-green-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <span className="text-sm font-medium text-green-600">{feature.eta}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to get notified about new features and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Updates;