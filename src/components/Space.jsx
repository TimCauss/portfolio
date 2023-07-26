import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Space = () => {
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
          shadow: {
            blur: 5,
            color: {
              value: "#000000",
            },
            enable: true,
            offset: {
              x: 3,
              y: 3,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.02,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: { min: 0.5, max: 0.1 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 500,
              height: 500,
            },
            value: 20,
          },
          opacity: {
            value: 0, //{ min: 0.3, max: 0.7 },
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
              mode: "attract",
            },
            onHover: {
              enable: true,
              mode: ["bubble", "grab"],
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1,
              maxSpeed: 100,
              factor: 100,
              easing: "ease-out-quad",
            },
            push: {
              quantity: 10,
            },
            bubble: {
              distance: 200,
              duration: 2,
              size: 10,
              opacity: 0.8,
            },
            attract: {
              distance: 200,
              duration: 0.4,
              factor: 30,
              speed: 10,
              easing: "ease-out-quad",
            },
            grab: {
              distance: 200,
              links: {
                opacity: 0.7,
              },
            },
            connect: {
              distance: 150,
              radius: 200,
              links: {
                opacity: 0.05,
              },
            },
          },
        },
        detectRetina: true,
        /* absorbers: {
          color: {
            value: "#000000",
          },
          draggable: false,
          opacity: 0,
          destroy: false,
          orbits: true,
          size: {
            value: 10,
            density: 100,
            radius: 0,
            mass: 0,
          },
          position: {
            x: 50,
            y: 50,
          },
        }, */
      }}
    />
  );
};

export default Space;
