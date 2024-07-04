document.querySelectorAll('.anhbia').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this.src);
    });
});

document.querySelectorAll('.anhgv').forEach(img => {
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

document.addEventListener('DOMContentLoaded', function() {
    var stickyHeader = document.getElementById('sticky-header');
    var showStickyHeaderAfter = 60; // Số pixel cuộn qua để hiển thị sticky header

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > showStickyHeaderAfter) {
            stickyHeader.classList.add('show');
        } else {
            stickyHeader.classList.remove('show');
        }
    });
});
