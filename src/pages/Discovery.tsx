import { useEffect } from "react";
import { Link } from "react-router-dom";

const Discovery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Influencer Discovery</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the perfect influencers for your brand with our AI-powered search platform. Access over 10 million influencer profiles with detailed analytics and audience insights.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Advanced Search Filters</h2>
          <p className="text-gray-600">
            Filter influencers by demographics, interests, engagement rates, and more to find the best match for your campaign.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Verified Profiles</h2>
          <p className="text-gray-600">
            Access verified influencer profiles with authentic follower data and performance metrics.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Custom Recommendations</h2>
          <p className="text-gray-600">
            Receive AI-driven influencer recommendations tailored to your brand’s goals and target audience.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Your Discovery Today
        </Link>
      </section>
    </main>
  );
};

export default Discovery;
