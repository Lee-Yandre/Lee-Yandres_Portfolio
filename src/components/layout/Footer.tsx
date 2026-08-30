import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                LJ
              </div>
              <span className="font-display font-semibold text-foreground">
                Lee-Yandre Jacobs
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              IT Professional · Business Systems &amp; Workday Support
            </p>
            <p className="text-muted-foreground text-sm">
              Bridging business needs and reliable technology delivery.
            </p>
          </div>

          {/* Focus areas */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-foreground text-sm">Focus Areas</h4>
            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <li>Workday Systems Support</li>
              <li>Business &amp; Systems Analysis</li>
              <li>UAT &amp; SIT Testing</li>
              <li>IT Support &amp; Operations</li>
              <li>Process Mapping &amp; Documentation</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-foreground text-sm">Get in Touch</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/lee-jacobs-41294a328"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 border border-border/60 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Lee-Yandre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 border border-border/60 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:drecobs@gmail.com"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 border border-border/60 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to IT roles across support, analysis, and systems delivery.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Lee-Yandre Jacobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
