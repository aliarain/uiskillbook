# DESIGN.md — nano universe（ナノ・ユニバース）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 取得日: 2026-06-03 / 出典: https://www.nanouniverse.jp/

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ファッション・ミニマル。モノクローム基調にネオンイエローグリーンのアクセントを加えた、エッジの効いた都市的デザイン
- **密度**: 小さめのベースフォント（12px）で情報を詰めつつ、余白と画像で呼吸感を確保するファッションEC型
- **キーワード**: シャープ、モノトーン、ジオメトリック、都市的、洗練
- **特徴**: ボタンの角丸が一切ない（radius 0px）。Gill Sans Nova という幾何学的な欧文書体を使用。ライトグレー（#f4f4f4）のページ背景が純白よりも柔らかいトーンを演出

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Black** (`#000000`): メインのブランドカラー。テキスト、CTA背景、ロゴに使用
- **Neon Yellow-Green** (`#f3ff34`): セカンダリボタン・アクセントカラー。ブランドの遊び心を象徴する蛍光色

### Semantic（意味的な色）

- **Error / Sale** (`#ea3e0a`): エラー表示、セール・在庫僅少の強調。サイト内で非常に多用（45件以上の出現）
- **Success** (`#2e9e7b`): 成功・完了（背景: `#cce3dc`）
- **Star Rating** (`#f6a429`): 商品レビューの星評価

### Label（商品ラベル）

- **Label Blue** (`#405de6`): カスタムラベル背景
- **Label Blue 2** (`#1763c2`): カスタムラベル背景（バリエーション）

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text Secondary** (`#666666`): 補足テキスト、ナビゲーションラベル
- **Text Tertiary** (`#333333`): ボタンテキスト等
- **Border** (`#cfcfcf`): 標準ボーダー（--border-color）
- **Border Dark** (`#929292`): 強調ボーダー（--border-color-darker）
- **Background** (`#f4f4f4`): ページ背景（純白ではなくライトグレー）
- **Surface** (`#ffffff`): カード、ヘッダー等の面
- **Footer** (`#000000`): フッター背景（白テキスト）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic"
- 明朝体の使用なし

### 3.2 欧文フォント

- **サンセリフ**: gill-sans-nova, "Gill Sans Nova" — Adobe Fonts のジオメトリック・サンセリフ。ファッションブランドらしいエレガントな選択
- **代替フォント**: Cabin（Google Fonts）— Shopify テーマのフォールバック変数に定義されており、Gill Sans Nova と同系統の幾何学的サンセリフ

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: gill-sans-nova, "Gill Sans Nova", 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- 欧文フォント（Gill Sans Nova）を先頭に配置 — 欧文グリフの統一感を優先するファッションブランド型の指定
- 和文は游ゴシック系にフォールバック
- Adobe Fonts のドメインライセンスが無い環境では游ゴシックで表示される

**Shopify テーマ変数（CSS Custom Properties）**:
```css
--heading-font-family: Cabin, sans-serif;
--text-font-family: Cabin, sans-serif;
```
実際のサイトCSS では gill-sans-nova で上書きされている。

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Gill Sans Nova | 40px | 500 | 1.05 | normal | セクションタイトル |
| Heading 1 | Gill Sans Nova | 56px | 600 | — | — | CSS変数定義（--heading-h1） |
| Heading 2 | Gill Sans Nova | 24px | 500 | 1.75 | normal | カテゴリ見出し |
| Heading 3 | Gill Sans Nova | 18px | 600 | — | — | CSS変数定義（--heading-h6） |
| Nav Subtitle | Gill Sans Nova | 13px | 600 | 1.23 | 0.077em | ナビゲーション小見出し |
| Body | Gill Sans Nova | 12px | 400 | 1.73 | normal | 本文テキスト（--base-font-size: 12px） |
| Body Emphasis | Gill Sans Nova | 13px | 600 | 1.85 | normal | 強調本文（ナノワリ説明等） |
| Small / Nav | Gill Sans Nova | 11px | 500 | 1.0 | normal | ナビゲーションラベル、注釈 |
| Caption | Gill Sans Nova | 11px | 400 | 1.82 | normal | 注記テキスト（#666666） |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.73（12px本文 → 20.8px）
- **見出しの行間**: 1.05〜1.75（サイズにより変動。大きい見出しほどタイト）
- **本文の字間 (letter-spacing)**: normal（字間調整なし）
- **ナビゲーションの字間**: 0.077em（13pxナビ小見出しのみ）

**ガイドライン**:
- ベースフォントが12pxと小さいため、line-height を 1.73 と広めに取って可読性を確保
- letter-spacing はほぼ全体で normal。ナビの小見出しのみ微量のトラッキング

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

- `font-feature-settings` の明示的な指定なし
- `palt` は未使用（ファッションブランドの欧文優先スタイルに合致）

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（黒背景）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 4px 20px
- Border Radius: `0px`（完全にシャープ）
- Font Size: 11px
- Font Weight: 500
- 用途: 試着予約、主要CTA

**Secondary（ネオンアクセント）**
- Background: `#f3ff34`
- Text: `#282828`
- Padding: —
- Border Radius: `0px`
- CSS変数: `--secondary-button-background`
- 用途: 注目を集めるセカンダリアクション

**Tertiary（ライトグレー）**
- Background: `#f4f4f4`
- Text: `#000000`
- Padding: 0px 35px
- Border Radius: `0px`
- 用途: 「もっと見る」等の控えめなアクション

**Ghost（白背景）**
- Background: `#ffffff`
- Text: `#666666`
- Padding: 4px 16px
- Border Radius: `0px`
- 用途: メンバーズ特典、フィルター

**全ボタン共通**: `border-radius: 0px`。角丸は一切使わないのがブランドの特徴。
- ボタン高さ: 52px（通常）/ 44px（小）

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cfcfcf`
- Border (focus): `#000000`
- Border Radius: `0px`
- Font Size: 12px
- Height: 52px / 44px（ボタンと揃え）

### Cards（商品カード）

- Background: `#ffffff`
- Border: none
- Border Radius: `0px`
- Shadow: なし（フラットデザイン）
- 商品画像 + テキスト情報のシンプルな構成

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 32px |
| XXL | 48px |

### Container

- Max Width: 制限なし（フルワイドレイアウト）
- Padding (horizontal): 16px〜32px

### Grid

- 商品一覧: 4カラムグリッド（デスクトップ）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインが基調 |
| 1 | `0 1px 4px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 | `0 4px 12px rgba(0,0,0,0.10)` | ドロップダウンメニュー |

ミニマルなフラットデザインのため、影の使用は極めて控えめ。ボーダー（`#cfcfcf`）で区切りを表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- ボタンは常に `border-radius: 0px` にする。シャープなエッジがブランドアイデンティティ
- 欧文フォント（Gill Sans Nova / Cabin）を font-family の先頭に置く
- ページ背景は `#f4f4f4`（純白ではない）を使う
- font-weight は 400（本文）と 500（見出し・強調）を基本にする。600 はナビ小見出し等の限定的な使用
- ネオンイエローグリーン `#f3ff34` はアクセントとして控えめに使う

### Don't（禁止）

- `border-radius` を付けない（角丸はブランドの世界観を壊す）
- テキストサイズを大きくしすぎない（12px ベースの繊細なタイポグラフィが特徴）
- ネオンイエローグリーンを広い面積で使わない（あくまでアクセント）
- 色数を増やさない（モノクローム + アクセント1色が原則）
- font-weight: 700（bold）を多用しない（500 の medium weight が基調）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | モバイルレイアウト、1〜2カラム |
| Tablet | ≤ 989px | タブレットレイアウト |
| Desktop | > 990px | デスクトップ、4カラム商品グリッド |

### タッチターゲット

- ボタン高さ: 52px（通常）/ 44px（小）— タッチターゲットとして十分

### フォントサイズの調整

- ベースフォントが12pxのため、モバイルでも大きな変更なし
- 見出しはデスクトップの 60〜80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #000000 (black)
Accent Color: #f3ff34 (neon yellow-green)
Text Color: #000000
Text Secondary: #666666
Background: #f4f4f4
Surface: #ffffff
Error/Sale: #ea3e0a
Font: gill-sans-nova, "Gill Sans Nova", 游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif
Body Size: 12px
Line Height: 1.73
Button Radius: 0px (square, no rounding)
```

### プロンプト例

```
nano universeのデザインシステムに従って、商品一覧ページを作成してください。
- 背景: #f4f4f4（ライトグレー）
- フォント: gill-sans-nova, 游ゴシック体, YuGothic, sans-serif
- ベースフォントサイズ: 12px / weight: 400
- 見出し: 24px / weight: 500
- ボタン: border-radius: 0px（角丸なし）、黒背景 (#000000) に白テキスト
- アクセントボタン: #f3ff34 背景に #282828 テキスト
- カード: 白背景、影なし、ボーダーなし
- 商品グリッド: 4カラム、ガター 16px
```
