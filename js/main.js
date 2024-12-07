import { initHeroAnimations } from "./hero.js";
import { initCompaniesAnimations } from "./companies.js";
import { initServicesAnimations } from "./services.js";
import { initWhyChooseUsAnimations } from "./why-choose-us.js";
import { initWorksAnimation } from "./works.js";
import { initNavbar } from "./navbar.js";
import { initCarousel } from "./carousel.js";
import { initTestimonialsAnimations } from "./testimonials.js";
import "./slider.js";
import { initLenis } from "./lenis.js";
import { initCtaAnimation } from "./cta.js";

// Initialize all components
document.addEventListener("DOMContentLoaded", () => {
  initNavbar(); // Initialize navbar
  initLenis();
  initHeroAnimations();
  initCompaniesAnimations();
  initServicesAnimations();
  initWhyChooseUsAnimations();
  initWorksAnimation();
  initCarousel();
  initTestimonialsAnimations(); // Initialize testimonials animations
  initCtaAnimation(); // Initialize CTA animations
});
