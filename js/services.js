export function initServicesAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".services__title", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".services__text", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from(".wrapper__card", {
        scrollTrigger: {
            trigger: ".services__wrapper",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: {
            amount: 0.8,
            grid: "auto",
            from: "start"
        },
        ease: "power2.out"
    });
}
