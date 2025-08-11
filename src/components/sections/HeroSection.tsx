import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-black text-white py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold text-white mb-4">
          <Star className="mr-1 h-4 w-4 text-pink-500" />
          4.9&nbsp;Shopify
        </div>

        {/* Main heading */}
        <h1 className="text-5xl font-extrabold uppercase tracking-tight sm:text-6xl">
          END-TO-END INFLUENCER MARKETING FOR SHOPIFY
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl mx-auto text-lg font-medium">
          Run your entire influencer program in one place. From recruiting
          influencers, to sending products, tracking campaigns &amp; more.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-x-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/signup">Try for Free</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/demo">Get a Demo</Link>
          </Button>
        </div>

        {/* Footer text */}
        <p className="mt-4 text-sm text-gray-400">
          14-day free trial &middot; No credit card required
        </p>
      </div>
    </div>
  );
}
