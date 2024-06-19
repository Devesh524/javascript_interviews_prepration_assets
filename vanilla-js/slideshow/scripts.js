const previous = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.getElementsByClassName('slide');
let current = 0;

// Code that moves to the next slide
next.addEventListener('click', function () {
  slides[current].classList.remove('active');
  current++;
  if (current === slides.length) {
    current = 0;
  }
  slides[current].classList.add('active');
});

// Code that moves to the previous slide
previous.addEventListener('click', function () {
  slides[current].classList.remove('active');
  current--;
  if (current < 0) current = slides.length - 1;
  slides[current].classList.add('active');
});

// auto slider after 2 seconds
// setInterval(() => {
//   slides[current].classList.remove("active");
//   current ++;
//   if (current === slides.length) {
//     current = 0;
//   }
//   slides[current].classList.add("active");
// }, 2000)
