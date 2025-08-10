import { useEffect } from "react";
import { Link } from "react-router-dom";

const Enterprise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Solutions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Custom influencer marketing solutions designed for large teams and enterprises to scale their programs.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Dedicated Support</h2>
          <p className="text-gray-600">
            Receive personalized support and account management tailored to your enterprise needs.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Custom Integrations</h2>
          <p className="text-gray-600">
            Integrate our platform with your existing tools and workflows for seamless operations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Advanced Security</h2>
          <p className="text-gray-600">
            Benefit from enterprise-grade security features to protect your data and campaigns.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Contact Our Enterprise Team
        </Link>
      </section>
    </main>
  );
};

export default Enterprise;
