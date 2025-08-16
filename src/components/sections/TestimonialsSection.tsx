import { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { EnhancedHoverCard, EnhancedHoverCardContent, EnhancedHoverCardTrigger } from "@/components/ui/enhanced-hover-card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "Fashion Nova",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Gen Goodwill.ai transformed our influencer marketing. We saw a 3x ROI increase in just 6 months! The AI-powered matching is incredible.",
    rating: 5,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "Marcus Rodriguez",
    role: "Growth Manager",
    company: "TechFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The platform is incredibly intuitive. We found perfect influencers in minutes, not days. The analytics are game-changing.",
    rating: 5,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "Emily Watson",
    role: "Brand Manager",
    company: "EcoLife",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The payment system is seamless. No more chasing invoices or dealing with international transfers. It just works.",
    rating: 5,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "As a startup, we needed to scale quickly. Gen Goodwill.ai helped us build relationships with influencers that actually convert.",
    rating: 5,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "Lisa Thompson",
    role: "Social Media Manager",
    company: "BeautyBrand",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "The content automation features save us hours every week. Our team can focus on strategy instead of manual tasks.",
    rating: 5,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    name: "Alex Johnson",
    role: "Digital Marketing Lead",
    company: "FitnessFirst",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The ROI tracking is incredible. We can see exactly which influencers drive the most sales and optimize accordingly.",
    rating: 5,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "3.2x", label: "Average ROI Increase" },
  { value: "85%", label: "Time Saved" },
  { value: "4.9/5", label: "Platform Rating" }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-teal-500/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Customer Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> 1,500+ brands</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how leading companies are transforming their influencer marketing with our platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white/15 backdrop-blur-md rounded-3xl border border-white/30 p-10 md:p-16 mb-12 shadow-2xl">
            <div className="flex items-start space-x-8">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-lg"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-white leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-300 text-lg">{testimonials[currentIndex].role} • {testimonials[currentIndex].company}</div>
                  </div>
                  
                  <EnhancedHoverCard>
                    <EnhancedHoverCardTrigger asChild>
                      <button className="flex items-center space-x-3 bg-white/25 hover:bg-white/35 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <Play className="h-5 w-5" />
                        <span className="text-sm font-medium">Watch Video</span>
                      </button>
                    </EnhancedHoverCardTrigger>
                    <EnhancedHoverCardContent className="w-80">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Customer Video Testimonial</h4>
                        <p className="text-sm text-gray-600">
                          Watch {testimonials[currentIndex].name} share their experience with Gen Goodwill.ai
                        </p>
                        <div className="pt-2">
                          <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                            Play Video
                          </button>
                        </div>
                      </div>
                    </EnhancedHoverCardContent>
                  </EnhancedHoverCard>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-white" 
                      : "bg-white/30 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/15 hover:bg-white/15 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2",
                index === currentIndex && "ring-2 ring-emerald-400 bg-white/20"
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-4 font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30 shadow-sm"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 