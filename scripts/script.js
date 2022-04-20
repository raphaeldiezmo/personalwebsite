// Author: Raphael Di Ezmo
// Description:
// - This will be the javascript of my personal Website

var body = document.body;

// console.log("JS loaded");

// Disabling scroll
function disableScroll() {
  body.style.overflow = "hidden";
}

// Opening menu
function popup_menu(){
  var menu_button = document.getElementById("menu-bttn");
  var menu = document.getElementById("menu");
  document.getElementById("menu-display").style.display = "block";
  console.log("hello world")
  disableScroll();
  document.getElementById("full-page-container").style.cssText = "filter: blur(8px);  -webkit-filter: blur(8px);"

}
// Closing menu
function close_menu(){
  var menu = document.querySelector("#menu-display");
  menu.style.display = "none";
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
  threshold: 1, rootMargin: "0px 0px -100px 0px"
};


// const appearOnClick = new InterserctionObserver(
//   function(
//     entries, appearOnClick
//   ){
//     entries.forEach(entry=> {
//       if(!entry.isIntersecting){
//         return;
//       }
//       else{
//         entry.target.classList.add('appear');
//         appearOnClick.unobserve(entry.target);
//       }
//     })
//   },appearOptions
// );
const appearOnScroll = new IntersectionObserver(
  function(
    entries, appearOnScroll
  ){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
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



//
