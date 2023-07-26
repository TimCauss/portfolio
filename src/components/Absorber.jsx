import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Absorber = () => {
  const particlesInit = async (engine) => {
    console.log(engine);
    await loadFull(engine);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="absorber"
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
          number: {
            density: {
              enable: false,
            },
            value: 1,
          },
          size: {
            value: 75,
          },
        },
        absorbers: {
          color: {
            value: "#000000",
          },
          draggable: true,
          opacity: 1,
          destroy: false,
          orbits: true,
          size: {
            random: {
              enable: true,
              minimumValue: 30,
            },
            value: {
              min: 30,
              max: 50,
            },
            density: 20,
            limit: {
              radius: 100,
              mass: 0,
            },
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      }}
    />
  );
};

export default Absorber;
