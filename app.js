// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from("#home h1", { duration: 1.5, opacity: 0, y: -50, ease: "power4.out" });
gsap.from("#home p", { duration: 1.5, opacity: 0, y: 50, delay: 0.3, ease: "power4.out" });

// Scroll Animations
gsap.from("#about", {
  scrollTrigger: "#about",
  duration: 1,
  opacity: 0,
  y: 50,
});

gsap.from("#projects .project", {
  scrollTrigger: "#projects",
  duration: 1,
  opacity: 0,
  scale: 0.8,
  stagger: 0.3,
});

gsap.from("#skills ul li", {
  scrollTrigger: "#skills",
  duration: 1,
  opacity: 0,
  x: -50,
  stagger: 0.2,
});

gsap.from("#contact form", {
  scrollTrigger: "#contact",
  duration: 1,
  opacity: 0,
  scale: 0.9,
});
