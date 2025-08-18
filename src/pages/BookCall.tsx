import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

const BookCall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const callTypes = [
    {
      title: "Strategy Consultation",
      duration: "30 minutes",
      description: "Get expert advice on your influencer marketing strategy and campaign planning.",
      features: ["Campaign strategy review", "Platform recommendations", "Budget optimization", "KPI setting"]
    },
    {
      title: "Platform Demo",
      duration: "45 minutes", 
      description: "See our platform in action with a personalized demo tailored to your needs.",
      features: ["Live platform walkthrough", "Custom use case scenarios", "Feature deep-dive", "Q&A session"]
    },
    {
      title: "Enterprise Consultation",
      duration: "60 minutes",
      description: "Comprehensive consultation for enterprise-level influencer marketing needs.",
      features: ["Multi-market strategy", "Compliance requirements", "Custom integrations", "Team training"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Book a Call</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a personalized consultation with our influencer marketing experts. 
            Get strategic advice, see our platform in action, or discuss your specific needs.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {callTypes.map((call, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{call.title}</h3>
              <p className="text-green-600 font-medium mb-4">{call.duration}</p>
              <p className="text-gray-600 mb-6">{call.description}</p>
              <ul className="space-y-2 mb-6">
                {call.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                Schedule Now
              </button>
            </div>
          ))}
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Before the Call</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• You'll receive a calendar invite with meeting details</li>
                <li>• We'll send a brief questionnaire about your goals</li>
                <li>• All materials and links will be provided in advance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">During the Call</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Personalized discussion based on your needs</li>
                <li>• Live platform demonstration if applicable</li>
                <li>• Strategic recommendations and next steps</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Join thousands of brands who have transformed their influencer marketing with our expert guidance.
          </p>
          <button className="bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
            Book Your Call Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default BookCall;