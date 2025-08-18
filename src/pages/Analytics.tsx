import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Analytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const analyticsFeatures = [
    {
      title: "Real-Time Performance Dashboards",
      description: "Monitor campaign performance in real-time with customizable dashboards that update every minute.",
      icon: "📊",
      details: [
        "Live campaign metrics and KPI tracking",
        "Customizable dashboard layouts for different teams",
        "Real-time alerts for performance anomalies",
        "Mobile-responsive dashboard views"
      ]
    },
    {
      title: "ROI Attribution & Tracking",
      description: "Track exact ROI from influencer campaigns with multi-touch attribution across all touchpoints.",
      icon: "💰",
      details: [
        "Multi-touch attribution modeling",
        "Revenue tracking from influencer campaigns",
        "Customer lifetime value calculations",
        "Cross-platform attribution tracking"
      ]
    },
    {
      title: "Advanced Audience Analytics",
      description: "Deep dive into audience demographics, psychographics, and engagement patterns across all campaigns.",
      icon: "👥",
      details: [
        "Detailed audience demographics and psychographics",
        "Engagement pattern analysis and trends",
        "Audience overlap and competitor analysis",
        "Purchase intent and behavior tracking"
      ]
    },
    {
      title: "Predictive Analytics & AI Insights",
      description: "AI-powered predictions for campaign performance and optimization recommendations.",
      icon: "🤖",
      details: [
        "AI-powered campaign performance predictions",
        "Automated optimization recommendations",
        "Budget allocation suggestions",
        "Influencer performance forecasting"
      ]
    },
    {
      title: "Competitive Benchmarking",
      description: "Compare your campaign performance against industry benchmarks and competitors.",
      icon: "⚡",
      details: [
        "Industry benchmark comparisons",
        "Competitor campaign analysis",
        "Market trend identification",
        "Performance gap analysis"
      ]
    },
    {
      title: "Custom Report Builder",
      description: "Create custom reports with drag-and-drop functionality and automated scheduling.",
      icon: "📈",
      details: [
        "Drag-and-drop report builder",
        "Automated report scheduling",
        "White-label reporting for clients",
        "Export to PDF, Excel, and PowerPoint"
      ]
    }
  ];

  const metrics = [
    {
      name: "Engagement Rate",
      description: "Track likes, comments, shares, and saves across all platforms",
      benchmark: "3-6% for micro-influencers, 1-3% for macro"
    },
    {
      name: "Reach & Impressions",
      description: "Monitor total reach and frequency of campaign exposure",
      benchmark: "500K+ reach for macro campaigns"
    },
    {
      name: "Conversion Rate",
      description: "Track clicks to website, sign-ups, and purchases",
      benchmark: "2-5% for ecommerce, 5-15% for SaaS trials"
    },
    {
      name: "Cost Per Acquisition",
      description: "Calculate CPA across different influencer tiers and platforms",
      benchmark: "$10-50 for micro, $100-500 for macro"
    },
    {
      name: "Return on Ad Spend",
      description: "Track ROAS across campaigns and influencer segments",
      benchmark: "3:1 minimum, 5:1+ for successful campaigns"
    },
    {
      name: "Brand Sentiment",
      description: "Monitor brand mentions and sentiment across campaigns",
      benchmark: "80%+ positive sentiment"
    }
  ];

  const reportTypes = [
    {
      type: "Campaign Performance Report",
      frequency: "Weekly/Monthly",
      includes: "ROI, engagement, conversions, top performers"
    },
    {
      type: "Influencer Performance Report",
      frequency: "Post-campaign",
      includes: "Individual influencer metrics, content performance"
    },
    {
      type: "Audience Insights Report",
      frequency: "Monthly",
      includes: "Demographics, psychographics, engagement patterns"
    },
    {
      type: "Competitive Analysis Report",
      frequency: "Quarterly",
      includes: "Benchmark comparisons, market trends, opportunities"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Advanced Analytics & Reporting</h1>
          <p className="text-xl text-gray-600 mb-12">
            Unlock the full potential of your influencer campaigns with AI-powered analytics, 
            real-time insights, and comprehensive reporting tools.
          </p>
          
          <div className="bg-gray-700 rounded-2xl p-8 text-white mb-12">
            <h3 className="text-2xl font-bold mb-4">📊 Analytics Demo</h3>
            <p className="text-gray-300 mb-6">
              See how our advanced analytics can transform your campaign insights and ROI.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/demo" className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                Book Analytics Demo
              </Link>
              <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition">
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Analytics Features</h2>
            <p className="text-xl text-gray-600">Everything you need to measure, optimize, and scale your influencer marketing campaigns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Performance Metrics</h2>
            <p className="text-xl text-gray-600">Track the metrics that matter most for your campaigns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.name}</h3>
                <p className="text-gray-600 mb-3">{metric.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">Benchmark:</span> {metric.benchmark}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automated Reporting</h2>
            <p className="text-xl text-gray-600">Get the insights you need, when you need them</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reportTypes.map((report, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{report.type}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Frequency:</span> {report.frequency}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Includes:</span> {report.includes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Analytics?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of brands using our advanced analytics to scale their influencer marketing
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/demo" className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Schedule Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition">
              Start Free Trial
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Analytics;
