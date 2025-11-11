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