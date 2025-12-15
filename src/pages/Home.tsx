import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/30 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">
              AI-Powered Solutions Developer
            </span>
          </div>

          {/* Main heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">Lee-Yandre</span>
            <br />
            <span className="gradient-text">Jacobs</span>
          </h1>

          {/* Subtitle */}
          <h2 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-display text-primary">Creative Technologist</span>
            {" "}who bridges AI, design, and development to build meaningful digital solutions.
          </h2>

          {/* Description */}
          <p 
            className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
            style={{ animationDelay: "0.3s" }}
          >
            With hands-on experience in AI prototyping, sentiment analysis, and full-stack tools, 
            I turn ideas into functional, user-centered applications.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/projects" className="glow-button text-primary-foreground flex items-center gap-2 group">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="glow-button-outline">
              Contact Me
            </Link>
          </div>

          {/* Code-style decorations */}
          <div className="mt-16 font-mono text-sm text-muted-foreground/50">
            <span className="text-primary">const</span> passion = <span className="text-secondary">"innovation"</span>;
          </div>
        </div>
      </section>

      {/* Featured section preview */}
      <section className="px-6 py-20 border-t border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-sm text-muted-foreground mb-4">{"// What I do"}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
              Building the Future with AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Solutions",
                description: "Leveraging cutting-edge AI models to create intelligent, responsive applications.",
                icon: "🤖",
              },
              {
                title: "Full-Stack Development",
                description: "Building complete web applications from concept to deployment.",
                icon: "💻",
              },
              {
                title: "Creative Design",
                description: "Crafting user-centered interfaces that are both beautiful and functional.",
                icon: "🎨",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="glow-card text-center"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
