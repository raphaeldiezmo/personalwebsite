// Author: Raphael Di Ezmo
// Description:
// - This will be the javascript of my personal Website

var body = document.body;

// console.log("JS loaded");

// Disabling scroll
// function disableScroll() {
//   body.style.overflow = "hidden";
// }

// Opening menu
function popup_menu(){
  var menu_button = document.getElementById("menu-bttn");
  var menu = document.querySelector("#menu-display");

  menu.style.display = "block";

  // disable scrolling feature
  disableScroll();
  document.getElementById("full-page-container").style.cssText = "filter: blur(8px);  -webkit-filter: blur(8px);"

}
// Closing menu
function close_menu(){
  var menu = document.querySelector("#menu-display");
  menu.style.display = "none";
  // document.getElementById("menu-display").target.classList.remove('appear');
  body.style.overflow = "scroll";
  document.getElementById("full-page-container").style.cssText =
   "filter: blur(0px);  -webkit-filter: blur(0px);"

}

// ========================================
//                OBSERVERS
// ========================================

const fader = document.querySelectorAll('.fade-in');
const slider = document.querySelectorAll('.slider');
const appearOptions = {
  threshold: 0, rootMargin: "0px 0px -250px 0px"
};



// Usage of Intersection Observer
const appearOnScroll = new IntersectionObserver(
  // contains function that has an entries and
  // appearOnScroll parameter
  function(
    entries, appearOnScroll
  ){
    // running to every each entry
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);

      }
      // if an entry doesn't intersect, it'll
      // add the appear class in the entry
      else{
        entry.target.classList.remove('appear');
      }
    })
  }, appearOptions
);

fader.forEach(fader=>{
  appearOnScroll.observe(fader);
})

slider.forEach(slider=>{
  appearOnScroll.observe(slider);
})


// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach((entry) => {
//     if (entry.isIntersecting){
//       entry.target.classList.add('show');
//     }
//     else{
//       entry.target.classList.remove('show');
//     }
//   });
// });


// const hiddenElements = document.querySelector('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));




// TECH INIFNITE SCROLLERS
const scroller = document.querySelectorAll(".scroller");

if(!window.matchMedia("prefers-reduce-motion: reduce").matches){
   addAnimation();
}
function addAnimation(){
  scroller.forEach((scroller) => {
    scroller.setAttribute  ("data-animated", true);
    const scrollerInner = document.querySelector(".inner-scroller");
    const scrollerContent = Array.from(scrollerInner.children);

    const scrollerInner2 = document.querySelector(".tech-list-2");
    const scrollerContent2 = Array.from(scrollerInner2.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
      scrollerInner.appendChild(duplicatedItem);

    });
    scrollerContent2.forEach((item2) => {
      const duplicatedItem2 = item2.cloneNode(true);
      scrollerInner2.appendChild(duplicatedItem2);
    });
    console.log(scrollerInner2);
  });

  
}


// menu scripting


function toggleMenu() {
  var menu = document.getElementById('menu');

  if ((menu.style.transform) === 'translateX(100%)') {
      // If the menu is hidden, slide it in
      menu.style.transform = 'translateX(0)';
      menu.style.borderRadius = '0';

  } else {
    
      // If the menu is visible, slide it out
      menu.style.transform = 'translateX(100%)';
      menu.style.borderRadius = '30% 0 0 30%';

    }
}

// just to go back
function goBack() {
  window.history.back();
}