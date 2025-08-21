import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden bg-gray-800 text-white mx-2 sm:mx-4 md:mx-6 lg:mx-8 mt-8 mb-8 sm:mb-12 md:mb-16 rounded-3xl min-h-screen py-24 sm:py-32 lg:py-40 pb-32 sm:pb-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          {/* Main heading */}
          <h1 className="mt-12 text-8xl font-extrabold uppercase tracking-tight sm:text-8xl">
            POWER YOUR SHOPIFY STORE WITH FULL-SERVICE INFLUENCER MARKETING
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-lg font-medium text-gray-300">
            Streamline your influencer program - find creators, ship products,
            track performance, and manage campaign all in one platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-x-4">
            <Button
              variant="outline"
              size="lg"
              className="bg-green-500 text-white"
              asChild
            >
              <Link to="/signup">Gen Goodwill.ai</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-green-300 text-white"
              asChild
            >
              <Link to="/demo">Get a Demo</Link>
            </Button>
          </div>
        </div>

        <p className="mt-5 text-sm text-center text-gray-400">
          14-day free trial &middot; No credit card required
        </p>

        {/* Marketing Image */}
        <div className="mt-20 px-2 sm:px-4 lg:px-8">
          <img
            src="/assets/landing-page.png"
            alt="Gen Goodwill.ai Platform"
            className="w-full max-w-none mx-auto rounded-3xl shadow-2xl border border-gray-600"
          />
        </div>
      </div>

      {/* Moving Content Section */}
      <div className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            Trusted by 1,500+ brands worldwide
          </p>

          <div className="overflow-hidden flex justify-center">
            <div
              className="flex space-x-12 items-center justify-center"
              style={{
                animation: "scroll 20s linear infinite",
                width: "max-content",
                transform: "translateX(25%)",
              }}
            >
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
                alt="Shopify"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
                alt="Amazon"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
                alt="Nike"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
                alt="Adidas"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png"
                alt="Samsung"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png"
                alt="Apple"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
                alt="Shopify"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
                alt="Amazon"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
                alt="Nike"
                className="h-16 w-auto grayscale opacity-60"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
                alt="Adidas"
                className="h-16 w-auto grayscale opacity-60"
              />
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Explore Services Section */}
      <div className="py-48 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore Our Services
            </h2>

            <div className="inline-flex flex-wrap justify-center gap-2 p-4 bg-gray-800 rounded-xl border border-gray-600">
              <Link
                to="/"
                className="px-6 py-3 text-white bg-gray-700 rounded-lg font-medium hover:bg-green-600 transition-colors border border-gray-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                Gen Goodwill.ai
              </Link>
              <Link
                to="/customers"
                className="px-6 py-3 text-white bg-gray-700 rounded-lg font-medium hover:bg-green-600 transition-colors border border-gray-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                Customers
              </Link>
              <Link
                to="/api"
                className="px-6 py-3 text-white bg-gray-700 rounded-lg font-medium hover:bg-green-600 transition-colors border border-gray-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                API
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 text-white bg-gray-700 rounded-lg font-medium hover:bg-green-600 transition-colors border border-gray-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                Log in
              </Link>
              <Link
                to="/demo"
                className="px-6 py-3 text-white bg-gray-700 rounded-lg font-medium hover:bg-green-600 transition-colors border border-gray-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get a demo
              </Link>
              <Link
                to="/signup"
                className="px-6 py-3 text-white bg-gray-700 rounded-lg font-medium hover:bg-green-600 transition-colors border border-gray-600"
                onClick={() => window.scrollTo(0, 0)}
              >
                Try for Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Success Stories Section */}
      <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600 mb-2">Loved by 1,500+ brands</p>
            <p className="text-lg text-gray-500">
              See how leading companies are transforming their influencer
              marketing with our platform.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">
                Customer Satisfaction
              </div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">3.2x</div>
              <div className="text-gray-700 font-medium">
                Average ROI Increase
              </div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-700 font-medium">
                Faster Campaign Setup
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-green-100 mb-6">
              Start your influencer marketing transformation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-400"
                asChild
              >
                <Link to="/demo">Get a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}