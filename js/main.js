'use strict';

document.addEventListener('DOMContentLoaded', () => {
  /* ── Globals & Helpers ─────────────────────────────────────────────── */
  const isMobile  = () => window.innerWidth < 768;
  const isDesktop = () => window.innerWidth >= 1024;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const debounce = (fn, ms = 200) => {
    let id;
    return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), ms); };
  };

  const formatNumber = (n) => Math.round(n).toLocaleString('en-US');

  const SECTIONS = [
    '#hero','#who-we-are','#why-we-exist','#impact','#structure','#committees',
    '#more-than-activities','#experiences','#signature','#education',
    '#professionalism','#participation','#community','#partnerships',
    '#looking-ahead','#finale','#contact'
  ];

  /* ── Register GSAP Plugins ─────────────────────────────────────────── */
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* ── Reduced Motion: skip everything, show final state ─────────────── */
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    const loader = document.getElementById('loading-screen');
    if (loader) { loader.style.display = 'none'; }
    document.body.style.overflow = '';
    return; // bail out — no animations
  }

  /* ====================================================================
     1. LOADING SCREEN
     ==================================================================== */
  function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.overflowX = 'hidden';
    document.body.classList.remove('overflow-hidden');
    document.documentElement.style.overflow = '';
  }

  function initLoader() {
    const screen  = document.getElementById('loading-screen');
    const barFill = document.querySelector('.loading-bar-fill');
    const logo    = document.querySelector('.loading-logo');
    const text    = document.querySelector('.loading-text');
    if (!screen) { unlockScroll(); return Promise.resolve(); }

    return new Promise(resolve => {
      // Animate progress bar 0→100% over 2s
      const counter = { val: 0 };
      gsap.to(counter, {
        val: 100,
        duration: 2,
        ease: 'power1.inOut',
        onUpdate() {
          const v = Math.round(counter.val);
          if (barFill) barFill.style.width = v + '%';
        },
        onComplete() {
          // Exit timeline
          const tl = gsap.timeline({
            onComplete() {
              unlockScroll();
              // Force ScrollTrigger to recalculate after body overflow changes
              ScrollTrigger.refresh();
              resolve();
            }
          });
          tl.to(logo, { opacity: 0, y: -10, scale: 0.95, duration: 0.4, ease: 'power2.in' })
            .to(screen, { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.2')
            .set(screen, { display: 'none' });
        }
      });
    });
  }

  /* ====================================================================
     2. PARTICLE SYSTEM
     ==================================================================== */
  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const COLORS = ['#22C55E','#22C55E','#10B981','#FACC15']; // 50-25-25 ratio
    let particles = [];
    let animId = null;
    let paused = false;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      const count = isMobile() ? 25 : 50;
      particles = Array.from({ length: count }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        r:  1 + Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        o:  0.15 + Math.random() * 0.2,
        c:  COLORS[Math.floor(Math.random() * COLORS.length)]
      }));
    }

    function draw() {
      if (paused) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width, h = canvas.height;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        // Wrap at edges
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.o;
        ctx.fill();

        // Faint connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = dx * dx + dy * dy; // skip sqrt
          if (dist < 10000) { // 100px²
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = '#22C55E';
            ctx.globalAlpha = 0.03 * (1 - dist / 10000);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    // Visibility handling — pause when tab hidden
    document.addEventListener('visibilitychange', () => { paused = document.hidden; });

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', debounce(() => {
      resize();
      createParticles();
    }, 300));
  }

  /* ====================================================================
     3. SCROLL PROGRESS BAR
     ==================================================================== */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    let ticking = false;

    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
  }

  /* ====================================================================
     4. NAVIGATION
     ==================================================================== */
  function initNavigation() {
    const nav       = document.getElementById('main-nav');
    const toggle    = document.querySelector('.nav-toggle');
    const mobile    = document.querySelector('.mobile-menu');
    const links     = document.querySelectorAll('.nav-link');
    if (!nav) return;

    /* Scrolled state */
    let scrolled = false;
    window.addEventListener('scroll', () => {
      const should = window.scrollY > 40;
      if (should !== scrolled) { nav.classList.toggle('scrolled', should); scrolled = should; }
    }, { passive: true });

    /* Smooth scroll on click */
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        let target = link.getAttribute('data-section') || link.getAttribute('href');
        // Ensure target starts with # for gsap scrollTo
        if (target && !target.startsWith('#')) target = '#' + target;
        const el = target ? document.querySelector(target) : null;
        if (el) {
          gsap.to(window, { scrollTo: { y: el, offsetY: 0 }, duration: 1, ease: 'power2.inOut' });
        }
        closeMobile();
      });
    });

    /* Active link via IntersectionObserver */
    const sections = document.querySelectorAll('section[id], footer[id]');
    if (sections.length) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            links.forEach(l => {
              let s = l.getAttribute('data-section') || l.getAttribute('href');
              if (s && !s.startsWith('#')) s = '#' + s;
              l.classList.toggle('active', s === id);
            });
          }
        });
      }, { threshold: 0.2 });
      sections.forEach(s => io.observe(s));
    }

    /* Mobile menu */
    function closeMobile() {
      nav.classList.remove('nav-open');
      if (toggle) toggleHamburger(false);
    }

    function toggleHamburger(open) {
      const spans = toggle ? toggle.querySelectorAll('span') : [];
      if (!spans.length) return;
      if (open) {
        gsap.to(spans[0], { rotation: 45, y: 6, duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.2 });
        gsap.to(spans[2], { rotation: -45, y: -6, duration: 0.3 });
      } else {
        gsap.to(spans, { rotation: 0, y: 0, opacity: 1, duration: 0.3 });
      }
    }

    if (toggle) {
      toggle.addEventListener('click', () => {
        const opening = !nav.classList.contains('nav-open');
        nav.classList.toggle('nav-open');
        toggleHamburger(opening);
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobile();
    });

    document.addEventListener('click', e => {
      if (nav.classList.contains('nav-open') && !nav.contains(e.target)) closeMobile();
    });
  }

  /* ====================================================================
     5. SCROLL REVEAL (GSAP batch)
     ==================================================================== */
  function initReveal() {
    const items = gsap.utils.toArray('.reveal');
    if (!items.length) return;

    // Set initial state
    gsap.set(items, { opacity: 0, y: 30 });

    ScrollTrigger.batch(items, {
      start: 'top 85%',
      once: true,
      onEnter(batch) {
        gsap.to(batch, {
          opacity: 1, y: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.12,
          onComplete() { batch.forEach(el => el.classList.add('active')); }
        });
      }
    });
  }

  /* ====================================================================
     6. HERO ENTRANCE
     ==================================================================== */
  function playHeroEntrance() {
    const tl = gsap.timeline();

    tl.fromTo('.hero-logo',
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' })
      .fromTo('.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-desc',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');
  }

  /* ====================================================================
     7. ANIMATED COUNTERS
     ==================================================================== */
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target;
        const target = parseFloat(el.dataset.target) || 0;
        const suffix = el.dataset.suffix || '';

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate() { el.textContent = formatNumber(obj.val) + suffix; }
        });

        io.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => io.observe(c));
  }

  /* ====================================================================
     8. PARALLAX (desktop only)
     ==================================================================== */
  function initParallax() {
    if (isMobile()) return;
    const glows = gsap.utils.toArray('.ambient-glow');
    glows.forEach(el => {
      gsap.to(el, {
        y: 40,
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2
        }
      });
    });
  }

  /* ====================================================================
     9. SECTION TITLE ANIMATIONS
     ==================================================================== */
  function initSectionAnimations() {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const label = sec.querySelector('.section-label');
      const title = sec.querySelector('.section-title');
      if (!label && !title) return;

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sec, start: 'top 85%', once: true }
      });

      if (label) {
        gsap.set(label, { opacity: 0, x: -15 });
        tl.to(label, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' });
      }
      if (title) {
        gsap.set(title, { opacity: 0, y: 25 });
        tl.to(title, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, label ? '-=0.5' : 0);
      }
    });
  }

  /* ====================================================================
     10. COMMITTEE CARD TILT (desktop only)
     ==================================================================== */
  function initCardTilt() {
    if (!isDesktop()) return;
    document.querySelectorAll('.committee-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        gsap.to(card, {
          rotateY: dx * 3,
          rotateX: -dy * 3,
          transformPerspective: 800,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' });
      });
    });
  }

  /* ====================================================================
     11. AMBIENT GLOW DRIFT
     ==================================================================== */
  function initGlowDrift() {
    gsap.utils.toArray('.ambient-glow').forEach((el, i) => {
      gsap.to(el, {
        x: `random(-20, 20)`,
        y: `random(-20, 20)`,
        duration: gsap.utils.random(8, 15),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.6
      });
    });
  }

  /* ====================================================================
     12. CTA MAGNETIC EFFECT (desktop only)
     ==================================================================== */
  function initMagneticButtons() {
    if (!isDesktop()) return;
    document.querySelectorAll('.cta-button').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top  + rect.height / 2);
        gsap.to(btn, { x: dx * 0.15, y: dy * 0.15, duration: 0.3, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }

  /* ====================================================================
     13. SECTION DIVIDERS
     ==================================================================== */
  function initDividers() {
    gsap.utils.toArray('.section-divider').forEach(el => {
      gsap.set(el, { scaleX: 0, transformOrigin: 'center' });
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter() {
          gsap.to(el, { scaleX: 1, duration: 1, ease: 'power2.inOut' });
        }
      });
    });
  }

  /* ====================================================================
     15. KEYBOARD NAVIGATION
     ==================================================================== */
  function initKeyboardNav() {
    const sectionEls = SECTIONS.map(s => document.querySelector(s)).filter(Boolean);
    if (!sectionEls.length) return;

    document.addEventListener('keydown', e => {
      // Ignore when inside form fields
      if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;

      let dir = 0;
      if (e.key === 'ArrowDown') dir = 1;
      if (e.key === 'ArrowUp')   dir = -1;
      if (!dir) return;
      e.preventDefault();

      // Find current section
      const scrollY = window.scrollY + window.innerHeight / 3;
      let idx = 0;
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (scrollY >= sectionEls[i].offsetTop) { idx = i; break; }
      }
      const next = Math.max(0, Math.min(sectionEls.length - 1, idx + dir));
      gsap.to(window, { scrollTo: sectionEls[next], duration: 0.8, ease: 'power2.inOut' });
    });
  }

  /* ====================================================================
     16. LAZY LOADING IMAGES
     ==================================================================== */
  function initLazyLoad() {
    const imgs = document.querySelectorAll('[data-src]');
    if (!imgs.length) return;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el  = entry.target;
        const src = el.dataset.src;
        if (el.tagName === 'IMG') {
          el.src = src;
          el.addEventListener('load', () => el.classList.add('loaded'), { once: true });
        } else {
          el.style.backgroundImage = `url(${src})`;
          el.classList.add('loaded');
        }
        delete el.dataset.src;
        io.unobserve(el);
      });
    }, { rootMargin: '200px' });

    imgs.forEach(i => io.observe(i));
  }

  /* ====================================================================
     17. STAT CARD GLOW
     ==================================================================== */
  function initStatCardGlow() {
    if (!isDesktop()) return;
    document.querySelectorAll('.stat-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top)  + 'px');
      });
    });
  }

  /* ====================================================================
     18. REFRESH & CLEANUP
     ==================================================================== */
  function initPerformance() {
    window.addEventListener('load', () => ScrollTrigger.refresh());
    window.addEventListener('resize', debounce(() => ScrollTrigger.refresh(), 250));
  }

  /* ====================================================================
     BOOT SEQUENCE
     ==================================================================== */
  try {
    initParticles();
    initScrollProgress();
    initNavigation();
    initReveal();
    initCounters();
    initParallax();
    initSectionAnimations();
    initCardTilt();
    initGlowDrift();
    initMagneticButtons();
    initDividers();
    initKeyboardNav();
    initLazyLoad();
    initStatCardGlow();
    initPerformance();

    // Loading → Hero entrance
    initLoader().then(() => playHeroEntrance());
  } catch (err) {
    // Ensure content is always accessible even if JS fails
    const loader = document.getElementById('loading-screen');
    if (loader) loader.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.overflowX = 'hidden';
    document.body.classList.remove('overflow-hidden');
    document.documentElement.style.overflow = '';
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
  }
});
