
const zoomImageOnHover = () => {
    const sideImages = document.querySelectorAll('.side-image');

    sideImages.forEach(img => {
        img.style.transition = 'transform 0.3s ease'; // Thêm transition cho ảnh
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)'; 
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    zoomImageOnHover();
});
