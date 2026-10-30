# DESIGN.md — NOT A HOTEL

> NOT A HOTEL 公式サイト（https://notahotel.com/）のデザイン仕様書。
> "世界中に自分の家を持つ" をコンセプトにした建築×テクノロジーの不動産ブランド。建築家がデザインした別荘を購入し、使わない日はホテルとして運用できるサービス。
> 実サイトの computed style に基づいて記述（2026-05-09 取得）。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: フルスクリーンの建築写真を前面に押し出し、テキストは最小限。Apple のプロダクトページに通じる「プレミアムテック」とラグジュアリー不動産の融合
- **密度**: 情報密度は極めて低い。ヒーロービジュアルが画面の大半を占め、テキストは建築の余白に浮かぶ
- **キーワード**: アーキテクチャル、プレミアム、イマーシブ、ダークUI、コンデンスド
- **特徴**:
  - **ダークイマーシブUI** — メインセクションは `#0b0b0d` のほぼ純黒背景。建築写真が映える暗い空間を構成
  - **三書体システム** — 英文ディスプレイに Manuka Condensed（コンデンスド・力強い）、英文UIに Neue Haas Grotesk Text（スイスモダン）、和文に YakuHanJP + ヒラギノ角ゴ。用途ごとに書体が明確に分かれる
  - **ブルー CTA `#0171e3`** — 黒背景に映えるビビッドブルーの pill ボタン（radius 999px）。Apple の Blue CTA に近い
  - **palt グローバル適用** — CSS Custom Properties で `font-feature-settings: "palt"` をヘッダー要素に適用。和文の字詰めが効いている
  - **12 カラムグリッド** — `--gutter: 24px` で 12 カラム構成。`--width-column-12: 1392px` がフルコンテナ幅

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Blue** (`#0171e3`): CTA ボタン背景、テキストリンクの強調色。"資料請求" "さらに詳しく" 等のアクション要素に使用

### Neutral（ニュートラル）

- **Near Black** (`#0b0b0d`): メインセクション背景、ダーク面。サイト全体の基調色
- **Black** (`#000000`): テキストカラー（ライトセクション）
- **White** (`#ffffff`): テキスト（ダーク背景上）、一部セクション背景
- **Header White** (`rgba(255,255,255,0.8)`): ヘッダー背景。半透明で建築写真に溶け込む
- **Light Gray** (`#eceeed`): セクション背景、補足エリア（資料請求バナー等）
- **Border Gray** (`#e9e9eb`): ボタン枠線（円形アイコンボタン）

### Text

- **Text Primary Light** (`#000000`): ライト背景上の本文テキスト
- **Text Primary Dark** (`#ffffff`): ダーク背景上の本文テキスト
- **Text Link** (`#0171e3`): テキストリンク、"〜を見る" 等のインラインCTA

### Surface

- **Background Dark** (`#0b0b0d`): メインコンテンツ背景
- **Background Light** (`#ffffff`): ライトセクション背景
- **Background Muted** (`#eceeed`): CTA バナー背景
- **Surface Header** (`rgba(255,255,255,0.8)`): グローバルヘッダー

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（本文・UI）**:
- YakuHanJP（約物半角化ライブラリ）
- ヒラギノ角ゴシック / Hiragino Sans（macOS）
- メイリオ / Meiryo（Windows）

### 3.2 欧文フォント

- **コンデンスド（ディスプレイ）**: Manuka Condensed — ヒーロータイトル、プロパティ名。90px・60px の超大型文字に使用
- **サンセリフ（UI）**: Neue Haas Grotesk Text（Adobe Fonts） — セクション見出し、カードラベル。16–18px の中型文字
- **汎用フォールバック**: Helvetica Neue, Helvetica, Arial

### 3.3 font-family 指定

```css
/* 和文（本文・ヘッダーナビ・CTA） */
font-family: YakuHanJP, "Hiragino Sans", Meiryo, "Helvetica Neue", Helvetica, Arial, sans-serif;

/* 欧文ディスプレイ（ヒーロータイトル、プロパティ名） */
font-family: "Manuka Condensed", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;

/* 欧文 UI（セクション見出し、英文テキスト） */
font-family: neue-haas-grotesk-text, "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;

/* 明朝体（ほぼ未使用だが定義あり） */
font-family: "Hiragino Mincho ProN", "Hiragino Mincho Pro", "Yu Mincho", YuMincho, "Yu Mincho Light", "MS PMincho", "Times New Roman", Georgia, Times, serif;
```

**フォールバックの考え方**:
- YakuHanJP が先頭。約物の半角化を優先し、和文本体はヒラギノに委ねる
- 欧文ディスプレイは Adobe Fonts の Manuka Condensed。preview.html では Google Fonts の Bebas Neue で代替
- 欧文 UI は Adobe Fonts の Neue Haas Grotesk Text。preview.html では Google Fonts の Inter で代替

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | Manuka Condensed | 90px | 500 | 1.0 | normal | ヒーローメインタイトル "NATURE WITHIN" |
| Display Sub | Manuka Condensed | 60px | 500 | 1.0 | normal | プロパティ名 |
| Heading 1 | YakuHanJP + Hiragino | 20px | 600 | 1.56 | 0.04em | セクション見出し |
| Heading 2 | Neue Haas Grotesk | 18px | 500 | 1.48 | normal | 英文セクション見出し |
| Heading 3 | Neue Haas Grotesk | 16px | 500 | 1.0 | 0.02em | カードラベル "01" 等 |
| Body | YakuHanJP + Hiragino | 16px | 400 | 1.15 | normal | 本文テキスト |
| Body Small | YakuHanJP + Hiragino | 15px | 700 | 1.73 | normal | プロパティ説明 |
| Nav | YakuHanJP + Hiragino | 12px | 600 | 1.0 | 0.02em | ヘッダーナビゲーション |
| CTA Small | YakuHanJP + Hiragino | 11px | 500 | 1.0 | normal | ヘッダー CTA "資料請求" |
| CTA Medium | YakuHanJP + Hiragino | 12–13px | 500 | 1.0 | normal | セクション CTA |
| Text Link | YakuHanJP + Hiragino | 18px | 500 | 1.0 | 0.04em | インライン CTA "〜を見る" |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.15（16px / 18.4px）。欧米的な詰まった行間
- **プロパティ説明の行間**: 1.73（15px / 25.995px）。和文の長い説明文はゆったり
- **ディスプレイの行間**: 1.0。コンデンスド書体は行間なしで積む
- **見出しの字間**: 0.04em（0.8px / 20px）。和文見出しにわずかな字間
- **本文の字間**: normal。本文には追加の字間なし

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* ヘッダー要素・ディスプレイ */
font-feature-settings: "palt";

/* 本文・UIテキスト */
font-feature-settings: normal;
```

- **palt**: ヒーロータイトル（Manuka Condensed）、見出し要素に適用。本文には適用しない
- CSS Custom Properties 経由で管理: h1〜h3 に `font-feature-settings: "palt"` が定義されている

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（pill）**
- Background: `#0171e3`
- Text: `#ffffff`
- Padding: 18px 24px（medium）/ 10px 14px（small）
- Border Radius: 999px（完全 pill）
- Border: 1px solid transparent
- Font Size: 12–13px（medium）/ 11px（small）
- Font Weight: 500

**Text Link CTA**
- Background: transparent
- Text: `#0171e3`
- Font Size: 18px
- Font Weight: 500
- Letter Spacing: 0.04em
- 下線なし、テキストのみ。矢印アイコン等で補完

**Icon Button（円形）**
- Background: `#ffffff`（ライト）/ `#0b0b0d`（ダーク）
- Border: 1px solid `#e9e9eb`（ライト）/ none（ダーク）
- Border Radius: 50%
- Size: スクロールナビゲーション用の円形ボタン

### Cards

**プロパティカード**
- Background: 建築写真（フルブリード）
- Border Radius: 8px
- テキストはカード上に白文字でオーバーレイ
- カード内タイトル: Manuka Condensed 60px weight 500

### Inputs

実サイトにフォーム要素の露出が少ないため、詳細な仕様は不明

---

## 5. Layout Principles

### Spacing Scale

CSS Custom Properties で 12 カラムグリッドが定義されている:

| Token | Value |
|-------|-------|
| Gutter | 24px |
| Column 1 | 94px |
| Column 2 | 212px |
| Column 3 | 330px |
| Column 4 | 448px |
| Column 6 | 684px |
| Column 8 | 920px |
| Column 10 | 1156px |
| Column 12 | 1392px |

### Container

- Max Width: 1392px（12カラム）
- Gutter: 24px

### Grid

- Columns: 12
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素。フラットデザインを徹底 |

NOT A HOTEL はシャドウをほぼ使わない。建築写真の奥行きとセクション背景色の切り替えで深度を表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- ディスプレイタイトルは Manuka Condensed を使い、行間 1.0 で積む
- CTA は pill（radius 999px）でブルー `#0171e3` を使う
- ダーク背景 `#0b0b0d` を基調とし、建築写真の余白として扱う
- 和文見出しに `font-feature-settings: "palt"` を適用する
- YakuHanJP で約物を半角化し、テキストの密度を揃える

### Don't（禁止）

- CTA に角丸ボタン（radius 8px 等）を使わない — pill か完全矩形のみ
- ディスプレイに和文フォントを使わない — Manuka Condensed の英文が世界観を作る
- 明るい背景に多色を使わない — モノクロ + ブルーの二色構成
- `letter-spacing` を本文に過度に入れない — 本文は normal
- ボックスシャドウで浮かせない — フラットデザインを維持

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Desktop | > 767px | デスクトップレイアウト |

### タッチターゲット

- CTA ボタン: padding 18px 24px 以上を確保
- ヘッダーナビ: 44px 以上のタップ領域

### フォントサイズの調整

- ディスプレイ: デスクトップ 90px → モバイルでは縮小（推定 40–50px）
- 本文: 16px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #0171e3
Dark Background: #0b0b0d
Text (on dark): #ffffff
Text (on light): #000000
Font (Japanese): YakuHanJP, "Hiragino Sans", Meiryo, "Helvetica Neue", Helvetica, Arial, sans-serif
Font (Display): "Manuka Condensed", "Helvetica Neue", Helvetica, Arial, sans-serif
Font (UI English): neue-haas-grotesk-text, "Helvetica Neue", Helvetica, Arial, sans-serif
Body Size: 16px
Line Height: 1.15
CTA Radius: 999px (pill)
```

### プロンプト例

```
NOT A HOTEL のデザインシステムに従って、プロパティ一覧ページを作成してください。
- ダーク背景: #0b0b0d
- CTA: pill ボタン（radius 999px）、背景 #0171e3、白文字
- ディスプレイフォント: Manuka Condensed（英文タイトル）
- 和文: YakuHanJP + ヒラギノ角ゴ、palt あり
- カード: 建築写真フルブリード、radius 8px、白文字オーバーレイ
```
