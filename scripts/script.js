// Author: Raphael Di Ezmo
// Description:
// - This will be the javascript of my personal Website
var body = document.body;

console.log("JS loaded");
function popup_menu(){
  var menu_button = document.getElementById("menu-bttn");
  var menu = document.getElementById("menu");

  document.getElementById("menu-display").style.display = "block";
  console.log("hello world")
  disableScroll();

  document.getElementById("full-page-container").style.cssText = "filter: blur(8px);  -webkit-filter: blur(8px);"





}

function disableScroll() {
  body.style.overflow = "hidden";
}

function get_CV(){
  var cv_button = document.getElementById("cv-bttn");
  console.log("fuck you")

}

function close_menu(){
  var menu = document.querySelector("#menu-display");
  menu.style.display = "none";
  body.style.overflow = "scroll";
  document.getElementById("full-page-container").style.cssText =
   "filter: blur(0px);  -webkit-filter: blur(0px);"

}
