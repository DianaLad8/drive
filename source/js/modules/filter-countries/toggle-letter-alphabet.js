const catalogPade = document.querySelector('[data-catalog]');

function removeClassActive(button) {
  const buttonLetterActive = button.classList.contains('is-active');
  if (buttonLetterActive) {
    button.classList.remove('is-active');
  }
}

const toggleLetterAlphabet = () => {
  if (catalogPade) {
    const breakpoint = window.matchMedia('(min-width:1023px)');
    const breakpointChecker = () => {
      if (!breakpoint.matches) {
        const buttonsLetter = catalogPade.querySelectorAll('[data-letter]');
        const buttonLetterActiveDefault = catalogPade.querySelector('[data-default-active]');


        buttonsLetter.forEach((button) => {
          removeClassActive(button);

          buttonLetterActiveDefault.classList.add('is-active');
          button.addEventListener('click', (evt) => {
            const currentButton = evt.target;

            buttonsLetter.forEach((letter) => {
              removeClassActive(letter);
            });

            currentButton.classList.add('is-active');
          });
        });
      }
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
};

export {toggleLetterAlphabet};
