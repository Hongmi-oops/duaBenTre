//hiệu ứng của header
window.onscroll = function() {stickyHeader()};
var header = document.querySelector('.header');
var topBarHeight = document.querySelector('.top-bar').offsetHeight;
function stickyHeader() {
    if (window.pageYOffset > topBarHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

// Nút mũi tên quay về đầu trang
const scrollToTopButton = document.getElementById('scrollToTop');
// Hiện nút khi cuộn xuống
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
// Cuộn lên đầu trang khi bấm nút
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Nút menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Mở menu khi nhấn nút menu
    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    // Đóng menu khi nhấn nút X
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Đóng menu khi nhấn ngoài sidebar
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});


// Hiệu ứng video yt trang chủ
document.addEventListener("DOMContentLoaded", function () {
    const videoFrame = document.querySelector(".video-content iframe");
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function checkVideoVisibility() {
        if (isElementInViewport(videoFrame)) {
            videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        } else {
            videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        }
    }
    // Kiểm tra khi cuộn hoặc thay đổi kích thước
    window.addEventListener("scroll", checkVideoVisibility);
    window.addEventListener("resize", checkVideoVisibility);
});

//Hiệu ứng cuộn của trang intro//
// Điều chỉnh vị trí khi click vào các liên kết
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        const offsetTop = targetElement.offsetTop;

        // Thêm một chút khoảng cách trên cùng để không bị che khuất bởi header cố định (nếu có)
        window.scrollTo({
            top: offsetTop - 150, // Điều chỉnh giá trị -50 tùy theo yêu cầu
            behavior: 'smooth'
        });
    });
});
