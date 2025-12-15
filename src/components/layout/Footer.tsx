import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-display font-bold">
                LJ
              </div>
              <span className="font-display font-semibold text-foreground">
                Neo-Tech Creative
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Tech Solutions Developer & Problem Solver
            </p>
            <p className="text-muted-foreground text-sm">
              Building AI-driven solutions for real-world impact
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground gradient-text">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Projects
              </Link>
              <Link to="/skills" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Skills
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold gradient-text">
              Connect With Me
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/lee-jacobs-41294a328"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Lee-Yandre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-muted/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:drecobs@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-muted/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-primary">
              Open to opportunities in AI & Tech Solutions
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Lee-Yandre Jacobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
