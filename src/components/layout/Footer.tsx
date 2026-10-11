import { Linkedin, Github, Mail } from "lucide-react";
import { Cherry } from "@/components/decor/Decor";

const links = [
  { href: "https://www.linkedin.com/in/lee-jacobs-41294a328", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Lee-Yandre", label: "GitHub", icon: Github },
  { href: "mailto:drecobs@gmail.com", label: "Email", icon: Mail },
];

const Footer = () => (
  <footer className="relative bg-section-navy border-t border-primary/20">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <Cherry size={36} />
        <div>
          <p className="font-display font-semibold">Lee-Yandre <span className="italic text-primary">Jacobs</span></p>
          <p className="text-xs text-muted-foreground">IT Professional · Business Systems</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/30 text-muted-foreground hover:text-accent-foreground hover:bg-accent hover:border-accent transition-colors"
          >
            <Icon size={17} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Lee-Yandre Jacobs</p>
    </div>
  </footer>
);

export default Footer;
