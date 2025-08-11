import { useEffect } from "react";
import { Link } from "react-router-dom";

const Saas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SaaS Solutions</h1>
        <p className="text-lg text-gray-600 mb-8">
          B2B influencer marketing solutions designed specifically for SaaS companies to drive growth and customer acquisition.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Lead Generation</h2>
          <p className="text-gray-600">
            Leverage influencers to generate high-quality leads and increase conversions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Customer Advocacy</h2>
          <p className="text-gray-600">
            Build a network of brand advocates to promote your SaaS product authentically.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Performance Analytics</h2>
          <p className="text-gray-600">
            Track campaign effectiveness and optimize influencer partnerships with detailed analytics.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Growing Your SaaS
        </Link>
      </section>
    </main>
  );
};

export default Saas;
