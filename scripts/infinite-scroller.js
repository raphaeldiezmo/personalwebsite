// ===============================================================
//          INFINITE SCROLLER
// ===============================================================

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
