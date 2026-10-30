# DESIGN.md — Time & Style（タイムアンドスタイル）

> Time & Style（https://www.timeandstyle.com/jp/）のデザイン仕様書。
> 北海道旭川発、伝統的な日本のクラフトマンシップとモダンデザインを融合したプレミアム家具ブランド。
> 実サイトの computed style 実測（2026-06-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **極限まで軽いウェイト（300/200）+ Helvetica / Noto Sans JP** の超ミニマルデザイン。家具ブランドらしく余白を贅沢に使い、文字を小さく軽く、写真を大きく見せる建築的な構成
- **密度**: 本文 16px / weight 300 / line-height 1.6 / letter-spacing 0.5px。テキスト密度は極めて低く、大きな写真とホワイトスペースで構成。見出しは 25〜44px だがすべて weight 300
- **キーワード**: ミニマル、建築的、ライトウェイト、Helvetica、Noto Sans JP、白基調、ゆったり余白、静謐、クラフトマンシップ
- **特徴**:
  - **全体を通じて font-weight: 300（Light）** が基本。ボタンすら 200。太字がほぼ存在しない
  - **欧文は Helvetica**（見出し・ナビ・ボタン）。Webフォントではなくシステムフォント
  - **和文は Noto Sans JP weight 300**（本文・ナビ）
  - **letter-spacing は全面的に 0.5px〜2px**。文字間を広く取り「呼吸のあるタイポグラフィ」を実現
  - **ページ背景は白 `#ffffff`**。セクション面色は `#f0f0f0`（CSS 変数 `--base`）
  - **ボタンは直角（radius 0）** か控えめな角丸（3〜9px）。ピル型は使わない
  - **色を使わない**: ブランドカラーがなく、黒・白・グレーのみで構成する無彩色デザイン

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。CSS Custom Properties（`--base`, `--base-2`, `--base-3`）に基づく。

### Brand

ブランドカラーは **存在しない**。無彩色のみで構成される。

### Surface / Background

- **White** (`#ffffff`): ページ背景・メインコンテンツ面。CSS 変数 `--base-3`
- **Base Light** (`#f0f0f0`): セクション面色。CSS 変数 `--base`。ニュース・フッター
- **Base 2** (`#f7f8f9`): CSS 変数 `--base-2`。微妙に暖かい面色

### Text / UI

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Black | `#000000` | (0, 0, 0) | 本文・見出し・リンク |
| Contrast | `#222222` | (34, 34, 34) | CSS 変数 `--contrast`。検索モーダルテキスト |
| Contrast 2 | `#575760` | (87, 87, 96) | CSS 変数 `--contrast-2`。セカンダリテキスト |
| Contrast 3 | `#b2b2be` | (178, 178, 190) | CSS 変数 `--contrast-3`。プレースホルダー |
| Nav Active | `#878787` | (135, 135, 135) | ナビゲーションのアクティブ項目 |
| Mid Gray | `#cbcbcb` | (203, 203, 203) | ドロップダウンメニュー背景 |
| Border Light | `#bbbbbb` | (187, 187, 187) | ボーダー・区切り線 |
| Search Button | `#69727d` | (105, 114, 125) | 検索ボタン背景 |
| White | `#ffffff` | (255, 255, 255) | ボタン背景・コンテンツ面 |

### Semantic（推奨値）

実サイトには色によるセマンティクスは表面化していない。ミニマルデザイン向け推奨値:

- **Danger**: `#c0392b`（深い赤、控えめ）
- **Warning**: `#8b6914`（暗いゴールド）
- **Success**: `#2e7d32`（深緑）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP weight 300**（Google Fonts）—— すべての和文テキスト
- **明朝体**: 使用なし

### 3.2 欧文フォント

- **サンセリフ**: **Helvetica**（system font）—— 見出し・ナビ・ボタンラベル
- Helvetica がない環境では sans-serif にフォールバック

### 3.3 font-family 指定

```css
/* 和文本文・デフォルト */
font-family: "Noto Sans JP", sans-serif;

/* 欧文見出し・ナビ・ボタン */
font-family: Helvetica, sans-serif;
```

**フォールバックの考え方**:
- 和文は Noto Sans JP → sans-serif の 2 段
- 欧文は Helvetica → sans-serif。Mac では Helvetica Neue が使用される
- **ウェイトが重要**: 常に 300（Light）を指定

> **代替フォント注記**: Helvetica は Mac バンドル。Windows 環境では Arial が代替される。Noto Sans JP は Google Fonts で利用可能。

### 3.4 文字サイズ・ウェイト階層

> 実測値（timeandstyle.com/jp/、2026-06-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero (EN) | Helvetica | 44px | 300 | 57.2px (x1.3) | 1px | `#000000` | "The Geography of Japanese Making" |
| Section EN | Helvetica | 33px | 300 | 33px (x1.0) | 1px | `#000000` | "Materials, Regions and Craftsmanship" |
| Subheading (EN) | Helvetica | 30px | 300 | 45px (x1.5) | 1px | `#000000` | "Copenhagen 10 – 12 June 2026" |
| Section Label (EN) | Helvetica | 30px | 300 | 25.6px (x0.85) | 1.4px | `#000000` | "news" |
| H1 (Store) | Helvetica | 25px | 300 | 40px (x1.6) | 1px | `#000000` | "Time & Style Midtown" |
| Body (JP) | Noto Sans JP | 16px | 300 | 25.6px (x1.6) | 0.5px | `#000000` | 本文 |
| Button Label | Noto Sans JP | 15px | 300 | 15px (x1.0) | 0.5px | `#000000` | "More info" |
| Nav | Helvetica | 12px | 500 | 20px (x1.67) | 1px | `#000000` | "ニュース" |
| Nav Sub | Helvetica | 11px | 400 | 20px (x1.82) | 1px | `#000000` | サブメニュー |
| Post Title (JP) | Noto Sans JP | 16px | 300 | 19.2px (x1.2) | 0.5px | `#000000` | "価格改定のお知らせ" |
| Caption | Noto Sans JP | 13px | 300 | normal | 0.5px | `#000000` | フッターメニュー |
| Copyright | Noto Sans JP | 9px | 300 | 25.6px (x2.84) | 1px | `#000000` | © |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.6（16px / 25.6px）
- **見出しの行間**: 1.0〜1.5（欧文見出しは詰める）
- **本文の字間 (letter-spacing)**: 0.5px（≈0.03em）
- **欧文見出しの字間**: 1.0〜2.0px

**ガイドライン**:
- 全テキストに letter-spacing を入れる。0 にしない
- line-height は和文本文で 1.6、欧文見出しでは 1.0〜1.3 と詰める

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt 不使用 */
```

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Text Link（主要 CTA）**
- Background: transparent
- Text: `#000000`
- Padding: 0
- Border: none
- Font: Noto Sans JP / 15px / weight 300
- letter-spacing: 0.5px
- テキストリンク "More info" "more projects" のスタイル

**Surface Button**
- Background: `#f0f0f0`
- Text: `#000000`
- Padding: —
- Border Radius: 0
- Font: Noto Sans JP / 16px / weight 300

**See More Badge**
- Background: `rgba(255, 255, 255, 0.84)`
- Text: `#000000`
- Padding: 4px 8px
- Border Radius: 9px
- Font Size: 12px

**Search Button**
- Background: `#69727d`
- Text: `#ffffff`
- Border Radius: 0
- Font Size: 16px

### Inputs

- Background: `transparent`
- Border: none（下線のみのミニマルスタイル）
- Border Radius: 0px
- Font: Helvetica / 11〜15px / weight 200
- Color: `rgba(0, 0, 0, 0.7)`
- letter-spacing: 1px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 0px
- 画像を大きく、テキストは最小限
- Shadow: none

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 7px (0.44rem) |
| S | 11px (0.67rem) |
| M | 16px (1rem) |
| L | 24px (1.5rem) |
| XL | 36px (2.25rem) |
| XXL | 54px (3.38rem) |
| XXXL | 81px (5.06rem) |

### Container

- Max Width: 1200px
- Padding (horizontal): 40px

### Grid

- Columns: 1〜3（コンテンツに応じて）
- Gutter: 40px（広い）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素（完全フラット） |

シャドウは一切使用しない。深度は **面色の違い**（`#ffffff` vs `#f0f0f0`）のみで表現する。

---

## 7. Do's and Don'ts

### Do（推奨）

- **すべてのテキストを weight 300 で設定する**（ナビの 500 が唯一の例外）
- letter-spacing を **必ず入れる**（和文 0.5px、欧文 1〜2px）
- 写真は **画面幅いっぱい**に使い、テキストは最小限にする
- 色は **黒・白・グレーの無彩色のみ** にする
- ボタンは **テキストリンクスタイル** か **直角ソリッド** にする

### Don't（禁止）

- **太字（700 以上）を使わない**。このブランドでは bold は存在しない
- 彩度のある色（青・赤・緑等）を使わない
- ピル型ボタン（radius 9999px）を使わない
- letter-spacing: 0 にしない（すべてに spacing が入る）
- 情報を密に詰め込まない。余白を大きく取る
- box-shadow を使わない

---

## 8. Responsive Behavior

### Breakpoints

Elementor ベース:

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレット |
| Desktop | > 1024px | デスクトップ |

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイル: 見出しは 60〜70% に縮小。本文は 16px 維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: none (achromatic only)
Text Color: #000000
Background: #ffffff (main), #f0f0f0 (surface)
Font JP: "Noto Sans JP", sans-serif (weight 300)
Font EN: Helvetica, sans-serif (weight 300)
Body Size: 16px
Line Height: 1.6
Letter Spacing: 0.5px (JP), 1px (EN headings)
Font Weight: 300 (all), 500 (nav only)
Button Radius: 0
Shadow: none
```

### プロンプト例

```
Time & Style のデザインシステムに従って、商品詳細ページを作成してください。
- 背景: #ffffff
- フォント (JP): "Noto Sans JP", weight 300, letter-spacing 0.5px
- フォント (EN): Helvetica, weight 300, letter-spacing 1px
- 見出し: 30-44px / weight 300 / Helvetica
- 本文: 16px / weight 300 / line-height 1.6 / Noto Sans JP
- 色は黒白グレーのみ使用。彩度のある色は禁止
- ボタン: テキストリンクか直角。shadow なし
- レイアウト: 写真を大きく、テキスト最小限、余白贅沢に
```
