import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  UserCircle, 
  Brain, 
  Target, 
  Clock,
  MessageSquare,
  Star,
  ArrowRight,
  Users
} from "lucide-react";

const MentorshipHub = () => {
  const mentorshipMatches = [
    {
      mentor: {
        name: "Dr. Sarah Chen",
        position: "Senior AI Engineer at Google",
        expertise: ["Machine Learning", "Python", "Leadership", "Career Growth"],
        avatar: "/api/placeholder/100/100",
        rating: 4.9,
        sessions: 156
      },
      compatibility: 96,
      matchReason: "Shared interest in AI/ML and career progression in tech"
    },
    {
      mentor: {
        name: "James Wilson",
        position: "Startup Founder at TechVenture",
        expertise: ["Entrepreneurship", "Product Development", "Funding", "Strategy"],
        avatar: "/api/placeholder/100/100", 
        rating: 5.0,
        sessions: 89
      },
      compatibility: 92,
      matchReason: "Perfect match for entrepreneurship and startup guidance"
    },
    {
      mentor: {
        name: "Maria Rodriguez",
        position: "Product Manager at Microsoft",
        expertise: ["Product Strategy", "User Research", "Analytics", "Team Leadership"],
        avatar: "/api/placeholder/100/100",
        rating: 4.8,
        sessions: 203
      },
      compatibility: 88,
      matchReason: "Aligned career goals in product management and leadership"
    }
  ];

  const mentorshipStats = [
    {
      icon: Target,
      label: "Match Success Rate",
      value: "94%",
      color: "text-success"
    },
    {
      icon: Clock, 
      label: "Avg. Response Time",
      value: "2.3 hrs",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      label: "Active Mentorships", 
      value: "1,247",
      color: "text-secondary"
    },
    {
      icon: Star,
      label: "Avg. Rating",
      value: "4.9/5",
      color: "text-accent"
    }
  ];

  return (
    <section id="mentorship" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Matching</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Smart Mentorship Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI algorithm analyzes your profile, career goals, and interests 
            to match you with the perfect mentors from our alumni network.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {mentorshipStats.map((stat, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 text-center">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Matching Demo */}
        <div className="mb-16">
          <Card className="gradient-card shadow-elegant border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Your AI-Curated Mentor Matches
                </h3>
                <p className="text-muted-foreground">
                  Based on your profile analysis, here are your top mentor recommendations
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {mentorshipMatches.map((match, index) => (
                  <Card key={index} className="bg-background/50 border border-border/50 hover:shadow-card transition-smooth">
                    <CardContent className="p-6">
                      {/* Compatibility Score */}
                      <div className="flex justify-between items-center mb-4">
                        <Badge className="bg-success text-success-foreground">
                          {match.compatibility}% Match
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{match.mentor.rating}</span>
                        </div>
                      </div>

                      {/* Mentor Info */}
                      <div className="flex items-start space-x-4 mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={match.mentor.avatar} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {match.mentor.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{match.mentor.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{match.mentor.position}</p>
                          <p className="text-xs text-muted-foreground">{match.mentor.sessions} mentorship sessions</p>
                        </div>
                      </div>

                      {/* Expertise */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {match.mentor.expertise.slice(0, 3).map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {match.mentor.expertise.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{match.mentor.expertise.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Match Reason */}
                      <p className="text-sm text-muted-foreground mb-4 italic">
                        "{match.matchReason}"
                      </p>

                      {/* Action */}
                      <Button variant="default" size="sm" className="w-full">
                        Connect with Mentor
                        <MessageSquare className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  See All Matches
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
              <UserCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Complete Your Profile</h3>
            <p className="text-muted-foreground">
              Share your background, interests, and career goals to help our AI understand you better.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-secondary mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">AI Finds Perfect Matches</h3>
            <p className="text-muted-foreground">
              Our advanced algorithm analyzes compatibility across multiple dimensions to find ideal mentors.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-6">
              <Users className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Start Your Journey</h3>
            <p className="text-muted-foreground">
              Connect with mentors, schedule sessions, and accelerate your professional growth.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="shadow-glow">
            Find My Mentor Match
            <Target className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipHub;