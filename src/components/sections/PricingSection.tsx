import { useEffect } from "react";

const PricingSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your influencer marketing needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <p className="text-gray-600 mb-4">Perfect for small businesses</p>
              <p className="text-3xl font-bold mb-4">$99/month</p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>Up to 10 campaigns</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <p className="text-gray-600 mb-4">For growing businesses</p>
              <p className="text-3xl font-bold mb-4">$299/month</p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>Up to 50 campaigns</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large teams</p>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>Unlimited campaigns</li>
                <li>Custom analytics</li>
                <li>Dedicated support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingSection };
