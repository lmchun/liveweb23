// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// Get the modal
let modal = document.getElementById("myModal");


 window.addEventListener("load", (event) => {
  
     console.log("page is fully loaded");
     modal.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
 modal.style.display = "none";
}
}     
const overlay = document.querySelector('#overlay');
function showOverlay() {
  overlay.style.display = 'block';
  }
  // Example trigger with a button click
const button = document.querySelector('#help');
button.addEventListener('click', showOverlay);

function hideOverlay() {
overlay.style.display = 'none';
        }
// Example close button
const closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', hideOverlay);
// Example click outside of popup
overlay.addEventListener('click', hideOverlay);   
            