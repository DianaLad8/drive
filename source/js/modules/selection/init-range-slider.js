import noUiSlider from 'nouislider';

const catalogPade = document.querySelector('[data-catalog]');


const initRangeSlider = () => {
  if (catalogPade) {
    const sliderElement = catalogPade.querySelector('.selection__slider');
    const rangeValue = catalogPade.querySelector('[data-range-value]');

    noUiSlider.create(sliderElement, {
      range: {
        min: 0,
        max: 100,
      },
      start: 30,
      step: 1,
      connect: 'upper',
      format: {
        to: function (value) {
          return value;
        },
        from: function (value) {
          return parseFloat(value);
        },
      },
    });


    sliderElement.noUiSlider.on('update', (...rest) => {
      rangeValue.value = sliderElement.noUiSlider.get();
    });
  }
};

export {initRangeSlider};
