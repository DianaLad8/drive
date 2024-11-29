const catalogPade = document.querySelector('[data-catalog]');

const initFilterCountries = () => {
  if (catalogPade) {
    const filterButtons = catalogPade.querySelectorAll('[data-filter]');
    const countries = catalogPade.querySelectorAll('[data-continent]');

    countries.forEach((country) => {
      country.style.display = 'none';
    })

    filterButtons.forEach((filter) => {

      function filterActiveCountries (button) {
        const buttonCurrentContinent = button.getAttribute('data-filter');
        const buttonActive = button.classList.contains('is-active');

        countries.forEach((country) => {
          const countryContinent = country.getAttribute('data-continent');

          if (buttonActive) {
            if (countryContinent === buttonCurrentContinent) {
              country.style.display = 'block';
            }
          } else {
            if (countryContinent === buttonCurrentContinent) {
              country.style.display = 'none';
            }
          }
        })
      }

      filterActiveCountries(filter);

      filter.addEventListener('click', (el) => {

        const currentFilter = el.target;

        currentFilter.classList.toggle('is-active');

        filterActiveCountries(filter);

        const filterButtonsArray = [...filterButtons];

        const buttonActiveFilter = filterButtonsArray.filter((button) => {
          const buttonActive = button.classList.contains('is-active');
          return buttonActive;
        })
        if (buttonActiveFilter.length <= 0) {
          countries.forEach((country) => {
            country.style.display = 'block';
          })
        } else {
          // countries.forEach((country) => {
          //   country.style.display = 'none';
          // })
          // filterActiveCountries(filter);
        }
      })
    })
  }
}

export {initFilterCountries};
