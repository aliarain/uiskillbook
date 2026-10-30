# DESIGN.md — DeNA

> DeNA（https://dena.com/jp/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。インターネット・エンターテインメント企業のコーポレートサイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: マルチカラーのブランドアイデンティティを軸にした、大胆で開放的なコーポレートサイト。極端に大きなタイポグラフィと贅沢なホワイトスペースで「余白で語る」デザイン。セクションごとに異なるブランドカラーを割り当て、視覚的にリズムをつくる
- **密度**: 極めてゆったり。大きな見出し・広い余白・少ないテキスト量で、雑誌的なレイアウト
- **キーワード**: マルチカラー、大胆なタイポグラフィ、余白、雑誌的、エンターテインメント
- **特徴**: 欧文見出し（Roc Grotesk）と和文サブ見出し（DNP 秀英ゴシック 銀）の二段構成。セクションごとに purple / blue / teal 等ブランドカラーが切り替わる。CTA はピル型（radius 40px）でゴーストボタン（透明背景 + ボーダー）。フッターはほぼ黒 `#181818`

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **DeNA Red** (`#dc0451`): ヒーロー背景・アクセント。d21 デザインシステムの基幹色
- **DeNA Red Dark** (`#c60449`): ヒーロー背景のバリエーション（COMPANY ページ等）

### Multi-Color Brand（セクション別ブランドカラー）

- **Purple** (`#8028ae`): "Business" セクション見出し
- **Blue** (`#2860b0`): "Recruit" セクション見出し
- **Teal** (`#5bbbb7`): "NEWS" セクション見出し
- **Orange** (`#ec801e`): ブランドマーカー（ドット装飾）
- **Yellow** (`#fdc82f`): ブランドマーカー、COMPANY ページの見出し色
- **Yellow Dark** (`#eab622`): "COMPANY" h1 テキスト（赤背景上）
- **Sky** (`#43cce9`): アクセントカラー
- **Pink** (`#ea6897`): アクセントカラー（ライトバリエーション）

### Neutral（ニュートラル）

- **Text Primary** (`#181818`): 本文テキスト（Gray 900）
- **Text Secondary** (`#505050`): 補足テキスト（Gray 500）
- **Text Muted** (`#a0a0a0`): 無効状態・プレースホルダー（Gray 300）
- **Background** (`#ffffff`): ページ背景（純白）
- **Surface** (`#f8f8f8`): セクション背景（Gray 50）
- **Border** (`#e0e0e0`): 区切り線・ディバイダー（Gray 100）
- **Footer** (`#181818`): フッター背景（Gray 900）

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- DNP 秀英ゴシック 銀（dnp-shuei-gothic-gin-std — Adobe Fonts、ドメインライセンス）
- フォールバック: sans-serif

> Adobe Fonts のため preview.html では表示されない。Google Fonts 代替: **Zen Kaku Gothic New**（DNP 系で字形が近い）

### 3.2 欧文フォント

- **サンセリフ**: Roc Grotesk（roc-grotesk — Adobe Fonts、ドメインライセンス）
- フォールバック: sans-serif

> Adobe Fonts のため preview.html では表示されない。Google Fonts 代替: **DM Sans**（ジオメトリック・サンセリフで印象が近い）

### 3.3 font-family 指定

```css
/* 本文・和文見出し */
font-family: dnp-shuei-gothic-gin-std, sans-serif;

/* 欧文見出し・ラベル */
font-family: roc-grotesk, sans-serif;
```

**フォールバックの考え方**:
- 和文・欧文ともに Adobe Fonts の単一指定 + sans-serif フォールバック
- 欧文見出し（h1, h2 の英語部分）は Roc Grotesk を専用で使う
- 和文見出し・本文は DNP 秀英ゴシック 銀で統一
- システムフォントへのフォールバックチェーンは設けていない（Web フォント前提の設計）

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | Roc Grotesk | 80px | 500 | 80px (x1.0) | 3.2px (0.04em) | ページタイトル "COMPANY" 等 |
| Heading 2 (EN) | Roc Grotesk | 64px | 500 | 64px (x1.0) | 3.2px (0.05em) | セクション見出し、色はセクション別 |
| Heading 2 (JP) | 秀英ゴシック 銀 | 40–48px | 600 | x1.0–1.5 | 2.4–3.2px | 和文サブ見出し |
| Heading 3 (EN) | Roc Grotesk | 44px | 500 | 55px (x1.25) | 3.52px (0.08em) | "PickUp" 等の中見出し |
| Heading 3 (JP) | 秀英ゴシック 銀 | 22px | 600 | 33px (x1.5) | 1.1px (0.05em) | 和文中見出し |
| Body | 秀英ゴシック 銀 | 22px | 600 | 44px (x2.0) | 1.1px (0.05em) | 本文テキスト |
| Label (EN) | Roc Grotesk | 16px | 500 | 23px (x1.44) | 1.28px (0.08em) | 欧文ラベル |
| Nav | 秀英ゴシック 銀 | 16px | 600 | 32px (x2.0) | 0.8px (0.05em) | ナビゲーション |
| Link | 秀英ゴシック 銀 | 14px | 400 | 28px (x2.0) | 0.7px (0.05em) | テキストリンク |
| Breadcrumb | 秀英ゴシック 銀 | 12px | 400 | 32px (x2.67) | 0.8px (0.067em) | パンくずリスト |
| Footer | 秀英ゴシック 銀 | 16px | 400 | 24px (x1.5) | 0.8px (0.05em) | フッターテキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 欧文見出し（Display / h2 EN）: `1.0`（タイトな詰め。欧文大文字のみなのでアセンダー/ディセンダーが不要）
- 和文見出し（h3 JP）: `1.5`（33px / 22px）
- 本文: `2.0`（44px / 22px）— 日本語サイトとしてもかなり広め
- ナビゲーション・リンク: `2.0`

**字間 (letter-spacing)** — 実測値:
- 全テキスト共通: `0.05em` 前後（body に 0.8px / 16px = 0.05em）
- 欧文見出し: `0.04–0.08em`（大文字見出しで広めのトラッキング）

**ガイドライン**:
- 本文の行間は 2.0 と広く、余白を重視したデザイン思想を反映
- 字間は全体的に 0.05em を基準として統一感がある
- 欧文大文字見出しは字間を広めにとることでゆったりとした印象を出す

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* サイト全体で palt / kern は適用されていない */
font-feature-settings: normal;
```

- palt: 未使用
- kern: 未使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Ghost Pill（メイン CTA）**
- Background: `transparent`
- Text: `#181818`
- Border: 1px solid `#181818`
- Padding: 16px 38px
- Border Radius: 40px（ピル型）
- Font: 秀英ゴシック 銀
- Font Size: 16px
- Font Weight: 600

**Ghost Pill — Dark（フッター内 CTA）**
- Background: `transparent`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Padding: 16px 38px
- Border Radius: 40px
- Font Size: 16px
- Font Weight: 600

### Inputs

- トップページおよび主要ページにフォーム要素の露出が少ない

### Cards

- カード型 UI は明確に使用されていない。セクション分割とタイポグラフィで情報を整理するスタイル

### Badge

- ニュースカテゴリ等のバッジ仕様は未確認

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 40px |
| XL | 64px |
| XXL | 120px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 40px

### Grid

- セクションごとに異なるレイアウト構成
- ニュース一覧: 2–3 カラム
- ヒーローエリア: フルブリード + カラーブロック分割

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全ての要素（フラットデザイン） |

- シャドウはほぼ使われない。色面・余白・タイポグラフィの大小で視覚的階層をつくる
- フッターは `#181818` のベタ塗りで領域を区切る
- ヒーローエリアはブランドカラー（`#c60449`）の全面塗りで存在感を出す

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文見出しには Roc Grotesk 500、和文見出しには秀英ゴシック 銀 600 を使う
- セクション見出しは EN（大文字・大サイズ）+ JP（小サイズ）の二段構成にする
- セクションごとにブランドカラーを変える（Business: purple、Recruit: blue、NEWS: teal 等）
- CTA はピル型（radius 40px）のゴーストボタン（透明背景 + ボーダー）にする
- 本文は 22px / line-height: 2.0 / letter-spacing: 0.05em を維持する
- ページ背景は純白 `#ffffff`、フッターは `#181818`
- 字間は全体的に 0.05em を基準とする
- 余白は大きめにとり、雑誌的なゆとりを出す

### Don't（禁止）

- 単一のブランドカラーだけで全体を構成しない（マルチカラーが DeNA のアイデンティティ）
- ゴーストボタンを塗りつぶしボタンに変えない（透明背景 + ボーダーがブランドの特徴）
- ボタンの角丸を 40px 未満にしない（完全なピル型を維持する）
- 本文の line-height を 2.0 より下げない（余白重視のデザイン思想に反する）
- palt / kern を適用しない（font-feature-settings: normal を維持）
- 欧文見出しに和文フォントを使わない（Roc Grotesk 専用）
- 和文本文に Roc Grotesk を使わない（秀英ゴシック 銀 専用）
- シャドウやドロップシャドウを多用しない（フラットデザインを維持）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト |
| Tablet | <= 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは欧文見出し（80px → 40px 程度）を大幅に縮小
- 和文本文 22px はモバイルで 16–18px 程度に縮小
- ピルボタンのパディングはモバイルで調整

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
DeNA Red: #dc0451（ヒーロー背景・アクセント）
DeNA Red Dark: #c60449（COMPANY ヒーロー背景）
Purple: #8028ae（Business）
Blue: #2860b0（Recruit）
Teal: #5bbbb7（NEWS）
Orange: #ec801e（マーカー）
Yellow: #fdc82f / #eab622（マーカー・見出し）
Sky: #43cce9（アクセント）
Pink: #ea6897（アクセント）

Text Primary: #181818
Text Secondary: #505050
Background: #ffffff
Surface: #f8f8f8
Border: #e0e0e0
Footer: #181818

JP Font: dnp-shuei-gothic-gin-std, sans-serif（Google Fonts 代替: Zen Kaku Gothic New）
EN Font: roc-grotesk, sans-serif（Google Fonts 代替: DM Sans）

Body: 22px / 600 / line-height: 2.0 / letter-spacing: 0.05em
EN Display: 80px / 500 / line-height: 1.0 / letter-spacing: 0.04em
EN H2: 64px / 500 / line-height: 1.0
JP H3: 22px / 600 / line-height: 1.5

CTA: Ghost Pill / transparent bg / 1px border / radius 40px / padding 16px 38px
palt: なし
```

### プロンプト例

```
DeNA のデザインに従って、サービス紹介セクションを作成してください。
- 欧文見出しフォント: roc-grotesk, sans-serif（Google Fonts 代替: "DM Sans"）
- 和文フォント: dnp-shuei-gothic-gin-std, sans-serif（Google Fonts 代替: "Zen Kaku Gothic New"）
- セクション見出し: EN 64px Roc Grotesk 500 + JP 22px 秀英ゴシック 銀 600 の二段構成
- セクション見出し色: Business=#8028ae, Recruit=#2860b0, NEWS=#5bbbb7
- ページ背景: #ffffff
- テキスト色: #181818
- 本文: 22px, 600, line-height: 2.0, letter-spacing: 0.05em
- CTA: Ghost Pill（transparent bg, 1px solid #181818, radius 40px, padding 16px 38px）
- フッター: bg #181818, 白文字
- palt / kern は使わない
```
