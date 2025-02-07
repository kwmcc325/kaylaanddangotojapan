// Get references to the button and popup
const osakaBtn = document.getElementById('osakaBtn');
const osakaPopUp = document.getElementById('osakaPopUp');

const kamBtn = document.getElementById('kamBtn');
const kamPopUp = document.getElementById('kamPopUp');

const kyotoBtn = document.getElementById('kyotoBtn');
const kyotoPopUp = document.getElementById('kyotoPopUp');

const tokyoBtn = document.getElementById('tokyoBtn');
const tokyoPopUp = document.getElementById('tokyoPopUp');

const genBtn = document.getElementById('genBtn');
const genPopUp = document.getElementById('genPopUp');

const popupBtn = document.getElementById('popupBtn');
const popup = document.getElementById('popup');
//const closeBtn = document.getElementById('closeBtn');
var closeBtns = document.querySelectorAll(".close-btn");


// Show osaka
osakaBtn.onclick = function() {
    osakaPopUp.style.display = 'flex';
}

// Show kamamura
kamBtn.onclick = function() {
    kamPopUp.style.display = 'flex';
}

// Show kyoto
kyotoBtn.onclick = function() {
    kyotoPopUp.style.display = 'flex';
}

// Show tokyo
tokyoBtn.onclick = function() {
    tokyoPopUp.style.display = 'flex';
}

// Show gen
genBtn.onclick = function() {
    genPopUp.style.display = 'flex';
}

popupBtn.onclick = function() {
    launchConfetti();
    popup.style.display = 'flex';
}


// listener
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        popup.style.display = "none";
        osakaPopUp.style.display = "none";
        kamPopUp.style.display = "none";
        kyotoPopUp.style.display = "none";
        tokyoPopUp.style.display = "none";
        genPopUp.style.display = "none";
    }
});

// close modal
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



