// Author: Raphael Di Ezmo
// Description:
// - This will be the javascript of my personal Website
function infoReadMeFunction() {
  var moreText = document.getElementById("moreInformation");
  var btnText = document.getElementById("infoReadMe");

   if (dots.style.display === "none") {
     dots.style.display = "inline";
     btnText.innerHTML = "Read more";
     moreText.style.display = "none";
   } else {
     dots.style.display = "none";
     btnText.innerHTML = "Read less";
     moreText.style.display = "inline";
   }
}
