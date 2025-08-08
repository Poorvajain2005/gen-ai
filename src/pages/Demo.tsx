import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Demo() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background-subtle to-secondary flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            Watch Our Demo
          </h1>
          <p className="text-lg leading-8 text-muted-foreground mb-8">
            See how Gen Goodwill.ai can transform your influencer marketing strategy.
          </p>
          
          <div className="aspect-video bg-card rounded-lg shadow-lg mb-8">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Demo video will be available soon</p>
              </div>
            </div>
          </div>
          
          <Button variant="hero" size="lg" asChild>
            <a href="/signup">Start Free Trial</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
