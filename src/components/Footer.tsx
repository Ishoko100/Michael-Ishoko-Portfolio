import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">Michael Ishoko</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Michael Ishoko. Building exceptional web experiences.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#portfolio" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
