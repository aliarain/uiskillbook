# DESIGN.md — TENERITA（テネリータ）

> TENERITA 公式オンラインストア（https://www.tenerita.com/）のデザイン仕様書。
> オーガニックコットン専門ブランド。国際認証GOTSを取得した最高品質のタオル・寝具・ウェアを展開。
> "ゆたか" であること、"上質" であること — ブランドコンセプトがそのままサイトの空気感に。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 明朝体の見出しとゴシック体の本文を組み合わせた「上質な和」のエディトリアル。オーガニックの温かみをオリーブ色とベージュで表現
- **密度**: 情報密度は低め。大きなスライドショーと余白で、ホテルのロビーのような落ち着きを演出
- **キーワード**: 上質、オーガニック、明朝体、オリーブ、温かみ
- **特徴**: **見出しに Noto Serif Japanese（明朝体）、本文に Noto Sans Japanese（ゴシック体）** の二書体構成。見出しの letter-spacing 0.1em が品格を生む。ブランドカラーはオリーブ（`#808000`）で自然素材の落ち着きを表現。CTAはアウトラインのテキストボタンが基本

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Olive** (`#808000`): ブランドのアクセントカラー。カルーセル矢印、テキストリンク等に使用。オーガニックコットンの「自然」を象徴
- **Gold Light** (`#f5db8b`): カルーセルナビのテキスト色（Olive 背景上）

### Accent

- **Warm Beige** (`#e0d4c3`): セクション背景に使用。コットンの生成り色を表現
- **Cream** (`#fafaf5`): 薄い暖白。商品セクションの背景

### Text

- **Text Primary** (`#1c1c1c`): 本文の基本色。ほぼ黒だが完全な黒ではない
- **Text Muted** (`rgba(28, 28, 28, 0.65)`): セール価格等の補助テキスト
- **Text on Dark** (`#ffffff`): ダークセクション・スライドショー上のテキスト

### Surface

- **Background** (`#ffffff`): ページ標準背景
- **Surface Warm** (`#fafaf5`): 商品セクションのわずかに暖色系の白
- **Surface Beige** (`#e0d4c3`): ブランドストーリーセクションの背景
- **Surface Grey** (`#efefef`): 汎用セクション背景
- **Surface Dark** (`#1c1c1c`): ニュースレターポップアップ・ダークセクション

### CTA / Button

- **CTA Outline** (border `#1c1c1c` / text `#1c1c1c`): 標準のアウトラインボタン
- **CTA Olive** (text `#808000`): ブランドカラーのテキストリンクCTA
- **Carousel Arrow** (bg `#808000` / text `#f5db8b` / radius 9999px): pill 型の丸ボタン

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体（見出し）**: Noto Serif Japanese（Google Fonts）
- **ゴシック体（本文）**: Noto Sans Japanese（Google Fonts）

### 3.2 欧文フォント

- Noto Sans / Noto Serif の欧文グリフがそのまま使用される（別途の欧文フォント指定なし）

### 3.3 font-family 指定

```css
/* 見出し */
font-family: "Noto Serif Japanese", serif;

/* 本文・UI */
font-family: "Noto Sans Japanese", sans-serif;

/* ボタン */
font-family: "Noto Sans Japanese", sans-serif;
```

**CSS Custom Properties**:
```css
--heading-font-family: "Noto Serif Japanese", serif;
--heading-font-weight: 600;
--heading-letter-spacing: 0.1em;
--text-font-family: "Noto Sans Japanese", sans-serif;
--text-font-weight: 400;
--text-letter-spacing: 0.05em;
--button-font: normal 400 0.8125rem / 1.65 "Noto Sans Japanese", sans-serif;
--button-letter-spacing: 0.18em;
```

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Noto Serif JP | 32px | 600 | 1.3 | 0.1em | 製品シリーズ名 |
| Heading 1 | Noto Serif JP | 28px | 600 | 1.4 | 0.1em | セクション見出し |
| Heading 2 | Noto Serif JP | 22px | 600 | 1.5 | 0.1em | サブ見出し |
| Heading 3 | Noto Serif JP | 18px | 600 | 1.6 | 0.1em | 小見出し |
| Body | Noto Sans JP | 14px | 400 | 1.65 | 0.05em | 本文 |
| Button | Noto Sans JP | 13px | 400 | 1.65 | 0.18em | ボタンテキスト |
| Caption | Noto Serif JP | 12px | 600 | 1.7 | 0.1em | ナビ・カテゴリ名 |
| Small | Noto Sans JP | 11px | 400 | 1.65 | 0.1em | アナウンスバー |
| Label | Noto Sans JP | 12px | 400 | 1.65 | 0.05em | フォームラベル |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.65（23.1px / 14px）
- **見出しの行間**: 1.3–1.5（明朝体のため欧文寄りの値）
- **本文の字間 (letter-spacing)**: 0.05em（0.7px / 14px）
- **見出しの字間**: 0.1em（CSS変数 `--heading-letter-spacing` で統一）
- **ボタンの字間**: 0.18em（広いトラッキングで上品さを演出）

**ガイドライン**:
- 見出し（明朝体）は letter-spacing 0.1em で品格を出す
- 本文（ゴシック体）は 0.05em で読みやすさ重視
- ボタンは 0.18em と非常に広いトラッキングが特徴

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- palt 不使用。letter-spacing での字間調整のみ

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（アウトライン）**
- Background: transparent
- Text: `#1c1c1c`
- Border: 1px solid `#1c1c1c`
- Padding: 10.4px 28px
- Border Radius: 0px
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 0.18em

**Olive Text CTA**
- Background: transparent
- Text: `#808000`
- Border: 1px solid `#808000`
- Padding: 10.4px 28px
- Border Radius: 0px

**Carousel Arrow (Pill)**
- Background: `#808000`
- Text: `#f5db8b`
- Border Radius: 9999px
- Shape: circle

### Inputs

- Background: transparent
- Border: 1px solid（推定）
- Border Radius: 0px
- Padding: 10.4px 12.8px（`--input-padding-block: 0.65rem; --input-padding-inline: 0.8rem`）
- Font Size: 14px
- Font Weight: 400
- Label: 12px, color `rgba(255, 255, 255, 0.6)`（ダーク背景時）

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 0px
- Shadow: none
- 製品カードは画像 + テキストのシンプルな構成

---

## 5. Layout Principles

### Spacing Scale（CSS Custom Properties）

| Token | Value |
|-------|-------|
| XS | 0.625rem (10px) |
| S | 1rem (16px) |
| M | 2.25rem (36px) — `--section-stack-gap` |
| L | 3rem (48px) — `--section-vertical-spacing` |
| XL | 4rem (64px) |
| XXL | 6rem (96px) |

### Container

- Max Width: 85rem / 1360px (`--container-xl-max-width`)
- Standard: 78.75rem / 1260px (`--container-lg-max-width`)
- Content: 71.875rem / 1150px (`--container-md-max-width`)
- Narrow: 61.25rem / 980px (`--container-sm-max-width`)
- Gutter: 3rem / 48px (`--container-gutter`)

### Grid

- 商品一覧: 2–4カラム（レスポンシブ）
- セクション間: 3rem (48px)

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての標準要素 |

> TENERITA のサイトはフラットデザイン。影を一切使わず、色面と余白で構成する。

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは明朝体（Noto Serif Japanese）weight 600 + letter-spacing 0.1em
- 本文はゴシック体（Noto Sans Japanese）weight 400 + letter-spacing 0.05em
- ブランドカラーのオリーブ `#808000` をアクセントに使う
- ボタンの letter-spacing は 0.18em で品格を出す
- 背景にベージュ `#e0d4c3` やクリーム `#fafaf5` を使い温かみを出す

### Don't（禁止）

- 見出しにゴシック体を使わない — 明朝体がブランドの品格
- テキストに純黒 `#000000` を使わない — `#1c1c1c` を使う
- border-radius を CTA に使わない（カルーセル矢印の pill を除く）
- 強いドロップシャドウを使わない — フラット維持
- 彩度の高い色（赤・青等）をアクセントに使わない — オリーブとベージュの世界観

---

## 8. Responsive Behavior

### Breakpoints（CSS Custom Properties から推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 700px | モバイル（`--container-xs-max-width`） |
| Tablet | ≤ 1000px | タブレット（`--container-sm-max-width`） |
| Desktop | > 1000px | デスクトップ |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- h1: clamp(1.375rem, ..., 2rem) — 22px → 32px
- h2: clamp(1.25rem, ..., 1.75rem) — 20px → 28px
- h3: clamp(1.125rem, ..., 1.375rem) — 18px → 22px

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #808000 (Olive)
Accent: #e0d4c3 (Warm Beige)
Text Color: #1c1c1c
Background: #ffffff
Surface Warm: #fafaf5
Font Heading: "Noto Serif Japanese", serif (weight 600, ls 0.1em)
Font Body: "Noto Sans Japanese", sans-serif (weight 400, ls 0.05em)
Body Size: 14px
Line Height: 1.65
Button Letter Spacing: 0.18em
CTA Style: outline, 0px radius
```

### プロンプト例

```
TENERITA のデザインシステムに従って、タオル製品の一覧ページを作成してください。
- 見出しフォント: "Noto Serif Japanese", serif — weight 600, letter-spacing 0.1em
- 本文フォント: "Noto Sans Japanese", sans-serif — weight 400, letter-spacing 0.05em
- テキスト色: #1c1c1c
- アクセント色: #808000（オリーブ）
- 背景: #ffffff、セクション背景 #fafaf5 または #e0d4c3
- ボタン: アウトライン（border 1px solid #1c1c1c）、padding 10px 28px、letter-spacing 0.18em
- 行間: 1.65（本文）/ 1.3–1.5（見出し）
- 影: 使わない
- コンテナ幅: max 1260px、ガター 48px
```
