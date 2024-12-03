import {gsap} from 'gsap';


const indexPage = document.querySelector('[data-index]');

const initHeroTasks = () => {
  if (indexPage) {
    gsap.to('.hero__task', {scale: 1, opacity: 1, stagger: 0.3,
    });
  }
};

export {initHeroTasks};
