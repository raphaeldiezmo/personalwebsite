// Author: Raphael Di Ezmo
// Description:
// - This will be the javascript of my personal Website


// console.log("JS loaded");

// Disabling scroll
// function disableScroll() {
//   body.style.overflow = "hidden";
// }



// ========================================
//                OBSERVERS
// ========================================

const fader = document.querySelectorAll('.fade-in, .appear');
const slider = document.querySelectorAll('.slider');

const appearOptions = {
  threshold: 0, rootMargin: "0px 0px -200px 0px"
};



// Usage of Intersection Observer
const appearOnScroll = new IntersectionObserver(
  // contains function that has an entries and
  // appearOnScroll parameter
  function (
    entries, appearOnScroll
  ) {
    // running to every each entry
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);

      }
      // if an entry doesn't intersect, it'll
      // add the appear class in the entry
      else {
        entry.target.classList.remove('appear');
      }
    })
  }, appearOptions
);

fader.forEach(fader => {
  appearOnScroll.observe(fader);
})

slider.forEach(slider => {
  appearOnScroll.observe(slider);
})






