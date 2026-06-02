
(() => {

  /* =========================
     TYPED TEXT
  ========================= */
  const initTyping = () => {
    const el = document.querySelector('.typing-text');
    if (!el) return;

    const phrases = [
      'Frontend Developer',
      'UI Engineer',
      'React Enthusiast',
      'Creative Coder',
    ];

    if (window.Typed) {
      new window.Typed(el, {
        strings: phrases,
        typeSpeed: 55,
        backSpeed: 35,
        backDelay: 900,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
    } else {
      el.textContent = phrases[0];
    }
  };

  /* =========================
     AOS INIT
  ========================= */
  const initAOS = () => {
    if (window.AOS) {
      window.AOS.init({
        duration: 900,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic',
      });
    }
  };

  /* =========================
     GSAP HERO ANIMATION
  ========================= */
  const initHeroAnimation = () => {
    if (!window.gsap) return;

    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.6
    });

    tl.from(".hero h1", {
      y: 40,
      opacity: 0,
      duration: 0.8
    }, "-=0.3");

    tl.from(".hero h3", {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, "-=0.4");

    tl.from(".hero-description", {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, "-=0.3");

    tl.from(".hero-buttons a", {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.2");

    tl.from(".social-icons a", {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4
    }, "-=0.2");

    tl.from(".hero-image", {
      x: 60,
      opacity: 0,
      duration: 0.8
    }, "-=0.6");
  };

  /* =========================
     SECTION REVEAL ANIMATION
  ========================= */
  const initSectionReveal = () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });
    });
  };

  /* =========================
     CARD STAGGER ANIMATION
  ========================= */
  const initCardAnimations = () => {
    if (!window.gsap) return;

    gsap.utils.toArray(".skills-grid, .projects-grid, .about-cards").forEach((grid) => {
      gsap.from(grid.children, {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: grid,
          start: "top 85%"
        }
      });
    });
  };

  /* =========================
     INIT EVERYTHING
  ========================= */
  document.addEventListener("DOMContentLoaded", () => {
    initTyping();
    initAOS();
    initHeroAnimation();
    initSectionReveal();
    initCardAnimations();
  });

})();

