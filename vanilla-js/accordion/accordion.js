document.addEventListener('DOMContentLoaded', () => {});

const element = document.getElementsByClassName('accordion-title');

const accordion = document.getElementsByClassName('accordion-toggle');

const accordionContent = document.getElementsByClassName('accordion-content');

accordion[0].addEventListener('onclick', () => {
  console.log('first');
});
