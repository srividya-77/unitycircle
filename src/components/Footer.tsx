import { Button } from "@/components/ui/button";
import { 
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Alumni Directory", href: "#directory" },
        { label: "Events", href: "#events" },
        { label: "Mentorship", href: "#mentorship" },
        { label: "Job Board", href: "#jobs" },
        { label: "Donation Portal", href: "#donate" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "How It Works", href: "#" },
        { label: "Success Stories", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "API Documentation", href: "#" },
        { label: "Mobile App", href: "#" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Discussion Forums", href: "#" },
        { label: "Alumni Groups", href: "#" },
        { label: "Student Resources", href: "#" },
        { label: "Industry Networks", href: "#" },
        { label: "Regional Chapters", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Security", href: "#" },
        { label: "Accessibility", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-white/80 mb-8 text-lg">
              Get the latest updates on alumni events, job opportunities, and platform features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="hero" size="lg">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="gradient-primary p-3 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">UnityCircle</h2>
                <p className="text-white/60 text-sm">Hyderabad Higher Education</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming how educational institutions connect with their graduates through 
              AI-powered matching, networking, and engagement tools.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-white/80">
                <Mail className="h-4 w-4" />
                <span>connect@unitycircle.edu</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/80">
                <Phone className="h-4 w-4" />
                <span>+91 (040) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <div>
              <p>&copy; 2024 UnityCircle. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span>Problem ID: 25017</span>
              <span>|</span>
              <span>Smart Education Initiative</span>
              <span>|</span>
              <span>Hyderabad Higher Education Department</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;