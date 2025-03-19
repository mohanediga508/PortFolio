// Hamburger Menu Functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "Software Developer"
];
let speed = 100;
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000); // Wait before erasing
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1); // Remove last character
        setTimeout(eraseText, 50); // Erase speed
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text
        characterIndex = 0;
        setTimeout(typeWriter, 500); // Wait before typing the next text
    }
}



// Initialize Typewriter Effect on Page Load
window.onload = typeWriter;

// internship certificate display function
document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll(".view-certificate");
    const popup = document.getElementById("certificatePopup"); // Get the popup div
    const popupImage = document.getElementById("certificateImage"); // Get the image inside popup
    const closeButton = document.getElementById("closePopup"); // Get close button

    viewButtons.forEach(button => {
        button.addEventListener("click", function () {
            const certificateSrc = this.getAttribute("data-certificate"); // Get image path from button
            if (certificateSrc) {
                popupImage.src = certificateSrc; // Set image source
                popup.style.display = "flex"; // Show popup
            } else {
                console.error("No certificate source found for this button.");
            }
        });
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none"; // Hide popup when close button is clicked
    });

    // Close popup when clicking outside the image
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

// Open Project Popup
function openPopup(projectId) {
    document.getElementById(projectId).style.display = "flex";
}

// Close Project Popup
function closePopup(projectId) {
    document.getElementById(projectId).style.display = "none";
}

// Slideshow Logic
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
showSlides();

