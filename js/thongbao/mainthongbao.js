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

const zoomImageOnHover = () => {
    const sideImages = document.querySelectorAll('.side-image');

    sideImages.forEach(img => {
        img.style.transition = 'transform 0.3s ease'; //Thêm transition cho ảnh//
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


document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll(".article");
    const articlesPerPage = 4; // Số bài viết hiển thị mỗi trang
    let currentPage = history.state && history.state.page ? history.state.page : 1; // Trang hiện tại

    // Hiển thị số trang và tính toán số lượng trang
    function displayPagination() {
        const totalArticles = articles.length;
        const totalPages = Math.ceil(totalArticles / articlesPerPage);
        const pageNumbers = document.querySelector(".page-numbers");

        pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;

        // Hiển thị các bài viết của trang hiện tại
        articles.forEach((article, index) => {
            if (index < (currentPage - 1) * articlesPerPage || index >= currentPage * articlesPerPage) {
                article.style.display = "none";
            } else {
                article.style.display = "block";
            }
        });

        // Ẩn/hiển thị nút Previous và Next
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");

        if (currentPage === 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (currentPage === totalPages) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }

        // Cuộn về đầu trang sau khi chuyển trang
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Khi tải trang, hiển thị trang đầu tiên
    displayPagination();

    // Sự kiện khi nhấn nút Previous
    document.querySelector(".prev-btn").addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            history.replaceState({ page: currentPage }, '', window.location.href);
            displayPagination();
        }
    });

    // Sự kiện khi nhấn nút Next
    document.querySelector(".next-btn").addEventListener("click", function() {
        const totalArticles = articles.length;
        const totalPages = Math.ceil(totalArticles / articlesPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            history.replaceState({ page: currentPage }, '', window.location.href);
            displayPagination();
        }
    });

    // Thêm sự kiện khi bấm vào bài viết
    articles.forEach(article => {
        article.addEventListener("click", function() {
            history.pushState({ page: currentPage }, '', window.location.href);
        });
    });
});
