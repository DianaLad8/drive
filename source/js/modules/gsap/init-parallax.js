import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const indexPage = document.querySelector('[data-index]');

const initParallax = () => {
  if (indexPage) {
    gsap.to('[data-parallax-image]', {
      scrollTrigger: {
        trigger: '[data-parallax-parent]',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      y: 0,
    });
  }
};

export {initParallax};
