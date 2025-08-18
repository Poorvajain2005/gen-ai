import { useEffect } from "react";
import { Header } from "@/components/layout/Header";

const Inbox = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const messages = [
    {
      from: "Sarah Johnson",
      subject: "Campaign proposal ready for review",
      preview: "Hi! I've completed the campaign proposal for the summer collection launch...",
      time: "2 hours ago",
      unread: true,
      type: "influencer"
    },
    {
      from: "Support Team",
      subject: "Your campaign has been approved",
      preview: "Great news! Your 'Holiday Fashion' campaign has been approved and is now live...",
      time: "5 hours ago",
      unread: true,
      type: "system"
    },
    {
      from: "Mike Chen",
      subject: "Content delivery - Holiday Campaign",
      preview: "Please find attached the final content pieces for the holiday campaign...",
      time: "1 day ago",
      unread: false,
      type: "influencer"
    }
  ];

  const filters = ["All", "Unread", "Influencers", "System", "Campaigns"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Inbox</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with your influencers, team, and campaign updates in one centralized inbox.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
            <div className="space-y-2">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    filter === 'All' ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          <section className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
                  <span className="text-sm text-gray-600">3 messages</span>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {messages.map((message, index) => (
                  <div key={index} className={`p-6 hover:bg-gray-50 cursor-pointer ${
                    message.unread ? 'bg-blue-50' : ''
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          message.type === 'influencer' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <h3 className={`font-semibold ${
                          message.unread ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {message.from}
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500">{message.time}</span>
                    </div>
                    <h4 className={`font-medium mb-1 ${
                      message.unread ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {message.subject}
                    </h4>
                    <p className="text-gray-600 text-sm">{message.preview}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="mt-16 bg-gray-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-6">
            Never miss important updates from your influencer campaigns and team communications.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
            Compose Message
          </button>
        </section>
      </main>
    </div>
  );
};

export default Inbox;