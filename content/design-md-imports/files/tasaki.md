# DESIGN.md — TASAKI

> TASAKI（https://www.tasaki.co.jp/）のデザイン仕様書。
> 1954年創業の日本発ラグジュアリージュエリーブランド。実サイトの computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ウルトラミニマル。モノクロームのグレースケールパレットに、極細のタイポグラフィを組み合わせ、ジュエリーの美しさだけを際立たせる
- **密度**: 極めて低い。大きな余白と少ない情報量で、ラグジュアリーブランドの静謐な空気感を演出
- **キーワード**: ウルトラミニマル、建築的、モノクローム、繊細、静謐
- **特徴**: 見出しの font-weight: 300（Light）が最大の特徴。DECORTE（300 本文 / 700 見出し）よりさらに徹底しており、見出しまで 300 で統一。ボタンは角丸なし（0px）が基本で、会員登録ボタンのみ 3px の微小な角丸。独自書体 "Tasaki Sans" は極細のジオメトリックサンセリフで、ブランドの建築的な美意識を体現している

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Charcoal** (`#323232`): ブランドの基調色。CTA ボタン、テキスト、ロゴに使用。純黒（#000000）ではなく、わずかに柔らかいダークグレー

### Accent

- **Sage Green** (`#e3f0ea`): ヒーローエリアの季節的アクセント。ジュエリーの透明感を想起させる淡いグリーン

### Neutral（ニュートラル）

- **Text Primary** (`#323232`): 本文テキスト
- **Text Secondary** (`#a5a5a5`): 補足テキスト、非アクティブなカルーセルドット
- **Border** (`#cccccc`): 区切り線、入力欄の枠線
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f5f5f5`): セクション背景、カード背景
- **Dot Active** (`#323232`): カルーセルのアクティブドット
- **Dot Inactive** (`#a5a5a5`): カルーセルの非アクティブドット

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文・見出し）**:
- FP-ヒラギノ角ゴ StdN W2（TASAKI がカスタマイズした極細ウェイトのヒラギノ）
- FP-ヒラギノ角ゴ StdN W4（通常ウェイトのヒラギノ）

### 3.2 欧文フォント

- **ブランド書体**: Tasaki Sans（独自 Web フォント。極細のジオメトリックサンセリフ）
- **代替フォント（preview 用）**: Inter（Google Fonts。ジオメトリックで thin ウェイトの印象が近い）

### 3.3 font-family 指定

```css
/* ブランド指定（実サイト） */
font-family: "Tasaki Sans", "FP-ヒラギノ角ゴ StdN W2",
  "FP-ヒラギノ角ゴ StdN W4", sans-serif;

/* preview.html 代替（Google Fonts） */
font-family: "Inter", "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN", "Hiragino Sans",
  "Yu Gothic", 游ゴシック, sans-serif;
```

**フォールバックの考え方**:
- Tasaki Sans を先頭に指定（ブランド書体を最優先）
- 和文は FP-ヒラギノ角ゴ StdN W2（TASAKI 専用の極細ウェイト）を優先
- W4 は W2 が利用不可の環境向けフォールバック
- preview.html では Inter（Google Fonts）で Tasaki Sans の極細ジオメトリックな印象を再現

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 1 | Tasaki Sans | 40px | 300 | 44px (x1.1) | normal | ページタイトル |
| Heading 2 | Tasaki Sans | 26px | 300 | 28.6px (x1.1) | normal | セクション見出し |
| Heading 2 alt | Tasaki Sans | 24px | 300 | 26.4px (x1.1) | 1.6px (0.067em) | ニュースセクション見出し |
| Heading 4 | Tasaki Sans | 14px | 400 | 18.2px (x1.3) | normal | 小見出し |
| Body | Tasaki Sans | 14px | 400 | 22px (x1.57) | 0.14px (0.01em) | 本文テキスト |
| Body alt | Tasaki Sans | 14px | 500 | 30px (x2.14) | normal | ニュース本文 |
| Nav | Tasaki Sans | 14px | 400 | 20px (x1.43) | normal | ナビゲーション |
| Link small | Tasaki Sans | 12px | 400 | 22px (x1.83) | 0.14px (0.01em) | ヘッダーリンク |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- 見出し (h1, h2): `1.1`（極めてタイトな見出し行間。ラグジュアリー特有の詰め組み）
- 本文 (body): `1.57`（標準的な和文本文行間）
- ニュース本文: `2.14`（ゆったりとした行間。可読性重視）
- ナビゲーション: `1.43`

**字間 (letter-spacing)** -- 実測値:
- 見出し (h1, h2): `normal`（字間なし。書体の設計を活かす）
- h2 ニュース: `0.067em`（1.6px / 24px）
- 本文: `0.01em`（0.14px / 14px。ほぼゼロに近い微細な字間）
- ナビゲーション: `normal`

**ガイドライン**:
- 見出しの line-height: 1.1 は日本語サイトとしては異例に詰まっている。Tasaki Sans の設計に依存した値で、他のフォントで再現する際は 1.2--1.3 程度に広げることを推奨
- letter-spacing はほぼ `normal` で統一。DECORTE（全要素 0.05em）とは対照的に、書体そのものの字間設計を活かすアプローチ
- 見出し weight: 300 は TASAKI 最大の特徴。通常のサイトの半分以下の太さで、ジュエリーの繊細さを文字で表現

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
```

- 標準的な禁則処理。ラグジュアリーサイトのため、改行位置の美しさへの配慮が重要

### 3.7 OpenType 機能

- **font-feature-settings**: 実サイトで検出されず
- Tasaki Sans は独自書体のため、OpenType 機能はフォント内部で処理されている可能性がある
- preview.html で Inter を使用する場合は `font-feature-settings: "kern"` を適用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（CTA）**
- Background: `#323232`
- Text: `#ffffff`
- Padding: 7px 15px
- Border Radius: 0px（角丸なし）
- Font Size: 14px
- Font Weight: 500
- Border: none

**Register（会員登録）**
- Background: `#323232`
- Text: `#ffffff`
- Padding: 14px 17px
- Border Radius: 3px（唯一の微小角丸）
- Font Size: 14px
- Font Weight: 500

**特徴**: ボタンは原則角丸なし。会員登録ボタンのみ 3px の微小な角丸を持つ例外。アウトラインボタンやセカンダリボタンは実サイトで確認されず、モノクローム CTA のみの極めてシンプルな構成

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 1px solid `#323232`
- Border Radius: 0px（角丸なし）
- Padding: 10px 14px
- Font Size: 14px
- Font Weight: 400

### Cards

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border Radius: 0px
- Padding: 24px
- Shadow: なし（フラット）

### Navigation

**メインナビゲーション**:
- Background: `#ffffff`
- Font Family: Tasaki Sans
- Font Size: 14px
- Font Weight: 400
- Letter Spacing: normal
- 下線なし、ホバー時に opacity 変化

**カルーセルインジケーター（ドット）**:
- Active: `#323232`（チャコールグレー）、Border Radius: 50%
- Inactive: `#a5a5a5`（ミッドグレー）、Border Radius: 50%

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 48px |
| XXL | 80px |

### Container

- Max Width: 1200px
- Padding (horizontal): 40px

### Grid

- 製品グリッド: 4カラム（デスクトップ）、2カラム（タブレット）、1カラム（モバイル）
- Gutter: 20px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（デフォルト） |
| 1 | `0 1px 4px rgba(0,0,0,0.06)` | カードホバー |
| 2 | `0 4px 16px rgba(0,0,0,0.08)` | モーダル、メガメニュー |

- TASAKI は全体的にフラットなデザイン。影はほとんど使わない
- ボーダーと余白で構造を表現。影よりも空気感・余白の美しさを重視
- DECORTE よりさらに控えめな shadow 値

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しは `font-weight: 300` で極細に仕上げる（TASAKI 最大の特徴）
- テキストカラーは `#323232` を使う（純黒 #000000 ではない）
- ボタン・入力欄はすべて `border-radius: 0` で直線的に仕上げる（会員登録のみ 3px 例外可）
- `letter-spacing` は `normal` を基本とし、書体の設計を活かす
- 余白は大胆に取り、コンテンツの密度を低く保つ
- モノクロームパレット（#323232 / #ffffff / グレー系）を基調とする
- 製品写真やビジュアルには最大限の余白を取り、ジュエリーを際立たせる

### Don't（禁止）

- 見出しに `font-weight: 400` 以上を使わない（300 のライトウェイトがブランドの特徴）
- テキストに純黒 `#000000` を使わない（TASAKI は `#323232` のチャコールグレー）
- 彩度の高いアクセントカラーを多用しない（モノクロームが基調。#e3f0ea の淡いグリーンは季節限定のアクセント）
- ボタンに大きな角丸を使わない（0px が基本）
- 影（box-shadow）を強くかけない（フラットで軽やかな印象を保つ）
- `letter-spacing` を大きく設定しない（TASAKI は字間ほぼゼロが特徴。DECORTE の 0.05em とは異なる）
- 見出しの line-height を 1.3 以上に広げない（1.1 のタイトな行間がブランドの組版スタイル）

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

- モバイルでは本文 13--14px を維持
- h1 はデスクトップ 40px → モバイル 28px 程度に縮小
- h2 はデスクトップ 26px → モバイル 20px 程度に縮小
- 製品グリッドは 4 カラム → 2 カラム → 1 カラムに段階的に変更

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
CTA Background: #323232
CTA Text: #ffffff
Text Primary: #323232
Text Secondary: #a5a5a5
Background: #ffffff
Surface: #f5f5f5
Border: #cccccc
Accent Green: #e3f0ea
Dot Active: #323232
Dot Inactive: #a5a5a5

Font (実サイト): "Tasaki Sans", "FP-ヒラギノ角ゴ StdN W2",
  "FP-ヒラギノ角ゴ StdN W4", sans-serif

Font (代替): "Inter", "Hiragino Kaku Gothic ProN",
  "ヒラギノ角ゴ ProN", "Hiragino Sans",
  "Yu Gothic", 游ゴシック, sans-serif

H1: 40px / weight 300 / line-height: 1.1 / letter-spacing: normal
H2: 26px / weight 300 / line-height: 1.1 / letter-spacing: normal
Body: 14px / weight 400 / line-height: 1.57 / letter-spacing: 0.01em
Nav: 14px / weight 400 / line-height: 1.43 / letter-spacing: normal
OpenType: なし（Tasaki Sans 独自書体に依存）
Border Radius: 0px (基本) / 3px (会員登録ボタンのみ)
```

### プロンプト例

```
TASAKI のデザインに従って、ジュエリーコレクションページを作成してください。
- フォント: "Inter", "Hiragino Kaku Gothic ProN", sans-serif（Tasaki Sans 代替）
- テキスト色: #323232（純黒は使わない）、補足: #a5a5a5
- 背景: #ffffff
- ボーダー: #cccccc
- CTA ボタン: bg #323232、text #ffffff、角丸なし
- 見出し: weight 300, line-height: 1.1, letter-spacing: normal
- 本文: 14px, weight 400, line-height: 1.57, letter-spacing: 0.01em
- すべてのコンポーネントで border-radius: 0
- 余白は大胆に。情報密度は低く、ジュエリーの美しさを引き立てる
```
