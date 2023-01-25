"use strict";

let numberRatings = document.querySelectorAll(".ratingLabel");

const form = document.getElementById("ratingsForm");

// for (let i = 0; i < numberRatings.length; i++){
//     numberRatings[i].addEventListener("click", function() {
//         selectedRating = this.value;

//         // //This removes ratingsClick class from all buttons
//         // numberRatings.forEach((ratingBtn) => {
//         //     ratingBtn.classList.remove('ratingClicked');
//         // });

//         // //Add ratingClick to the clicked button
//         // numberRatings[i].classList.add('ratingClicked');
//     });
// };

// if (selectedRating) {
//     document.querySelector(".submit-disabled").classList.remove('submit-disabled');
//     document.querySelector(".submit").disabled = false;
// } else {
//     document.querySelector(".submit").disabled = true;
//     document.querySelector(".submit-disabled").classList.add('submit-disabled');
// }

// // When clicking submit button
function submitClick() {
  // e.preventDefault()
  let selectedRating = document.querySelector(
    'input[name="rating"]:checked'
  ).value;

  document.querySelector(".ratingState").style.display = "none";
  document.querySelector(".thankYouState").style.display = "flex";
  //Change to the global variable
  document.querySelector(
    ".ratingSelected"
  ).textContent = `You selected ${selectedRating} out of 5`;
}
