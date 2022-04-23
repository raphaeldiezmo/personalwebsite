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
      if(!entry.isIntersecting){
        return;
      }
      // if an entry doesn't intersect, it'll
      // add the appear class in the entry
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
