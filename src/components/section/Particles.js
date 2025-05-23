import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticleComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "rgb(17, 0, 36)",
        },
      },
      fpsLimit: 240,
      particles: {
        color: {
          value: "rgba(255, 255, 255, .2)",
        },
        links: {
          enable: true,
          distance: 100,
          color: "rgba(255, 255, 255, .2)",
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: {
            min: 0,
            max: 0.5,
          },
          random: false,
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div
        style={{
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }
};

export default ParticleComponent;
