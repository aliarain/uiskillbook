# DESIGN.md — MOHEIM（モハイム）

> MOHEIM（モハイム / https://moheim.com/ ・オンラインストア https://store.moheim.com/）のデザイン仕様書。
> 「世界一美しいゴミ箱」と評された SWING BIN から始まった、日本のミニマル・ライフスタイルプロダクトブランド。
> 芦沢啓治、竹内紘三らが参加し、用と美を両立した普遍的（timeless）なデザインを掲げる。
> 最大の特徴は **温かみのあるオフホワイト（#f1f2ee）の余白** と **全大文字（uppercase）の欧文タイポグラフィ**。
> 実サイト（Shopify）の computed style 実測（2026-06-27 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **オフホワイト地（#f1f2ee）× ニアブラック（#1a1311）** のモノクロームを基調にした、静謐でミニマルなプロダクト・ギャラリー。色をほぼ使わず、余白・写真・素材感で語る。日本のミニマリズムと「用の美」を体現する
- **MOHEIM について**: テーブルウェアから家具まで、暮らしと空間のためのプロダクトを手がけるブランド。ミニマルでシンプル、無駄を削ぎ落とした構造が共通言語。職人技とサステナビリティを重視し、流行に左右されない普遍的な美を目指す
- **密度**: 低密度。大きな余白、ゆったりした写真グリッド、抑制された文字量。プロダクトを主役にする editorial / gallery 寄りの構成。本文 line-height は 1.65
- **キーワード**: オフホワイト #f1f2ee、ミニマル、uppercase、余白、モノクローム、TT Commons、Yu Gothic、静謐、timeless
- **特徴**:
  - 基調は **温かみのあるオフホワイト #f1f2ee × ニアブラック #1a1311**。純白・純黒は避け、わずかに温度のあるグレー寄りの色を使う
  - 欧文見出し・ナビは **全大文字（uppercase）** が原則（`--heading-text-transform: uppercase`）。字間（letter-spacing）を広めに取りプロダクト名を端正に見せる
  - 欧文は **TT Commons Pro**（幾何学的ヒューマニストサンセリフ、Adobe Fonts）、和文は **游ゴシック Medium**。チェーンは `"tt-commons-pro", 'Yu Gothic Medium', sans-serif`
  - 見出しのウェイトも控えめ（`--heading-font-weight: 400`）。太字で主張せず、サイズと余白で階層を作る
  - CTA は **塗りつぶさないアウトライン主体**。"VIEW MORE" / "SUBSCRIBE" は透明地＋細いグレー枠（border 1px #9da69f）、写真上では白文字。商品の "Add to cart" は白地
  - アクセント色はほぼ持たず、機能色（セール赤 #e32c2b 等）のみ最小限に使う
  - 全体に **角丸はほぼ 0**（radius 0〜2px）。直線的でシャープな面構成

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。基調はオフホワイト×ニアブラックのモノクローム。すべて hex 表記。

### Brand / Core

- **Background (Off-White)** (`#f1f2ee`): ページ背景・メインキャンバス（body 実測）。わずかに緑みを帯びた温かいオフホワイト
- **Surface (Light)** (`#efefef` / `#ecece9`): セクション面・スライドショー地。背景よりわずかに明るい/暗いトーンで面を分ける
- **Text / Ink (Near-Black)** (`#1a1311`): 本文・見出しの基本テキスト色。赤みを帯びた温かいニアブラック（純黒は使わない）
- **Ink (Cool)** (`#161a14`): 大見出し・強調見出しのテキスト（わずかに緑みのある黒）
- **Pure Black** (`#000000`): モーダル・同意ボタンの枠線、最小限の強コントラスト用

### Neutral / Grey

| Role | hex | 用途 |
|------|-----|------|
| Text Primary | `#1a1311` | 本文・見出し |
| Text Heading | `#161a14` | 大見出し |
| Text Muted | `#959595` | キャプション・カテゴリラベル・補助 |
| Border (Light) | `#d1d1cd` | 商品カードの区切り・入力枠 |
| Border (Outline CTA) | `#9da69f` | アウトライン CTA の枠線 |
| Surface Dark | `#7e807c` | ダーク帯（"VISIT TO BRAND SITE" 等） |
| Deep Charcoal | `#1c1c1c` | 告知バー・反転面の地 |

### Semantic（Shopify テーマトークン実測）

- **Sale / Error** (`#e32c2b`): セール価格・エラー（`--on-sale-text: 227 44 43`）
- **Success** (`#307a07`): 成功・在庫あり（`--success-text: 48 122 7`）
- **Warning** (`#ed8a00`): 警告（`--warning-text: 237 138 0`）
- **On White (Text)** (`#ffffff`): ダーク帯・写真上のテキスト

---

## 3. Typography Rules

> 実サイトは Adobe Fonts の **TT Commons Pro** を欧文に、**游ゴシック Medium** を和文に使う。
> TT Commons Pro はドメインライセンスのため preview.html では表示できない。代替は後述。

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック Medium（`Yu Gothic Medium`） / 游ゴシック（`YuGothic`）
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ**: TT Commons Pro（`tt-commons-pro`）— 幾何学的ヒューマニストサンセリフ。見出し・ナビ・本文すべてに使用

### 3.3 font-family 指定

```css
/* 本文・見出し・ナビ 共通（実測） */
font-family: "tt-commons-pro", 'Yu Gothic Medium', sans-serif;
```

- **CSS 変数**: `--heading-font-family` / `--text-font-family` ともに `"tt-commons-pro", 'Yu Gothic Medium', sans-serif`
- **フォールバックの考え方**: 欧文 TT Commons Pro を先頭に置き、欧文グリフの印象を優先。和文は游ゴシック Medium に委ねる。欧文優先型のチェーン

**preview.html での代替フォント**:
- TT Commons Pro → **Hanken Grotesk**（Google Fonts。幾何学的で字面が近いグロテスク）
- 游ゴシック Medium → **Noto Sans JP**（weight 500 で游ゴシック Medium の太さに寄せる）

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | TT Commons Pro | 67.5px | 700 | 1.65 | normal | "More Story," 等の大見出し |
| Heading 1 | TT Commons Pro | 28px | 700 | 1.65 | 2.5px (≈0.09em) | セクション見出し（uppercase） |
| Heading 2 | TT Commons Pro | 16.8px | 700 | 1.65 | normal | サブ見出し |
| Label / Lead | TT Commons Pro | 12px | 500 | 2.5 | 0.2px | カテゴリ・小見出し（uppercase） |
| Body | TT Commons Pro / Yu Gothic | 14px | 400 | 1.65 | normal | 本文 |
| Nav | TT Commons Pro | 12px | 400 | 1.7 | 2.16px (≈0.18em) | グローバルナビ（uppercase・字間広め） |
| Caption | TT Commons Pro | 12px | 400 | 1.65 | normal | 価格・カテゴリ #959595 |
| Small | TT Commons Pro | 11px | 400 | 1.65 | 1.98px | 告知・注記 |

- 見出しの基本ウェイトは 400（`--heading-font-weight: 400`）。実装上 H1/H2 に 700 が当たる箇所もあるが、ブランドの基調は軽め
- 欧文見出し・ラベル・ナビは **uppercase**（`--heading-text-transform: uppercase`）

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.65（14px / 23.1px）
- **見出しの行間**: 1.65（サイズ比一定。28px → 46.2px、67.5px → 111.375px）
- **本文の字間 (letter-spacing)**: 0em（`--text-letter-spacing: 0.0em`）
- **見出し・ラベルの字間**: 0.09〜0.18em（uppercase 欧文を端正に見せるため広めに取る。ナビは約 0.18em）

**ガイドライン**:
- 欧文を全大文字で組む箇所は letter-spacing を 0.08〜0.18em 取り、窮屈さを避ける
- 和文本文は line-height 1.65 を基準に、純白・純黒を避けたオフホワイト×ニアブラックで組む

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
```

- 行頭禁止: `）」』】、。・：；？！`
- 行末禁止: `（「『【`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は未指定 */
```

- 実測では `font-feature-settings: normal`。`palt` は適用していない
- 欧文の字間は letter-spacing で手動調整している

### 3.8 縦書き

該当なし。横書きのみ。

---

## 4. Component Stylings

### Buttons

**Primary（アウトライン・写真上）**
- Background: `transparent`
- Text: `#ffffff`（写真上）
- Border: 1px solid `#9da69f`
- Padding: 10.4px 28px
- Border Radius: `0px`
- Font Size: 13px
- Font Weight: 400 / uppercase（"VIEW MORE", "SUBSCRIBE"）

**Secondary（商品カード）**
- Background: `#ffffff`
- Text: `#1c1c1c`
- Border: 1px solid `#d1d1cd`
- Padding: 10px
- Border Radius: `0px`
- Font Size: 14px（"Add to cart" / "Choose options"）

**同意・モーダル系**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Padding: 10px 25px
- Border Radius: `2px`

**カルーセル・ページャ**
- 円形ドット / 矢印は radius `9999px`（pill）。それ以外の CTA は角丸 0〜2px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#d1d1cd`
- Border Radius: `0px`〜`2px`
- Padding: 10px
- Font Size: 14px
- Font Family: `"tt-commons-pro", 'Yu Gothic Medium', sans-serif`

### Cards（商品）

- Background: `#ffffff` / オフホワイト面
- Border: なし、または 1px solid `#d1d1cd`
- Border Radius: `0px`
- 写真は正方形〜縦長で大きく、テキスト（商品名・価格）は下に小さく配置
- 余白を広く取り、影は使わない（フラット）

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 80px |

### Container

- Max Width: 約 1400px（ワイドな gallery グリッド）
- Padding (horizontal): 20〜40px

### Grid

- Columns: 商品グリッドは 3〜4 カラム（デスクトップ）
- Gutter: 16〜24px
- 大きな余白で各プロダクトを孤立させ、ギャラリーのように見せる

---

## 6. Depth & Elevation

> MOHEIM はほぼフラット。影を多用せず、面の色差（#f1f2ee / #efefef / #ecece9）で階層を表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 商品カード・セクション（基本フラット） |
| 1 | `0 1px 2px rgba(0,0,0,0.06)` | ドロップダウン・カート（控えめ） |
| 2 | `0 8px 24px rgba(0,0,0,0.10)` | モーダル・ドロワー |

---

## 7. Do's and Don'ts

### Do（推奨）

- 背景はオフホワイト #f1f2ee、テキストはニアブラック #1a1311 を使い、純白・純黒は避ける
- 欧文見出し・ナビは uppercase ＋ letter-spacing 0.08〜0.18em で端正に組む
- 余白を大きく取り、プロダクト写真を主役にする
- 角丸は 0〜2px に抑え、直線的でシャープな面を保つ
- 色はモノクロームを基調に、機能色（セール赤等）のみ最小限に使う

### Don't（禁止）

- 鮮やかなブランドカラーや装飾的なグラデーションを足さない（ミニマルな世界観が崩れる）
- 見出しを極太（800/900）にしない（基調ウェイトは 400〜700）
- 影を多用して立体的にしない（フラットが基本）
- 情報を詰め込まない（余白こそがデザイン）
- 和文フォントを 1 つだけ指定しない（必ず欧文→游ゴシックのチェーンを書く）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | 1〜2 カラム、ナビはドロワー |
| Tablet | 750–989px | 2〜3 カラム |
| Desktop | ≥ 990px | 3〜4 カラムのギャラリーグリッド |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- 見出しは `clamp()` で可変（`--text-h1: clamp(1.375rem, …, 2rem)`）。モバイルで自動縮小
- 本文はモバイルでも 14px を基準に保つ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #1a1311 (Near-Black / Ink)
Background: #f1f2ee (Off-White)
Surface: #efefef / #ecece9
Accent (functional only): #e32c2b (Sale)
Font: "tt-commons-pro", 'Yu Gothic Medium', sans-serif  /* 代替: "Hanken Grotesk", "Noto Sans JP" */
Body Size: 14px
Line Height: 1.65
Heading: uppercase / letter-spacing 0.09em / weight 400-700
Radius: 0-2px
```

### プロンプト例

```
MOHEIM のデザインシステムに従って、プロダクト一覧ページを作成してください。
- 背景: #f1f2ee（オフホワイト）、テキスト: #1a1311（ニアブラック）。純白・純黒は使わない
- フォント: "tt-commons-pro", 'Yu Gothic Medium', sans-serif（代替 Hanken Grotesk + Noto Sans JP）
- 欧文見出し・ナビは uppercase、letter-spacing 0.09〜0.18em
- 商品グリッドは 3〜4 カラム、大きな余白、角丸 0px、影なしのフラット
- CTA は透明地＋細枠（1px #9da69f）のアウトライン主体、本文は line-height 1.65
- 色はモノクローム。セール表示のみ #e32c2b を使う
```
