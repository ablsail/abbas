document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Video Modal Popup
    const openVideoBtn = document.getElementById('openVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const videoIframe = document.getElementById('videoIframe');

    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

    if (openVideoBtn && videoModal && closeVideoBtn) {
        openVideoBtn.addEventListener('click', () => {
            videoIframe.src = videoUrl;
            videoModal.classList.add('active');
        });

        const closeModal = () => {
            videoIframe.src = "";
            videoModal.classList.remove('active');
        };

        closeVideoBtn.addEventListener('click', closeModal);
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeModal();
        });
    }

    // 3. Stats Counter Animation on Scroll
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 100;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count) + (target > 100 ? '+' : '%');
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + (target > 100 ? '+' : '%');
                }
            };
            updateCount();
        });
    };

    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const sectionPos = statsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight;

            if (sectionPos < screenPos && !animated) {
                animated = true;
                startCounters();
            }
        }
    });

    // 4. Newsletter Form Handler
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('شكراً لاشتراكك في النشرة البريدية!');
            newsletterForm.reset();
        });
    }

});

// 5. Reviews Slider (Global Function)
let currentReview = 0;
function showReview(index) {
    const cards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.review-dot');

    if (cards.length === 0 || dots.length === 0) return;

    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentReview = index;
}