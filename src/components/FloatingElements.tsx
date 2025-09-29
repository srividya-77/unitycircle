import { MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingElements = () => {
  return (
    <>
      {/* AI Chatbot - Right Bottom Corner */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full shadow-elegant hover:shadow-glow bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          onClick={() => {
            // Add chatbot functionality here
            console.log("Opening AI Chatbot...");
          }}
        >
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        </Button>
      </div>

      {/* Demo Icon - Left Bottom Corner */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          size="lg"
          variant="outline"
          className="h-14 w-14 rounded-full shadow-elegant hover:shadow-glow bg-background/80 backdrop-blur border-primary/20 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          onClick={() => {
            // Add demo functionality here
            console.log("Opening Demo...");
          }}
        >
          <Play className="h-6 w-6 text-primary fill-primary" />
        </Button>
      </div>
    </>
  );
};

export default FloatingElements;