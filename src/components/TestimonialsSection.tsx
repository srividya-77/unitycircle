import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "Tech Innovations Inc.",
      content: "UnityCircle has been instrumental in connecting me with fellow alumni. The networking opportunities have led to incredible career growth and meaningful partnerships.",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "StartupXYZ",
      content: "The mentorship program through UnityCircle helped me transition into tech. My mentor's guidance was invaluable, and now I'm giving back by mentoring others.",
      initials: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Scientist",
      company: "BioTech Solutions",
      content: "I've found amazing job opportunities and collaborators through this platform. The alumni directory is comprehensive and the events are always top-notch.",
      initials: "ER"
    },
    {
      name: "James Wilson",
      role: "Entrepreneur",
      company: "Wilson Ventures",
      content: "UnityCircle isn't just a network—it's a community. The support I've received from fellow alumni has been phenomenal in building my business.",
      initials: "JW"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about their experiences and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card/50 backdrop-blur border-border/50 hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied alumni who have transformed their careers through UnityCircle
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;