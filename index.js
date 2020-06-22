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
  window.open('https://github.com/sqoshi/computers-architecture-and-operating-systems/blob/master/list05/exercise3.c',
  'blank');
});
second.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/TS',
  'blank');
});
third.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/go-game',
  'blank');
});
fourth.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/compiler',
  'blank');
});
fifth.addEventListener('click', () => {
  window.open('https://github.com/sqoshi/database-project',
  'blank');
});
