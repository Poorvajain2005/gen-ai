import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

const Newsletter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsletters = [
    {
      title: "Influencer Marketing Weekly",
      date: "December 15, 2024",
      topics: ["TikTok algorithm updates", "Holiday campaign strategies", "New platform features"],
      readTime: "5 min read"
    },
    {
      title: "Platform Updates & Industry News",
      date: "December 8, 2024", 
      topics: ["AI matching improvements", "Global expansion news", "Success story highlights"],
      readTime: "4 min read"
    },
    {
      title: "Campaign Optimization Tips",
      date: "December 1, 2024",
      topics: ["ROI maximization strategies", "Seasonal campaign planning", "Influencer relationship tips"],
      readTime: "6 min read"
    }
  ];

  const benefits = [
    "Weekly industry insights and trends",
    "Platform updates and new features",
    "Exclusive case studies and success stories",
    "Campaign optimization tips",
    "Early access to webinars and events"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Newsletter</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with weekly insights, platform updates, and expert tips delivered straight to your inbox.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscribe Now</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">What You'll Get:</h3>
              <ul className="space-y-2 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                  Subscribe to Newsletter
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Newsletters</h2>
            <div className="space-y-6">
              {newsletters.map((newsletter, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{newsletter.title}</h3>
                    <span className="text-sm text-gray-500">{newsletter.readTime}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{newsletter.date}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">In this issue:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {newsletter.topics.map((topic, idx) => (
                        <li key={idx}>• {topic}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                    Read Newsletter →
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16 bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join 50,000+ Marketers</h2>
          <p className="text-gray-300 mb-6">
            Get weekly insights that help you stay ahead in influencer marketing.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
            Subscribe Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default Newsletter;