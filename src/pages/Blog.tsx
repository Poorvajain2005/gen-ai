import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Clock, Calendar, TrendingUp, Users, Target, Wrench, BarChart3, Briefcase, Eye, UserPlus, ArrowRight, Sparkles, Zap, Globe, Network, Heart, Cog, LineChart, Folder, Search, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Strategy Layout - Timeline Style
const StrategyLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-indigo-400"></div>
      <div className="space-y-12">
        {articles.map((article, index) => (
          <div key={index} className="relative flex items-start gap-8">
            <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <Card className="flex-1 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src={article.image} alt={article.title} className="w-full h-48 md:h-full object-cover rounded-l-lg" />
                </div>
                <div className="md:w-2/3 p-8">
                  <Badge className="bg-purple-600 text-white mb-4">Strategy</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{article.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{article.date}</span> • <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Channels Layout - Grid with Platform Icons
const ChannelsLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {articles.map((article, index) => (
        <Card key={index} className="group overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-2xl transition-all duration-500">
          <div className="relative h-64">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-blue-600 text-white mb-2">Channels</Badge>
              <h3 className="text-white font-bold text-lg">{article.title}</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Globe className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Relationships Layout - Connection Style
const RelationshipsLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="space-y-8">
      {articles.map((article, index) => (
        <Card key={index} className="overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-center p-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <Badge className="bg-green-600 text-white mb-3">Relationships</Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <Users className="w-4 h-4" />
                <span>{article.date}</span> • <span>{article.readTime}</span>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-green-600" />
          </div>
        </Card>
      ))}
    </div>
  </div>
);

// Tools Layout - Tech Grid
const ToolsLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Card key={index} className="group bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <Cog className="w-6 h-6 text-white" />
            </div>
            <Badge className="bg-orange-600 text-white mb-3">Tools</Badge>
            <h3 className="font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
            <div className="text-sm text-gray-500 mb-4">{article.date}</div>
            <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Insights Layout - Dashboard Style
const InsightsLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 space-y-6">
        {articles.map((article, index) => (
          <Card key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <Badge className="bg-indigo-600 text-white mb-3">Insights</Badge>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                  <div className="text-sm text-gray-500">{article.date} • {article.readTime}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        <Card className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
          <h4 className="font-bold text-gray-900 mb-2">Latest Metrics</h4>
          <div className="text-2xl font-bold text-indigo-600">+25%</div>
          <div className="text-sm text-gray-600">Engagement Rate</div>
        </Card>
      </div>
    </div>
  </div>
);

// Programs Layout - Folder Structure
const ProgramsLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="space-y-6">
      {articles.map((article, index) => (
        <Card key={index} className="group bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center">
                <Folder className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-pink-600 text-white">Programs</Badge>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">{article.title}</h3>
              </div>
              <ArrowRight className="w-6 h-6 text-pink-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Tracking Layout - Analytics Dashboard
const TrackingLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {articles.map((article, index) => (
        <Card key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Eye className="w-8 h-8" />
              <Badge className="bg-white/20 text-white">Tracking</Badge>
            </div>
            <h3 className="font-bold text-lg">{article.title}</h3>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">{article.date} • {article.readTime}</div>
              <ArrowRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Recruitment Layout - Profile Cards
const RecruitmentLayout = ({ articles, categoryConfig }: { articles: any[], categoryConfig: any }) => (
  <div className="mb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Card key={index} className="group bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <Badge className="bg-red-600 text-white mb-3">Recruitment</Badge>
            <h3 className="font-bold text-gray-900 mb-4 line-clamp-3">{article.title}</h3>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <ArrowRight className="w-5 h-5 text-red-600 mx-auto group-hover:translate-x-1 transition-transform" />
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("Strategy");

  const categories = [
    { name: "Strategy", icon: Target, color: "bg-purple-500", lightColor: "bg-purple-50", textColor: "text-purple-700" },
    { name: "Channels", icon: Globe, color: "bg-blue-500", lightColor: "bg-blue-50", textColor: "text-blue-700" },
    { name: "Relationships", icon: Users, color: "bg-green-500", lightColor: "bg-green-50", textColor: "text-green-700" },
    { name: "Tools", icon: Wrench, color: "bg-orange-500", lightColor: "bg-orange-50", textColor: "text-orange-700" },
    { name: "Insights", icon: BarChart3, color: "bg-indigo-500", lightColor: "bg-indigo-50", textColor: "text-indigo-700" },
    { name: "Programs", icon: Briefcase, color: "bg-pink-500", lightColor: "bg-pink-50", textColor: "text-pink-700" },
    { name: "Tracking", icon: Eye, color: "bg-teal-500", lightColor: "bg-teal-50", textColor: "text-teal-700" },
    { name: "Recruitment", icon: UserPlus, color: "bg-red-500", lightColor: "bg-red-50", textColor: "text-red-700" },
  ];

  const getCategoryConfig = (categoryName) => {
    return categories.find(cat => cat.name === categoryName) || categories[0];
  };

  const articlesByCategory = {
    "Blog": [
      {
        title: "The Ultimate Guide to Influencer Marketing in 2024",
        excerpt: "Everything you need to know about influencer marketing, from strategy to execution and measurement.",
        date: "September 20, 2024",
        readTime: "15 min",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        category: "Blog"
      },
      {
        title: "Top 10 Influencer Marketing Trends This Year",
        excerpt: "Stay ahead of the curve with these emerging trends in influencer marketing.",
        date: "September 18, 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        category: "Blog"
      }
    ],
    "Strategy": [
      {
        title: "New Market, No Problem: 7 Pro Tips to Launch (And Run) an Influencer Marketing Strategy in Unknown Territory",
        date: "July 10, 2025",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        category: "Strategy",
        avatars: [
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
        ],
        avatarCount: "+10"
      },
      {
        title: "6 Influencer Marketing Tasks You Can Automate (And 5 That You Shouldn't)",
        date: "June 10, 2025",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        category: "Strategy",
        avatars: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
        ],
        avatarCount: "+3"
      },
      {
        title: "In-House vs. Agency: Which Is the Right Path for Your Influencer Marketing Program?",
        date: "April 2, 2025",
        readTime: "3 mins",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        category: "Strategy"
      },
      {
        title: "How To Scale Influencer Marketing: 5 Ways To Take Creator Partnerships To The Next Level",
        date: "April 2, 2025",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        category: "Strategy"
      },
      {
        title: "11 Things Influencer Marketers Want You to Understand About the Job",
        date: "March 23, 2025",
        readTime: "5 mins",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        category: "Strategy",
        avatars: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face",
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face"
        ],
        avatarCount: "+9"
      },
      {
        title: "How to Succeed as a One-Person Influencer Marketing Team: 7 Actionable Tips",
        date: "February 18, 2025",
        readTime: "7 mins",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        category: "Strategy",
        avatars: [
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face"
        ],
        avatarCount: "+1"
      },
      {
        title: "ICP Research in Influencer Marketing: Why You Need It and Where to Start",
        date: "November 22, 2024",
        readTime: "6 mins",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
        category: "Strategy"
      },
      {
        title: "12 Skills An Influencer Marketing Manager Needs To Succeed",
        date: "November 19, 2024",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        category: "Strategy"
      }
    ],
    "Channels": [
      {
        title: "Instagram vs TikTok: Which Platform Drives Better ROI?",
        excerpt: "Deep dive into platform performance and how to choose the right channels for your campaigns.",
        date: "September 12, 2024",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        category: "Channels"
      },
      {
        title: "YouTube Shorts vs Instagram Reels: The Ultimate Creator Guide",
        excerpt: "Compare short-form video platforms and maximize your content strategy.",
        date: "August 28, 2024",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        category: "Channels"
      },
      {
        title: "Pinterest for Brands: The Underrated Influencer Marketing Channel",
        excerpt: "Discover how Pinterest drives 3x higher conversion rates than other platforms.",
        date: "August 15, 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        category: "Channels"
      },
      {
        title: "LinkedIn Influencer Marketing: B2B Success Stories",
        excerpt: "How B2B brands are leveraging LinkedIn creators for thought leadership.",
        date: "July 22, 2024",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        category: "Channels"
      }
    ],
    "Relationships": [
      {
        title: "Building Long-term Partnerships with Influencers",
        excerpt: "How to create lasting relationships that benefit both brands and creators.",
        date: "September 8, 2024",
        readTime: "11 min",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
        category: "Relationships"
      },
      {
        title: "The Art of Creator Communication: Do's and Don'ts",
        excerpt: "Master the communication skills that turn one-time collaborations into lasting partnerships.",
        date: "August 25, 2024",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        category: "Relationships"
      },
      {
        title: "Conflict Resolution in Influencer Partnerships",
        excerpt: "Navigate challenges and maintain positive relationships when things go wrong.",
        date: "August 10, 2024",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        category: "Relationships"
      },
      {
        title: "Creating Win-Win Partnerships: Beyond Just Payment",
        excerpt: "Discover non-monetary ways to add value and strengthen creator relationships.",
        date: "July 28, 2024",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        category: "Relationships"
      }
    ],
    "Tools": [
      {
        title: "Essential Influencer Marketing Tools for 2024",
        excerpt: "The complete toolkit for managing successful influencer campaigns at scale.",
        date: "September 5, 2024",
        readTime: "13 min",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        category: "Tools"
      },
      {
        title: "AI-Powered Creator Discovery: Tools That Actually Work",
        excerpt: "Compare the top AI tools for finding authentic influencers and avoiding fake followers.",
        date: "August 20, 2024",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
        category: "Tools"
      },
      {
        title: "Content Management Systems for Influencer Campaigns",
        excerpt: "Streamline your content approval process with these powerful CMS solutions.",
        date: "August 5, 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        category: "Tools"
      },
      {
        title: "Analytics Platforms: Measuring What Matters Most",
        excerpt: "Deep dive into the best analytics tools for tracking influencer campaign performance.",
        date: "July 18, 2024",
        readTime: "15 min",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        category: "Tools"
      }
    ],
    "Insights": [
      {
        title: "Data-Driven Insights from 1000+ Influencer Campaigns",
        excerpt: "Key learnings and benchmarks from analyzing thousands of successful campaigns.",
        date: "September 3, 2024",
        readTime: "14 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        category: "Insights"
      },
      {
        title: "The State of Influencer Marketing 2024: Industry Report",
        excerpt: "Comprehensive analysis of market trends, spending, and ROI across industries.",
        date: "August 30, 2024",
        readTime: "18 min",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        category: "Insights"
      },
      {
        title: "Micro vs Macro Influencers: Performance Data Analysis",
        excerpt: "Which influencer tier delivers better ROI? Our data reveals surprising insights.",
        date: "August 12, 2024",
        readTime: "11 min",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
        category: "Insights"
      },
      {
        title: "Consumer Trust in Influencer Marketing: 2024 Survey Results",
        excerpt: "How consumer attitudes toward influencer content are evolving and what it means for brands.",
        date: "July 25, 2024",
        readTime: "13 min",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        category: "Insights"
      }
    ],
    "Programs": [
      {
        title: "How to Structure Your Influencer Program for Success",
        excerpt: "Best practices for building and scaling influencer programs that deliver results.",
        date: "August 30, 2024",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        category: "Programs"
      },
      {
        title: "Ambassador Programs vs Campaign-Based Marketing",
        excerpt: "Compare long-term ambassador programs with one-off campaigns to find your ideal approach.",
        date: "August 15, 2024",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        category: "Programs"
      },
      {
        title: "Scaling Your Influencer Program: From 10 to 1000 Creators",
        excerpt: "Operational strategies and tools for managing large-scale influencer programs.",
        date: "July 30, 2024",
        readTime: "16 min",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        category: "Programs"
      },
      {
        title: "Program Onboarding: Setting Creators Up for Success",
        excerpt: "Create seamless onboarding experiences that activate and retain top creators.",
        date: "July 12, 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        category: "Programs"
      }
    ],
    "Tracking": [
      {
        title: "Advanced Analytics: Tracking What Really Matters",
        excerpt: "Go beyond vanity metrics to measure true campaign performance and ROI.",
        date: "August 28, 2024",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        category: "Tracking"
      },
      {
        title: "Attribution Models for Influencer Marketing",
        excerpt: "Master first-touch, last-touch, and multi-touch attribution to accurately measure impact.",
        date: "August 18, 2024",
        readTime: "14 min",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        category: "Tracking"
      },
      {
        title: "UTM Parameters and Tracking Links: Best Practices",
        excerpt: "Set up proper tracking infrastructure to measure every touchpoint in your funnel.",
        date: "August 3, 2024",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
        category: "Tracking"
      },
      {
        title: "Real-Time Campaign Monitoring and Optimization",
        excerpt: "Use live data to make mid-campaign adjustments and maximize performance.",
        date: "July 20, 2024",
        readTime: "11 min",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        category: "Tracking"
      }
    ],
    "Recruitment": [
      {
        title: "Finding the Perfect Influencers for Your Brand",
        excerpt: "Proven strategies for discovering and recruiting influencers who align with your brand values.",
        date: "August 25, 2024",
        readTime: "11 min",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        category: "Recruitment"
      },
      {
        title: "Vetting Influencers: Red Flags and Green Lights",
        excerpt: "Learn to identify authentic creators and avoid fake followers, engagement pods, and fraud.",
        date: "August 8, 2024",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
        category: "Recruitment"
      },
      {
        title: "Outreach That Converts: Templates and Strategies",
        excerpt: "Craft compelling outreach messages that get responses and build relationships.",
        date: "July 26, 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        category: "Recruitment"
      },
      {
        title: "Diversity and Inclusion in Influencer Recruitment",
        excerpt: "Build inclusive creator programs that represent your diverse customer base.",
        date: "July 10, 2024",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        category: "Recruitment"
      }
    ]
  };

  const displayArticles = articlesByCategory[selectedCategory] || articlesByCategory["Strategy"];
  const currentCategoryConfig = getCategoryConfig(selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <div className="mt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-300 mr-3" />
              <h1 className="text-5xl font-bold text-white">
                Influencer Marketing Hub
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-300 ml-3" />
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover expert insights, proven strategies, and cutting-edge tools to elevate your influencer marketing game
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Navigation Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.name;
              return (
                <Card 
                  key={category.name}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isSelected 
                      ? `${category.lightColor} border-2 border-current ${category.textColor} shadow-lg` 
                      : "bg-white hover:bg-gray-50 border border-gray-200"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-full ${isSelected ? category.color : 'bg-gray-100'} flex items-center justify-center mx-auto mb-3 transition-all duration-300`}>
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-gray-600'} transition-colors duration-300`} />
                    </div>
                    <h3 className={`font-semibold ${isSelected ? category.textColor : 'text-gray-900'} transition-colors duration-300`}>
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Dynamic Layout Based on Category */}
        {selectedCategory === "Strategy" && (
          <StrategyLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}
        {selectedCategory === "Channels" && (
          <ChannelsLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}
        {selectedCategory === "Relationships" && (
          <RelationshipsLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}
        {selectedCategory === "Tools" && (
          <ToolsLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}
        {selectedCategory === "Insights" && (
          <InsightsLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}
        {selectedCategory === "Programs" && (
          <ProgramsLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}
        {selectedCategory === "Tracking" && (
          <TrackingLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}
        {selectedCategory === "Recruitment" && (
          <RecruitmentLayout articles={displayArticles} categoryConfig={currentCategoryConfig} />
        )}

        {/* Category-specific content sections */}
        {selectedCategory === "Strategy" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Strategy Frameworks</h2>
              <p className="text-purple-100 text-lg">Proven methodologies for campaign success</p>
            </div>
          </div>
        )}

        {selectedCategory === "Channels" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Platform Performance Hub</h2>
              <p className="text-blue-100 text-lg">Real-time analytics across all social channels</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-6 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">Instagram</h3>
                <div className="text-3xl font-bold mb-1">2.8M</div>
                <div className="text-pink-100 text-sm">Avg. Reach</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">TikTok</h3>
                <div className="text-3xl font-bold mb-1">4.2M</div>
                <div className="text-gray-300 text-sm">Avg. Views</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">YouTube</h3>
                <div className="text-3xl font-bold mb-1">890K</div>
                <div className="text-blue-200 text-sm">Subscribers</div>
              </div>
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-6 rounded-xl text-white">
                <h3 className="font-bold text-lg mb-2">Pinterest</h3>
                <div className="text-3xl font-bold mb-1">1.5M</div>
                <div className="text-red-200 text-sm">Monthly Views</div>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === "Relationships" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Creator Connection Center</h2>
              <p className="text-green-100 text-lg">Building authentic partnerships that last</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Partnership Success Rate</h3>
                      <p className="text-green-600">Long-term collaborations</p>
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-green-600 mb-2">87%</div>
                  <p className="text-gray-600">of creators continue partnerships beyond initial campaign</p>
                </Card>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-white border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">2.3x</div>
                  <div className="text-sm text-gray-600">Higher engagement with long-term partners</div>
                </Card>
                <Card className="p-6 bg-white border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">45%</div>
                  <div className="text-sm text-gray-600">Reduction in acquisition costs</div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === "Tools" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Marketing Tech Arsenal</h2>
              <p className="text-orange-100 text-lg">Cutting-edge tools that drive results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Analytics Tools</h3>
                <div className="text-2xl font-bold text-orange-600 mb-1">15+</div>
                <p className="text-gray-600 text-sm">Integrated platforms</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Discovery</h3>
                <div className="text-2xl font-bold text-red-600 mb-1">10M+</div>
                <p className="text-gray-600 text-sm">Creator profiles</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Automation</h3>
                <div className="text-2xl font-bold text-pink-600 mb-1">80%</div>
                <p className="text-gray-600 text-sm">Time saved</p>
              </Card>
            </div>
          </div>
        )}

        {selectedCategory === "Insights" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Intelligence Dashboard</h2>
              <p className="text-indigo-100 text-lg">Data-driven insights for smarter campaigns</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div className="lg:col-span-3">
                <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Campaign Performance</h3>
                    <LineChart className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 mb-1">340%</div>
                      <div className="text-gray-600 text-sm">Average ROI</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-1">2.8M</div>
                      <div className="text-gray-600 text-sm">Total Reach</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 mb-1">4.7%</div>
                      <div className="text-gray-600 text-sm">Engagement Rate</div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="space-y-4">
                <Card className="p-6 bg-indigo-100">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">↑ 25%</div>
                  <div className="text-sm text-gray-600">This month</div>
                </Card>
                <Card className="p-6 bg-purple-100">
                  <div className="text-2xl font-bold text-purple-600 mb-1">1.2K</div>
                  <div className="text-sm text-gray-600">Active campaigns</div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === "Programs" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Program Architecture</h2>
              <p className="text-pink-100 text-lg">Scalable frameworks for enterprise success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
                <div className="flex items-center mb-6">
                  <Folder className="w-12 h-12 text-pink-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Active Programs</h3>
                    <p className="text-pink-600">Currently running</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Enterprise</span>
                    <span className="font-bold text-pink-600">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Mid-Market</span>
                    <span className="font-bold text-pink-600">892</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">SMB</span>
                    <span className="font-bold text-pink-600">1,543</span>
                  </div>
                </div>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-12 h-12 text-rose-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Success Metrics</h3>
                    <p className="text-rose-600">Program performance</p>
                  </div>
                </div>
                <div className="text-4xl font-bold text-rose-600 mb-2">94%</div>
                <p className="text-gray-600">Program completion rate</p>
              </Card>
            </div>
          </div>
        )}

        {selectedCategory === "Tracking" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Measurement Mastery</h2>
              <p className="text-teal-100 text-lg">ROI tracking and attribution models</p>
            </div>
          </div>
        )}

        {selectedCategory === "Recruitment" && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-4">Talent Discovery</h2>
              <p className="text-red-100 text-lg">Finding and vetting the right creators</p>
            </div>
          </div>
        )}
        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 border-0">
            <CardContent className="space-y-6">
              <TrendingUp className="w-16 h-16 text-blue-400 mx-auto" />
              <h2 className="text-3xl font-bold">
                Ready to Scale Your Influencer Marketing?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Join thousands of brands using our platform to discover, manage, and measure their influencer campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Schedule Demo
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

export default Blog;
