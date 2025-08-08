import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { InfluencerTable } from "@/components/dashboard/InfluencerTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening with your campaigns.</p>
            </div>
            <Button variant="hero" className="gap-2">
              <Plus className="h-4 w-4" />
              New Campaign
            </Button>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 space-y-6">
          {/* Metrics */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Key Metrics</h2>
            <MetricsCards />
          </section>
          
          {/* Charts Row */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Campaign Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  Campaign performance chart would go here
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent-bright" />
                  Engagement Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  Engagement trends chart would go here
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Influencer Discovery */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Discover Influencers</h2>
            <InfluencerTable />
          </section>
        </main>
      </div>
    </div>
  );
}