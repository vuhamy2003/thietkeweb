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

/*comment bài chia sẻ 2*/
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

/*bình luận bài chia sẻ 3*/
// Hàm thêm bình luận tự động
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM đã được tải đầy đủ.");

    // Hàm lấy bình luận từ localStorage
    function loadCommentsFromLocalStorage() {
        const storedComments = localStorage.getItem('comments3');
        return storedComments ? JSON.parse(storedComments) : [];
    }

    // Hàm lưu bình luận vào localStorage
    function saveCommentsToLocalStorage(comments) {
        localStorage.setItem('comments3', JSON.stringify(comments));
    }

    // Mảng để lưu trữ bình luận, lấy từ localStorage
    let comments3 = loadCommentsFromLocalStorage();

    // Hàm thêm bình luận tự động
    function addAutoComment() {
        const autoCommentText = "Cảm ơn tác giả đã dành thời gian chia sẻ những kinh nghiệm quý báu cho các bạn sinh viên Khoa FIT.";
        const autoCommentTimestamp = new Date("2024-05-12T20:08:00").getTime(); // Thời gian 20:08 ngày 12/05/2024

        const autoComment = {
            text: autoCommentText,
            timestamp: autoCommentTimestamp
        };
    
        // Kiểm tra xem bình luận tự động đã tồn tại chưa, nếu chưa thì thêm vào
        const commentExists = comments3.some(comment => comment.text === autoComment.text && comment.timestamp === autoComment.timestamp);

        if (!commentExists) {
            // Thêm bình luận tự động vào mảng
            comments3.push(autoComment);

            // Lưu bình luận vào localStorage
            saveCommentsToLocalStorage(comments3);

            // Hiển thị lại bình luận
            renderComments3();

            // Cập nhật số lượng bình luận
            updateCommentCount3();
        }
    }

    // Hàm thêm bình luận tự động
    function addAutoComment() {
        const autoCommentText = "Chúc các bạn sinh viên Khoa FIT vượt qua ải quan xin việc thành công!";
        const autoCommentTimestamp = new Date("2024-05-15T22:10:00").getTime(); 

        const autoComment = {
            text: autoCommentText,
            timestamp: autoCommentTimestamp
        };
    
        // Kiểm tra xem bình luận tự động đã tồn tại chưa, nếu chưa thì thêm vào
        const commentExists = comments3.some(comment => comment.text === autoComment.text && comment.timestamp === autoComment.timestamp);

        if (!commentExists) {
            // Thêm bình luận tự động vào mảng
            comments3.push(autoComment);

            // Lưu bình luận vào localStorage
            saveCommentsToLocalStorage(comments3);

            // Hiển thị lại bình luận
            renderComments3();

            // Cập nhật số lượng bình luận
            updateCommentCount3();
        }
    }
    // Hàm thêm bình luận tự động
    function addAutoComment() {
        const autoCommentText = "Bài viết chia sẻ rất hữu ích và đầy đủ thông tin về cách xây dựng CV ấn tượng cho ngành Công nghệ Thông tin.";
        const autoCommentTimestamp = new Date("2024-05-18T22:30:00").getTime(); 

        const autoComment = {
            text: autoCommentText,
            timestamp: autoCommentTimestamp
        };
    
        // Kiểm tra xem bình luận tự động đã tồn tại chưa, nếu chưa thì thêm vào
        const commentExists = comments3.some(comment => comment.text === autoComment.text && comment.timestamp === autoComment.timestamp);

        if (!commentExists) {
            // Thêm bình luận tự động vào mảng
            comments3.push(autoComment);

            // Lưu bình luận vào localStorage
            saveCommentsToLocalStorage(comments3);

            // Hiển thị lại bình luận
            renderComments3();

            // Cập nhật số lượng bình luận
            updateCommentCount3();
        }
    }

    // Gọi hàm thêm bình luận tự động khi DOM đã sẵn sàng
    addAutoComment();

    // Hàm xử lý việc đăng bình luận
    function postComment3() {
        const commentText3 = document.getElementById('comment-text3').value;
        if (commentText3.trim() !== "") {
            const now = new Date();
            const timestamp = now.getTime(); // Lưu trữ thời gian dưới dạng milliseconds từ ngày 1/1/1970

            // Tạo một đối tượng bình luận mới
            const newComment3 = {
                text: commentText3,
                timestamp: timestamp
            };

            // Thêm bình luận mới vào mảng
            comments3.push(newComment3);

            // Lưu bình luận vào localStorage
            saveCommentsToLocalStorage(comments3);

            // Sắp xếp và hiển thị bình luận theo thứ tự hiện tại
            renderComments3();

            // Xóa nội dung trong trường nhập liệu
            document.getElementById('comment-text3').value = '';

            // Cập nhật số lượng bình luận
            updateCommentCount3();
        } else {
            console.log("Nội dung bình luận trống.");
        }
    }

    // Hàm hiển thị bình luận theo thứ tự hiện tại
    function renderComments3() {
        const commentsContainer3 = document.getElementById('comments-container3');
        commentsContainer3.innerHTML = ''; // Xóa các bình luận hiện có

        // Sắp xếp bình luận theo giá trị sortBy3 hiện tại
        if (sortBy3 === 'oldest') {
            comments3.sort((a, b) => a.timestamp - b.timestamp);
        } else if (sortBy3 === 'newest') {
            comments3.sort((a, b) => b.timestamp - a.timestamp);
        }

        // Hiển thị bình luận đã sắp xếp
        comments3.forEach(comment3 => {
            const commentElement3 = document.createElement('div');
            commentElement3.className = 'comment3';
            commentElement3.innerHTML = `
                <img src="../img/avt.jpg" alt="Avatar" class="avatar">
                <div class="comment-details3">
                    <span class="comment-date3">${new Date(comment3.timestamp).toLocaleString('vi-VN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    <p>${comment3.text}</p>
                </div>
            `;
            commentsContainer3.appendChild(commentElement3);
        });
    }

    // Hàm cập nhật số lượng bình luận
    function updateCommentCount3() {
        const commentCountElement3 = document.getElementById('comment-count3');
        const commentCountDisplay3 = document.getElementById('comment-count-display3');
        const count = comments3.length;
        commentCountElement3.textContent = `${count} bình luận`;
        commentCountDisplay3.textContent = count;
    }

    // Lắng nghe sự kiện click vào nút "Gửi"
    document.getElementById('post-comment3').addEventListener('click', postComment3);

    // Lắng nghe sự kiện nhấn phím Enter trong trường nhập liệu bình luận
    document.getElementById('comment-text3').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter (thường là gửi form)
            postComment3(); // Gọi hàm postComment để xử lý đăng bình luận
        }
    });

    // Lắng nghe sự kiện click vào nút "Sắp xếp"
    let sortBy3 = 'newest'; // Mặc định sắp xếp theo mới nhất
    document.getElementById('sort-comments3').addEventListener('click', function() {
        sortBy3 = sortBy3 === 'newest' ? 'oldest' : 'newest';
        renderComments3(); // Hiển thị lại bình luận theo thứ tự mới
    });

    // Hiển thị ban đầu của bình luận
    renderComments3();
    updateCommentCount3();
});
document.addEventListener('DOMContentLoaded', function() {
    const commentCountDisplay = document.getElementById('comment-count-display3');
    const comments = JSON.parse(localStorage.getItem('comments3')) || [];
    commentCountDisplay.textContent = comments.length;
});

/*ảnh cv*/
document.querySelectorAll('.anhcv').forEach(img => {
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
