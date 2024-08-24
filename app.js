let slideIndex = 1; // Initialize slide index
showSlides(slideIndex); // Show the first slide initially

// Function to show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // If n exceeds the number of slides, reset slideIndex to the first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // If n is less than 1, set slideIndex to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active-dot" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Display the current slide and add "active-dot" class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
}

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to navigate to a specific slide based on the dot clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function for automatic slideshow
function autoSlides() {
    slideIndex++; // Increment the slide index
    showSlides(slideIndex); // Show the next slide
}

// Start the automatic slideshow
setInterval(autoSlides, 6000); // Change slide every 3 seconds


