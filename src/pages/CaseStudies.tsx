import { useEffect } from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore success stories from top brands using our influencer marketing platform.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Fashion Nova's 3x ROI Growth</h2>
          <p className="text-gray-600">
            Discover how Fashion Nova tripled their ROI in 6 months using our platform.
          </p>
          <Link to="/case-studies/fashion-nova" className="text-blue-600 hover:underline mt-2 inline-block">
            Read More
          </Link>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">TechFlow's Influencer Matching Success</h2>
          <p className="text-gray-600">
            Learn how TechFlow found perfect influencers in minutes with AI-powered matching.
          </p>
          <Link to="/case-studies/techflow" className="text-blue-600 hover:underline mt-2 inline-block">
            Read More
          </Link>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Scaling Campaigns for Agencies</h2>
          <p className="text-gray-600">
            See how agencies manage multiple client campaigns efficiently using our tools.
          </p>
          <Link to="/case-studies/agencies" className="text-blue-600 hover:underline mt-2 inline-block">
            Read More
          </Link>
        </article>
      </section>

      <section className="mt-12 text-center">
        <Link to="/case-studies" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View All Case Studies
        </Link>
      </section>
    </main>
  );
};

export default CaseStudies;
