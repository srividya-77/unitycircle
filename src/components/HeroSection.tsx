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
            <Button variant="outline" size="xl" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary transition-smooth">
              Join as Alumni
            </Button>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group glass-card p-8 rounded-3xl text-center transition-bounce hover:scale-110 hover:shadow-glow cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-4 group-hover:bg-primary/30 transition-smooth">
                  <Users className="h-8 w-8 text-primary-glow group-hover:scale-125 transition-smooth" />
                </div>
                <div className="text-4xl font-bold mb-2 group-hover:text-primary-glow transition-smooth">50,000+</div>
                <div className="text-white/80 group-hover:text-white transition-smooth font-medium">Active Alumni</div>
                <div className="text-xs text-white/60 group-hover:text-white/80 transition-smooth mt-2">Growing daily</div>
              </div>
            </div>
            <div className="group glass-card p-8 rounded-3xl text-center transition-bounce hover:scale-110 hover:shadow-glow cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/20 mb-4 group-hover:bg-yellow-400/30 transition-smooth">
                  <Trophy className="h-8 w-8 text-yellow-400 group-hover:scale-125 transition-smooth" />
                </div>
                <div className="text-4xl font-bold mb-2 group-hover:text-yellow-400 transition-smooth">95%</div>
                <div className="text-white/80 group-hover:text-white transition-smooth font-medium">Success Rate</div>
                <div className="text-xs text-white/60 group-hover:text-white/80 transition-smooth mt-2">Proven results</div>
              </div>
            </div>
            <div className="group glass-card p-8 rounded-3xl text-center transition-bounce hover:scale-110 hover:shadow-glow cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-smooth">
                  <Briefcase className="h-8 w-8 text-secondary group-hover:scale-125 transition-smooth" />
                </div>
                <div className="text-4xl font-bold mb-2 group-hover:text-secondary transition-smooth">5,000+</div>
                <div className="text-white/80 group-hover:text-white transition-smooth font-medium">Career Connections</div>
                <div className="text-xs text-white/60 group-hover:text-white/80 transition-smooth mt-2">Made monthly</div>
              </div>
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