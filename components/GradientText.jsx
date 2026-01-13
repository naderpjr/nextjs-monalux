"use client";

export default function GradientText({
  children,
  className = "",
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  animationSpeed = 8,
  direction = "horizontal",
  showBorder = false,
  pauseOnHover = false
}) {
  const angle =
    direction === "horizontal"
      ? "90deg"
      : direction === "vertical"
        ? "180deg"
        : "135deg";

  const gradient = `linear-gradient(${angle}, ${colors.join(", ")})`;

  return (
    <span
      className={`gt ${pauseOnHover ? "gt-pause" : ""} ${className}`}
      style={{
        ["--gradient"]: gradient,
        ["--duration"]: `${animationSpeed}s`
      }}
    >
      {showBorder && <span className="gt-border" />}
      <span className="gt-text">{children}</span>

      <style jsx>{`
        .gt {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .gt-text {
          background-image: var(--gradient);
          background-size: 300% 100%;
          animation: gt-move var(--duration) linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .gt-border {
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background-image: var(--gradient);
          background-size: 300% 100%;
          animation: gt-move var(--duration) linear infinite;
          z-index: -1;
        }

        .gt-pause:hover .gt-text,
        .gt-pause:hover .gt-border {
          animation-play-state: paused;
        }

        @keyframes gt-move {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </span>
  );
}
