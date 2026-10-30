# DESIGN.md --- HIGHTIDE

> HIGHTIDE (https://www.hightide.co.jp/) のデザイン仕様書。
> 福岡発のステーショナリー・ライフスタイルブランド。実サイトの computed style に基づく（2026-05-30 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: プロダクト写真を主役にした、静かで上質なカタログ型EC。コンバージョン要素（CTA ボタン等）を極力排し、写真とタイポグラフィで世界観を伝える
- **密度**: ゆったりとした余白。画像が呼吸できる余白設計。テキストは最小限で、プロダクトの佇まいに語らせる
- **キーワード**: 静謐、エディトリアル、温かみ、プロダクトファースト、文具の佇まい
- **特徴**: 純粋な黒（`#000000`）ではなく `#333333` を基本テキスト色に使用。記事コンテンツでは `#352c25`（ウォームブラウン）を採用し、紙やインクを想起させる温かみを演出。全要素に `palt` + `letter-spacing: 0.45px` をグローバル適用するのが特徴的

---

## 2. Color Palette & Roles

### Brand（ブランドカラー）

- **Accent Orange** (`#e25b33`): カートバッジ等のアクセント。控えめに使用

### Neutral --- テキスト

- **Text Primary** (`#333333`): 基本テキスト。ダークグレーで柔らかい印象
- **Text Article** (`#352c25`): 特集記事の見出し・本文。ウォームブラウン系で紙の質感を想起
- **Text Secondary** (`#545454`): 記事本文。ミディアムグレー
- **Text Footer** (`#ffffff`): フッターテキスト

### Surface & Background

- **Background** (`#ffffff`): ページ背景
- **Surface Hero** (`#f4f3f2`): ヒーロースライダー、特集エリアの背景。ウォームベージュグレー
- **Surface Feature** (`#f7f7f7`): 特集セクション背景。極薄グレー
- **Footer** (`#858585`): フッター背景。ミディアムグレー
- **Input Background** (`#efefef`): 検索入力欄・セレクトの背景

### Border

- **Input Border** (`#cccccc`): 入力欄のボーダー

### Semantic

- **Cart Badge** (`#e25b33`): カートアイテム数バッジ。オレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- ヒラギノ角ゴ（macOS: "Hiragino Kaku Gothic"）
- Noto Sans JP（Google Fonts / Windows フォールバック）
- ヒラギノ角ゴ ProN なし（"Hiragino Sans" を使用）
- 游ゴシック / メイリオ（Windows 追加フォールバック）

### 3.2 欧文フォント

- **サンセリフ**: Helvetica Neue（第一候補）, avenir, Arial
- **明朝体**: 該当なし
- **等幅**: 該当なし

### 3.3 font-family 指定

```css
/* デフォルト（全体） */
font-family: "Helvetica Neue", HelveticaNeue, "Hiragino Kaku Gothic",
  "Noto Sans JP", avenir, "Hiragino Sans", Arial, "Yu Gothic",
  Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Helvetica Neue）を先頭に指定し、欧文の表示品質を優先
- `HelveticaNeue`（スペースなし）をフォールバックとして併記（古いブラウザ対応）
- `"Hiragino Kaku Gothic"` は ProN/Pro なしの指定（macOS のヒラギノ角ゴ全般にマッチ）
- avenir が Arial より前に入っているのが特徴的（macOS での欧文表示を重視）
- 游ゴシック → メイリオの順で Windows をカバー

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値（2026-05-30 取得）

| Role | Size | Weight | Line Height | Letter Spacing | palt | 備考 |
|------|------|--------|-------------|----------------|------|------|
| H1 Feature | 28px | 500 | 42px (x1.5) | 0.45px | あり | 特集記事タイトル（Penco等） |
| H1 Section | 24px | 400 | 24px (x1.0) | 0.45px | あり | "ピックアップ" 等セクション名 |
| H2 Section | 24px | 400 | 24px (x1.0) | 0.45px | あり | "人気のカテゴリ" 等 |
| H3 News | 16px | 700 | 22.4px (x1.4) | 0.45px | あり | ニュース記事タイトル |
| H3 Search | 17.55px | 500 | 17.55px (x1.0) | 0.45px | あり | "商品検索" |
| H3 Category | 14px | 700 | 14px (x1.0) | 0.45px | あり | "カテゴリ" |
| H4 | 15px | 700 | 18px (x1.2) | 0.45px | あり | "Follow Us" 等 |
| Body Article | 16px | 400 | 32px (x2.0) | 0.45px | あり | 特集記事本文 |
| Body Base | 15px | 400 | 22.5px (x1.5) | 0.45px | あり | 標準テキスト |
| Body Product | 13px | 400 | 19.5px (x1.5) | 0.45px | あり | 商品名 |
| Price | 14px | 400 | 14px (x1.0) | 0.45px | あり | 価格表示 |
| Nav Ticker | 14px | 400 | 52px (x3.7) | 0.45px | あり | アナウンスメントバー |

### 3.5 行間・字間

**行間 (line-height)** --- 実測値:
- 記事本文 (Body Article): `32px` (16px x **2.0**) --- 読み物コンテンツ向け、ゆったり
- 標準テキスト (Body Base): `22.5px` (15px x 1.5)
- 商品名 (Body Product): `19.5px` (13px x 1.5)
- セクション見出し (H1/H2): `24px` (24px x **1.0**) --- タイトル感のあるタイト行間
- ニュース見出し (H3 News): `22.4px` (16px x 1.4)
- 特集タイトル (H1 Feature): `42px` (28px x 1.5)
- アナウンスメントバー: `52px` (14px x 3.7) --- 上下中央揃え用

**字間 (letter-spacing)** --- 実測値:
- **全要素**: `0.45px` --- グローバルに適用（body に設定）
- 15px ベースで約 `0.03em` に相当
- 控えめな字詰めで、和文の均等感を残しつつ、わずかに引き締まった印象

**ガイドライン**:
- `letter-spacing: 0.45px` は**全要素にグローバル適用**。note のように見出し専用ではない
- `palt` も同様にグローバル適用。body レベルで `font-feature-settings: "palt"` が設定されている
- セクション見出しは `line-height: 1.0` で、テキストと枠の隙間を排除した凝縮的なタイトル感
- 記事本文は `line-height: 2.0` を維持（日本語長文の可読性確保）

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-wrap: break-word;
overflow-wrap: break-word;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### 3.7 OpenType 機能

```css
/* body にグローバル適用 --- 全要素に効く */
font-feature-settings: "palt";
```

- **palt**: body レベルでグローバルに適用。見出しだけでなく、商品名・価格・本文すべてにプロポーショナル字詰めが効いている
- note（見出し専用 palt）とは対照的。ステーショナリーブランドらしく、文字の佇まいを全体的に引き締めている

### 3.8 縦書き

- 該当なし。HIGHTIDE は横書きのみ

---

## 4. Component Stylings

### Search Input (Pill)

- Background: `#efefef`
- Border: `1px solid #cccccc`
- Border Radius: `100px`（完全な pill 形状）
- Padding: `12px 30px`
- Font Size: `16px`
- Font Weight: 400
- Color: `#333333`

### Select

- Background: `#efefef`
- Border Radius: `0px` or `3px`
- Font Size: `15px` -- `16px`
- Font Weight: 400

### Cart Badge

- Background: `#e25b33`
- Color: `#ffffff`
- Shape: 小さな円形

### Cards（商品カード）

- Background: なし（画像ベース）
- Border: なし
- Shadow: なし
- 商品名: 13px / 400 / `#333333`
- 価格: 14px / 400 / `#333333`
- 構成: 商品画像 + 商品名 + 価格。装飾を排したミニマルなレイアウト

### Navigation

- Background: `#ffffff`
- 高さ: アナウンスメントバー（52px）+ メインナビ
- アナウンスメントバー: `14px / 400 / #333333`、テキストのみ

---

## 5. Layout Principles

### Content Width

- サイト全体は画面幅に応じたフルードレイアウト
- 商品グリッドは 4 -- 5 カラム（デスクトップ）
- 特集記事は本文幅を制限して可読性を確保

### Spacing

- 全体的にゆったりとした余白設計
- 商品カード間: 均等なギャップ
- セクション間: 大きな余白で視覚的な区切り

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 基本状態。商品カード、ナビゲーション等すべてフラット |

- HIGHTIDE のサイトは**影をほぼ使わない**。すべての要素がフラットに配置され、写真の質感と色味で奥行きを表現する
- ホバーエフェクトも控えめ（opacity 変化程度）

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#333333` を基本にする。純粋な `#000000` を避け、柔らかい印象を保つ
- 特集コンテンツには `#352c25`（ウォームブラウン）を使い、紙・インクの温かみを出す
- `font-feature-settings: "palt"` と `letter-spacing: 0.45px` は body に設定し、全要素に効かせる
- 背景色は `#ffffff` をベースに、セクション背景に `#f4f3f2`（ウォームベージュグレー）を使う
- 商品カードは装飾なし（影・ボーダーなし）で、写真の力を活かす
- 検索入力は pill 形状（`border-radius: 100px`）にする
- セクション見出しは `line-height: 1.0` でタイトに組む
- 記事本文は `line-height: 2.0` でゆったり組む

### Don't（禁止）

- 純粋な `#000000` をテキストに使わない
- 派手な CTA ボタンを配置しない（ブランドの静謐な世界観を壊す）
- 商品カードに影やボーダーを付けない（フラットデザインの一貫性を崩す）
- `palt` を見出しだけに限定しない（HIGHTIDE はグローバル適用）
- 寒色系のグレー（青みがかったグレー）を使わない。HIGHTIDE は温かみのあるニュートラルグレー（`#f4f3f2` 等）を使う
- `letter-spacing` をテキスト要素ごとに変えない。`0.45px` をグローバルに統一する

---

## 8. Responsive Behavior

### Breakpoints

- モバイルファーストのレスポンシブ設計
- 商品グリッドは 2 カラム（モバイル）→ 4--5 カラム（デスクトップ）
- ナビゲーションはハンバーガーメニューに切り替え（モバイル）

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイルではベースフォントサイズを維持しつつ、セクション見出しを縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Accent Color: #e25b33 (カートバッジ、控えめに使用)
Text Primary: #333333
Text Article: #352c25 (ウォームブラウン、特集コンテンツ)
Text Secondary: #545454
Background: #ffffff
Surface Hero: #f4f3f2 (ウォームベージュグレー)
Surface Feature: #f7f7f7
Footer: #858585
Input Background: #efefef
Input Border: #cccccc

Font: "Helvetica Neue", HelveticaNeue, "Hiragino Kaku Gothic",
  "Noto Sans JP", avenir, "Hiragino Sans", Arial, "Yu Gothic",
  Meiryo, sans-serif

Body Size: 15px / line-height: 1.5 / letter-spacing: 0.45px
Article Body: 16px / line-height: 2.0 / letter-spacing: 0.45px
Section Heading: 24px / weight: 400 / line-height: 1.0
palt: グローバル適用（body レベル）
letter-spacing: 0.45px グローバル適用
```

### プロンプト例

```
HIGHTIDE のデザインに従って、商品一覧ページを作成してください。
- フォント: "Helvetica Neue", HelveticaNeue, "Hiragino Kaku Gothic",
    "Noto Sans JP", avenir, "Hiragino Sans", Arial, "Yu Gothic",
    Meiryo, sans-serif
- テキスト色: #333333（純粋な黒は使わない）
- 背景: #ffffff、セクション背景: #f4f3f2
- font-feature-settings: "palt" を body にグローバル適用
- letter-spacing: 0.45px をグローバル適用
- 商品カード: 画像 + 商品名（13px）+ 価格（14px）、装飾なし
- 検索: pill 型（border-radius: 100px）、背景 #efefef
- CTA ボタンは最小限。写真とテキストで世界観を伝える
- 影は使わない。フラットデザインを維持
```
