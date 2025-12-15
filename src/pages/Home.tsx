import { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, ExternalLink, Brain, Code, Database, Palette, Wrench, Globe, GraduationCap, Rocket, Target, Award, Send, Mail, Linkedin, Github, Download } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundOrbs from "@/components/ui/BackgroundOrbs";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeader from "@/components/ui/SectionHeader";
import profilePhoto from "@/assets/profile-photo.jpg";
import { toast } from "@/hooks/use-toast";

// Projects data
const projects = [
  {
    title: "AInstein",
    description: "A full-stack, AI-powered personal study assistant leveraging Google Gemini models to help users understand complex topics and practice in real-time.",
    tech: ["Google Gemini", "Firebase", "JavaScript"],
    link: "https://studio--studio-5317777344-b8ab7.us-central1.hosted.app/",
    icon: Brain,
    color: "purple" as const,
  },
  {
    title: "SentriLens",
    description: "AI-powered sentiment analysis dashboard using NLP to analyze emotional tone and polarity with clean visualizations.",
    tech: ["NLP", "Hugging Face", "Data Viz"],
    link: "https://dashboardsent.vercel.app/",
    icon: Sparkles,
    color: "pink" as const,
  },
  {
    title: "ReadSmart SA",
    description: "AI-driven reading companion for early learners with word highlighting, text-to-speech, and comprehension quizzes.",
    tech: ["Figma", "AI", "Education"],
    link: "https://trick-high-79853905.figma.site/",
    icon: GraduationCap,
    color: "orange" as const,
  },
  {
    title: "AI Creative Writing",
    description: "AI-powered content creator for crafting original poems and short stories using advanced language models.",
    tech: ["AI", "NLP", "Creative"],
    link: "https://ai-creative-writing-assistant.vercel.app/",
    icon: Palette,
    color: "cyan" as const,
  },
];

// Skills data
const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "purple" as const,
    skills: ["Prompt Engineering", "NLP", "Sentiment Analysis", "LLMs", "Ethical AI", "AI Prototyping"],
  },
  {
    title: "Languages",
    icon: Code,
    color: "pink" as const,
    skills: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Globe,
    color: "orange" as const,
    skills: ["React.js", "Flask", "Hugging Face", "Chart.js"],
  },
  {
    title: "Database",
    icon: Database,
    color: "cyan" as const,
    skills: ["SQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Design & Prototyping",
    icon: Palette,
    color: "purple" as const,
    skills: ["Figma", "Axure RP", "UI/UX Design", "Wireframing"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "pink" as const,
    skills: ["Git", "Firebase", "Vercel", "Google AI Studio"],
  },
];

const milestones = [
  { icon: GraduationCap, title: "CAPACITI Career Accelerator", description: "Industry-aligned training in problem-solving and agile teamwork" },
  { icon: Award, title: "AI Bootcamp V2 (8 Weeks)", description: "AI fundamentals, ML, NLP, and 7 deployed prototypes" },
  { icon: Rocket, title: "Tech Solutions Development", description: "Building AI-driven tools: SentriLens, ReadSmart SA, and more" },
  { icon: Target, title: "Future Goals", description: "Growing into Tech Solutions Developer role" },
];

const Home = () => {
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNavigate = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundOrbs />
      <Navbar onNavigate={handleNavigate} />

      {/* HERO SECTION */}
      <section ref={sectionRefs.home} id="home" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/30 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">AI-Powered Solutions Developer</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Lee-Yandre</span>
            <br />
            <span className="gradient-text">Jacobs</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-display text-primary">Creative Technologist</span> who bridges AI, design, and development to build meaningful digital solutions.
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            With hands-on experience in AI prototyping, sentiment analysis, and full-stack tools, I turn ideas into functional, user-centered applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => handleNavigate("projects")} className="glow-button text-primary-foreground flex items-center gap-2 group">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => handleNavigate("contact")} className="glow-button-outline">
              Contact Me
            </button>
          </div>

          <div className="mt-16 font-mono text-sm text-muted-foreground/50">
            <span className="text-primary">const</span> passion = <span className="text-secondary">"innovation"</span>;
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section ref={sectionRefs.projects} id="projects" className="px-6 py-20 border-t border-border/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Featured Projects" subtitle="Practical solutions built with modern technologies" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <GlowCard key={project.title} glowColor={project.color} className="flex flex-col">
                  {/* Project Icon/Image Header */}
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-4 overflow-hidden relative group flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
                    <IconComponent className="w-16 h-16 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground border border-border/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="glow-button text-primary-foreground text-center text-sm flex items-center justify-center gap-2 mt-auto">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section ref={sectionRefs.skills} id="skills" className="px-6 py-20 border-t border-border/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Technical Skills" subtitle="Modern tools and technologies for building AI-driven solutions" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <GlowCard key={category.title} glowColor={category.color}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/20">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold gradient-text">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section ref={sectionRefs.about} id="about" className="px-6 py-20 border-t border-border/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="About Me" subtitle="Journey from foundations to AI innovation" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Profile Card */}
            <GlowCard className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-primary/50 overflow-hidden shadow-lg shadow-primary/20">
                <img src={profilePhoto} alt="Lee-Yandre Jacobs" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-display font-bold gradient-text mb-4">Lee-Yandre Jacobs</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I am an emerging tech professional with hands-on experience in AI tools, prototyping, and building practical digital solutions. Through the CAPACITI Career Accelerator Program, I completed intensive training focused on problem-solving, agile teamwork, and real-world project delivery.
              </p>
            </GlowCard>

            {/* Milestones */}
            <div className="space-y-4">
              {milestones.map((milestone) => {
                const IconComponent = milestone.icon;
                return (
                  <GlowCard key={milestone.title} className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground text-sm mb-1">{milestone.title}</h4>
                        <p className="text-muted-foreground text-xs">{milestone.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={sectionRefs.contact} id="contact" className="px-6 py-20 border-t border-border/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Let's Connect" subtitle="Have a project in mind or want to discuss opportunities?" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <GlowCard glowColor="purple">
              <h3 className="font-mono text-sm text-primary mb-6">{">"} SEND_MESSAGE()</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">name: string</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">email: string</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">message: string</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Your message..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full glow-button text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-50">
                  {isSubmitting ? "Processing..." : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            </GlowCard>

            {/* Contact Info */}
            <div className="space-y-6">
              <GlowCard glowColor="pink">
                <h3 className="font-mono text-sm text-secondary mb-6">{">"} GET_IN_TOUCH()</h3>
                <div className="space-y-4">
                  <a href="mailto:drecobs@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">email</p>
                      <p className="text-foreground font-medium">drecobs@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/lee-jacobs-41294a328" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">linkedin</p>
                      <p className="text-foreground font-medium">linkedin.com/in/lee-yandre-jacobs</p>
                    </div>
                  </a>
                  <a href="https://github.com/Lee-Yandre" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">github</p>
                      <p className="text-foreground font-medium">github.com/Lee-Yandre</p>
                    </div>
                  </a>
                </div>
              </GlowCard>

              <GlowCard glowColor="orange">
                <h3 className="font-mono text-sm text-accent mb-4">{">"} STATUS: <span className="text-green-400">AVAILABLE</span></h3>
                <p className="text-muted-foreground text-sm mb-4">I'm currently seeking new opportunities in tech solutions development.</p>
                <button className="w-full glow-button-outline flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
