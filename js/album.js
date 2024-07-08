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
    setTimeout(autoSlide, 3000); // Chuyển slide mỗi 3 giây
}

document.addEventListener('DOMContentLoaded', () => {
    updateSlides();
    autoSlide();
});

//Nút like

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.like-button').forEach(button => {
        let likeCount = button.querySelector('.like-count');
        let imageId = button.dataset.imageId; // Lấy id của ảnh từ thuộc tính data-image-id
        let storageKey = `likeCount_${imageId}`; // Key duy nhất cho mỗi ảnh

        // Lấy số lượt thích từ local storage, nếu không có thì mặc định là 0
        let initialLikes = parseInt(localStorage.getItem(storageKey)) || 0;

        // Cập nhật số lượt thích ban đầu khi load trang
        likeCount.textContent = initialLikes;

        button.addEventListener('click', () => {
            let currentLikes = parseInt(likeCount.textContent);
            likeCount.textContent = currentLikes + 1;

            // Lưu số lượt thích vào local storage
            localStorage.setItem(storageKey, likeCount.textContent);
        });
    });
});

//Model


document.querySelectorAll('.anhslide').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this.src);
    });
});

function openModal(src) {
    document.getElementById('modal').style.display = "block";
    document.getElementById('modal-img').src = src;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

//Chia sẻ
document.querySelectorAll('.save-button').forEach(button => {
    button.addEventListener('click', function() {
        const postLink = this.closest('.item').querySelector('.post-link').href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postLink)}`;

        const popupWidth = 600;
        const popupHeight = 400;
        const popupLeft = (window.screen.width / 2) - (popupWidth / 2);
        const popupTop = (window.screen.height / 2) - (popupHeight / 2);

        window.open(facebookUrl, 'Share', `width=${popupWidth},height=${popupHeight},left=${popupLeft},top=${popupTop}`);
    });
});
