import React from 'react';
import Particles from 'react-particles-js';

export default function ParticlesBG({ className }) {
  return (
    <Particles
      className={` w-full ${className}`}
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          color: {
            value: 'rgb(255, 99, 132)',
          },
          shape: {
            type: 'circle',
          },
          size: {
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
            value: 3,
            random: {
              enable: true,
              minimumValue: 1,
            },
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
            value: 1,
            random: true,
          },
          move: {
            enable: true,
            direction: 'none',
            random: true,
            straight: false,
            speed: 1,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 700,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
              speed: 0.2,
            },
          },
        },
        background: {
          repeat: 'no-repeat',
          position: '0 0%',
        },
      }}
    />
  );
}
