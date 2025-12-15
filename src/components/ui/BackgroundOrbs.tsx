const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Top left orb - Purple */}
      <div
        className="background-orb w-[600px] h-[600px] -top-40 -left-40 animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, hsl(280 100% 65% / 0.3) 0%, transparent 70%)",
          animation: "orb-float 20s ease-in-out infinite, glow-pulse 3s ease-in-out infinite",
        }}
      />
      
      {/* Top right orb - Pink */}
      <div
        className="background-orb w-[500px] h-[500px] -top-20 right-20"
        style={{
          background: "radial-gradient(circle, hsl(320 100% 60% / 0.2) 0%, transparent 70%)",
          animation: "orb-float 25s ease-in-out infinite 5s, glow-pulse 4s ease-in-out infinite",
        }}
      />
      
      {/* Middle right orb - Orange */}
      <div
        className="background-orb w-[400px] h-[400px] top-1/3 -right-20"
        style={{
          background: "radial-gradient(circle, hsl(25 100% 55% / 0.15) 0%, transparent 70%)",
          animation: "orb-float 18s ease-in-out infinite 2s, glow-pulse 5s ease-in-out infinite",
        }}
      />
      
      {/* Bottom left orb - Cyan */}
      <div
        className="background-orb w-[450px] h-[450px] bottom-20 -left-20"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.1) 0%, transparent 70%)",
          animation: "orb-float 22s ease-in-out infinite 8s, glow-pulse 6s ease-in-out infinite",
        }}
      />
      
      {/* Bottom center orb - Purple/Pink blend */}
      <div
        className="background-orb w-[350px] h-[350px] bottom-40 left-1/2 -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, hsl(300 80% 60% / 0.15) 0%, transparent 70%)",
          animation: "orb-float 15s ease-in-out infinite 3s, glow-pulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
