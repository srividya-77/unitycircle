import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Target, 
  Trophy,
  Users,
  DollarSign,
  TrendingUp,
  Star,
  ArrowRight,
  Gift
} from "lucide-react";

const DonationPortal = () => {
  const campaigns = [
    {
      title: "Student Scholarship Fund 2024",
      description: "Supporting deserving students with financial assistance for tuition and educational expenses.",
      goal: 500000,
      raised: 387500,
      donors: 1247,
      daysLeft: 45,
      category: "Scholarships",
      featured: true,
      impact: "125 students supported"
    },
    {
      title: "New Science Laboratory Equipment",
      description: "Modernizing our science labs with cutting-edge equipment for better learning experiences.",
      goal: 250000, 
      raised: 198750,
      donors: 456,
      daysLeft: 28,
      category: "Infrastructure",
      featured: false,
      impact: "5 laboratories upgraded"
    },
    {
      title: "Alumni Mentorship Program Expansion",
      description: "Expanding our mentorship program to reach more students across all departments.",
      goal: 150000,
      raised: 127500,
      donors: 789,
      daysLeft: 62,
      category: "Programs", 
      featured: true,
      impact: "500+ mentorship pairs"
    },
    {
      title: "Digital Library Modernization",
      description: "Creating a state-of-the-art digital library with online resources and study spaces.",
      goal: 300000,
      raised: 89000,
      donors: 234,
      daysLeft: 120,
      category: "Technology",
      featured: false,
      impact: "10,000+ students benefit"
    }
  ];

  const donationStats = [
    {
      icon: DollarSign,
      label: "Total Raised This Year",
      value: "$2.4M",
      color: "text-success"
    },
    {
      icon: Users,
      label: "Active Donors",
      value: "3,247",
      color: "text-primary"
    },
    {
      icon: Target,
      label: "Projects Funded",
      value: "156",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      label: "Growth Rate",
      value: "+250%",
      color: "text-accent"
    }
  ];

  const recognitionLevels = [
    { name: "Bronze Supporter", amount: 100, color: "bg-orange-500", icon: "🥉" },
    { name: "Silver Patron", amount: 500, color: "bg-gray-400", icon: "🥈" },
    { name: "Gold Benefactor", amount: 1000, color: "bg-yellow-500", icon: "🥇" },
    { name: "Platinum Champion", amount: 5000, color: "bg-purple-500", icon: "💎" }
  ];

  return (
    <section id="donate" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-heart/10 px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-red-500">Make an Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Support Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your contributions directly impact current students and help build a stronger, 
            more connected alumni community for generations to come.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {donationStats.map((stat, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 text-center">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Campaigns */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Active Fundraising Campaigns
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign, index) => {
              const progressPercentage = (campaign.raised / campaign.goal) * 100;
              
              return (
                <Card key={index} className={`gradient-card shadow-card hover:shadow-elegant transition-bounce hover:scale-[1.01] border-0 relative ${campaign.featured ? 'lg:col-span-2' : ''}`}>
                  {campaign.featured && (
                    <Badge className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 hover:bg-yellow-500">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-3">{campaign.category}</Badge>
                        <h4 className="text-xl font-bold text-foreground mb-2">{campaign.title}</h4>
                        <p className="text-muted-foreground mb-4">{campaign.description}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Progress</span>
                        <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}%</span>
                      </div>
                      <Progress value={progressPercentage} className="h-3 mb-3" />
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-lg font-bold text-success">${campaign.raised.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">Raised</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground">${campaign.goal.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">Goal</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-primary">{campaign.donors}</p>
                          <p className="text-xs text-muted-foreground">Donors</p>
                        </div>
                      </div>
                    </div>

                    {/* Impact & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{campaign.daysLeft} days left</p>
                        <p className="text-sm font-medium text-secondary">{campaign.impact}</p>
                      </div>
                      <Button variant="success" size="sm">
                        Donate Now
                        <Heart className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recognition Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Donor Recognition Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitionLevels.map((level, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-bounce hover:scale-105 border-0 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{level.icon}</div>
                  <h4 className="font-bold text-foreground mb-2">{level.name}</h4>
                  <p className="text-2xl font-bold text-success mb-2">${level.amount}+</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Name recognition</p>
                    <p>• Special events access</p>
                    <p>• Impact reports</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Donate */}
        <div className="text-center">
          <Card className="gradient-card shadow-elegant border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Gift className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Make a Quick Donation
              </h3>
              <p className="text-muted-foreground mb-6">
                Every contribution, no matter the size, makes a meaningful difference 
                in the lives of our students and community.
              </p>
              
              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[25, 50, 100, 250].map((amount) => (
                  <Button key={amount} variant="outline" className="h-12">
                    ${amount}
                  </Button>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg" className="shadow-glow">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationPortal;