document.addEventListener('DOMContentLoaded', () => {
  // Loader simulation (defensive)
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loader-bar');
  const site = document.getElementById('site');

  if (loader && loaderBar && site) {
    setTimeout(() => (loaderBar.style.width = '45%'), 200);
    setTimeout(() => (loaderBar.style.width = '78%'), 600);
    setTimeout(() => {
      loaderBar.style.width = '100%';
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        site.style.opacity = '1';
        setTimeout(() => loader.remove(), 600);
      }, 300);
    }, 1200);
  } else if (site) {
    site.style.opacity = '1';
    if (loader) loader.remove();
  }

  // Intersection reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  }

  // Footer year (single assignment)
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // smooth nav behavior (and close mobile menu when link clicked)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        ev.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // optional: allow click on photo
  const photo = document.getElementById('me-photo');
  if (photo) {
    photo.addEventListener('click', () => alert('Replace this image by changing the src of #me-photo in the HTML (or add drag & drop if you implement it).'));
  }

  // Skills sway: intersection + resize re-check + reduced motion
  (function () {
    const grid = document.querySelector('.skills-grid');
    if (!grid) return;
    const prefersReducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const applySway = (on) => {
      document.querySelectorAll('.skills-col').forEach(c => {
        if (on) c.classList.add('sway');
        else c.classList.remove('sway');
      });
    };

    const shouldSway = () => !prefersReducedQuery.matches && window.innerWidth >= 640;

    const gridObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && shouldSway()) applySway(true);
        else applySway(false);
      });
    }, { threshold: 0.12 });
    gridObs.observe(grid);

    // debounce helper
    let rTimer;
    const onResize = () => {
      clearTimeout(rTimer);
      rTimer = setTimeout(() => {
        const rect = grid.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && shouldSway()) applySway(true);
        else applySway(false);
      }, 150);
    };
    window.addEventListener('resize', onResize);

    // keyboard support for skill items
    document.querySelectorAll('.skill-item[tabindex]').forEach(item => {
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.classList.add('press');
          setTimeout(() => item.classList.remove('press'), 150);
        }
      });
    });
  })();

  // Mobile menu: defensive and accessible
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  if (menuBtn) {
    // ensure aria
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-controls', menu ? 'menu' : '');

    const toggleMenu = (show) => {
      if (!menu) return;
      const isHidden = menu.classList.contains('hidden');
      const shouldShow = typeof show === 'boolean' ? show : isHidden;
      menu.classList.toggle('hidden', !shouldShow);
      menu.setAttribute('aria-hidden', String(!shouldShow));
      menuBtn.setAttribute('aria-expanded', String(shouldShow));
      if (shouldShow) menu.focus && menu.focus();
    };

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu && !menu.classList.contains('hidden')) {
        toggleMenu(false);
      }
    });

    // close when clicking/tapping outside
    document.addEventListener('pointerdown', (e) => {
      if (!menu) return;
      const target = e.target;
      if (menu.contains(target) || target === menuBtn) return;
      if (!menu.classList.contains('hidden')) toggleMenu(false);
    });

    // close when clicking a link inside menu
    if (menu) {
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
      });
    }
  }
});

