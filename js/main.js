//Global variables
//Get modal
const modal = document.querySelector("[data-model-pdf]");

//Modal button
const modalButton = document.querySelector("[data-res-btn]");

//Span element
const modalSpan = document.querySelector("[data-modalSpan]");

//Resume button click
modalButton.onclick = function() {
  modal.style.display = "block";
};

//Exit modal
modalSpan.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Codebase nav
function openLightBox() {
  //var itemId = event.target.id;
  var lightBox = document.getElementsByClassName("dropdown-container");
  //console.log(lightBox);
  if ((lightBox[0].style.display = "block"))
    if ((lightBox[1].style.display = "none"));
}

//function myFunction() {
//function codeDrop() {
//var subMenu = event.target.id;
//   var subMenu = document.getElementsByClassName(".dropdown - btn");
//   console.log(subMenu);
//   subMenu[0].style.display = "block";
// }
//alert("testing 123");
//}
