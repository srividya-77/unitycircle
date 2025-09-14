import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock,
  Building,
  Users,
  ArrowUpRight,
  Heart,
  Search,
  Filter
} from "lucide-react";

const JobsBoard = () => {
  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      posted: "2 days ago",
      applicants: 23,
      postedBy: "Alumni",
      tags: ["React", "TypeScript", "AWS"],
      urgent: false,
      remote: true
    },
    {
      title: "Product Manager", 
      company: "Innovation Labs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$140k - $200k", 
      posted: "1 day ago",
      applicants: 18,
      postedBy: "Alumni",
      tags: ["Product Strategy", "Analytics", "Leadership"],
      urgent: true,
      remote: false
    },
    {
      title: "Data Scientist",
      company: "AI Solutions Co",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $120/hr",
      posted: "3 days ago", 
      applicants: 31,
      postedBy: "Partner",
      tags: ["Python", "Machine Learning", "SQL"],
      urgent: false,
      remote: true
    },
    {
      title: "Marketing Director",
      company: "StartupX",
      location: "Austin, TX",
      type: "Full-time", 
      salary: "$100k - $150k",
      posted: "1 week ago",
      applicants: 45,
      postedBy: "Alumni",
      tags: ["Digital Marketing", "Strategy", "Team Leadership"],
      urgent: false,
      remote: false
    },
    {
      title: "DevOps Engineer",
      company: "CloudFirst Technologies", 
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110k - $160k",
      posted: "4 days ago",
      applicants: 12,
      postedBy: "Alumni",
      tags: ["Kubernetes", "Docker", "CI/CD"],
      urgent: true,
      remote: true
    },
    {
      title: "UX Designer",
      company: "DesignStudio Pro",
      location: "Los Angeles, CA", 
      type: "Full-time",
      salary: "$90k - $130k",
      posted: "5 days ago",
      applicants: 27,
      postedBy: "Partner",
      tags: ["Figma", "User Research", "Prototyping"],
      urgent: false,
      remote: false
    }
  ];

  const jobStats = [
    {
      icon: Briefcase,
      label: "Active Job Postings",
      value: "1,247",
      color: "text-primary"
    },
    {
      icon: Users,
      label: "Alumni Hiring",
      value: "347",
      color: "text-secondary"
    },
    {
      icon: Building,
      label: "Partner Companies",
      value: "156",
      color: "text-accent"
    },
    {
      icon: Heart,
      label: "Successful Placements",
      value: "2,891",
      color: "text-success"
    }
  ];

  return (
    <section id="jobs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Briefcase className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">Exclusive Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Alumni Jobs Board
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exclusive job opportunities posted by alumni-owned companies 
            and our trusted industry partners.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {jobStats.map((stat, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 text-center">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or skills..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
            />
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline">Remote</Button>
            <Button variant="outline">Full-time</Button>
            <Button variant="outline">Contract</Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredJobs.map((job, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-bounce hover:scale-[1.01] border-0 relative">
              {job.urgent && (
                <Badge className="absolute top-4 right-4 bg-red-500 text-white hover:bg-red-500 z-10">
                  Urgent
                </Badge>
              )}
              
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      {job.remote && (
                        <Badge variant="secondary" className="text-xs">Remote OK</Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground mb-1">{job.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge 
                        variant={job.postedBy === 'Alumni' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {job.postedBy === 'Alumni' ? '🎓 Alumni Company' : '🤝 Partner'}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1 text-success font-semibold">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{job.applicants} applicants</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button variant="default" className="flex-1">
                    Apply Now
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Post Job CTA */}
        <div className="text-center">
          <Card className="gradient-card shadow-elegant border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Building className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Hiring Alumni Talent?
              </h3>
              <p className="text-muted-foreground mb-6">
                Post exclusive job opportunities to our talented alumni network 
                and find your next great hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="lg">
                  Post a Job
                  <Briefcase className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JobsBoard;