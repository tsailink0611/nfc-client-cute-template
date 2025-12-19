# 🎀 Cute & Soft Theme - 詳細引き継ぎプロンプト

このドキュメントは、現在の **Cute & Soft Theme** テンプレートの完璧な状態を次のプロジェクトに引き継ぐための詳細ガイドです。

---

## 📋 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [現在の完璧な状態](#現在の完璧な状態)
3. [新規プロジェクト作成手順](#新規プロジェクト作成手順)
4. [カスタマイズガイド](#カスタマイズガイド)
5. [デプロイ手順](#デプロイ手順)
6. [トラブルシューティング](#トラブルシューティング)
7. [チェックリスト](#チェックリスト)

---

## 🎨 プロジェクト概要

### テーマ特性

**Cute & Soft Theme（キュート＆ソフトテーマ）**

- **対象年齢**: 20代前後
- **雰囲気**: 若々しい、可愛らしい、柔らかい
- **カラー**: ソフトピンク（#FF9EAA）を基調とした優しいグラデーション
- **フォント**: M PLUS Rounded 1c（丸ゴシック体）
- **デザイン特徴**:
  - 大きな角丸（border-radius: 30px）
  - ふんわりした影
  - 立体的なボタン
  - ガラスモーフィズム（半透明背景）

### リポジトリ情報

- **GitHub**: https://github.com/tsailink0611/nfc-client-cute-template
- **テンプレート名**: `nfc-client-cute-template`
- **ベースリポジトリ**: `nfc-client-takahashi-misaki`（Gold & Elegant Theme）

---

## ✅ 現在の完璧な状態

### 実装済み機能

#### 1. ヒーローセクション（Hero Section）
- ✅ 画面の75%を占める大型画像エリア
- ✅ 画像は中央揃え（`object-position: 50% 20%`）
- ✅ 下部にグラデーションオーバーレイ
- ✅ 白文字で名前・店舗名・キャッチコピー表示

#### 2. アバターセクション（Avatar Section）
- ✅ リッチなグラデーションボタン（ピンク系、立体感あり）
- ✅ ボタンテキスト: 「アイカのアバター」（アイコンなし）
- ✅ クリックでモーダル表示（指定された顔アップ画像）
- ✅ ホバー時に光るエフェクト

#### 3. サービスカード（Services Section）
- ✅ 2カラムのカードグリッド
- ✅ アイコン + タイトル + 説明文
- ✅ ホバー時に浮き上がるアニメーション

#### 4. ギャラリー（Photo Gallery）
- ✅ Swiper.js（Coverflowエフェクト）
- ✅ カード風の重なり表示
- ✅ 自動再生（タッチ操作後も継続）
- ✅ 左右スワイプ対応（双方向）
- ✅ カーソルが乗っても自動再生停止しない
- ✅ クリックで画像をライトボックス表示
- ✅ ライトボックス内で前後ナビゲーション

#### 5. Instagramセクション
- ✅ 完全中央揃え
- ✅ プレースホルダーカード表示
- ✅ Instagramグラデーションボタン

#### 6. ブログセクション（Notion連携）
- ✅ Notion埋め込み用プレースホルダー
- ✅ 更新方法の案内付き

#### 7. クイックインフォカード
- ✅ 3つの情報カード（店舗名、LINE対応、初心者歓迎）
- ✅ アイコン + テキスト
- ✅ 丸いピル型デザイン

#### 8. CTAボタン
- ✅ 「保存してね💕」→ ブックマーク案内モーダル表示
  - iPhone向け案内（共有ボタン → ブックマーク追加）
  - Android向け案内（メニュー → ☆マーク）
- ✅ 「LINEで話そ！」→ LINEリンク（緑色）
- ✅ 両方とも大きく丸いボタン、中央揃え

#### 9. フッター
- ✅ ピンク背景
- ✅ 波型SVG装飾
- ✅ アイコン（リボン🎀）
- ✅ メールアドレスリンク
- ✅ コピーライト表示
- ✅ 完全中央揃え

### コード品質

- ✅ **軽量リファクタリング完了**
- ✅ 全ファイルに日本語コメント追加
- ✅ セクションごとに明確な区切り
- ✅ 関数にJSDocコメント
- ✅ CSS変数で一元管理
- ✅ 不要なコードなし
- ✅ 動作確認済み、不具合なし

### ファイル構成

```
nfc-client-cute-template/
├── index.html              # メインHTML（406行、コメント付き）
├── style.css               # CSSスタイル（699行、日本語コメント）
├── script.js               # JavaScript（297行、JSDocコメント）
├── gallery-swiper.js       # Swiper設定（200行、詳細コメント）
├── swiper-custom.css       # Swiper追加スタイル
├── reina-hero-cute.jpg     # ヒーロー画像（女性全身）
├── reina-avatar-cute.jpg   # アバター画像（顔アップ）
├── slide-1.jpg             # ギャラリー画像1（ピンクドレス）
├── slide-2.jpg             # ギャラリー画像2（白ドレス）
├── slide-3.jpg             # ギャラリー画像3（カジュアル）
├── slide-4.jpg             # ギャラリー画像4（浴衣）
├── slide-5.jpg             # ギャラリー画像5（バースデー）
├── favicon.svg             # ファビコン
├── vercel.json             # Vercelデプロイ設定
├── package.json            # プロジェクト情報
├── README.md               # 概要ドキュメント
└── HANDOVER.md             # このファイル
```

---

## 🚀 新規プロジェクト作成手順

### STEP 1: リポジトリをクローン

```bash
# 作業ディレクトリに移動
cd /home/user/webapp

# このテンプレートをクローン（新しいプロジェクト名で）
git clone https://github.com/tsailink0611/nfc-client-cute-template.git nfc-client-新しい名前

# 新しいディレクトリに移動
cd nfc-client-新しい名前
```

### STEP 2: Git履歴をリセット

```bash
# 既存のGit履歴を削除
rm -rf .git

# 新しいGitリポジトリとして初期化
git init

# 初回コミット
git add .
git commit -m "Initial commit from Cute & Soft template"
```

### STEP 3: 基本情報の一括置換

#### 3-1. HTMLファイルの置換（index.html）

```bash
# 名前の置換（例: 愛花 → 美優）
sed -i 's/愛花/美優/g' index.html

# 英語名の置換（例: Aika → Miyu）
sed -i 's/Aika/Miyu/g' index.html

# 店舗名の置換（例: Club Venus → Club Rose）
sed -i 's/Club Venus/Club Rose/g' index.html

# 場所の置換（例: 六本木 → 新宿）
sed -i 's/六本木/新宿/g' index.html

# LINE URLの置換
sed -i 's|https://line.me/ti/p/demo-aika|https://line.me/ti/p/実際のID|g' index.html

# ページタイトルの確認（手動で調整が必要な場合あり）
# <title>愛花 { Club Venus } | 六本木のキャスト</title>
```

#### 3-2. JavaScriptファイルの置換（script.js）

```bash
# contactInfoオブジェクトを置換
sed -i "s/firstName: '愛花'/firstName: '美優'/g" script.js
sed -i "s/lastName: '山本'/lastName: '佐藤'/g" script.js
sed -i "s/firstNameEN: 'Aika'/firstNameEN: 'Miyu'/g" script.js
sed -i "s/lastNameEN: 'Yamamoto'/lastNameEN: 'Sato'/g" script.js
sed -i "s/company: 'Club Venus'/company: 'Club Rose'/g" script.js
sed -i "s/email: 'aika@club-venus.example'/email: 'miyu@club-rose.example'/g" script.js
sed -i "s|url: 'https://line.me/ti/p/demo-aika'|url: 'https://line.me/ti/p/実際のID'|g" script.js
sed -i "s/location: '六本木'/location: '新宿'/g" script.js
```

#### 3-3. ギャラリー画像のalt属性置換（gallery-swiper.js）

```bash
sed -i "s/alt: '愛花/alt: '美優/g" gallery-swiper.js
```

#### 3-4. package.jsonの置換

```bash
sed -i 's/"name": "nfc-client-cute-template"/"name": "nfc-client-新しい名前"/g' package.json
sed -i 's/愛花/美優/g' package.json
sed -i 's/Club Venus/Club Rose/g' package.json
```

### STEP 4: 画像の差し替え

#### 画像ファイル名の対応表

| 現在のファイル名 | 用途 | 推奨サイズ | 備考 |
|--------------|-----|----------|-----|
| `reina-hero-cute.jpg` | ヒーロー画像 | 1080x1920px | 縦長、全身または上半身 |
| `reina-avatar-cute.jpg` | アバター画像 | 800x1200px | 顔アップ |
| `slide-1.jpg` | ギャラリー1 | 800x1200px | ピンクドレス、華やか |
| `slide-2.jpg` | ギャラリー2 | 800x1200px | 白ドレス、エレガント |
| `slide-3.jpg` | ギャラリー3 | 800x1200px | カジュアル服 |
| `slide-4.jpg` | ギャラリー4 | 800x1200px | 浴衣など和装 |
| `slide-5.jpg` | ギャラリー5 | 800x1200px | バースデー、イベント |

#### 画像差し替え方法

```bash
# 古い画像を削除
rm reina-hero-cute.jpg reina-avatar-cute.jpg slide-*.jpg

# 新しい画像をコピー（または生成後にダウンロード）
# ファイル名は上記の表に従って命名
cp /path/to/new-hero.jpg reina-hero-cute.jpg
cp /path/to/new-avatar.jpg reina-avatar-cute.jpg
cp /path/to/new-slide1.jpg slide-1.jpg
# ... 以下同様
```

### STEP 5: GitHubリポジトリの作成とプッシュ

```bash
# GitHub CLIで新しいリポジトリを作成（パブリック）
gh repo create nfc-client-新しい名前 --public --source=. --remote=origin --push

# または、GitHub上で手動作成してからプッシュ
git remote add origin https://github.com/tsailink0611/nfc-client-新しい名前.git
git branch -M main
git push -u origin main
```

### STEP 6: Vercelデプロイ

#### 方法1: Vercel Dashboard（推奨）

1. https://vercel.com/dashboard にアクセス
2. 「Add New...」→ 「Project」
3. GitHubリポジトリ `nfc-client-新しい名前` を選択
4. 設定はデフォルトのまま「Deploy」
5. 1-2分で完了

#### 方法2: Vercel CLI

```bash
cd /home/user/webapp/nfc-client-新しい名前
vercel --prod
```

---

## 🎨 カスタマイズガイド

### レベル1: 最小限のカスタマイズ（10分）

**対象**: テキストと画像の差し替えのみ

1. STEP 3の一括置換を実行
2. STEP 4の画像差し替えを実行
3. コミット・プッシュ・デプロイ

### レベル2: 軽度のカスタマイズ（30分）

**対象**: カラースキームの微調整

#### カラー変更例

**style.css** の `:root` セクションを編集：

```css
:root {
    /* 例: ピンク → ラベンダー */
    --color-primary: #B19CD9;       /* ラベンダー */
    --color-primary-light: #D8BFD8; /* シスル */
    --color-secondary: #F0E6FF;     /* 薄紫 */
    
    /* 例: ピンク → ミントグリーン */
    --color-primary: #98D8C8;       /* ミントグリーン */
    --color-primary-light: #C8F0E8; /* 薄いミント */
    --color-secondary: #E8FFF8;     /* ごく薄いミント */
    
    /* 例: ピンク → コーラルオレンジ */
    --color-primary: #FF7F50;       /* コーラル */
    --color-primary-light: #FFA07A; /* ライトコーラル */
    --color-secondary: #FFE4E1;     /* ミスティローズ */
}
```

#### ボタンの角丸調整

```css
:root {
    /* より丸く */
    --border-radius-lg: 40px;  /* デフォルト: 30px */
    --border-radius-md: 25px;  /* デフォルト: 20px */
    
    /* よりシャープに */
    --border-radius-lg: 20px;
    --border-radius-md: 15px;
}
```

### レベル3: 中規模カスタマイズ（1-2時間）

**対象**: レイアウト変更、アニメーション追加

#### 例: ヒーローセクションの高さ変更

```css
.hero {
    height: 85vh; /* デフォルト: 75vh */
}
```

#### 例: ギャラリーのエフェクト変更

**gallery-swiper.js** でエフェクトを変更：

```javascript
const gallerySwiper = new Swiper('.gallery-swiper', {
    // Coverflowから他のエフェクトに変更
    effect: 'cards',  // または 'cube', 'flip', 'fade'
    
    // cardsエフェクトの場合
    cardsEffect: {
        perSlideOffset: 8,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: false,
    },
});
```

---

## 🚢 デプロイ手順

### Vercel（推奨）

#### 初回デプロイ

1. https://vercel.com にアクセス
2. GitHubと連携
3. 「Import Project」→ リポジトリ選択
4. 「Deploy」をクリック

#### 更新デプロイ

```bash
# コミット＆プッシュするだけで自動デプロイ
git add .
git commit -m "Update: 修正内容"
git push origin main
```

### カスタムドメイン設定（オプション）

Vercel Dashboard → プロジェクト → Settings → Domains

```
例: aika-nfc.example.com
```

---

## 🐛 トラブルシューティング

### 問題1: ギャラリーがスワイプできない

**原因**: `allowTouchMove: false` になっている

**解決策**: `gallery-swiper.js` で確認

```javascript
allowTouchMove: true,  // これがtrueになっていることを確認
```

### 問題2: ブックマークモーダルが表示されない

**原因**: ボタンのID or イベントリスナー未設定

**解決策**: `script.js` と `index.html` を確認

```javascript
// script.js
const bookmarkBtn = document.getElementById('bookmark-btn');
if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', openBookmarkGuide);
}
```

```html
<!-- index.html -->
<button id="bookmark-btn" class="btn btn-primary">
    保存してね💕
</button>
```

### 問題3: 画像が表示されない

**原因**: ファイル名の不一致 or パス間違い

**解決策**: ファイル名を確認

```bash
# ファイルが存在するか確認
ls -la *.jpg

# 正しいファイル名にリネーム
mv old-name.jpg reina-hero-cute.jpg
```

### 問題4: CSSが反映されない

**原因**: ブラウザキャッシュ

**解決策**: キャッシュバスティング

```html
<!-- index.html -->
<link rel="stylesheet" href="style.css?v=20251219-002">
```

---

## ✅ チェックリスト

### 新規プロジェクト作成時

- [ ] リポジトリをクローン
- [ ] Git履歴をリセット
- [ ] 名前を一括置換（HTML, JS, package.json）
- [ ] 店舗名を一括置換
- [ ] 場所を置換
- [ ] LINE URLを置換
- [ ] ヒーロー画像を差し替え
- [ ] アバター画像を差し替え
- [ ] ギャラリー画像5枚を差し替え
- [ ] ファビコンを更新（オプション）
- [ ] カラースキーム調整（オプション）
- [ ] ローカルでプレビュー確認
- [ ] GitHubリポジトリを作成
- [ ] コミット・プッシュ
- [ ] Vercelデプロイ
- [ ] デプロイURLを確認
- [ ] 全機能テスト（モーダル、スワイプ、ライトボックス）
- [ ] NFCカードにURL書き込み

### デプロイ後の動作確認

- [ ] ヒーロー画像が中央に表示される
- [ ] アバターボタンをクリックで画像モーダル表示
- [ ] ギャラリーが左右にスワイプ可能
- [ ] ギャラリーが自動再生
- [ ] 画像クリックでライトボックス表示
- [ ] ライトボックス内で前後ナビゲーション可能
- [ ] 「保存してね」ボタンでブックマーク案内表示
- [ ] 「LINEで話そ」ボタンでLINEリンク動作
- [ ] Instagramセクションが中央揃え
- [ ] フッターが中央揃え
- [ ] モバイルでレスポンシブ表示確認

---

## 📊 プロジェクト管理戦略

### テンプレートリポジトリの運用

1. **マスターテンプレート**: `nfc-client-cute-template`
   - 読み取り専用として扱う
   - 直接編集しない
   - 改善があればバージョン管理

2. **個別プロジェクト**: `nfc-client-xxx`
   - 各顧客専用のリポジトリ
   - テンプレートからクローンして作成
   - 独立して管理

### バージョニング

```
v1.0.0 (2025-01-XX) - Initial Cute & Soft Template
v1.1.0 (2025-XX-XX) - [改善内容]
```

---

## 🎯 次のステップ

このテンプレートを使って次のプロジェクトを作成する場合：

1. このドキュメント（HANDOVER.md）を参照
2. 「新規プロジェクト作成手順」に従う
3. 必要に応じて「カスタマイズガイド」を適用
4. 「チェックリスト」で確認
5. デプロイ＆納品

---

## 📞 サポート

質問や問題がある場合：
- 制作者: tsailink0611@gmail.com

---

**このドキュメントを保存して、次のプロジェクトに引き継ぎましょう！** 🎀

© 2025 Cute & Soft Template Project
