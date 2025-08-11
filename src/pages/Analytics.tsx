import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Advanced Analytics & Reporting</h1>
        <p className="text-xl text-gray-600 mb-12">
          Unlock the full potential of your influencer campaigns with AI-powered analytics, 
          real-time insights, and comprehensive reporting tools.
        </p>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-4">📊 Analytics Demo</h3>
          <p className="text-blue-100 mb-6">
            See how our advanced analytics can transform your campaign insights and ROI.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/demo" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Book Analytics Demo
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Analytics;
