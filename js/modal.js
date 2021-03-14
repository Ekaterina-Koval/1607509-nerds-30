const contactsButton = document.querySelector('.contacts-button');
const modal = document.querySelector('.modal-feedback');
const close = document.querySelector('.modal-close');
const fieldName = modal.querySelector('.feedback-field');
const feedbackForm = modal.querySelector('.feedback-form');
const userName = modal.querySelector('[name=username]');
const eMail = modal.querySelector('[name=email]');
const feedbackText = modal.querySelector('[name=feedback-text]');

const slides = document.querySelectorAll('.feature-item');
const buttons = document.querySelectorAll('.slider-button');

contactsButton.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.remove('visually-hidden');
  modal.classList.add('modal-open');
  fieldName.focus();
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.add('visually-hidden');
  modal.classList.remove('modal-error');
  modal.classList.remove('modal-open');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (!modal.classList.contains('vishually-hidden')) {
      event.preventDefault();
      modal.classList.add('visually-hidden');
      modal.classList.remove('modal-error');
    }
  }
});

feedbackForm.addEventListener('submit', function (event) {
  if (!userName.value || !eMail.value || !feedbackText.value) {
    event.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', 'userName.value');
    }
  }

  localStorage.setItem('username', 'userName.value');
  localStorage.setItem('email', 'eMail.value');

});

for (let i = 0; i < slides.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', function () {

    console.log([i]);
    buttons[i].classList.add('slider-button-current');
    slides[i].classList.remove('feature-item-display-none');

    if (i > 0) {
      buttons[i - 1].classList.remove('slider-button-current');
      slides[i - 1].classList.add('feature-item-display-none');
    }
    if (i < slides.length - 1) {
      buttons[i + 1].classList.remove('slider-button-current');
      slides[i + 1].classList.add('feature-item-display-none');
    }
    if (i == slides.length - 1) {
      buttons[i - slides.length + 1].classList.remove('slider-button-current');
      slides[i - slides.length + 1].classList.add('feature-item-display-none')
    }
    if (i == 0) {
      buttons[i + slides.length - 1].classList.remove('slider-button-current');
      slides[i + slides.length - 1].classList.add('feature-item-display-none')
    }
  })
};



