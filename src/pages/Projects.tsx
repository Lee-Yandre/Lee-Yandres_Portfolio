import { ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";

const projects = [
  {
    title: "AInstein",
    description: "AInstein is a full-stack, AI-powered personal study assistant leveraging Google Gemini models to help users understand complex topics, visualize information, and practice concepts in real-time.",
    tech: ["Google Gemini", "Firebase Database", "Firebase Auth", "Firebase Hosting", "JavaScript"],
    link: "https://studio--studio-5317777344-b8ab7.us-central1.hosted.app/",
    featured: true,
    color: "purple" as const,
  },
  {
    title: "SentriLens",
    description: "AI-powered sentiment analysis dashboard using NLP to analyze emotional tone and polarity, presented through a clean and modern interface.",
    tech: ["NLP", "Hugging Face", "JavaScript", "Data Visualization"],
    link: "https://dashboardsent.vercel.app/",
    color: "pink" as const,
  },
  {
    title: "ReadSmart SA",
    description: "AI-driven reading companion designed to support early learners in South Africa. Highlights difficult words, provides pronunciation via text-to-speech, generates comprehension quizzes, and tracks learner progress.",
    tech: ["Figma", "AI", "NLP", "Education", "Prototype"],
    link: "https://trick-high-79853905.figma.site/",
    color: "orange" as const,
  },
  {
    title: "AI Creative Writing Assistant",
    description: "AI-powered generative content creator for crafting original poems and short stories using advanced language models.",
    tech: ["AI", "Creative Writing", "NLP", "Storytelling"],
    link: "https://ai-creative-writing-assistant.vercel.app/",
    color: "cyan" as const,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="Practical solutions built with modern technologies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <GlowCard 
                key={project.title} 
                glowColor={project.color}
                className={`flex flex-col ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-4 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-lg text-foreground/30">{project.title}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 rounded text-xs font-mono bg-primary/20 text-primary">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button text-primary-foreground text-center text-sm flex items-center justify-center gap-2 mt-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
