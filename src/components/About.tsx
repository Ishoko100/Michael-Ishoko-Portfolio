import { Code2, Zap, Smartphone, TrendingUp } from "lucide-react";

const About = () => {
  const technologies = [
    "HTML5 & CSS3",
    "JavaScript & TypeScript",
    "WordPress & Elementor",
    "React & Modern Frameworks",
    "SEO Optimization",
    "Responsive Design"
  ];

  const highlights = [
    { icon: Code2, title: "Clean Code", desc: "Semantic, maintainable code structure" },
    { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and efficiency" },
    { icon: Smartphone, title: "Mobile First", desc: "Perfect on all devices and screens" },
    { icon: TrendingUp, title: "SEO Ready", desc: "Built for search engine success" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About Me
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a freelance web developer with years of experience building custom websites 
              that combine beautiful design with powerful functionality. I specialize in WordPress 
              development, but I'm equally comfortable with modern frameworks and custom solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets me apart is my commitment to design accuracy, performance optimization, 
              and collaborative approach. I don't just build websites—I create digital experiences 
              that help businesses grow and succeed online.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies I Use</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border"
                >
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h4 className="font-semibold text-lg mb-2 text-card-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
