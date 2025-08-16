import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { BookOpen, Video, FileText, Headphones, Lightbulb, Users, TrendingUp, Target } from "lucide-react";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resourceCategories = [
    {
      title: "Getting Started",
      description: "Everything you need to know to launch your first influencer marketing campaign",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-blue-500",
      resources: [
        {
          title: "Influencer Marketing 101",
          description: "Complete guide to understanding influencer marketing fundamentals",
          type: "Guide",
          duration: "15 min read",
          link: "/resources/influencer-marketing-101"
        },
        {
          title: "Campaign Planning Template",
          description: "Downloadable template for planning successful influencer campaigns",
          type: "Template",
          duration: "Free download",
          link: "/resources/campaign-planning-template"
        },
        {
          title: "Budget Calculator",
          description: "Interactive tool to calculate your influencer marketing budget",
          type: "Tool",
          duration: "5 min use",
          link: "/resources/budget-calculator"
        }
      ]
    },
    {
      title: "Best Practices",
      description: "Proven strategies and tactics from successful campaigns",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-purple-500",
      resources: [
        {
          title: "Finding the Right Influencers",
          description: "Step-by-step process for identifying perfect brand-influencer matches",
          type: "Guide",
          duration: "12 min read",
          link: "/resources/finding-right-influencers"
        },
        {
          title: "Negotiation Playbook",
          description: "Expert tips for negotiating rates and contracts with influencers",
          type: "Guide",
          duration: "10 min read",
          link: "/resources/negotiation-playbook"
        },
        {
          title: "Content Guidelines",
          description: "Best practices for creating effective influencer briefs",
          type: "Template",
          duration: "Free download",
          link: "/resources/content-guidelines"
        }
      ]
    },
    {
      title: "Platform Guides",
      description: "Platform-specific strategies for Instagram, TikTok, YouTube, and more",
      icon: <Target className="h-8 w-8" />,
      color: "bg-green-500",
      resources: [
        {
          title: "Instagram Marketing Guide",
          description: "Complete strategy for Instagram influencer campaigns",
          type: "Guide",
          duration: "20 min read",
          link: "/resources/instagram-marketing-guide"
        },
        {
          title: "TikTok Campaign Playbook",
          description: "Leveraging TikTok influencers for maximum viral impact",
          type: "Guide",
          duration: "18 min read",
          link: "/resources/tiktok-campaign-playbook"
        },
        {
          title: "YouTube Integration Guide",
          description: "Strategies for long-form video content partnerships",
          type: "Guide",
          duration: "15 min read",
          link: "/resources/youtube-integration-guide"
        }
      ]
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful influencer marketing campaigns",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-orange-500",
      resources: [
        {
          title: "Fashion Nova Success Story",
          description: "How Fashion Nova scaled to $400M using micro-influencers",
          type: "Case Study",
          duration: "8 min read",
          link: "/resources/fashion-nova-case-study"
        },
        {
          title: "Gymshark Growth Strategy",
          description: "Building a $1B brand through fitness influencer partnerships",
          type: "Case Study",
          duration: "10 min read",
          link: "/resources/gymshark-case-study"
        },
        {
          title: "Daniel Wellington ROI",
          description: "Analyzing the watch brand's influencer marketing ROI",
          type: "Case Study",
          duration: "12 min read",
          link: "/resources/daniel-wellington-roi"
        }
      ]
    }
  ];

  const webinars = [
    {
      title: "Mastering Influencer Discovery",
      date: "Every Tuesday 2:00 PM EST",
      description: "Live demo of our AI-powered influencer discovery platform",
      speakers: ["Sarah Chen", "Marketing Director"],
      registrationLink: "/webinars"
    },
    {
      title: "Campaign Performance Optimization",
      date: "Every Thursday 11:00 AM EST",
      description: "Learn how to optimize your campaigns for maximum ROI",
      speakers: ["Marcus Rodriguez", "Growth Strategist"],
      registrationLink: "/webinars"
    }
  ];

  const tools = [
    {
      title: "Influencer ROI Calculator",
      description: "Calculate expected ROI for your influencer campaigns",
      icon: <TrendingUp className="h-6 w-6" />,
      link: "/tools/roi-calculator"
    },
    {
      title: "Audience Overlap Tool",
      description: "Find shared audiences between influencers",
      icon: <Users className="h-6 w-6" />,
      link: "/tools/audience-overlap"
    },
    {
      title: "Content Performance Analyzer",
      description: "Analyze engagement rates and content performance",
      icon: <FileText className="h-6 w-6" />,
      link: "/tools/content-analyzer"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Resources & Learning Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master influencer marketing with our comprehensive collection of guides, templates, tools, and case studies. 
            Everything you need to run successful campaigns.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${category.color} text-white p-6`}>
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <p className="mt-2 text-white/90">{category.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.resources.map((resource, idx) => (
                      <Link
                        key={idx}
                        to={resource.link}
                        className="block p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                          </div>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">{resource.duration}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Webinars</h2>
            <p className="text-lg text-gray-600">Join our expert-led webinars to learn best practices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{webinar.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{webinar.date}</p>
                    <p className="text-gray-700 mt-3">{webinar.description}</p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900">Speakers:</p>
                      <p className="text-sm text-gray-600">{webinar.speakers.join(", ")}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to={webinar.registrationLink}
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Tools</h2>
            <p className="text-lg text-gray-600">Powerful tools to help you succeed with influencer marketing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Link
                key={index}
                to={tool.link}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{tool.title}</h3>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest influencer marketing insights, tips, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
