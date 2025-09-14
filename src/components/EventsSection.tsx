import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Video,
  Globe,
  ArrowRight,
  Heart
} from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Global Alumni Tech Summit 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      type: "Virtual",
      location: "Online Event",
      attendees: 2500,
      category: "Technology",
      description: "Join industry leaders discussing the future of AI, blockchain, and emerging technologies.",
      image: "gradient-primary",
      featured: true
    },
    {
      title: "Regional Networking Mixer",
      date: "March 22, 2024", 
      time: "6:00 PM - 9:00 PM",
      type: "In-Person",
      location: "Downtown Convention Center",
      attendees: 150,
      category: "Networking", 
      description: "Connect with local alumni over dinner and drinks in a relaxed setting.",
      image: "gradient-secondary",
      featured: false
    },
    {
      title: "Career Mentorship Workshop",
      date: "April 5, 2024",
      time: "2:00 PM - 5:00 PM", 
      type: "Hybrid",
      location: "Campus + Virtual",
      attendees: 300,
      category: "Career",
      description: "Learn mentorship best practices and connect with potential mentees.",
      image: "gradient-hero",
      featured: false
    },
    {
      title: "Startup Pitch Competition",
      date: "April 12, 2024",
      time: "1:00 PM - 8:00 PM",
      type: "In-Person", 
      location: "Innovation Hub",
      attendees: 500,
      category: "Entrepreneurship",
      description: "Watch alumni startups compete for funding and recognition.",
      image: "bg-accent",
      featured: true
    },
    {
      title: "Annual Homecoming Celebration",
      date: "April 20, 2024",
      time: "All Day",
      type: "In-Person",
      location: "University Campus", 
      attendees: 5000,
      category: "Social",
      description: "Celebrate our shared heritage with campus tours, activities, and reunion dinners.",
      image: "gradient-secondary",
      featured: true
    },
    {
      title: "Industry Panel: Future of Finance",
      date: "April 28, 2024",
      time: "3:00 PM - 5:00 PM",
      type: "Virtual", 
      location: "Online Event",
      attendees: 800,
      category: "Finance",
      description: "Expert panel on fintech, crypto, and the evolving financial landscape.",
      image: "gradient-primary",
      featured: false
    }
  ];

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Upcoming Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Events & Gatherings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our vibrant community through virtual and in-person events designed 
            to foster connections, learning, and professional growth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button variant="default" size="sm">All Events</Button>
          <Button variant="ghost" size="sm">Virtual</Button>
          <Button variant="ghost" size="sm">In-Person</Button>
          <Button variant="ghost" size="sm">Networking</Button>
          <Button variant="ghost" size="sm">Career</Button>
          <Button variant="ghost" size="sm">Technology</Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className={`gradient-card shadow-card hover:shadow-elegant transition-bounce hover:scale-[1.02] border-0 ${event.featured ? 'md:col-span-1 lg:col-span-1' : ''}`}>
              <CardContent className="p-0">
                {/* Event Image/Banner */}
                <div className={`h-48 ${event.image} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                  {event.featured && (
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900 hover:bg-yellow-500">
                      <Heart className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  )}
                  <div className="text-center text-white">
                    <Calendar className="h-12 w-12 mx-auto mb-3 opacity-80" />
                    <h3 className="text-xl font-bold px-4">{event.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  {/* Event Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      {event.type === 'Virtual' ? (
                        <Video className="h-4 w-4" />
                      ) : event.type === 'Hybrid' ? (
                        <Globe className="h-4 w-4" />
                      ) : (
                        <MapPin className="h-4 w-4" />
                      )}
                      <span>{event.location}</span>
                      <Badge variant="outline" className="ml-auto text-xs">
                        {event.type}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees.toLocaleString()} attending</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Category & Action */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {event.category}
                    </Badge>
                    <Button variant="default" size="sm">
                      RSVP
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            View All Events
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;