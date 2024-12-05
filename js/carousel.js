export function initCarousel() {
  $(document).ready(function () {
    var owl = $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
          margin: 16
        },
        640: {
          items: 2,
          margin: 20
        },
        1024: {
          items: 3,
          margin: 24
        },
        1200: {
          items: 4,
          margin: 24
        }
      }
    });

    $("#prevSlide").click(function () {
      owl.trigger("prev.owl.carousel");
    });

    $("#nextSlide").click(function () {
      owl.trigger("next.owl.carousel");
    });
  });
}
