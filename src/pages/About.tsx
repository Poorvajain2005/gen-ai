import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award,
  Globe,
  Zap,
  Heart,
  Shield
} from "lucide-react";

const values = [
  {
    name: "Authenticity First",
    description: "We believe in genuine connections between brands and creators, fostering authentic partnerships that resonate with audiences.",
    icon: Heart
  },
  {
    name: "Data-Driven Decisions",
    description: "Every feature is built on insights from real campaign data, ensuring our platform delivers measurable results.",
    icon: TrendingUp
  },
  {
    name: "Global Accessibility",
    description: "Breaking down barriers to make influencer marketing accessible to brands of all sizes, anywhere in the world.",
    icon: Globe
  },
  {
    name: "Innovation & Speed",
    description: "Constantly evolving our platform with cutting-edge AI and technology to stay ahead of industry trends.",
    icon: Zap
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Head of Influencer Marketing at TikTok with 8+ years building creator economy platforms.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Google engineer who led ML initiatives for YouTube Creator tools and scaled systems for billions of users.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Emily Thompson",
    role: "Head of Product",
    bio: "Product leader from Instagram who pioneered influencer analytics and creator monetization features.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Head of Growth",
    bio: "Growth expert who scaled influencer programs at Shopify, helping thousands of merchants succeed.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  }
];

const milestones = [
  { year: "2020", event: "Founded by ex-TikTok and Google engineers" },
  { year: "2021", event: "Launched MVP with 50+ beta brands" },
  { year: "2022", event: "Reached 1M+ influencer profiles" },
  { year: "2023", event: "Processed $100M+ in influencer payments" },
  { year: "2024", event: "10M+ influencers, 1,500+ active brands" }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background via-background-subtle to-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              🚀 Our Story
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Building the future of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                creator marketing
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're on a mission to democratize influencer marketing, making it accessible, 
              authentic, and data-driven for brands and creators worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              To empower brands and creators with the tools, insights, and connections they need 
              to build authentic relationships and drive meaningful business results.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {values.map((value, index) => (
                <div 
                  key={value.name} 
                  className="flex flex-col animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                      <value.icon className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-background-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted by industry leaders
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Our platform powers successful influencer programs for brands of all sizes
              </p>
            </div>
            
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gradient-card p-8">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Countries Served</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary">50+</dd>
              </div>
              <div className="flex flex-col bg-gradient-card p-8">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Team Members</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-accent-bright">120+</dd>
              </div>
              <div className="flex flex-col bg-gradient-card p-8">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Years Experience</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-success">25+</dd>
              </div>
              <div className="flex flex-col bg-gradient-card p-8">
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">Awards Won</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary-light">15+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From a small startup to a leading influencer marketing platform
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`flex items-center animate-fade-in-up ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1 px-8">
                    <Card className={`hover-lift bg-gradient-card ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <CardHeader>
                        <CardTitle className="text-primary">{milestone.year}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-gradient-primary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-background-subtle py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet our leadership team
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Industry veterans with decades of combined experience in social media, 
              technology, and influencer marketing.
            </p>
          </div>
          
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {team.map((person, index) => (
              <div 
                key={person.name} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  className="mx-auto h-56 w-56 rounded-2xl object-cover hover-lift" 
                  src={person.avatar} 
                  alt={person.name} 
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-foreground">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-primary">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Join us in shaping the future
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              Whether you're a brand looking to scale your influencer program or a creator 
              seeking authentic partnerships, we're here to help you succeed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="premium" size="lg">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}