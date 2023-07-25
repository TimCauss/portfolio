import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Cursor = () => {
  const particlesInit = async (engine) => {
    console.log(engine);
    await loadFull(engine);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#1010100",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.05,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: { min: 0.2, max: 0.5 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: ["bubble", "grab", "attract"],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            bubble: {
              distance: 200,
              duration: 2,
              size: 10,
              opacity: 1,
              color: "#009e66",
            },
            attract: {
              distance: 100,
              duration: 0.4,
              factor: 3,
              speed: 1,
              easing: "ease-out-quad",
            },
            grab: {
              distance: "200",
              radius: "200",
              links: {
                opacity: 1,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Cursor;
