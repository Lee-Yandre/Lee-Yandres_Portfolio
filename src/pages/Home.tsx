import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRight, ExternalLink, Code, Database, Wrench, Globe, GraduationCap,
  Target, Award, Send, Mail, Linkedin, Github, FileText, Users, ClipboardCheck,
  Headphones, Workflow, LineChart, ShieldCheck, Layers, Briefcase, MapPin, Brain,
  BookOpen, Bot, MessageSquare, Cpu, Scale, Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundOrbs from "@/components/ui/BackgroundOrbs";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeader from "@/components/ui/SectionHeader";
import profilePhoto from "@/assets/profile-photo.jpg";
import { toast } from "@/hooks/use-toast";

const CV_URL =
  "https://capeitinitiative-my.sharepoint.com/personal/lee-yandre_jacobs_capaciti_org_za/Documents/Lee-YandreJacobs_CV.AI.pdf";

const highlights = [
  { label: "Workday Systems Support", icon: Layers },
  { label: "Business & Systems Analysis", icon: Workflow },
  { label: "UAT / SIT Testing", icon: ClipboardCheck },
  { label: "IT Support & Operations", icon: Headphones },
];

const experience = [
  {
    role: "Workday Business Systems Support",
    company: "FNB (First National Bank)",
    period: "Current",
    location: "South Africa",
    points: [
      "Support Workday business systems for HR and people operations, resolving configuration, access, and data-integrity queries raised by business users.",
      "Log, triage, and track incidents through to resolution, escalating complex cases and keeping stakeholders informed on progress.",
      "Validate system changes through UAT and SIT cycles, documenting test cases, evidence, and defects before releases go live.",
      "Maintain process documentation and knowledge-base articles so recurring issues are resolved faster and more consistently.",
      "Partner with business analysts, HR teams, and technical teams to translate operational requirements into clear system actions.",
    ],
  },
  {
    role: "IT & Digital Solutions Training",
    company: "CAPACITI Career Accelerator",
    period: "Completed",
    location: "Cape Town",
    points: [
      "Industry-aligned training across problem solving, agile delivery, professional communication, and real-world project execution.",
      "Built and demonstrated working digital solutions in cross-functional teams, covering requirements, build, testing, and handover.",
      "Completed structured technology upskilling including data fundamentals, programming, and modern development tooling.",
    ],
  },
];

const skillCategories = [
  {
    title: "Business Systems & ERP",
    icon: Layers,
    skills: ["Workday Support", "System Configuration Queries", "Access & Role Management", "Data Integrity Checks", "Release Support"],
  },
  {
    title: "Business Analysis",
    icon: Workflow,
    skills: ["Requirements Gathering", "Process Mapping", "Gap Analysis", "User Stories", "Stakeholder Engagement"],
  },
  {
    title: "Testing & Quality",
    icon: ClipboardCheck,
    skills: ["UAT Coordination", "SIT Execution", "Test Case Design", "Defect Logging & Tracking", "Regression Checks"],
  },
  {
    title: "IT Support & Operations",
    icon: Headphones,
    skills: ["Incident Management", "Troubleshooting", "Ticket Triage & Escalation", "User Training", "Knowledge Base Upkeep"],
  },
  {
    title: "Data & Reporting",
    icon: LineChart,
    skills: ["SQL", "Excel Reporting", "Data Validation", "Dashboards", "Report Interpretation"],
  },
  {
    title: "Technical Foundations",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "HTML/CSS", "Git & Version Control"],
  },
  {
    title: "Databases & Platforms",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase", "Cloud Fundamentals"],
  },
  {
    title: "Documentation & Tools",
    icon: Wrench,
    skills: ["Process Documentation", "Figma", "Axure RP", "Jira-style Workflows", "MS Office Suite"],
  },
];

const projects = [
  {
    title: "AInstein — Study Assistant Platform",
    description:
      "Full-stack web application built end to end: requirements definition, interface design, build, and deployment. Focused on usability, clear navigation, and reliable performance.",
    tech: ["Next.js", "React", "ShadCN/UI", "Tailwind CSS", "Firebase"],
    link: "https://studio--studio-5317777344-b8ab7.us-central1.hosted.app/",
    icon: Globe,
  },
  {
    title: "SentriLens — Feedback Analysis Dashboard",
    description:
      "Reporting dashboard that turns unstructured customer feedback into readable insight, with data validation and clean visualisations for business decision-making.",
    tech: ["Data Analysis", "Dashboards", "Reporting", "Visualisation"],
    link: "https://dashboardsent.vercel.app/",
    icon: LineChart,
  },
  {
    title: "ReadSmart SA — Learning Support Tool",
    description:
      "Prototype designed from user research and process mapping, including wireframes, interaction flows, and progress-tracking reporting for educators.",
    tech: ["Figma", "Wireframing", "User Research", "Prototyping"],
    link: "https://trick-high-79853905.figma.site/",
    icon: Workflow,
  },
  {
    title: "Content Assistant Web App",
    description:
      "Lightweight web tool built to a defined scope and tested against user acceptance criteria before release, demonstrating full delivery lifecycle ownership.",
    tech: ["Web Development", "UAT", "Deployment"],
    link: "https://ai-creative-writing-assistant.vercel.app/",
    icon: ShieldCheck,
  },
];

const certificates = [
  { title: "AI on Microsoft Azure", vendor: "Microsoft", icon: Cpu, link: "https://coursera.org/share/d1cfeb4e36b80b3505c95a25cc2d76b1", desc: "Cloud platform services and deployment" },
  { title: "Chatbots Without Programming", vendor: "IBM", icon: Bot, link: "https://coursera.org/share/f5ff3fe07995710ad8c0ef98cb7b6c9f", desc: "No-code automation for support workflows" },
  { title: "Responsible AI", vendor: "Google Cloud", icon: ShieldCheck, link: "https://coursera.org/share/6b5e73ea26f2230045748c64a572c6e7", desc: "Governance and ethical technology use" },
  { title: "Prompt Engineering", vendor: "Arizona State", icon: MessageSquare, link: "https://coursera.org/share/7d229f6d838596c59446bab22c77a23e", desc: "Practical productivity with AI tooling" },
  { title: "Generative AI for Everyone", vendor: "DeepLearning.AI", icon: Sparkles, link: "https://coursera.org/share/2e4d6d9b36ae57aacd70c1ee68f9a9b3", desc: "Business applications of emerging tech" },
  { title: "Python for Data Science", vendor: "IBM", icon: Code, link: "https://coursera.org/share/308c7bf14df4e3880bfbb1caf34047e8", desc: "Programming and data handling" },
  { title: "Trustworthy AI", vendor: "Johns Hopkins", icon: Scale, link: "https://coursera.org/share/9580c3db9d2903ecc106910ea6542402", desc: "Risk, bias, and accountability" },
  { title: "Introduction to AI", vendor: "IBM", icon: Brain, link: "https://coursera.org/share/8d7966479414235250d060da2b8494fc", desc: "Core concepts and use cases" },
  { title: "AI For Everyone", vendor: "DeepLearning.AI", icon: Users, link: "https://coursera.org/share/ae43b8544868d2d598c62c44001c707b", desc: "Technology strategy for business teams" },
  { title: "Generative AI with LLMs", vendor: "DeepLearning.AI", icon: BookOpen, link: "https://coursera.org/share/9a77b17e7507d91f4b4d1e51814a1b47", desc: "Applied language model fundamentals" },
];

const objectives = [
  "Grow within business systems and IT support, deepening Workday and enterprise platform expertise.",
  "Strengthen business analysis and testing capability across full delivery lifecycles.",
  "Take ownership of processes that improve system reliability and user experience for business teams.",
];

const Home = () => {
  const location = useLocation();
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    courses: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(["home"]));

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const ref = sectionRefs[state.scrollTo as keyof typeof sectionRefs];
      if (ref?.current) {
        setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast({ title: "Message sent", description: "Thank you for reaching out — I'll respond shortly." });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const sectionClass = (id: string) =>
    `transition-all duration-700 ${visibleSections.has(id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundOrbs />
      <Navbar onNavigate={handleNavigate} />

      {/* HERO */}
      <section
        ref={sectionRefs.home}
        id="home"
        className="min-h-[88vh] flex items-center px-6 py-20 pt-32"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/60 border border-border/70 mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-muted-foreground font-mono">
                South Africa · Available for IT roles
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 leading-[1.08] text-foreground">
              Lee-Yandre Jacobs
            </h1>

            <p className="text-xl md:text-2xl font-display font-semibold text-primary mb-5">
              IT Professional · Business Systems &amp; Workday Support
            </p>

            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
              A versatile IT professional supporting Workday business systems at FNB, with
              practical strength across business analysis, system testing, IT support, and
              process documentation. I connect business requirements to dependable technical
              outcomes — and I keep users moving.
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-9 max-w-xl">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-card/70 border border-border/60"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs md:text-sm text-foreground/90">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handleNavigate("experience")}
                className="glow-button flex items-center justify-center gap-2 group"
              >
                View Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-outline flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
              <button onClick={() => handleNavigate("contact")} className="glow-button-outline">
                Contact
              </button>
            </div>
          </div>

          {/* Profile card */}
          <GlowCard className="p-5 animate-float">
            <div className="w-full aspect-[4/5] rounded-lg overflow-hidden border border-border/70 mb-4">
              <img
                src={profilePhoto}
                alt="Portrait of Lee-Yandre Jacobs, IT professional"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="w-4 h-4 text-primary shrink-0" />
                <span>Workday Business Systems Support, FNB</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                <span>CAPACITI Career Accelerator graduate</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span>10+ vendor-recognised certifications</span>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* ABOUT */}
      <section
        ref={sectionRefs.about}
        id="about"
        className={`px-6 py-16 border-t border-border/50 ${sectionClass("about")}`}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="About"
            title="Business-minded, systems-focused"
            subtitle="Bridging the gap between what business teams need and how systems actually behave."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <GlowCard className="lg:col-span-2 p-6 space-y-4">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                I'm an IT professional working in business systems support, currently supporting
                <span className="text-foreground font-medium"> Workday</span> at
                <span className="text-foreground font-medium"> FNB</span>. My day-to-day involves
                investigating system and data issues raised by business users, resolving them
                against agreed service expectations, and escalating clearly when a change needs
                deeper technical or configuration input.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Alongside support, I contribute to delivery: gathering requirements, mapping
                processes, preparing and executing <span className="text-foreground font-medium">UAT and SIT</span>
                {" "}test cases, logging defects, and documenting outcomes so releases land safely. That
                mix of analysis, testing, and hands-on support is where I add the most value.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                My foundation comes from the <span className="text-foreground font-medium">CAPACITI Career
                Accelerator</span>, where I trained in structured problem solving, agile teamwork, and
                end-to-end project delivery. I've since built practical web and reporting tools,
                which keeps me comfortable talking to both business stakeholders and technical teams.
              </p>
            </GlowCard>

            <div className="space-y-4">
              <GlowCard className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-display font-semibold text-foreground">
                    Career Objectives
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {objectives.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>

              <GlowCard className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-display font-semibold text-foreground">
                    How I Work
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Clear written communication and dependable follow-through
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Document once, reuse often — fewer repeat incidents
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                    Comfortable moving between business and technical conversations
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        ref={sectionRefs.experience}
        id="experience"
        className={`px-6 py-16 border-t border-border/50 ${sectionClass("experience")}`}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Experience"
            title="Professional Experience"
            subtitle="Hands-on systems support, analysis, and testing in an enterprise environment."
          />

          <div className="space-y-4">
            {experience.map((job) => (
              <GlowCard key={job.role} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground">{job.role}</h3>
                    <p className="text-primary text-sm font-medium">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono shrink-0">
                    <span className="px-2 py-1 rounded bg-muted border border-border/60">{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        ref={sectionRefs.skills}
        id="skills"
        className={`px-6 py-16 border-t border-border/50 ${sectionClass("skills")}`}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Skills"
            title="Core Competencies"
            subtitle="A broad IT skill set spanning business systems, analysis, testing, support, and data."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <GlowCard key={category.title} className="p-4">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-md flex items-center justify-center bg-primary/12 border border-primary/25">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-display font-semibold text-foreground leading-tight">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary/70 mt-1.5 shrink-0" />
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

      {/* PROJECTS */}
      <section
        ref={sectionRefs.projects}
        id="projects"
        className={`px-6 py-16 border-t border-border/50 ${sectionClass("projects")}`}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Projects"
            title="Technology Projects"
            subtitle="Delivery work covering requirements, design, build, testing, and deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <GlowCard key={project.title} className="flex flex-col p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/12 border border-primary/25 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-display font-semibold text-foreground leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted text-muted-foreground border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-button-outline text-sm py-2 flex items-center justify-center gap-2 mt-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Project
                  </a>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        ref={sectionRefs.courses}
        id="courses"
        className={`px-6 py-16 border-t border-border/50 ${sectionClass("courses")}`}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Certifications"
            title="Training & Credentials"
            subtitle="Vendor-recognised certifications from Microsoft, IBM, Google Cloud, and leading universities."
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 p-4 rounded-xl bg-card/70 border border-border/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/12 border border-primary/25 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-foreground">
                  CAPACITI Technology Bootcamp
                </p>
                <p className="text-xs text-muted-foreground">
                  8-week intensive programme — fundamentals, delivery practice, and applied projects
                </p>
              </div>
            </div>
            <a
              href="https://coursera.org/share/6f9de1606939e788ae7ab0b8789b5a42"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1.5 shrink-0"
            >
              <Award className="w-3.5 h-3.5" />
              View credential
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              return (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 rounded-lg bg-card/60 hover:bg-card border border-border/60 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-primary/80 group-hover:text-primary transition-colors" />
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </div>
                  <p className="text-xs font-medium text-foreground leading-snug">{cert.title}</p>
                  <p className="text-[11px] text-primary/80 mt-0.5">{cert.vendor}</p>
                  <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">{cert.desc}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={sectionRefs.contact}
        id="contact"
        className={`px-6 py-16 border-t border-border/50 ${sectionClass("contact")}`}
      >
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk"
            subtitle="Open to IT opportunities in business systems, support, analysis, and testing."
          />

          <GlowCard className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <a
                href="mailto:drecobs@gmail.com"
                className="flex flex-col items-center gap-1.5 p-3.5 rounded-lg bg-muted/40 hover:bg-muted/70 border border-border/60 hover:border-primary/40 transition-all group"
              >
                <div className="w-9 h-9 rounded-full bg-primary/12 border border-primary/25 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-xs font-medium">Email</span>
                <span className="text-muted-foreground text-[11px]">drecobs@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/lee-jacobs-41294a328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-3.5 rounded-lg bg-muted/40 hover:bg-muted/70 border border-border/60 hover:border-primary/40 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-primary/12 border border-primary/25 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-xs font-medium">LinkedIn</span>
                <span className="text-muted-foreground text-[11px]">Connect with me</span>
              </a>
              <a
                href="https://github.com/Lee-Yandre"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 p-3.5 rounded-lg bg-muted/40 hover:bg-muted/70 border border-border/60 hover:border-primary/40 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-primary/12 border border-primary/25 flex items-center justify-center">
                  <Github className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-xs font-medium">GitHub</span>
                <span className="text-muted-foreground text-[11px]">View my work</span>
              </a>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-border/60" />
              <span className="text-muted-foreground text-[11px] font-mono">or send a message</span>
              <div className="flex-1 h-px bg-border/60" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  required
                  aria-label="Your name"
                  className="w-full px-3 py-2.5 rounded-lg bg-muted/50 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  required
                  aria-label="Your email"
                  className="w-full px-3 py-2.5 rounded-lg bg-muted/50 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                />
              </div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="How can I help?"
                required
                rows={4}
                aria-label="Your message"
                className="w-full px-3 py-2.5 rounded-lg bg-muted/50 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-button text-sm py-2.5 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : <><Send className="w-3.5 h-3.5" /> Send message</>}
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
