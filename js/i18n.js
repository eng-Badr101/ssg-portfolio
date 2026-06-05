'use strict';

// ─── Translation data ────────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    // Loader
    'loader-name':  'Al-Salam Scouting Groups',
    'loader-since': 'Since 1977',

    // Nav
    'nav-about':     'Who We Are',
    'nav-impact':    'Impact',
    'nav-partners':  'Partners',
    'nav-programs':  'Programs',
    'nav-camps':     'Expeditions',
    'nav-ceremony':  'Ceremony',
    'nav-gallery':   'Gallery',
    'nav-contact':   'Contact Us',
    'lang-toggle':   'ع',

    // Hero
    'hero-headline':     'Building<br>Leaders',
    'hero-kicker':       'Living Impact Report',
    'hero-body':         'Since 1977, Al-Salam Scouting Groups has helped young people practice leadership in real settings: camps, ceremonies, service projects, and community life.',
    'hero-link':         'Explore partnership opportunities',
    'hero-caption-city': 'Cairo, Egypt',
    'hero-caption-year': 'Youth development since 1977',

    // Chapter 01 — About
    'ch01-number':    'CHAPTER 01',
    'ch01-bg':        'IDENTITY',
    'ch01-title':     'Growing People Before Skills',
    'ch01-narrative': 'A scouting community shaped by discipline, care, and real responsibility. SSG develops young people through leadership, teamwork, and character-building experiences.',
    'about-id-num':   '01',
    'about-id-head':  'Identity',
    'about-id-sub':   'A scouting community shaped by discipline, care, and real responsibility since 1977.',
    'about-id-body':  'Built on the belief that young people grow best through doing — not watching. Every camp, ceremony, and service project is designed to develop a capable, confident human being.',
    'about-est':      'Est. 1977',
    'about-quote':    '“We don’t just build scouts — we build the people who build communities.”',
    'about-mis-num':  '02',
    'about-mis-head': 'Mission',
    'about-mis-sub':  'Prepare disciplined, helpful, confident young people ready to serve their community.',
    'about-mis-body': 'We measure success not in trophies, but in the quiet confidence scouts carry into adulthood — the kind earned through real responsibility and shared hardship.',
    'pillar1-title':  'Character First',
    'pillar1-body':   'We develop the person before the skill. Discipline, honesty, and care come before any badge or title.',
    'pillar2-title':  'Community Above Self',
    'pillar2-body':   'Every program connects young people to a responsibility larger than themselves — service is not optional.',
    'pillar3-title':  'Growth Through Challenge',
    'pillar3-body':   'Real growth happens outside comfort zones — in wilderness camps, public ceremonies, and hands-on service.',

    // Chapter 02 — Impact
    'ch02-number':    'CHAPTER 02',
    'ch02-bg':        'PROOF',
    'ch02-title':     'Proof That Growth Compounds',
    'ch02-narrative': 'Growth becomes visible when confidence turns into action. SSG’s work is measured in continuity and the courage to participate.',
    'metric1-title':  'Active Scouts',
    'metric1-body':   'Building confidence and courage through shared responsibility.',
    'metric2-title':  'Years of Legacy',
    'metric2-body':   'Continuous operation and community presence since 1977.',
    'metric3-title':  'Development Stages',
    'metric3-body':   'Specialized progressive programs from Beavers to Rovers.',
    'metric4-title':  'Specialized Committees',
    'metric4-body':   'Supporting the vision through dedicated operations and logistics.',

    // Testimonial
    'testimonial-quote': '“SSG gave my son the confidence to lead. After three years with the group, I watched him stand in front of 300 people and speak with certainty.”',
    'testimonial-cite':  'Parent of a Scout — Al-Salam Scouting Groups, 2024',

    // Chapter 03 — Partners
    'ch03-number':     'CHAPTER 03',
    'ch03-bg':         'TRUST',
    'ch03-title':      'Growth Requires Allies',
    'ch03-narrative':  'Partnerships help young people meet the wider professional world. We work with organizations that believe in education and positive social impact.',
    'partner1-title':  'Educational Access',
    'partner1-body':   'Host visits, share professional knowledge, and open real workplaces to curious scouts.',
    'partner2-title':  'Social Responsibility',
    'partner2-body':   'Support camps, community service, and annual events with visible human outcomes.',
    'partner3-title':  'Leadership Development',
    'partner3-body':   'SSG works with organizations that believe in education and positive social impact.',
    'partner4-title':  'Long-Term Legacy',
    'partner4-body':   'Build sustainable programs that continue beyond a single event or season.',
    'partners-label':  'Current &amp; past partner organizations',
    'logo-slot':       'Your Logo Here',

    // Chapter 04 — Programs
    'ch04-number':    'CHAPTER 04',
    'ch04-bg':        'ACTION',
    'ch04-title':     'Learning By Doing',
    'ch04-narrative': 'Programs designed as lived experience, not classroom theory. Scouts learn outdoors, on stage, inside communities, and through visits that connect curiosity with real professional life.',
    'prog1-label':    'Core Scouting',
    'prog1-title':    'Core Scouting',
    'prog1-body':     'Age-appropriate activities across beavers, cubs, scouts, guides, seniors, and rovers.',
    'prog2-label':    'Exposure',
    'prog2-title':    'Educational Exposure',
    'prog2-body':     'Visits, workshops, and career encounters.',
    'prog3-label':    'Teamwork',
    'prog3-title':    'Teamwork',
    'prog3-body':     'Challenges that teach listening and trust.',
    'prog4-label':    'Service',
    'prog4-title':    'Service',
    'prog4-body':     'Community projects that make responsibility tangible and visible.',

    // Chapter 05 — Expeditions
    'ch05-number':    'CHAPTER 05',
    'ch05-bg':        'ADVENTURE',
    'ch05-title':     'Beyond Familiar Horizons',
    'ch05-narrative': 'A single expedition can teach more about leadership than months of classroom instruction.',
    'journey1-title': 'Exploration',
    'journey1-body':  'When scouts leave the city, they meet new landscapes, new limits, and new versions of themselves.',
    'journey2-title': 'Challenge',
    'journey2-body':  'Weather, distance, logistics, and shared problem-solving.',
    'journey3-title': 'Teamwork',
    'journey3-body':  'Leadership becomes visible in how scouts care for one another.',
    'journey4-title': 'Transformation',
    'journey4-body':  'The moment effort turns into confidence and memory.',

    // Chapter 06 — Ceremony
    'ch06-number':       'CHAPTER 06',
    'ch06-bg':           'RECOGNITION',
    'ch06-title':        'Where Achievement Becomes Visible',
    'ch06-narrative':    'The closing ceremony gathers scouts, families, leaders, and partners around a year of work. Performance and shared pride become evidence of progress.',
    'cer-perf-label':    'Performance',
    'cer-perf-title':    'The Stage Moment',
    'cer-perf-body':     'Scouts performing in front of families, leaders, and community — confidence made visible.',
    'cer-recog':         'Recognition',
    'cer-crowd':         'The Crowd',
    'cer-awards':        'Awards',
    'cer-families':      'Families',
    'cer-group':         'Group Photo',
    'cer-legacy':        'Legacy',

    // Chapter 07 — Gallery
    'ch07-number':    'CHAPTER 07',
    'ch07-bg':        'CULTURE',
    'ch07-title':     'Memories &amp; Culture',
    'ch07-narrative': 'The archive is a record of people becoming capable together. Documentation of every journey, challenge, and celebration.',

    // Lightbox
    'lb-close': 'Close',
    'lb-prev':  'Prev',
    'lb-next':  'Next',

    // Contact
    'contact-kicker':   'Get Involved',
    'contact-headline': 'Partner<br>With<br>Al&#8209;Salam<br>Scouting<br>Groups.',
    'contact-body':     'Your organization can support youth leadership through educational visits, event partnerships, or community initiatives. Every partnership shapes confident young people — and leaves a lasting legacy.',
    'contact-cta':      'Start a Conversation',
    'contact-email':    'Email',
    'contact-follow':   'Follow',
    'contact-loc':      'Location',
    'contact-loc-val':  'Rehab Sporting Club, Cairo',

    // Footer
    'footer-name': 'Al-Salam Scouting Groups',
    'footer-est':  'Established 1977, Rehab Sporting Club, Cairo',
  },

  ar: {
    // Loader
    'loader-name':  'مجموعات السلام الكشفية',
    'loader-since': 'منذ عام ١٩٧٧',

    // Nav
    'nav-about':    'من نحن',
    'nav-impact':   'الأثر',
    'nav-partners': 'الشركاء',
    'nav-programs': 'البرامج',
    'nav-camps':    'الرحلات',
    'nav-ceremony': 'الحفل',
    'nav-gallery':  'المعرض',
    'nav-contact':  'تواصل معنا',
    'lang-toggle':  'EN',

    // Hero
    'hero-headline':     'نبني<br>القادة',
    'hero-kicker':       'تقرير الأثر الحي',
    'hero-body':         'منذ عام 1977، ساعدت مجموعات السلام الكشفية الشباب على ممارسة القيادة في بيئات حقيقية: المخيمات، والحفلات، ومشاريع الخدمة، والحياة المجتمعية.',
    'hero-link':         'استكشف فرص الشراكة',
    'hero-caption-city': 'القاهرة، مصر',
    'hero-caption-year': 'تنمية الشباب منذ عام 1977',

    // Chapter 01 — About
    'ch01-number':    'الفصل الأول',
    'ch01-bg':        'الهوية',
    'ch01-title':     'نبني الإنسان قبل المهارة',
    'ch01-narrative': 'مجتمع كشفي يتشكّل بالانضباط والرعاية والمسؤولية الحقيقية. تنمّي SSG الشباب من خلال القيادة والعمل الجماعي وتجارب بناء الشخصية.',
    'about-id-num':   '٠١',
    'about-id-head':  'الهوية',
    'about-id-sub':   'مجتمع كشفي مبني على الانضباط والرعاية والمسؤولية الحقيقية منذ عام 1977.',
    'about-id-body':  'يقوم على الإيمان بأن الشباب ينمو في أفضل حالاته من خلال الفعل لا المشاهدة. كل مخيم وحفلة ومشروع خدمة مصمَّم لتنمية إنسان قادر واثق من نفسه.',
    'about-est':      'تأسست ١٩٧٧',
    'about-quote':    '«نحن لا نبني كشافين فحسب — بل نبني من يبنون المجتمعات.»',
    'about-mis-num':  '٠٢',
    'about-mis-head': 'الرسالة',
    'about-mis-sub':  'إعداد شباب منضبط واثق جاهز لخدمة مجتمعه.',
    'about-mis-body': 'لا نقيس النجاح بالكؤوس، بل بالثقة الهادئة التي يحملها الكشافون في مرحلة البلوغ — تلك الثقة المكتسبة من المسؤولية الحقيقية والمعاناة المشتركة.',
    'pillar1-title':  'الشخصية أولاً',
    'pillar1-body':   'ننمّي الإنسان قبل المهارة. الانضباط والأمانة والرعاية تأتي قبل أي شارة أو لقب.',
    'pillar2-title':  'المجتمع فوق الذات',
    'pillar2-body':   'كل برنامج يربط الشباب بمسؤولية أكبر من أنفسهم — الخدمة ليست اختيارية.',
    'pillar3-title':  'النمو من خلال التحدي',
    'pillar3-body':   'النمو الحقيقي يحدث خارج منطقة الراحة — في مخيمات الطبيعة والحفلات العلنية والخدمة العملية.',

    // Chapter 02 — Impact
    'ch02-number':    'الفصل الثاني',
    'ch02-bg':        'دليل',
    'ch02-title':     'دليل على أن النمو يتراكم',
    'ch02-narrative': 'يصبح النمو مرئياً حين تتحول الثقة إلى فعل. يُقاس عمل SSG بالاستمرارية وشجاعة المشاركة.',
    'metric1-title':  'كشاف نشط',
    'metric1-body':   'بناء الثقة والشجاعة من خلال المسؤولية المشتركة.',
    'metric2-title':  'عاماً من الإرث',
    'metric2-body':   'حضور مجتمعي مستمر منذ عام 1977.',
    'metric3-title':  'مراحل تنموية',
    'metric3-body':   'برامج تدريجية متخصصة من البيفرز حتى الروفرز.',
    'metric4-title':  'لجان متخصصة',
    'metric4-body':   'تدعم الرؤية من خلال العمليات واللوجستيات المخصصة.',

    // Testimonial
    'testimonial-quote': '«منحت SSG ابني الثقة ليقود. بعد ثلاث سنوات مع المجموعة، شاهدته يقف أمام ٣٠٠ شخص ويتحدث بيقين.»',
    'testimonial-cite':  'ولي أمر كشاف — مجموعات السلام الكشفية، 2024',

    // Chapter 03 — Partners
    'ch03-number':    'الفصل الثالث',
    'ch03-bg':        'ثقة',
    'ch03-title':     'النمو يحتاج إلى حلفاء',
    'ch03-narrative': 'تساعد الشراكات الشباب على الاحتكاك بالعالم المهني الأوسع. نعمل مع مؤسسات تؤمن بالتعليم والأثر الاجتماعي الإيجابي.',
    'partner1-title': 'الوصول التعليمي',
    'partner1-body':  'استقبال الزيارات ومشاركة المعرفة المهنية وفتح بيئات العمل الحقيقية أمام الكشافين.',
    'partner2-title': 'المسؤولية الاجتماعية',
    'partner2-body':  'دعم المخيمات وخدمة المجتمع والفعاليات السنوية ذات النتائج الإنسانية المرئية.',
    'partner3-title': 'تطوير القيادة',
    'partner3-body':  'تعمل SSG مع مؤسسات تؤمن بالتعليم والأثر الاجتماعي الإيجابي.',
    'partner4-title': 'إرث طويل الأمد',
    'partner4-body':  'بناء برامج مستدامة تستمر ما بعد الفعالية أو الموسم الواحد.',
    'partners-label': 'المنظمات الشريكة الحالية والسابقة',
    'logo-slot':      'شعارك هنا',

    // Chapter 04 — Programs
    'ch04-number':    'الفصل الرابع',
    'ch04-bg':        'فعل',
    'ch04-title':     'التعلم بالفعل',
    'ch04-narrative': 'برامج مصممة كتجربة حية لا نظرية صفية. يتعلم الكشافون في الهواء الطلق وعلى المسرح وداخل المجتمعات ومن خلال زيارات تربط الفضول بالحياة المهنية الحقيقية.',
    'prog1-label':    'الكشافة الأساسية',
    'prog1-title':    'الكشافة الأساسية',
    'prog1-body':     'أنشطة مناسبة للعمر عبر مراحل البيفرز والأشبال والكشافة والمرشدات والكبار والروفرز.',
    'prog2-label':    'الانكشاف',
    'prog2-title':    'الانكشاف التعليمي',
    'prog2-body':     'زيارات وورش عمل ولقاءات مهنية.',
    'prog3-label':    'العمل الجماعي',
    'prog3-title':    'العمل الجماعي',
    'prog3-body':     'تحديات تعلّم الإنصات والثقة.',
    'prog4-label':    'الخدمة',
    'prog4-title':    'الخدمة',
    'prog4-body':     'مشاريع مجتمعية تجعل المسؤولية ملموسة ومرئية.',

    // Chapter 05 — Expeditions
    'ch05-number':    'الفصل الخامس',
    'ch05-bg':        'مغامرة',
    'ch05-title':     'ما وراء الأفق المألوف',
    'ch05-narrative': 'رحلة واحدة يمكنها أن تعلّم من القيادة أكثر مما تعلّمه أشهر من الدراسة النظرية.',
    'journey1-title': 'الاستكشاف',
    'journey1-body':  'حين يغادر الكشافون المدينة، يلتقون بمناظر جديدة وحدود جديدة ونسخ جديدة من أنفسهم.',
    'journey2-title': 'التحدي',
    'journey2-body':  'الطقس والمسافة واللوجستيات وحل المشكلات المشترك.',
    'journey3-title': 'العمل الجماعي',
    'journey3-body':  'تصبح القيادة مرئية في طريقة اهتمام الكشافين ببعضهم.',
    'journey4-title': 'التحول',
    'journey4-body':  'اللحظة التي يتحول فيها الجهد إلى ثقة وذاكرة.',

    // Chapter 06 — Ceremony
    'ch06-number':    'الفصل السادس',
    'ch06-bg':        'تقدير',
    'ch06-title':     'حيث يصبح الإنجاز مرئياً',
    'ch06-narrative': 'يجمع حفل الختام الكشافين والعائلات والقادة والشركاء حول عام من العمل. الأداء والفخر المشترك يصبحان دليلاً على التقدم.',
    'cer-perf-label': 'الأداء',
    'cer-perf-title': 'لحظة المسرح',
    'cer-perf-body':  'كشافون يؤدون أمام العائلات والقادة والمجتمع — الثقة تصبح مرئية.',
    'cer-recog':      'التكريم',
    'cer-crowd':      'الجمهور',
    'cer-awards':     'الجوائز',
    'cer-families':   'العائلات',
    'cer-group':      'صورة جماعية',
    'cer-legacy':     'الإرث',

    // Chapter 07 — Gallery
    'ch07-number':    'الفصل السابع',
    'ch07-bg':        'ثقافة',
    'ch07-title':     'ذكريات وثقافة',
    'ch07-narrative': 'الأرشيف سجل لأشخاص يصبحون قادرين معاً. توثيق لكل رحلة وتحدٍّ واحتفال.',

    // Lightbox
    'lb-close': 'إغلاق',
    'lb-prev':  'السابق',
    'lb-next':  'التالي',

    // Contact
    'contact-kicker':   'انضم إلينا',
    'contact-headline': 'كن شريكاً<br>لمجموعات<br>السلام<br>الكشفية.',
    'contact-body':     'يمكن لمؤسستك دعم قيادة الشباب من خلال الزيارات التعليمية أو شراكات الفعاليات أو المبادرات المجتمعية. كل شراكة تصنع شباباً واثقاً — وتترك إرثاً دائماً.',
    'contact-cta':      'ابدأ المحادثة',
    'contact-email':    'البريد',
    'contact-follow':   'تابعنا',
    'contact-loc':      'الموقع',
    'contact-loc-val':  'نادي الرحاب الرياضي، القاهرة',

    // Footer
    'footer-name': 'مجموعات السلام الكشفية',
    'footer-est':  'تأسست 1977، نادي الرحاب الرياضي، القاهرة',
  }
};

// ─── Core switch logic ───────────────────────────────────────────────────────
function applyLanguage(lang) {
  const t    = TRANSLATIONS[lang];
  const html = document.documentElement;

  // Update html attributes
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  html.setAttribute('data-lang', lang);

  // Update all keyed elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Elements that contain HTML (headlines with <br>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Persist choice
  try { localStorage.setItem('ssg-lang', lang); } catch (_) {}
}

// ─── Init ───────────────────────────────────────────────────────────────────
function initI18n() {
  // Read saved preference (default English)
  let saved = 'en';
  try { saved = localStorage.getItem('ssg-lang') || 'en'; } catch (_) {}
  if (!TRANSLATIONS[saved]) saved = 'en';

  const btn       = document.getElementById('lang-toggle');
  const btnMobile = document.getElementById('lang-toggle-mobile');
  if (!btn && !btnMobile) return;

  // Apply on load (if Arabic was saved)
  if (saved === 'ar') applyLanguage('ar');

  function handleToggle() {
    const current = document.documentElement.getAttribute('data-lang') || 'en';
    applyLanguage(current === 'en' ? 'ar' : 'en');
  }

  if (btn)       btn.addEventListener('click', handleToggle);
  if (btnMobile) btnMobile.addEventListener('click', handleToggle);
}

document.addEventListener('DOMContentLoaded', initI18n);
