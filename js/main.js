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
    { match: 'HERO_06_Leaders', title: 'The People Behind the Programme', detail: 'SSG Leadership', story: 'Strong leaders build strong scouts — every expedition and ceremony begins here.' },
    { match: 'HERO_08_Aswan', title: 'Expedition to Aswan', detail: 'SSG Field Trip', story: 'Taking scouts beyond the city builds independence, curiosity, and a sense of the wider world.' },
    { match: 'HERO_07_Ceremony', title: 'A Year Celebrated', detail: 'SSG Annual Ceremony', story: 'Ceremony transforms a year of effort into a shared moment of recognition and pride.' },
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

    // ── Initial states ──────────────────────────────────────────────────────
    gsap.set('.loader-arm',          { strokeDashoffset: 76 });
    gsap.set('.loader-ring-fill',    { strokeDashoffset: 477.5 });
    gsap.set('.loader-tick',         { opacity: 0 });
    gsap.set('.loader-accent',       { opacity: 0, scale: 0, transformOrigin: '50% 50%' });
    gsap.set('.loader-logo',         { opacity: 0, scale: 0.85 });
    gsap.set(['.loader-name', '.loader-since'], { opacity: 0, y: 12 });
    gsap.set('.loader-divider span', { scaleX: 0 });

    gsap.timeline({ onComplete: finishLoading })
      // 1. Cardinal arms extend from centre
      .to('.loader-arm',         { strokeDashoffset: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' })
      // 2. Main ring draws
      .to('.loader-ring-fill',   { strokeDashoffset: 0, duration: 0.95, ease: 'power2.inOut' }, '-=0.2')
      // 3. Logo scales in while ring is drawing
      .to('.loader-logo',        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' }, '-=0.75')
      // 4. Diagonal ticks
      .to('.loader-tick',        { opacity: 1, duration: 0.15, stagger: 0.05 }, '-=0.35')
      // 5. Cardinal accent dots
      .to('.loader-accent',      { opacity: 1, scale: 1, duration: 0.2, stagger: 0.06, ease: 'back.out(2.5)' }, '-=0.25')
      // 6. Divider + text
      .to('.loader-divider span',{ scaleX: 1, duration: 0.3, ease: 'power3.inOut' }, '-=0.05')
      .to('.loader-name',        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2')
      .to('.loader-since',       { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, '-=0.12')
      // 7. Screen fades out
      .to('#loading-screen',     { opacity: 0, duration: 0.5, ease: 'power2.out' }, '+=0.25');
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

    const INTERVAL      = 6000;  // ms between slides
    const FADE_DURATION = 1.2;   // crossfade seconds
    const KB_DURATION   = 9;     // Ken Burns seconds
    const KB_FROM       = 1.06;
    const KB_TO         = 1.0;

    let current     = 0;
    let timer       = null;
    let isAnimating = false;

    // One GSAP tween slot per slide for Ken Burns
    const kbTweens = new Array(slides.length).fill(null);

    function startKenBurns(idx) {
      const img = slides[idx].querySelector('img');
      if (!img) return;
      // Always restart from the zoomed-in position
      gsap.set(img, { scale: KB_FROM });
      kbTweens[idx] = gsap.to(img, {
        scale: KB_TO,
        duration: KB_DURATION,
        ease: 'power2.out',
      });
    }

    function pauseKenBurns(idx) {
      // Pause holds the current scale — no snap, no reset
      if (kbTweens[idx]) { kbTweens[idx].pause(); kbTweens[idx] = null; }
    }

    function resetKenBurns(idx) {
      // Called after the slide has fully faded out — ready for next cycle
      const img = slides[idx].querySelector('img');
      if (img) gsap.set(img, { scale: KB_FROM });
    }

    // ── Initialise ──────────────────────────────────────────────────────────
    if (hasGsap) {
      slides.forEach((s, i) => {
        gsap.set(s, { opacity: i === 0 ? 1 : 0, zIndex: 0 });
        gsap.set(s.querySelector('img'), { scale: KB_FROM });
      });
      if (!reduceMotion) startKenBurns(0);
    } else {
      slides[0].style.opacity = '1';
    }

    // ── Transition ──────────────────────────────────────────────────────────
    function goTo(index) {
      const next = ((index % slides.length) + slides.length) % slides.length;
      if (next === current || isAnimating) return;

      const prevIdx  = current;
      current        = next;
      isAnimating    = true;

      const prevSlide = slides[prevIdx];
      const nextSlide = slides[current];

      // Z-stack: outgoing below, incoming on top
      gsap.set(slides,    { zIndex: 0 });
      gsap.set(prevSlide, { zIndex: 1 });
      gsap.set(nextSlide, { zIndex: 2 });

      // Freeze outgoing Ken Burns at whatever scale it's at
      pauseKenBurns(prevIdx);

      // ARIA + dot indicators
      prevSlide.classList.remove('is-active');
      prevSlide.setAttribute('aria-hidden', 'true');
      dots[prevIdx].classList.remove('is-active');
      dots[prevIdx].setAttribute('aria-selected', 'false');

      nextSlide.classList.add('is-active');
      nextSlide.setAttribute('aria-hidden', 'false');
      dots[current].classList.add('is-active');
      dots[current].setAttribute('aria-selected', 'true');

      // Start Ken Burns on the incoming slide
      if (!reduceMotion) startKenBurns(current);

      if (hasGsap && !reduceMotion) {
        // Crossfade in the incoming slide
        gsap.to(nextSlide, {
          opacity: 1,
          duration: FADE_DURATION,
          ease: 'power1.inOut',
          onComplete: () => {
            // Outgoing is now hidden — reset its scale for the next cycle
            gsap.set(prevSlide, { opacity: 0, zIndex: 0 });
            resetKenBurns(prevIdx);
            isAnimating = false;
          }
        });
      } else {
        prevSlide.style.opacity = '0';
        nextSlide.style.opacity = '1';
        isAnimating = false;
      }
    }

    function start() {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), INTERVAL);
    }

    function stop() { clearInterval(timer); }

    start();

    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.addEventListener('mouseenter', stop,  { passive: true });
      heroEl.addEventListener('mouseleave', start, { passive: true });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { stop(); goTo(i); start(); });
    });

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
