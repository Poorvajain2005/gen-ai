import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Database, Zap, ShieldCheck } from "lucide-react";

export function ApiSection() {
  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Announcement banner */}
        <div className="mb-8 flex items-center justify-between bg-emerald-100 rounded-lg px-6 py-3 text-sm text-emerald-800">
          <p>
            New in Gen Goodwill.ai: create affiliate links & automate commission-based influencer payouts
          </p>
          <Link to="/api" className="font-semibold hover:underline">
            Learn more &rarr;
          </Link>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 bg-slate-50 rounded-lg py-12 px-8">
          <h1 className="text-4xl font-extrabold mb-4">Powerful API for Developers</h1>
          <p className="text-gray-700 mb-8">
            Build custom integrations and applications with our comprehensive REST API. Access all Gen Goodwill.ai features programmatically.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="hero" asChild>
              <Link to="/api/access">Get API Access</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/api/docs">View Documentation</Link>
            </Button>
          </div>
        </div>

        {/* API Features */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">API Features</h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to build powerful integrations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Code className="mx-auto mb-4 h-8 w-8 text-emerald-600" />
              <h3 className="text-lg font-semibold mb-2">RESTful API</h3>
              <p className="text-gray-600">Clean, intuitive REST API with JSON responses</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Database className="mx-auto mb-4 h-8 w-8 text-emerald-600" />
              <h3 className="text-lg font-semibold mb-2">Real-time Data</h3>
              <p className="text-gray-600">Access live influencer data and campaign metrics</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="mx-auto mb-4 h-8 w-8 text-emerald-600" />
              <h3 className="text-lg font-semibold mb-2">High Performance</h3>
              <p className="text-gray-600">Fast response times with 99.9% uptime SLA</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-emerald-600" />
              <h3 className="text-lg font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security with API key authentication</p>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Start</h2>
          <p className="text-center text-gray-600 mb-8">Get started with our API in minutes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Search Influencers</h3>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X GET \\
  "https://api.modash.io/v1/influencers/search" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"platform": "instagram", "followers_min": 10000}'`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Response</h3>
              <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "data": [
    {
      "id": "12345",
      "username": "@influencer",
      "followers": 50000,
      "engagement_rate": 3.2
    }
  ],
  "total": 1250
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">API Endpoints</h2>
          <p className="text-center text-gray-600 mb-8">Comprehensive API coverage for all features</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <span className="font-mono font-bold text-sm mr-2 text-green-600">GET</span>
                <h3 className="font-semibold">Influencer Search</h3>
              </div>
              <p className="text-gray-600 mb-1">Search and filter influencers by various criteria</p>
              <code className="block bg-gray-100 p-2 rounded text-sm">/v1/influencers/search</code>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <span className="font-mono font-bold text-sm mr-2 text-blue-600">POST</span>
                <h3 className="font-semibold">Create Campaign</h3>
              </div>
              <p className="text-gray-600 mb-1">Create and manage influencer campaigns</p>
              <code className="block bg-gray-100 p-2 rounded text-sm">/v1/campaigns</code>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <span className="font-mono font-bold text-sm mr-2 text-yellow-500">PUT</span>
                <h3 className="font-semibold">Update Influencer</h3>
              </div>
              <p className="text-gray-600 mb-1">Update influencer information and status</p>
              <code className="block bg-gray-100 p-2 rounded text-sm">/v1/influencers/{'{id}'}</code>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <span className="font-mono font-bold text-sm mr-2 text-green-600">GET</span>
                <h3 className="font-semibold">Campaign Analytics</h3>
              </div>
              <p className="text-gray-600 mb-1">Retrieve detailed campaign performance metrics</p>
              <code className="block bg-gray-100 p-2 rounded text-sm">/v1/campaigns/{'{id}'}/analytics</code>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <span className="font-mono font-bold text-sm mr-2 text-green-600">GET</span>
                <h3 className="font-semibold">Fraud Detection</h3>
              </div>
              <p className="text-gray-600 mb-1">Analyze influencer authenticity and audience quality</p>
              <code className="block bg-gray-100 p-2 rounded text-sm">/v1/influencers/{'{id}'}/fraud-check</code>
            </div>
            <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <span className="font-mono font-bold text-sm mr-2 text-blue-600">POST</span>
                <h3 className="font-semibold">Process Payment</h3>
              </div>
              <p className="text-gray-600 mb-1">Automate influencer payments and commissions</p>
              <code className="block bg-gray-100 p-2 rounded text-sm">/v1/payments</code>
            </div>
          </div>
        </div>

        {/* Rate Limits & Pricing */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Rate Limits & Pricing</h2>
          <p className="text-center text-gray-600 mb-8">Flexible pricing based on your usage needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">Free Tier</h3>
              <p className="text-xl font-bold mb-4">$0/month</p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>1,000 API calls/month</li>
                <li>Basic endpoints</li>
                <li>Community support</li>
                <li>Rate limit: 10 req/min</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-emerald-500">
              <h3 className="font-semibold mb-2">Pro API</h3>
              <p className="text-xl font-bold mb-4">$99/month</p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>50,000 API calls/month</li>
                <li>All endpoints</li>
                <li>Priority support</li>
                <li>Rate limit: 100 req/min</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-xl font-bold mb-4">Custom</p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Unlimited API calls</li>
                <li>Custom endpoints</li>
                <li>Dedicated support</li>
                <li>Custom rate limits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SDKs & Libraries */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold mb-6">SDKs & Libraries</h2>
          <div className="flex justify-center gap-6">
            {["JavaScript", "Python", "PHP", "Ruby"].map((lang) => (
              <div key={lang} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <p className="font-semibold">{lang}</p>
                <p className="text-sm text-gray-600">Official {lang} SDK</p>
                <Link to={`/docs/sdk/${lang.toLowerCase()}`} className="text-blue-600 hover:underline text-sm">View Docs</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Build */}
        <div className="max-w-7xl mx-auto text-center bg-gradient-to-r from-slate-700 to-emerald-700 text-white rounded-lg py-12 px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
          <p className="mb-6">Get started with our API today and build powerful integrations</p>
          <div className="flex justify-center gap-4">
            <Button variant="hero" asChild>
              <Link to="/api/access">Get API Access</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/demo">Schedule Demo</Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Gen Goodwill.ai All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
