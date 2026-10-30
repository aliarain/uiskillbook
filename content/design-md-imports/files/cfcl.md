# DESIGN.md — CFCL

> CFCL（https://www.cfcl.jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: コンピュータプログラミングによる3Dホールガーメントニットを軸とするファッションブランド。**セリフ体（Garamond）とゴシック体（Inter / Hiragino Sans）の二層タイポグラフィ**が最大の特徴。ブランド要素・英文見出しにはクラシカルなセリフ体、日本語本文にはモダンなゴシック体を使い分け、テクノロジーとクラフツマンシップの融合を視覚的に表現する。角丸なし（border-radius: 0px）の直線的なデザインで、構築的なニットウェアの美学と呼応
- **密度**: ゆったりとしたファッションEC型。大きなビジュアルと広い余白で、プロダクトの素材感・シルエットを引き立てる。コレクションページはグリッドレイアウトで効率的に一覧
- **キーワード**: セリフ×ゴシック二層構造、角丸ゼロ、超軽量ウェイト、コレクション EC、テクノロジー×クラフト
- **特徴**: font-weight 250〜400 の**超軽量ウェイト**を全面的に使用。通常のデザインシステムで見る 500〜700 のウェイトがほぼ存在せず、ロゴの 700 以外はすべて 400 以下。この極細のタイポグラフィがブランドの繊細さと現代性を表現。プライマリボタンは黒背景（#000）、セカンダリは黄緑（#f3ff34）という意外な組み合わせ

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

CFCL のカラーパレットはモノトーンを基調としつつ、コレクションごとのパステルカラーで季節感を演出する。

- **Brand Black** (`#000000`): プライマリボタン背景・ローディングバー。CSS 変数 `--primary-button-background: 0, 0, 0`
- **Brand Dark** (`#282828`): 見出し・本文テキスト・ボーダー（rgb 40, 40, 40）。CSS 変数 `--text-color`・`--heading-color`

### Accent（アクセント — コレクション依存）

- **Neon Yellow-Green** (`#f3ff34`): セカンダリボタン背景。CSS 変数 `--secondary-button-background: 243, 255, 52`
- **Seasonal Pastels**: トップページではコレクションに応じたパステル背景（`#e2c1e8` ラベンダー、`#f8dfef` ピンク、`#d4e4ec` ライトブルー、`#cff2ec` ミント、`#f8c9c5` コーラル）が使用される

### Text & Neutral

- **Text Primary** (`#282828`): 本文・見出しテキスト（rgb 40, 40, 40）
- **Text on Dark** (`#ffffff`): ヒーロー・ダークセクション上のテキスト
- **Text Secondary** (`#565656`): 補足テキスト（rgb 86, 86, 86）
- **Border** (`#dfdfdf`): 区切り線・入力欄の枠（rgb 223, 223, 223）
- **Border Darker** (`#a9a9a9`): 強調ボーダー（rgb 169, 169, 169）

### Surface

- **Surface White** (`#ffffff`): 標準背景。CSS 変数 `--background: 255, 255, 255`
- **Surface Light** (`#f5f5f5`): セカンダリ背景・コレクションカード。CSS 変数 `--secondary-background: 245, 245, 245`
- **Surface Dark** (`#2e3438`): ウィッシュリストボタン背景（rgb 46, 52, 56）

### Semantic

- **Success** (`#2e9e7b`): 在庫あり表示。Background: `#d5ece5`
- **Error** (`#de2a2a`): 在庫僅少・エラー。Background: `#fdf0f0`

---

## 3. Typography Rules

### 3.1 和文フォント

CFCL は**和文と欧文で異なるフォントスタック**を使い分ける二層構造。

- **ゴシック体（日本語本文）**: Hiragino Sans, ヒラギノ角ゴシック, Hiragino Kaku Gothic ProN, YuGothic, Yu Gothic
- 日本語テキスト（商品説明、UI要素）に使用
- Inter を和文フォントの前に配置し、欧文グリフは Inter で表示

### 3.2 欧文フォント

- **セリフ（ブランド・見出し）**: Garamond, Baskerville, Caslon, serif — クラシカルなオールドスタイルセリフ。ブランドロゴ・コレクション名・カテゴリ見出しに使用
- **サンセリフ（UI・本文）**: Inter — 日本語テキスト要素の欧文部分に使用

### 3.3 font-family 指定

```css
/* ブランド・見出し・英文（Garamond 系セリフ） */
font-family: Garamond, Baskerville, Caslon, serif;

/* 日本語本文・UI（Inter + ヒラギノ） */
font-family: Inter, "Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", YuGothic, "Yu Gothic", sans-serif;

/* ブランド要素の和欧混植（Garamond + ヒラギノ） */
font-family: Garamond, Baskerville, Caslon, ヒラギノ角ゴシック, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", YuGothic, "Yu Gothic", sans-serif;

/* 和文のみ（ヒラギノ優先） */
font-family: "Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", YuGothic, "Yu Gothic", sans-serif;
```

**フォールバックの考え方**:
- 英文ブランド要素には Garamond 系セリフを単独で使用（和文フォールバック不要）
- 日本語テキストには Inter を先頭に置き、欧文グリフを Inter で統一
- 和欧混植が必要な要素では Garamond + ヒラギノの組み合わせ

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Logo | Garamond | 30px | 700 | 1.73 | normal | ロゴのみ bold 使用 |
| Display (hero) | Garamond | 45px | 400 | 1.1 | 0.01em | "New Arrival" 等 |
| Heading 2 (section) | Garamond | 28px | 400 | 1.1 | 0.01em | "CATEGORIES" 等 |
| Heading 3 (card) | Garamond | 20px | 400 | 1.1 | 0.03em | "WOMEN" 等 |
| Heading (small) | Inter + Hiragino | 12px | 300 | 1.1 | 0.03em | "Spring/Summer 2026" |
| Body JP | Hiragino Sans | 13px | 250 | 1.6 | 0.03em | 日本語本文 |
| Body EN | Inter + Hiragino | 13px | 300 | 1.8 | 0.02em | 欧文本文 |
| Caption | Hiragino Sans | 12px | 250 | 1.6 | 0.03em | フッター・補足 |
| Footer title | Garamond | 20px | 300 | 1.1 | 0.01em | "Newsletter" 等 |
| Nav | Garamond | 14px | 400 | 1.0 | normal | ナビゲーション |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6〜1.8（日本語 13px / line-height 20.8px = 1.6）
- **見出しの行間**: 1.1（セリフ見出しは密に詰める）
- **本文の字間 (letter-spacing)**: 0.02〜0.03em
- **見出しの字間**: 0.01em（Garamond 見出しは控えめ）

**ガイドライン**:
- 超軽量ウェイト（250〜300）と広めの letter-spacing の組み合わせで「軽やかな空気感」を演出
- セリフ見出しは line-height を 1.1 まで詰めて、密度のあるタイトルブロックを形成

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

- `font-feature-settings: normal` — palt・kern は未使用。letter-spacing で字間を制御

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（黒背景）**
- Background: `#000000` (CSS 変数 `--primary-button-background`)
- Text: `#ffffff`
- Padding: 内部要素で調整
- Border Radius: `0px` (CSS 変数 `--button-border-radius: 0px`)
- Height: `52px` (CSS 変数 `--button-height`)
- Small Height: `44px` (CSS 変数 `--button-small-height`)

**Secondary（黄緑背景）**
- Background: `#f3ff34` (CSS 変数 `--secondary-button-background`)
- Text: `#282828`
- Border Radius: `0px`

**Outline（ヒーロー上のゴーストボタン）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `box-shadow: #fff 0px 0px 0px 0.9px`（border の代わりに box-shadow で 0.9px のアウトライン）
- Padding: `0px 20px`
- Font: Garamond + Hiragino, 13px, weight 400

### Inputs

- Background: `transparent`
- Border: フラット
- Border Radius: `0px`
- Font Size: 12〜15px
- Font Weight: 400

### Cards（コレクション）

- Background: `#f5f5f5`
- Border Radius: `0px`
- Hover: image-zoom エフェクト
- Shadow: なし

### Product Labels

- **Custom Label 1**: Background `#000000`, Text `#ffffff`
- **Custom Label 2**: Background `#f3ff34`, Text `#000000`
- **Low Stock**: Text `#de2a2a`
- **In Stock**: Text `#2e9e7b`

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

- Max Width: 約 1400px
- Padding (horizontal): 20〜40px

### Grid

- Columns: 2〜4（コレクション一覧）
- Gutter: 16〜24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準（カード・ボタンすべて） |
| Wishlist | `rgba(0,0,0,0.2) 0px 0px 25px 0px` | ウィッシュリストフローティングボタン |

CFCL はフラットデザインを徹底しており、通常の UI 要素に影は使用しない。

---

## 7. Do's and Don'ts

### Do（推奨）

- 英文ブランド要素には必ず Garamond 系セリフを使用する
- 日本語本文には Inter + Hiragino Sans を使用する
- font-weight は 400 以下を基本とする（250〜400 の範囲）
- border-radius は 0px を維持する（角丸を使わない）
- コレクションごとのパステルアクセントカラーを背景に活用する
- ボタンのアウトラインには border ではなく box-shadow を使用する

### Don't（禁止）

- font-weight 500 以上を本文・見出しに使用しない（ロゴの 700 は例外）
- border-radius を追加しない（ブランドの構築的な美学に反する）
- Garamond の代わりにサンセリフを見出しに使用しない
- パステルカラーをテキストカラーに使用しない（背景のみ）
- 日本語テキストにセリフ体を使用しない

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | モバイルレイアウト |
| Tablet | ≤ 999px | タブレットレイアウト |
| Desktop | > 999px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルではディスプレイサイズを縮小（45px → 28px 程度）
- 本文サイズは 13px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #000000 (black)
Accent: #f3ff34 (neon yellow-green)
Text Color: #282828
Background: #ffffff
Secondary Background: #f5f5f5
Heading Font: Garamond, Baskerville, Caslon, serif
Body Font (JP): Inter, "Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", YuGothic, "Yu Gothic", sans-serif
Body Size: 13px / Weight 250-300
Line Height: 1.6
Border Radius: 0px (everywhere)
Button Height: 52px
```

### プロンプト例

```
CFCL のデザインシステムに従って、商品一覧ページを作成してください。
- 英文見出し（カテゴリ名）: Garamond, 28px, weight 400
- 日本語本文: Inter + Hiragino Sans, 13px, weight 250
- カードは角丸なし、背景 #f5f5f5
- プライマリボタン: 黒背景 #000、白テキスト、角丸なし、高さ 52px
- テキストカラー: #282828
- 全体的に超軽量ウェイト（250〜400）を使用
```
