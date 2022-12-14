import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback, useMemo } from "react";


const ParticlesComponent = (props) => {
  const options = useMemo(() => { 
     return {
      background: {
        color: "rgb(24, 24, 24)", 
      },
      fullScreen: {
        enable: true, 
        zIndex: -1, 
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, 
            mode: "push", 
          },
          onHover: {
            enable: true, 
            mode: "repulse", 
          },
        },
        modes: {
          push: {
            quantity: 10, 
          },
          repulse: {
            distance: 100, 
          },
        },
      },
      particles: {
        links: {
          enable: true, 
          distance: 200, 
        },
        move: {
          enable: true, 
          speed: { min: 1, max: 3 }, 
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, 
        },
        size: {
          value: { min: 1, max: 3 }, 
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
