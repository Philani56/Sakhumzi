document.addEventListener("DOMContentLoaded", () => {

  if (!slides.length) return;

  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  leftArrow.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  rightArrow.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
});
