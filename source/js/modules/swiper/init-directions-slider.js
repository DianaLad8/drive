import Swiper from 'swiper';
import {Autoplay} from 'swiper/modules';

const indexPage = document.querySelector('[data-index]');


const swiperDirections = new Swiper('.directions__slider', {
  modules: [Autoplay],
  width: 619,
  height: 140,
  initialSlide: 0,
  loop: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 10,
  direction: 'vertical',
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
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
