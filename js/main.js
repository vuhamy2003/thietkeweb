function showHotline() {
    var hotlineLink = document.getElementById("hotline-link");
    var hotlineNumber = document.getElementById("hotline-number");

    if (hotlineNumber.style.display === "none") {
        hotlineNumber.style.display = "inline";
        hotlineLink.style.display = "none";
    } else {
        hotlineNumber.style.display = "none";
        hotlineLink.style.display = "inline";
    }
}

function showEmail() {
    var emailLink = document.getElementById("email-link");
    var emailText = document.getElementById("email-text");

    if (emailText.style.display === "none") {
        emailText.style.display = "inline";
        emailLink.style.display = "none";
    } else {
        emailText.style.display = "none";
        emailLink.style.display = "inline";
    }
}

function showSearchBar() {
    var searchBarContainer = document.getElementById("search-bar-container");
    var container = document.querySelector(".container");

    if (searchBarContainer.classList.contains("active")) {
        searchBarContainer.classList.remove("active");
        container.classList.remove("search-active");
    } else {
        searchBarContainer.classList.add("active");
        container.classList.add("search-active");
    }
}

function search() {
    var searchBar = document.getElementById("search-bar");
    var query = searchBar.value;
    if (query) {
        alert("Tìm kiếm: " + query);
        // Implement search logic here
    }
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

