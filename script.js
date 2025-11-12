// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  toggleBodyScroll(navLinks.classList.contains('active'));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    toggleBodyScroll(false);
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    toggleBodyScroll(false);
  }
});

function toggleBodyScroll(disable) {
  document.body.style.overflow = disable ? 'hidden' : 'auto';
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  });
});

// ===== TYPEWRITER EFFECT =====
const typewriterElement = document.getElementById('typewriter');
const texts = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'Backend Developer',
  'Problem Solver',
  'Tech Enthusiast'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeWriter, typingSpeed);
}

setTimeout(typeWriter, 1000);

// ===== SCROLL REVEAL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ===== NAVBAR SCROLL EFFECT =====
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    nav.style.boxShadow = '0 2px 15px rgba(0, 212, 255, 0.2)';
  } else {
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ===== ANIMATE STATS ON SCROLL =====
const statsSection = document.querySelector('.hero-stats');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      animateStats();
      hasAnimated = true;
    }
  });
}, { threshold: 0.5 });

if (statsSection) {
  statsObserver.observe(statsSection);
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const text = stat.textContent;
    const hasPlus = text.includes('+');
    const isBS = text === 'BS';
    const number = parseInt(text);
    
    if (isBS) return;
    
    if (!isNaN(number)) {
      let current = 0;
      const increment = number / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          stat.textContent = hasPlus ? number + '+' : number;
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(current) + (hasPlus ? '+' : '');
        }
      }, 30);
    }
  });
}

// ===== SCROLL INDICATOR HIDE =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    } else {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
    }
  });
}

// ===== PARALLAX EFFECT FOR GRADIENT ORBS =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const orbs = document.querySelectorAll('.gradient-orb');
  
  orbs.forEach((orb, index) => {
    const speed = 0.3 + (index * 0.1);
    orb.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===== SKILL CARDS INTERACTION =====
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.05)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ===== PROJECT CARDS HOVER EFFECT =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    const otherCards = Array.from(projectCards).filter(c => c !== this);
    otherCards.forEach(c => {
      c.style.opacity = '0.6';
      c.style.transform = 'scale(0.98)';
    });
  });
  
  card.addEventListener('mouseleave', function() {
    projectCards.forEach(c => {
      c.style.opacity = '1';
      c.style.transform = 'scale(1)';
    });
  });
});

// ===== CURSOR TRAIL EFFECT (OPTIONAL - SUBTLE) =====
let cursorTrail = [];
const trailLength = 5;

document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 768) {
    cursorTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    if (cursorTrail.length > trailLength) {
      cursorTrail.shift();
    }
  }
});

// ===== PRELOAD IMAGES =====
window.addEventListener('load', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });
});

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== SECTION NAVIGATION HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Welcome to my portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Muhammad Shahbaz', 'color: #a8b2c1; font-size: 14px;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #00d4ff; font-size: 14px;');