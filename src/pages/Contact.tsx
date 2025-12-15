import { useState } from "react";
import { Send, Mail, Linkedin, Github, Download, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Let's Connect" 
            subtitle="Have a project in mind or want to discuss opportunities?"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <GlowCard glowColor="purple">
              <h3 className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
                {">"} SEND_MESSAGE()
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    name: string
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    email: string
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2">
                    message: string
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-button text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlowCard>

            {/* Contact Info */}
            <div className="space-y-6">
              <GlowCard glowColor="pink">
                <h3 className="font-mono text-sm text-secondary mb-6 flex items-center gap-2">
                  {">"} GET_IN_TOUCH()
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:drecobs@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">email</p>
                      <p className="text-foreground font-medium">drecobs@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/lee-jacobs-41294a328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">linkedin</p>
                      <p className="text-foreground font-medium">linkedin.com/in/lee-yandre-jacobs</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Lee-Yandre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all group"
                  >
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

              {/* Status Card */}
              <GlowCard glowColor="orange">
                <h3 className="font-mono text-sm text-accent mb-4 flex items-center gap-2">
                  {">"} STATUS: <span className="text-green-400">AVAILABLE</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  I'm currently seeking new opportunities in tech solutions development. Let's collaborate on your next project!
                </p>
                <button className="w-full glow-button-outline flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
