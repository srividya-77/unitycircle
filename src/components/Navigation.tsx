import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Briefcase, 
  Heart, 
  UserCircle,
  Menu,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Users, label: "Alumni Directory", href: "#directory" },
    { icon: Calendar, label: "Events", href: "#events" },
    { icon: UserCircle, label: "Mentorship", href: "#mentorship" },
    { icon: Briefcase, label: "Jobs", href: "#jobs" },
    { icon: Heart, label: "Donate", href: "#donate" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="gradient-primary p-3 rounded-xl shadow-elegant">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">UnityCircle</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth hover:bg-accent/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-4 w-4 transition-smooth group-hover:scale-110" />
                <span className="relative">
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></div>
                </span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-accent/70 transition-smooth">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="shadow-elegant hover:shadow-glow transition-smooth">
              Join Network
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="flex space-x-3 px-4 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  Join Network
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;