import { Header } from "@/components/layout/Header";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Active Brands", value: "10,000+" },
  { label: "Campaigns Managed", value: "50M+" },
  { label: "Revenue Generated", value: "$500M+" },
  { label: "Customer Rating", value: "4.8/5" },
];

const testimonials = [
  {
    quote:
      "Modash has completely transformed how we manage our influencer campaigns. The ROI tracking is incredible and we've seen a 300% increase in campaign performance.",
    highlight: "300% increase in ROI",
    name: "Sarah Johnson",
    title: "Marketing Director, FashionCo",
  },
  {
    quote:
      "The fraud detection saved us thousands of dollars. We can now run campaigns with complete confidence knowing we're working with authentic influencers.",
    highlight: "$50K saved in fraud prevention",
    name: "Mike Chen",
    title: "CEO, TechStart",
  },
  {
    quote:
      "Easy to use, powerful features, and excellent support. Modash is a game-changer for our influencer marketing strategy.",
    highlight: "500% growth in influencer partnerships",
    name: "Emma Davis",
    title: "Brand Manager, BeautyBrand",
  },
  {
    quote: "20 hours saved per week",
    highlight: "20 hours saved per week",
    name: "David Rodriguez",
    title: "Marketing Manager, FitnessGear",
  },
  {
    quote: "250% increase in conversions",
    highlight: "250% increase in conversions",
    name: "Lisa Wang",
    title: "Growth Lead, HomeDecor",
  },
  {
    quote: "400% growth in brand awareness",
    highlight: "400% growth in brand awareness",
    name: "James Thompson",
    title: "CMO, PetSupplies",
  },
];

const successStories = [
  {
    company: "FashionCo",
    industry: "Fashion & Apparel",
    challenge: "Struggling to track ROI from influencer campaigns",
    solution: "Implemented Modash's advanced analytics and Shopify integration",
    results: [
      "300% increase in campaign ROI",
      "50% reduction in campaign setup time",
      "200% increase in qualified leads",
    ],
  },
  {
    company: "TechStart",
    industry: "Technology",
    challenge: "Dealing with fake influencers and fraudulent engagement",
    solution: "Used Modash's fraud detection and audience quality analysis",
    results: [
      "$50K saved in fraud prevention",
      "95% improvement in engagement quality",
      "150% increase in authentic reach",
    ],
  },
  {
    company: "BeautyBrand",
    industry: "Beauty & Cosmetics",
    challenge: "Managing hundreds of micro-influencer relationships",
    solution: "Automated campaign management and payment processing",
    results: [
      "500% growth in influencer partnerships",
      "80% reduction in administrative work",
      "350% increase in user-generated content",
    ],
  },
];

export default function Customers() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Trusted by Leading Brands</h1>
          <p className="text-gray-600 mb-8">
            See how top brands are using Gen Goodwill.ai to scale their influencer marketing and drive real results.
          </p>
          <div className="flex justify-center space-x-12 text-emerald-600 font-semibold text-xl mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl font-extrabold">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2 text-center">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-10">Real stories from real customers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, highlight, name, title }, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <Star className="text-yellow-400 w-5 h-5" />
                </div>
                <p className="mb-4">{quote}</p>
                <div className="bg-emerald-100 text-emerald-600 rounded-md px-3 py-1 mb-4 text-sm font-semibold">{highlight}</div>
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-xs text-gray-500">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>
        <div className="space-y-8">
          {successStories.map(({ company, industry, challenge, solution, results }, idx) => (
            <div key={idx} className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-1">{company}</h3>
              <div className="text-sm text-gray-600 mb-4">{industry}</div>
              <div className="mb-2">
                <strong>Challenge:</strong> {challenge}
              </div>
              <div className="mb-4">
                <strong>Solution:</strong> {solution}
              </div>
              <div className="flex space-x-4">
                {results.map((result, i) => (
                  <div key={i} className="bg-emerald-100 text-emerald-600 rounded-md px-4 py-2 text-sm font-semibold">
                    {result}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-700 to-emerald-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Thousands of Successful Brands</h2>
        <p className="mb-8">Start your influencer marketing journey with Gen Goodwill.ai today</p>
        <div className="space-x-4">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
            Schedule Demo
          </Button>
        </div>
      </div>
    </main>
  );
}
