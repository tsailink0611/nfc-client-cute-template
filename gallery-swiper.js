/**
 * Gallery Swiper Initialization
 * カードスタック風エフェクト（Cards Effect）
 * 常に回転するのではなく、カードが重なって見えるおしゃれな表示
 */

const slideImages = [
    { src: 'slide-1.jpg', alt: '愛花 - ピンクドレス' },
    { src: 'slide-2.jpg', alt: '愛花 - 浴衣姿' },
    { src: 'slide-3.jpg', alt: '愛花 - カジュアル' },
    { src: 'slide-4.jpg', alt: '愛花 - バースデー' },
    { src: 'slide-5.jpg', alt: '愛花 - クローズアップ' }
];

// Swiper初期化
const gallerySwiper = new Swiper('.gallery-swiper', {
    // カードエフェクト
    effect: 'coverflow',
    grabCursor: true,
    
    // Coverflowエフェクトのオプション（Cards風に調整）
    coverflowEffect: {
        rotate: 0,
        stretch: 80, // カードの重なり具合
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    
    // スライドのタッチ移動を許可
    allowTouchMove: true,
    
    // 自動再生 - インタラクション後も継続
    autoplay: {
        delay: 2500,
        disableOnInteraction: false, // 触っても自動再生を止めない
        pauseOnMouseEnter: false, // カーソルが乗っても止めない
    },
    
    // ループ
    loop: true,
    
    // ページネーション
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    // レスポンシブ調整
    centeredSlides: true,
    slidesPerView: 'auto',
    
    // タッチ操作の感度調整
    threshold: 5, // 5px以上の移動でスワイプと判定
    
    // キーボード操作
    keyboard: {
        enabled: true,
    },
});

// 画像クリックでLightbox表示 - クリック判定の改善
function initGalleryLightbox() {
    const slides = document.querySelectorAll('.gallery-swiper .swiper-slide');
    
    slides.forEach((slide) => {
        // clickイベントは、スワイプ終了時にも発火する場合があるため、
        // Swiperの内部ステートや移動量を確認するのがベストだが、
        // ここではシンプルに実装しつつ、Swiper自体のclickハンドラを利用する
        slide.addEventListener('click', (e) => {
            // スワイプ中でなければ実行
            if (!gallerySwiper.animating) {
                const img = slide.querySelector('img');
                if (img) {
                    // srcからインデックスを逆引き
                    const currentSrc = img.src.split('/').pop();
                    const index = slideImages.findIndex(image => image.src === currentSrc);
                    if (index !== -1) {
                        openLightbox(index);
                    }
                }
            }
        });
    });
    
    // SwiperのtouchStart/Endイベントで自動再生の挙動を補強
    gallerySwiper.on('touchEnd', () => {
        // タッチ終了後に自動再生を再開（念のため）
        if (gallerySwiper.autoplay && !gallerySwiper.autoplay.running) {
            gallerySwiper.autoplay.start();
        }
    });
}

/**
 * Lightbox Functions
 */
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    
    // 安全策: インデックスが範囲外なら0にする
    if (index >= slideImages.length) index = 0;
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = slideImages[index].src;
        lightboxImage.alt = slideImages[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Swiperを一時停止
        if (gallerySwiper.autoplay && typeof gallerySwiper.autoplay.stop === 'function') {
            gallerySwiper.autoplay.stop();
        }
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Swiperを再開
        if (gallerySwiper.autoplay && typeof gallerySwiper.autoplay.start === 'function') {
            gallerySwiper.autoplay.start();
        }
    }
}

function lightboxNext() {
    const lightboxImage = document.getElementById('lightbox-image');
    // 現在の画像のファイル名からインデックスを探す（簡易実装）
    const currentSrc = lightboxImage.src.split('/').pop();
    const currentIndex = slideImages.findIndex(img => img.src === currentSrc);
    
    if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % slideImages.length;
        lightboxImage.src = slideImages[nextIndex].src;
        lightboxImage.alt = slideImages[nextIndex].alt;
    }
}

function lightboxPrev() {
    const lightboxImage = document.getElementById('lightbox-image');
    const currentSrc = lightboxImage.src.split('/').pop();
    const currentIndex = slideImages.findIndex(img => img.src === currentSrc);
    
    if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
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
    
    console.log('// Gallery Swiper initialized - Cards Effect');
});
