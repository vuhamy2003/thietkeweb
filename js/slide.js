//Slide ảnh
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let timeout;

function showSlides(n) {
    if (n !== undefined) {
        slideIndex = n - 1;
    } else {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
    }

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');

    timeout = setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    clearTimeout(timeout); // Clear the current timeout to prevent auto sliding
    showSlides(n);
    timeout = setTimeout(showSlides, 3000); // Restart the timeout for auto sliding
}

// Initialize the slideshow
showSlides();
