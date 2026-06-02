
(() => {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let currentX = mouseX;
  let currentY = mouseY;

  const ease = 0.12; // smoother premium feel

  /* =========================
     MOUSE TRACKING
  ========================= */
  window.addEventListener(
    'mousemove',
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    },
    { passive: true }
  );

  /* =========================
     ANIMATION LOOP
  ========================= */
  const animate = () => {
    currentX += (mouseX - currentX) * ease;
    currentY += (mouseY - currentY) * ease;

    cursor.style.transform = `
      translate3d(${currentX}px, ${currentY}px, 0)
      translate(-50%, -50%)
    `;

    requestAnimationFrame(animate);
  };

  /* =========================
     HOVER EFFECT
  ========================= */
  const interactiveElements = document.querySelectorAll(
    'a, button, input, textarea, select, label'
  );

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });

  /* =========================
     CLICK PULSE EFFECT
  ========================= */
  window.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-click');
  });

  window.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-click');
  });

  /* =========================
     ACCESSIBILITY CHECK
  ========================= */
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (reduceMotion) {
    cursor.style.display = 'none';
    return;
  }

  /* =========================
     START
  ========================= */
  requestAnimationFrame(animate);
})();
