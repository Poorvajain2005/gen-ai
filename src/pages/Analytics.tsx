import { useEffect } from "react";
import { Link } from "react-router-dom";

const Analytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Analytics & Reporting</h1>
        <p className="text-lg text-gray-600 mb-8">
          Gain real-time insights and detailed reports to measure the success of your influencer marketing campaigns.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Real-Time Dashboards</h2>
          <p className="text-gray-600">
            Monitor campaign performance with live data and customizable dashboards.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Custom Reports</h2>
          <p className="text-gray-600">
            Generate detailed reports tailored to your business needs and KPIs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">ROI Tracking</h2>
          <p className="text-gray-600">
            Track the return on investment for each campaign to optimize your marketing spend.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Analyzing Your Campaigns
        </Link>
      </section>
    </main>
  );
};

export default Analytics;
