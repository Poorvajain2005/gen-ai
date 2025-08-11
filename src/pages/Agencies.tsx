import { useEffect } from "react";
import { Link } from "react-router-dom";

const Agencies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agency Solutions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage multiple client campaigns efficiently with our influencer marketing platform designed for agencies.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Client Management</h2>
          <p className="text-gray-600">
            Organize and manage campaigns for multiple clients with ease.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Collaboration Tools</h2>
          <p className="text-gray-600">
            Collaborate with clients and influencers seamlessly through our platform.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Reporting & Analytics</h2>
          <p className="text-gray-600">
            Generate detailed reports to showcase campaign performance to your clients.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Managing Client Campaigns
        </Link>
      </section>
    </main>
  );
};

export default Agencies;
