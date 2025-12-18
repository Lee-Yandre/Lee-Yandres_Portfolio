import { Award, ExternalLink, GraduationCap, Brain, Bot, Shield, MessageSquare, Sparkles, Code, Scale, Cpu, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundOrbs from "@/components/ui/BackgroundOrbs";
import GlowCard from "@/components/ui/GlowCard";
import SectionHeader from "@/components/ui/SectionHeader";

const bootcampBadgeUrl = "https://coursera.org/share/6f9de1606939e788ae7ab0b8789b5a42";

const certificates = [
  {
    title: "Artificial Intelligence on Microsoft Azure",
    vendor: "Microsoft",
    icon: Cpu,
    link: "https://coursera.org/share/d1cfeb4e36b80b3505c95a25cc2d76b1",
    color: "purple" as const,
  },
  {
    title: "Building AI Powered Chatbots Without Programming",
    vendor: "IBM",
    icon: Bot,
    link: "https://coursera.org/share/f5ff3fe07995710ad8c0ef98cb7b6c9f",
    color: "pink" as const,
  },
  {
    title: "Introduction to Responsible AI",
    vendor: "Google Cloud",
    icon: Shield,
    link: "https://coursera.org/share/6b5e73ea26f2230045748c64a572c6e7",
    color: "orange" as const,
  },
  {
    title: "AI Foundations: Prompt Engineering with ChatGPT",
    vendor: "Arizona State University",
    icon: MessageSquare,
    link: "https://coursera.org/share/7d229f6d838596c59446bab22c77a23e",
    color: "cyan" as const,
  },
  {
    title: "Generative AI for Everyone",
    vendor: "DeepLearning.AI",
    icon: Sparkles,
    link: "https://coursera.org/share/2e4d6d9b36ae57aacd70c1ee68f9a9b3",
    color: "purple" as const,
  },
  {
    title: "Python for Data Science, AI & Development",
    vendor: "IBM",
    icon: Code,
    link: "https://coursera.org/share/308c7bf14df4e3880bfbb1caf34047e8",
    color: "pink" as const,
  },
  {
    title: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
    vendor: "Johns Hopkins University",
    icon: Scale,
    link: "https://coursera.org/share/9580c3db9d2903ecc106910ea6542402",
    color: "orange" as const,
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    vendor: "IBM",
    icon: Brain,
    link: "https://coursera.org/share/8d7966479414235250d060da2b8494fc",
    color: "cyan" as const,
  },
  {
    title: "AI For Everyone",
    vendor: "DeepLearning.AI",
    icon: Users,
    link: "https://coursera.org/share/ae43b8544868d2d598c62c44001c707b",
    color: "purple" as const,
  },
  {
    title: "Generative AI with Large Language Models",
    vendor: "DeepLearning.AI",
    icon: BookOpen,
    link: "https://coursera.org/share/9a77b17e7507d91f4b4d1e51814a1b47",
    color: "pink" as const,
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundOrbs />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/30 mb-6 animate-float">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">Courses & Achievements</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
            <span className="gradient-text">AI Certifications</span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my completion of an intensive AI bootcamp and globally recognized Coursera certifications.
          </p>
        </div>
      </section>

      {/* AI Bootcamp Section */}
      <section className="px-6 py-12 border-t border-border/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="AI Bootcamp Completion" subtitle="8-Week Intensive Program" />

          <GlowCard glowColor="purple" className="p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border border-primary/30">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-display font-bold gradient-text text-center md:text-left">
                  AI Bootcamp V2 - CAPACITI
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This bootcamp is designed to take complete beginners or early-career tech professionals through the core concepts of Artificial Intelligence, with an emphasis on hands-on learning, collaboration, and project delivery.
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Agile-based weekly sprints with real-world learning tasks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    Live team sessions, daily standups, and mentorship
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Individual and group projects (build functional tools!)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Career-readiness activities: resume, portfolio, and demo coaching
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    Globally recognized Coursera certification pathways
                  </li>
                </ul>

                <a
                  href={bootcampBadgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button text-primary-foreground inline-flex items-center gap-2 mt-4"
                >
                  <Award className="w-4 h-4" />
                  View Bootcamp Badge
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="px-6 py-12 border-t border-border/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Coursera Certifications" subtitle="AI courses completed as part of the bootcamp" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <GlowCard key={cert.title} glowColor={cert.color} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/20">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-display font-semibold text-foreground mb-1 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">{cert.vendor}</p>

                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Certificate
                      </a>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
