import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import avatar from "@/assets/avatar.jpg";
import { useMagnetic } from "@/hooks/use-effects";
import { Cherry } from "@/components/decor/Decor";

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

const Navbar = ({ onNavigate }: { onNavigate?: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const resumeRef = useMagnetic<HTMLAnchorElement>(0.35);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.section);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [location.pathname]);

  useLayoutEffect(() => {
    const update = () => {
      const b = btnRefs.current[active];
      if (b) setPill({ left: b.offsetLeft, width: b.offsetWidth });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const go = (section: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") navigate("/", { state: { scrollTo: section } });
    else onNavigate?.(section);
  };

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-full border border-primary/25 bg-brand-navy-deep/80 backdrop-blur-xl px-3 py-2 shadow-[0_10px_40px_-15px_hsl(var(--plum)/0.8)]">
          <Link to="/" onClick={() => go("home")} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-accent/70 group-hover:ring-primary transition">
              <img src={avatar} alt="Lee-Yandre Jacobs" className="w-full h-full object-cover" />
            </div>
            <span className="hidden sm:block font-display font-semibold text-sm leading-tight">
              Lee-Yandre <span className="italic text-primary">Jacobs</span>
            </span>
          </Link>

          <div className="relative hidden lg:flex items-center">
            <span
              className="absolute top-0 h-full rounded-full bg-primary/15 border border-primary/40 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]"
              style={{ left: pill.left, width: pill.width }}
              aria-hidden="true"
            />
            {navLinks.map((l) => (
              <button
                key={l.section}
                ref={(el) => (btnRefs.current[l.section] = el)}
                onClick={() => go(l.section)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === l.section ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={active === l.section ? "true" : undefined}
              >
                {l.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a ref={resumeRef} href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:inline-flex !py-2.5 !px-5">
              <FileText size={15} /> Resume
            </a>
            <button
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-accent text-accent-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-section-plum transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] ${
          isOpen ? "[clip-path:circle(150%_at_100%_0)]" : "[clip-path:circle(0%_at_100%_0)] pointer-events-none"
        }`}
      >
        <Cherry className="absolute bottom-10 right-8 animate-sway opacity-80" size={90} />
        <div className="h-full flex flex-col justify-center px-10 gap-3">
          {navLinks.map((l, i) => (
            <button
              key={l.section}
              onClick={() => go(l.section)}
              className={`text-left font-display text-4xl font-semibold transition-all duration-500 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              } ${active === l.section ? "italic text-primary" : "text-foreground"}`}
              style={{ transitionDelay: isOpen ? `${150 + i * 60}ms` : "0ms" }}
            >
              {l.name}
            </button>
          ))}
          <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 self-start">
            <FileText size={15} /> Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
