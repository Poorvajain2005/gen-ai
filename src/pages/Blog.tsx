import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest insights, strategies, and trends in influencer marketing.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Maximizing ROI with Influencer Marketing</h2>
          <p className="text-gray-600">
            Learn how to optimize your influencer campaigns to achieve the best return on investment.
          </p>
          <Link to="/blog/maximizing-roi" className="text-blue-600 hover:underline mt-2 inline-block">
            Read More
          </Link>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Top Influencer Marketing Trends in 2024</h2>
          <p className="text-gray-600">
            Discover the latest trends shaping the influencer marketing landscape this year.
          </p>
          <Link to="/blog/trends-2024" className="text-blue-600 hover:underline mt-2 inline-block">
            Read More
          </Link>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Building Authentic Influencer Relationships</h2>
          <p className="text-gray-600">
            Tips and best practices for fostering genuine connections with influencers.
          </p>
          <Link to="/blog/authentic-relationships" className="text-blue-600 hover:underline mt-2 inline-block">
            Read More
          </Link>
        </article>
      </section>

      <section className="mt-12 text-center">
        <Link to="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View All Blog Posts
        </Link>
      </section>
    </main>
  );
};

export default Blog;
