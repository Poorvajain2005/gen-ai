import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build beautiful, responsive user interfaces for our influencer marketing platform using React, TypeScript, and modern web technologies."
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote / New York",
      type: "Full-time",
      description: "Drive product positioning, messaging, and go-to-market strategies for our influencer marketing solutions."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help our enterprise clients maximize their ROI through strategic influencer marketing campaigns and platform optimization."
    },
    {
      title: "Data Scientist",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build AI/ML models for influencer matching, performance prediction, and campaign optimization using Python and modern ML frameworks."
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary & Equity",
      description: "Market-leading compensation with meaningful equity participation"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend"
    },
    {
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and home office setup budget"
    },
    {
      title: "Learning & Development",
      description: "$2,000 annual learning budget for courses, conferences, and certifications"
    },
    {
      title: "Unlimited PTO",
      description: "Take the time you need to recharge with our unlimited vacation policy"
    },
    {
      title: "Team Retreats",
      description: "Annual company retreats and quarterly team building events"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Help us revolutionize influencer marketing. We're building the future of creator economy 
            and looking for passionate people to join our mission.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Link 
                    to="/apply" 
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition mt-4 md:mt-0"
                  >
                    Apply Now
                  </Link>
                </div>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-gray-300 mb-6">
            We're always looking for talented people. Send us your resume and tell us how you'd like to contribute.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Get In Touch
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Careers;