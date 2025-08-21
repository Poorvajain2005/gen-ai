import { Header } from "@/components/layout/Header";
import { Star, Quote, ArrowRight, Users, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const brandLogos = [
  { name: "Shopify", logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" },
  { name: "Nike", logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" },
  { name: "Adidas", logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png" },
  { name: "Samsung", logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png" },
  { name: "Apple", logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" },
  { name: "Amazon", logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" },
  { name: "Microsoft", logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
  { name: "Google", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" }
];

const testimonials = [
  {
    quote: "We were skeptical about influencer marketing ROI until we started using Gen Goodwill.ai. The platform's analytics showed us exactly which partnerships were driving real sales. In our first quarter, we saw a 340% return on our influencer spend.",
    highlight: "340% ROI in Q1",
    name: "Sarah Chen",
    title: "Head of Digital Marketing",
    company: "Bloom & Wild",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    industry: "E-commerce",
    campaignType: "Product Launch",
    duration: "3 months"
  },
  {
    quote: "Before Gen Goodwill.ai, we were working with fake influencers without knowing it. The fraud detection feature saved us from a $75K campaign with completely fake followers. Now we only work with authentic creators who actually engage their audiences.",
    highlight: "$75K fraud prevented",
    name: "Marcus Rodriguez",
    title: "Brand Partnerships Manager",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    industry: "SaaS",
    campaignType: "Brand Awareness",
    duration: "6 months"
  },
  {
    quote: "Managing 200+ micro-influencers was a nightmare until we found this platform. The automated outreach and payment system freed up 15 hours per week for our team. We've scaled from 50 to 500 active partnerships without hiring additional staff.",
    highlight: "10x partnership growth",
    name: "Emma Thompson",
    title: "Influencer Program Lead",
    company: "Glow Beauty Co.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    industry: "Beauty",
    campaignType: "Ongoing Program",
    duration: "12 months"
  },
  {
    quote: "The platform's AI-powered fraud detection caught 3 fake influencers in our first campaign alone. Each had over 100K followers but zero real engagement. This saved us from wasting £25K on fake partnerships and helped us find authentic creators instead.",
    highlight: "£25K fraud prevented",
    name: "James Wilson",
    title: "Performance Marketing Lead",
    company: "FitTech Wearables",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    industry: "Technology",
    campaignType: "Product Launch",
    duration: "4 months"
  },
  {
    quote: "We went from manually tracking 20 influencers in spreadsheets to managing 300+ partnerships seamlessly. The automated reporting shows our CEO exactly which creators drive sales. Our influencer program now contributes 35% of total revenue.",
    highlight: "35% revenue contribution",
    name: "Priya Patel",
    title: "Digital Marketing Manager",
    company: "Sustainable Style Co.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    industry: "Fashion",
    campaignType: "Ongoing Program",
    duration: "18 months"
  },
  {
    quote: "As a small startup, we couldn't afford big advertising budgets. Gen Goodwill.ai helped us find micro-influencers who genuinely loved our product. We achieved 500K in sales in our first year, with 60% coming from influencer partnerships.",
    highlight: "£500K first-year sales",
    name: "Alex Chen",
    title: "Co-founder & CMO",
    company: "EcoHome Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    industry: "Home & Garden",
    campaignType: "Brand Building",
    duration: "12 months"
  }
];

const detailedCaseStudies = [
  {
    company: "Bloom & Wild",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    industry: "E-commerce • Flowers & Gifts",
    teamSize: "15-person marketing team",
    challenge: "Seasonal flower delivery service struggling with customer acquisition costs during off-peak months. Traditional advertising was expensive and didn't resonate with younger demographics.",
    approach: "Partnered with lifestyle and home decor micro-influencers (10K-100K followers) to showcase flower arrangements in real homes. Created seasonal campaigns around holidays and special occasions.",
    timeline: "6-month campaign across Valentine's Day, Mother's Day, and summer seasons",
    results: [
      { metric: "Customer Acquisition Cost", change: "↓ 45%", detail: "From £28 to £15.40 per customer" },
      { metric: "Revenue Attribution", change: "£340K", detail: "Direct sales from influencer campaigns" },
      { metric: "Brand Awareness", change: "↑ 180%", detail: "Among 25-40 demographic" }
    ],
    testimonial: "The authenticity of seeing flowers in real customers' homes was game-changing for us.",
    metrics: {
      influencers: 85,
      posts: 340,
      reach: "2.8M",
      engagement: "4.2%"
    }
  },
  {
    company: "TechFlow Solutions",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    industry: "SaaS • Project Management",
    teamSize: "8-person growth team",
    challenge: "B2B SaaS company needed to build trust and credibility in a crowded project management space. Traditional B2B marketing wasn't generating quality leads.",
    approach: "Collaborated with productivity experts, business coaches, and tech reviewers to create educational content showcasing real use cases and workflows.",
    timeline: "12-month ongoing partnership program",
    results: [
      { metric: "Trial Sign-ups", change: "↑ 285%", detail: "From 450 to 1,733 monthly trials" },
      { metric: "Trial-to-Paid Conversion", change: "↑ 32%", detail: "Higher quality leads from influencer traffic" },
      { metric: "Customer Lifetime Value", change: "↑ 67%", detail: "Better user onboarding through content" }
    ],
    testimonial: "Working with industry experts gave us credibility we couldn't buy with ads.",
    metrics: {
      influencers: 42,
      posts: 156,
      reach: "890K",
      engagement: "6.8%"
    }
  },
  {
    company: "FitTech Wearables",
    logo: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&h=300&fit=crop",
    industry: "Technology • Fitness Wearables",
    teamSize: "12-person marketing team",
    challenge: "Hardware startup launching first fitness tracker needed to build brand awareness and drive pre-orders in competitive market dominated by Apple and Fitbit.",
    approach: "Partnered with fitness enthusiasts, personal trainers, and health coaches to showcase real-world usage. Created 30-day challenge campaigns with before/after content.",
    timeline: "8-month product launch campaign",
    results: [
      { metric: "Pre-order Sales", change: "£1.2M", detail: "Exceeded funding goal by 240%" },
      { metric: "Brand Awareness", change: "↑ 450%", detail: "In target fitness demographic" },
      { metric: "Social Mentions", change: "↑ 890%", detail: "Organic brand conversations" }
    ],
    testimonial: "Influencer partnerships made our product launch feel authentic, not like another tech ad.",
    metrics: {
      influencers: 67,
      posts: 245,
      reach: "1.4M",
      engagement: "5.8%"
    }
  },
  {
    company: "EcoHome Solutions",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    industry: "Home & Garden • Sustainability",
    teamSize: "5-person startup team",
    challenge: "Eco-friendly home products startup with limited budget needed to compete against established brands and educate consumers about sustainable alternatives.",
    approach: "Collaborated with eco-conscious lifestyle influencers and home improvement creators to demonstrate product benefits through authentic home makeovers and sustainability tips.",
    timeline: "12-month brand building campaign",
    results: [
      { metric: "Revenue Growth", change: "£500K", detail: "First year total sales" },
      { metric: "Customer Acquisition Cost", change: "↓ 65%", detail: "Compared to paid advertising" },
      { metric: "Repeat Purchase Rate", change: "↑ 78%", detail: "Higher customer loyalty" }
    ],
    testimonial: "Working with creators who genuinely care about sustainability made all the difference.",
    metrics: {
      influencers: 34,
      posts: 128,
      reach: "680K",
      engagement: "7.2%"
    }
  }
];

const realStats = [
  { 
    number: "2,847", 
    label: "Active Brands", 
    subtext: "From startups to Fortune 500",
    icon: <Users className="w-6 h-6" />
  },
  { 
    number: "£47M", 
    label: "Revenue Generated", 
    subtext: "Tracked and attributed",
    icon: <TrendingUp className="w-6 h-6" />
  },
  { 
    number: "18 min", 
    label: "Avg. Setup Time", 
    subtext: "From signup to first campaign",
    icon: <Clock className="w-6 h-6" />
  },
  { 
    number: "4.7/5", 
    label: "Customer Rating", 
    subtext: "Based on 340+ reviews",
    icon: <Star className="w-6 h-6" />
  }
];

export default function Customers() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <span className="text-green-700 text-sm font-medium">Customer Stories</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Real Results from Real Customers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See how 2,800+ brands use Gen Goodwill.ai to build authentic relationships with creators and drive measurable business growth
            </p>
          </div>
          
          {/* Trusted by brands */}
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {brandLogos.map((brand) => (
                <div key={brand.name} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-8 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-gray-600 font-medium hidden">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {realStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-3 text-green-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-900 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Actually Say
            </h2>
            <p className="text-xl text-gray-600">Unfiltered feedback from real marketing teams</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-green-200" />
                
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">Verified Review</span>
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
                  <div className="text-green-800 font-semibold">{testimonial.highlight}</div>
                </div>
                
                <div className="flex items-start">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{testimonial.title}</div>
                    <div className="text-sm font-medium text-gray-900">{testimonial.company}</div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>{testimonial.industry}</span>
                      <span>•</span>
                      <span>{testimonial.campaignType}</span>
                      <span>•</span>
                      <span>{testimonial.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Case Studies */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Deep Dive: Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600">Complete breakdowns of real campaigns with actual numbers</p>
          </div>
          
          <div className="space-y-16">
            {detailedCaseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="lg:flex">
                  <div className="lg:w-2/5">
                    <img 
                      src={study.logo} 
                      alt={study.company}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{study.company}</h3>
                        <div className="text-gray-600 mb-1">{study.industry}</div>
                        <div className="text-sm text-gray-500">{study.teamSize}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">Campaign Duration</div>
                        <div className="font-medium text-gray-900">{study.timeline}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">The Challenge</h4>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Our Approach</h4>
                      <p className="text-gray-600 leading-relaxed">{study.approach}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600 mb-1">{result.change}</div>
                            <div className="font-medium text-gray-900 text-sm mb-1">{result.metric}</div>
                            <div className="text-xs text-gray-500">{result.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Campaign Metrics</h4>
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div><span className="text-gray-500">Influencers:</span> <span className="font-medium">{study.metrics.influencers}</span></div>
                        <div><span className="text-gray-500">Content Pieces:</span> <span className="font-medium">{study.metrics.posts}</span></div>
                        <div><span className="text-gray-500">Total Reach:</span> <span className="font-medium">{study.metrics.reach}</span></div>
                        <div><span className="text-gray-500">Avg. Engagement:</span> <span className="font-medium">{study.metrics.engagement}</span></div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 italic border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                      "{study.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Breakdown */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-600">See how different sectors leverage influencer marketing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">847</div>
              <div className="text-sm text-gray-600 mb-3">Active brands</div>
              <div className="text-xs text-gray-500">Avg. 280% ROI increase</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">💄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Beauty & Fashion</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">623</div>
              <div className="text-sm text-gray-600 mb-3">Active brands</div>
              <div className="text-xs text-gray-500">Avg. 340% ROI increase</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-semibold text-gray-900 mb-2">Technology</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">412</div>
              <div className="text-sm text-gray-600 mb-3">Active brands</div>
              <div className="text-xs text-gray-500">Avg. 195% ROI increase</div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Home & Lifestyle</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">298</div>
              <div className="text-sm text-gray-600 mb-3">Active brands</div>
              <div className="text-xs text-gray-500">Avg. 225% ROI increase</div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Quotes Carousel */}
      <div className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Marketing Leaders Say
            </h2>
            <p className="text-xl text-gray-600">Quick insights from our customer community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">MK</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Maria K.</div>
                  <div className="text-sm text-gray-500">CMO, Fashion Brand</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">"Cut our influencer vetting time from 3 hours to 15 minutes per creator. The fraud detection is incredible."</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">DL</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">David L.</div>
                  <div className="text-sm text-gray-500">Growth Lead, SaaS</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">"Finally, a platform that shows real ROI. Our board loves the detailed attribution reports."</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">ST</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sarah T.</div>
                  <div className="text-sm text-gray-500">Marketing Dir., E-comm</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">"Scaled from 10 to 200 influencer partnerships without hiring more staff. The automation is game-changing."</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join 2,800+ brands who've transformed their marketing with authentic influencer partnerships
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              Book a Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>4.7/5 from 340+ reviews</span>
            </div>
            <div>14-day free trial</div>
            <div>No credit card required</div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}