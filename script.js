document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Navbar Scroll Effect (Adds a shadow and shrinks slightly when scrolling)
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.padding = '16px 0';
    }
  });

  // 2. Refined Scroll Reveal Animation
  // First, we add the base CSS classes dynamically so the site still works if JS is disabled
  const animateElements = document.querySelectorAll('.project-card, .education-card, .skill-category, .about-text');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  // Then we use IntersectionObserver to trigger the animations when they enter the screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        // Stop observing once animated so it doesn't repeat unnecessarily
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1, 
    rootMargin: "0px 0px -50px 0px" 
  });

  animateElements.forEach(el => observer.observe(el));
});