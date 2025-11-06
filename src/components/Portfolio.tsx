import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Fashion Store",
      category: "WordPress & WooCommerce",
      description: "Full-featured online store with custom product filters, payment integration, and mobile-optimized checkout experience.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Corporate Business Website",
      category: "Custom WordPress Theme",
      description: "Professional corporate website with custom post types, advanced SEO optimization, and integrated blog platform.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Restaurant & Booking System",
      category: "WordPress & Custom Development",
      description: "Restaurant website with online reservation system, menu management, and integrated delivery ordering.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Real Estate Listings Platform",
      category: "WordPress & Custom Plugin",
      description: "Property listing website with advanced search filters, map integration, and lead generation forms.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "SaaS Landing Page",
      category: "React & Tailwind CSS",
      description: "Modern, high-converting landing page for software product with animated sections and lead capture.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Portfolio & Blog Site",
      category: "WordPress & Elementor",
      description: "Creative portfolio website for photographer with custom gallery, blog, and client testimonials.",
      image: "/placeholder.svg",
      link: "#"
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
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
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
