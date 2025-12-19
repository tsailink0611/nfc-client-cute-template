/**
 * Gallery Swiper Initialization
 * ゆっくり自動で回転するカルーセル
 */

const slideImages = [
    { src: 'slide-1.jpg', alt: '麗奈 - ピンクドレス' },
    { src: 'slide-2.jpg', alt: '麗奈 - ゴールドドレス' },
    { src: 'slide-3.jpg', alt: '麗奈 - シルバードレス' },
    { src: 'slide-4.jpg', alt: '麗奈 - ホワイトドレス' },
    { src: 'slide-5.jpg', alt: '麗奈 - クローズアップ' }
];

// Swiper初期化
const gallerySwiper = new Swiper('.gallery-swiper', {
    // ゆっくり自動スクロール
    autoplay: {
        delay: 0, // 遅延なし
        disableOnInteraction: false, // 操作後も継続
    },
    speed: 8000, // 8秒かけてゆっくりスライド
    loop: true, // 無限ループ
    
    // 両サイドの画像が見えるように
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    
    // スワイプ操作
    touchRatio: 1,
    grabCursor: true,
    
    // ドットナビゲーション
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // エフェクト
    effect: 'slide',
    
    // レスポンシブ設定
    breakpoints: {
        320: {
            spaceBetween: 15,
        },
        768: {
            spaceBetween: 30,
        },
    },
});

// 画像クリックでLightbox表示
function initGalleryLightbox() {
    const slides = document.querySelectorAll('.gallery-swiper .swiper-slide');
    
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

/**
 * Lightbox Functions
 */
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = slideImages[index].src;
        lightboxImage.alt = slideImages[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Swiperを一時停止
        gallerySwiper.autoplay.stop();
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Swiperを再開
        gallerySwiper.autoplay.start();
    }
}

function lightboxNext() {
    const lightboxImage = document.getElementById('lightbox-image');
    const currentIndex = slideImages.findIndex(img => img.src === lightboxImage.src.split('/').pop());
    const nextIndex = (currentIndex + 1) % slideImages.length;
    
    if (lightboxImage) {
        lightboxImage.src = slideImages[nextIndex].src;
        lightboxImage.alt = slideImages[nextIndex].alt;
    }
}

function lightboxPrev() {
    const lightboxImage = document.getElementById('lightbox-image');
    const currentIndex = slideImages.findIndex(img => img.src === lightboxImage.src.split('/').pop());
    const prevIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
    
    if (lightboxImage) {
        lightboxImage.src = slideImages[prevIndex].src;
        lightboxImage.alt = slideImages[prevIndex].alt;
    }
}

// Lightbox controls
document.addEventListener('DOMContentLoaded', () => {
    initGalleryLightbox();
    
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
    
    console.log('// Gallery Swiper initialized - ゆっくり自動回転中...');
});
