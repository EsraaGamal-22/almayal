import { sharedSwiperOptions } from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  new Swiper("#partnersSwiper", {
    ...sharedSwiperOptions,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
