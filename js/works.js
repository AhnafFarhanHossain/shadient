export function initWorksAnimation() {
    // Select all cards in the works section
    const cards = gsap.utils.toArray('.works .right__grid .card, .works .right__grid .card-xl');
    
    // Create a stagger animation for the cards
    gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".works",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Animate cards on hover
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}
