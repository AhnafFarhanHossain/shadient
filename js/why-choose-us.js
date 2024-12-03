export function initWhyChooseUsAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    const chooseSection = document.querySelector('.why-choose-us');
    const chooseWrapper = chooseSection.querySelector('.choose__wrapper');
    const leftImage = chooseWrapper.querySelector('.left img');
    const rightContent = chooseWrapper.querySelector('.right');
    const button = rightContent.querySelector('button');

    // Animation timeline
    const chooseTl = gsap.timeline({
        scrollTrigger: {
            trigger: chooseSection,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animate left image
    chooseTl.from(leftImage, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate right content
    chooseTl.from(rightContent, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7');

    // Animate title
    chooseTl.from(rightContent.querySelector('h1'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5');

    // Animate paragraph
    chooseTl.from(rightContent.querySelector('p'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6');

    // Animate button with more prominent visibility
    chooseTl.fromTo(button, 
        {
            scale: 0.5,
            opacity: 0,
            y: 50
        }, 
        {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, 
        '-=0.4'
    );
}
