document.querySelectorAll('.anhbia').forEach(img => {
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
