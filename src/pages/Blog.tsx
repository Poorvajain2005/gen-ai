import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      category: "Ecommerce",
      title: "How Ecommerce Brands Can 10x Sales with Micro-Influencer Campaigns",
      excerpt: "Discover proven strategies for ecommerce brands to leverage micro-influencers for massive ROI, including product seeding techniques and conversion optimization.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      readTime: "8 min read",
      date: "Dec 15, 2024"
    },
    {
      category: "Agencies",
      title: "Scaling Influencer Campaigns: A Guide for Marketing Agencies",
      excerpt: "Learn how agencies manage 100+ concurrent campaigns, maintain quality control, and deliver exceptional results for multiple clients simultaneously.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      readTime: "12 min read",
      date: "Dec 12, 2024"
    },
    {
      category: "SaaS",
      title: "SaaS Growth Through Influencer Partnerships: The Complete Playbook",
      excerpt: "Explore how SaaS companies can use influencer marketing for user acquisition, thought leadership, and building trust in competitive markets.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      readTime: "10 min read",
      date: "Dec 10, 2024"
    },
    {
      category: "Enterprise",
      title: "Enterprise Influencer Marketing: Compliance and Scale",
      excerpt: "Navigate the complexities of enterprise-level influencer campaigns including legal compliance, brand safety, and global campaign coordination.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      readTime: "15 min read",
      date: "Dec 8, 2024"
    },
    {
      category: "Strategy",
      title: "2024 Influencer Marketing Trends: What Brands Need to Know",
      excerpt: "Stay ahead of the curve with the latest platform updates, algorithm changes, and emerging influencer categories that will shape 2024.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      readTime: "7 min read",
      date: "Dec 5, 2024"
    },
    {
      category: "Case Study",
      title: "How [Brand] Generated $2M in Revenue with 50 Micro-Influencers",
      excerpt: "A detailed breakdown of how a DTC brand scaled from $0 to $2M using strategic micro-influencer partnerships and data-driven campaign optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      readTime: "20 min read",
      date: "Dec 3, 2024"
    }
  ];

  const categories = ["All", "Ecommerce", "Agencies", "SaaS", "Enterprise", "Strategy", "Case Study"];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Influencer Marketing Insights & Resources</h1>
        <p className="text-lg text-gray-600 mb-8">
          Expert insights, strategies, and case studies for ecommerce brands, agencies, SaaS companies, and enterprises. 
          Learn how to leverage influencer marketing to drive growth and achieve your business objectives.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-blue-50 hover:border-blue-300 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-600 uppercase">{post.category}</span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
                <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 bg-blue-50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get weekly insights, case studies, and industry updates delivered to your inbox. 
            Join 50,000+ marketers from leading brands and agencies.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
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
