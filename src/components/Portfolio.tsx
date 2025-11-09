import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import datapillarImg from "@/assets/projects/datapillar.png";
import trezoroImg from "@/assets/projects/trezoro.png";
import causeeImg from "@/assets/projects/causee.png";
import yellowfounderImg from "@/assets/projects/yellowfounder.png";
import meucareImg from "@/assets/projects/meucare.png";
import atcloseImg from "@/assets/projects/atclose.png";

const Portfolio = () => {
  const projects = [
    {
      title: "DataPillar AI",
      category: "AI Platform",
      description: "Enterprise AI data platform enabling organizations to harness artificial intelligence for data-driven insights and automation.",
      image: datapillarImg,
      link: "https://datapillar.ai/"
    },
    {
      title: "Trezoro Loyalty",
      category: "Loyalty Marketing Platform",
      description: "Comprehensive loyalty program solution helping SMBs compete with larger merchants through formalized customer retention strategies.",
      image: trezoroImg,
      link: "https://www.trezoroloyalty.com/"
    },
    {
      title: "Causee",
      category: "Marketplace Platform",
      description: "Premium domain marketplace platform featuring expert-curated brandable domains to elevate business branding.",
      image: causeeImg,
      link: "https://www.causee.com/"
    },
    {
      title: "Yellow Founder",
      category: "Business Platform",
      description: "Innovative platform empowering entrepreneurs and founders with tools and resources to build successful businesses.",
      image: yellowfounderImg,
      link: "https://www.yellowfounder.com/"
    },
    {
      title: "Me+U Care",
      category: "Healthcare Platform",
      description: "HIPAA-secure digital communication platform delivering 40-60% engagement rates and reducing healthcare outreach costs by up to 70%.",
      image: meucareImg,
      link: "https://meucare.com/"
    },
    {
      title: "AtClose",
      category: "Enterprise Software",
      description: "Next-generation title and escrow production software serving 21,000+ users with 50,000+ monthly closings across 50 states.",
      image: atcloseImg,
      link: "https://www.atclose.com/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects showcasing my expertise in web development and design
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-primary">{project.category}</p>
                  <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
