import Swiper from 'swiper';

// import {Freemode} from 'swiper/modules';

const indexPage = document.querySelector('[data-index]');


const swiperDirections = new Swiper('.swiper', {
  width: 619,
  height: 140,
  initialSlide: 1,
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 3,
  spaceBetween: 10,
  direction: 'vertical',
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
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
