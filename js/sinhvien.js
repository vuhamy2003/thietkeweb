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

    // Array to store comments
    let comments = [];

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
                    <span class="comment-date">${new Date(comment.timestamp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                    <p>${comment.text}</p>
                </div>
            `;
            commentsContainer.appendChild(commentElement);
        });
    }

    // Function to update the comment count
    function updateCommentCount() {
        const commentCountElement = document.getElementById('comment-count');
        const currentCount = parseInt(commentCountElement.textContent);
        commentCountElement.textContent = `${currentCount + 1} bình luận`;
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
