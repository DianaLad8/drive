import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';

const indexPage = document.querySelector('[data-index]');


const swiperDirections = new Swiper('.directions__slider', {
  modules: [Autoplay],
  initialSlide: 2,
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  slidesPerGroup: 1,
  spaceBetween: 10,
  direction: 'vertical',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  on: {
    init() {
      setTimeout(() => {
        this.update();
      }, 100);
    },
  },
});

const initDirectionsSlider = () => {
  if (indexPage) {
    const breakpoint = window.matchMedia('(min-width:768px)');
    const breakpointChecker = () => {
      if (breakpoint.matches) {
        swiperDirections.init();
      } else {
        swiperDirections.destroy();
      }
    };
    // breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
};

export {swiperDirections, initDirectionsSlider};
