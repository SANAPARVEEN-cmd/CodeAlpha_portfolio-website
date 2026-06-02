
(() => {

  const initTilt = () => {
    const elements = document.querySelectorAll('.tilt');
    if (!elements.length) return;

    if (!window.VanillaTilt?.init) return;

    window.VanillaTilt.init(elements, {
      max: 10,              // slightly reduced for premium feel
      speed: 600,          // smoother motion
      glare: true,
      "max-glare": 0.25,   // softer highlight
      scale: 1.03,         // subtle zoom on hover
      gyroscope: true,     // mobile support if available
      transition: true
    });
  };

  const disableOnMobile = () => {
    if (window.innerWidth < 768) {
      const elements = document.querySelectorAll('.tilt');
      elements.forEach(el => {
        el.vanillaTilt?.destroy?.();
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    initTilt();
    disableOnMobile();
  });

  window.addEventListener('resize', disableOnMobile);

})();

