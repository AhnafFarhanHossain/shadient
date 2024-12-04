import { initHeroAnimations } from './hero.js';
import { initCompaniesAnimations } from './companies.js';
import { initServicesAnimations } from './services.js';
import { initWhyChooseUsAnimations } from './why-choose-us.js';
import { initWorksAnimation } from './works.js';
import { initNavbar } from './navbar.js';
import './slider.js';
import { initLenis } from './lenis.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initNavbar(); // Initialize navbar
    initHeroAnimations();
    initCompaniesAnimations();
    initServicesAnimations();
    initWhyChooseUsAnimations();
    initWorksAnimation();
});