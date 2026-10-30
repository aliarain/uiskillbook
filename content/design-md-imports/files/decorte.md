# DESIGN.md — DECORTE

> DECORTE（https://www.decorte.com/）のデザイン仕様書。
> KOSE の最高峰ラグジュアリーコスメティクスブランド。実サイトの computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ラグジュアリーコスメの世界観を、ミニマルな構成とモノクロームの色使いで表現。余白を贅沢に使い、製品の美しさを際立たせる
- **密度**: ゆったりとした余白。ビジュアル主導で情報密度は低く、高級感を演出
- **キーワード**: ラグジュアリー、ミニマル、モノクローム、建築的、静謐
- **特徴**: 本文ウェイトが 300（Light）と非常に細く、ラグジュアリーブランド特有の繊細な印象。ボタンは角丸なしの直線的デザインで建築的な雰囲気。ナビゲーションにセリフ体（Noto Serif JP）を使用し、ゴシック体（Noto Sans JP）の本文と対比させている

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Black** (`#000000`): ブランドの基調色。ロゴ、ナビゲーションのアクティブインジケーターに使用
- **Dark Gray** (`#333333`): CTA ボタン、カート・検索アイコンの背景色

### Accent

- **Soft Pink** (`#ffebea`): プロモーションセクションの背景。柔らかいフェミニンなアクセント

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文テキスト
- **Text Secondary** (`#999999`): 補足テキスト、無効状態の矢印
- **Border** (`#999999`): 検索入力欄の枠線
- **Border Light** (`#d3d3d3`): 薄いボーダー、入力欄
- **Border Subtle** (`#d4d4d4`): チェックボックス等の枠線
- **Background** (`#ffffff`): ページ背景
- **Surface** (`#f0f0f0`): ランキングナビ等のセクション背景
- **Dot Inactive** (`#dbdbdb`): カルーセルの非アクティブドット

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文・見出し）**:
- Noto Sans JP（Google Fonts、ウェイト 300 / 400 / 700）

**明朝体（ナビゲーション）**:
- Noto Serif JP（Google Fonts、ウェイト 400）

### 3.2 欧文フォント

- **サンセリフ**: Arial, Helvetica Neue
- **セリフ**: Times New Roman（明朝体フォールバック内）

### 3.3 font-family 指定

```css
/* 本文・見出し（ゴシック体） */
font-family: "Noto Sans JP", Arial, "Helvetica Neue",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro",
  "Yu Gothic", 游ゴシック, YuGothic, 游ゴシック体,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* ナビゲーション（明朝体） */
font-family: "Noto Serif JP", "Times New Roman",
  "Hiragino Mincho Pro", "ヒラギノ明朝 Pro",
  "Yu Mincho", 游明朝, YuMincho, 游明朝体,
  "MS PMincho", "ＭＳ Ｐ明朝", serif;
```

**フォールバックの考え方**:
- Noto Sans JP を先頭に指定（Google Fonts で統一的な表示を保証）
- 欧文は Arial → Helvetica Neue の順で、ニュートラルなサンセリフ
- ナビゲーションのみ Noto Serif JP を使用し、ゴシック本文との対比を生む
- 和文フォールバックはヒラギノ → 游ゴシック → MS PGothic の標準的な順序

### 3.4 文字サイズ・ウェイト階層

> 以下は DevTools の computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Heading 2 | Sans JP | 20px | 700 | 34px (x1.7) | 1px (0.05em) | セクション見出し |
| Heading 3 | Sans JP | 18px | 700 | 30.6px (x1.7) | 0.9px (0.05em) | サブ見出し |
| Heading 4 | Sans JP | 16px | 700 | 27.2px (x1.7) | 0.8px (0.05em) | 小見出し |
| Body | Sans JP | 14px | 300 | 21px (x1.5) | 0.7px (0.05em) | 本文テキスト |
| Nav Item | Serif JP | 13px | 400 | 13px (x1.0) | 0.65px (0.05em) | ナビゲーション項目 |
| Category | Sans JP | 9px | 400 | — | 0.45px (0.05em) | カテゴリラベル |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body): `1.5`（14px x 1.5 = 21px）
- 見出し (h2-h4): `1.7`（ゆったりした見出し行間）
- ナビゲーション: `1.0`（セリフ体のナビは詰め気味）

**字間 (letter-spacing)** — 実測値:
- **全要素共通**: `0.05em`（各サイズに対して一律の比率）
- 本文 14px: `0.7px`（= 0.05em）
- h2 20px: `1px`（= 0.05em）
- h3 18px: `0.9px`（= 0.05em）
- h4 16px: `0.8px`（= 0.05em）
- ナビ 13px: `0.65px`（= 0.05em）
- カテゴリ 9px: `0.45px`（= 0.05em）

**ガイドライン**:
- `letter-spacing: 0.05em` は全要素にグローバル適用。ラグジュアリーブランドらしい均一な字間で上品な印象を生む
- 本文の `font-weight: 300` は日本語サイトとしては珍しく細い。高級感を演出するための意図的な選択
- 見出しの行間 `1.7` は本文の `1.5` より広く、余裕のある組版

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
```

- 標準的な禁則処理。ラグジュアリーサイトのため、改行位置への配慮が重要

### 3.7 OpenType 機能

```css
/* グローバル適用 — 全要素に適用 */
font-feature-settings: "palt";
```

- **palt**: 全要素にグローバル適用。本文・見出し・ナビゲーションすべてでプロポーショナル字詰めが有効
- `letter-spacing: 0.05em` と `palt` の組み合わせにより、均一で洗練された字間を実現
- note（見出しのみ palt）とは異なり、DECORTE は全面的に palt を使用している点に注意

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary（CTA）**
- Background: `#333333`
- Text: `#ffffff`
- Padding: 7px 程度
- Border Radius: 0px（角丸なし）
- Font Size: 14px
- Font Weight: 300
- Border: none

**Secondary（アウトライン）**
- Background: `transparent`
- Text: `#000000`
- Border: 1px solid `#000000`
- Padding: 10px 24px
- Border Radius: 0px（角丸なし）

**特徴**: ボタンは一切角丸を使わない。直線的・建築的なデザインで、ラグジュアリーブランドの厳格さを表現

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#999999`
- Border (focus): 1px solid `#333333`
- Border Radius: 0px（角丸なし）
- Padding: 8px 12px
- Font Size: 14px
- Font Weight: 300

### Cards

- Background: `#ffffff`
- Border: 1px solid `#d3d3d3`
- Border Radius: 0px
- Padding: 24px
- Shadow: なし（フラット）

### Navigation

**メインナビゲーション**:
- Background: `#ffffff`
- Font Family: Noto Serif JP（明朝体）
- Font Size: 13px
- Font Weight: 400
- Letter Spacing: 0.65px (0.05em)
- 下線なし、ホバー時にアンダーラインまたは opacity 変化

**アクティブインジケーター（ドット）**:
- Active: `#000000`（黒丸）、Border Radius: 50%
- Inactive: `#dbdbdb`（淡いグレー丸）、Border Radius: 50%

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
| XXL | 64px |

### Container

- Max Width: 1200px
- Padding (horizontal): 32px

### Grid

- 製品グリッド: 4カラム（デスクトップ）、2カラム（タブレット）、1カラム（モバイル）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素（デフォルト） |
| 1 | `0 1px 4px rgba(0,0,0,0.08)` | カードホバー、ドロップダウン |
| 2 | `0 4px 12px rgba(0,0,0,0.10)` | モーダル、メガメニュー |

- DECORTE は全体的にフラットなデザイン。影はほとんど使わず、ボーダーと余白で構造を表現する
- ラグジュアリーサイトとして、重厚な影よりも軽やかさ・空気感を重視

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストは `font-weight: 300` で細くし、ラグジュアリーな繊細さを表現する
- `letter-spacing: 0.05em` を全要素に均一に適用する
- `font-feature-settings: "palt"` を全要素にグローバル適用する
- ボタン・入力欄はすべて `border-radius: 0` で直線的に仕上げる
- ナビゲーションには Noto Serif JP（明朝体）を使い、本文ゴシックとの対比を生む
- 製品写真には十分な余白を取り、コンテンツを引き立てる
- モノクロームパレット（黒・白・グレー）を基調とし、色は控えめに使う

### Don't（禁止）

- ボタンやカードに角丸を使わない（ブランドの建築的なデザイン言語に反する）
- 本文に `font-weight: 400` 以上を使わない（300 のライトウェイトがブランドの特徴）
- 原色や彩度の高い色を多用しない（モノクロームが基調）
- `letter-spacing` を要素ごとにバラバラに設定しない（0.05em の統一感が重要）
- 影（box-shadow）を強くかけない（フラットで軽やかな印象を保つ）
- `palt` を外さない（全要素で有効にする設計意図がある）

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

- モバイルでは本文 13-14px を維持
- 見出しはデスクトップの 80% 程度に縮小
- 製品グリッドは 2 カラム → 1 カラムに変更

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
CTA Background: #333333
Text Primary: #000000
Text Secondary: #999999
Background: #ffffff
Surface: #f0f0f0
Border: #d3d3d3
Accent Pink: #ffebea
Dot Active: #000000
Dot Inactive: #dbdbdb

Sans-Serif Font: "Noto Sans JP", Arial, "Helvetica Neue",
  "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro",
  "Yu Gothic", 游ゴシック, YuGothic, 游ゴシック体,
  "ＭＳ Ｐゴシック", "MS PGothic", sans-serif

Serif Font: "Noto Serif JP", "Times New Roman",
  "Hiragino Mincho Pro", "ヒラギノ明朝 Pro",
  "Yu Mincho", 游明朝, YuMincho, 游明朝体,
  "MS PMincho", "ＭＳ Ｐ明朝", serif

Body: 14px / weight 300 / line-height: 1.5 / letter-spacing: 0.05em
Heading: weight 700 / line-height: 1.7 / letter-spacing: 0.05em
Nav: Serif / 13px / weight 400 / letter-spacing: 0.05em
OpenType: font-feature-settings: "palt" (global)
Border Radius: 0px (all components)
```

### プロンプト例

```
DECORTE のデザインに従って、製品一覧ページを作成してください。
- フォント: "Noto Sans JP", Arial, "Helvetica Neue",
    "Hiragino Kaku Gothic Pro", sans-serif
- ナビゲーション: "Noto Serif JP" 明朝体
- テキスト色: #000000、補足: #999999
- 背景: #ffffff、セクション背景: #f0f0f0
- ボーダー: #d3d3d3
- CTA ボタン: bg #333333、text #ffffff、角丸なし
- 本文: 14px, weight 300, line-height: 1.5, letter-spacing: 0.05em
- 見出し: weight 700, line-height: 1.7, letter-spacing: 0.05em
- 全要素: font-feature-settings: "palt"
- すべてのコンポーネントで border-radius: 0
```
