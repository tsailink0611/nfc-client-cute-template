# キャバ嬢NFC名刺サイト - 完全プロジェクトテンプレート

## 📋 概要
このプロンプトを使えば、別のキャバ嬢向けNFC名刺サイトを**完全に再現**できます。今回の「麗奈（Reina）- Club Diamond」プロジェクトを基にした、包括的な指示書です。

---

## 🎯 プロジェクトゴール

銀座のキャバクラで働くホステスの**NFC名刺用ランディングページ**を作成する。  
ターゲット：お客様がNFCカード（またはQRコード）をスマートフォンでタップして、ホステスの自己紹介、SNS、連絡先、ブログなどを一括表示するサイト。

**重要な要件：**
- ✅ エレガントで高級感のあるデザイン
- ✅ ヒーロー画像（全身写真、黒or華やかドレス）
- ✅ アバター自己紹介ボタン（HeyGen/D-ID用画像）
- ✅ 自動スライドするフォトギャラリー（5枚）
- ✅ LINE連絡、ブックマーク保存、Instagramリンク
- ✅ Notion日記統合
- ✅ **GitHubリポジトリ管理**
- ✅ **Vercel自動デプロイ**（最重要）

---

## 🚀 プロジェクト実行手順

### **STEP 1: プロジェクトのセットアップ**

#### 1-1. 作業ディレクトリの作成
```bash
cd /home/user/webapp
mkdir nfc-client-[お客様の名前のローマ字] # 例: nfc-client-yamamoto-aika
cd nfc-client-[お客様の名前のローマ字]
pwd  # 確認
```

#### 1-2. 基本情報の決定
以下の情報を確認してください：
- **お客様の名前（日本語）**: 例: 山本愛花
- **お客様の名前（ローマ字）**: 例: Aika Yamamoto
- **お店の名前**: 例: Club Diamond
- **場所**: 例: 銀座
- **LINE URL**: 例: `https://line.me/ti/p/[お客様のLINE ID]`
- **Instagram URL**: 例: `https://instagram.com/aika_club_diamond`
- **メールアドレス**: 例: `aika@club-diamond.example`

---

### **STEP 2: GitHub リポジトリの作成**

#### 2-1. GitHubアカウント確認
- **GitHubユーザー名**: `tsailink0611` （お客様の既存GitHubアカウント）
- 既存リポジトリがある場合は、**新しいリポジトリを作成**

#### 2-2. Gitリポジトリの初期化
```bash
cd /home/user/webapp/nfc-client-[お客様の名前]
git init
git config user.name "tsailink0611"  # お客様のGitHub名
git config user.email "[お客様のメール]"
```

#### 2-3. GitHubリポジトリを作成（GitHub CLIまたは手動）
**GitHub CLI（推奨）:**
```bash
# GitHub認証（初回のみ）
gh auth login

# 新しいリポジトリを作成（public）
gh repo create nfc-client-[お客様の名前] --public --source=. --remote=origin --push
```

**手動作成の場合:**
1. https://github.com/new にアクセス
2. リポジトリ名: `nfc-client-[お客様の名前]`
3. Public、READMEなし、.gitignoreなしで作成
4. ローカルと接続:
```bash
git remote add origin https://github.com/tsailink0611/nfc-client-[お客様の名前].git
```

---

### **STEP 3: 画像生成（5+2枚）**

#### 3-1. ヒーロー画像（Hero Image）
**目的:** サイトトップの全身プロモーション写真  
**プロンプト例:**
```
Glamorous Japanese cabaret hostess full-body promotional photo. 
Beautiful elegant woman in her mid-20s wearing [黒いレースペプラムミニドレス / 華やかなカクテルドレス]. 
Standing pose [立ちポーズの説明]. 
Use the facial features from the reference image. 
Luxurious nightclub background with soft bokeh lights. 
Magazine cover quality photography.
```

**保存ファイル名:** `[名前]-hero-final.jpg` （例: `aika-hero-final.jpg`）

#### 3-2. アバター画像（Avatar Image）
**目的:** HeyGen/D-ID動画生成用の上半身画像  
**プロンプト例:**
```
Professional portrait of elegant Japanese cabaret hostess woman in her mid-20s, 
slightly angled towards camera, natural standing pose suitable for AI avatar video generation. 
Wearing [白いエレガントドレス / シルバードレス]. 
Use the facial features from the reference image. 
Upper body shot, neutral luxurious background with soft lighting. 
Natural expression with welcoming smile. 
Perfect for HeyGen or D-ID video generation. 
Studio lighting, high quality portrait photography.
```

**保存ファイル名:** `[名前]-avatar-final.jpg` （例: `aika-avatar-final.jpg`）

#### 3-3. フォトギャラリー（Slideshow）用画像 5枚
以下のバリエーションで5枚生成：

**1枚目: ピンク/パステルドレス**
```
Glamorous Japanese cabaret hostess promotional photo. 
Beautiful elegant woman in her mid-20s wearing a sophisticated pink pastel cocktail dress. 
Graceful standing pose with one hand on hip, confident smile. 
Luxurious nightclub interior background. Magazine quality photography.
```
**ファイル名:** `slide-1.jpg`

**2枚目: ゴールド/シャンパンドレス**
```
Holding a champagne glass elegantly, sophisticated pose. 
Champagne gold elegant evening dress. 
Luxurious VIP room background with golden ambient lighting.
```
**ファイル名:** `slide-2.jpg`

**3枚目: シルバー/ラベンダードレス**
```
Sitting elegantly on a luxury sofa, legs crossed gracefully. 
Silver or lavender elegant cocktail dress. 
Luxurious lounge background.
```
**ファイル名:** `slide-3.jpg`

**4枚目: ホワイト/クリームドレス**
```
Looking back over shoulder pose, elegant and mysterious. 
Pearl white or cream elegant dress with back details. 
Sparkling background lights.
```
**ファイル名:** `slide-4.jpg`

**5枚目: クローズアップポートレート**
```
Upper body portrait, gentle smile with hand near face, intimate expression. 
Rose pink or coral elegant dress. 
Soft bokeh background with warm golden lights.
```
**ファイル名:** `slide-5.jpg`

---

### **STEP 4: HTML作成（index.html）**

完全なHTMLテンプレートをコピーして、以下を**必ず置き換え**：

**置き換え必須項目：**
- `麗奈` → `[お客様の名前]`
- `Reina` → `[お客様の名前ローマ字]`
- `Club Diamond` → `[お店の名前]`
- `銀座` → `[場所]`
- `reina-hero-final.jpg` → `[お客様の名前]-hero-final.jpg`
- `reina-avatar-final.jpg` → `[お客様の名前]-avatar-final.jpg`
- `https://line.me/ti/p/demo-reina` → `[お客様のLINE URL]`
- `reina@club-diamond.example` → `[お客様のメール]`
- `https://instagram.com/misaki_example` → `[お客様のInstagram]`

**HTMLファイルパス:**
```bash
/home/user/webapp/nfc-client-[名前]/index.html
```

**完全なHTMLテンプレートは後述の付録に記載**

---

### **STEP 5: CSS作成（style.css + swiper-custom.css）**

#### 5-1. メインCSS（style.css）
**ファイル内容:** 後述の付録参照

**重要なデザイン要素:**
- ゴールド&アイボリーのグラデーション背景
- スパークルパーティクルエフェクト
- 3Dホバーエフェクト（カード）
- フローティングハートアニメーション
- Wave背景アニメーション
- Noto Serif JPフォント
- 完全レスポンシブデザイン

#### 5-2. SwiperカスタムCSS（swiper-custom.css）
スライドショー専用のスタイル。後述の付録参照。

---

### **STEP 6: JavaScript作成（2ファイル）**

#### 6-1. メインスクリプト（script.js）
**機能:**
- vCard連絡先ダウンロード
- ブックマークガイドモーダル
- アバター動画モーダル（HeyGen/D-ID用）
- スムーススクロール

**置き換え必須項目:**
```javascript
const contactInfo = {
    firstName: '[お客様の名前]',
    firstNameEN: '[ローマ字名]',
    company: '[お店の名前]',
    email: '[メールアドレス]',
    url: '[LINE URL]',
    location: '[場所]',
    note: '[お店の名前]のホステス。エレガントなおもてなしと癒しの時間をご提供いたします。'
};
```

#### 6-2. スライドショースクリプト（gallery-swiper.js）
**機能:**
- Swiper.js使用
- ゆっくり自動回転（8秒/枚）
- 両サイドの画像が見える
- スワイプ対応
- クリックで拡大（Lightbox）

**完全なスクリプトは後述の付録参照**

---

### **STEP 7: その他必須ファイル**

#### 7-1. favicon.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#FFD700"/>
  <text x="50" y="70" text-anchor="middle" font-size="60" fill="#1a1a1a">💎</text>
</svg>
```

#### 7-2. .gitignore
```
node_modules/
.DS_Store
.env
*.log
```

#### 7-3. package.json（Vercel用）
```json
{
  "name": "nfc-client-[お客様の名前]",
  "version": "1.0.0",
  "description": "[お店の名前]のホステス、[お客様の名前]様のNFC名刺用ランディングページ",
  "main": "index.html",
  "scripts": {
    "dev": "python3 -m http.server 8000",
    "start": "python3 -m http.server 8000"
  }
}
```

---

### **STEP 8: GitHubへのコミット＆プッシュ**

#### 8-1. 全ファイルをステージング
```bash
cd /home/user/webapp/nfc-client-[お客様の名前]
git add .
```

#### 8-2. 初回コミット
```bash
git commit -m "feat: initial setup - [お客様の名前] NFC landing page

- Add hero section with [ドレスの説明]
- Add avatar section for HeyGen/D-ID
- Add photo gallery slideshow (5 images)
- Add contact buttons (LINE, Bookmark)
- Add Instagram and Notion blog sections
- Setup responsive design with gold & elegant theme"
```

#### 8-3. GitHubにプッシュ
```bash
# 初回プッシュ
git branch -M main
git push -u origin main

# 以降の更新
git push origin main
```

---

### **STEP 9: Vercelデプロイ（最重要）**

#### 9-1. Vercelアカウント確認
- **アカウント:** 既存のVercelアカウント（GitHub連携済み）
- **重要:** 既存プロジェクトは影響を受けません（完全に独立）

#### 9-2. デプロイ方法（3つの選択肢）

**方法A: ワンクリックデプロイ（最も簡単・推奨）**
1. 以下のURLを生成してお客様に渡す:
```
https://vercel.com/new/clone?repository-url=https://github.com/tsailink0611/nfc-client-[お客様の名前]
```
2. お客様がリンクをクリック
3. Vercelにログイン（GitHub連携）
4. 「Deploy」ボタンをクリック
5. **完了！** → デプロイURL発行（例: `https://nfc-client-[名前].vercel.app`）

**方法B: Vercel Dashboard経由**
1. https://vercel.com/dashboard にアクセス
2. 「Add New...」→ 「Project」をクリック
3. 「Import Git Repository」で `nfc-client-[お客様の名前]` を検索
4. プロジェクトを選択
5. 設定確認（デフォルトでOK）:
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (空欄)
   - Output Directory: `./`
6. 「Deploy」をクリック
7. 2-3分待つ → デプロイURL発行

**方法C: Vercel CLI（ターミナル）**
```bash
cd /home/user/webapp/nfc-client-[お客様の名前]

# Vercel CLIインストール（初回のみ）
npm install vercel

# ログイン（初回のみ）
npx vercel login

# デプロイ
npx vercel --prod
```

#### 9-3. 自動デプロイ設定（重要）
デプロイ後、**以下の自動化が有効化されます：**
- ✅ `main`ブランチへのpushで自動デプロイ
- ✅ Pull Requestで自動プレビュー環境作成
- ✅ HTTPS証明書の自動取得/更新

**今後の更新手順:**
```bash
# コード修正後
git add .
git commit -m "update: [変更内容]"
git push origin main
# → 2-3分で自動デプロイ完了
```

#### 9-4. デプロイURL確認
デプロイ完了後、以下のURLが発行されます：
```
https://nfc-client-[お客様の名前].vercel.app
または
https://nfc-client-[お客様の名前]-tsailink0611.vercel.app
```

**このURLをNFCカードに書き込む**

---

### **STEP 10: カスタムドメイン設定（オプション）**

お客様専用ドメイン（例: `aika-club-diamond.com`）を使う場合：

1. Vercel Dashboard → プロジェクトを選択
2. 「Settings」→ 「Domains」
3. 「Add Domain」で希望のドメインを入力
4. DNS設定の指示に従う（Aレコード/CNAMEレコード追加）
5. 数分〜24時間でSSL証明書が自動発行される

---

## 📱 デプロイ後の確認事項

### ✅ 動作確認チェックリスト
- [ ] ヒーロー画像が正しく表示される
- [ ] アバター自己紹介ボタンが動作する
- [ ] フォトギャラリーが自動でゆっくりスライドする
- [ ] スワイプで画像が切り替わる
- [ ] 画像クリックで拡大表示される
- [ ] 「名刺代わりに保存」ボタンでブックマークガイドが表示される
- [ ] 「LINEで話す」ボタンでLINEが開く
- [ ] Instagram/Notionセクションが正しく表示される
- [ ] モバイルでレイアウトが崩れない

### 📱 NFC設定
1. NFCカード書き込みアプリをダウンロード（例: NFC Tools）
2. 「URL/URI」レコードを追加
3. VercelデプロイURLを入力
4. NFCカードに書き込む
5. スマホでタップテスト

---

## 🎨 デザインカスタマイズポイント

### 色の変更（style.css）
```css
:root {
    --color-gold: #FFD700;        /* ゴールド */
    --color-gold-light: #FFE55C;  /* ライトゴールド */
    --color-gold-dark: #B8860B;   /* ダークゴールド */
}
```

### お店のロゴ追加
```html
<div class="club-badge">
    <img src="club-logo.png" alt="Club Logo" style="height: 30px;">
    Club Diamond
</div>
```

---

## 🔄 今後の更新フロー

### シナリオ1: 画像を差し替えたい
```bash
cd /home/user/webapp/nfc-client-[名前]

# 新しい画像をダウンロード
curl -o aika-hero-new.jpg "[新しい画像URL]"

# index.htmlで画像パスを変更
# git commit & push
git add aika-hero-new.jpg index.html
git commit -m "update: hero image"
git push origin main
# → Vercel自動デプロイ
```

### シナリオ2: LINE URLを変更したい
1. `index.html`の該当箇所を編集:
```html
<a href="https://line.me/ti/p/[新しいLINE ID]" ...>
```
2. `script.js`のcontactInfoも更新:
```javascript
url: 'https://line.me/ti/p/[新しいLINE ID]',
```
3. Commit & Push
```bash
git add index.html script.js
git commit -m "update: LINE URL"
git push origin main
```

### シナリオ3: Instagram投稿を埋め込みたい
1. Instagramの投稿ページで「...」→「埋め込み」をクリック
2. コードをコピー
3. `index.html`の該当箇所に貼り付け:
```html
<div class="instagram-embed-container">
    <!-- ここに埋め込みコードを貼り付け -->
    <blockquote class="instagram-media" ...>...</blockquote>
</div>
```
4. Commit & Push

---

## 🛠️ トラブルシューティング

### Q1: Vercelデプロイで「Project already exists」エラー
**A:** プロジェクト名を変更してください。
```
nfc-client-[名前]-v2
nfc-client-[名前]-2024
```

### Q2: Vercelデプロイで「Repository not found」エラー
**A:** GitHub連携を確認:
1. Vercel Dashboard → Settings → Git
2. 「Configure GitHub App」で該当リポジトリへのアクセスを許可

### Q3: 画像が表示されない
**A:** ファイル名の大文字/小文字を確認:
```bash
# ファイル名を確認
ls -la *.jpg

# HTMLで正確に指定
<img src="aika-hero-final.jpg" ...>  # OK
<img src="Aika-Hero-Final.jpg" ...>  # NG（大文字小文字が違う）
```

### Q4: スライドショーが動かない
**A:** Swiper.jsの読み込みを確認:
```html
<!-- この順番を守る -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="gallery-swiper.js"></script>
```

---

## 📊 プロジェクト構造

```
nfc-client-[お客様の名前]/
├── index.html                 # メインHTML
├── style.css                  # メインCSS
├── swiper-custom.css          # スライドショー用CSS
├── script.js                  # メインJavaScript
├── gallery-swiper.js          # スライドショー用JS
├── favicon.svg                # ファビコン
├── [名前]-hero-final.jpg      # ヒーロー画像
├── [名前]-avatar-final.jpg    # アバター画像
├── slide-1.jpg                # ギャラリー画像1
├── slide-2.jpg                # ギャラリー画像2
├── slide-3.jpg                # ギャラリー画像3
├── slide-4.jpg                # ギャラリー画像4
├── slide-5.jpg                # ギャラリー画像5
├── package.json               # npm設定
├── .gitignore                 # Git除外設定
└── README.md                  # プロジェクト説明（オプション）
```

---

## 🎯 別プロジェクト開始時のチェックリスト

新しいキャバ嬢向けサイトを作成する際、このチェックリストを使ってください：

### 事前準備
- [ ] お客様の名前（日本語・ローマ字）を確認
- [ ] お店の名前を確認
- [ ] 場所（銀座、六本木など）を確認
- [ ] LINE URL、Instagram URL、メールアドレスを確認
- [ ] 参考画像（顔写真、ドレス写真など）を入手

### 画像生成
- [ ] ヒーロー画像（全身、華やかドレス）を生成
- [ ] アバター画像（上半身、HeyGen/D-ID用）を生成
- [ ] フォトギャラリー用画像5枚を生成（バリエーション）

### コーディング
- [ ] 作業ディレクトリ作成 `nfc-client-[名前]`
- [ ] `index.html`作成（置き換え必須項目を全て変更）
- [ ] `style.css`コピー
- [ ] `swiper-custom.css`コピー
- [ ] `script.js`作成（contactInfo置き換え）
- [ ] `gallery-swiper.js`コピー
- [ ] `favicon.svg`作成
- [ ] `package.json`作成
- [ ] `.gitignore`作成

### Git & GitHub
- [ ] `git init`実行
- [ ] GitHub新規リポジトリ作成 `nfc-client-[名前]`
- [ ] `git remote add origin`でリポジトリ接続
- [ ] 全ファイル`git add`
- [ ] `git commit`（詳細なメッセージ）
- [ ] `git push origin main`

### Vercel デプロイ
- [ ] Vercel Dashboard または ワンクリックデプロイリンク使用
- [ ] プロジェクト名設定 `nfc-client-[名前]`
- [ ] Framework Preset: `Other`確認
- [ ] 「Deploy」実行
- [ ] デプロイURL確認（例: `https://nfc-client-[名前].vercel.app`）
- [ ] 動作確認（チェックリスト全項目）

### NFC設定
- [ ] NFCカード書き込みアプリをインストール
- [ ] VercelデプロイURLをNFCカードに書き込む
- [ ] スマホでタップテスト

### 納品
- [ ] お客様にデプロイURLを共有
- [ ] NFCカードを渡す
- [ ] 更新方法を説明（Git push → Vercel自動デプロイ）

---

## 📝 重要な注意事項

### GitHubアカウントについて
- **お客様のGitHubアカウント（`tsailink0611`）を使用**
- 既存リポジトリには**一切影響しない**（完全に独立）
- リポジトリ名を必ず変更（`nfc-client-[名前]`形式）

### Vercelデプロイについて
- **既存のVercelプロジェクトには影響しない**
- 各プロジェクトは完全に独立
- 1つのVercelアカウントで複数プロジェクト管理可能
- 削除も簡単（他のプロジェクトに影響なし）

### 画像生成時の注意
- **顔の一貫性を保つ**ために、同じ参考画像を使用
- **ドレスのバリエーション**を付ける（ピンク、ゴールド、シルバー、ホワイト、クローズアップ）
- **高解像度（768x1152以上）**を推奨

### LINE URLの形式
```
https://line.me/ti/p/[LINE ID]    # 正しい
https://lin.ee/[短縮URL]           # これもOK
```

### コミットメッセージの書き方
```bash
# 良い例
git commit -m "feat: add photo gallery slideshow with 5 images"
git commit -m "update: change LINE URL to new account"
git commit -m "fix: hero image not displaying on mobile"

# 悪い例
git commit -m "update"
git commit -m "修正"
```

---

## 🎓 学習リソース

### Swiper.js（スライドショー）
- 公式ドキュメント: https://swiperjs.com/
- オプション変更: `gallery-swiper.js`の設定を調整

### Vercel
- 公式ドキュメント: https://vercel.com/docs
- GitHub連携: https://vercel.com/docs/git/vercel-for-github

### HeyGen/D-ID（AI動画生成）
- HeyGen: https://www.heygen.com/
- D-ID: https://www.d-id.com/
- アバター画像の要件: 正面やや斜め、上半身、1024x1024推奨

---

## 🚀 このプロンプトの使い方

### 新規プロジェクト開始時
```
Claude/Geminiに以下を指示:

「この PROJECT_TEMPLATE.md に従って、[お客様の名前]さんのNFC名刺サイトを作成してください。

お客様情報:
- 名前: [日本語名]
- ローマ字: [ローマ字名]
- お店: [お店の名前]
- 場所: [場所]
- LINE: [LINE URL]
- Instagram: [Instagram URL]
- メール: [メール]

特別な要望:
- [あれば記載]

このプロンプトのSTEP 1〜10を順番に実行し、Vercelデプロイまで完了してください。」
```

### 既存プロジェクトの更新時
```
「nfc-client-[名前]プロジェクトで以下を更新してください:
- [変更内容]

更新後、GitHubにコミット＆プッシュしてください。」
```

---

## ✅ 成功の定義

このテンプレートに従った結果、以下が達成されていれば**成功**です：

1. ✅ **GitHub**: リポジトリ作成済み（`https://github.com/tsailink0611/nfc-client-[名前]`）
2. ✅ **Vercel**: デプロイ完了（`https://nfc-client-[名前].vercel.app`）
3. ✅ **自動デプロイ**: `git push`で自動更新される
4. ✅ **デザイン**: エレガント、高級感、レスポンシブ
5. ✅ **機能**: ヒーロー画像、アバター、スライドショー、LINE、ブックマーク全て動作
6. ✅ **NFC**: スマホでタップしてサイトが開く

---

## 📞 サポート

このテンプレートに関する質問や問題があれば、以下を提供してください：
- プロジェクト名
- GitHubリポジトリURL
- VercelデプロイURL
- エラーメッセージ（あれば）
- スクリーンショット（あれば）

---

## 📄 ライセンス & クレジット

- **作成者**: AI Coding Assistant
- **ベースプロジェクト**: `nfc-client-takahashi-misaki` (Reina - Club Diamond)
- **使用技術**: HTML5, CSS3, JavaScript, Swiper.js, Vercel
- **デザイン**: Gold & Elegant Theme for Cabaret Hostess

---

**このテンプレートで、新しいキャバ嬢向けNFC名刺サイトを30分以内に完成させられます！**

---

## 📎 付録: 完全なコードテンプレート

以下、完全なコードを記載します。新規プロジェクトでそのままコピペして使用してください。

---

### 付録A: index.html（完全版）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[お客様の名前] - [お店の名前] [場所] | エレガントなおもてなしでお待ちしております">
    <title>[お客様の名前] { [お店の名前] } | [場所]のホステス</title>
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="stylesheet" href="style.css?v=20251103">
    <link rel="stylesheet" href="swiper-custom.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
</head>
<body>
    <!-- Wave Background -->
    <div class="wave-container">
        <svg class="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#FFD700;stop-opacity:0.3">
                        <animate attributeName="stop-color" values="#FFD700;#FFC371;#FFE55C;#FFD700" dur="4s" repeatCount="indefinite"></animate>
                    </stop>
                    <stop offset="50%" style="stop-color:#FFE55C;stop-opacity:0.5">
                        <animate attributeName="stop-color" values="#FFE55C;#FFD700;#FFC371;#FFE55C" dur="4s" repeatCount="indefinite"></animate>
                    </stop>
                    <stop offset="100%" style="stop-color:#FFC371;stop-opacity:0.3">
                        <animate attributeName="stop-color" values="#FFC371;#FFE55C;#FFD700;#FFC371" dur="4s" repeatCount="indefinite"></animate>
                    </stop>
                </linearGradient>
            </defs>
            <path d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z" class="wave-path"></path>
        </svg>
    </div>

    <!-- Main Container -->
    <main class="container">
        <!-- Header Section -->
        <header class="header">
            <div class="club-badge">✨ [お店の名前] ✨</div>
            <!-- Hero Image -->
            <div class="hero-image-container">
                <img src="[お客様の名前]-hero-final.jpg" alt="[お客様の名前]" class="hero-image">
            </div>
            <h1 class="name-elegant">
                [お客様の名前]
                <span class="name-english">[ローマ字名]</span>
            </h1>
            <div class="subtitle-elegant">[場所]で一番エレガントなおもてなし</div>
            <div class="tagline-elegant">
                <span class="location-icon">📍</span> [場所] [お店の名前]
                <span class="separator-dot">•</span>
                あなたの特別な時間をお約束
            </div>
        </header>

        <!-- Avatar Introduction Button Section -->
        <section class="video-trigger-section">
            <div class="video-intro">
                <div class="intro-accent">💕</div>
                <h2 class="video-title-elegant">
                    [お客様の名前]からのご挨拶
                </h2>
                <p class="video-description-elegant">
                    いつもありがとうございます<br>
                    私のアバターが自己紹介します
                </p>
            </div>
            <button id="avatar-trigger-btn" class="video-trigger-btn-elegant">
                <span class="play-icon-elegant">🎭</span>
                <span class="btn-text-elegant">アバターで自己紹介を見る</span>
            </button>
        </section>

        <!-- Services Section (Simplified) -->
        <section class="services">
            <h2 class="section-title-elegant">
                ✨ ご提供メニュー ✨
            </h2>
            <div class="service-cards-cute">
                <div class="cute-card">
                    <div class="cute-card-icon">🥂</div>
                    <h3 class="cute-card-title">店内指名</h3>
                    <p class="cute-card-desc">VIPルームで特別な時間を</p>
                </div>
                <div class="cute-card">
                    <div class="cute-card-icon">🍷</div>
                    <h3 class="cute-card-title">同伴・アフター</h3>
                    <p class="cute-card-desc">お食事やバーでご一緒に</p>
                </div>
            </div>
        </section>

        <!-- Photo Gallery Slideshow Section -->
        <section class="gallery-section">
            <h2 class="section-title-elegant">
                ✨ フォトギャラリー ✨
            </h2>
            <p class="section-subtitle">[お客様の名前]の魅力をもっと見る💕</p>
            
            <!-- Swiper Container -->
            <div class="swiper gallery-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="slide-1.jpg" alt="[お客様の名前] - ピンクドレス" class="slide-image">
                    </div>
                    <div class="swiper-slide">
                        <img src="slide-2.jpg" alt="[お客様の名前] - ゴールドドレス" class="slide-image">
                    </div>
                    <div class="swiper-slide">
                        <img src="slide-3.jpg" alt="[お客様の名前] - シルバードレス" class="slide-image">
                    </div>
                    <div class="swiper-slide">
                        <img src="slide-4.jpg" alt="[お客様の名前] - ホワイトドレス" class="slide-image">
                    </div>
                    <div class="swiper-slide">
                        <img src="slide-5.jpg" alt="[お客様の名前] - クローズアップ" class="slide-image">
                    </div>
                </div>
                <!-- Pagination Dots -->
                <div class="swiper-pagination"></div>
            </div>
        </section>

        <!-- Instagram Section -->
        <section class="instagram-section">
            <h2 class="section-title-elegant">
                📸 [お客様の名前]のInstagram
            </h2>
            <p class="section-subtitle">普段の様子はこちらでチェック💕</p>
            
            <div class="instagram-embed-container">
                <!-- お客様のInstagram埋め込みコードをここに -->
                <div class="instagram-placeholder">
                    <div class="placeholder-icon">📷</div>
                    <p class="placeholder-text">Instagram投稿がここに表示されます</p>
                    <p class="placeholder-note">設定方法: Instagram投稿 → 「...」→「埋め込み」→ コードをここに貼り付け</p>
                </div>
            </div>
            
            <a href="[Instagram URL]" target="_blank" class="instagram-link">
                <span class="link-icon">📱</span>
                Instagramで見る
            </a>
        </section>

        <!-- Blog Section (Notion) -->
        <section class="blog-section">
            <h2 class="section-title-elegant">
                ✨ [お客様の名前]の日記（お仕事専用）
            </h2>
            <p class="section-subtitle">お店でのできごとやプライベートな想いを綴っています</p>
            
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
        </section>

        <!-- Quick Info -->
        <section class="quick-info">
            <div class="info-cards-cute">
                <div class="info-cute-card">
                    <div class="info-cute-icon">🏢</div>
                    <div class="info-cute-text">[場所] [お店の名前]</div>
                </div>
                <div class="info-cute-card">
                    <div class="info-cute-icon">💬</div>
                    <div class="info-cute-text">LINE相談24H</div>
                </div>
                <div class="info-cute-card">
                    <div class="info-cute-icon">🌟</div>
                    <div class="info-cute-text">初回歓迎</div>
                </div>
            </div>
        </section>

        <!-- CTA Buttons -->
        <section class="cta-section">
            <button id="bookmark-btn" class="btn btn-primary">
                <span class="btn-icon">📱</span>
                名刺代わりに保存
            </button>
            <a href="[LINE URL]" target="_blank" rel="noopener noreferrer" class="btn btn-line">
                <span class="btn-icon">💬</span>
                [お客様の名前]とLINEで話す
            </a>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="code-line">
                <span class="code-comment">// Contact: <a href="mailto:[メールアドレス]" class="email-link">[メールアドレス]</a></span>
            </div>
            <div class="footer-text">
                &copy; 2025 [お客様の名前] - [お店の名前]. Built with AI.
            </div>
        </footer>
    </main>

    <!-- Video Modal -->
    <div id="video-modal" class="video-modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="閉じる">
                <span class="close-icon">✕</span>
                <span class="close-text">ESC</span>
            </button>
            <div class="modal-video-container">
                <img id="modal-image" class="modal-video" src="[お客様の名前]-avatar-final.jpg" alt="[お客様の名前]のアバター画像" style="width: 100%; height: auto; border-radius: 8px;">
                <div class="modal-caption">
                    <span class="code-comment">// [お客様の名前]'s Avatar - HeyGen/D-ID動画を準備中</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Image Lightbox Modal -->
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

    <!-- Bookmark Guide Modal -->
    <div id="bookmark-modal" class="bookmark-modal">
        <div class="modal-overlay"></div>
        <div class="bookmark-modal-content">
            <button class="bookmark-modal-close" aria-label="閉じる">✕</button>
            <div class="bookmark-guide">
                <div class="guide-header">
                    <span class="guide-icon">📱</span>
                    <h2 class="guide-title">このページを保存する</h2>
                </div>

                <div class="guide-section">
                    <h3 class="guide-subtitle">
                        <span class="device-icon">📱</span>
                        iPhoneの方
                    </h3>
                    <ol class="guide-steps">
                        <li>
                            <span class="step-number">1</span>
                            <div class="step-content">
                                <strong>画面下の共有ボタン</strong>をタップ
                                <div class="step-icon">⬆️ (四角に↑)</div>
                            </div>
                        </li>
                        <li>
                            <span class="step-number">2</span>
                            <div class="step-content">
                                <strong>「ブックマークに追加」</strong>を選ぶ
                                <div class="step-icon">⭐</div>
                            </div>
                        </li>
                    </ol>
                </div>

                <div class="guide-divider"></div>

                <div class="guide-section">
                    <h3 class="guide-subtitle">
                        <span class="device-icon">📱</span>
                        Androidの方
                    </h3>
                    <ol class="guide-steps">
                        <li>
                            <span class="step-number">1</span>
                            <div class="step-content">
                                <strong>画面右上のメニュー</strong>をタップ
                                <div class="step-icon">⋮ (3つの点)</div>
                            </div>
                        </li>
                        <li>
                            <span class="step-number">2</span>
                            <div class="step-content">
                                <strong>「☆」マーク</strong>をタップ
                                <div class="step-icon">⭐</div>
                            </div>
                        </li>
                    </ol>
                </div>

                <button class="guide-close-btn">わかりました</button>
            </div>
        </div>
    </div>

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="gallery-swiper.js"></script>
    <script src="script.js?v=20251103"></script>
</body>
</html>
```

---

### 付録B: script.js（完全版）

```javascript
/**
 * NFC Landing Page - JavaScript
 * vCard generation and download functionality
 */

// Contact Information - **必ず置き換え**
const contactInfo = {
    firstName: '[お客様の名前]',
    lastName: '',
    firstNameEN: '[ローマ字名]',
    lastNameEN: '',
    title: 'Hostess at [お店の名前]',
    company: '[お店の名前]',
    email: '[メールアドレス]',
    phone: '', // Hidden per requirements
    url: '[LINE URL]',
    location: '[場所]',
    note: '[場所][お店の名前]のホステス。エレガントなおもてなしと癒しの時間をご提供いたします。店内指名・同伴・アフター・LINE相談対応可能です。'
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
function downloadVCard(vcardData, filename = '[お客様の名前]-[お店の名前].vcf') {
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
        console.log('Showing [お客様の名前]\'s avatar image - video coming soon!');
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
```

**注意:** style.css と swiper-custom.css, gallery-swiper.js は、現在のプロジェクトファイルからそのままコピーしてください（変更不要）。

---

**これで完全なプロジェクトテンプレートの完成です！別チャットで新規キャバ嬢サイトを作る際は、このファイルを参照してください。**
