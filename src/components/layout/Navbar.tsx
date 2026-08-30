import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import avatar from "@/assets/avatar.jpg";

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

const CV_URL =
  "https://capeitinitiative-my.sharepoint.com/personal/lee-yandre_jacobs_capaciti_org_za/Documents/Lee-YandreJacobs_CV.AI.pdf";

const navLinks = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Experience", section: "experience" },
  { name: "Skills", section: "skills" },
  { name: "Projects", section: "projects" },
  { name: "Certifications", section: "courses" },
  { name: "Contact", section: "contact" },
];

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      onNavigate?.(section);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`transition-all duration-700 ${
                hasAnimated ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border group-hover:border-primary/60 transition-colors duration-300 animate-avatar-bounce">
                <img src={avatar} alt="Lee-Yandre Jacobs" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="hidden sm:block leading-tight">
              <span className="block text-foreground font-display font-semibold text-sm">
                Lee-Yandre Jacobs
              </span>
              <span className="block text-muted-foreground text-[11px]">
                IT Professional
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavigate(link.section)}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button text-sm flex items-center gap-2"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/60 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleNavigate(link.section)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button text-center mt-2 flex items-center justify-center gap-2"
              >
                <FileText size={15} />
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
