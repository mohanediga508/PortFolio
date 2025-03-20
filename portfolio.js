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
    let slides = document.querySelectorAll(".slides");
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

document.querySelectorAll('input[name="contactMethod"]').forEach((input) => {
    input.addEventListener('change', function() {
        if (this.value === "email") {
            document.getElementById("emailFields").style.display = "block";
            document.getElementById("whatsappFields").style.display = "none";
        } else {
            document.getElementById("emailFields").style.display = "none";
            document.getElementById("whatsappFields").style.display = "block";
        }
    });
});

// Function to send email using EmailJS (you need to create an EmailJS account)
document.addEventListener("DOMContentLoaded", function () {
    let emailBtn = document.getElementById("email-btn");
    let whatsappBtn = document.getElementById("whatsapp-btn");
    let emailField = document.querySelector(".email-field");
    let sendButton = document.getElementById("send-button");

    let selectedMethod = "email"; // Default selection

    // Toggle selection
    emailBtn.addEventListener("click", function () {
        selectedMethod = "email";
        emailBtn.classList.add("active");
        whatsappBtn.classList.remove("active");
        emailField.style.display = "block";
    });

    whatsappBtn.addEventListener("click", function () {
        selectedMethod = "whatsapp";
        whatsappBtn.classList.add("active");
        emailBtn.classList.remove("active");
        emailField.style.display = "none";
    });

   // Function to validate email format
    function isValidEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Form submission handling
    sendButton.addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        if (selectedMethod === "email") {
            if (!email) {
                alert("Please enter your email.");
                return;
            }
            if (!isValidEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            sendEmail(name, email, message);
        } else {
            sendWhatsApp(name, message);
        }
    });

});

// Function to send Email via EmailJS
function sendEmail(name, email, message) {
    let currentTime = new Date().toLocaleString();
    emailjs.send("service_a5kzbzk", "template_14gtye9", {
        from_name: name,
        reply_to: email,
        message: message,
        time: currentTime
    }).then(() => {
        alert("Email sent successfully!");
    }).catch((error) => {
        console.error("Email Error:", error);
        alert("Failed to send email.");
    });
}

// Function to send WhatsApp message
function sendWhatsApp(name, message) {
    let phoneNumber = "919347194330";
    let whatsappMessage = `Hello, my name is ${name}. ${message}`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, "_blank");
}


