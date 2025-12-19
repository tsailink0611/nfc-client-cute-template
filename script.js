/**
 * ============================================
 * NFC Landing Page - JavaScript (Cute Version)
 * 
 * 機能:
 * - vCard生成とダウンロード
 * - モーダル表示（アバター、ライトボックス、ブックマーク案内）
 * - スムーススクロール
 * - フィードバックメッセージ表示
 * ============================================
 */

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
