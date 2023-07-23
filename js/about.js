import { sharedSwiperOptions } from "./helpers.js";
import { setHeaderHeightAndMargin } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  //  swiper for success partners
  new Swiper("#partnersSwiper", {
    ...sharedSwiperOptions,
    observer: true,
    observeParents: true,
    // autoplay: false,
    pagination: {
      el: ".swiper-pagination",
    },
    //autoplay: false,
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
  });
});
