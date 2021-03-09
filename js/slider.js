const slides = document.querySelectorAll(".feature-item");
const buttons = document.querySelectorAll('.slider-button');

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
