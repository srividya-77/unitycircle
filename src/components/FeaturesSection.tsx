import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Shield, 
  Users, 
  Calendar, 
  Briefcase, 
  Heart,
  ArrowRight,
  Sparkles
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Smart algorithms connect alumni with students based on interests, career paths, and compatibility scores.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "Tamper-proof academic records and achievements with cryptographic security.",
      color: "text-secondary"
    },
    {
      icon: Sparkles,
      title: "Gamified Engagement",
      description: "Points, badges, and leaderboards make networking fun and rewarding for everyone.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Smart Communities",
      description: "Join topic-based groups by batch, industry, location, and shared interests.",
      color: "text-success"
    },
    {
      icon: Calendar,
      title: "Virtual Events",
      description: "Built-in video conferencing, VR meetups, and seamless calendar integration.",
      color: "text-primary"
    },
    {
      icon: Briefcase,
      title: "Career Tracking",
      description: "Real-time LinkedIn integration monitors career progression and opportunities.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Makes Us Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology meets human connection to create the most advanced 
            alumni platform ever built.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-bounce hover:scale-[1.02] border-0">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted/50 mb-6">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="shadow-glow">
            Discover All Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;