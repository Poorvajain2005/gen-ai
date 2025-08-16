import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Discovery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "AI-Powered Influencer Matching",
      description: "Our advanced AI analyzes 50+ data points including audience demographics, engagement rates, content quality, and brand alignment to find your perfect influencer matches.",
      icon: "🤖",
      details: [
        "Natural language processing for campaign brief analysis",
        "Machine learning algorithms for compatibility scoring",
        "Predictive analytics for campaign performance",
        "Automated influencer ranking and recommendations"
      ]
    },
    {
      title: "10M+ Verified Influencer Database",
      description: "Access the largest verified influencer database with detailed profiles, audience insights, and performance metrics across Instagram, TikTok, YouTube, Twitter, and LinkedIn.",
      icon: "📊",
      details: [
        "Real-time follower verification and fraud detection",
        "Detailed audience demographics and psychographics",
        "Historical performance data and engagement trends",
        "Cross-platform presence and content analysis"
      ]
    },
    {
      title: "Advanced Search & Filtering",
      description: "Find influencers using 100+ search criteria including demographics, interests, location, engagement rates, audience quality, and brand safety metrics.",
      icon: "🔍",
      details: [
        "Location-based targeting (country, city, region)",
        "Demographic filters (age, gender, income, interests)",
        "Engagement rate and audience quality filters",
        "Brand safety and content alignment checks"
      ]
    },
    {
      title: "Audience Intelligence",
      description: "Deep audience analysis including demographics, interests, purchasing behavior, and brand affinity to ensure perfect brand-influencer-audience alignment.",
      icon: "👥",
      details: [
        "Detailed audience demographics and psychographics",
        "Purchasing power and brand affinity analysis",
        "Geographic distribution and language preferences",
        "Competitor audience overlap analysis"
      ]
    },
    {
      title: "Competitor Analysis",
      description: "Monitor competitor influencer partnerships, campaign strategies, and performance metrics to identify opportunities and stay ahead of market trends.",
      icon: "⚡",
      details: [
        "Competitor influencer partnership tracking",
        "Campaign strategy and content analysis",
        "Performance benchmarking and gap analysis",
        "Market trend identification and opportunities"
      ]
    },
    {
      title: "Real-Time Verification",
      description: "Continuous monitoring and verification of influencer authenticity, audience quality, and engagement rates to ensure campaign success and fraud prevention.",
      icon: "✅",
      details: [
        "Real-time follower authenticity verification",
        "Engagement rate monitoring and alerts",
        "Content quality and brand safety checks",
        "Automated fraud detection and prevention"
      ]
    }
  ];

  const influencerCategories = [
    {
      category: "Mega Influencers",
      range: "1M+ followers",
      description: "Celebrity influencers and major creators with massive reach",
      bestFor: ["Brand awareness", "Product launches", "Global campaigns"]
    },
    {
      category: "Macro Influencers",
      range: "100K-1M followers",
      description: "Established creators with significant reach and engagement",
      bestFor: ["Brand awareness", "Product launches", "Content creation"]
    },
    {
      category: "Micro Influencers",
      range: "10K-100K followers",
      description: "Niche experts with highly engaged, targeted audiences",
      bestFor: ["Conversions", "Niche targeting", "Cost-effective campaigns"]
    },
    {
      category: "Nano Influencers",
      range: "1K-10K followers",
      description: "Everyday consumers with authentic, local influence",
      bestFor: ["Local campaigns", "Authentic testimonials", "Community building"]
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: "📸",
      description: "Visual storytelling and lifestyle content",
      strengths: ["Fashion", "Beauty", "Lifestyle", "Food", "Travel"]
    },
    {
      name: "TikTok",
      icon: "🎵",
      description: "Short-form video content with viral potential",
      strengths: ["Gen Z", "Entertainment", "Challenges", "Trends", "Music"]
    },
    {
      name: "YouTube",
      icon: "🎥",
      description: "Long-form video content and tutorials",
      strengths: ["Education", "Reviews", "Tutorials", "Entertainment", "Gaming"]
    },
    {
      name: "Twitter",
      icon: "🐦",
      description: "Real-time conversations and thought leadership",
      strengths: ["News", "Tech", "Finance", "Politics", "Sports"]
    },
    {
      name: "LinkedIn",
      icon: "💼",
      description: "Professional networking and B2B content",
      strengths: ["B2B", "Professional services", "Thought leadership", "Recruiting"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI-Powered Influencer Discovery</h1>
          <p className="text-xl text-gray-600 mb-12">
            Find the perfect influencers for your brand with our advanced AI technology. Access 10M+ verified profiles with detailed analytics, audience insights, and fraud detection.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Influencer Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {influencerCategories.map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{category.category}</h3>
                <p className="text-sm text-gray-600 mb-2">{category.range}</p>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Best for:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {category.bestFor.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Platform Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{platform.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{platform.description}</p>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Perfect for:</p>
                  <p className="text-xs text-gray-600">{platform.strengths.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Discovery;
