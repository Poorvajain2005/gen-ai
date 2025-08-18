import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";

const Helpdesk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tickets = [
    {
      id: "#12345",
      subject: "Campaign setup assistance needed",
      status: "Open",
      priority: "Medium",
      created: "2 hours ago"
    },
    {
      id: "#12344",
      subject: "Payment processing issue",
      status: "In Progress", 
      priority: "High",
      created: "1 day ago"
    },
    {
      id: "#12343",
      subject: "API integration question",
      status: "Resolved",
      priority: "Low",
      created: "3 days ago"
    }
  ];

  const categories = [
    { name: "Account Issues", count: 12 },
    { name: "Campaign Management", count: 8 },
    { name: "Billing & Payments", count: 5 },
    { name: "Technical Support", count: 15 },
    { name: "Feature Requests", count: 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Helpdesk</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your support tickets, track issues, and get help from our expert team.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Tickets</h2>
              <Link to="/ask-question" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                New Ticket
              </Link>
            </div>
            
            <div className="space-y-4">
              {tickets.map((ticket, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{ticket.subject}</h3>
                      <p className="text-sm text-gray-600">{ticket.id} • Created {ticket.created}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        ticket.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                        ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {ticket.status}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
                        ticket.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {ticket.priority}
                      </span>
                    </div>
                  </div>
                  <button className="text-green-600 hover:text-green-800 font-medium text-sm">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Categories</h2>
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                  <span className="font-medium text-gray-900">{category.name}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{category.count}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-700 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Need Urgent Help?</h3>
              <p className="text-gray-300 mb-4">Contact our support team directly for immediate assistance.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full">
                Live Chat
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Helpdesk;