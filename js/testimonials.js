export function initTestimonialsAnimations() {
    // Animate the testimonials heading and subtext
    gsap.from('.testimonials span', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
        }
    });

    // Animate the testimonial cards with a stagger effect
    gsap.from('.carousel__slide .card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.carousel',
            start: 'top 80%',
        }
    });
}
