/**
 * NFC Landing Page - JavaScript
 * vCard generation and download functionality
 */

// Contact Information
const contactInfo = {
    firstName: '麗奈',
    lastName: '',
    firstNameEN: 'Reina',
    lastNameEN: '',
    title: 'Hostess at Club Diamond',
    company: 'Club Diamond',
    email: 'reina@club-diamond.example',
    phone: '', // Hidden per requirements
    url: 'https://line.me/ti/p/demo-reina',
    location: '銀座',
    note: '銀座Club Diamondのホステス。エレガントなおもてなしと癒しの時間をご提供いたします。店内指名・同伴・アフター・LINE相談対応可能です。'
};

/**
 * Generate vCard 3.0 format string
 * @returns {string} vCard formatted string
 */
function generateVCard() {
    const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${contactInfo.lastName};${contactInfo.firstName};;;`,
        `FN:${contactInfo.lastName} ${contactInfo.firstName} (${contactInfo.firstNameEN} ${contactInfo.lastNameEN})`,
        `TITLE:${contactInfo.title}`,
        `ORG:${contactInfo.company}`,
        `EMAIL;TYPE=INTERNET:${contactInfo.email}`,
        contactInfo.phone ? `TEL;TYPE=CELL:${contactInfo.phone}` : '',
        `URL:${contactInfo.url}`,
        `ADR;TYPE=WORK:;;;;;;${contactInfo.location}`,
        `NOTE:${contactInfo.note}`,
        'END:VCARD'
    ].filter(line => line !== '').join('\r\n');

    return vcard;
}

/**
 * Download vCard file
 * @param {string} vcardData - vCard formatted string
 * @param {string} filename - Name of the file to download
 */
function downloadVCard(vcardData, filename = 'reina-club-diamond.vcf') {
    // Create a Blob from the vCard data
    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the object URL
    setTimeout(() => URL.revokeObjectURL(link.href), 100);
}

/**
 * Handle vCard button click
 */
function handleVCardDownload() {
    try {
        const vcardData = generateVCard();
        downloadVCard(vcardData);

        // Show success feedback
        showFeedback('連絡先を保存しました！', 'success');
    } catch (error) {
        console.error('Error generating vCard:', error);
        showFeedback('エラーが発生しました。もう一度お試しください。', 'error');
    }
}

/**
 * Bookmark Guide Modal Functions
 */
function openBookmarkGuide() {
    const modal = document.getElementById('bookmark-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookmarkGuide() {
    const modal = document.getElementById('bookmark-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Show feedback message
 * @param {string} message - Message to display
 * @param {string} type - Type of message ('success' or 'error')
 */
function showFeedback(message, type = 'success') {
    // Check if feedback element already exists
    let feedback = document.querySelector('.feedback-message');

    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'feedback-message';
        document.body.appendChild(feedback);
    }

    // Set message and style
    feedback.textContent = message;
    feedback.className = `feedback-message feedback-${type} show`;

    // Remove after 3 seconds
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 3000);
}

/**
 * Add smooth scroll behavior for future internal links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add animation on scroll (for future enhancements)
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
}

/**
 * Video Modal Functions
 */
function openVideoModal() {
    const modal = document.getElementById('video-modal');
    const image = document.getElementById('modal-image');

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        
        // Note: This will show the avatar image for now. Replace with HeyGen/D-ID video when available.
        console.log('Showing Reina\'s avatar image - video coming soon!');
    }
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');

    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }
}

/**
 * Initialize application
 */
function init() {
    // Add vCard download handler (legacy support)
    const vcardBtn = document.getElementById('vcard-btn');
    if (vcardBtn) {
        vcardBtn.addEventListener('click', handleVCardDownload);
    }

    // Add bookmark guide handler
    const bookmarkBtn = document.getElementById('bookmark-btn');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', openBookmarkGuide);
    }

    // Add avatar modal handlers
    const videoTriggerBtn = document.getElementById('avatar-trigger-btn');
    const videoModalCloseBtn = document.querySelector('.modal-close');
    const videoModalOverlay = document.querySelector('#video-modal .modal-overlay');
    const videoModal = document.getElementById('video-modal');

    if (videoTriggerBtn) {
        videoTriggerBtn.addEventListener('click', openVideoModal);
    }

    if (videoModalCloseBtn) {
        videoModalCloseBtn.addEventListener('click', closeVideoModal);
    }

    if (videoModalOverlay) {
        videoModalOverlay.addEventListener('click', closeVideoModal);
    }

    // Add bookmark modal handlers
    const bookmarkModalCloseBtn = document.querySelector('.bookmark-modal-close');
    const bookmarkModalOverlay = document.querySelector('#bookmark-modal .modal-overlay');
    const guideCloseBtn = document.querySelector('.guide-close-btn');
    const bookmarkModal = document.getElementById('bookmark-modal');

    if (bookmarkModalCloseBtn) {
        bookmarkModalCloseBtn.addEventListener('click', closeBookmarkGuide);
    }

    if (bookmarkModalOverlay) {
        bookmarkModalOverlay.addEventListener('click', closeBookmarkGuide);
    }

    if (guideCloseBtn) {
        guideCloseBtn.addEventListener('click', closeBookmarkGuide);
    }

    // Close modals on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (videoModal && videoModal.classList.contains('active')) {
                closeVideoModal();
            }
            if (bookmarkModal && bookmarkModal.classList.contains('active')) {
                closeBookmarkGuide();
            }
        }
    });

    // Initialize smooth scroll
    initSmoothScroll();

    // Initialize scroll animations (optional)
    // initScrollAnimations();

    console.log('// NFC Landing Page initialized');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add CSS for feedback message dynamically
const style = document.createElement('style');
style.textContent = `
    .feedback-message {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-family: var(--font-sans, sans-serif);
        font-size: 0.9375rem;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 1000;
    }

    .feedback-message.show {
        transform: translateX(0);
    }

    .feedback-success {
        background: #000;
        color: #fff;
    }

    .feedback-error {
        background: #dc2626;
        color: #fff;
    }

    @media (max-width: 768px) {
        .feedback-message {
            left: 20px;
            right: 20px;
            transform: translateY(-100px);
        }

        .feedback-message.show {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/**
 * Photo Gallery Slideshow Functions
 */
let currentSlide = 0;
const slideImages = [
    { src: 'slide-1.jpg', alt: '麗奈 - ピンクドレス' },
    { src: 'slide-2.jpg', alt: '麗奈 - ゴールドドレス' },
    { src: 'slide-3.jpg', alt: '麗奈 - シルバードレス' },
    { src: 'slide-4.jpg', alt: '麗奈 - ホワイトドレス' },
    { src: 'slide-5.jpg', alt: '麗奈 - クローズアップ' }
];
let autoSlideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    // Wrap around
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    
    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    // Auto advance every 4 seconds
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

/**
 * Lightbox Functions
 */
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (lightbox && lightboxImage) {
        currentSlide = index;
        lightboxImage.src = slideImages[index].src;
        lightboxImage.alt = slideImages[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        stopAutoSlide();
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        startAutoSlide();
    }
}

function lightboxNext() {
    currentSlide = (currentSlide + 1) % slideImages.length;
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage) {
        lightboxImage.src = slideImages[currentSlide].src;
        lightboxImage.alt = slideImages[currentSlide].alt;
    }
}

function lightboxPrev() {
    currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage) {
        lightboxImage.src = slideImages[currentSlide].src;
        lightboxImage.alt = slideImages[currentSlide].alt;
    }
}

/**
 * Initialize Slideshow
 */
function initSlideshow() {
    // Arrow navigation
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Dots navigation
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });
    
    // Click on slide to open lightbox
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            openLightbox(index);
        });
    });
    
    // Lightbox controls
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrevBtn = document.querySelector('.lightbox-prev');
    const lightboxNextBtn = document.querySelector('.lightbox-next');
    const lightboxOverlay = document.querySelector('#lightbox-modal .modal-overlay');
    
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', lightboxPrev);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', lightboxNext);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox-modal');
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') lightboxPrev();
            if (e.key === 'ArrowRight') lightboxNext();
            if (e.key === 'Escape') closeLightbox();
        }
    });
    
    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        slideshowContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }
    
    // Start auto-slide
    startAutoSlide();
    
    // Pause on hover
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
        slideshowContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    console.log('// Photo Gallery Slideshow initialized');
}

// Update init() to include slideshow
const originalInit = init;
init = function() {
    originalInit();
    initSlideshow();
};

// Re-run init if DOM is already loaded
if (document.readyState !== 'loading') {
    initSlideshow();
}
