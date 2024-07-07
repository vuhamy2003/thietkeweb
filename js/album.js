function scrollToContent() {
    const headerHeight = document.getElementById("sticky-header").offsetHeight; // Lấy chiều cao của sticky header
    const contentOffset = document.getElementById("content").offsetTop - headerHeight; // Tính toán vị trí của content dựa trên chiều cao của sticky header

    window.scrollTo({
        top: contentOffset,
        behavior: 'smooth'
    });
}

//Slide show chuyển ảnh nổi bật

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('left', 'active', 'right');
        slide.style.display = 'none'; // Hide all slides initially

        if (index === currentSlide) {
            slide.classList.add('active');
            slide.style.display = 'block';
        } else if (index === (currentSlide + 1) % slides.length || (currentSlide === slides.length - 1 && index === 0)) {
            slide.classList.add('right');
            slide.style.display = 'block';
        } else if (index === (currentSlide - 1 + slides.length) % slides.length || (currentSlide === 0 && index === slides.length - 1)) {
            slide.classList.add('left');
            slide.style.display = 'block';
        }
    });
}


function changeSlide(n) {
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    updateSlides();
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 4000); // Chuyển slide mỗi 4 giây
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlides();
    autoSlide();
});



// Function to handle saving the image

function saveImage(imageUrl) {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = imageUrl; // Set the href attribute to the image URL
    link.download = 'image.jpg'; // Set the download attribute with a default file name
    document.body.appendChild(link); // Append the anchor element to the body

    // Trigger a click event on the anchor element to start download
    link.click();

    // Clean up: remove the anchor element from the body
    document.body.removeChild(link);
}

// Add event listener to all save buttons
const saveButtons = document.querySelectorAll('.save-button');
saveButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the image URL from the button's parent item
        const imageUrl = this.closest('.item').querySelector('img').src;
        // Call saveImage function with the image URL
        saveImage(imageUrl);
    });
});

