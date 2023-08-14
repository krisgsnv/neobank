import { Navigation } from "swiper/modules";

export const sliderProps = {
  modules: [Navigation],
  slidesPerView: 1.3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  slidesOffsetBefore: 4,
  slidesOffsetAfter: 4,
  allowTouchMove: false,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  navigation: {
    disabledClass: "news-slider-nav__btn_disabled",
    nextEl: ".news-slider-nav__btn_next",
    prevEl: ".news-slider-nav__btn_prev",
  },
  wrapperClass: "news-slider__wrapper",
  breakpoints: {
    500: { slidesPerView: 1.45, spaceBetween: 40 },
    700: { slidesPerView: 2.45, spaceBetween: 60 },
    1200: { slidesPerView: 3.45, spaceBetween: 80 },
  },
};
