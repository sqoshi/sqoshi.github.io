const hamburger = document.querySelector(".hamburger");
const dog = document.querySelector(".dog");
const row = document.querySelector(".row");
const column = document.querySelector(".column");
const first = document.querySelector(".first");

const links = document.querySelectorAll(".dog li");

hamburger.addEventListener('click', () => {
  dog.classList.toggle("open");

});
first.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/AKISO/blob/master/L4/z3.c',
  'blank');
});
second.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/AKISO/TS',
  'blank');
});
third.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/AISD',
  'blank');
});
