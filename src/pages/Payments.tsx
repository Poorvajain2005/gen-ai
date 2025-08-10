import { useEffect } from "react";
import { Link } from "react-router-dom";

const Payments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Processing</h1>
        <p className="text-lg text-gray-600 mb-8">
          Secure and efficient payment processing for influencer campaigns with support for multiple currencies.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Multi-Currency Support</h2>
          <p className="text-gray-600">
            Pay influencers securely in their preferred currency with transparent exchange rates.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Automated Payouts</h2>
          <p className="text-gray-600">
            Schedule and automate payouts to influencers to save time and reduce errors.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Secure Transactions</h2>
          <p className="text-gray-600">
            All transactions are encrypted and comply with industry security standards.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Processing Payments
        </Link>
      </section>
    </main>
  );
};

export default Payments;
