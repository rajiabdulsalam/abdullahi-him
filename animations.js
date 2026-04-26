// ═══════════════════════════════════
//  KOLAWOLE ABDULLAHI — animations.js
// ═══════════════════════════════════
 
document.addEventListener('DOMContentLoaded', function () {
 
  // ── 1. PAGE LOADER ──────────────────────────────────
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('hidden');
      }, 800);
    });
    // Fallback: hide after 2.5s regardless
    setTimeout(function () {
      loader.classList.add('hidden');
    }, 2500);
  }
 
 
  // ── 2. SCROLL REVEAL ────────────────────────────────
  const revealEls = document.querySelectorAll('.scroll-reveal');
 
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
 
  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });
 
 
  // ── 3. SKILL BAR ANIMATION ──────────────────────────
  // Handles both .skill-bar (home) and .sk-fill (about)
  const allBars = document.querySelectorAll('.skill-bar, .sk-fill');
 
  const barObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const width = el.getAttribute('data-width') || '0';
        el.style.width = width + '%';
        barObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
 
  allBars.forEach(function (bar) {
    barObserver.observe(bar);
  });
 
 
  // ── 4. COUNTER ANIMATION ────────────────────────────
  const counters = document.querySelectorAll('.stat-num');
 
  const countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const isDecimal = el.getAttribute('data-decimal') === 'true';
        let start = 0;
        const duration = 1400;
        const step = 16;
        const steps = duration / step;
        const increment = target / steps;
 
        const timer = setInterval(function () {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          if (isDecimal) {
            el.textContent = (start / 10).toFixed(1);
          } else {
            el.textContent = Math.floor(start);
          }
        }, step);
 
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
 
  counters.forEach(function (counter) {
    countObserver.observe(counter);
  });
 
 
  // ── 5. SMOOTH NAV ACTIVE HIGHLIGHT ON SCROLL ────────
  // (for single page sections, optional enhancement)
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0) {
    window.addEventListener('scroll', function () {
      let current = '';
      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
 
      document.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') && link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  }
 
 
  // ── 6. FOCUS CARD TILT ON HOVER ─────────────────────
  document.querySelectorAll('.focus-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / rect.height) * 6;
      const tiltY = -(x / rect.width) * 6;
      card.style.transform = 'perspective(600px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-4px)';
    });
 
    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });
 
 
  // ── 7. PROJECT CARD ENTRANCE STAGGER ────────────────
  const projCards = document.querySelectorAll('.proj-card');
  projCards.forEach(function (card, index) {
    card.style.transitionDelay = (index * 0.1) + 's';
  });
 
 
  // ── 8. STATS BOX HOVER RIPPLE ───────────────────────
  document.querySelectorAll('.stat-box').forEach(function (box) {
    box.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.style.cssText = [
        'position:absolute',
        'border-radius:50%',
        'background:rgba(79,70,229,0.15)',
        'width:80px',
        'height:80px',
        'left:' + (e.offsetX - 40) + 'px',
        'top:' + (e.offsetY - 40) + 'px',
        'transform:scale(0)',
        'animation:ripple 0.6s ease-out forwards',
        'pointer-events:none'
      ].join(';');
 
      box.style.position = 'relative';
      box.style.overflow = 'hidden';
      box.appendChild(ripple);
 
      setTimeout(function () { ripple.remove(); }, 600);
    });
  });
 
  // Inject ripple keyframes
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = '@keyframes ripple{to{transform:scale(4);opacity:0}}';
    document.head.appendChild(style);
  }
 
});