//Global variables 
//Get modal
const modal = document.querySelector('[data-model-pdf]');

//Modal button
const modalButton = document.querySelector('[data-res-btn]'); 

//Span element
const modalSpan = document.querySelector('[data-modalSpan]');

// Resume button click
modalButton.onclick = function() {
    modal.style.display = "block";
  }

// Exit modal 
modalSpan.onclick = function() {
    modal.style.display = "none";
  }
  
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }

