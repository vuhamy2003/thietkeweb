// Đếm số lần click video
let videoClickCounts = { 1: 0, 2: 0, 3: 0 };

// Xử lý khi click vào video
document.querySelectorAll('.itemclip').forEach(item => {
    item.addEventListener('click', (event) => {
        const videoId = item.getAttribute('data-id');
        videoClickCounts[videoId]++;
        console.log(`Video ${videoId} đã được click ${videoClickCounts[videoId]} lần!`);

        // Hiển thị modal
        const iframe = item.querySelector('iframe');
        const modalIframe = document.getElementById('modal-video');
        modalIframe.src = iframe.src;
        document.getElementById('modal').style.display = 'block';

        event.stopPropagation();
    });
});

// Đóng modal khi click vào nút đóng
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-video').src = '';
});

// Đóng modal khi click ra ngoài modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
        document.getElementById('modal-video').src = '';
    }
});

// Đếm số lượt thích video
let videoLikes = { 1: 0, 2: 0, 3: 0 };

// Xử lý khi click vào nút Thích
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const item = button.closest('.itemclip');
        const videoId = item.getAttribute('data-id');
        
        if (!button.classList.contains('liked')) {
            // Tăng số lượt thích và cập nhật giao diện
            videoLikes[videoId]++;
            button.innerHTML = `<i class="fa fa-thumbs-up"></i> Đã thích (${videoLikes[videoId]})`;
            button.classList.add('liked');
            alert('Bạn đã thích video này!');
        } else {
            // Giảm số lượt thích và cập nhật giao diện
            videoLikes[videoId]--;
            button.innerHTML = `<i class="fa fa-thumbs-up"></i> Thích (${videoLikes[videoId]})`;
            button.classList.remove('liked');
            alert('Bạn đã bỏ thích video này!');
        }

        event.stopPropagation(); // Ngăn không cho sự kiện click lan ra ngoài
    });
});
