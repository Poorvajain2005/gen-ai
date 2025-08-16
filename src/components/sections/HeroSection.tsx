import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden bg-gray-800 text-white mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-8 sm:my-12 md:my-16 rounded-3xl min-h-[45vh] py-12 sm:py-16">
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-green-900/40 border border-green-700 px-3 py-1 text-sm font-semibold text-green-300 mb-6 shadow-md">
            <Star className="mr-1 h-4 w-4 text-green-400" />
            4.9&nbsp;Shopify
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-extrabold uppercase tracking-tight sm:text-6xl">
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
              className="bg-green-500 text-white"
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
        <div className="mt-8 px-6">
          <img
            src="/assets/landing-page.png"
            alt="Gen Goodwill.ai Platform"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
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
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Shopify
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Amazon
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Nike
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Adidas
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Samsung
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Apple
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Shopify
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Amazon
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Nike
              </div>
              <div className="text-gray-400 font-semibold text-lg whitespace-nowrap">
                Adidas
              </div>
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
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Explore Our Services
            </h2>

            <div className="inline-flex flex-wrap justify-center gap-1 p-3 bg-black rounded-xl">
              <Link
                to="/"
                className="px-6 py-3 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Gen Goodwill.ai
              </Link>
              <Link
                to="/customers"
                className="px-6 py-3 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Customers
              </Link>
              <Link
                to="/api"
                className="px-6 py-3 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                API
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Log in
              </Link>
              <Link
                to="/demo"
                className="px-6 py-3 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Get a demo
              </Link>
              <Link
                to="/signup"
                className="px-6 py-3 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Try for Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Half */}
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Platform Screenshot</p>
                </div>
              </div>
            </div>

            {/* Video Content Half */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  See Gen Goodwill.ai in Action
                </h3>
                <p className="text-gray-600 mb-6">
                  Watch how our platform streamlines your entire influencer
                  marketing workflow from discovery to campaign management.
                </p>
              </div>

              <div className="relative bg-green-900 rounded-lg p-6 cursor-pointer group hover:bg-green-800 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="bg-white rounded-full p-3 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-black ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold">Watch Demo Video</p>
                    <p className="text-sm text-gray-300">3 min overview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 