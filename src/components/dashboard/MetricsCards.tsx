import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign, Eye, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    title: "Total Campaigns",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: MessageSquare,
    color: "text-primary"
  },
  {
    title: "Active Influencers",
    value: "142",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "text-accent-bright"
  },
  {
    title: "Campaign ROI",
    value: "324%",
    change: "+23%",
    trend: "up",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "Total Reach",
    value: "2.4M",
    change: "-5%",
    trend: "down",
    icon: Eye,
    color: "text-warning"
  }
];

export function MetricsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.title} 
          className="hover-lift animate-fade-in-up bg-gradient-card"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className={cn("h-4 w-4", metric.color)} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{metric.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {metric.trend === "up" ? (
                <TrendingUp className="mr-1 h-3 w-3 text-success" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3 text-destructive" />
              )}
              <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                {metric.change}
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}