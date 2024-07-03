
// $(document).ready(function() {
//     $('.toggle-pdf').click(function() {
//         var pdfContainer = $(this).next('.pdf-container');
//         if (pdfContainer.is(':hidden')) {
//             pdfContainer.slideDown('slow'); // Hiển thị PDF mượt mà với slideDown
//         } else {
//             pdfContainer.slideUp('slow'); // Ẩn PDF mượt mà với slideUp
//         }
//     });
// });

$(document).ready(function() {
    $('.toggle-pdf').click(function() {
        var pdfContainer = $(this).next('.pdf-container');
        $(this).toggleClass('open'); // Thêm class khi click để xoay mũi tên
        if (pdfContainer.is(':hidden')) {
            pdfContainer.slideDown('slow');
        } else {
            pdfContainer.slideUp('slow');
        }
    });
});




document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    // Existing code for chatbox...

    // Scroll to top button functionality
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const scrollToTopButton = document.getElementById('scroll-to-top');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }

    document.getElementById('scroll-to-top').addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Existing code for send message...

});