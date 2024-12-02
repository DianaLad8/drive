import noUiSlider from 'nouislider';

const catalogPade = document.querySelector('[data-catalog]');


const initRangeSlider = () => {
  if (catalogPade) {
    const sliderElement = catalogPade.querySelector('.selection__slider');

    console.log(sliderElement);


    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 100,
      },
      start: 30,
      step: 1,
      connect: 'upper',
    });

  }
}

export {initRangeSlider};
