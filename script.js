// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Hero photo slideshow — crossfades every 5s, pauses on reduced-motion
const heroSlides = document.querySelectorAll('#heroSlides .hero__slide');
const heroDots = document.querySelectorAll('#heroDots span');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroSlides.length > 1 && !prefersReducedMotion) {
  let current = 0;
  setInterval(() => {
    heroSlides[current].classList.remove('is-active');
    heroDots[current]?.classList.remove('is-active');
    current = (current + 1) % heroSlides.length;
    heroSlides[current].classList.add('is-active');
    heroDots[current]?.classList.add('is-active');
  }, 5000);
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter form (placeholder — wire up to your provider, e.g. Mailchimp)
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = newsletterForm.querySelector('input[type="email"]').value;
  // TODO: replace with a real request to your email service provider
  console.log('Subscribe requested for:', email);
  newsletterForm.reset();
  alert('Thanks for subscribing! (Hook this form up to your email provider.)');
});
