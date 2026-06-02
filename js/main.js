(() => {
  const qs = (sel, parent = document) => parent.querySelector(sel);
  const qsa = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  /* =========================
     LOADER
  ========================= */
  const loader = qs('.loader');

  window.addEventListener('load', () => {
    if (!loader) return;

    loader.style.opacity = '0';
    loader.style.transition = 'opacity 400ms ease';

    setTimeout(() => loader.remove(), 450);
  });

  /* =========================
     ACTIVE NAV LINK ON SCROLL
  ========================= */
  const navLinks = qsa('.navbar a[href^="#"]');
  const sections = navLinks
    .map(a => qs(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = () => {
    const scrollPos = window.scrollY + 140;
    let current = '';

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    });

    navLinks.forEach(link => {
      const match = `#${current}`;
      link.classList.toggle('active', link.getAttribute('href') === match);
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* =========================
     FOOTER YEAR
  ========================= */
  const yearEl = qs('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================
     MOBILE MENU (FIXED)
  ========================= */
  const menuBtn = qs('.menu-btn');
  const navbar = qs('.navbar');

  if (menuBtn && navbar) {
    menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active'); // FIXED (was open)
    });

    // close menu on link click (better UX)
    qsa('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  }

  /* =========================
     THEME TOGGLE (FIXED)
  ========================= */
  const themeBtn = qs('.theme-toggle');
  const root = document.documentElement;

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // icon change
    if (themeBtn) {
      const icon = themeBtn.querySelector('i');
      if (icon) {
        icon.className =
          theme === 'light'
            ? 'fa-solid fa-sun'
            : 'fa-solid fa-moon';
      }
    }
  };

  if (themeBtn) {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  }

  /* =========================
     SKILLS INTERACTION
  ========================= */
  const skillsSection = qs('#skills');

  if (skillsSection) {
    const cards = qsa('.skill-card', skillsSection);

    cards.forEach(card => {
      card.tabIndex = 0;
      card.setAttribute('role', 'button');

      const activate = () => {
        cards.forEach(c => c.classList.remove('skill-card-active'));
        card.classList.add('skill-card-active');
      };

      card.addEventListener('click', activate);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });
  }

  /* =========================
     PROJECT DRAWER (CLEANED)
  ========================= */
  const projectsSection = qs('#projects');
  if (!projectsSection) return;

  const projectCards = qsa('.project-card', projectsSection);

  let drawer = qs('#project-details-drawer');

  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'project-details-drawer';
    drawer.innerHTML = `
      <div class="drawer-inner">
        <button class="drawer-close">✕</button>
        <h3 class="drawer-title"></h3>
        <p class="drawer-body"></p>
        <div class="drawer-actions"></div>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  const openDrawer = (card) => {
    const title = qs('h3', card)?.textContent || 'Project';
    const desc = qs('p', card)?.textContent || '';
    const link = qs('.project-link', card);

    qs('.drawer-title', drawer).textContent = title;
    qs('.drawer-body', drawer).textContent = desc;

    const actions = qs('.drawer-actions', drawer);
    actions.innerHTML = '';

    if (link?.href) {
      const a = document.createElement('a');
      a.href = link.href;
      a.target = '_blank';
      a.className = 'btn primary-btn';
      a.textContent = 'View Project';
      actions.appendChild(a);
    }

    drawer.classList.add('drawer-open');
  };

  const closeDrawer = () => {
    drawer.classList.remove('drawer-open');
  };

  qs('.drawer-close', drawer)?.addEventListener('click', closeDrawer);

  projectCards.forEach(card => {
    card.tabIndex = 0;
    card.addEventListener('click', () => openDrawer(card));

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrawer(card);
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!drawer.classList.contains('drawer-open')) return;
    if (drawer.contains(e.target)) return;
    closeDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

})();

