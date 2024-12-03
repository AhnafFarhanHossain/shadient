export function initCompaniesAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".companies__top", {
        scrollTrigger: {
            trigger: ".companies",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".slider__item", {
        scrollTrigger: {
            trigger: ".slider",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });
}
