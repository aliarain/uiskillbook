# DESIGN.md — 吉田カバン / YOSHIDA & Co. (PORTER)

> 吉田カバン（YOSHIDA & Co.）公式サイト（https://www.yoshidakaban.com/）のデザイン仕様書。
> PORTER / LUGGAGE LABEL / B印 YOSHIDA 等、同社の主力ブランドを統括する公式コーポレートサイト。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1935 年創業の老舗カバンメーカーらしい、徹底して職人的・カタログ的なミニマリズム。装飾を排し、黒・白・グレースケールだけで構成
- **密度**: 情報密度がきわめて高い。本文 12px、商品サムネキャプション 10px と日本語サイトの中でも最小級。プロのバイヤー向けカタログを意識した構成
- **キーワード**: ミニマル、モノクローム、Helvetica、職人、カタログ、密度高
- **特徴**: **すべての CTA / カード / 入力欄が `border-radius: 0px`**（完全に角張った設計）。色は #000 / #fff / #333 / #dddddd / #f2f2f2 / #b4b4b4 のグレースケール 6 色のみで構成。英語の見出しに **Helvetica Neue（700）** を使い、和文見出しと差をつける

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **PORTER Black** (`#000000`): すべてのテキストと黒地の主役。**純黒（pure black）を使う数少ないブランド**
- **PORTER Gray Dark** (`#333333`): ヘッダー・ナビ背景。「Navigation」「人気の検索ワード」エリア
- **PORTER Gray Mid** (`#444444`): フォーカステキスト・検索ボタンのテキスト
- **PORTER Gray** (`#666666`): 言語切替・サブテキスト

### Surface（面色）

- **Background** (`#ffffff`): ページ背景
- **Surface Light Gray** (`#dddddd`): 大量に使われる中間グレー（カテゴリラベル背景・特集背景）
- **Surface Pale Gray** (`#f2f2f2`): 「バックパック」「トートバッグ」などのラベルピル背景
- **Surface Section** (`#f0f0f0`): セクション背景（「すべてのアイテム」「ストア一覧」等）
- **Surface Mid Gray** (`#b4b4b4`): 「すべて見る」CTA の塗りつぶし背景
- **Surface Input** (`#efefef` / `#eaeaea`): 検索ボックスの背景
- **Surface Translucent** (`rgba(204,204,204,0.3)`): 編集記事カードの薄い背景

### Accent（アクセント — ごくわずか）

- **PORTER Orange** (`#ff9e5e`): キャンペーンバッジ等で使われる唯一の暖色アクセント

### Text

- **Text Primary** (`#000000`): 本文・見出しすべて純黒
- **Text Inverse** (`#ffffff`): 黒地上のテキスト
- **Text Muted** (`#b4b4b4`): 商品カテゴリラベル「RUCKSACK」「TOTE」等の英語キャプション

> **Note**: 吉田カバンの UI に色相は存在しない。**完全グレースケール**（オレンジ系のキャンペーンを除く）。これは「商品（カバン本体）が主役」という思想の徹底。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- Noto Sans JP（Web フォント、最優先）
- ヒラギノ Sans / ヒラギノ角ゴ ProN（macOS フォールバック）
- メイリオ（Windows フォールバック）

### 3.2 欧文フォント

- **サンセリフ（h2 のみ）**: **Helvetica Neue → Helvetica → Arial**。英語の大見出し（CATEGORY / PRODUCTS 等）専用
- **本文の欧文**: Noto Sans JP の欧文グリフをそのまま使用（独立指定なし）

### 3.3 font-family 指定

```css
/* 本文・UI 全般 */
font-family: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;

/* 大見出し（h2 / 英語タイトル） */
font-family: "Helvetica Neue", Helvetica, Arial, "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 本文は和文フォントを最優先（Noto Sans JP → ヒラギノ Sans → ヒラギノ角ゴ ProN → メイリオ）
- 英語見出しは欧文フォントを最優先にし、和文がフォールバックに入る
- ヒラギノは **ProN（JIS2004 字形）** を採用（Pro ではない）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (h2 EN) | Helvetica Neue | 39px | 700 | 44.265px (1.135) | normal | 「CATEGORY」「PRODUCTS」等のセクション見出し |
| Logo (h1) | Noto Sans JP | 12px | 500 | 18px (1.5) | normal | サイト名の構造的見出し（視覚的にはロゴ画像） |
| Hero Heading | Noto Sans JP | 17px | 700 | 25.5px (1.5) | normal | 「RECOMMEND for YOU」等 |
| Sub Heading | Noto Sans JP | 15px | 400 | 22.5px (1.5) | normal | サムネタイトル |
| Nav Section Label | Noto Sans JP | 15px | 400 | 85px | normal | グローバルナビの「プロダクト」「ストア」 |
| Body | Noto Sans JP | 12px | 400 | 18px (1.5) | normal | サイト全般の本文 |
| Card Caption | Noto Sans JP | 12px | 500 | 15.6px (1.3) | normal | 商品名 |
| Card Sub Caption | Noto Sans JP | 11px | 400 | 16.5px (1.5) | normal | 商品コピー |
| Card Brand Tag | Noto Sans JP | 10px | 700 | 12px (1.2) | normal | 「PORTER / EXTREME」等のブランド冠ラベル |
| Card Category EN | Noto Sans JP | 10px | 700 | 10px (1.0) | normal | 「RUCKSACK」「TOTE」等の英字カテゴリ（color #b4b4b4） |
| Price | Noto Sans JP | 10px | 700 | 13.5px (1.35) | normal | 「¥57,200」等の価格 |
| Link | Noto Sans JP | 11–13px | 400–700 | normal | normal | フッター・ナビリンク |

### 3.5 行間・字間

- **本文の行間**: **1.5**。日本語サイトとしては標準的（サンリオの 1.8 等とは異なり、より引き締まった印象）
- **見出しの行間**: 1.13–1.5。h2（Helvetica Neue 39px）は 1.13 とややタイト
- **letter-spacing**: 全要素で `normal`（吉田カバンは字間調整を行わない）
- **本文の字間**: `letter-spacing: normal`

**ガイドライン**:
- 本文は 12px / line-height 1.5 がベース。情報密度を最大化する設計
- 大見出しは Helvetica Neue 700 で英語表記、和文よりも明らかに大きく扱う
- ベタ組みを基本とし、字間は調整しない

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
word-break: normal;
```

- 商品名（PORTER / TANKER 等）はモデル名 + サイズ表記が長くなるため `overflow-wrap` で折り返す
- 価格・型番は折り返さない

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt は使わない**。職人的なベタ組みを維持
- カーニング `kern` も明示指定なし

### 3.8 縦書き

- 該当なし（全面横書き）

---

## 4. Component Stylings

### Buttons

**Primary CTA（すべて見る / 現在地から探す）**
- Background: `#b4b4b4`
- Text: `#ffffff`
- Padding: `0 10px`
- Border Radius: **0px**（角張り）
- Font Size: 12–13px / Weight 400–700

**Secondary Button（登録 / 検索送信）**
- Background: `#ffffff`
- Text: `#444444`
- Border: 1px solid `#dddddd`
- Padding: `10px`
- Border Radius: **0px**

**Search Submit (small)**
- Background: `#efefef`
- Text: `#444444`
- Padding: `1px 6px`
- Border Radius: **0px**
- Font Size: 11px

**Tag / Category Pill**
- Background: `#f2f2f2`
- Text: `#000000`
- Padding: `0 12px`（推定）
- Border Radius: **0px**
- Font Size: 12px / Weight 400

### Inputs

- Background: `#efefef` / `#eaeaea`
- Border: なし、または 1px solid `#dddddd`
- Border Radius: **0px**
- Padding: `8px 12px`
- Font Size: 12px / Weight 400

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: **0px**（カードに角丸を一切使わない）
- Padding: 0（画像直下に密接にキャプション）
- Shadow: なし（フラット）

### Badges

- 商品ラベル「PORTER / EXTREME」: 10px Bold、純黒
- カテゴリラベル「RUCKSACK」: 10px Bold、color `#b4b4b4`、英大文字
- 価格「¥57,200」: 10px Bold、純黒、line-height 1.35

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンとラベルの間 |
| S | 8px | カード内の細かい間 |
| M | 12px | カードキャプション間隔 |
| L | 18px | セクション内ブロック間 |
| XL | 24px | セクション間 |
| XXL | 40–60px | メジャーセクション間 |

### Container

- Max Width: 約 1280px（実測ベース）
- Padding (horizontal): 16〜24px
- グローバルナビ・ヘッダーは 100vw（黒バー: #333333）

### Grid

- 商品サムネ: 4 カラムまたは 5 カラム
- カテゴリリスト: 6 カラム以上の横スクロール併用
- ガッターは 4–8px と狭め（情報密度を確保）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全要素（フラット運用が原則） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | スティッキーヘッダー / モーダル時のみ |

> 吉田カバンはシャドウを実質使わない。階層は色面（#fff / #f0f0f0 / #dddddd / #333）の差で表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文は `"Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif` のチェーンで指定
- 英語の大見出しは `"Helvetica Neue", Helvetica, Arial, [和文フォールバック]` でフォントを切り替える
- すべての UI 要素は **`border-radius: 0px`**。角丸は使わない
- 配色は #000 / #ffffff / #333 / #dddddd / #f2f2f2 / #b4b4b4 のグレースケール 6 色に絞る
- テキストには **純黒（#000000）** を使う（吉田カバンは数少ない純黒運用ブランド）
- 本文は 12px / line-height 1.5 と引き締まったサイズで情報密度を確保する
- `letter-spacing: normal` を厳守（字間調整は職人気質に反する）
- 商品サムネキャプションは 10px Bold まで小さくしてカタログ感を出す

### Don't（禁止）

- 角丸を使わない。pill や rounded card は吉田カバンのデザインに反する
- カラフルな色を使わない（オレンジ #ff9e5e のキャンペーンバッジを除く）
- 大きな box-shadow / drop-shadow を使わない（フラット原則）
- 本文を 14px 以上に膨らませない（カタログの密度感が失われる）
- ヒラギノ Pro ではなく **ProN** を指定（吉田カバンは ProN 指定）
- `palt` などの字詰め機能を使わない（ベタ組み原則）
- グラデーションや透明背景の装飾を使わない（職人的な面色運用に反する）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイル（1〜2 カラム） |
| Tablet | 768–1023px | 3 カラム |
| Desktop | ≥ 1024px | 4–5 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px（モバイル時のみ。デスクトップでは小さなリンクが多い）

### フォントサイズの調整

- モバイルでも本文は 12px を維持（情報密度優先）
- 大見出し h2（Helvetica Neue 39px）はモバイルで 24–28px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Black: #000000 (純黒を使用)
Background: #ffffff
Header BG: #333333 (テキスト白)
Surface Light: #f2f2f2
Surface Section: #f0f0f0
Mid Gray Button BG: #b4b4b4
Surface Pale: #dddddd
Text Muted: #b4b4b4
Accent Orange (rare): #ff9e5e
Font (Body): "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
Font (Display EN): "Helvetica Neue", Helvetica, Arial, [上記和文フォールバック]
Body Size: 12px / Weight 400 / line-height 1.5 / letter-spacing normal
Display: 39px / Weight 700 / line-height 1.13 (Helvetica Neue)
Border Radius: 0px (すべて角張り)
Shadow: なし
```

### プロンプト例

```
吉田カバン（PORTER）のデザインシステムに従って、商品カタログページを作成してください。
- 背景: #ffffff、テキスト: #000000（純黒を使用）
- 本文フォント: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif
- 英語大見出し（CATEGORY、PRODUCTS）は "Helvetica Neue", Helvetica, Arial の Bold 39px
- 本文は 12px / line-height 1.5 / letter-spacing normal（情報密度重視のベタ組み）
- すべての CTA・カード・入力欄は border-radius: 0px（角丸禁止）
- 配色は #000 / #ffffff / #333 / #dddddd / #f2f2f2 / #b4b4b4 のグレースケール 6 色のみ
- 商品サムネは枠線なし・シャドウなしのフラット表示
- 商品キャプションは「PORTER / EXTREME」（10px Bold 黒）+「RUCKSACK」（10px Bold #b4b4b4）+ 価格「¥57,200」（10px Bold 黒）の階層で組む
- 「すべて見る」CTA は bg #b4b4b4 / text #ffffff / radius 0px / padding 0 10px
- ヘッダーバーは bg #333333 / テキスト白
- カラフルな色や角丸、シャドウは使わない（職人的なミニマリズムを維持）
```
