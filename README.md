# 麗奈 - Club Diamond NFC名刺サイト

銀座Club Diamondのホステス、高橋美咲様のNFC名刺用ランディングページ

## 👤 クライアント情報

- **名前**: 麗奈
- **職業**: ホステス
- **店舗**: Club Diamond
- **所在地**: 銀座
- **LINE**: https://line.me/ti/p/demo-misaki

## 🎨 デザインコンセプト

- **カラースキーム**: ゴールド＆エレガント
- **フォント**: Noto Serif JP（明朝体）
- **雰囲気**: 高級感・洗練された印象

## ✨ 提供サービス

1. **店内指名** - VIPルームでのエレガントなおもてなし
2. **同伴・アフター** - お食事や銀座のバーでの同伴
3. **プライベート相談** - LINEでの気軽なご相談OK

## 📁 ファイル構成

```
nfc-client-takahashi-misaki/
├── index.html              # メインページ
├── style.css               # ゴールド系カスタムスタイル
├── script.js               # vCard生成・モーダル機能
├── misaki-avatar.jpg       # AI生成プロフィール画像
├── favicon.svg             # ファビコン
├── vercel.json             # Vercelデプロイ設定
├── video-placeholder.txt   # 動画プレースホルダー（HeyGen/D-ID待ち）
└── README.md               # このファイル
```

## 🎬 AI アバター動画について

現在は静止画像を表示。実際の動画は以下のフローで生成予定：

1. お客様から写真と音声サンプルを収集
2. HeyGenまたはD-IDでアバター動画を生成
3. `index.html`の動画ソースを更新
4. 再デプロイ

### 動画生成時の更新箇所

```html
<!-- index.html 184行目付近 -->
<video id="modal-video" class="modal-video" controls playsinline>
    <source src="misaki-greeting-video.mp4" type="video/mp4">
</video>
```

## 🚀 デプロイ

### Vercel (推奨)

```bash
# Vercel CLIでデプロイ
cd nfc-client-takahashi-misaki
vercel --prod
```

### ローカルプレビュー

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server
```

## 🔧 カスタマイズ

### 連絡先情報の変更

`script.js` の `contactInfo` オブジェクトを編集：

```javascript
const contactInfo = {
    firstName: '美咲',
    lastName: '高橋',
    email: 'misaki@club-diamond.example',
    url: 'https://line.me/ti/p/demo-misaki',
    // ...
};
```

### カラースキームの調整

`style.css` の `:root` 変数を編集：

```css
:root {
    --color-gold: #FFD700;
    --color-gold-light: #FFE55C;
    --color-gold-dark: #B8860B;
}
```

## 📱 NFCカード設定

デプロイ後のURLをNFCメタルカードに書き込み：

```
https://misaki-takahashi-nfc.vercel.app
```

## 📞 サポート

このサイトに関するお問い合わせ：
- 制作者: tsailink0611@gmail.com

---

© 2025 Misaki Takahashi - Club Diamond. Built with AI.
