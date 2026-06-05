'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  const toggle = document.querySelector('.nav-toggle');
  const progress = document.getElementById('scroll-progress');
  const loader = document.getElementById('loading-screen');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const hasGsap = window.gsap && window.ScrollTrigger;

  const imageMeta = [
    { match: 'Hero/hero-main.jpg', title: 'The Flag Above the Group', detail: 'Rehab Sporting Club, Cairo', story: 'A symbol of continuity, belonging, and the responsibility scouts learn to carry.' },
    { match: 'ABOUT_01_History', title: 'A Living Archive', detail: 'Legacy Moment', story: 'The organization has grown through decades of repeated commitment from leaders, families, and scouts.' },
    { match: 'ABOUT_03_Community_Service', title: 'Service as Character', detail: 'Community Impact', story: 'Service projects give young people a practical way to understand responsibility beyond themselves.' },
    { match: 'IMPACT_01_Crowd', title: 'The Community Around the Work', detail: 'SSG Gathering', story: 'Impact becomes visible when scouts, families, and leaders gather around a shared culture.' },
    { match: 'IMPACT_03_Leadership', title: 'Leadership in Practice', detail: 'Youth Development', story: 'Confidence grows through repeated moments of responsibility, support, and public participation.' },
    { match: 'HERO_02_Group_Celebration', title: 'The Culture of Belonging', detail: 'Community Celebration', story: 'The strongest programs become memories young people want to return to.' },
    { match: 'PROGRAM_01_Camping', title: 'Core Scouting', detail: 'Outdoor Program', story: 'Camping gives scouts a practical environment for self-reliance, patience, and teamwork.' },
    { match: 'PROGRAM_05_Educational_Visit', title: 'Educational Exposure', detail: 'Professional Visit', story: 'Visits and workshops connect curiosity with real-world people, places, and possibilities.' },
    { match: 'PROGRAM_06_Teamwork', title: 'Teamwork Under Pressure', detail: 'Program Activity', story: 'Group challenges reveal how young people plan, communicate, and care for one another.' },
    { match: 'PROGRAM_03_Service', title: 'Responsibility Made Visible', detail: 'Service Program', story: 'Community work teaches that leadership is measured by contribution.' },
    { match: 'Camp_04', title: 'Expedition Opening', detail: 'Camp Journey', story: 'Leaving the city changes the learning environment. Scouts meet new limits and new confidence.' },
    { match: 'Camp_08', title: 'Working Through Challenge', detail: 'Camp Activity', story: 'Challenge becomes useful when scouts learn to solve it as a team.' },
    { match: 'Camp_06', title: 'Teamwork in the Field', detail: 'Camp Community', story: 'Leadership becomes visible in how scouts care for one another outdoors.' },
    { match: 'Camp_02', title: 'Returning as a Team', detail: 'Camp Community', story: 'The return is part of the journey. Scouts bring confidence and memory back to the group.' },
    { match: 'CEREMONY_01_Opening', title: 'The Annual Stage', detail: 'Closing Ceremony 2025', story: 'Public ceremony turns a year of preparation into a shared record of achievement.' },
    { match: 'CEREMONY_03_Awards', title: 'Recognition With Purpose', detail: 'Closing Ceremony 2025', story: 'Awards give young people a public language for effort, service, and responsibility.' },
    { match: 'CEREMONY_04_Performance', title: 'The Stage Moment', detail: 'Closing Ceremony 2025', story: 'Discipline and confidence earned through a full year of practice, made visible.' },
    { match: 'CEREMONY_05_Families', title: 'Families in the Story', detail: 'Closing Ceremony 2025', story: 'Families witness the confidence scouts have built through the year.' },
    { match: 'Gallery_', title: 'Archive Frame', detail: 'SSG Visual Archive', story: 'A memory from the culture of scouting: practice, friendship, leadership, and belonging.' }
  ];

  document.body.classList.add('is-loading', 'js-enabled');

  // ─── Loading screen ────────────────────────────────────────────────────────
  function finishLoading() {
    if (!loader) return;
    loader.classList.add('is-hidden');
    document.body.classList.remove('is-loading');
  }

  if (hasGsap && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Set initial states
    gsap.set('.loader-ring-fill', { strokeDashoffset: 427.3 });
    gsap.set('.loader-accent', { opacity: 0, scale: 0, transformOrigin: '50% 50%' });
    gsap.set('.loader-logo', { opacity: 0, scale: 0.88 });
    gsap.set(['.loader-name', '.loader-since'], { opacity: 0, y: 10 });
    gsap.set('.loader-divider span', { scaleX: 0 });

    gsap.timeline({ onComplete: finishLoading })
      // Ring draws itself
      .to('.loader-ring-fill', { strokeDashoffset: 0, duration: 1.5, ease: 'power2.inOut' })
      // Logo fades in while ring is drawing
      .to('.loader-logo', { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }, '-=1.1')
      // Cardinal dots pop in near end of ring
      .to('.loader-accent', { opacity: 1, scale: 1, duration: 0.25, stagger: 0.07, ease: 'back.out(2)' }, '-=0.45')
      // Divider line sweeps across
      .to('.loader-divider span', { scaleX: 1, duration: 0.45, ease: 'power3.inOut' }, '-=0.1')
      // Text reveals
      .to('.loader-name', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.25')
      .to('.loader-since', { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.15')
      // Whole screen fades out
      .to('#loading-screen', { opacity: 0, duration: 0.6, ease: 'power2.out' }, '+=0.35');
  } else {
    finishLoading();
  }

  // ─── Nav scroll & progress bar ─────────────────────────────────────────────
  function updateChrome() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('is-scrolled', y > 24);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    }
  }
  updateChrome();
  window.addEventListener('scroll', updateChrome, { passive: true });

  // ─── Mobile nav toggle ──────────────────────────────────────────────────────
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // ─── Lightbox ──────────────────────────────────────────────────────────────
  function normalizeSrc(src) {
    try { return decodeURIComponent(new URL(src, window.location.href).pathname); }
    catch { return src || ''; }
  }

  function getMeta(src, alt, caption) {
    const normalized = normalizeSrc(src);
    const meta = imageMeta.find(item => normalized.includes(item.match)) || {};
    return {
      title: meta.title || caption || alt || 'SSG documentary image',
      detail: meta.detail || 'Al-Salam Scouting Groups',
      story: meta.story || caption || alt || 'A documented moment from the SSG story.'
    };
  }

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const stageImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.lightbox-close');
    const prevButton = lightbox.querySelector('.lightbox-prev');
    const nextButton = lightbox.querySelector('.lightbox-next');
    const counter = lightbox.querySelector('.lightbox-count');
    const title = lightbox.querySelector('strong');
    const detail = lightbox.querySelector('em');
    const story = lightbox.querySelector('p');
    const progressBar = lightbox.querySelector('.lightbox-progress span');
    const images = Array.from(document.querySelectorAll('main img')).filter(img => !img.closest('.brand-mark'));
    let activeIndex = 0;
    let touchStartX = 0;
    let lastFocused = null;

    images.forEach((img, index) => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', `Open image: ${img.alt || 'SSG image'}`);
      img.addEventListener('click', () => open(index));
      img.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(index); }
      });
    });

    function render() {
      const img = images[activeIndex];
      if (!img) return;
      const caption = img.closest('figure')?.querySelector('figcaption')?.textContent?.trim();
      const meta = getMeta(img.currentSrc || img.src, img.alt, caption);
      stageImage.src = img.currentSrc || img.src;
      stageImage.alt = img.alt || meta.title;
      counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
      title.textContent = meta.title;
      detail.textContent = meta.detail;
      story.textContent = meta.story;
      progressBar.style.width = `${((activeIndex + 1) / images.length) * 100}%`;

      if (hasGsap && !reduceMotion) {
        gsap.fromTo(stageImage, { opacity: 0, scale: 0.975 }, { opacity: 1, scale: 1, duration: 0.75, ease: 'power3.out' });
        gsap.fromTo(lightbox.querySelector('figcaption'), { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay: 0.14 });
      }
    }

    function open(index) {
      activeIndex = index;
      lastFocused = document.activeElement;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      render();
      closeButton.focus();
      if (hasGsap && !reduceMotion) {
        gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.55, ease: 'power2.out' });
      }
    }

    function close() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }

    function go(direction) {
      activeIndex = (activeIndex + direction + images.length) % images.length;
      render();
    }

    closeButton.addEventListener('click', close);
    prevButton.addEventListener('click', () => go(-1));
    nextButton.addEventListener('click', () => go(1));
    lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
    lightbox.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', event => {
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 48) go(delta > 0 ? -1 : 1);
    }, { passive: true });
    document.addEventListener('keydown', event => {
      if (!lightbox.classList.contains('is-open')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') go(-1);
      if (event.key === 'ArrowRight') go(1);
    });
  }

  // ─── Smooth scroll for nav links ───────────────────────────────────────────
  document.querySelectorAll('.nav-links a, .brand-mark, .text-link').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      if (nav) nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      if (hasGsap && !reduceMotion) {
        gsap.to(window, { scrollTo: { y: target, offsetY: 0 }, duration: 1.0, ease: 'power3.inOut' });
      } else {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  });

  // ─── Active nav link on scroll ─────────────────────────────────────────────
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  // ─── GSAP animations ───────────────────────────────────────────────────────
  if (hasGsap && !reduceMotion) {

    // 1. Lenis smooth scroll — desktop only (native scroll is faster on touch)
    if (typeof Lenis !== 'undefined' && !isTouch) {
      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false
      });

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // 2. SplitType text reveals (hero only for performance)
    let heroSplit = null;
    if (typeof SplitType !== 'undefined') {
      const heroH1 = document.querySelector('.hero h1');
      if (heroH1) {
        heroSplit = new SplitType(heroH1, { types: 'lines, words' });
        gsap.set(heroSplit.words, { y: '110%', opacity: 0 });
      }
    }

    // 3. Hero intro sequence
    const intro = gsap.timeline({ delay: 0.4 });
    intro.fromTo('.report-kicker', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
    if (heroSplit) {
      intro.to(heroSplit.words, { y: '0%', opacity: 1, duration: 1.1, stagger: 0.04, ease: 'power4.out' }, '-=0.5');
    } else {
      intro.fromTo('.hero h1', { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out' }, '-=0.5');
    }
    intro
      .fromTo('.hero-deck', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7')
      .fromTo('.hero-caption', { opacity: 0 }, { opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.6');

    // 4. Hero parallax — desktop only (causes jank on mobile)
    if (!isTouch) {
      gsap.to('.hero-slides', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // 5. Scroll reveals via IntersectionObserver (CSS transitions, composited)
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 6. Number counters
    gsap.utils.toArray('[data-counter]').forEach(counter => {
      const target = Number(counter.dataset.counter || 0);
      const value = { n: 0 };
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(value, {
            n: target,
            duration: 2.2,
            ease: 'power3.out',
            onUpdate: () => {
              counter.textContent = `${Math.floor(value.n)}${target > 20 ? '+' : ''}`;
            }
          });
        }
      });
    });

    // 7. Scout's trail progress
    if (document.querySelector('.scouts-trail-progress')) {
      gsap.to('.scouts-trail-progress', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: 'main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });
    }

    // 8. Horizontal journey parallax — desktop only
    if (!isTouch) {
      const horizontalJourney = document.querySelector('.horizontal-journey');
      if (horizontalJourney) {
        const parallaxImages = gsap.utils.toArray('.horizontal-journey [data-parallax]');
        parallaxImages.forEach(img => {
          gsap.to(img, {
            x: '12%',
            ease: 'none',
            scrollTrigger: {
              scroller: horizontalJourney,
              horizontal: true,
              trigger: img.closest('.journey-card'),
              start: 'left right',
              end: 'right left',
              scrub: true
            }
          });
        });
      }
    }

  } else {
    // No GSAP fallback: show counters immediately
    document.querySelectorAll('[data-counter]').forEach(counter => {
      const target = Number(counter.dataset.counter || 0);
      counter.textContent = `${target}${target > 20 ? '+' : ''}`;
    });
  }

  // ─── Hero slideshow ────────────────────────────────────────────────────────
  function initHeroSlideshow() {
    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const dots   = Array.from(document.querySelectorAll('.hero-dot'));
    if (slides.length < 2) return;

    let current = 0;
    let timer   = null;
    const INTERVAL = 6000; // ms per slide

    function goTo(index) {
      const prev = current;
      current = ((index % slides.length) + slides.length) % slides.length;
      if (prev === current) return;

      // Deactivate old
      slides[prev].classList.remove('is-active');
      slides[prev].setAttribute('aria-hidden', 'true');
      dots[prev].classList.remove('is-active');
      dots[prev].setAttribute('aria-selected', 'false');

      // Activate new
      slides[current].classList.add('is-active');
      slides[current].setAttribute('aria-hidden', 'false');
      dots[current].classList.add('is-active');
      dots[current].setAttribute('aria-selected', 'true');
    }

    function start() {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), INTERVAL);
    }

    function stop() {
      clearInterval(timer);
    }

    start();

    // Pause on hover
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.addEventListener('mouseenter', stop,  { passive: true });
      heroEl.addEventListener('mouseleave', start, { passive: true });
    }

    // Dot navigation
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { stop(); goTo(i); start(); });
    });

    // Keyboard: left/right arrows while focus is inside hero
    heroEl && heroEl.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  { stop(); goTo(current - 1); start(); }
      if (e.key === 'ArrowRight') { stop(); goTo(current + 1); start(); }
    });
  }

  initHeroSlideshow();
  initLightbox();
});

// Refresh ScrollTrigger after all images load
window.addEventListener('load', () => {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
});
