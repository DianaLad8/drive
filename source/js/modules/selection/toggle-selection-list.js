const catalogPade = document.querySelector('[data-catalog]');

const toggleSelectionList = () => {
  if (catalogPade) {
    const buttonsToggleSelectionList = catalogPade.querySelectorAll('[data-fieldset-toggle]');

    buttonsToggleSelectionList.forEach((button) => {
      button.addEventListener('click', (e) => {
        const currentTarget = e.target;
        const currentFieldset = currentTarget.closest('[data-fieldset]');
        const currentSelectionList = currentFieldset.querySelector('[data-selection-list]');
        const currentButton = currentFieldset.querySelector('[data-fieldset-toggle]');

        currentButton.classList.toggle('is-open');
        currentSelectionList.classList.toggle('is-open');
      });
    });
  }
};

export {toggleSelectionList};
