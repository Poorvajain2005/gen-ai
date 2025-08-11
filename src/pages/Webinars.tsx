import { useEffect } from "react";
import { Link } from "react-router-dom";

const Webinars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingWebinars = [
    {
      title: "Mastering Influencer ROI: From Metrics to Revenue",
      date: "January 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Sarah Johnson",
      role: "Senior Influencer Marketing Strategist",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      description: "Learn how to measure and optimize influencer campaigns for maximum ROI. Includes live demo of our analytics dashboard.",
      attendees: "1,247",
      category: "Analytics",
      level: "Intermediate"
    },
    {
      title: "Ecommerce Influencer Strategies for 2025",
      date: "January 22, 2025",
      time: "11:00 AM EST",
      duration: "90 minutes",
      speaker: "Mike Chen",
      role: "Ecommerce Growth Expert",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      description: "Discover proven strategies for ecommerce brands to leverage influencers for product launches and seasonal campaigns.",
      attendees: 892,
      category: "Ecommerce",
      level: "Beginner"
    },
    {
      title: "Scaling Agency Campaigns: Managing 100+ Clients",
      date: "January 29, 2025",
      time: "3:00 PM EST",
      duration: "75 minutes",
      speaker: "Lisa Rodriguez",
      role: "Agency Operations Director",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      description: "Learn how top agencies scale influencer campaigns across multiple clients while maintaining quality and profitability.",
      attendees: 634,
      category: "Agencies",
      level: "Advanced"
    }
  ];

  const pastWebinars = [
    {
      title: "SaaS Influencer Partnerships: User Acquisition Playbook",
      date: "December 10, 2024",
      duration: "60 minutes",
      speaker: "David Park",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      views: "3,247",
      rating: 4.8,
      category: "SaaS"
    },
    {
      title: "Enterprise Compliance in Influencer Marketing",
      date: "December 3, 2024",
      duration: "90 minutes",
      speaker: "Emma Thompson",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      views: "2,156",
      rating: 4.9,
      category: "Enterprise"
    }
  ];

  const certificationTracks = [
    {
      title: "Influencer Marketing Fundamentals",
      duration: "4 hours",
      lessons: 12,
      level: "Beginner",
      certificate: "Certificate of Completion",
      topics: ["Campaign Planning", "Influencer Discovery", "Content Guidelines", "Performance Tracking"]
    },
    {
      title: "Advanced Campaign Optimization",
      duration: "6 hours",
      lessons: 18,
      level: "Advanced",
      certificate: "Professional Certification",
      topics: ["ROI Optimization", "A/B Testing", "Multi-platform Strategies", "Scaling Campaigns"]
    },
    {
      title: "Agency Masterclass",
      duration: "8 hours",
      lessons: 24,
      level: "Expert",
      certificate: "Agency Specialist Certification",
      topics: ["Client Management", "White-label Solutions", "Team Scaling", "Profitability"]
    }
  ];

  const webinarCategories = ["All", "Ecommerce", "SaaS", "Agencies", "Enterprise", "Analytics", "Strategy", "Compliance"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Master Influencer Marketing with Expert-Led Webinars
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join industry experts for live training sessions, certification programs, and exclusive insights. 
            Learn proven strategies from brands that have generated millions through influencer partnerships.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/webinars/register" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
              Browse All Webinars
            </Link>
            <Link to="/certification" className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition">
              Get Certified
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Attendees Trained</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600">Expert Speakers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15K+</div>
            <div className="text-gray-600">Certifications Issued</div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Live Webinars</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={webinar.image} alt={webinar.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {webinar.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {webinar.date} at {webinar.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {webinar.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {webinar.speaker} • {webinar.role}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{webinar.attendees} registered</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{webinar.level}</span>
                  </div>
                  
                  <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                    Register Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certification Tracks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certification Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificationTracks.map((track, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{track.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {track.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {track.lessons} lessons
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{track.certificate}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {track.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-3 h-3 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                  Start Certification
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Past Webinars */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">On-Demand Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={webinar.image} alt={webinar.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {webinar.category}
                    </span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600">{webinar.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">Speaker: {webinar.speaker}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{webinar.views} views</span>
                    <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                      Watch Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Skills?</h2>
            <p className="text-purple-100 mb-6">
              Join thousands of marketers who have transformed their influencer marketing skills through our webinars and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/webinars/register" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
                Browse All Webinars
              </Link>
              <Link to="/certification" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition">
                Start Certification
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Webinars;
