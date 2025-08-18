import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

const OurData = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataStats = [
    { metric: "10M+", label: "Verified Influencers", description: "Across all major platforms" },
    { metric: "500M+", label: "Data Points", description: "Updated in real-time" },
    { metric: "50+", label: "Countries", description: "Global coverage" },
    { metric: "99.9%", label: "Uptime", description: "Reliable data access" }
  ];

  const dataSources = [
    {
      platform: "Instagram",
      coverage: "8M+ profiles",
      metrics: ["Follower count", "Engagement rate", "Audience demographics", "Content analysis"]
    },
    {
      platform: "TikTok", 
      coverage: "5M+ profiles",
      metrics: ["Video performance", "Trending content", "Audience insights", "Growth trends"]
    },
    {
      platform: "YouTube",
      coverage: "2M+ channels",
      metrics: ["Subscriber growth", "View metrics", "Content categories", "Audience retention"]
    },
    {
      platform: "Twitter",
      coverage: "3M+ profiles",
      metrics: ["Tweet engagement", "Follower quality", "Influence score", "Topic expertise"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Data</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most comprehensive influencer database powered by real-time data collection, 
            AI analysis, and fraud detection across all major social platforms.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {dataStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.metric}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Platform Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{source.platform}</h3>
                <p className="text-green-600 font-medium mb-4">{source.coverage}</p>
                <ul className="space-y-2">
                  {source.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Data?</h2>
          <p className="text-gray-300 mb-6">
            Get access to our API for custom data feeds, advanced analytics, and enterprise integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/api" className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Explore API
            </a>
            <a href="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition">
              Contact Sales
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurData;