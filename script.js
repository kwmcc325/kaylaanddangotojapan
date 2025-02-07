// Get references to the button and popup
const popupBtn = document.getElementById('popupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Show the popup when the button is clicked
popupBtn.onclick = function() {
    // Trigger confetti effect
    launchConfetti();
    
    // Show the popup
    popup.style.display = 'flex';
}

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

// Function to trigger confetti
function launchConfetti() {
    confetti({
        particleCount: 200, // Number of confetti particles
        spread: 70, // Angle at which confetti is spread
        origin: { y: 0.6 } // Set the starting position for the confetti
    });
}

