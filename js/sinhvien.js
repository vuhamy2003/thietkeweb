function toggleMenu(element) {
    const menuItem = element.parentElement;
    const menu = menuItem.querySelector('.menu');
    const arrow = element.querySelector('.arrow');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        menu.style.display = 'block';
        arrow.style.transform = 'rotate(90deg)';
    }
}

/*bình luận*/

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");

    // Function to load comments from LocalStorage
    function loadCommentsFromLocalStorage() {
        const storedComments = localStorage.getItem('comments');
        return storedComments ? JSON.parse(storedComments) : [];
    }

    // Function to save comments to LocalStorage
    function saveCommentsToLocalStorage(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // Array to store comments, load from LocalStorage
    let comments = loadCommentsFromLocalStorage();

    // Function to handle posting comments
    function postComment() {
        const commentText = document.getElementById('comment-text').value;
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
            document.getElementById('comment-text').value = '';

            // Update the comment count
            updateCommentCount();
        } else {
            console.log("Comment text is empty.");
        }
    }

    // Function to render comments based on current sort order
    function renderComments() {
        const commentsContainer = document.getElementById('comments-container');
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
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <img src="../img/avt.jpg" alt="Avatar" class="avatar">
                <div class="comment-details">
                    <span class="comment-date">${new Date(comment.timestamp).toLocaleString('vi-VN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    <p>${comment.text}</p>
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });
    }

    // Function to update the comment count
    function updateCommentCount() {
        const commentCountElement = document.getElementById('comment-count');
        const count = comments.length;
        commentCountElement.textContent = `${count} bình luận`;
    }

    // Event listener for the "Gửi" button click
    document.getElementById('post-comment').addEventListener('click', postComment);

    // Event listener for Enter key press in the comment input field
    document.getElementById('comment-text').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter key action (usually form submission)
            postComment(); // Call the postComment function to handle posting the comment
        }
    });

    // Event listener for sorting comments
    let sortBy = 'newest'; // Default sorting by newest
    document.getElementById('sort-comments').addEventListener('click', function() {
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


/*bình luận bài đăng chia sẻ*/
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");

    // Hàm lấy bình luận từ localStorage
    function loadCommentsFromLocalStorage() {
        const storedComments = localStorage.getItem('comments1');
        return storedComments ? JSON.parse(storedComments) : [];
    }

    // Hàm lưu bình luận vào localStorage
    function saveCommentsToLocalStorage(comments) {
        localStorage.setItem('comments1', JSON.stringify(comments));
    }

    // Mảng để lưu trữ bình luận, lấy từ localStorage
    let comments1 = loadCommentsFromLocalStorage();

    // Hàm xử lý việc đăng bình luận
    function postComment1() {
        const commentText1 = document.getElementById('comment-text').value;
        if (commentText1.trim() !== "") {
            // Lấy thời gian hiện tại
            const now = new Date();
            const timestamp = now.getTime(); // Lưu trữ thời gian dưới dạng milliseconds từ ngày 1/1/1970

            // Tạo một đối tượng bình luận mới
            const newComment1 = {
                text: commentText1,
                timestamp: timestamp
            };

            // Thêm bình luận mới vào mảng
            comments1.push(newComment1);

            // Lưu bình luận vào localStorage
            saveCommentsToLocalStorage(comments1);

            // Sắp xếp và hiển thị bình luận theo thứ tự hiện tại
            renderComments1();

            // Xóa nội dung trong trường nhập liệu
            document.getElementById('comment-text').value = '';

            // Cập nhật số lượng bình luận
            updateCommentCount1();
        } else {
            console.log("Comment text is empty.");
        }
    }

    // Hàm hiển thị bình luận theo thứ tự hiện tại
    function renderComments1() {
        const commentsContainer1 = document.getElementById('comments-container1');
        commentsContainer1.innerHTML = ''; // Xóa các bình luận hiện có

        // Sắp xếp bình luận theo giá trị sortBy1 hiện tại
        if (sortBy1 === 'oldest') {
            comments1.sort((a, b) => a.timestamp - b.timestamp);
        } else if (sortBy1 === 'newest') {
            comments1.sort((a, b) => b.timestamp - a.timestamp);
        }

        // Hiển thị bình luận đã sắp xếp
        comments1.forEach(comment1 => {
            const commentElement1 = document.createElement('div');
            commentElement1.className = 'comment1';
            commentElement1.innerHTML = `
                <img src="../img/avt.jpg" alt="Avatar" class="avatar">
                <div class="comment-details1">
                    <span class="comment-date1">${new Date(comment1.timestamp).toLocaleString('vi-VN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    <p>${comment1.text}</p>
                </div>
            `;
            commentsContainer1.appendChild(commentElement1);
        });
    }

    // Hàm cập nhật số lượng bình luận
    function updateCommentCount1() {
        const commentCountElement1 = document.getElementById('comment-count1');
        const commentCountElement2 = document.getElementById('comment-count2');
        const count = comments1.length;
        commentCountElement1.textContent = `${count} bình luận`;
        commentCountElement2.textContent = count;
    }

    // Lắng nghe sự kiện click vào nút "Gửi"
    document.getElementById('post-comment').addEventListener('click', postComment1);

    // Lắng nghe sự kiện nhấn phím Enter trong trường nhập liệu bình luận
    document.getElementById('comment-text').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter (thường là gửi form)
            postComment1(); // Gọi hàm postComment để xử lý đăng bình luận
        }
    });

    // Lắng nghe sự kiện click vào nút "Sắp xếp"
    let sortBy1 = 'newest'; // Mặc định sắp xếp theo mới nhất
    document.getElementById('sort-comments1').addEventListener('click', function() {
        if (sortBy1 === 'newest') {
            sortBy1 = 'oldest';
        } else {
            sortBy1 = 'newest';
        }
        // Hiển thị lại bình luận theo thứ tự mới
        renderComments1();
    });

    // Hiển thị ban đầu của bình luận
    renderComments1();
    updateCommentCount1();
});

document.addEventListener('DOMContentLoaded', function() {
    const commentCountDisplay = document.getElementById('comment-count-display1');
    const comments = JSON.parse(localStorage.getItem('comments1')) || [];
    commentCountDisplay.textContent = comments.length;
});

