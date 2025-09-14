import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Rocket, 
  Lightbulb, 
  Users, 
  Globe, 
  Award,
  Star,
  Trophy,
  Target
} from "lucide-react";

const SpotlightStories = () => {
  const stories = [
    {
      id: 1,
      name: "Jahnvi Sharma",
      position: "CEO, Unicorn Company Yamaha",
      achievement: "Wonder Women Leadership Award",
      year: "2024",
      description: "Proud that our Alumni is the CEO of the Unicorn Company Yamaha and her inspiring journey to this position is a testament to her hard work.",
      quote: "I am happy to be one of the top 50 Female Coders in Amazon Hackathon",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b7f2?w=400&h=400&fit=crop&crop=face",
      achievements: [
        { icon: Crown, label: "CEO" },
        { icon: Rocket, label: "Entrepreneur" },
        { icon: Lightbulb, label: "Innovation" },
        { icon: Users, label: "Leadership" },
        { icon: Globe, label: "Global Impact" },
        { icon: Award, label: "Excellence" },
        { icon: Star, label: "Top Performer" },
        { icon: Trophy, label: "Winner" },
        { icon: Target, label: "Goal Achiever" }
      ]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      position: "Founder, TechVentures",
      achievement: "Innovation Excellence Award",
      year: "2024",
      description: "From a small town dreamer to a tech entrepreneur, Rajesh's journey exemplifies the power of determination and innovation in creating meaningful impact.",
      quote: "Building technology that bridges the gap between rural and urban opportunities",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      achievements: [
        { icon: Rocket, label: "Startup Founder" },
        { icon: Lightbulb, label: "Innovator" },
        { icon: Users, label: "Team Builder" },
        { icon: Globe, label: "Social Impact" },
        { icon: Award, label: "Recognition" },
        { icon: Star, label: "Excellence" },
        { icon: Trophy, label: "Achievement" },
        { icon: Target, label: "Vision" },
        { icon: Crown, label: "Leader" }
      ]
    },
    {
      id: 3,
      name: "Priya Nair",
      position: "Director of AI, Google",
      achievement: "AI Pioneer Recognition",
      year: "2024",
      description: "Leading breakthrough research in artificial intelligence, Priya is shaping the future of technology while mentoring the next generation of innovators.",
      quote: "AI should empower humanity, not replace it - that's the principle that guides my work",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      achievements: [
        { icon: Lightbulb, label: "AI Pioneer" },
        { icon: Crown, label: "Director" },
        { icon: Star, label: "Research Leader" },
        { icon: Globe, label: "Global Impact" },
        { icon: Award, label: "Recognition" },
        { icon: Users, label: "Mentor" },
        { icon: Trophy, label: "Excellence" },
        { icon: Target, label: "Innovation" },
        { icon: Rocket, label: "Tech Leader" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-background/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            SPOTLIGHT STORIES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our outstanding alumni who are making remarkable contributions across industries and inspiring the next generation of leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card 
              key={story.id}
              className="group overflow-hidden bg-card border-border hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:rotate-1 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left Side - Certificate/Achievement */}
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] p-6 text-white relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B35] to-[#F59E0B]"></div>
                    <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-[#F59E0B] to-[#FF6B35]"></div>
                    
                    {/* Certificate content */}
                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <div className="inline-block px-4 py-2 bg-[#FF6B35] rounded-full mb-2">
                          <span className="text-sm font-bold">CONGRATULATIONS</span>
                        </div>
                        <h3 className="text-lg font-bold leading-tight">
                          {story.achievement}
                        </h3>
                        <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/30">
                          {story.year}
                        </Badge>
                      </div>

                      {/* Achievement badges grid */}
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {story.achievements.map((achievement, index) => (
                          <div 
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 flex flex-col items-center justify-center hover:bg-[#FF6B35]/20 transition-colors duration-200"
                          >
                            <achievement.icon className="w-4 h-4 mb-1" />
                            <span className="text-xs font-medium text-center leading-tight">
                              {achievement.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#FF6B35]"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#FF6B35]"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#FF6B35]"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#FF6B35]"></div>
                  </div>

                  {/* Right Side - Alumni Profile */}
                  <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-card">
                    <div>
                      {/* Profile image */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-[#FF6B35] group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Profile info */}
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {story.name}
                        </h4>
                        <p className="text-sm font-medium text-[#FF6B35] mb-2">
                          {story.position}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {story.description}
                      </p>

                      {/* Quote */}
                      <blockquote className="text-xs italic text-muted-foreground border-l-2 border-[#FF6B35] pl-3 mb-4">
                        "{story.quote}"
                      </blockquote>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-colors duration-200"
                      >
                        Read Full Story
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full text-[#1E3A8A] hover:bg-[#1E3A8A]/10 transition-colors duration-200"
                      >
                        Listen to Podcast
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] hover:from-[#E55A2B] hover:to-[#D97706] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpotlightStories;