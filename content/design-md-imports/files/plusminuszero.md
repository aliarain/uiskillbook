# DESIGN.md — ±0（プラスマイナスゼロ）

> ±0 公式サイト（https://www.plusminuszero.jp/）のデザイン仕様書。
> 深澤直人がデザインアドバイザーを務めるプロダクトブランド。加湿器・コンパクト掃除機・電卓など、生活に「ちょうどいい」家電・日用品を展開。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 商品写真をシンプルなグレー背景で淡々と並べる、徹底的にニュートラルな EC カタログ。深澤直人の「これはアフォーダンスである」という思想を Web レイアウトに翻訳した、装飾を排した設計
- **密度**: 商品グリッドは中密度。1 カードに「商品名 / 価格 / カラーバリエーション」だけを配し、ノイズを徹底排除
- **キーワード**: ニュートラル、グレー、アフォーダンス、薄い、控えめ、商品写真主役
- **特徴**: WordPress（ブロックエディタ）ベースのサイト。**ブランドアクセントは唯一 `#0999d8`（明るい水色）**で、CTA「詳しく見る・購入する」だけに使われる。本文は **12px / weight 300（Light）** という小さく薄い文字で構成され、商品が主役であることを徹底している。プロダクト本体の色（金 `#bda730` / シルバー `#c4c4c3` / 銅 `#a77b3d`）はサイト UI ではなく、商品サムネに登場するカラーバリエーションとして現れる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー — 1 色だけ）

- **Plus Minus Blue** (`#0999d8`): 唯一の UI アクセント。CTA「詳しく見る・購入する」のフラットボタン背景。**hover で水色 → 同色維持で塗りはほぼ動かない**

### Text

- **Text Primary** (`#444444`): 本文・見出しの基本色。**純黒は使わない**
- **Text on Blue** (`#ffffff`): 青 CTA の上の文字
- **Text Heading** (`#444444`): h3 の見出しも本文と同色（コントラストを抑え、商品写真と等価に扱う）

### Surface（面色）

- **Background White** (`#ffffff`): ページ標準背景
- **Surface Pale Gray** (`#f0f0f0`): カテゴリナビ背景・「商品一覧」「掃除」などのタブ
- **Surface Footer Dark** (`#444444`): フッター背景

### Product Color Variants（商品本体の色）

サイト上の UI には登場しないが、商品サムネで頻出する**プロダクトのカラーバリエーション**:

- **Brass Gold** (`#bda730`): 真鍮系の金。電卓・テーブルライト等
- **Stainless Silver** (`#c4c4c3`): シルバー系。基本色
- **Copper** (`#a77b3d`): 銅色。家電の限定色

### CSS Custom Properties

WordPress のプリセットがそのまま残っている（実 UI ではほぼ未使用）:

- `--wp-block-synced-color: #7a00df`（紫、未使用）
- `--wp-admin-theme-color: #007cba`（管理画面の青、未使用）
- `--wp--preset--font-size--normal: 16px`
- `--wp--preset--font-size--huge: 42px`

> **Note**: ±0 の UI は事実上**「白 + グレー + 唯一のブランド水色」の 3 色構成**で、プロダクト写真をフラットに並べる EC として最小限の装飾しか持たない。WordPress のプリセット紫（`#7a00df`）は実 UI には現れない。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（唯一）**:
- Noto Sans Japanese（最優先、Google Fonts）
- ヒラギノ角ゴ ProN W3（macOS フォールバック）
- メイリオ（Windows フォールバック）

### 3.2 欧文フォント

- **欧文専用フォントの指定なし**。Noto Sans Japanese の欧文グリフをそのまま使用

### 3.3 font-family 指定

```css
/* 本文・UI 全般 */
font-family: "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **和文を最優先**（Noto Sans Japanese → ヒラギノ → メイリオ）
- 欧文の独立指定はせず、和文フォント内蔵の欧文グリフに任せる
- フォント名は「ヒラギノ角ゴ ProN W3」「メイリオ」と**日本語名と英語名の両方**を併記する（古い IE / Windows 環境への配慮）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Color | 用途 |
|------|------|------|--------|-------------|-------|------|
| Body | Noto Sans JP | **12px** | **300** | 18px (1.5) | #444444 | 本文・キャプションすべて |
| Heading (h3) | Noto Sans JP | 20px | 700 | 30px (1.5) | #444444 | カード見出し |
| Caption (h4 white) | Noto Sans JP | 16px | 400 | 24px (1.5) | #ffffff | バナー上テキスト「コンパクト衣類乾燥機の使い方」 |
| Link / Tab | Noto Sans JP | 12px | 300–700 | 18px (1.5) | #444444 | カテゴリナビ「商品一覧」 |
| Heading Hidden | Noto Sans JP | 0px | 700 | 0px | #444444 | h1 はアクセシビリティ用（visually hidden） |

### 3.5 行間・字間

- **本文の行間 (line-height)**: **1.5（12px ÷ 18px）**。小さい本文に対して標準的な余白
- **見出しの行間**: 1.5（20px ÷ 30px）。本文と統一
- **letter-spacing**: **`normal`（0）を維持**。詰めも開きもない
- **font-feature-settings**: `normal`。**palt は不使用**

> **特徴**: ±0 の文字は **12px / Weight 300（Light）** という思い切って小さく軽いベース文字を採用している。これは「文字よりも商品写真を見て」というメッセージで、**家電カタログのような中立性**を作る設計。

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
```

特別な指定はなし。商品名は短いため禁則の影響を受けにくい。

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

**palt 不使用**。フォントの素のメトリクスで組む。

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons — 唯一の青いフラット CTA

**Primary CTA (角丸なし、フラット)**
- Background: `#0999d8`
- Text: `#ffffff`
- Border: なし
- Border Radius: **`0px`**（角張った長方形）
- Padding: `5px 0px`
- Font Size: 12–14px
- Font Weight: 400
- 例: 「詳しく見る・購入する」

> **Don't**: ±0 には pill ボタンや outline ボタンが**存在しない**。CTA は常に青フラット長方形のみ。

### Cards

- Background: `#ffffff`
- Border: 微細な区切り線、または商品写真直下のキャプションのみ
- Border Radius: `0px`（カードは四角）
- Padding: 控えめ（写真がはみ出すように配置）
- 内部の見出し: `#444444` / 20px / 700

### Tabs / Category Nav

- Background: `#f0f0f0`
- Text: `#444444`
- Border Radius: `0px`
- 例: 「商品一覧」「掃除」「キッチン」のような商品カテゴリ

### Footer

- Background: `#444444`
- Text: 白系グレー（#cccccc 程度を想定）
- リンクは下線なしの控えめなテキスト

---

## 5. Layout Principles

### Spacing Scale

実測ベースの推定（small density）:

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 12px |
| L | 20px |
| XL | 40px |
| XXL | 80px |

### Container

- 1 カラムの中央寄せ（max-width: ≈ 1100px）
- 商品グリッドは 4 カラム（デスクトップ）

### Grid

- 商品一覧: 4 カラム × 複数行のフラットグリッド
- 各セルは「商品写真 / 商品名 / 価格 / 詳しく見る・購入する CTA」のみ
- グリッド間のガターは控えめ（≈ 16–24px）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（影は使わない） |
| 1 | 商品写真の薄い影（写真自体に焼き込み） | プロダクト撮影で表現 |

> **特徴**: ±0 は **CSS のドロップシャドウを一切使わない**。商品写真の中に陰影が焼き込まれており、UI 側はフラットに保つ。

---

## 7. Do's and Don'ts

### Do（推奨）

- 文字サイズは **本文 12px / weight 300** を基本にする
- 文字色は **`#444444`** で純黒は避ける
- CTA は **`#0999d8`（青）の角丸 0px フラット長方形のみ**
- 商品写真を主役にし、UI は徹底して脇役にする
- フォントは Noto Sans Japanese を最優先

### Don't（禁止）

- **純黒 `#000000` を使わない**
- **pill ボタン / outline ボタンを作らない**（±0 のテイストから外れる）
- ドロップシャドウで強い陰影を作らない
- palt / letter-spacing を強制しない（フォントのデフォルトで組む）
- 紫 `#7a00df`（WordPress プリセット）は UI に使わない（プリセット由来で実サイトでは使われていない）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1–2 カラム、ナビは収納 |
| Tablet | ≤ 1024px | 商品グリッドが 3 カラム |
| Desktop | > 1024px | 商品グリッドが 4 カラム |

### タッチターゲット

- 最小サイズ: 44px × 44px（CTA は padding と font-size で確保。本文 12px 自体はサイズ規格に達しないため、タップ領域は親要素で確保）

### フォントサイズの調整

- モバイルでは本文を 12px のまま据え置き、見出しは 20px → 16–18px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color:       #0999d8（唯一のブランド水色）
Text Primary:        #444444（純黒は使わない）
Background:          #ffffff
Surface (Tab/Nav):   #f0f0f0
Footer:              #444444
Body Font:           "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif
Body Size:           12px / weight 300
Heading Size:        20px / weight 700
Line Height:         1.5
Letter Spacing:      normal (0)
CTA Style:           #0999d8 フラット長方形（border-radius 0）
```

### プロンプト例

```
このサービスのデザインシステム（±0 / プラスマイナスゼロ風）に従って、
プロダクトカタログの一覧ページを作成してください。

- 背景: 白 #ffffff
- カードは正方形に近い長方形、border-radius 0、ボーダーなし
- 商品写真を最大化し、テキストは最小限：
  - 商品名: 20px / weight 700 / color #444444
  - 価格・キャプション: 12px / weight 300 / color #444444
  - CTA: 「詳しく見る・購入する」/ background #0999d8 / color #fff / border-radius 0 / padding 5px 0
- 文字色は純黒ではなく #444444 を使う
- フォント: "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", メイリオ, sans-serif
- palt / letter-spacing は使わず、ニュートラルなフォントメトリクスで組む
- ドロップシャドウは使わず、商品写真の焼き込み陰影のみ
- pill ボタン・カラフルな装飾は使わない（深澤直人の中立性を保つ）
```
