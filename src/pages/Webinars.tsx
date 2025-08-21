import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Play, Calendar, Clock, Users, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Webinars = () => {
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  const upcomingWebinars = [
    {
      id: 1,
      title: "The Future of Influencer Marketing: Trends for 2025",
      description: "Join industry experts as they discuss emerging trends, new platforms, and strategies that will shape influencer marketing in 2025.",
      date: "January 25, 2025",
      time: "2:00 PM EST",
      duration: "60 min",
      speakers: ["Sarah Chen", "Marcus Rodriguez"],
      attendees: 1247,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Micro vs Macro: Choosing the Right Influencer Tier",
      description: "Data-driven insights on when to work with micro-influencers vs macro-influencers for maximum ROI.",
      date: "February 8, 2025",
      time: "1:00 PM EST",
      duration: "45 min",
      speakers: ["Alex Thompson", "Priya Patel"],
      attendees: 892,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      status: "upcoming"
    }
  ];

  const pastWebinars = [
    {
      id: 3,
      title: "Building Authentic Creator Relationships",
      description: "Learn how to foster long-term partnerships with creators that benefit both brands and influencers.",
      date: "December 15, 2024",
      duration: "55 min",
      views: 3420,
      speakers: ["Emma Wilson", "David Kim"],
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      status: "recorded"
    },
    {
      id: 4,
      title: "Measuring Influencer Marketing ROI",
      description: "Advanced analytics and attribution models to prove the value of your influencer campaigns.",
      date: "November 28, 2024",
      duration: "50 min",
      views: 2890,
      speakers: ["Lisa Chang", "Robert Martinez"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
      status: "recorded"
    },
    {
      id: 5,
      title: "Platform Deep Dive: TikTok vs Instagram",
      description: "Compare performance metrics and best practices across the two leading social platforms.",
      date: "October 20, 2024",
      duration: "48 min",
      views: 4150,
      speakers: ["Jordan Lee", "Maya Patel"],
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop",
      status: "recorded"
    },
    {
      id: 6,
      title: "Fraud Detection in Influencer Marketing",
      description: "Identify fake followers, engagement pods, and other fraudulent activities to protect your campaigns.",
      date: "September 12, 2024",
      duration: "42 min",
      views: 2650,
      speakers: ["Chris Anderson", "Nina Rodriguez"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      status: "recorded"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mt-20">
        <div className="mx-auto px-16 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Expert Webinars on Influencer Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed">
              Join live sessions with industry experts, get your questions answered, and learn the latest strategies that are driving results for top brands.
            </p>
            
            {/* Registration Form */}
            {!isRegistered ? (
              <div className="mb-8">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
                  <div className="flex gap-3 mb-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 text-base"
                    />
                    <Button type="submit" className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-lg font-semibold">
                      Get Notified
                    </Button>
                  </div>
                </form>
                <div className="flex items-center justify-center gap-10 text-base text-gray-600">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Free to attend
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Live Q&A
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Recording included
                  </span>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto mb-8">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">You're all set!</span>
                </div>
                <p className="text-sm text-gray-500">
                  We'll notify you about upcoming webinars
                </p>
              </div>
            )}
          </div>

          {/* Upcoming Webinars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {upcomingWebinars.map((webinar) => (
                <Card key={webinar.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                  <div className="relative">
                    <img 
                      src={webinar.image} 
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-gray-700" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                      Upcoming
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {webinar.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                      {webinar.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-base text-gray-500">
                        <Calendar className="w-5 h-5" />
                        <span>{webinar.date}</span>
                        <Clock className="w-5 h-5 ml-3" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-base text-gray-500">
                        <Users className="w-5 h-5" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-base text-gray-600 font-medium">
                        Speakers: {webinar.speakers.join(", ")}
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-semibold">
                        Register Free
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Webinars */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Watch Past Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {pastWebinars.map((webinar) => (
                <Card key={webinar.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-gray-100 hover:border-blue-200">
                  <div className="relative">
                    <img 
                      src={webinar.image} 
                      alt={webinar.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-gray-700 ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                      {webinar.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {webinar.title}
                    </h3>
                    <p className="text-base text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {webinar.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{webinar.date}</span>
                      <span>{webinar.views} views</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Join Thousands of Marketing Professionals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-lg text-gray-600">Total Attendees</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-lg text-gray-600">Expert Speakers</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-lg text-gray-600">Webinars Hosted</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-lg text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Attend Our Webinars?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Speakers</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Learn from industry leaders who have scaled successful influencer marketing campaigns for Fortune 500 companies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Sessions</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Participate in live Q&A sessions, polls, and breakout discussions. Get your specific questions answered in real-time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Insights</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Walk away with practical strategies, templates, and frameworks you can implement immediately in your campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-20 bg-gray-50 rounded-3xl p-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Attendees Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    "The webinars have completely transformed how we approach influencer partnerships. The ROI insights alone saved us $50K last quarter."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                      alt="Sarah Chen"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Chen</div>
                      <div className="text-gray-600">Marketing Director, TechCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    "Incredible depth of knowledge shared by the speakers. I've attended 15+ webinars and each one delivers massive value."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                      alt="Marcus Rodriguez"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
                      <div className="text-gray-600">Brand Manager, FashionCo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    "The networking opportunities are amazing. I've connected with other marketers and even found new influencer partners through these sessions."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" 
                      alt="Emma Wilson"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Emma Wilson</div>
                      <div className="text-gray-600">Growth Lead, StartupXYZ</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Topics Covered Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Topics We Cover
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Influencer Discovery", "Campaign Strategy", "Content Creation", "Performance Analytics",
                "Contract Negotiation", "Fraud Detection", "Platform Optimization", "ROI Measurement",
                "Relationship Building", "Crisis Management", "Legal Compliance", "Budget Planning"
              ].map((topic, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors duration-200">
                  <div className="text-lg font-semibold text-blue-800">{topic}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-2xl">
            <CardContent className="p-16 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Want to speak at our next webinar?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                Share your expertise with thousands of marketers. We're always looking for industry experts to present actionable insights.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-4 text-lg font-semibold">
                Apply to Speak
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Webinars;