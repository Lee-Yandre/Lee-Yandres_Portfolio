import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "purple" | "pink" | "orange" | "cyan";
  hover?: boolean;
}

const glowColors = {
  purple: "hover:border-glow-purple/50 hover:shadow-glow-purple/20",
  pink: "hover:border-glow-pink/50 hover:shadow-glow-pink/20",
  orange: "hover:border-glow-orange/50 hover:shadow-glow-orange/20",
  cyan: "hover:border-glow-cyan/50 hover:shadow-glow-cyan/20",
};

const GlowCard = ({ 
  children, 
  className, 
  glowColor = "purple",
  hover = true 
}: GlowCardProps) => {
  return (
    <div
      className={cn(
        "glow-card",
        hover && glowColors[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlowCard;
