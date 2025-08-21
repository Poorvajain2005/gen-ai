import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { BookOpen, Mail, Video, ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: "Blog",
      description: "Long-form written content on B2C influencer programs including original research, how-tos and more",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50",
      textColor: "text-blue-700",
      link: "/blog",
      stats: "200+ Articles",
      badge: "Updated Daily"
    },
    {
      title: "Newsletter",
      description: "Subscribe for short, regular, thought provoking emails on influencer marketing topics. Written by Eleni Zoe",
      icon: Mail,
      gradient: "from-green-500 to-emerald-600",
      lightBg: "bg-green-50",
      textColor: "text-green-700",
      link: "/newsletter",
      stats: "10K+ Subscribers",
      badge: "Weekly"
    },
    {
      title: "Webinars",
      description: "Live & on-demand webinars with influencer marketing pros. Join the discussion and learn new strategies for your program",
      icon: Video,
      gradient: "from-purple-500 to-violet-600",
      lightBg: "bg-purple-50",
      textColor: "text-purple-700",
      link: "/webinars",
      stats: "50+ Sessions",
      badge: "Live & On-Demand"
    }
  ];

  const additionalResources = [
    {
      title: "Case Studies",
      description: "Real success stories from brands scaling with influencer marketing",
      icon: Award,
      count: "25+",
      link: "/case-studies"
    },
    {
      title: "Community",
      description: "Connect with other marketers and share insights",
      icon: Users,
      count: "5K+",
      link: "/community"
    },
    {
      title: "Trends Report",
      description: "Annual insights and benchmarks from the industry",
      icon: TrendingUp,
      count: "2024",
      link: "/trends"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <div className="mt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-300 mr-3" />
              <h1 className="text-5xl font-bold text-white">
                Learning Resources
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-300 ml-3" />
            </div>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Everything you need to master influencer marketing and grow your business with expert insights and proven strategies
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Resources */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link key={index} to={resource.link}>
                  <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                    <div className={`bg-gradient-to-r ${resource.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <Icon className="w-12 h-12" />
                          <Badge className="bg-white/20 text-white border-white/30">
                            {resource.badge}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                        <div className="text-sm opacity-90">{resource.stats}</div>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${resource.textColor}`}>
                          Explore Now
                        </span>
                        <ArrowRight className={`w-5 h-5 ${resource.textColor} group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            More Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link key={index} to={resource.link}>
                  <Card className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {resource.title}
                          </h3>
                          <div className="text-sm text-gray-500">{resource.count}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {resource.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 border-0">
            <CardContent className="space-y-6">
              <BookOpen className="w-16 h-16 text-blue-400 mx-auto" />
              <h2 className="text-3xl font-bold">
                Start Learning Today
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Join thousands of marketers who are already using our resources to scale their influencer marketing programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/blog"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Browse Articles <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/newsletter"
                  className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Resources;