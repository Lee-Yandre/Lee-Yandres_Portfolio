import { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, ExternalLink, Brain, Code, Database, Palette, Wrench, Globe, GraduationCap, Rocket, Target, Award, Send, Mail, Linkedin, Github, Download, Wand2, Lightbulb, TrendingUp, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundOrbs from "@/components/ui/BackgroundOrbs";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeader from "@/components/ui/SectionHeader";
import profilePhoto from "@/assets/profile-photo.jpg";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

// Get time of day helper
const getTimeOfDay = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
};

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
  const [aiGreeting, setAiGreeting] = useState<string>("");
  const [greetingLoading, setGreetingLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["home"]));
  const [skillInsights, setSkillInsights] = useState<{insight: string; type: string}[]>([]);
  const [insightsLoading, setInsightsLoading] = useState(true);

  // Fetch AI greeting on mount
  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("ai-greeting", {
          body: { timeOfDay: getTimeOfDay() }
        });
        if (error) throw error;
        setAiGreeting(data.greeting);
      } catch (err) {
        console.error("Failed to fetch AI greeting:", err);
        setAiGreeting("Welcome! Explore my work in AI and creative technology.");
      } finally {
        setGreetingLoading(false);
      }
    };
    fetchGreeting();
  }, []);

  // Fetch AI skill insights
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const allSkills = skillCategories.flatMap(c => c.skills);
        const { data, error } = await supabase.functions.invoke("skill-insights", {
          body: { skills: allSkills, projects }
        });
        if (error) throw error;
        setSkillInsights(data.insights || []);
      } catch (err) {
        console.error("Failed to fetch skill insights:", err);
        setSkillInsights([
          { insight: "Strong AI/ML foundation positions you well for emerging roles", type: "strength" },
          { insight: "Your NLP projects align with current industry trends", type: "trend" }
        ]);
      } finally {
        setInsightsLoading(false);
      }
    };
    fetchInsights();
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

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

  const sectionClass = (id: string) =>
    `transition-all duration-700 ${visibleSections.has(id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

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

          {/* AI Greeting */}
          <div className="mb-8 min-h-[3rem]">
            {greetingLoading ? (
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Wand2 className="w-4 h-4 animate-pulse" />
                <span className="text-sm animate-pulse">Crafting a greeting...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 animate-fade-in">
                <Wand2 className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm text-foreground/90 italic">{aiGreeting}</p>
              </div>
            )}
          </div>

          <div className="mt-8 font-mono text-sm text-muted-foreground/50">
            <span className="text-primary">const</span> passion = <span className="text-secondary">"innovation"</span>;
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section ref={sectionRefs.projects} id="projects" className={`px-6 py-20 border-t border-border/10 ${sectionClass("projects")}`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Featured Projects" subtitle="Practical solutions built with modern technologies" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <GlowCard key={project.title} glowColor={project.color} className="flex flex-col p-4">
                  {/* Project Icon Header */}
                  <div className="h-20 rounded-lg bg-gradient-to-br from-muted to-muted/50 mb-3 overflow-hidden relative group flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
                    <IconComponent className="w-10 h-10 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground border border-border/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="glow-button text-primary-foreground text-center text-xs py-2 flex items-center justify-center gap-2 mt-auto">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Project
                  </a>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section ref={sectionRefs.skills} id="skills" className={`px-6 py-16 border-t border-border/10 ${sectionClass("skills")}`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Technical Skills" subtitle="Modern tools and technologies for building AI-driven solutions" />

          {/* AI Skill Insights */}
          <div className="mb-6">
            {insightsLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground justify-center py-3">
                <Lightbulb className="w-4 h-4 animate-pulse" />
                <span className="text-sm animate-pulse">Analyzing your skillset...</span>
              </div>
            ) : skillInsights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {skillInsights.map((item, idx) => {
                  const Icon = item.type === "strength" ? Zap : item.type === "trend" ? TrendingUp : Lightbulb;
                  const colors = {
                    strength: "from-primary/20 to-primary/5 border-primary/30",
                    trend: "from-secondary/20 to-secondary/5 border-secondary/30",
                    opportunity: "from-accent/20 to-accent/5 border-accent/30"
                  };
                  return (
                    <div key={idx} className={`flex items-start gap-2 p-3 rounded-xl bg-gradient-to-br ${colors[item.type as keyof typeof colors] || colors.opportunity} border animate-fade-in`} style={{ animationDelay: `${idx * 100}ms` }}>
                      <Icon className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                      <p className="text-xs text-foreground/90">{item.insight}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <GlowCard key={category.title} glowColor={category.color} className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center bg-primary/20">
                      <IconComponent className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <h3 className="text-sm font-display font-semibold gradient-text">{category.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary" />
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
      <section ref={sectionRefs.about} id="about" className={`px-6 py-16 border-t border-border/10 ${sectionClass("about")}`}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="About Me" subtitle="Journey from foundations to AI innovation" />

          {/* Main Profile Card */}
          <GlowCard className="mb-4 p-4">
            <div className="flex flex-col lg:flex-row gap-5 items-start">
              {/* Profile Image */}
              <div className="shrink-0 mx-auto lg:mx-0">
                <div className="w-28 h-28 rounded-xl border-2 border-primary/50 overflow-hidden shadow-md shadow-primary/20">
                  <img src={profilePhoto} alt="Lee-Yandre Jacobs" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Bio Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-display font-bold gradient-text text-center lg:text-left">Lee-Yandre Jacobs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I am an emerging tech professional with hands-on experience in AI tools, prototyping, and building practical digital solutions. Through the <span className="text-primary font-medium">CAPACITI Career Accelerator Program</span>, I completed intensive, industry-aligned training focused on problem-solving, agile teamwork, and real-world project delivery.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I completed a <span className="text-secondary font-medium">2-month AI Bootcamp (AI V2 – 8 Weeks)</span> covering AI fundamentals, ethics, machine learning basics, NLP, prompt engineering, and functional AI prototypes.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With a strong foundation in programming, process mapping, prototyping, and IT operations support, I bring both technical execution and strategic thinking to every project.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* Career Objectives & Milestones Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Career Objectives */}
            <GlowCard glowColor="purple" className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md flex items-center justify-center bg-primary/20">
                  <Target className="w-3.5 h-3.5 text-primary" />
                </div>
                <h3 className="text-sm font-display font-semibold gradient-text">Career Objectives</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  Develop innovative tech solutions for real-world challenges
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  Continuously expand technical expertise in AI and cloud technologies
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  Grow into a Tech Solutions Developer role delivering impactful systems
                </li>
              </ul>
            </GlowCard>

            {/* Journey Milestones */}
            <GlowCard glowColor="pink" className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md flex items-center justify-center bg-secondary/20">
                  <Rocket className="w-3.5 h-3.5 text-secondary" />
                </div>
                <h3 className="text-sm font-display font-semibold gradient-text">My Journey</h3>
              </div>
              <div className="space-y-2">
                {milestones.map((milestone) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div key={milestone.title} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded bg-muted flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium text-xs">{milestone.title}</p>
                        <p className="text-muted-foreground text-[10px]">{milestone.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={sectionRefs.contact} id="contact" className={`px-6 py-16 border-t border-border/10 ${sectionClass("contact")}`}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Let's Connect" subtitle="Have a project in mind or want to collaborate?" />

          <GlowCard className="overflow-hidden p-4">
            {/* Contact Links Row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <a href="mailto:drecobs@gmail.com" className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/20 hover:border-primary/30 transition-all group">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-xs font-medium">Email</span>
                <span className="text-muted-foreground text-[10px]">drecobs@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/lee-jacobs-41294a328" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/20 hover:border-secondary/30 transition-all group">
                <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Linkedin className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-foreground text-xs font-medium">LinkedIn</span>
                <span className="text-muted-foreground text-[10px]">Connect with me</span>
              </a>
              <a href="https://github.com/Lee-Yandre" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/20 hover:border-accent/30 transition-all group">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Github className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground text-xs font-medium">GitHub</span>
                <span className="text-muted-foreground text-[10px]">View my code</span>
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-border/30" />
              <span className="text-muted-foreground text-[10px] font-mono">or send a message</span>
              <div className="flex-1 h-px bg-border/30" />
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/30 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/30 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="Your message..."
                required
                rows={3}
                className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border/30 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              <button type="submit" disabled={isSubmitting} className="w-full glow-button text-primary-foreground text-sm py-2 flex items-center justify-center gap-2 disabled:opacity-50">
                {isSubmitting ? "Sending..." : <><Send className="w-3.5 h-3.5" /> Send Message</>}
              </button>
            </form>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
