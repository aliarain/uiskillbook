# DESIGN.md — SAKE HUNDRED

> SAKE HUNDRED（https://sake100.com/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。ラグジュアリー日本酒ブランドの EC サイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 明朝体とゴシック体の二軸構成で、ラグジュアリーかつ和の品格を表現。オフホワイト背景にダークテキストの上品なコントラスト。Optima を欧文見出しに採用し、和洋が融合した格式ある佇まい
- **密度**: ゆったりとした大きな余白。プロダクトを主役にした贅沢なレイアウト
- **キーワード**: ラグジュアリー、和の品格、明朝体、プレミアム、静寂
- **特徴**: CSS Custom Properties で全デザイントークンを管理する Shopify テーマ。見出しに游明朝 + Optima、本文に游ゴシック Medium という二軸フォント構成。全体に `palt` を適用した緻密な字詰め

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Dark** (`#1c1b1b`): ボタン背景、ナビゲーション背景、CTA。ブランドの主要色
- **Navy** (`#111c4d`): アクセント背景（フッター近辺のセクション等）

### Neutral（ニュートラル）

- **Text Primary** (`#1c1b1b`): 見出し・本文テキスト（`--heading-color`, `--text-color`）
- **Text Secondary** (`#6a6a6a`): 補足テキスト、リンク、フッターテキスト（`--text-color-light`）
- **Background** (`#f9f8f6`): ページ背景（温かみのあるオフホワイト）
- **Background Light** (`#ffffff`): セクション背景（`--light-background`）
- **Border** (`#cfcfcf`): 区切り線（`--border-color`）
- **Header Border** (`#dddddd`): ヘッダー区切り（`--header-border-color`）
- **Footer Border** (`#e9e9e9`): フッター区切り（`--footer-border-color`）

### Semantic（意味的な色）

- **Sale** (`#f94c43`): セール価格（`--product-sale-price-color`）
- **Star Rating** (`#f6a429`): 評価の星（`--product-star-rating`）

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文）**:
- 游ゴシック Medium / Yu Gothic Medium（`--text-font-family`）

**明朝体（見出し）**:
- 游明朝 / YuMincho / ヒラギノ明朝 ProN W3（`--heading-font-family`）

### 3.2 欧文フォント

- **セリフ（見出し）**: Optima（見出しの欧文表記に使用。游明朝の前に指定）
- **サンセリフ**: sans-serif（フォールバック）
- **セリフフォールバック**: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman

### 3.3 font-family 指定

```css
/* 見出し（--heading-font-family） */
font-family: 游明朝, YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3",
             "Hiragino Mincho ProN", HG明朝E, "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;

/* 見出し欧文（Optima 優先） */
font-family: optima, 游明朝, YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3",
             "Hiragino Mincho ProN", HG明朝E, "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;

/* 本文（--text-font-family） */
font-family: "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic,
             "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- 見出しは明朝体。和の品格を表現。欧文は Optima を先に指定し、洗練された印象を加える
- 本文はゴシック体。游ゴシック Medium を指定して適度なウェイトを確保
- Windows 環境では游ゴシック Medium の指定が重要（通常の游ゴシックは細く見える問題を回避）

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Title (h2) | 游明朝 | 30px | 500 | 45px (x1.5) | 0.455px | セクション見出し「Collection」等 |
| Section Title (h2, Optima) | Optima + 游明朝 | 30px | 400 | 36px (x1.2) | 0.455px | 「Limited Collection」等の欧文見出し |
| Section Sub (h2, ja) | 游明朝 | 21px | 500 | 33px (x1.57) | 0.455px | 「ニュースレターを受け取りませんか」等 |
| Body | 游ゴシック Medium | 14px | 400 | 21px (x1.5) | 0.455px | 本文テキスト（`--base-text-font-size`） |
| CTA Link | 游ゴシック Medium | 14px | 400 | 14px (x1.0) | 0.455px | 「詳しくはこちら」等のボタンテキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文: `21px` (14px x **1.5**)
- 明朝見出し: `45px` (30px x **1.5**)
- Optima 見出し: `36px` (30px x **1.2**)
- サブ見出し: `33px` (21px x **1.57**)

**字間 (letter-spacing)** — 実測値:
- 全要素: `0.455px`（14px 基準で **0.033em** 相当）— サイト全体で統一的に適用

**ガイドライン**:
- 全体的に 0.455px の字間が適用されている。品格のある字詰めを実現
- 明朝体見出しは line-height: 1.5 で余裕のある行間
- Optima 見出しは line-height: 1.2 でタイトな行間

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体で palt を適用 */
font-feature-settings: "palt";
```

- **palt**: body レベルで適用。全テキストにプロポーショナル字詰め
- 明朝体見出しにも palt が適用される。品格のある字詰めを実現

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（アウトラインスタイル）**
- Background: `transparent`
- Text: `#000000`
- Border: 1px solid `#000000`
- Padding: 18.375px 0px（横幅は親要素に依存）
- Border Radius: 0px（角丸なし、シャープな矩形）
- Font Size: 14px
- Font Weight: 400

**Navigation Button（ダーク背景）**
- Background: `#1c1b1b`（`--button-background`）
- Text: `#ffffff`（`--button-text-color`）
- Border Radius: 0px

### Inputs

- 詳細は未確認（EC ページのニュースレター登録フォーム等で使用）

### Cards

- 背景: `#ffffff` or `#f9f8f6`
- Border: なし
- Border Radius: なし（角丸なし、シャープなデザイン）
- Padding: 大きめの余白

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 32px |
| XL | 60px（`--horizontal-spacing-four-products-per-row`） |
| XXL | 75px（`--vertical-spacing-two-products-per-row`） |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 40px（推定）

### Grid

- Columns: 4（プロダクトグリッド）
- Gutter: 60px（`--horizontal-spacing-four-products-per-row`）
- 2カラム時 Gutter: 60px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 基本的にフラットデザイン |

- サイト全体がフラットで、シャドウは極力使わない
- 色面（ダーク背景セクション）の切り替えで奥行きを表現
- ヘッダー高さ: `80px`（`--header-base-height`）、スティッキー対応

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しには必ず明朝体（游明朝）を使う。欧文見出しには Optima を先に指定
- 本文には游ゴシック Medium を使う。Windows での太さ問題を回避するため「Medium」を明示
- ボタンは角丸なし（radius: 0px）のシャープなスタイル。アウトラインボタンが基本
- 全テキストに `font-feature-settings: "palt"` を適用して品格のある字詰めを実現
- ページ背景は `#f9f8f6` の温かみのあるオフホワイト
- letter-spacing は `0.455px`（0.033em 相当）を全体に適用
- CTA 背景は `#1c1b1b` のほぼ黒。白テキストとのコントラストで高級感を出す
- ダークセクションの背景は `#1c1b1b` or `#111c4d`

### Don't（禁止）

- 見出しにゴシック体を使わない（明朝体が必須）
- ボタンに角丸を付けない（シャープな矩形がブランドの特徴）
- palt を無効にしない（全体的に適用されている）
- 鮮やかな色を使わない（ダークトーンとオフホワイトの落ち着いた配色を維持）
- 純白 `#ffffff` をページ背景に使わない（`#f9f8f6` の温かみを保つ）
- 派手なシャドウや装飾を使わない（フラットでミニマルな美学を守る）
- 游ゴシックを「Medium」なしで指定しない（Windows で細く見える問題を避ける）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 999px | タブレットレイアウト |
| Desktop | > 999px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは見出し 21px に縮小（デスクトップ 30px の 70%）
- 本文 14px は維持
- プロダクトグリッドは 2カラムに変更

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Dark (CTA/Nav): #1c1b1b
Navy Accent: #111c4d
Sale Price: #f94c43
Star Rating: #f6a429

Text Primary: #1c1b1b
Text Secondary: #6a6a6a
Background: #f9f8f6（温かみのあるオフホワイト）
Surface: #ffffff
Border: #cfcfcf

Heading Font: 游明朝, YuMincho, "Hiragino Mincho ProN W3", serif
Heading EN Font: optima, 游明朝, ..., serif
Body Font: "游ゴシック Medium", "Yu Gothic Medium", 游ゴシック体, YuGothic, sans-serif

Heading Size: 30px / 500 / line-height: 1.5
Body Size: 14px / 400 / line-height: 1.5
Letter Spacing: 0.455px (全体)
palt: あり（全体適用）

Button: outline / border 1px solid #000 / radius 0px
CTA Button: bg #1c1b1b / white / radius 0px
```

### プロンプト例

```
SAKE HUNDRED のデザインに従って、プロダクト一覧ページを作成してください。
- 見出しフォント: 游明朝, YuMincho, serif（欧文には Optima を先に指定）
- 本文フォント: "游ゴシック Medium", "Yu Gothic Medium", sans-serif
- テキスト色: #1c1b1b
- 補足テキスト: #6a6a6a
- ページ背景: #f9f8f6（温かみのあるオフホワイト）
- ボタン: アウトライン、border 1px solid #000、角丸なし
- CTA: bg #1c1b1b, 白テキスト、角丸なし
- 全体に font-feature-settings: "palt" を適用
- letter-spacing: 0.455px
- 本文: 14px, line-height: 1.5
- 見出し: 30px, 500, 游明朝
```
