import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  Calendar,
  MessageCircle,
  Star,
  Users
} from "lucide-react";

const AlumniDirectory = () => {
  const featuredAlumni = [
    {
      name: "Dr. Sarah Chen",
      degree: "Computer Science '15",
      position: "Senior AI Engineer",
      company: "Google",
      location: "San Francisco, CA",
      avatar: "/api/placeholder/150/150",
      skills: ["AI/ML", "Python", "Leadership"],
      mentoring: true,
      rating: 4.9
    },
    {
      name: "Rajesh Kumar",
      degree: "Mechanical Engineering '12",
      position: "VP of Operations", 
      company: "Tesla",
      location: "Austin, TX",
      avatar: "/api/placeholder/150/150", 
      skills: ["Operations", "Manufacturing", "Strategy"],
      mentoring: true,
      rating: 4.8
    },
    {
      name: "Maria Rodriguez",
      degree: "Business Administration '18",
      position: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      avatar: "/api/placeholder/150/150",
      skills: ["Product Strategy", "Analytics", "Leadership"],
      mentoring: false,
      rating: 4.9
    },
    {
      name: "James Wilson",
      degree: "Electrical Engineering '10",
      position: "Startup Founder",
      company: "TechVenture Inc",
      location: "New York, NY",
      avatar: "/api/placeholder/150/150",
      skills: ["Entrepreneurship", "IoT", "Funding"],
      mentoring: true,
      rating: 5.0
    },
    {
      name: "Priya Patel",
      degree: "Data Science '19",
      position: "Research Scientist",
      company: "Meta",
      location: "Menlo Park, CA",
      avatar: "/api/placeholder/150/150",
      skills: ["Data Science", "Research", "Statistics"],
      mentoring: true,
      rating: 4.7
    },
    {
      name: "Ahmed Hassan",
      degree: "Civil Engineering '14",
      position: "Project Director",
      company: "Bechtel",
      location: "Dubai, UAE",
      avatar: "/api/placeholder/150/150",
      skills: ["Project Management", "Infrastructure", "International"],
      mentoring: false,
      rating: 4.8
    }
  ];

  return (
    <section id="directory" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Users className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Alumni Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Connect with Our Alumni
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover successful graduates, find mentors, and build meaningful 
            professional relationships within our global alumni community.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search alumni by name, company, or skills..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-shrink-0">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" className="flex-shrink-0">
              <MapPin className="h-4 w-4 mr-2" />
              Location
            </Button>
            <Button variant="outline" className="flex-shrink-0">
              <Briefcase className="h-4 w-4 mr-2" />
              Industry
            </Button>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAlumni.map((alumni, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-bounce hover:scale-[1.02] border-0">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={alumni.avatar} alt={alumni.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">{alumni.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{alumni.degree}</p>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{alumni.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Position & Company */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{alumni.position}</p>
                      <p className="text-sm text-muted-foreground">{alumni.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{alumni.location}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {alumni.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                  {alumni.mentoring && (
                    <Button variant="secondary" size="sm">
                      <Users className="h-4 w-4 mr-1" />
                      Mentor
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Alumni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AlumniDirectory;