# 仮囲いドットコム

Next.js App Router で構築した、建設資材販売・レンタル向けサイトです。

## プロジェクト概要

建設資材販売・レンタルサイト

取扱商品

* 仮囲い
* A字バリケード
* 単管パイプ
* 保安用品
* 敷鉄板
* 仮設トイレ
* 監視カメラ
* 高圧洗浄機

## 現在実装済み

* TOPページ
* 販売商品一覧
* レンタル商品一覧
* 商品詳細ページ
* レンタル申込フォーム
* LINE導線
* 電話導線
* FAQ
* サイトマップ
* SEOページ

## LINE

https://lin.ee/uHxTgwh

## 電話番号

022-738-7913

## 今後の開発予定

* Googleフォーム連携
* Vercel公開
* 独自ドメイン接続
* 商品画像追加
* 地域別LP作成
* 在庫管理機能
* 問い合わせ管理機能

## GitHub

https://github.com/Genki1414/karakoi-dotcom

## 開発

```bash
npm install
npm run dev
```

確認URL:

```text
http://localhost:3000
```

## Vercel公開手順

1. GitHubにこのリポジトリをpushします。
2. Vercelで「Add New Project」を選択します。
3. 対象リポジトリをImportします。
4. Framework Preset は `Next.js` を選択します。
5. Build Command は `npm run build`、Output Directory は未指定のままで公開します。
6. 公開前に必要な環境変数をVercel Project SettingsのEnvironment Variablesへ登録します。

## 独自ドメイン設定方法

1. VercelのProject Settings > Domainsを開きます。
2. 使用するドメインを追加します。
3. Vercelに表示されるDNSレコードを、ドメイン管理会社のDNS設定へ追加します。
4. DNS反映後、Vercel側でValidになることを確認します。
5. 本番ドメインが決まったら `src/lib/site.ts` の `site.url` を本番URLへ変更します。

## LINE URL変更方法

`src/lib/site.ts` の `site.lineUrl` を変更します。

```ts
lineUrl: "https://lin.ee/uHxTgwh",
```

## 電話番号変更方法

`src/lib/site.ts` の `site.phone` と `site.phoneHref` を変更します。

```ts
phone: "022-738-7913",
phoneHref: "tel:0227387913",
```

## Googleフォーム連携方法

第一段階はGoogleフォーム連携です。Googleフォーム側で受付用フォームを作成し、以下を確認してください。

1. Googleフォームの送信先URLを取得します。
   例: `https://docs.google.com/forms/d/e/FORM_ID/formResponse`
2. 各入力項目の `entry.xxxxx` 名を取得します。
3. Vercelの環境変数へ以下を登録します。

```text
NEXT_PUBLIC_GOOGLE_FORM_ACTION=https://docs.google.com/forms/d/e/FORM_ID/formResponse
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_COMPANY=entry.xxxxx
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_NAME=entry.xxxxx
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_TEL=entry.xxxxx
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_EMAIL=entry.xxxxx
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_PRODUCT=entry.xxxxx
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_START=entry.xxxxx
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_PERIOD=entry.xxxxx
NEXT_PUBLIC_GOOGLE_FORM_ENTRY_MESSAGE=entry.xxxxx
```

未設定でも画面遷移は確認できますが、Googleフォームへの記録は行われません。公開前に必ず設定してください。

送信後は `/thanks` へ遷移し、「お問い合わせありがとうございました」を表示します。

## 商品追加方法

商品データは `src/lib/site.ts` の `products` 配列で管理しています。

商品を追加する場合:

1. `products` に商品データを追加します。
2. 画像を `public/images/products/商品slug.png` に配置します。
3. `image` に `/images/products/商品slug.png` を指定します。
4. 販売対象なら `modes: ["sale"]`、レンタル対象なら `modes: ["rental"]`、両方なら `["sale", "rental"]` を指定します。
5. `prices` に価格目安を設定します。

例:

```ts
{
  slug: "new-product",
  name: "新商品",
  modes: ["rental"],
  lead: "一覧に表示する短い説明",
  description: "詳細ページに表示する説明",
  features: ["特徴1", "特徴2"],
  uses: ["用途1", "用途2"],
  image: "/images/products/new-product.png",
  prices: { rental: "月額1,000円～" },
}
```

商品詳細ページ、一覧、サイトマップは自動で反映されます。

## SEO個別ページ追加方法

`src/lib/site.ts` の `servicePages` 配列へ追加します。

`productSlug` には `products` の `slug` を指定します。追加後、`/services/追加slug` にページが生成され、サイトマップにも反映されます。

## 検証

```bash
npm run lint
npm run build
```
