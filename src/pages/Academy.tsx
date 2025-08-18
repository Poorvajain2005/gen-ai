import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Academy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courses = [
    {
      title: "Influencer Marketing Fundamentals",
      level: "Beginner",
      duration: "4 hours",
      lessons: 12,
      description: "Master the basics of influencer marketing from strategy to execution.",
      topics: ["Campaign Planning", "Influencer Discovery", "Content Guidelines", "Performance Tracking"]
    },
    {
      title: "Advanced Campaign Optimization",
      level: "Intermediate", 
      duration: "6 hours",
      lessons: 18,
      description: "Learn advanced techniques for optimizing campaigns and maximizing ROI.",
      topics: ["A/B Testing", "Attribution Modeling", "Budget Optimization", "Performance Analysis"]
    },
    {
      title: "Agency Masterclass",
      level: "Advanced",
      duration: "8 hours", 
      lessons: 24,
      description: "Comprehensive training for agencies managing multiple client campaigns.",
      topics: ["Client Management", "Scaling Operations", "White-label Solutions", "Profitability"]
    }
  ];

  const resources = [
    {
      type: "Templates",
      count: "50+",
      description: "Campaign briefs, contracts, and reporting templates"
    },
    {
      type: "Case Studies", 
      count: "100+",
      description: "Real campaign examples with detailed breakdowns"
    },
    {
      type: "Webinars",
      count: "Weekly",
      description: "Live sessions with industry experts"
    },
    {
      type: "Community",
      count: "10K+",
      description: "Connect with other marketers and share insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Influencer Marketing Academy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master influencer marketing with our comprehensive courses, templates, and resources. 
            Learn from industry experts and get certified in influencer marketing best practices.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.level}
                </span>
                <span className="text-sm text-gray-600">{course.duration}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {course.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-600 mb-4">{course.lessons} lessons</p>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                Start Course
              </button>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{resource.count}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{resource.type}</h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Certified Today</h2>
          <p className="text-gray-300 mb-6">
            Complete our courses and earn industry-recognized certifications in influencer marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Browse All Courses
            </Link>
            <Link to="/certification" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-700 transition">
              View Certifications
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Academy;