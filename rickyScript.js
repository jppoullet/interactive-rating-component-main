"use strict";

let numberRatings = document.querySelectorAll(".rating")
let selectedRating;

for (let i = 0; i < numberRatings.length; i++) {
    numberRatings[i].addEventListener("click", function() {
        selectedRating = this.innerHTML;
        document.querySelector(".submit").disabled = false;

        //This removes ratingsClick class from all buttons
        numberRatings.forEach((ratingBtn) => {
            ratingBtn.classList.remove('ratingClick');
        })

        //Add ratingClick to the clicked button
        numberRatings[i].classList.add('ratingClick'); 
});

// if (selectedRating) {
//     document.querySelector(".submit-disabled").classList.remove('submit-disabled');
//     document.querySelector(".submit").disabled = false;
// } else {
//     document.querySelector(".submit").disabled = true;
//     document.querySelector(".submit-disabled").classList.add('submit-disabled');
// }


// When clicking submit button
document.querySelector(".submit").addEventListener("click", submitClick)
function submitClick() {
      document.querySelector('.ratingState').style.display = 'none';
      document.querySelector('.thankYouState').style.display = 'flex';
      //Change to the global variable
      document.querySelector('.ratingSelected').textContent = `You selected ${selectedRating} out of 5`;
    }
};