
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


/*bình luận*/

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");

    // Function to load comments from LocalStorage
    function loadCommentsFromLocalStorage() {
        const storedComments = localStorage.getItem('commentskh');
        return storedComments ? JSON.parse(storedComments) : [];
    }

    // Function to save comments to LocalStorage
    function saveCommentsToLocalStorage(comments) {
        localStorage.setItem('commentskh', JSON.stringify(comments));
    }

    // Array to store comments, load from LocalStorage
    let comments = loadCommentsFromLocalStorage();

    // Function to handle posting comments
    function postComment() {
        const commentText = document.getElementById('comment-textkh').value;
        if (commentText.trim() !== "") {
            // Get current date and time
            const now = new Date();
            const timestamp = now.getTime(); // Store timestamp as milliseconds since Jan 1, 1970

            // Create a new comment object
            const newComment = {
                text: commentText,
                timestamp: timestamp
            };

            // Add the new comment to the array
            comments.push(newComment);

            // Save comments to LocalStorage
            saveCommentsToLocalStorage(comments);

            // Sort and render comments based on current sort order
            renderComments();

            // Clear the input field
            document.getElementById('comment-textkh').value = '';

            // Update the comment count
            updateCommentCount();
        } else {
            console.log("Comment text is empty.");
        }
    }

    // Function to render comments based on current sort order
    function renderComments() {
        const commentsContainer = document.getElementById('comments-containerkh');
        commentsContainer.innerHTML = ''; // Clear existing comments

        // Sort comments based on current sortBy value
        if (sortBy === 'oldest') {
            comments.sort((a, b) => a.timestamp - b.timestamp);
        } else if (sortBy === 'newest') {
            comments.sort((a, b) => b.timestamp - a.timestamp);
        }

        // Render sorted comments
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'commentkh';
            commentElement.innerHTML = `
                <img src="../img/avt.jpg" alt="Avatar" class="avatar">
                <div class="comment-detailskh">
                    <span class="comment-datekh">${new Date(comment.timestamp).toLocaleString('vi-VN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    <p>${comment.text}</p>
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });
    }

    // Function to update the comment count
    function updateCommentCount() {
        const commentCountElement = document.getElementById('comment-countkh');
        const count = comments.length;
        commentCountElement.textContent = `${count} bình luận`;

        // Cập nhật số lượng bình luận trên một phần khác của trang
        const commentCountDisplay = document.getElementById('comment-count-display');
        if (commentCountDisplay) {
            commentCountDisplay.textContent = `${count}`;
        }
    }

    // Event listener for the "Gửi" button click
    document.getElementById('post-commentkh').addEventListener('click', postComment);

    // Event listener for Enter key press in the comment input field
    document.getElementById('comment-textkh').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter key action (usually form submission)
            postComment(); // Call the postComment function to handle posting the comment
        }
    });

    // Event listener for sorting comments
    let sortBy = 'newest'; // Default sorting by newest
    document.getElementById('sort-commentskh').addEventListener('click', function() {
        if (sortBy === 'newest') {
            sortBy = 'oldest';
        } else {
            sortBy = 'newest';
        }
        renderComments(); // Re-render comments based on the new sort order
    });

    // Initial render of comments
    renderComments();
    updateCommentCount();
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

