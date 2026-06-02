
(() => {
  const host = document.getElementById('particles-js');
  if (!host || !window.tsParticles) return;

  try {
    window.tsParticles.load('particles-js', {
      background: {
        color: { value: 'transparent' }
      },

      fpsLimit: 60,

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          },
          onClick: {
            enable: true,
            mode: 'push'
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.25
            }
          },
          push: {
            quantity: 3
          }
        }
      },

      particles: {
        color: {
          value: ['#00BFFF', '#8A2BE2', '#00FFFF']
        },

        links: {
          enable: true,
          color: '#00BFFF',
          distance: 140,
          opacity: 0.15,
          width: 1
        },

        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          outModes: {
            default: 'out'
          },
          random: true,
          straight: false
        },

        number: {
          value: 55,
          density: {
            enable: true,
            area: 900
          }
        },

        opacity: {
          value: 0.5,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.2
          }
        },

        size: {
          value: { min: 1, max: 3 },
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5
          }
        }
      },

      detectRetina: true
    });

  } catch (err) {
    console.log('Particles failed to load:', err);
  }
})();

