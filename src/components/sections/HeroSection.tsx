import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-background-subtle to-secondary">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* Announcement badge */}
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Badge variant="secondary" className="animate-fade-in">
              🎉 New in Gen Goodwill.ai: Create affiliate links & automate commission-based influencer payouts
            </Badge>
          </div>
          
          {/* Main heading */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
            End-to-End{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Influencer
            </span>{" "}
            Marketing Platform
          </h1>
          
          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
            Run your entire influencer program in one place. From recruiting creators to tracking ROI, 
            we've got everything you need to scale your Shopify business.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-10 flex items-center gap-x-6 animate-fade-in-up [animation-delay:400ms]">
            <Button variant="hero" size="lg" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 flex items-center gap-x-6 text-sm text-muted-foreground animate-fade-in-up [animation-delay:600ms]">
            <span>14-day free trial</span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>Setup in minutes</span>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative animate-fade-in-up [animation-delay:800ms]">
              <img
                src={heroImage}
                alt="Influencer marketing platform dashboard"
                className="w-[76rem] rounded-2xl bg-background shadow-purple-xl hover-lift"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}