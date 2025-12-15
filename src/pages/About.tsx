import { GraduationCap, Rocket, Target, Award, Sparkles, Code } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const milestones = [
  {
    icon: GraduationCap,
    title: "CAPACITI Career Accelerator",
    description: "Intensive industry-aligned training in problem-solving, agile teamwork, and real-world project delivery",
    color: "purple",
  },
  {
    icon: Award,
    title: "AI Bootcamp V2 (8 Weeks)",
    description: "AI fundamentals, ML, NLP, prompt engineering, ethical AI, and 7 deployed prototypes",
    color: "pink",
  },
  {
    icon: Rocket,
    title: "Tech Solutions Development",
    description: "Building AI-driven tools and prototypes: SentriLens, ReadSmart SA, Resume Builder, and more",
    color: "orange",
  },
  {
    icon: Target,
    title: "Future Goals",
    description: "Growing into Tech Solutions Developer role, delivering impactful real-world solutions",
    color: "cyan",
  },
];

const techStack = [
  "Python", "JavaScript", "React", "Java", "SQL", "HTML/CSS", "Flask", "AI/ML"
];

const objectives = [
  "Develop innovative tech solutions for real-world challenges",
  "Continuously expand technical expertise and industry knowledge",
  "Contribute to projects that optimize processes and improve efficiency",
];

const About = () => {
  return (
    <Layout>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="About Me" 
            subtitle="Journey from foundations to AI innovation"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Profile Card */}
            <GlowCard className="lg:row-span-2">
              <div className="text-center mb-6">
                {/* Avatar placeholder */}
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 flex items-center justify-center mb-4 border-2 border-primary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <Sparkles className="w-12 h-12 text-primary relative z-10" />
                </div>
                <h3 className="text-2xl font-display font-bold gradient-text">
                  Lee-Yandre Jacobs
                </h3>
              </div>

              {/* Quick Info */}
              <div className="space-y-4 mb-6">
                <div className="glow-card bg-muted/30 p-4">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Program</p>
                      <p className="text-sm font-medium text-foreground">CAPACITI Accelerator</p>
                    </div>
                  </div>
                </div>
                <div className="glow-card bg-muted/30 p-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Bootcamp</p>
                      <p className="text-sm font-medium text-foreground">AI V2 (8 Weeks)</p>
                    </div>
                  </div>
                </div>
                <div className="glow-card bg-muted/30 p-4">
                  <div className="flex items-center gap-3">
                    <Rocket className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Focus</p>
                      <p className="text-sm font-medium text-foreground">AI & Prototyping</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <GlowCard className="bg-muted/30">
                <h4 className="font-mono text-sm text-primary mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </GlowCard>

            {/* Biography */}
            <GlowCard>
              <h3 className="text-xl font-display font-semibold gradient-text mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Professional Biography
              </h3>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  I am an emerging tech professional with hands-on experience in AI tools, prototyping, and building practical digital solutions. Through the CAPACITI Career Accelerator Program, I completed intensive, industry-aligned training focused on problem-solving, agile teamwork, and real-world project delivery.
                </p>
                <p>
                  I completed a 2-month AI Bootcamp (AI V2 – 8 Weeks) covering AI fundamentals, ethics, machine learning basics, NLP, prompt engineering, and functional AI prototypes. This strengthened my ability to translate AI concepts into real-world applications and collaborate effectively in agile teams.
                </p>
                <p>
                  With a strong foundation in programming languages and expertise in process mapping, prototyping, and IT operations support, I bring both technical execution and strategic thinking to every project.
                </p>
              </div>
            </GlowCard>

            {/* Milestones */}
            <div className="space-y-4">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <GlowCard 
                    key={milestone.title} 
                    glowColor={milestone.color as "purple" | "pink" | "orange" | "cyan"}
                    className="p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                          {milestone.title}
                        </h4>
                        <p className="text-muted-foreground text-xs">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>

          {/* Career Objectives */}
          <GlowCard className="mt-8">
            <h3 className="text-xl font-display font-semibold gradient-text mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-secondary" />
              Career Objectives
            </h3>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default About;
