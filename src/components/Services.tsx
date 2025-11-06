import { Globe, Wrench, Rocket, Shield, Search, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom WordPress Development",
      description: "Tailored WordPress websites built from scratch with custom themes and plugins to match your exact requirements."
    },
    {
      icon: Palette,
      title: "Website Redesign & Optimization",
      description: "Transform your existing website with modern design, improved user experience, and better performance."
    },
    {
      icon: Rocket,
      title: "Landing Page Design",
      description: "High-converting landing pages optimized for lead generation and customer acquisition."
    },
    {
      icon: Wrench,
      title: "Maintenance & Security",
      description: "Regular updates, security monitoring, backups, and technical support to keep your site running smoothly."
    },
    {
      icon: Search,
      title: "SEO-Friendly Development",
      description: "Websites built with SEO best practices, clean code, and optimized structure for better search rankings."
    },
    {
      icon: Shield,
      title: "E-Commerce Solutions",
      description: "Complete online store setup with WooCommerce or custom platforms, payment integration, and inventory management."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Services I Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
