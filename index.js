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

first.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/AKISO/blob/master/L4/z3.c',
  'blank');
});
second.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/TS',
  'blank');
});
third.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/AISD',
  'blank');
});
