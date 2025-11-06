import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Michael delivered exactly what we needed - a fast, modern website that perfectly represents our brand. His attention to detail and professionalism made the entire process smooth.",
      image: "/placeholder.svg"
    },
    {
      name: "David Chen",
      role: "Owner, Chen's Restaurant",
      content: "Our new website has brought in more online orders than we ever imagined. Michael understood our needs and created a solution that works perfectly for our business.",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Working with Michael was fantastic. He's responsive, knowledgeable, and delivered ahead of schedule. Our landing pages now convert at twice the rate!",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients say about working together
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-muted overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
