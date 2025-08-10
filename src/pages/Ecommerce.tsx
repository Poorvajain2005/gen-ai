import { useEffect } from "react";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Solutions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Scale your Shopify business with our tailored influencer marketing solutions designed for e-commerce brands.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Shopify Integration</h2>
          <p className="text-gray-600">
            Seamlessly connect your Shopify store to manage influencer campaigns and track sales.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Product Promotion</h2>
          <p className="text-gray-600">
            Promote your products through targeted influencer collaborations to boost sales.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Performance Tracking</h2>
          <p className="text-gray-600">
            Monitor campaign performance and ROI with detailed analytics tailored for e-commerce.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Scaling Your Store
        </Link>
      </section>
    </main>
  );
};

export default Ecommerce;
