import { initHeroAnimations } from './hero.js';
import { initCompaniesAnimations } from './companies.js';
import { initServicesAnimations } from './services.js';
import { initWhyChooseUsAnimations } from './why-choose-us.js';
import { initWorksAnimation } from './works.js';
import { initNavbar } from './navbar.js';
import './slider.js';
import './lenis.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initNavbar(); // Initialize navbar
    initHeroAnimations();
    initCompaniesAnimations();
    initServicesAnimations();
    initWhyChooseUsAnimations();
    initWorksAnimation();
});