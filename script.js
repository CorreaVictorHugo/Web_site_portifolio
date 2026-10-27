const nav = document.querySelector('nav');
const progress = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function updateScrollUi() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  progress.style.width = `${progressValue}%`;
  nav.classList.toggle('nav-scrolled', scrollTop > 24);
  backToTop.classList.toggle('visible', scrollTop > 520);

  let activeId = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom >= 140) {
      activeId = section.id;
    }
  });

  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('active', isActive);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.setProperty('--card-index', index % 6);
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', updateScrollUi, { passive: true });
window.addEventListener('resize', updateScrollUi);
updateScrollUi();

// Particle Canvas System
(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];
  let beams = [];
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');
  let mouse = { x: -1000, y: -1000 };
  let animationId = null;
  let speed = 1;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function initParticles() {
    nodes = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: (Math.random() * 0.4) + 0.1,
      char: chars[Math.floor(Math.random() * chars.length)]
    }));

    beams = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 150 + 80,
      speed: (Math.random() * 6) + 3,
      opacity: Math.random() * 0.5 + 0.3
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // 1. Upward Beams (Fast)
    beams.forEach(b => {
      b.y -= b.speed * speed;
      if (b.y + b.length < 0) {
        b.y = height + 100;
        b.x = Math.random() * width;
      }
      const g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
      g.addColorStop(0, `rgba(96, 165, 250, ${b.opacity})`);
      g.addColorStop(1, 'transparent');
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x, b.y + b.length);
      ctx.stroke();
    });

    // 2. Interactive Nodes (ASCII)
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Proximity Lines
    ctx.lineWidth = 0.5;
    const linkDist = 120;
    for(let i = 0; i < nodes.length; i++) {
      let n1 = nodes[i];
      for(let j = i + 1; j < nodes.length; j++) {
        let n2 = nodes[j];
        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
        if(d < linkDist) {
          ctx.strokeStyle = `rgba(156, 163, 175, ${0.1 * (1 - d/linkDist)})`;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      n.y += n.vy * speed;
      if(n.y > height + 20) {
        n.y = -20;
        n.x = Math.random() * width;
      }

      let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

      // Dynamic Character Swap
      if (dist < 180 || Math.random() > 0.98) n.char = chars[Math.floor(Math.random() * chars.length)];

      // Mouse Connection
      if (dist < 180) {
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.4 * (1 - dist/180)})`;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.35)';
      ctx.fillText(n.char, n.x, n.y);
    });

    animationId = requestAnimationFrame(draw);
  }

  // Initialize
  resize();
  initParticles();
  draw();

  // Cleanup on page hide
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && animationId) {
      cancelAnimationFrame(animationId);
    } else if (!document.hidden) {
      draw();
    }
  });
})();
