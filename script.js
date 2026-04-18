document.addEventListener("DOMContentLoaded", () => {

  // ── Smooth scroll for nav links ──
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
      }
    });
  });

  // ── Navbar scroll effect ──
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  // ── Mobile menu toggle ──
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  let menuOpen = false;

  hamburger.addEventListener("click", () => {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? "flex" : "none";
    hamburger.textContent = menuOpen ? "✕" : "☰";
  });

  window.closeMobile = () => {
    menuOpen = false;
    mobileMenu.style.display = "none";
    hamburger.textContent = "☰";
  };

  // ── Scroll reveal animation ──
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  reveals.forEach(el => observer.observe(el));

  // Also observe section children for stagger
  document.querySelectorAll(
    ".info-card, .skill-group, .project-card, .achieve-card, .contact-card"
  ).forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });

  // ── Active nav link highlight on scroll ──
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute("href") === `#${current}`
        ? "var(--text)"
        : "var(--muted)";
    });
  });

  // ── Subtle parallax on hero orbs ──
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelector(".orb-1").style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    document.querySelector(".orb-2").style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`;
  });

});
