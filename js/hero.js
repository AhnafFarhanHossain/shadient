export function initHeroAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const heroTl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 1
        }
    });

    heroTl.from(".main__title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2
    })
    .from(".main__text", {
        y: 50,
        opacity: 0,
        duration: 0.8
    }, "-=0.8")
    .from(".main__input-group", {
        y: 30,
        opacity: 0,
        duration: 0.6
    }, "-=0.4");
}
