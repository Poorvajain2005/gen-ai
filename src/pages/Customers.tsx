import { Header } from "@/components/layout/Header";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const brandLogos = [
  { name: "Shopify", logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" },
  { name: "Nike", logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" },
  { name: "Adidas", logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png" },
  { name: "Samsung", logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png" },
  { name: "Apple", logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" },
  { name: "Amazon", logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" }
];

const testimonials = [
  {
    quote: "Gen Goodwill.ai has completely transformed how we manage our influencer campaigns. The ROI tracking is incredible and we've seen a 300% increase in campaign performance.",
    highlight: "300% increase in ROI",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "FashionCo",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
    quote: "The fraud detection saved us thousands of dollars. We can now run campaigns with complete confidence knowing we're working with authentic influencers.",
    highlight: "$50K saved in fraud prevention",
    name: "Mike Chen",
    title: "CEO",
    company: "TechStart",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
    quote: "Easy to use, powerful features, and excellent support. Gen Goodwill.ai is a game-changer for our influencer marketing strategy.",
    highlight: "500% growth in partnerships",
    name: "Emma Davis",
    title: "Brand Manager",
    company: "BeautyBrand",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
  }
];

const caseStudies = [
  {
    company: "FashionCo",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop",
    industry: "Fashion & Apparel",
    challenge: "Struggling to track ROI from influencer campaigns across multiple platforms",
    results: ["300% increase in campaign ROI", "50% reduction in setup time", "200% increase in qualified leads"],
    testimonial: "Gen Goodwill.ai transformed our entire approach to influencer marketing."
  },
  {
    company: "TechStart",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
    industry: "Technology",
    challenge: "Dealing with fake influencers and fraudulent engagement rates",
    results: ["$50K saved in fraud prevention", "95% improvement in engagement quality", "150% increase in authentic reach"],
    testimonial: "The fraud detection capabilities are unmatched in the industry."
  },
  {
    company: "BeautyBrand",
    logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=200&fit=crop",
    industry: "Beauty & Cosmetics",
    challenge: "Managing hundreds of micro-influencer relationships manually",
    results: ["500% growth in partnerships", "80% reduction in admin work", "350% increase in UGC"],
    testimonial: "Automation features saved us countless hours every week."
  }
];

export default function Customers() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">HEAR FROM OUR CUSTOMERS</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            1,500+ B2C influencer marketing teams use Gen Goodwill.ai to scale their campaigns and drive measurable results
          </p>
          
          {/* Brand Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {brandLogos.map((brand) => (
              <div key={brand.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 grayscale hover:grayscale-0">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="text-gray-700 font-semibold text-lg hidden">{brand.name}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50M+</div>
              <div className="text-gray-600">Campaigns Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$500M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real stories from real customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="text-green-700 font-semibold text-sm">{testimonial.highlight}</div>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how leading brands achieve remarkable results</p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={study.logo} 
                      alt={study.company}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mr-4">{study.company}</h3>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                      <div className="flex flex-wrap gap-3">
                        {study.results.map((result, i) => (
                          <div key={i} className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 italic border-l-4 border-green-500 pl-4">
                      "{study.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Thousands of Successful Brands</h2>
          <p className="text-xl text-gray-300 mb-10">
            Start your influencer marketing transformation today and see results like our customers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            14-day free trial • No credit card required • Setup in minutes
          </p>
        </div>
      </div>
    </main>
  );
}