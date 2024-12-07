// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export function initCtaAnimation() {
  // Create a timeline for CTA animations
  const ctaTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  // Split text animation for the title
  const title = document.querySelector(".cta__title");
  const titleText = title.textContent;
  title.innerHTML = titleText
    .split("")
    .map((char) =>
      char === " " ? " " : `<span style="display: inline-block">${char}</span>`
    )
    .join("");

  // Animate each letter of the title
  ctaTimeline
    .from(".cta__title span", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.02,
      ease: "power2.out",
    })
    // Animate the paragraph
    .from(
      ".cta__content p",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    // Animate the input field and button together
    .from(
      ".input__group",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    )

  // Hover animations for buttons
  const buttons = document.querySelectorAll(".cta__btn, .go-to-top__btn");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Scroll to top functionality
  const goToTopBtn = document.querySelector(".go-to-top__btn");
  goToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
