// Author: Raphael Diezmo
// Description: This script is for all the functionality of the menu
//      - toggle the menu using the buttons of menu button
//      - toggle the menu using the x button inside a navigation pop-up
//      - exits the menu using the body of the page / offset of the nav-bar
//      - exits the menu using escape button


// ===============================================================
//          TOGGLE MENU SCRIPT
// ===============================================================


// variable declarations
const menu = document.getElementById('menu');
var body = document.body;


// // Closing menu by clicking outside the menu bar
// function close_menu(){
//     menu.style.display = "none";
//     // document.getElementById("menu-display").target.classList.remove('appear');
//     body.style.overflow = "scroll";
//     document.getElementById("full-page-container").style.cssText =
//      "filter: blur(0px);  -webkit-filter: blur(0px);"
  
//   }




//functionality to hide the menu using the toggle buttons
function hideMenu() {
  if (!((menu.style.transform) === 'translateX(100%)')) {
    menu.style.transform = 'translateX(100%)';
    menu.style.borderRadius = '30% 0 0 30%';   
    document.getElementById("full-page-container").style.cssText =
    "filter: blur(0px);  -webkit-filter: blur(0px);"
    body.style.overflow = "scroll";

  }
}



function toggleMenu() {

  if ((menu.style.transform) === 'translateX(100%)') {
      // If the menu is hidden, slide it in
      menu.style.transform = 'translateX(0)';
      menu.style.borderRadius = '0';
      document.getElementById("full-page-container").style.cssText =
      "filter: blur(5px);  -webkit-filter: blur(5px);"
      body.style.overflow = "hidden";
  } else {
    
      // If the menu is visible, slide it out
      menu.style.transform = 'translateX(100%)';
      menu.style.borderRadius = '30% 0 0 30%';     
      document.getElementById("full-page-container").style.cssText =
      "filter: blur(0px);  -webkit-filter: blur(0px);"
      body.style.overflow = "scroll";

  }
}


// just to go back
function goBack() {
  window.history.back();
}


 