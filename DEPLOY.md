# 🚀 Vercelデプロイ手順

## ✅ 最も簡単な方法（推奨）：Vercel Dashboard経由

### ステップ1: Vercelにログイン
1. https://vercel.com にアクセス
2. 「Continue with GitHub」でログイン

### ステップ2: GitHubリポジトリをインポート
1. Vercel Dashboardで「Add New Project」をクリック
2. 「Import Git Repository」を選択
3. リポジトリ一覧から `nfc-client-takahashi-misaki` を検索
4. 「Import」ボタンをクリック

### ステップ3: プロジェクト設定（自動検出）
以下が自動で設定されます：
- **Framework Preset**: Other (静的サイト)
- **Root Directory**: `./`
- **Build Command**: (なし)
- **Output Directory**: `./`

そのまま「Deploy」ボタンをクリック！

### ステップ4: デプロイ完了 🎉
約1〜2分でデプロイ完了し、以下のようなURLが発行されます：
```
https://nfc-client-takahashi-misaki.vercel.app
```

---

## 🔄 自動デプロイ設定

一度Vercelに接続すると、以下が自動化されます：

✅ **mainブランチへのpush** → 自動デプロイ
✅ **Pull Request作成** → プレビュー環境自動生成
✅ **HTTPS証明書** → 自動取得・更新

---

## 📱 カスタムドメイン設定（オプション）

Vercel Dashboard > Project Settings > Domains から設定可能：
- `reina-club-diamond.com` などのカスタムドメイン追加
- DNS設定の案内が自動表示されます

---

## 🔗 現在の状態

- ✅ GitHub リポジトリ: https://github.com/tsailink0611/nfc-client-takahashi-misaki
- ✅ 最新コミット: push済み
- 📦 準備完了: Vercelでインポート可能

---

## 💡 ワンクリックデプロイ

以下のボタンを使うと、さらに簡単にデプロイできます：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tsailink0611/nfc-client-takahashi-misaki)

---

## 🆘 トラブルシューティング

### Q: リポジトリが見つからない
A: Vercel側でGitHub連携の権限を確認してください。
   Settings > Integrations > GitHub > Configure で該当リポジトリへのアクセスを許可。

### Q: デプロイエラーが出る
A: 静的サイトなのでビルドコマンドは不要です。
   Framework Preset を「Other」に設定してください。

---

作成日: 2025-12-19
