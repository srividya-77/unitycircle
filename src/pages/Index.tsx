import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpotlightStories from "@/components/SpotlightStories";
import AlumniDirectory from "@/components/AlumniDirectory";
import EventsSection from "@/components/EventsSection";
import MentorshipHub from "@/components/MentorshipHub";
import JobsBoard from "@/components/JobsBoard";
import DonationPortal from "@/components/DonationPortal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SpotlightStories />
      <AlumniDirectory />
      <EventsSection />
      <MentorshipHub />
      <JobsBoard />
      <DonationPortal />
      <Footer />
    </div>
  );
};

export default Index;
