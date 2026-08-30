const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Subtle ambient light, top left */}
      <div
        className="background-orb w-[700px] h-[700px] -top-60 -left-40"
        style={{
          background: "radial-gradient(circle, hsl(210 90% 55% / 0.16) 0%, transparent 70%)",
          animation: "orb-float 28s ease-in-out infinite, glow-pulse 8s ease-in-out infinite",
        }}
      />

      {/* Subtle ambient light, mid right */}
      <div
        className="background-orb w-[520px] h-[520px] top-1/3 -right-40"
        style={{
          background: "radial-gradient(circle, hsl(185 65% 45% / 0.1) 0%, transparent 70%)",
          animation: "orb-float 34s ease-in-out infinite 6s, glow-pulse 10s ease-in-out infinite",
        }}
      />

      {/* Faint warm wash, bottom */}
      <div
        className="background-orb w-[480px] h-[480px] bottom-0 left-1/3"
        style={{
          background: "radial-gradient(circle, hsl(38 85% 58% / 0.07) 0%, transparent 70%)",
          animation: "orb-float 30s ease-in-out infinite 3s, glow-pulse 12s ease-in-out infinite",
        }}
      />

      {/* Fine grid for a structured, technical feel */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210 90% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 90% 70%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
