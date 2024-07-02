document.querySelectorAll('.toggle-pdf').forEach(function(toggleButton) {
    toggleButton.addEventListener('click', function() {
        var pdfContainer = this.nextElementSibling;
        if (pdfContainer.style.display === "none" || pdfContainer.style.display === "") {
            pdfContainer.style.display = "block";
        } else {
            pdfContainer.style.display = "none";
        }
    });
});
