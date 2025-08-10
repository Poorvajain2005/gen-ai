import { useEffect } from "react";
import { Link } from "react-router-dom";

const Help = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find answers to common questions and get support for using our influencer marketing platform.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <p className="text-gray-600">
            Learn how to set up your account and launch your first campaign.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Account Management</h2>
          <p className="text-gray-600">
            Manage your profile, billing, and preferences with ease.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Technical Support</h2>
          <p className="text-gray-600">
            Get help with technical issues and troubleshooting.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/help" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Visit Help Center
        </Link>
      </section>
    </main>
  );
};

export default Help;
