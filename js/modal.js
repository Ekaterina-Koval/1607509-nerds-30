const contactsButton = document.querySelector(".contacts-button");
const modal = document.querySelector(".modal-feedback");
const close = document.querySelector(".modal-close");
const fieldName = modal.querySelector('.feedback-field');
const feedbackForm = modal.querySelector('.feedback-form');
const userName = modal.querySelector('[name=username]');
const eMail = modal.querySelector('[name=email]');
const feedbackText = modal.querySelector('[name=feedback-text]');


contactsButton.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("visually-hidden");
  fieldName.focus();
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.add("visually-hidden");
  modal.classList.remove('modal-error');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (!modal.classList.contains("vishually-hidden")) {
      event.preventDefault();
      modal.classList.add("visually-hidden");
      modal.classList.remove('modal-error');
    }
  }
});

feedbackForm.addEventListener('submit', function (event) {
  if (!userName.value || !eMail.value || !feedbackText.value) {
    event.preventDefault();
    modal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', 'userName.value');
    }
  }

  localStorage.setItem('username', 'userName.value');
  localStorage.setItem('email', 'eMail.value');

});


