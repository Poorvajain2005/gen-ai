import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      industry: "Ecommerce - Fashion",
      title: "Fashion Nova: 3x ROI Growth with Micro-Influencer Strategy",
      company: "Fashion Nova",
      challenge: "Scale influencer marketing while maintaining authentic brand voice and measurable ROI across 500+ micro-influencers.",
      solution: "Implemented AI-powered influencer discovery to identify fashion micro-influencers with 10K-100K followers and 3%+ engagement rates. Used automated campaign management to coordinate 500+ partnerships simultaneously.",
      results: [
        "300% increase in ROI within 6 months",
        "500+ active micro-influencer partnerships",
        "45% reduction in campaign management time",
        "$2.5M in attributed revenue"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      duration: "6 months",
      budget: "$150K"
    },
    {
      industry: "SaaS - Tech",
      title: "TechFlow: From 0 to 50K Users with Developer Influencers",
      company: "TechFlow",
      challenge: "Build credibility in the developer community and acquire high-quality users for their new SaaS product.",
      solution: "Identified 200+ technical influencers and developer advocates. Created educational content campaigns focusing on product tutorials and use case demonstrations.",
      results: [
        "50,000 new user signups in 4 months",
        "85% reduction in customer acquisition cost",
        "200+ technical content pieces created",
        "Featured in 50+ developer newsletters"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      duration: "4 months",
      budget: "$75K"
    },
    {
      industry: "Agency - Marketing",
      title: "ScaleMedia: Managing 100+ Client Campaigns Simultaneously",
      company: "ScaleMedia Agency",
      challenge: "Manage influencer campaigns for 100+ clients across different industries without compromising quality or missing deadlines.",
      solution: "White-label platform implementation with automated workflows, custom reporting dashboards, and centralized campaign management.",
      results: [
        "400% increase in client capacity",
        "60% reduction in operational costs",
        "95% client retention rate",
        "$5M in managed campaign spend"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      duration: "12 months",
      budget: "$50K platform investment"
    },
    {
      industry: "Enterprise - Beauty",
      title: "L'Oréal: Global Campaign Coordination Across 15 Markets",
      company: "L'Oréal",
      challenge: "Coordinate consistent influencer campaigns across 15 international markets while maintaining brand guidelines and local relevance.",
      solution: "Enterprise platform with multi-market campaign templates, automated compliance checking, and localized influencer matching.",
      results: [
        "15 markets coordinated seamlessly",
        "1000+ influencers managed globally",
        "90% brand compliance rate",
        "200% increase in global campaign efficiency"
      ],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop",
      duration: "18 months",
      budget: "$500K"
    },
    {
      industry: "Ecommerce - Beauty",
      title: "Glossier: Building Community-Driven Product Launches",
      company: "Glossier",
      challenge: "Create authentic product launches driven by community feedback and influencer partnerships.",
      solution: "Built a community of 300+ beauty influencers for product testing, feedback collection, and launch amplification.",
      results: [
        "500% increase in launch day sales",
        "300+ authentic product reviews",
        "75% reduction in product development cycle",
        "90% positive sentiment rate"
      ],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop",
      duration: "8 months",
      budget: "$200K"
    },
    {
      industry: "SaaS - Fintech",
      title: "PayTech: Trust Building in Financial Services",
      company: "PayTech",
      challenge: "Build trust and credibility in the competitive fintech space through authentic influencer partnerships.",
      solution: "Partnered with 150+ financial advisors and fintech influencers to create educational content about financial literacy and product benefits.",
      results: [
        "25,000 new account openings",
        "300% increase in brand trust scores",
        "150+ educational content pieces",
        "65% improvement in customer lifetime value"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      duration: "6 months",
      budget: "$120K"
    }
  ];

  const industries = ["All", "Ecommerce", "SaaS", "Agency", "Enterprise", "Beauty", "Fashion", "Tech", "Fintech"];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> </div>
        <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories & Case Studies</h1>
        <p className="text-lg text-gray-600 mb-8">
          Real results from real brands. Discover how leading companies across industries 
          are scaling their influencer marketing with data-driven strategies and measurable ROI.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map(industry => (
            <button
              key={industry}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-blue-50 hover:border-blue-300 transition"
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {caseStudies.map((study, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="relative">
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {study.industry}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{study.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>Duration: {study.duration}</span>
                <span>Budget: {study.budget}</span>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                <p className="text-gray-600 text-sm">{study.challenge}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to={`/case-studies/${study.company.toLowerCase().replace(/\s+/g, '-')}`} 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
              >
                Read Full Case Study
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 bg-gray-700 rounded-lg p-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-gray-300 mb-6">
            Join thousands of brands achieving remarkable results with our influencer marketing platform. 
            Get started today with a personalized strategy session.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/demo" className="bg-white text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Book a Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-gray-700 transition">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
