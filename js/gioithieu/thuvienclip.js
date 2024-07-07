document.addEventListener('DOMContentLoaded', function () {
    // Lấy số lần click từ Local Storage nếu có
    let videoClickCounts = JSON.parse(localStorage.getItem('videoClickCounts')) || { 1: 0, 2: 0, 3: 0 };

    // Cập nhật số lần click cho mỗi video khi tải trang
    Object.keys(videoClickCounts).forEach(videoId => {
        const viewsElement = document.getElementById(`views-${videoId}`);
        if (viewsElement) {
            viewsElement.innerHTML = `<i class="fa fa-eye"></i> ${videoClickCounts[videoId]}`;
        }
    });

    // Tạo player object cho từng video
    const players = {};

    // Gắn sự kiện click cho mỗi video
    document.querySelectorAll('.itemclip').forEach(item => {
        const videoId = item.getAttribute('data-id');
        const viewsElement = document.getElementById(`views-${videoId}`);
        const iframe = item.querySelector('iframe');
        const iframeId = `video-${videoId}`;

        // Tạo player object khi iframe sẵn sàng
        iframe.onload = () => {
            players[iframeId] = new YT.Player(iframeId, {
                events: {
                    'onStateChange': (event) => {
                        if (event.data === YT.PlayerState.PLAYING) {
                            setTimeout(() => {
                                if (players[iframeId].getPlayerState() === YT.PlayerState.PLAYING) {
                                    videoClickCounts[videoId]++;
                                    console.log(`Video ${videoId} đã được xem ${videoClickCounts[videoId]} lần!`);

                                    // Lưu số lần click vào Local Storage
                                    localStorage.setItem('videoClickCounts', JSON.stringify(videoClickCounts));

                                    // Cập nhật số lượt xem ngay lập tức
                                    if (viewsElement) {
                                        viewsElement.innerHTML = `<i class="fa fa-eye"></i> ${videoClickCounts[videoId]}`;
                                    }
                                }
                            }, 5000); // Tăng số lượt xem sau 5 giây
                        }
                    }
                }
            });
        };

        // Kiểm tra nếu sự kiện đã được gắn
        if (!item.dataset.clickEventAdded) {
            item.addEventListener('click', (event) => {
                // Hiển thị modal
                const modalIframe = document.getElementById('modal-video');
                modalIframe.src = iframe.src + '&autoplay=1'; // Thêm autoplay để video tự phát
                document.getElementById('modal').style.display = 'block';

                event.stopPropagation();
            });

            // Đánh dấu rằng sự kiện đã được gắn
            item.dataset.clickEventAdded = true;
        }

        // Kiểm tra nếu phần tử đánh giá đã tồn tại
        if (!item.querySelector('.rating-container')) {
            // Tính năng đánh giá video
            const ratingContainer = document.createElement('div');
            ratingContainer.className = 'rating-container';
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('span');
                star.className = 'star';
                star.innerHTML = '&#9733;'; // Biểu tượng ngôi sao
                star.dataset.rating = i;
                star.addEventListener('click', () => {
                    alert(`Bạn đã đánh giá video này ${i} sao!`);
                    // Lưu đánh giá vào Local Storage
                    localStorage.setItem(`videoRating-${videoId}`, i);
                    updateStarColors(ratingContainer, i);
                });
                ratingContainer.appendChild(star);
            }
            item.appendChild(ratingContainer);

            // Khôi phục đánh giá đã lưu
            const savedRating = localStorage.getItem(`videoRating-${videoId}`);
            if (savedRating) {
                updateStarColors(ratingContainer, savedRating);
            }
        }
    });

    // Hàm cập nhật màu sắc của sao
    function updateStarColors(container, rating) {
        container.querySelectorAll('.star').forEach(star => {
            if (star.dataset.rating <= rating) {
                star.style.color = '#f39c12';
            } else {
                star.style.color = '#ccc';
            }
        });
    }

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

    // Tính năng tìm kiếm video, chỉ thêm nếu chưa tồn tại
    if (!document.querySelector('.search-input')) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Tìm kiếm video...';
        searchInput.className = 'search-input';
        document.body.insertBefore(searchInput, document.querySelector('.container2'));

        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            document.querySelectorAll('.itemclip').forEach(item => {
                const note = item.querySelector('.video-note').textContent.toLowerCase();
                if (note.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// Load YouTube IFrame Player API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Hàm YouTube IFrame Player API sẵn sàng
function onYouTubeIframeAPIReady() {
    console.log("YouTube IFrame API đã sẵn sàng.");
}

/*document.addEventListener('DOMContentLoaded', function () {
    // Lấy số lần click từ Local Storage nếu có
    let videoClickCounts = JSON.parse(localStorage.getItem('videoClickCounts')) || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    // Cập nhật số lần click cho mỗi video khi tải trang
    Object.keys(videoClickCounts).forEach(videoId => {
        const viewsElement = document.getElementById(`views-${videoId}`);
        if (viewsElement) {
            viewsElement.innerHTML = `<i class="fa fa-eye"></i> ${videoClickCounts[videoId]}`;
        }
    });

    // Tạo player object cho từng video
    const players = {};

    // Gắn sự kiện click cho mỗi video
    document.querySelectorAll('.itemclip').forEach(item => {
        const videoId = item.getAttribute('data-id');
        const viewsElement = document.getElementById(`views-${videoId}`);
        const iframe = item.querySelector('iframe');
        const iframeId = `video-${videoId}`;

        // Đảm bảo iframe đã có ID duy nhất
        iframe.id = iframeId;

        // Tạo player object khi iframe sẵn sàng
        players[iframeId] = new YT.Player(iframeId, {
            events: {
                'onStateChange': (event) => {
                    if (event.data === YT.PlayerState.PLAYING) {
                        setTimeout(() => {
                            if (players[iframeId].getPlayerState() === YT.PlayerState.PLAYING) {
                                videoClickCounts[videoId]++;
                                console.log(`Video ${videoId} đã được xem ${videoClickCounts[videoId]} lần!`);

                                // Lưu số lần click vào Local Storage
                                localStorage.setItem('videoClickCounts', JSON.stringify(videoClickCounts));

                                // Cập nhật số lượt xem ngay lập tức
                                if (viewsElement) {
                                    viewsElement.innerHTML = `<i class="fa fa-eye"></i> ${videoClickCounts[videoId]}`;
                                }
                            }
                        }, 5000); // Tăng số lượt xem sau 5 giây
                    }
                }
            }
        });

        // Kiểm tra nếu sự kiện đã được gắn
        if (!item.dataset.clickEventAdded) {
            item.addEventListener('click', (event) => {
                // Hiển thị modal
                const modalIframe = document.getElementById('modal-video');
                modalIframe.src = iframe.src + '&autoplay=1'; // Thêm autoplay để video tự phát
                document.getElementById('modal').style.display = 'block';

                event.stopPropagation();
            });

            // Đánh dấu rằng sự kiện đã được gắn
            item.dataset.clickEventAdded = true;
        }

        // Kiểm tra nếu phần tử đánh giá đã tồn tại
        if (!item.querySelector('.rating-container')) {
            // Tính năng đánh giá video
            const ratingContainer = document.createElement('div');
            ratingContainer.className = 'rating-container';
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('span');
                star.className = 'star';
                star.innerHTML = '&#9733;'; // Biểu tượng ngôi sao
                star.dataset.rating = i;
                star.addEventListener('click', () => {
                    alert(`Bạn đã đánh giá video này ${i} sao!`);
                    // Lưu đánh giá vào Local Storage
                    localStorage.setItem(`videoRating-${videoId}`, i);
                    updateStarColors(ratingContainer, i);
                });
                ratingContainer.appendChild(star);
            }
            item.appendChild(ratingContainer);

            // Khôi phục đánh giá đã lưu
            const savedRating = localStorage.getItem(`videoRating-${videoId}`);
            if (savedRating) {
                updateStarColors(ratingContainer, savedRating);
            }
        }
    });

    // Hàm cập nhật màu sắc của sao
    function updateStarColors(container, rating) {
        container.querySelectorAll('.star').forEach(star => {
            if (star.dataset.rating <= rating) {
                star.style.color = '#f39c12';
            } else {
                star.style.color = '#ccc';
            }
        });
    }

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

    // Tính năng tìm kiếm video, chỉ thêm nếu chưa tồn tại
    if (!document.querySelector('.search-input')) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Tìm kiếm video...';
        searchInput.className = 'search-input';
        document.body.insertBefore(searchInput, document.querySelector('.container2'));

        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            document.querySelectorAll('.itemclip').forEach(item => {
                const note = item.querySelector('.video-note').textContent.toLowerCase();
                if (note.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// Load YouTube IFrame Player API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Hàm YouTube IFrame Player API sẵn sàng
function onYouTubeIframeAPIReady() {
    console.log("YouTube IFrame API đã sẵn sàng.");
}*/