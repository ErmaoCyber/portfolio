import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// ParticlesBg：背景粒子效果
export default function ParticlesBg() {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="particles" aria-hidden="true">
      <Particles
        init={init}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 52 },
            color: { value: ["#4aa3ff", "#53f0ff"] },
            links: {
              enable: true,
              color: "#53f0ff",
              distance: 160,
              opacity: 0.22,
            },
            move: { enable: true, speed: 0.7 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.42 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
      />
    </div>
  );
}
