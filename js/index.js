


const openMenu = document.querySelector('.burger__menu-open');
const menu = document.querySelector('.page__menu');
const left = document.querySelector('.left');

openMenu.addEventListener('click', function () {
   menu.classList.toggle("left");
});






gsap.from("#page__aside-gsap", {
   x: -100,
   opacity: 0,
   delay: 1,
   duration: .9
});

gsap.from(".page__descr-index", {
   opacity: 0,
   delay: 2,
   duration: .6
});

gsap.from("#ticket-index", {
   y: -20,
   opacity: 0,
   delay: 3,
   duration: .4
});

gsap.from(".button-view__back", {
   x: 20,
   opacity: 0,
   delay: 1.5,
   duration: .7
});

gsap.from(".travel-item-1", {
   y: 80,
   opacity: 0,
   delay: .5,
   duration: .7
});

gsap.from(".travel-item-2", {
   y: 80,
   opacity: 0,
   delay: .8,
   duration: .7
});

gsap.from(".travel-item-3", {
   y: 80,
   opacity: 0,
   delay: 1.1,
   duration: .7
});







