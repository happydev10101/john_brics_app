'use client'

import React from "react";

const NeonBackground: React.FC = () => {
  return (
    <div className="neon-ambient">
      {/* BRICS Rings */}
      <div className="neon-ring ring-brazil" />
      <div className="neon-ring ring-russia" />
      <div className="neon-ring ring-india" />
      <div className="neon-ring ring-china" />
      <div className="neon-ring ring-south-africa" />

      {/* Grid */}
      <div className="neon-grid" />

      {/* Light beams - one per BRICS color */}
      <div
        className="neon-beam beam-brazil"
        style={{
          left: "10%",
          "--beam-start": "95vh",
          "--beam-end": "0vh",
          "--beam-delay": "0s",
          animationDuration: "16s",
        } as React.CSSProperties}
      />
      <div
        className="neon-beam beam-russia"
        style={{
          left: "30%",
          "--beam-start": "100vh",
          "--beam-end": "0vh",
          "--beam-delay": "0.4s",
          animationDuration: "16s",
        } as React.CSSProperties}
      />
      <div
        className="neon-beam beam-india"
        style={{
          left: "50%",
          "--beam-start": "92vh",
          "--beam-end": "0vh",
          "--beam-delay": "0.8s",
          animationDuration: "16s",
        } as React.CSSProperties}
      />
      <div
        className="neon-beam beam-china"
        style={{
          left: "70%",
          "--beam-start": "105vh",
          "--beam-end": "0vh",
          "--beam-delay": "1.2s",
          animationDuration: "16s",
        } as React.CSSProperties}
      />
      <div
        className="neon-beam beam-south-africa"
        style={{
          left: "90%",
          "--beam-start": "98vh",
          "--beam-end": "0vh",
          "--beam-delay": "1.6s",
          animationDuration: "16s",
        } as React.CSSProperties}
      />

      {/* Stars */}
      <div className="neon-star" style={{ left: "70%", top: "15%" }} />
      <div className="neon-star star-primary" style={{ left: "20%", top: "30%" }} />
      <div className="neon-star star-accent" style={{ left: "40%", top: "60%" }} />
      <div className="neon-star" style={{ left: "60%", top: "90%" }} />
      <div className="neon-star star-primary" style={{ left: "80%", top: "20%" }} />
      <div className="neon-star star-accent" style={{ left: "0%", top: "50%" }} />
      <div className="neon-star" style={{ left: "20%", top: "80%" }} />
      <div className="neon-star star-primary" style={{ left: "40%", top: "10%" }} />
    </div>
  );
};

export default NeonBackground;

