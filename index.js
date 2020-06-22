const hamburger = document.querySelector(".hamburger");
const dog = document.querySelector(".dog");
const links = document.querySelectorAll(".dog li");

hamburger.addEventListener('click', () => {
  dog.classList.toggle("open");
});


const row = document.querySelector(".row");
const column = document.querySelector(".column");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

first.addEventListener('click', () => {
  window.open('https://instagram.com/pette_boy64',
  'blank');
});
second.addEventListener('click', () => {
  window.open('https://www.facebook.com/piotr.popis',
  'blank');
});
third.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/',
  'blank');
});
fourth.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/piotr-popis/',
  'blank');
});
fifth.addEventListener('click', () => {
  window.open('https://www.icloud.com',
  'blank');
});
