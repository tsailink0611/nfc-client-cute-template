# 🎭 キャバ嬢自己紹介サイト作成プロンプト（完全版）

このプロンプトを新しいチャットにコピーして使用してください。

---

## 📝 プロジェクト概要

NFCカードに紐づく、キャバ嬢の自己紹介サイトを作成してください。
以下の仕様で、デザイン・機能・デプロイまで完全に実装してください。

---

## 🎯 必須要件

### 1️⃣ **GitHub管理（最重要）**

- **GitHubアカウント**: `tsailink0611`
- **リポジトリ名**: `nfc-client-[名前]-[店舗名]`（例: `nfc-client-reina-club-diamond`）
- **ブランチ**: `main`
- **作業ディレクトリ**: `/home/user/webapp/nfc-client-[名前]-[店舗名]`

**手順:**
1. 新規ディレクトリ作成
2. Git初期化: `git init`
3. GitHub認証設定（既存の`tsailink0611`アカウント使用）
4. 新規リポジトリ作成: `gh repo create tsailink0611/nfc-client-[名前]-[店舗名] --private --source=. --remote=origin`
5. 全てのコミットをmainブランチにpush

---

### 2️⃣ **Vercelデプロイ（最重要）**

**デプロイ方法:**

#### Option A: Vercel Dashboard（推奨）
1. https://vercel.com にアクセス
2. 「Add New Project」
3. GitHubから `nfc-client-[名前]-[店舗名]` をImport
4. 設定:
   - Framework Preset: `Other`
   - Build Command: (空欄)
   - Output Directory: `./`
   - Root Directory: `./`
5. 「Deploy」をクリック

#### Option B: ワンクリックデプロイ
- デプロイボタンURL: `https://vercel.com/new/clone?repository-url=https://github.com/tsailink0611/nfc-client-[名前]-[店舗名]`

**重要ポイント:**
- Vercelアカウントは既存の`tsailink0611`のGitHub連携アカウントを使用
- デプロイ後のURL（例: `https://nfc-client-[名前]-[店舗名].vercel.app`）をユーザーに報告
- GitHub pushで自動再デプロイされる

---

### 3️⃣ **サイト構成（完全版）**

#### 📋 基本情報（ユーザーからヒアリング）

以下の情報を必ずユーザーに確認してください:

```
1. 名前（日本語）: 例）麗奈
2. 名前（英語）: 例）Reina
3. 店舗名: 例）Club Diamond
4. 勤務地: 例）銀座
5. メールアドレス: 例）reina@club-diamond.example
6. LINE URL: 例）https://line.me/ti/p/xxxxx
7. サービス内容（3〜4個）:
   - 例）店内指名
   - 例）同伴・アフター
   - 例）プライベート相談
8. 特徴・アピールポイント（3〜4個）:
   - 例）エレガント
   - 例）おもてなし上手
   - 例）会話が楽しい
9. デザインの雰囲気:
   - 色: 例）ゴールド、ピンク、シルバー
   - フォント: 明朝体推奨
   - 雰囲気: 高級感、可愛らしさ、エレガント
```

---

#### 🎨 デザイン要件

**全体デザイン:**
- カラーパレット: ゴールド、アイボリー、ピンクアクセント
- フォント: `Noto Serif JP`（明朝体）
- 背景: グラデーション + 波線アニメーション
- エフェクト: キラキラ、浮遊アニメーション、3Dホバー

**コンセプト:**
- 高級感 + 可愛らしさ
- キャバ嬢の魅力的な雰囲気
- 安っぽくない、上品なデザイン

---

#### 📄 ページ構成（セクション）

##### 1. **ヘッダーセクション**
- 店舗バッジ: `✨ [店舗名] ✨`
- ヒーロー画像: AI生成（全身、ドレス姿、雑誌表紙風）
- 名前表示: 日本語 + 英語
- サブタイトル: 例）「銀座で一番エレガントなおもてなし」
- タグライン: 📍 勤務地 • キャッチコピー

**ヒーロー画像生成プロンプト例:**
```
Glamorous Japanese cabaret hostess promotional photo. Beautiful elegant woman in her mid-20s wearing [ドレスの色と種類]. [ポーズの指定]. Luxurious nightclub background with bokeh lights. Magazine cover quality photography, professional studio lighting, elegant and alluring atmosphere. High-end cabaret club promotional style.
```

---

##### 2. **アバター自己紹介セクション**
- タイトル: 「[名前]からのご挨拶」
- 説明文: 「いつもありがとうございます / 私のアバターが自己紹介します」
- ボタン: 「アバターで自己紹介を見る」（🎭アイコン）
- クリックでモーダル表示

**アバター画像:**
- やや斜め向き（HeyGen/D-ID対応）
- 上半身ポートレート
- エレガントなドレス
- 自然な笑顔

**アバター画像生成プロンプト例:**
```
Professional portrait of elegant Japanese cabaret hostess woman in her mid-20s, slightly angled towards camera (not perfectly frontal), natural standing pose suitable for AI avatar video generation. Wearing elegant [ドレスの色] dress. Upper body shot, neutral luxurious background. Natural expression with welcoming smile, arms relaxed at sides. Perfect for HeyGen or D-ID video generation. Studio lighting, high quality portrait photography, 85mm lens, shallow depth of field.
```

---

##### 3. **サービスメニューセクション**
- タイトル: 「✨ ご提供メニュー ✨」
- カード形式（2〜4個）
- 各カード:
  - アイコン（絵文字）
  - タイトル
  - 説明文

**例:**
```
🥂 店内指名
   VIPルームで特別な時間を

🍷 同伴・アフター
   お食事やバーでご一緒に

💬 プライベート相談
   LINEで24時間対応可能
```

---

##### 4. **フォトギャラリー（スライドショー）**
- **5枚のAI生成画像**
  - バリエーション: ドレスの色、ポーズ、雰囲気
  - 参考: ピンク、ゴールド、シルバー、ホワイト、クローズアップ

**スライドショー機能:**
- ✅ Swiper.jsを使用
- ✅ ゆっくり自動スクロール（8秒/枚）
- ✅ 無限ループ
- ✅ 両サイドの画像が少し見える（カルーセル風）
- ✅ スワイプ操作対応
- ✅ 画像クリックで拡大（Lightbox）
- ❌ 矢印ボタンなし

**画像生成プロンプト例（5パターン）:**
```
1. ピンクドレス - エレガントポーズ
2. ゴールドドレス - シャンパングラス持つ
3. シルバードレス - ソファに座る
4. ホワイトドレス - 振り返りポーズ
5. クローズアップ - 優しい笑顔
```

---

##### 5. **Instagramセクション**
- タイトル: 「📸 [名前]のInstagram」
- サブタイトル: 「普段の様子はこちらでチェック💕」
- プレースホルダー:
  - アイコン: 📷
  - テキスト: 「Instagram投稿がここに表示されます」
  - 設定方法の説明
- リンクボタン: 「Instagramで見る」

**実装:**
```html
<div class="instagram-embed-container">
    <!-- お客様のInstagram埋め込みコードをここに -->
    <div class="instagram-placeholder">
        <div class="placeholder-icon">📷</div>
        <p class="placeholder-text">Instagram投稿がここに表示されます</p>
        <p class="placeholder-note">設定方法: Instagram投稿 → 「...」→「埋め込み」→ コードをここに貼り付け</p>
    </div>
</div>
```

---

##### 6. **ブログセクション（Notion連携）**
- タイトル: 「✨ [名前]の日記（お仕事専用）」
- サブタイトル: 「お店でのできごとやプライベートな想いを綴っています」
- プレースホルダー:
  - アイコン: 📝
  - テキスト: 「ブログ記事がここに表示されます」
  - Notion設定手順:
    1. Notionアプリで記事を書く
    2. 「共有」→「Webで公開」
    3. URLを送る

**実装:**
```html
<div class="notion-embed-container">
    <!-- お客様のNotion埋め込みをここに -->
    <div class="notion-placeholder">
        <div class="placeholder-icon">📝</div>
        <p class="placeholder-text">ブログ記事がここに表示されます</p>
        <div class="notion-steps">
            <p class="steps-title">📱 Notionで簡単更新！</p>
            <ol class="steps-list">
                <li>Notionアプリで記事を書く</li>
                <li>「共有」→「Webで公開」</li>
                <li>URLを送る</li>
            </ol>
        </div>
    </div>
</div>
```

---

##### 7. **クイックインフォ**
- 3つのカード:
  - 🏢 勤務地 + 店舗名
  - 💬 LINE相談24H
  - 🌟 初回歓迎

---

##### 8. **CTAボタン**
- **「名刺代わりに保存」ボタン**
  - クリックでブックマークガイドモーダル表示
  - iPhone/Android両対応の説明

- **「[名前]とLINEで話す」ボタン**
  - LINE URLへのリンク
  - target="_blank"

---

##### 9. **フッター**
- コード風表示: `// Contact: [メールアドレス]`
- コピーライト: `© 2025 [名前] - [店舗名]. Built with AI.`

---

#### 🎭 モーダル実装

##### 1. **アバター動画モーダル**
```html
<div id="video-modal" class="video-modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <button class="modal-close" aria-label="閉じる">
            <span class="close-icon">✕</span>
            <span class="close-text">ESC</span>
        </button>
        <div class="modal-video-container">
            <img id="modal-image" class="modal-video" src="[アバター画像]" alt="[名前]のアバター画像">
            <div class="modal-caption">
                <span class="code-comment">// [名前]'s Avatar - HeyGen/D-ID動画を準備中</span>
            </div>
        </div>
    </div>
</div>
```

##### 2. **Lightbox（画像拡大）モーダル**
```html
<div id="lightbox-modal" class="lightbox-modal">
    <div class="modal-overlay"></div>
    <div class="lightbox-content">
        <button class="lightbox-close" aria-label="閉じる">
            <span class="close-icon">✕</span>
        </button>
        <img id="lightbox-image" src="" alt="" class="lightbox-image">
        <button class="lightbox-arrow lightbox-prev" aria-label="前の画像">‹</button>
        <button class="lightbox-arrow lightbox-next" aria-label="次の画像">›</button>
    </div>
</div>
```

##### 3. **ブックマークガイドモーダル**
```html
<div id="bookmark-modal" class="bookmark-modal">
    <div class="modal-overlay"></div>
    <div class="bookmark-modal-content">
        <button class="bookmark-modal-close" aria-label="閉じる">✕</button>
        <div class="bookmark-guide">
            <!-- iPhone手順 -->
            <div class="guide-section">
                <h3>📱 iPhoneの方</h3>
                <ol>
                    <li>画面下の共有ボタンをタップ（⬆️ 四角に↑）</li>
                    <li>「ブックマークに追加」を選ぶ（⭐）</li>
                </ol>
            </div>
            <!-- Android手順 -->
            <div class="guide-section">
                <h3>📱 Androidの方</h3>
                <ol>
                    <li>画面右上のメニューをタップ（⋮ 3つの点）</li>
                    <li>「☆」マークをタップ</li>
                </ol>
            </div>
        </div>
    </div>
</div>
```

---

### 4️⃣ **技術スタック**

#### フロントエンド
- HTML5
- CSS3（カスタムプロパティ使用）
- Vanilla JavaScript
- Swiper.js v11（CDN）

#### ライブラリ・CDN
```html
<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

#### ファイル構成
```
nfc-client-[名前]-[店舗名]/
├── index.html
├── style.css
├── swiper-custom.css
├── script.js
├── gallery-swiper.js
├── vercel.json
├── favicon.svg
├── README.md
├── DEPLOY.md
├── [名前]-hero-final.jpg (ヒーロー画像)
├── [名前]-avatar-final.jpg (アバター画像)
├── slide-1.jpg (スライドショー画像1)
├── slide-2.jpg (スライドショー画像2)
├── slide-3.jpg (スライドショー画像3)
├── slide-4.jpg (スライドショー画像4)
└── slide-5.jpg (スライドショー画像5)
```

---

### 5️⃣ **JavaScript機能**

#### vCard生成
```javascript
const contactInfo = {
    firstName: '[名前]',
    lastName: '',
    firstNameEN: '[英語名]',
    lastNameEN: '',
    title: 'Hostess at [店舗名]',
    company: '[店舗名]',
    email: '[メールアドレス]',
    phone: '',
    url: '[LINE URL]',
    location: '[勤務地]',
    note: '[店舗名]のホステス。エレガントなおもてなしと癒しの時間をご提供いたします。店内指名・同伴・アフター・LINE相談対応可能です。'
};
```

#### Swiper初期化
```javascript
const gallerySwiper = new Swiper('.gallery-swiper', {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 8000, // 8秒でゆっくりスライド
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    touchRatio: 1,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'slide',
});
```

---

### 6️⃣ **デプロイ設定（vercel.json）**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

### 7️⃣ **AI画像生成の詳細**

#### 使用モデル
- **nano-banana-pro** または **fal-ai/flux-2-pro**

#### アスペクト比
- **ヒーロー画像**: `2:3` (縦長)
- **アバター画像**: `2:3` (縦長)
- **スライドショー画像**: `2:3` (縦長)

#### 生成枚数
- ヒーロー画像: 1枚
- アバター画像: 1枚
- スライドショー画像: 5枚
- **合計: 7枚**

#### 画像保存
- ダウンロード後、適切なファイル名に変更
- 例: `reina-hero-final.jpg`, `reina-avatar-final.jpg`, `slide-1.jpg` ~ `slide-5.jpg`

---

### 8️⃣ **Git管理の流れ**

```bash
# 1. ディレクトリ作成
mkdir -p /home/user/webapp/nfc-client-[名前]-[店舗名]
cd /home/user/webapp/nfc-client-[名前]-[店舗名]

# 2. Git初期化
git init
git config user.name "tsailink0611"
git config user.email "genspark_dev@genspark.ai"

# 3. .gitignore作成
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore

# 4. 初回コミット
git add .
git commit -m "Initial commit: [名前] NFC site for [店舗名]"

# 5. GitHub認証（既存アカウント使用）
# GitHub認証は既に設定済みの tsailink0611 を使用

# 6. 新規リポジトリ作成
gh repo create tsailink0611/nfc-client-[名前]-[店舗名] --private --source=. --remote=origin

# 7. Push
git branch -M main
git push -u origin main

# 8. 以降の更新
git add .
git commit -m "feat: [変更内容]"
git push origin main
```

---

### 9️⃣ **README.md テンプレート**

```markdown
# [名前] - [店舗名] NFC名刺サイト

## 概要
[店舗名]のホステス、[名前]様のNFC名刺用ランディングページです。

## 技術スタック
- HTML5, CSS3, JavaScript
- Swiper.js v11
- Vercel (ホスティング)

## ローカル開発
\`\`\`bash
python3 -m http.server 8000
\`\`\`

## デプロイ
GitHubにpushすると、Vercelで自動デプロイされます。

## カスタマイズ
- 連絡先情報: `script.js` の `contactInfo`
- デザイン: `style.css` のCSS変数
- 画像: ファイルを差し替え

## 本番URL
https://nfc-client-[名前]-[店舗名].vercel.app
```

---

### 🔟 **DEPLOY.md テンプレート**

```markdown
# 🚀 Vercelデプロイ手順

## 方法1: Vercel Dashboard（推奨）

1. https://vercel.com にアクセス
2. 「Add New Project」をクリック
3. `nfc-client-[名前]-[店舗名]` をImport
4. 設定はそのまま「Deploy」

## 方法2: ワンクリックデプロイ

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tsailink0611/nfc-client-[名前]-[店舗名])

## デプロイ後
- URL: `https://nfc-client-[名前]-[店舗名].vercel.app`
- 自動デプロイ: mainブランチへのpushで自動更新
```

---

## ✅ 実行チェックリスト

作業を進める際、以下の順序で確認してください:

### Phase 1: 情報収集
- [ ] 名前（日本語・英語）
- [ ] 店舗名
- [ ] 勤務地
- [ ] メールアドレス
- [ ] LINE URL
- [ ] サービス内容（3〜4個）
- [ ] 特徴（3〜4個）
- [ ] デザイン希望（色、雰囲気）

### Phase 2: プロジェクトセットアップ
- [ ] ディレクトリ作成
- [ ] Git初期化
- [ ] GitHub認証確認
- [ ] .gitignore作成
- [ ] 基本ファイル作成（HTML, CSS, JS）

### Phase 3: 画像生成
- [ ] ヒーロー画像（1枚）
- [ ] アバター画像（1枚）
- [ ] スライドショー画像（5枚）
- [ ] 画像ダウンロード＆ファイル名変更

### Phase 4: コンテンツ実装
- [ ] HTMLマークアップ
- [ ] CSSスタイリング（ゴールド系）
- [ ] Swiperカルーセル実装
- [ ] Lightbox実装
- [ ] モーダル実装（アバター、ブックマーク）
- [ ] vCard機能実装

### Phase 5: Git管理
- [ ] 初回コミット
- [ ] GitHub新規リポジトリ作成
- [ ] Push to main

### Phase 6: Vercelデプロイ
- [ ] Vercel Dashboard でImport
- [ ] デプロイ実行
- [ ] URLを確認＆ユーザーに報告

### Phase 7: 動作確認
- [ ] スライドショーの自動スクロール
- [ ] スワイプ操作
- [ ] 画像クリックで拡大
- [ ] ブックマークガイド
- [ ] LINEリンク
- [ ] レスポンシブ確認（スマホ）

### Phase 8: ドキュメント
- [ ] README.md作成
- [ ] DEPLOY.md作成
- [ ] 最終コミット＆プッシュ

---

## 🎯 最終成果物

以下をユーザーに提供してください:

1. **GitHubリポジトリURL**
   - `https://github.com/tsailink0611/nfc-client-[名前]-[店舗名]`

2. **Vercel本番URL**
   - `https://nfc-client-[名前]-[店舗名].vercel.app`

3. **ローカルプレビューURL**
   - Sandbox環境のプレビューURL

4. **NFCカードへの書き込み用URL**
   - Vercel本番URLを使用

5. **更新方法の説明**
   - GitHubにpushすると自動更新
   - Instagram/Notionの埋め込み方法

---

## 📌 重要な注意点

### GitHub管理
- ✅ 必ず `tsailink0611` アカウントを使用
- ✅ リポジトリは **プライベート** に設定
- ✅ 全ての変更を `main` ブランチにコミット
- ✅ コミットメッセージは英語で明確に

### Vercel デプロイ
- ✅ **既存のVercelアカウント**（GitHub連携済み）を使用
- ✅ 新しいアカウントは作成しない
- ✅ Framework Preset: `Other`
- ✅ Build Command: 空欄
- ✅ 複数プロジェクトは独立して管理される

### デザイン
- ✅ 安っぽくならないよう、高級感を重視
- ✅ ゴールド＋アイボリー基調
- ✅ 明朝体フォント（Noto Serif JP）
- ✅ アニメーションは滑らか

### 画像
- ✅ AI生成は必ず `nano-banana-pro` または `fal-ai/flux-2-pro`
- ✅ プロンプトは英語で詳細に
- ✅ 顔の一貫性を保つ（参考画像を活用）
- ✅ ドレスの色は多様に

### 機能
- ✅ スライドショーは **Swiper.js** 必須
- ✅ 自動スクロール: 8秒/枚
- ✅ スワイプ操作必須
- ✅ 画像クリックで拡大
- ✅ ブックマークガイド（iPhone/Android両対応）

---

## 🚀 実行プロンプト例

新しいチャットで以下のように指示してください:

```
NFCカードに紐づくキャバ嬢の自己紹介サイトを作成してください。

【基本情報】
- 名前: [日本語名前]
- 英語名: [英語名前]
- 店舗名: [店舗名]
- 勤務地: [勤務地]
- メールアドレス: [メール]
- LINE URL: [LINE URL]

【サービス内容】
1. [サービス1]
2. [サービス2]
3. [サービス3]

【デザイン】
- 色: [ゴールド/ピンク/シルバーなど]
- 雰囲気: [高級感/可愛い/エレガントなど]

【技術要件】
- GitHubアカウント: tsailink0611
- リポジトリ名: nfc-client-[名前]-[店舗名]
- Vercelデプロイ必須
- スライドショー（Swiper.js）実装
- 画像7枚AI生成（ヒーロー1、アバター1、スライド5）

完全なテンプレートプロンプトに従って、デプロイまで全て完了させてください。
```

---

## 📞 トラブルシューティング

### GitHub認証エラー
- 既存の認証を確認: `gh auth status`
- 再認証: `gh auth login`

### Vercelデプロイエラー
- リポジトリ権限を確認
- Framework Presetを「Other」に変更
- Build Commandを空欄に

### スライドショーが動かない
- Swiper.js CDNの読み込みを確認
- `gallery-swiper.js` の読み込み順序を確認
- コンソールエラーをチェック

---

## 🎓 参考リポジトリ

このテンプレートの元となったプロジェクト:
- リポジトリ: `tsailink0611/nfc-client-takahashi-misaki`
- 本番URL: https://nfc-client-takahashi-misaki.vercel.app （存在する場合）
- 参考: 麗奈 - Club Diamond 銀座

---

## ✨ 完成イメージ

作成されるサイトは以下のような構成になります:

1. エレガントなヒーロー画像（全身ドレス姿）
2. アバター自己紹介ボタン
3. サービスメニューカード
4. 5枚の写真がゆっくり回るスライドショー
5. Instagram・ブログセクション
6. LINEボタン・ブックマーク保存ボタン
7. 高級感のあるゴールド＆明朝体デザイン
8. 完全レスポンシブ対応

---

**このプロンプトを新しいチャットにコピーして使用してください！**
