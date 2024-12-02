import { initLenis } from './lenis.js';
import { initNavbar } from './navbar.js';

// Initialize smooth scrolling
const lenis = initLenis();

// Initialize navbar
initNavbar();

// Lenis Smooth Scroll
const lenisInstance = new Lenis();

function raf(time) {
  lenisInstance.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function initInfiniteSlider(sliderClass) {
  const slider = document.querySelector(sliderClass);
  if (!slider) return;

  // Calculate how many clones we need for smooth scrolling
  const items = slider.querySelectorAll('.slider__item');
  const itemCount = items.length;
  const itemsNeeded = Math.ceil(window.innerWidth / (items[0].offsetWidth + 40)) + 1;
  
  // Clone items as needed
  for (let i = 0; i < itemsNeeded; i++) {
      items.forEach(item => {
          const clone = item.cloneNode(true);
          slider.appendChild(clone);
      });
  }

  // Function to reset animation
  function resetAnimation() {
      slider.style.animation = 'none';
      slider.offsetHeight; // Trigger reflow
      slider.style.animation = null;
  }

  // Reset animation when it completes
  slider.addEventListener('animationend', resetAnimation);
}

// Initialize Sliders
document.addEventListener('DOMContentLoaded', () => {
  initInfiniteSlider('.slider-1');
});