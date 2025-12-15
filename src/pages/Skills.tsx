import { Brain, Code, Database, Palette, Wrench, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "purple" as const,
    skills: ["Prompt Engineering", "NLP", "Sentiment Analysis", "LLMs", "Ethical AI", "AI Prototyping", "ML Basics", "Model Deployment"],
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
    skills: ["React.js", "Flask", "Hugging Face", "Chart.js", "Plotly"],
  },
  {
    title: "Database",
    icon: Database,
    color: "cyan" as const,
    skills: ["SQL", "MySQL", "MongoDB", "Database Design", "Query Optimization"],
  },
  {
    title: "Design & Prototyping",
    icon: Palette,
    color: "purple" as const,
    skills: ["Figma", "Axure RP", "UI/UX Design", "Wireframing", "Lucidchart (BPMN)"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "pink" as const,
    skills: ["Git", "Firebase", "Vercel", "Google AI Studio", "Hugging Face", "OpenAI API", "Microsoft Excel"],
  },
];

const allTechnologies = [
  "Python", "React", "AI/ML", "NLP", "Flask", "SQL", "JavaScript", "Hugging Face",
  "OpenAI", "Git", "Figma", "Java", "HTML/CSS", "Chart.js", "Vercel", "Prompt Engineering"
];

const Skills = () => {
  return (
    <Layout>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Technical Skills & Competencies" 
            subtitle="Modern tools and technologies for building AI-driven solutions"
          />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <GlowCard 
                  key={category.title} 
                  glowColor={category.color}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${category.color === "purple" ? "primary" : category.color === "pink" ? "secondary" : category.color === "orange" ? "accent" : "glow-cyan"}/20`}>
                      <IconComponent className={`w-5 h-5 text-${category.color === "purple" ? "primary" : category.color === "pink" ? "secondary" : category.color === "orange" ? "accent" : "glow-cyan"}`} />
                    </div>
                    <h3 className="text-lg font-display font-semibold gradient-text">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${category.color === "purple" ? "primary" : category.color === "pink" ? "secondary" : category.color === "orange" ? "accent" : "glow-cyan"}`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              );
            })}
          </div>

          {/* All Technologies Map */}
          <GlowCard className="text-center">
            <h3 className="font-mono text-sm text-primary mb-6">ALL_TECHNOLOGIES.MAP</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allTechnologies.map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </GlowCard>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
