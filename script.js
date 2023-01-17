"use strict";

let numberRatings = document.querySelectorAll(".rating")

for (let i = 0; i < numberRatings.length; i++) {
    numberRatings[i].addEventListener("click", function() {
        let rating = this.innerHTML;

        numberRatings[i].classList.toggle('ratingClick');

        // // When selecting the rating
        // for (let x = 0; x < document.querySelectorAll('.rating').length; x++) {
        //     if (numberRatings[i].classList.contains('ratingsClick')) {
        //         numberRatings[i].classList.toggle('ratingClick');
        //     }
            
        // When clicking submit button
        document.querySelector(".submit").addEventListener("click", submitClick)
            function submitClick() {
                document.querySelector('.ratingState').style.display = 'none';
                document.querySelector('.thankYouState').style.display = 'flex';
                document.querySelector('.ratingSelected').textContent = `You selected ${rating} out of 5`;
            }
        });
};