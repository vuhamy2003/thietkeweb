function showHotline() {
    var hotlineNumber = document.getElementById('hotline-number');
    hotlineNumber.style.display = 'inline';

    var hotlineLink = document.getElementById('hotline-link');
    hotlineLink.style.display = 'none';
}

function showEmail() {
    var emailText = document.getElementById('email-text');
    emailText.style.display = 'inline'; // Hiển thị địa chỉ email

    var emailLink = document.getElementById('email-link');
    emailLink.style.display = 'none'; // Ẩn biểu tượng email
}

// Hàm hiệu ứng khi di chuột qua
function hoverEffect(element) {
    element.style.transform = 'scale(1.2)'; // Phóng to hình ảnh khi di chuột qua
}

// Hàm hiệu ứng bình thường khi di chuột rời khỏi
function normalEffect(element) {
    element.style.transform = 'scale(1)'; // Trở về kích thước bình thường khi di chuột rời khỏi
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function() {
        dropdownContent.style.display = 'none';
    });
});

