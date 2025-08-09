import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/responsive-tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResponsiveTabsDemo = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-8">
          Responsive Tabs Demo
        </h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                  This is the overview tab content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This responsive tabs component adapts to different screen sizes,
                  providing an optimal user experience on both mobile and desktop devices.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>
                  Key features of our platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Responsive design</li>
                  <li>Mobile-first approach</li>
                  <li>CSS media queries</li>
                  <li>Optimal user experience</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>
                  Simple and transparent pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Contact us at +91 78697 12770 for pricing details.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>
                  Get in touch with us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Phone: +91 78697 12770
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ResponsiveTabsDemo;
