/**
 * ============================================
 * NFC Landing Page - JavaScript (Cute Version)
 * 
 * 機能:
 * - オープニングアニメーション（5秒）
 * - タップアニメーション（ハート+バウンス+キラキラ）
 * - vCard生成とダウンロード
 * - モーダル表示（アバター、ライトボックス、ブックマーク案内）
 * - スムーススクロール
 * - フィードバックメッセージ表示
 * ============================================
 */

/**
 * ============================================
 * オープニングアニメーション管理
 * 訪問回数に応じた表示制御（現在は毎回5秒フル）
 * ============================================
 */
const OpeningAnimation = {
    DURATION: 5000, // 5秒
    
    init() {
        const overlay = document.getElementById('opening-overlay');
        const skipBtn = document.getElementById('opening-skip');
        
        if (!overlay) return;
        
        // スキップボタン
        if (skipBtn) {
            skipBtn.addEventListener('click', () => this.close());
        }
        
        // 5秒後に自動で閉じる
        setTimeout(() => this.close(), this.DURATION);
        
        // ページのスクロールを無効化
        document.body.style.overflow = 'hidden';
    },
    
    close() {
        const overlay = document.getElementById('opening-overlay');
        if (!overlay) return;
        
        overlay.classList.add('fade-out');
        document.body.style.overflow = '';
        
        // アニメーション完了後に要素を削除
        setTimeout(() => {
            overlay.remove();
        }, 800);
    },
    
    /**
     * 将来用: 訪問回数に応じた表示制御
     * 1-2回目: フル5秒
     * 3回目: 短縮版
     * 4回目以降: なし
     * 10回目: お礼メッセージ
     */
    getVisitCount() {
        let count = parseInt(localStorage.getItem('visit_count') || '0');
        count++;
        localStorage.setItem('visit_count', count.toString());
        return count;
    }
};

/**
 * ============================================
 * タップアニメーション（全部盛り）
 * ハートバースト + バウンス + キラキラ
 * ============================================
 */
const TapAnimation = {
    /**
     * ハートバーストエフェクトを生成
     * @param {number} x - X座標
     * @param {number} y - Y座標
     * @param {number} count - ハートの数
     */
    createHeartBurst(x, y, count = 8) {
        const container = document.createElement('div');
        container.className = 'heart-burst-container';
        container.style.left = x + 'px';
        container.style.top = y + 'px';
        
        const hearts = ['💕', '💗', '💖', '💓', '❤️', '🩷'];
        
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('span');
            heart.className = 'burst-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            // ランダムな方向と距離
            const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.5 - 0.25);
            const distance = 60 + Math.random() * 40;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - 30; // 上方向バイアス
            const rot = Math.random() * 360 - 180;
            
            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            heart.style.setProperty('--rot', rot + 'deg');
            heart.style.animationDelay = (Math.random() * 0.1) + 's';
            
            container.appendChild(heart);
        }
        
        document.body.appendChild(container);
        
        // 1秒後に削除
        setTimeout(() => container.remove(), 1000);
    },
    
    /**
     * キラキラバーストエフェクトを生成（ハート版）
     * @param {number} x - X座標
     * @param {number} y - Y座標
     * @param {number} count - ハートの数
     */
    createSparkleBurst(x, y, count = 12) {
        const container = document.createElement('div');
        container.className = 'heart-burst-container';
        container.style.left = x + 'px';
        container.style.top = y + 'px';
        
        const hearts = ['💕', '💗', '💖', '💓', '🩷', '❤️'];
        
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('span');
            heart.className = 'burst-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.fontSize = (12 + Math.random() * 8) + 'px';
            
            // ランダムな方向と距離
            const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.3 - 0.15);
            const distance = 50 + Math.random() * 40;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - 20;
            const rot = Math.random() * 360 - 180;
            
            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            heart.style.setProperty('--rot', rot + 'deg');
            heart.style.animationDelay = (Math.random() * 0.15) + 's';
            
            container.appendChild(heart);
        }
        
        document.body.appendChild(container);
        
        // 1秒後に削除
        setTimeout(() => container.remove(), 1000);
    },
    
    /**
     * リップルエフェクトを生成
     * @param {HTMLElement} element - 対象要素
     * @param {number} x - クリックX座標（要素内）
     * @param {number} y - クリックY座標（要素内）
     */
    createRipple(element, x, y) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        
        element.appendChild(ripple);
        
        // アニメーション後に削除
        setTimeout(() => ripple.remove(), 600);
    },
    
    /**
     * 全部盛りエフェクトを実行
     * @param {Event} e - クリックイベント
     * @param {Object} options - オプション
     */
    trigger(e, options = {}) {
        const {
            hearts = true,
            sparkles = true,
            ripple = true,
            bounce = true,
            heartCount = 8,
            sparkleCount = 12
        } = options;
        
        const x = e.clientX || e.touches?.[0]?.clientX || 0;
        const y = e.clientY || e.touches?.[0]?.clientY || 0;
        
        // ハートバースト
        if (hearts) {
            this.createHeartBurst(x, y, heartCount);
        }
        
        // キラキラバースト
        if (sparkles) {
            this.createSparkleBurst(x, y, sparkleCount);
        }
        
        // リップル効果
        if (ripple && e.currentTarget) {
            const rect = e.currentTarget.getBoundingClientRect();
            const rippleX = x - rect.left;
            const rippleY = y - rect.top;
            this.createRipple(e.currentTarget, rippleX, rippleY);
        }
        
        // バウンスアニメーション
        if (bounce && e.currentTarget) {
            e.currentTarget.classList.add('btn-bounce');
            setTimeout(() => {
                e.currentTarget.classList.remove('btn-bounce');
            }, 500);
        }
    },
    
    /**
     * 要素にタップアニメーションを追加
     * @param {string} selector - CSSセレクター
     * @param {Object} options - オプション
     */
    attachTo(selector, options = {}) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.addEventListener('click', (e) => this.trigger(e, options));
            el.addEventListener('touchstart', (e) => {
                // タッチ開始時にもエフェクト（即時反応）
                this.trigger(e, { ...options, ripple: false });
            }, { passive: true });
        });
    }
};

/**
 * 連絡先情報
 * この情報を元にvCardファイルを生成します
 */
const contactInfo = {
    firstName: '愛花',
    lastName: '山本',
    firstNameEN: 'Aika',
    lastNameEN: 'Yamamoto',
    title: 'Cast at Club Venus',
    company: 'Club Venus',
    email: 'aika@club-venus.example',
    phone: '', // Hidden per requirements
    url: 'https://line.me/ti/p/demo-aika',
    location: '六本木',
    note: '六本木Club Venusの愛花です💕 楽しい時間を一緒に過ごしましょう！LINEお待ちしてます✨'
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
function downloadVCard(vcardData, filename = 'aika-club-venus.vcf') {
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
        showFeedback('連絡先を保存したよ💕', 'success');
    } catch (error) {
        console.error('Error generating vCard:', error);
        showFeedback('エラーが発生しちゃった💦 もう一度試してね。', 'error');
    }
}

/**
 * ============================================
 * ブックマークガイドモーダル機能
 * iPhone/Android向けの保存方法を表示
 * ============================================
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
 * ============================================
 * アバターモーダル機能
 * 「アイカのアバター」ボタンで画像を表示
 * ============================================
 */
function openVideoModal() {
    const modal = document.getElementById('video-modal');
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        console.log('Showing Avatar Video Modal');
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
 * ============================================
 * アプリケーション初期化
 * DOMContentLoaded時に実行される
 * ============================================
 */
function init() {
    // ============================================
    // オープニングアニメーション初期化
    // ============================================
    OpeningAnimation.init();
    
    // ============================================
    // タップアニメーションを各要素に適用
    // ※ 遷移するボタン（LINE・保存・Instagram）は外す
    // ============================================
    
    // アバターボタン（全部盛り・派手め）
    TapAnimation.attachTo('#avatar-trigger-btn', {
        hearts: true,
        sparkles: true,
        ripple: true,
        bounce: true,
        heartCount: 12,
        sparkleCount: 16
    });
    
    // ギャラリー画像（控えめ）
    TapAnimation.attachTo('.swiper-slide', {
        hearts: true,
        sparkles: true,
        ripple: false,
        bounce: true,
        heartCount: 6,
        sparkleCount: 8
    });
    
    // サービスカード（キラキラのみ）
    TapAnimation.attachTo('.cute-card', {
        hearts: false,
        sparkles: true,
        ripple: true,
        bounce: true,
        heartCount: 0,
        sparkleCount: 8
    });
    
    // インフォカード
    TapAnimation.attachTo('.info-cute-card', {
        hearts: false,
        sparkles: true,
        ripple: false,
        bounce: false,
        heartCount: 0,
        sparkleCount: 6
    });
    
    // ※ LINE・保存・Instagramボタンは遷移するのでエフェクト無し
    
    // ============================================
    // 既存の機能初期化
    // ============================================
    
    // Add vCard download handler (legacy support if button id exists)
    const vcardBtn = document.getElementById('vcard-btn');
    if (vcardBtn) {
        vcardBtn.addEventListener('click', handleVCardDownload);
    }
    
    // Also bind to the new "Save Contact" button
    const saveContactBtn = document.getElementById('save-contact-btn');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', handleVCardDownload);
    }

    const bookmarkBtn = document.getElementById('bookmark-btn');
    if (bookmarkBtn) {
        // Remove existing listeners to prevent duplication if init is called multiple times
        const newBtn = bookmarkBtn.cloneNode(true);
        bookmarkBtn.parentNode.replaceChild(newBtn, bookmarkBtn);
        newBtn.addEventListener('click', openBookmarkGuide);
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

    console.log('// NFC Landing Page initialized (Cute Theme) 💕');
    console.log('// Opening Animation: 5 seconds full version');
    console.log('// Tap Animations: Hearts + Bounce + Sparkles enabled');
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
        border-radius: 20px; /* Rounder */
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-size: 0.95rem;
        font-weight: 700;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 1000;
    }

    .feedback-message.show {
        transform: translateX(0);
    }

    .feedback-success {
        background: #FF9EAA; /* Pink */
        color: #fff;
    }

    .feedback-error {
        background: #FFB74D; /* Orange */
        color: #fff;
    }

    @media (max-width: 768px) {
        .feedback-message {
            left: 20px;
            right: 20px;
            transform: translateY(-100px);
            text-align: center;
        }

        .feedback-message.show {
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
