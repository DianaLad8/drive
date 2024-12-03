const catalogPade = document.querySelector('[data-catalog]');

const toggleCountriesList = () => {
  if (catalogPade) {
    const buttonsToggleCountriesList = catalogPade.querySelectorAll('[data-countries-toggle]');
    const countriesToggleMain = catalogPade.querySelector('[data-countries-toggle-main]');
    const countriesList = catalogPade.querySelector('[data-countries-list]');
    const countriesSubtitle = catalogPade.querySelector('[data-countries-subtitle]');


    buttonsToggleCountriesList.forEach((button) => {
      button.addEventListener('click', () => {

        countriesList.classList.toggle('is-open');
        countriesToggleMain.classList.toggle('is-open');
        countriesSubtitle.classList.toggle('is-open');


        const buttonToggletMainOpen = countriesToggleMain.classList.contains('is-open');
        const countriesToggleMainText = countriesToggleMain.querySelector('[data-countries-toggle-text]');
        const iconUse = countriesToggleMain.querySelector('use');

        if (buttonToggletMainOpen) {
          iconUse.setAttribute('xlink:href', 'img/sprite.svg#icon-close');
          countriesToggleMainText.textContent = 'свернуть';
        } else {
          iconUse.setAttribute('xlink:href', 'img/sprite.svg#points');
          countriesToggleMainText.textContent = 'показать все';
        }
      });
    });
  }
};

export {toggleCountriesList};
