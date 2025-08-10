import { useEffect } from "react";
import { Link } from "react-router-dom";

const Webinars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Webinars</h1>
        <p className="text-lg text-gray-600 mb-8">
          Join live sessions with industry experts to learn the latest influencer marketing strategies.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Maximizing Campaign Impact</h2>
          <p className="text-gray-600">
            Learn how to create impactful influencer campaigns that drive results.
          </p>
          <Link to="/webinars/maximizing-impact" className="text-blue-600 hover:underline mt-2 inline-block">
            Register Now
          </Link>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Leveraging AI in Influencer Marketing</h2>
          <p className="text-gray-600">
            Discover how AI is transforming influencer marketing and how to leverage it.
          </p>
          <Link to="/webinars/ai-influencer-marketing" className="text-blue-600 hover:underline mt-2 inline-block">
            Register Now
          </Link>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Building Long-Term Partnerships</h2>
          <p className="text-gray-600">
            Tips for creating lasting relationships with influencers for sustained success.
          </p>
          <Link to="/webinars/long-term-partnerships" className="text-blue-600 hover:underline mt-2 inline-block">
            Register Now
          </Link>
        </article>
      </section>

      <section className="mt-12 text-center">
        <Link to="/webinars" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View All Webinars
        </Link>
      </section>
    </main>
  );
};

export default Webinars;
