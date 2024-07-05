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

/*Bình luận*/
/*document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed.");

    // Hàm lấy bình luận từ localStorage
    function loadCommentsFromLocalStorage() {
        const storedComments = localStorage.getItem('comments2');
        return storedComments ? JSON.parse(storedComments) : [];
    }

    // Hàm lưu bình luận vào localStorage
    function saveCommentsToLocalStorage(comments) {
        localStorage.setItem('comments2', JSON.stringify(comments));
    }

    // Mảng để lưu trữ bình luận, lấy từ localStorage
    let comments2 = loadCommentsFromLocalStorage();

    // Hàm xử lý việc đăng bình luận
    function postComment2() {
        const commentText2 = document.getElementById('comment-text2').value;
        if (commentText2.trim() !== "") {
            // Lấy thời gian hiện tại
            const now = new Date();
            const timestamp = now.getTime(); // Lưu trữ thời gian dưới dạng milliseconds từ ngày 1/1/1970

            // Tạo một đối tượng bình luận mới
            const newComment2 = {
                text: commentText2,
                timestamp: timestamp
            };

            // Thêm bình luận mới vào mảng
            comments2.push(newComment2);

            // Lưu bình luận vào localStorage
            saveCommentsToLocalStorage(comments2);

            // Sắp xếp và hiển thị bình luận theo thứ tự hiện tại
            renderComments2();

            // Xóa nội dung trong trường nhập liệu
            document.getElementById('comment-text2').value = '';

            // Cập nhật số lượng bình luận
            updateCommentCount2();
        } else {
            console.log("Comment text is empty.");
        }
    }

    // Hàm hiển thị bình luận theo thứ tự hiện tại
    function renderComments2() {
        const commentsContainer2 = document.getElementById('comments-container2');
        commentsContainer2.innerHTML = ''; // Xóa các bình luận hiện có

        // Sắp xếp bình luận theo giá trị sortBy2 hiện tại
        if (sortBy2 === 'oldest') {
            comments2.sort((a, b) => a.timestamp - b.timestamp);
        } else if (sortBy2 === 'newest') {
            comments2.sort((a, b) => b.timestamp - a.timestamp);
        }

        // Hiển thị bình luận đã sắp xếp
        comments2.forEach(comment2 => {
            const commentElement2 = document.createElement('div');
            commentElement2.className = 'comment2';
            commentElement2.innerHTML = `
                <img src="../img/avt.jpg" alt="Avatar" class="avatar">
                <div class="comment-details2">
                    <span class="comment-date2">${new Date(comment2.timestamp).toLocaleString('vi-VN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    <p>${comment2.text}</p>
                </div>
            `;
            commentsContainer2.appendChild(commentElement2);
        });
    }

    // Hàm cập nhật số lượng bình luận
    function updateCommentCount2() {
        const commentCountElement2 = document.getElementById('comment-count2');
        const commentCountDisplay = document.getElementById('comment-count-display');
        const count = comments2.length;
        commentCountElement2.textContent = `${count} bình luận`;
        commentCountDisplay.textContent = count;
    }

    // Lắng nghe sự kiện click vào nút "Gửi"
    document.getElementById('post-comment2').addEventListener('click', postComment2);

    // Lắng nghe sự kiện nhấn phím Enter trong trường nhập liệu bình luận
    document.getElementById('comment-text2').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter (thường là gửi form)
            postComment2(); // Gọi hàm postComment để xử lý đăng bình luận
        }
    });

    // Lắng nghe sự kiện click vào nút "Sắp xếp"
    let sortBy2 = 'newest'; // Mặc định sắp xếp theo mới nhất
    document.getElementById('sort-comments2').addEventListener('click', function() {
        if (sortBy2 === 'newest') {
            sortBy2 = 'oldest';
        } else {
            sortBy2 = 'newest';
        }
        // Hiển thị lại bình luận theo thứ tự mới
        renderComments2();
    });

    // Hiển thị ban đầu của bình luận
    renderComments2();
    updateCommentCount2();
});*/

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM đã được tải đầy đủ.");

    // Hàm lấy bình luận từ localStorage
    function loadCommentsFromLocalStorage() {
        const storedComments = localStorage.getItem('comments2');
        return storedComments ? JSON.parse(storedComments) : [];
    }

    // Hàm lưu bình luận vào localStorage
    function saveCommentsToLocalStorage(comments) {
        localStorage.setItem('comments2', JSON.stringify(comments));
    }

    // Mảng để lưu trữ bình luận, lấy từ localStorage
    let comments2 = loadCommentsFromLocalStorage();

    // Hàm xử lý việc đăng bình luận
    function postComment2() {
        const commentText2 = document.getElementById('comment-text2').value;
        if (commentText2.trim() !== "") {
            const now = new Date();
            const timestamp = now.getTime(); // Lưu trữ thời gian dưới dạng milliseconds từ ngày 1/1/1970

            // Tạo một đối tượng bình luận mới
            const newComment2 = {
                text: commentText2,
                timestamp: timestamp
            };

            // Thêm bình luận mới vào mảng
            comments2.push(newComment2);

            // Lưu bình luận vào localStorage
            saveCommentsToLocalStorage(comments2);

            // Sắp xếp và hiển thị bình luận theo thứ tự hiện tại
            renderComments2();

            // Xóa nội dung trong trường nhập liệu
            document.getElementById('comment-text2').value = '';

            // Cập nhật số lượng bình luận
            updateCommentCount2();
        } else {
            console.log("Nội dung bình luận trống.");
        }
    }

    // Hàm hiển thị bình luận theo thứ tự hiện tại
    function renderComments2() {
        const commentsContainer2 = document.getElementById('comments-container2');
        commentsContainer2.innerHTML = ''; // Xóa các bình luận hiện có

        // Sắp xếp bình luận theo giá trị sortBy2 hiện tại
        if (sortBy2 === 'oldest') {
            comments2.sort((a, b) => a.timestamp - b.timestamp);
        } else if (sortBy2 === 'newest') {
            comments2.sort((a, b) => b.timestamp - a.timestamp);
        }

        // Hiển thị bình luận đã sắp xếp
        comments2.forEach(comment2 => {
            const commentElement2 = document.createElement('div');
            commentElement2.className = 'comment2';
            commentElement2.innerHTML = `
                <img src="../img/avt.jpg" alt="Avatar" class="avatar">
                <div class="comment-details2">
                    <span class="comment-date2">${new Date(comment2.timestamp).toLocaleString('vi-VN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    <p>${comment2.text}</p>
                </div>
            `;
            commentsContainer2.appendChild(commentElement2);
        });
    }

    // Hàm cập nhật số lượng bình luận
    function updateCommentCount2() {
        const commentCountElement2 = document.getElementById('comment-count2');
        const commentCountDisplay = document.getElementById('comment-count-display');
        const count = comments2.length;
        commentCountElement2.textContent = `${count} bình luận`;
        commentCountDisplay.textContent = count;
    }

    // Lắng nghe sự kiện click vào nút "Gửi"
    document.getElementById('post-comment2').addEventListener('click', postComment2);

    // Lắng nghe sự kiện nhấn phím Enter trong trường nhập liệu bình luận
    document.getElementById('comment-text2').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter (thường là gửi form)
            postComment2(); // Gọi hàm postComment để xử lý đăng bình luận
        }
    });

    // Lắng nghe sự kiện click vào nút "Sắp xếp"
    let sortBy2 = 'newest'; // Mặc định sắp xếp theo mới nhất
    document.getElementById('sort-comments2').addEventListener('click', function() {
        sortBy2 = sortBy2 === 'newest' ? 'oldest' : 'newest';
        renderComments2(); // Hiển thị lại bình luận theo thứ tự mới
    });

    // Hiển thị ban đầu của bình luận
    renderComments2();
    updateCommentCount2();
});
document.addEventListener('DOMContentLoaded', function() {
    const commentCountDisplay = document.getElementById('comment-count-display');
    const comments = JSON.parse(localStorage.getItem('comments2')) || [];
    commentCountDisplay.textContent = comments.length;
});


        
