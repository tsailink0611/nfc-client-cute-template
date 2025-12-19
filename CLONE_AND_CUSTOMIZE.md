# 🚀 クローン＆カスタマイズ戦略ガイド

## 📋 概要

この「麗奈（Reina）- Club Diamond」プロジェクトは、**マスターテンプレート（パターン1）**として機能します。  
新規キャバ嬢向けサイトを作る際は、このリポジトリを**クローン**して、必要な部分だけ変更する効率的な方法を使います。

---

## 🎯 基本戦略：「クローン→カスタマイズ→デプロイ」

### 従来の方法（非効率）
```
❌ 毎回ゼロから作る
❌ 全ファイルを手動で作成
❌ デザイン・構造を都度考える
⏱️ 所要時間: 2-3時間
```

### 新しい方法（超効率的）
```
✅ このリポジトリをクローン
✅ お客様情報だけ置き換え
✅ 画像だけ差し替え
⏱️ 所要時間: 10-15分
```

---

## 🔄 ワークフロー全体像

```
┌─────────────────────────────────────────────────────┐
│  マスターテンプレート (このリポジトリ)                  │
│  https://github.com/tsailink0611/nfc-client-takahashi-misaki
│  ├─ パターン1: エレガント&ゴールドテーマ（現在）      │
│  ├─ パターン2: キュート&ピンクテーマ（将来追加）      │
│  └─ パターン3: クール&ブラックテーマ（将来追加）      │
└─────────────────────────────────────────────────────┘
                         ↓ クローン
┌─────────────────────────────────────────────────────┐
│  新規プロジェクト: [お客様の名前]                     │
│  nfc-client-[新しい名前]                              │
│  ├─ お客様情報を置き換え                              │
│  ├─ 画像を差し替え                                    │
│  ├─ 必要に応じて色・デザイン微調整                    │
│  └─ Vercelデプロイ                                   │
└─────────────────────────────────────────────────────┘
                         ↓ 完成
┌─────────────────────────────────────────────────────┐
│  本番サイト                                          │
│  https://nfc-client-[新しい名前].vercel.app           │
└─────────────────────────────────────────────────────┘
```

---

## 📦 STEP-BY-STEP: クローン＆カスタマイズ手順

### STEP 1: このリポジトリをクローン

```bash
cd /home/user/webapp

# マスターテンプレートをクローン
git clone https://github.com/tsailink0611/nfc-client-takahashi-misaki.git nfc-client-[新しい名前]

# 例: 山本愛花さんの場合
git clone https://github.com/tsailink0611/nfc-client-takahashi-misaki.git nfc-client-yamamoto-aika

cd nfc-client-yamamoto-aika
```

### STEP 2: Git履歴をリセット（新しいプロジェクトとして開始）

```bash
# 既存のGit履歴を削除
rm -rf .git

# 新しいGitリポジトリとして初期化
git init
git config user.name "tsailink0611"
git config user.email "[お客様のメール]"
```

### STEP 3: お客様情報の一括置換

**重要:** 以下のファイルで置き換えが必要です：

#### 📝 index.html
```bash
# 検索＆置換（エディタまたはsedコマンド）
麗奈 → [新しい名前]
Reina → [新しいローマ字名]
Club Diamond → [新しいお店の名前]
銀座 → [新しい場所]
reina-hero-final.jpg → [新しい名前]-hero-final.jpg
reina-avatar-final.jpg → [新しい名前]-avatar-final.jpg
https://line.me/ti/p/demo-reina → [新しいLINE URL]
reina@club-diamond.example → [新しいメール]
```

**一括置換のsedコマンド例:**
```bash
# macOS/Linux共通
sed -i.bak 's/麗奈/愛花/g' index.html
sed -i.bak 's/Reina/Aika/g' index.html
sed -i.bak 's/Club Diamond/Club Venus/g' index.html
sed -i.bak 's/銀座/六本木/g' index.html
# ... 以下同様
```

#### 📝 script.js
```javascript
// contactInfo オブジェクトを置き換え
const contactInfo = {
    firstName: '愛花',           // 変更
    lastName: '',
    firstNameEN: 'Aika',        // 変更
    lastNameEN: '',
    title: 'Hostess at Club Venus',  // 変更
    company: 'Club Venus',      // 変更
    email: 'aika@club-venus.example',  // 変更
    phone: '',
    url: 'https://line.me/ti/p/[新しいLINE ID]',  // 変更
    location: '六本木',          // 変更
    note: '六本木Club Venusのホステス。...'  // 変更
};
```

#### 📝 gallery-swiper.js
```javascript
// 画像情報を更新
const slideImages = [
    { src: 'slide-1.jpg', alt: '愛花 - ピンクドレス' },  // alt属性変更
    { src: 'slide-2.jpg', alt: '愛花 - ゴールドドレス' },
    { src: 'slide-3.jpg', alt: '愛花 - シルバードレス' },
    { src: 'slide-4.jpg', alt: '愛花 - ホワイトドレス' },
    { src: 'slide-5.jpg', alt: '愛花 - クローズアップ' }
];
```

#### 📝 package.json
```json
{
  "name": "nfc-client-yamamoto-aika",  // 変更
  "description": "六本木Club Venusのホステス、山本愛花様のNFC名刺用ランディングページ"  // 変更
}
```

### STEP 4: 画像の差し替え

#### 4-1. 古い画像を削除
```bash
rm reina-hero-final.jpg
rm reina-avatar-final.jpg
rm reina-avatar-cute.jpg
rm reina-hero-cute.jpg
rm slide-1.jpg slide-2.jpg slide-3.jpg slide-4.jpg slide-5.jpg
```

#### 4-2. 新しい画像を生成＆ダウンロード

**ヒーロー画像:**
```bash
# 画像生成後、ダウンロード
curl -o aika-hero-final.jpg "[生成された画像URL]"
```

**アバター画像:**
```bash
curl -o aika-avatar-final.jpg "[生成された画像URL]"
```

**スライドショー画像（5枚）:**
```bash
curl -o slide-1.jpg "[画像URL 1]"
curl -o slide-2.jpg "[画像URL 2]"
curl -o slide-3.jpg "[画像URL 3]"
curl -o slide-4.jpg "[画像URL 4]"
curl -o slide-5.jpg "[画像URL 5]"
```

### STEP 5: 新しいGitHubリポジトリを作成

```bash
# GitHub CLI使用
gh repo create nfc-client-yamamoto-aika --public --source=. --remote=origin

# または手動でGitHub Webから作成後:
git remote add origin https://github.com/tsailink0611/nfc-client-yamamoto-aika.git
```

### STEP 6: コミット＆プッシュ

```bash
git add .
git commit -m "feat: initial setup - 山本愛花 NFC landing page

Based on Reina template (Pattern 1)
- Update all customer information
- Replace hero and avatar images
- Add 5 slideshow images
- Configure for Club Venus Roppongi"

git branch -M main
git push -u origin main
```

### STEP 7: Vercelデプロイ

**ワンクリックデプロイリンク生成:**
```
https://vercel.com/new/clone?repository-url=https://github.com/tsailink0611/nfc-client-yamamoto-aika
```

または：
1. Vercel Dashboard → Add New Project
2. Import `nfc-client-yamamoto-aika`
3. Deploy

---

## 🎨 パターン別テンプレート戦略

### パターン1: エレガント&ゴールドテーマ（現在）
```
✓ 対象: 高級感重視、大人っぽいホステス
✓ カラー: ゴールド、アイボリー、ホワイト
✓ デザイン: 上品、エレガント、3Dエフェクト
✓ フォント: Noto Serif JP
✓ リポジトリ: nfc-client-takahashi-misaki (このリポジトリ)
```

### パターン2: キュート&ピンクテーマ（将来追加予定）
```
□ 対象: 可愛い系、若いホステス
□ カラー: ピンク、パステル、ラベンダー
□ デザイン: ポップ、キュート、ハート装飾
□ フォント: ポップ体・丸ゴシック
□ リポジトリ: nfc-client-template-cute (今後作成)
```

### パターン3: クール&ブラックテーマ（将来追加予定）
```
□ 対象: クール系、モダンなホステス
□ カラー: ブラック、シルバー、ネイビー
□ デザイン: シャープ、ミニマル、モダン
□ フォント: ゴシック体
□ リポジトリ: nfc-client-template-cool (今後作成)
```

---

## 🔧 カスタマイズレベル別ガイド

### レベル1: 最小限（10分）
```
✓ お客様情報の置き換えのみ
✓ 画像の差し替えのみ
✓ デザイン・構造は変更なし
→ 迅速な納品が必要な場合
```

**変更ファイル:**
- index.html（検索＆置換）
- script.js（contactInfo）
- 画像7枚

### レベル2: 軽微なカスタマイズ（30分）
```
✓ お客様情報 + 画像
✓ メインカラーの変更
✓ セクションの追加/削除
→ 標準的なカスタマイズ
```

**変更ファイル:**
- index.html
- script.js
- style.css（色変更）
- 画像7枚

**色変更例（style.css）:**
```css
:root {
    --color-gold: #FFB6C1;        /* ピンクに変更 */
    --color-gold-light: #FFC0CB;
    --color-gold-dark: #FF69B4;
}
```

### レベル3: 大幅なカスタマイズ（1-2時間）
```
✓ お客様情報 + 画像
✓ 全体デザインの変更
✓ 新しいセクション追加（YouTube、TikTok統合など）
✓ アニメーション変更
→ 特別な要望がある場合
```

**変更ファイル:**
- 全ファイル
- 新規セクション追加

---

## 📊 プロジェクト管理戦略

### GitHubリポジトリ構成

```
tsailink0611/
├── nfc-client-takahashi-misaki     ← マスターテンプレート（パターン1）
│   └── ⭐ このリポジトリを絶対に変更しない
│
├── nfc-client-template-cute        ← パターン2（将来作成）
│   └── キュート&ピンクテーマ
│
├── nfc-client-template-cool        ← パターン3（将来作成）
│   └── クール&ブラックテーマ
│
└── 個別プロジェクト（お客様ごと）
    ├── nfc-client-yamamoto-aika
    ├── nfc-client-sato-yuki
    ├── nfc-client-tanaka-rina
    └── ...
```

### テンプレート管理のベストプラクティス

1. **マスターテンプレートは読み取り専用**
   - `nfc-client-takahashi-misaki`は変更しない
   - 改善点があれば、新しいバージョンを作成

2. **バージョニング**
   ```
   nfc-client-takahashi-misaki (v1.0)
   nfc-client-template-v2 (v2.0) ← 改良版
   nfc-client-template-v3 (v3.0) ← さらに改良
   ```

3. **ブランチ戦略**
   ```
   main        ← 本番用（デプロイ済み）
   develop     ← 開発用（テスト中）
   feature/*   ← 新機能追加用
   ```

---

## 🚀 効率化スクリプト（将来的に自動化）

### クローン＆置換スクリプト（将来作成予定）

```bash
#!/bin/bash
# clone_and_customize.sh

# 使い方: ./clone_and_customize.sh [新しい名前] [ローマ字名] [お店] [場所] [LINE URL]

NEW_NAME_JP=$1
NEW_NAME_EN=$2
SHOP_NAME=$3
LOCATION=$4
LINE_URL=$5

# クローン
git clone https://github.com/tsailink0611/nfc-client-takahashi-misaki.git nfc-client-${NEW_NAME_EN,,}
cd nfc-client-${NEW_NAME_EN,,}

# Git履歴削除
rm -rf .git
git init

# 一括置換
sed -i.bak "s/麗奈/${NEW_NAME_JP}/g" index.html script.js gallery-swiper.js
sed -i.bak "s/Reina/${NEW_NAME_EN}/g" index.html script.js
sed -i.bak "s/Club Diamond/${SHOP_NAME}/g" index.html script.js package.json
sed -i.bak "s/銀座/${LOCATION}/g" index.html script.js
sed -i.bak "s|https://line.me/ti/p/demo-reina|${LINE_URL}|g" index.html script.js

# バックアップファイル削除
rm *.bak

echo "✅ カスタマイズ完了！"
echo "次のステップ: 画像を差し替えて、GitHubにプッシュしてください。"
```

---

## 📝 チェックリスト: 新規プロジェクト開始時

### ✅ 準備段階
- [ ] お客様情報を確認（名前、お店、場所、LINE、Instagram、メール）
- [ ] 参考画像を入手（顔写真、ドレス写真など）
- [ ] 使用するテンプレートパターンを決定（パターン1/2/3）

### ✅ クローン＆カスタマイズ
- [ ] マスターテンプレートをクローン
- [ ] Git履歴をリセット
- [ ] index.html を置き換え
- [ ] script.js を置き換え
- [ ] gallery-swiper.js を置き換え
- [ ] package.json を置き換え
- [ ] 古い画像を削除

### ✅ 画像生成＆差し替え
- [ ] ヒーロー画像を生成＆ダウンロード
- [ ] アバター画像を生成＆ダウンロード
- [ ] スライドショー画像5枚を生成＆ダウンロード
- [ ] ファイル名を正しく設定

### ✅ Git & GitHub
- [ ] 新しいGitHubリポジトリを作成
- [ ] `git add .`
- [ ] `git commit`（詳細なメッセージ）
- [ ] `git push origin main`

### ✅ Vercel デプロイ
- [ ] Vercel Dashboard または ワンクリックデプロイ
- [ ] プロジェクト名設定
- [ ] デプロイ実行
- [ ] デプロイURL確認

### ✅ 動作確認
- [ ] ヒーロー画像表示
- [ ] アバターボタン動作
- [ ] スライドショー自動回転
- [ ] スワイプ操作
- [ ] 画像拡大
- [ ] ブックマークガイド
- [ ] LINE URL動作
- [ ] モバイル表示

### ✅ 納品
- [ ] お客様にデプロイURLを共有
- [ ] NFCカードに書き込み
- [ ] 動作テスト（お客様と一緒）

---

## 🎓 新しいパターン追加時の手順

### パターン2（キュート&ピンク）を作成する場合

1. **現在のテンプレートをベースにクローン**
   ```bash
   git clone https://github.com/tsailink0611/nfc-client-takahashi-misaki.git nfc-client-template-cute
   cd nfc-client-template-cute
   ```

2. **デザインを変更**
   - `style.css`: カラースキームをピンク系に変更
   - `index.html`: 装飾をハート、星などに変更
   - フォントを可愛い系に変更

3. **サンプル画像を準備**
   - キュート系のサンプル画像7枚

4. **新しいリポジトリとして保存**
   ```bash
   rm -rf .git
   git init
   gh repo create nfc-client-template-cute --public --source=. --remote=origin --push
   ```

5. **README更新**
   - パターン2用の説明を追加

---

## 💡 ベストプラクティス

### ✅ やるべきこと
- マスターテンプレートは常に最新の状態に保つ
- 各プロジェクトは独立したリポジトリで管理
- 変更履歴を丁寧にコミットメッセージで記録
- デプロイURLは必ずドキュメント化

### ❌ やってはいけないこと
- マスターテンプレートを直接編集
- 複数のお客様のプロジェクトを1つのリポジトリに混ぜる
- 画像のファイル名を間違える
- Git履歴を残したままクローン

---

## 📞 サポート & トラブルシューティング

### よくある問題

**Q1: クローン後、古いお客様の名前が残っている**
A: `index.html`, `script.js`, `gallery-swiper.js`, `package.json` の4ファイルで検索＆置換を忘れずに。

**Q2: 画像が表示されない**
A: ファイル名を確認。`[名前]-hero-final.jpg`の形式を守る。

**Q3: Vercelデプロイで「Repository already exists」エラー**
A: プロジェクト名を変更（`nfc-client-[名前]-v2`など）。

**Q4: スライドショーが動かない**
A: `gallery-swiper.js`のslideImages配列でalt属性を更新したか確認。

---

## 🎉 まとめ

### このクローン戦略の利点

✅ **超高速**（10-15分で完成）  
✅ **品質保証**（実績あるテンプレートベース）  
✅ **スケーラブル**（パターン追加で無限拡張）  
✅ **保守性**（各プロジェクト独立）  
✅ **コスト効率**（開発時間の大幅削減）

### 次のステップ

1. このマスターテンプレートを保護（変更しない）
2. 新規プロジェクトはクローンから開始
3. 必要に応じてパターン2、パターン3を作成
4. 効率化スクリプトを開発（将来）

---

**これで、キャバ嬢向けNFC名刺サイトを量産できる体制が整いました！** 🚀
