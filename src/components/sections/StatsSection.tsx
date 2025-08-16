const stats = [
  { 
    name: "Influencer Profiles", 
    value: "10M+", 
    description: "Across all major platforms",
    color: "text-primary" 
  },
  { 
    name: "Active Brands", 
    value: "1,500+", 
    description: "Trust our platform",
    color: "text-accent-bright" 
  },
  { 
    name: "Average ROI Increase", 
    value: "300%", 
    description: "Compared to manual processes",
    color: "text-success" 
  },
  { 
    name: "Customer Satisfaction", 
    value: "98%", 
    description: "Based on user feedback",
    color: "text-primary-light" 
  },
];

export function StatsSection() {
  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Powering influencer marketing at scale
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Join thousands of brands using our platform to build authentic creator relationships
            </p>
          </div>
          
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.name} 
                className="flex flex-col bg-gradient-card p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                  {stat.name}
                </dt>
                <dd className={`order-first text-3xl font-bold tracking-tight ${stat.color}`}>
                  {stat.value}
                </dd>
                <div className="mt-2 text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}