import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(99, 102, 241, 0.9) 100%), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src={profileImage} 
              alt="Michael Ishoko" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Michael Ishoko
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-100">
              Website Developer & WordPress Specialist
            </h2>
            <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Building fast, responsive, and SEO-ready websites that turn ideas into reality
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
