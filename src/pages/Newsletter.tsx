import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  const newsletters = [
    { issue: "#55", title: "The quiet mistakes making discovery feel impossible" },
    { issue: "#54", title: "4 questions to sharpen your ICP" },
    { issue: "#53", title: "4 tips for launching in a new market with influencer marketing" },
    { issue: "#52", title: "Why influencer content is getting more boring (and how to fix it)" },
    { issue: "#51", title: "3 more ways to fix broken influencer communication" },
    { issue: "#50", title: "Chaotic influencer campaigns? Fix these 3 comms habits" },
    { issue: "#49", title: "The way marketers communicate with influencers is breaking relationships" },
    { issue: "#48", title: "Why tactics alone won't save your influencer marketing" },
    { issue: "#47", title: "Why your long-term influencer collabs flop" },
    { issue: "#46", title: "A swipe file for influencer marketers" },
    { issue: "#45", title: "3 ways to improve your influencer marketing CPM" },
    { issue: "#44", title: "What influencer marketers wish their managers understood" },
    { issue: "#43", title: "How to prove brand awareness campaigns are working" },
    { issue: "#42", title: "How to run an influencer program when it's just you" },
    { issue: "#41", title: "Influencer marketing fails" },
    { issue: "#40", title: "It's a relationship, silly" },
    { issue: "#39", title: "3 mistakes hurting your influencer recruitment strategy" },
    { issue: "#38", title: "3 influencer marketing trends worth trying on in 2025" },
    { issue: "#37", title: "5 tips for negotiating Instagram partnerships" },
    { issue: "#36", title: "Stories, Reels, Posts: What to buy & why" },
    { issue: "#35", title: "Let's talk about usage rights" },
    { issue: "#34", title: "3 tips on YouTube creator pricing" },
    { issue: "#33", title: "Market saturation? Let's fix it." },
    { issue: "#32", title: "What if we did influencer marketing differently in 2025?" },
    { issue: "#31", title: "What we did in 2024" },
    { issue: "#30", title: "The trouble with ROI" },
    { issue: "#29", title: "Are you influencing on YouTube?" },
    { issue: "#28", title: "How to go from \"Hey you!\" to \"Hey, I see you\"" },
    { issue: "#27", title: "3 cases where mass influencer outreach might makes sense" },
    { issue: "#26", title: "What happens when you do mass outreach" },
    { issue: "#25", title: "What could you STOP doing?" },
    { issue: "#24", title: "When you shouldn't work with creators who have worked with your competitors" },
    { issue: "#23", title: "What disqualifies an influencer?" },
    { issue: "#22", title: "The art of choosing influencer" },
    { issue: "#21", title: "The science of choosing influencers" },
    { issue: "#20", title: "How to tackle the most common gifting challenges" },
    { issue: "#19", title: "What to gift influencers" },
    { issue: "#18", title: "Which influencer gifting approach should you be using?" },
    { issue: "#17", title: "Does influencer gifting still work?" },
    { issue: "#16", title: "Which of these influencer briefing mistakes have you made?" },
    { issue: "#14", title: "How to increase your potential pool of influencers to recruit" },
    { issue: "#13", title: "How to encourage authenticity in influencer marketing" },
    { issue: "#12", title: "What does \"let creators create!\" mean?" },
    { issue: "#11", title: "How to show (off) your work" },
    { issue: "#10", title: "What's the deal with influencer exclusivity?" },
    { issue: "#9", title: "Why you should (n't) do mass influencer outreach" },
    { issue: "#8", title: "How to manage influencer relationships" },
    { issue: "#7", title: "How to find and test new influencer niches" },
    { issue: "#6", title: "Three don'ts of influencer marketing" },
    { issue: "#5", title: "How to fight back against audience and creative fatigue" },
    { issue: "#4", title: "What pro influencer marketers do before entering long-term partnerships" },
    { issue: "#3", title: "3 tips to improve influencer outreach response rates" },
    { issue: "#2", title: "How do influencer marketers find creators to work with?" },
    { issue: "#1", title: "How do influencer marketers figure out how much to pay influencers?" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mt-20">
        <div className="mx-auto px-16 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Actionable tips from real influencer marketers
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed">
              Every month, we run surveys & interview pro marketers to learn exactly how they work with influencers. You get expert-backed tips directly in your inbox.
            </p>
            
            {/* Subscription Form */}
            {!isSubscribed ? (
              <div className="mb-8">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
                  <div className="flex gap-3 mb-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 text-base"
                    />
                    <Button type="submit" className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-lg font-semibold">
                      Join 38,030+ marketers lovin' Return on Influence
                    </Button>
                  </div>
                </form>
                <div className="text-center mb-8">
                  <button className="text-blue-600 hover:underline text-lg">
                    Or scroll down to read first
                  </button>
                </div>
                <div className="flex items-center justify-center gap-10 text-base text-gray-600">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Free
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Weekly
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Unsubscribe anytime
                  </span>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto mb-8">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Successfully subscribed!</span>
                </div>
                <p className="text-sm text-gray-500">
                  Check your email for confirmation
                </p>
              </div>
            )}

            {/* Hero Image */}
            <div className="mb-20">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop" 
                alt="Newsletter hero image"
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* Read Past Issues */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Read past issues
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {newsletters.map((newsletter, index) => (
                <Card key={index} className="p-10 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200">
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <span className="text-lg font-bold text-blue-600">
                        Issue {newsletter.issue}
                      </span>
                    </div>
                    <h3 className="text-gray-900 font-bold text-xl mb-8 line-clamp-3 leading-relaxed">
                      {newsletter.title}
                    </h3>
                    <button className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                      Read more →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expert Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Just a few of the experts featured in Return on Influence
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-6xl mx-auto">
              Learn what's working right now in creator partnerships: from outreach to negotiations, creatives, recruitment, and everything in between.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=500&fit=crop" 
              alt="Team collaboration and expertise"
              className="w-full rounded-xl shadow-xl"
            />
          </div>

          {/* Content Quality Section */}
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Most influencer marketing content sucks
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                We can change that together. You bring the real-world experience. We'll bring the content creation expertise.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold">
                Learn how you can contribute
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;