import { sharedSwiperOptions } from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  // >>> header Swiper init
  new Swiper("#headerSwiper", {
    ...sharedSwiperOptions,
    // autoplay: false,
    effect: "fade",
  });

  new Swiper("#servicesSwiper", {
    ...sharedSwiperOptions,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
    },
    spaceBetween: 50,
    slidesPerView: 3,
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
        slidesPerView: 3,
        // spaceBetweenSlides: 50,
      },
    },
    // speed: 9800,
    // delay: 40000,

    // autoplay: false,

    // stretch: 200,
    // slidesPerView: 1,
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetweenSlides: 50,
    //   },

    //   499: {
    //     slidesPerView: 2,
    //     spaceBetweenSlides: 50,
    //   },
    //   999: {
    //     slidesPerView: 3,
    //     spaceBetweenSlides: 50,
    //   },
    // },
  });

  // .........
});
