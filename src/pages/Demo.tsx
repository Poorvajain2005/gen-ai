import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle } from "lucide-react";

export default function Demo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phone: "",
    companySize: "",
    currentSolution: "",
    goals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo request submitted!");
  };

  return (
    <Layout>
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-2">
            Schedule Your Demo
          </h1>
          <p className="text-center text-gray-300 mb-10">
            See how Gen Goodwill.ai can transform your strategy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  What to Expect
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Personalized Demo - Tailored to your specific use case and industry
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Live Platform Walkthrough - See all features in action with real data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Q&A Session - Get answers to all your questions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Custom Strategy Discussion - Learn how to optimize your influencer campaigns
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Demo Details
                </h2>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    <strong>Duration:</strong> 30 minutes
                  </li>
                  <li>
                    <strong>Format:</strong> Video call
                  </li>
                  <li>
                    <strong>Availability:</strong> Mon-Fri, 9AM-6PM EST
                  </li>
                  <li>
                    <strong>Response time:</strong> Within 24 hours
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-2 bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-6">Request Your Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-300">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    id="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white py-2 px-3 shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-sm"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentSolution" className="block text-sm font-medium text-gray-300">
                    Current Influencer Marketing Solution
                  </label>
                  <select
                    name="currentSolution"
                    id="currentSolution"
                    value={formData.currentSolution}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white py-2 px-3 shadow-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 sm:text-sm"
                  >
                    <option value="">Select current solution</option>
                    <option value="none">None</option>
                    <option value="in-house">In-house</option>
                    <option value="agency">Agency</option>
                    <option value="platform">Platform</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-300">
                    Tell us about your goals
                  </label>
                  <textarea
                    name="goals"
                    id="goals"
                    rows={4}
                    placeholder="What are you hoping to achieve with influencer marketing?"
                    value={formData.goals}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md"
                  >
                    Schedule Demo
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  By submitting this form, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
