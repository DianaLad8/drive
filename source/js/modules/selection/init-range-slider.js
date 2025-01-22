import noUiSlider from 'nouislider';

const catalogPade = document.querySelector('[data-catalog]');

const initRangeSlider = () => {
  if (catalogPade) {
    const selectionSlider = catalogPade.querySelector('[data-selection-slider]');

    noUiSlider.create(selectionSlider, {
      range: {
        min: 0,
        max: 100,
      },
      start: [30, 100],
      step: 1,
      connect: true,
      format: {
        to(value) {
          return value;
        },
        from(value) {
          return parseFloat(value);
        },
      },
    });

    const inputMin = document.querySelector('[data-input-min]');
    const inputMax = document.querySelector('[data-input-max]');

    selectionSlider.noUiSlider.on('update', function (values, handle) {
      let value = values[handle];

      if (handle) {
        inputMax.value = value;
      } else {
        inputMin.value = value;
      }
    });

    inputMax.addEventListener('change', function () {
      selectionSlider.noUiSlider.set([null, this.value]);
    });

    inputMin.addEventListener('change', function () {
      selectionSlider.noUiSlider.set([this.value, null]);
    });
  }
};

export {initRangeSlider};
