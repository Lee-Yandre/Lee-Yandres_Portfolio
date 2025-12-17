import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

const navLinks = [
  { name: "Home", section: "home" },
  { name: "Projects", section: "projects" },
  { name: "Skills", section: "skills" },
  { name: "About", section: "about" },
  { name: "Contact", section: "contact" },
];

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger avatar animation after a short delay
    const timer = setTimeout(() => setHasAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section: string) => {
    onNavigate?.(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Avatar */}
          <button 
            onClick={() => handleNavigate("home")} 
            className="flex items-center gap-3 group"
          >
            {/* Animated Avatar */}
            <div className={`relative transition-all duration-1000 ${hasAnimated ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30 animate-avatar-bounce">
                <img 
                  src={avatar} 
                  alt="Lee-Yandre Jacobs Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow ring animation */}
              <div className={`absolute inset-0 rounded-full border-2 border-primary/50 animate-ping-slow ${hasAnimated ? 'opacity-100' : 'opacity-0'}`} />
              {/* Sparkle effects */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-sparkle ${hasAnimated ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }} />
              <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full animate-sparkle ${hasAnimated ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }} />
            </div>
            <span className="text-foreground font-display font-semibold hidden sm:block">
              Lee-Yandre Jacobs
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavigate(link.section)}
                className="nav-link font-medium"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="/Lee-YandreJacobs_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button text-primary-foreground text-sm flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleNavigate(link.section)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/Lee-YandreJacobs_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button text-primary-foreground text-center mt-2 flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
