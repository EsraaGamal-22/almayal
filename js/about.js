import { sharedSwiperOptions } from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper("#partnersSwiper", {
    ...sharedSwiperOptions,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: false,
    slidesPerView: 5,
    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetweenSlides: 50,
      },

      499: {
        slidesPerView: 2,
        // spaceBetweenSlides: 50,
      },
      999: {
        slidesPerView: 3,
        // spaceBetweenSlides: 50,
      },
      1200: {
        slidesPerView: 5,
        // spaceBetweenSlides: 50,
      },
    },
  })
});
