// Get the modal
var modal = document.getElementById("modalPop");


// Get the <span> element that closes the modal
var setclose = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
setclose.onclick = function() {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}