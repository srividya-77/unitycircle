import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-alumni.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Alumni celebrating graduation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-medium">Punjab Higher Education Initiative</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Connect. Mentor.
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Grow Together
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            The next-generation platform that transforms how educational institutions 
            connect with their graduates through AI-powered matching and engagement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="glass" size="xl" className="animate-pulse-glow">
              Explore Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Join as Alumni
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl text-center transition-bounce hover:scale-105">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary-glow" />
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-white/80">Active Alumni</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center transition-bounce hover:scale-105">
              <Trophy className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center transition-bounce hover:scale-105">
              <Briefcase className="h-8 w-8 mx-auto mb-3 text-secondary" />
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-white/80">Career Connections</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-secondary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 gradient-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;