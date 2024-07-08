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

// Hiển thị nút khi cuộn xuống 100px
window.onscroll = function() {
    var scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Hàm cuộn lên đầu trang
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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


function openPopup() {
    document.getElementById('popupForm').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    // Mở popup sau 3 giây khi tải trang
    setTimeout(function() {
        openPopup();
    }, 3000); // 3000 milliseconds = 3 seconds
});

function submitForm(event) {
    event.preventDefault(); // Ngăn form gửi dữ liệu mặc định

    // Xử lý gửi form ở đây, ví dụ sử dụng AJAX
    // Sau khi xử lý thành công, hiển thị thông báo và đóng popup
    alert('Thông tin đã được gửi thành công! Chúng tôi sẽ sớm liên hệ với bạn!');
    closePopup(); // Đóng popup sau khi alert

    // Nếu muốn chuyển hướng người dùng sau khi alert, sử dụng:
    //window.location.href = "./tuyensinh/tuyensinh.html";
}

(document).ready(function() {
    var wrapperHeight = $('.news-wrapper').height();
    var containerHeight = $('.news-container').height();

    if (wrapperHeight > containerHeight) {
        var scrollDuration = wrapperHeight / 50;
        $('.news-wrapper').css('animation', 'scrollNews ' + scrollDuration + 's linear infinite');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.videoclip');
    if (video) {
        video.loop = true;
        video.play();
    }
});



