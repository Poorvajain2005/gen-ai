import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

const Management = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const managementTools = [
    {
      title: "Campaign Management",
      description: "Centralized dashboard to manage all your influencer campaigns",
      features: ["Campaign tracking", "Performance monitoring", "Budget management", "Timeline oversight"]
    },
    {
      title: "Influencer Relationship Management",
      description: "Build and maintain relationships with your influencer network",
      features: ["Contact management", "Communication history", "Performance tracking", "Contract management"]
    },
    {
      title: "Content Management",
      description: "Organize, review, and approve influencer content efficiently",
      features: ["Content library", "Approval workflows", "Brand compliance", "Asset organization"]
    },
    {
      title: "Team Management",
      description: "Collaborate effectively with your team and assign responsibilities",
      features: ["Role-based access", "Task assignment", "Team collaboration", "Permission controls"]
    }
  ];

  const stats = [
    { label: "Active Campaigns", value: "24" },
    { label: "Influencer Partners", value: "156" },
    { label: "Content Pieces", value: "342" },
    { label: "Team Members", value: "8" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Campaign Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your influencer marketing operations with powerful management tools and centralized control.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {managementTools.map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <ul className="space-y-2">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Management?</h2>
          <p className="text-gray-300 mb-6">
            Take control of your influencer marketing operations with our comprehensive management tools.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
};

export default Management;