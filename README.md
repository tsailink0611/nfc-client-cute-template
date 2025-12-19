# 愛花 - Club Venus NFC名刺サイト（Cute & Soft Theme）

六本木Club Venusのキャスト、愛花様のNFC名刺用ランディングページ

## 🎨 テーマ特性

- **テーマ**: Cute & Soft（キュート＆ソフト）
- **カラースキーム**: ソフトピンク基調、柔らかいグラデーション
- **フォント**: M PLUS Rounded 1c（丸ゴシック）
- **ターゲット**: 20代前後の若々しい雰囲気
- **特徴**: 大きな角丸、ふんわりした影、立体的なボタン

## 👤 クライアント情報（サンプル）

- **名前**: 愛花（Aika）
- **職業**: キャスト
- **店舗**: Club Venus
- **所在地**: 六本木
- **LINE**: https://line.me/ti/p/demo-aika

## ✨ 実装済み機能

### 1. ヒーローセクション
- 画面の75%を占める大型画像エリア
- 下部にグラデーションオーバーレイで名前表示
- 中央揃えの女性画像配置

### 2. アバターセクション
- リッチなグラデーションボタン（ピンク系）
- クリックでモーダル表示
- 立体感のあるホバーエフェクト

### 3. ギャラリー（Swiper）
- Coverflowエフェクト（カード風の重なり表示）
- 自動再生（タッチ/スワイプ操作後も継続）
- 左右スワイプ対応
- クリックで画像をライトボックス拡大表示

### 4. CTAボタン
- 「保存してね💕」- ブックマーク案内モーダル表示
- 「LINEで話そ！」- LINEリンク（緑色、LINEブランドカラー）
- 両方とも大きく丸いボタンデザイン

### 5. レスポンシブ対応
- モバイルファースト設計
- 最大幅480pxのスマートフォン最適化

## 📁 ファイル構成

```
nfc-client-cute-template/
├── index.html              # メインHTML
├── style.css               # Cute & Soft テーマCSS（日本語コメント付き）
├── script.js               # vCard生成・モーダル機能（日本語コメント付き）
├── gallery-swiper.js       # Swiperカルーセル設定（日本語コメント付き）
├── swiper-custom.css       # Swiper追加スタイル
├── reina-hero-cute.jpg     # ヒーロー画像（女性全身）
├── reina-avatar-cute.jpg   # アバター画像（顔アップ）
├── slide-1.jpg             # ギャラリー画像1（ピンクドレス）
├── slide-2.jpg             # ギャラリー画像2（浴衣）
├── slide-3.jpg             # ギャラリー画像3（カジュアル）
├── slide-4.jpg             # ギャラリー画像4（バースデー）
├── slide-5.jpg             # ギャラリー画像5（クローズアップ）
├── favicon.svg             # ファビコン
├── vercel.json             # Vercelデプロイ設定
├── package.json            # プロジェクト情報
└── README.md               # このファイル
```

## 🚀 デプロイ

### Vercel（推奨）

1. GitHubリポジトリをVercelにインポート
2. 自動設定（Framework Preset: Other）
3. デプロイ完了（1-2分）

```bash
# Vercel CLIでデプロイ
cd /path/to/nfc-client-cute-template
vercel --prod
```

### ローカルプレビュー

```bash
# Python
python -m http.server 8080

# Node.js
npx http-server -p 8080
```

## 🔧 カスタマイズ方法

### 1. 基本情報の変更

**script.js** の `contactInfo` オブジェクトを編集：

```javascript
const contactInfo = {
    firstName: '愛花',
    lastName: '山本',
    firstNameEN: 'Aika',
    lastNameEN: 'Yamamoto',
    title: 'Cast at Club Venus',
    company: 'Club Venus',
    email: 'aika@club-venus.example',
    url: 'https://line.me/ti/p/demo-aika',
    location: '六本木',
    note: '六本木Club Venusの愛花です💕 楽しい時間を一緒に過ごしましょう！'
};
```

### 2. カラースキームの変更

**style.css** の `:root` 変数を編集：

```css
:root {
    --color-primary: #FF9EAA;       /* メインピンク */
    --color-primary-light: #FFD1D9; /* 薄いピンク */
    --color-secondary: #FFF0F5;     /* セカンダリーカラー */
}
```

### 3. 画像の差し替え

| ファイル名 | 用途 | 推奨サイズ |
|-----------|-----|----------|
| `reina-hero-cute.jpg` | ヒーロー画像 | 1080x1920px（縦長） |
| `reina-avatar-cute.jpg` | アバター画像 | 800x1200px（顔アップ） |
| `slide-1.jpg` ~ `slide-5.jpg` | ギャラリー | 800x1200px（縦長） |

### 4. テキストの変更

**index.html** で以下を検索して置換：

- `愛花` → 新しい名前
- `Club Venus` → 新しい店舗名
- `六本木` → 新しい場所
- `https://line.me/ti/p/demo-aika` → 実際のLINE URL

## 📱 NFCカード設定

デプロイ後のURLをNFCメタルカードに書き込み：

```
https://your-project-name.vercel.app
```

## 🎯 このテンプレートの強み

1. **完全なモバイル最適化** - スマホでの閲覧が完璧
2. **軽量リファクタリング済み** - 日本語コメント完備
3. **若々しいデザイン** - 20代前後のターゲットに最適
4. **簡単カスタマイズ** - テキスト・画像の差し替えが容易
5. **動作安定性** - 全機能テスト済み、不具合なし

## 🔄 次回の展開（別プロジェクト作成時）

このテンプレートを元に新しいプロジェクトを作成する場合：

1. このリポジトリをクローン
2. Git履歴をリセット（`rm -rf .git && git init`）
3. 上記「カスタマイズ方法」に従って情報を置換
4. 画像を差し替え
5. 新しいGitHubリポジトリを作成してプッシュ
6. Vercelでデプロイ

詳しくは `HANDOVER.md` を参照。

## 📞 サポート

このサイトに関するお問い合わせ：
- 制作者: tsailink0611@gmail.com

---

© 2025 Aika - Club Venus. Built with AI.
