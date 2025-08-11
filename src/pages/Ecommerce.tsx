import { useEffect } from "react";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ecommerceStrategies = [
    {
      title: "Product Launch Campaigns",
      description: "Coordinate multi-influencer product launches with teaser campaigns, launch day blitz, and sustained promotion phases.",
      icon: "🚀",
      details: [
        "Pre-launch teaser campaigns with micro-influencers",
        "Launch day coordinated posting across all tiers",
        "Sustained promotion with user-generated content",
        "Post-launch review campaigns and testimonials"
      ]
    },
    {
      title: "Seasonal Campaign Optimization",
      description: "Capitalize on seasonal trends and shopping events with targeted influencer campaigns.",
      icon: "🎄",
      details: [
        "Holiday shopping campaigns (Black Friday, Cyber Monday)",
        "Seasonal product promotions (summer, winter collections)",
        "Back-to-school and graduation campaigns",
        "Valentine's Day, Mother's Day, Father's Day promotions"
      ]
    },
    {
      title: "User-Generated Content at Scale",
      description: "Generate authentic product reviews and lifestyle content from real customers and micro-influencers.",
      icon: "📱",
      details: [
        "Product seeding campaigns with micro-influencers",
        "Customer testimonial campaigns",
        "Unboxing and review video campaigns",
        "Lifestyle integration content creation"
      ]
    },
    {
      title: "Conversion-Focused Campaigns",
      description: "Drive direct sales with trackable links, discount codes, and performance-based partnerships.",
      icon: "💰",
      details: [
        "Trackable affiliate links and discount codes",
        "Performance-based influencer partnerships",
        "Retargeting campaigns with influencer content",
        "Cart abandonment recovery campaigns"
      ]
    },
    {
      title: "Brand Awareness & Trust Building",
      description: "Build brand credibility and trust through authentic influencer partnerships and thought leadership.",
      icon: "🤝",
      details: [
        "Brand ambassador programs with long-term partnerships",
        "Thought leadership content with industry experts",
        "Behind-the-scenes brand storytelling",
        "Sustainability and values-based campaigns"
      ]
    },
    {
      title: "Multi-Platform Campaign Coordination",
      description: "Seamlessly coordinate campaigns across Instagram, TikTok, YouTube, and emerging platforms.",
      icon: "🌐",
      details: [
        "Cross-platform content adaptation",
        "Platform-specific influencer strategies",
        "Emerging platform early adoption",
        "Platform performance comparison and optimization"
      ]
    }
  ];

  const successMetrics = [
    {
      metric: "Average ROAS",
      value: "4.2x",
      description: "Return on ad spend across all ecommerce campaigns"
    },
    {
      metric: "Conversion Rate",
      value: "3.8%",
      description: "Average conversion rate from influencer traffic"
    },
    {
      metric: "Customer LTV",
      value: "$247",
      description: "Average customer lifetime value from influencer campaigns"
    },
    {
      metric: "Campaign Reach",
      value: "2.3M",
      description: "Average monthly reach across ecommerce campaigns"
    }
  ];

  const caseStudies = [
    {
      brand: "Fashion Nova",
      challenge: "Scale influencer marketing across 500+ influencers",
      solution: "Automated campaign management with performance tracking",
      results: "300% increase in ROAS, 40% reduction in management time"
    },
    {
      brand: "Gymshark",
      challenge: "Build authentic fitness community",
      solution: "Micro-influencer program with fitness enthusiasts",
      results: "500% increase in brand mentions, 200% increase in sales"
    },
    {
      brand: "ColourPop",
      challenge: "Launch new product lines with maximum impact",
      solution: "Coordinated launch campaigns across beauty influencers",
      results: "Sold out 3 product launches in 24 hours, 8x ROAS"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Ecommerce Influencer Marketing</h1>
        <p className="text-xl text-gray-600 mb-12">
          Drive sales, build brand loyalty, and scale your ecommerce business with data-driven influencer campaigns.
        </p>
        
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">🛍️ Ecommerce Demo</h3>
          <p className="text-pink-100 mb-6">
            See how top ecommerce brands use our platform to drive 4x+ ROAS.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/demo" className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Ecommerce Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {ecommerceStrategies.map((strategy, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">{strategy.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{strategy.title}</h3>
            <p className="text-gray-600 mb-4">{strategy.description}</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {strategy.details.map((detail, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-3xl font-bold text-pink-600 mb-2">{metric.value}</h3>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">{metric.metric}</h4>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Success Stories</h2>
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{study.brand}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Challenge: </span>
                  <span className="text-gray-600">{study.challenge}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Solution: </span>
                  <span className="text-gray-600">{study.solution}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Results: </span>
                  <span className="text-gray-600">{study.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Ecommerce Sales?</h2>
          <p className="text-pink-100 mb-6">
            Join 5,000+ ecommerce brands driving millions in sales through influencer marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Ecommerce Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition">
              Start Free Trial
            </Link>
          </div>
          <p className="text-pink-100 text-sm mt-4">
            14-day free trial • No credit card required • 4x average ROAS
          </p>
        </div>
      </section>
    </main>
  );
};

export default Ecommerce;
