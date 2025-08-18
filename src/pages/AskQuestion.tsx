import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

const AskQuestion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "General Questions",
    "Account & Billing", 
    "Campaign Management",
    "Technical Issues",
    "API & Integrations",
    "Feature Requests"
  ];

  const faqs = [
    {
      question: "How do I start my first campaign?",
      answer: "Navigate to the Campaigns section and click 'Create New Campaign'. Our step-by-step wizard will guide you through the process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also set up invoicing."
    },
    {
      question: "How does influencer matching work?",
      answer: "Our AI analyzes 50+ data points including audience demographics, engagement rates, and brand alignment to find perfect matches."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Ask a Question</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question? We're here to help. Submit your question below and our team will get back to you quickly.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Question</h2>
            <form className="bg-white p-6 rounded-xl shadow-lg space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Brief description of your question"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Question</label>
                <textarea
                  rows={6}
                  placeholder="Please provide as much detail as possible..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                Submit Question
              </button>
            </form>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Need Immediate Help?</h3>
              <p className="text-gray-300 mb-4">For urgent issues, contact our support team directly.</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Live Chat Support
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AskQuestion;