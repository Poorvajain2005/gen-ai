import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, ArrowUpDown, ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const influencers = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    platform: "Instagram",
    followers: "125K",
    engagement: "4.2%",
    niche: "Fashion",
    status: "Active",
    price: "$500"
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "@mikechentech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    platform: "TikTok",
    followers: "89K",
    engagement: "5.8%",
    niche: "Tech",
    status: "Available",
    price: "$350"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    username: "@emmahealth",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    platform: "YouTube",
    followers: "267K",
    engagement: "3.9%",
    niche: "Health",
    status: "In Campaign",
    price: "$750"
  },
  {
    id: 4,
    name: "Alex Thompson",
    username: "@alextravel",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    platform: "Instagram",
    followers: "198K",
    engagement: "4.7%",
    niche: "Travel",
    status: "Available",
    price: "$600"
  }
];

export function InfluencerTable() {
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("all");
  const [status, setStatus] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Available":
        return "bg-primary text-primary-foreground";
      case "In Campaign":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredInfluencers = influencers.filter((influencer) => {
    const matchesSearch = influencer.name.toLowerCase().includes(search.toLowerCase()) ||
                         influencer.username.toLowerCase().includes(search.toLowerCase()) ||
                         influencer.niche.toLowerCase().includes(search.toLowerCase());
    const matchesPlatform = platform === "all" || influencer.platform.toLowerCase() === platform;
    const matchesStatus = status === "all" || influencer.status.toLowerCase().replace(" ", "-") === status;
    
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  return (
    <Card className="bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Influencer Discovery</span>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filters
          </Button>
        </CardTitle>
        
        {/* Search and Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search influencers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="in-campaign">In Campaign</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 py-3 px-4 border-b border-border text-sm font-medium text-muted-foreground">
          <div className="col-span-2 flex items-center gap-2">
            Influencer
            <ArrowUpDown className="h-3 w-3" />
          </div>
          <div>Platform</div>
          <div className="flex items-center gap-2">
            Followers
            <ArrowUpDown className="h-3 w-3" />
          </div>
          <div className="flex items-center gap-2">
            Engagement
            <ArrowUpDown className="h-3 w-3" />
          </div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        
        {/* Table Rows */}
        <div className="space-y-2">
          {filteredInfluencers.map((influencer) => (
            <div
              key={influencer.id}
              className="grid grid-cols-7 gap-4 py-4 px-4 rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="col-span-2 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={influencer.avatar} alt={influencer.name} />
                  <AvatarFallback>{influencer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">{influencer.name}</div>
                  <div className="text-sm text-muted-foreground">{influencer.username}</div>
                  <div className="text-xs text-primary">{influencer.niche}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Badge variant="outline">{influencer.platform}</Badge>
              </div>
              
              <div className="flex items-center font-medium">{influencer.followers}</div>
              
              <div className="flex items-center">
                <span className="text-success font-medium">{influencer.engagement}</span>
              </div>
              
              <div className="flex items-center">
                <Badge className={getStatusColor(influencer.status)}>
                  {influencer.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredInfluencers.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No influencers found matching your criteria.
          </div>
        )}
      </CardContent>
    </Card>
  );
}