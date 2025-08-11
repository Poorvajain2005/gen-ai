import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <div className="bg-background-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ready to transform your influencer marketing? Contact us today.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <CardTitle>Call Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  <a
                    href="tel:+910000000000"
                    className="text-primary hover:underline"
                  >
                    +91 00000 00000
                  </a>
                </CardDescription>
                <p className="mt-2 text-sm text-muted-foreground">
                  Available 9AM - 6PM IST
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>Email Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  <a
                    href="mailto:contact@gen-goodwill.ai"
                    className="text-primary hover:underline"
                  >
                    contact@gen-goodwill.ai
                  </a>
                </CardDescription>
                <p className="mt-2 text-sm text-muted-foreground">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>Visit Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Gen Goodwill.ai HQ
                </CardDescription>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mumbai, India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
