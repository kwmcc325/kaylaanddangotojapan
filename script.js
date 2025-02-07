// Get references to the button and popup
const osakaBtn = document.getElementById('osakaBtn');
const osakaPopUp = document.getElementById('osakaPopUp');

const popupBtn = document.getElementById('popupBtn');
const popup = document.getElementById('popup');
//const closeBtn = document.getElementById('closeBtn');
var closeBtns = document.querySelectorAll(".close-btn");


// Show osaka
osakaBtn.onclick = function() {
    // Show the popup
    osakaPopUp.style.display = 'flex';
}

// Show the popup when the button is clicked
popupBtn.onclick = function() {
    // Trigger confetti effect
    launchConfetti();
    
    // Show the popup
    popup.style.display = 'flex';
}

/*
// Close the popup when the close button is clicked
closeBtn.onclick = function() {
    popup.style.display = 'none';
}

// Close the popup if the user clicks outside the popup content
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}
*/

// Attach event listener to each close button
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        // Close the respective modal when clicking on a close button
        popup.style.display = "none";
        osakaPopUp.style.display = "none";
    }
});

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    } else if (event.target == osakaPopUp) {
        osakaPopUp.style.display = "none";
    }
}

// Function to trigger confetti
function launchConfetti() {
    confetti({
        particleCount: 400, // Number of confetti particles
        spread: 90, // Angle at which confetti is spread
        origin: { y: 0.6 } // Set the starting position for the confetti
    });
}

