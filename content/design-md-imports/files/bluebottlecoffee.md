# DESIGN.md — Blue Bottle Coffee Japan

> Blue Bottle Coffee Japan（https://store.bluebottlecoffee.jp/）のデザイン仕様書。
> スペシャルティコーヒーのオンラインストア。クリーンで静謐な空気感を、スカイブルーと広い余白で表現。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 静謐・クリーン・ミニマル。ほぼ全要素が weight 400（Regular）で統一された「声を張らない」タイポグラフィ。ゴーストボタン（枠線のみ・塗りなし）の CTA が象徴的
- **密度**: 本文の line-height 2.0、見出しも 1.5〜2.0 と非常にゆったり。商品一覧は余白多めのグリッド。情報密度より空気感を優先
- **キーワード**: 静謐、スカイブルー、ゴーストCTA、ウェイト400統一、ゆとりのある行間、コーヒーハウスの余白
- **特徴**:
  - 和文フォントに **AXIS Font ベーシック R ProN**（Adobe Fonts）を使用。幾何学的なサンセリフで、ブランドの「設計された静けさ」を支える
  - 欧文見出し・CTA に **Figtree**（Google Fonts の幾何学的サンセリフ）を使用。CTA の letter-spacing が **0.2em** と極端に広い
  - CSS 変数で Jost がテキスト用に定義されているが、実際の computed style は AXIS Font が適用されている
  - **ブランドカラーは `#00a9e0`（スカイブルー）**。CTA ボーダー、アナウンスメントバー、ニュースレターで使用。面積は控えめ
  - **リンクは `#a17c51`（ゴールド）**。スカイブルーに対するウォームアクセント
  - ほぼすべてのテキスト要素が **weight 400**。太字（700）はランキング番号等の極めて限定的な場面のみ
  - ボタンは **border-radius: 0**（角張ったゴーストボタン）。pill でも角丸でもない、直線的なスタイル
  - セカンダリ背景に **`#f1e4d8`（ウォームベージュ）** を使用。コーヒーの温かみを演出
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **Brand Blue** (`#00a9e0`): メインのブランドカラー。CTA ボタンのボーダー・背景、アナウンスメントバー、ニュースレター入力のアクセント。スカイブルー系で爽やかさを演出
- **Link Gold** (`#a17c51`): リンクテキスト色。コーヒーの焙煎色を連想させるウォームアクセント。Brand Blue との温度差がブランドの個性

### CTA / Buttons

- **Ghost CTA**: ボーダー `#00a9e0` / 文字 `#00a9e0`（または白地に青文字）/ 背景 `transparent` / radius `0`（直角）/ padding `14px 28px` / Figtree 12px / letter-spacing `0.2em`
- **Filled CTA（アナウンスメントバー上）**: 背景 `#00a9e0` / 文字 `#ffffff` / 同スタイル
- **Category Tag**: ボーダー `#7e7e7e` / 文字 `#454545` / 背景 `transparent` / radius `0` / padding `5px 10px` / AXIS Font 14px

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#454545` | (69, 69, 69) | 見出し・本文テキスト |
| Header Text | `#333333` | (51, 51, 51) | ヘッダー・ナビゲーション |
| Text Secondary | `#7e7e7e` | (126, 126, 126) | 価格・補助テキスト |
| Border | `#e3e3e3` | (227, 227, 227) | 入力欄のボーダー |
| Header Border | `#e0e0e0` | (224, 224, 224) | ヘッダー・フッターの区切り線 |
| Warm Beige | `#f1e4d8` | (241, 228, 216) | セカンダリ背景・プロモ面 |
| White | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic

- **Sale Red** (`#f94c43`): セール価格の赤。商品一覧のディスカウント表示
- **Star Rating** (`#f6a429`): レビューの星評価色

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **A+mfCv-AXIS Font ベーシック R ProN**（Adobe Fonts）を最優先。幾何学的サンセリフで、整然とした印象
- **フォールバック**: `sans-serif`（CSS 変数上のフォールバック。実質的に AXIS Font がない環境ではシステムフォントにフォールバック）
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **見出し・CTA**: **Figtree**（Google Fonts）— 幾何学的サンセリフ。CTA ラベルに極端な字間（0.2em）で使用
- **テキスト変数**: **Jost**（Google Fonts）— CSS 変数 `--font-body-family` に定義されているが、実際の computed style では AXIS Font が優先されている
- **数字・価格**: AXIS Font の欧文グリフがそのまま使われる

### 3.3 font-family 指定

```css
/* 本文・見出し・ナビゲーション */
font-family: "A+mfCv-AXIS Font ベーシック R ProN", sans-serif;

/* CTA ボタン（欧文表記） */
font-family: Figtree, sans-serif;

/* CSS 変数で定義されているフォント（computed style では AXIS Font が優先） */
--font-heading-family: Figtree, sans-serif;
--font-body-family: Jost, sans-serif;
```

**フォールバックの考え方**:
- AXIS Font（Adobe Fonts）が最優先。和文・欧文ともにブランド書体で統一
- 欧文 CTA のみ Figtree を明示的に使い分ける
- AXIS Font は Adobe Fonts のドメインライセンスのため、非契約環境では表示されない

> **代替フォント注記**: AXIS Font は Adobe Fonts のドメインライセンスのため、外部プレビューでは再現不可。代替として **Zen Kaku Gothic New**（Google Fonts）を使用すると、幾何学的で整った字面が近い印象になる（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（ストアトップ／コレクションページ、2026-05-08 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Display (h1) | AXIS Font | 40px | 400 | 60px (x1.5) | 1.6px (0.04em) | `#454545` | コレクションページタイトル |
| Section Heading (h2) | AXIS Font | 24px | 400 | 48px (x2.0) | 0.96px (0.04em) | `#454545` | セクション見出し |
| Promo Title | AXIS Font | 22px | 400 | 30.25px (x1.375) | 0.88px (0.04em) | `#454545` | プロモーションタイトル |
| Nav Links | AXIS Font | 15px | 400 | 30px (x2.0) | 0.6px (0.04em) | `#333333` | ヘッダーナビ |
| Body | AXIS Font | 14px | 400 | 28px (x2.0) | normal | `#454545` | 本文 |
| Promo Subtitle | AXIS Font | 13px | 400 | 19.5px (x1.5) | 0.52px (0.04em) | `#454545` | プロモーション補足 |
| Product Title (h3) | AXIS Font | 12px | 400 | 24px (x2.0) | 0.48px (0.04em) | `#454545` | 商品名 |
| Product Price | AXIS Font | 12px | 400 | 24px (x2.0) | 0.48px (0.04em) | `#7e7e7e` | 価格表示 |
| CTA Button | Figtree | 12px | 400 | normal | 2.4px (0.2em) | `#00a9e0` | ゴーストCTA ラベル |
| Caption / Footer | AXIS Font | 10px | 400 | 20px (x2.0) | normal | `#454545` | フッター・注釈 |
| Ranking Number | AXIS Font | — | **700** | — | — | — | "No.1" 等の限定的な太字使用 |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (14px)**: `2.0`（28px / 14px）— 非常にゆったり。長文でも疲れにくい読書体験
- **見出し (40px)**: `1.5`（60px / 40px）— 見出しとしては広め
- **セクション見出し (24px)**: `2.0`（48px / 24px）— 見出しにも本文と同じ行間
- **商品タイトル (12px)**: `2.0`（24px / 12px）— 小さな文字も広い行間で可読性を確保
- **プロモタイトル (22px)**: `1.375`（30.25px / 22px）— やや詰め
- **補足 (13px)**: `1.5`（19.5px / 13px）

**字間 (letter-spacing)** — 実測:
- **見出し・ナビ・商品名**: `0.04em` — 日本語の可読性向上の定石的な値
- **本文 (14px)**: `normal` — 本文には字間を加えない
- **CTA (Figtree)**: `0.2em` — 極端に広い。アルファベットのCTAラベルを際立たせる演出
- **フッター・注釈 (10px)**: `normal`

**ガイドライン**:
- Blue Bottle のリズムは **line-height 2.0 が基本**。見出しから本文、商品名まで一貫して広い行間を使う
- 字間は **日本語は 0.04em、欧文CTAは 0.2em** の二段構え
- 本文の letter-spacing は normal（0）で、0.04em は見出し・ラベル・ナビに限定

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定 */
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

- 商品タイトルは短い（12px / weight 400）ため、改行はほとんど発生しない
- CTA ラベルは `white-space: nowrap` 相当

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- AXIS Font のデフォルトメトリクスに任せ、letter-spacing 0.04em で見た目を調整する方針
- 本文は letter-spacing normal で、palt 不要

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（ゴーストボタン）** — "SHOP NOW" 等
- Background: `transparent`
- Text: `#00a9e0`
- Border: `1px solid #00a9e0`
- Padding: `14px 28px`
- Border Radius: `0`（直角。pill でも角丸でもない）
- Font: Figtree, 12px, weight 400, letter-spacing `0.2em`（2.4px）
- テキスト変換: `uppercase`

**Filled CTA（アナウンスメントバー上）**
- Background: `#00a9e0`
- Text: `#ffffff`
- Border: none
- Padding: `14px 28px`
- Border Radius: `0`
- Font: Figtree, 12px, weight 400, letter-spacing `0.2em`

**Category Tag（フィルター）**
- Background: `transparent`
- Text: `#454545`
- Border: `1px solid #7e7e7e`
- Padding: `5px 10px`
- Border Radius: `0`
- Font: AXIS Font, 14px, weight 400

**Carousel Button（前後ナビ）**
- Background: `#ffffff`
- Border Radius: `50%`（円形）
- Shadow: `0px 2px 10px rgba(54, 54, 54, 0.15)`

### Inputs

- Background: `#ffffff`
- Border: `1px solid #e3e3e3`
- Border (focus): `1px solid #00a9e0`（推奨。Brand Blue に揃える）
- Border Radius: `0`（直角。ボタンと統一）
- Padding: `12px 14px`
- Font: AXIS Font, 12px, weight 400
- Height: 自動（padding + font-size + line-height で約 40px）

### Cards（商品カード）

- Background: `#ffffff`
- Border: なし（ボーダーレス）
- Border Radius: `0`（直角。ブランド全体で直線的）
- Padding: なし（画像は端まで、テキストは下部にフラット配置）
- Shadow: なし（フラット）
- ホバー: opacity 変化程度の控えめなインタラクション

### Header

- Background: `#ffffff`
- Border Bottom: `1px solid #e0e0e0`
- Position: sticky
- ロゴ: Blue Bottle Coffee のブランドマーク

### Footer

- Background: `#ffffff`
- Border Top: `1px solid #e0e0e0`
- Padding: `48px` 程度
- フッターリンク: 10px / AXIS Font / weight 400

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | タグ内の縦余白 |
| M | 16px | 商品カード内の段落間 |
| L | 24px | セクション内の見出しと本文 |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度
- Padding (horizontal): mobile `16px` / desktop `32px`

### Grid

- 商品一覧: 4カラム（デスクトップ）/ 2カラム（タブレット）/ 1カラム（モバイル）
- Gutter: `20〜24px`

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | 商品カード・ボタン・ヘッダー（基本フラット） |
| 1 | `0px 2px 10px rgba(54, 54, 54, 0.15)` | カルーセル前後ボタン（実測値） |
| 2 | `0px 4px 16px rgba(0, 0, 0, 0.08)` | ドロップダウン・ホバーカード（推奨） |
| 3 | `0px 8px 24px rgba(0, 0, 0, 0.10)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`。フラットデザインが基本
- 立体感は **ウォームベージュ面 `#f1e4d8`** と **余白** で表現
- 影を使う場合は **控えめな opacity**（0.08〜0.15）で静かに

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストは **weight 400 を基本**にする。Blue Bottle のUIはほぼ全要素 Regular ウェイト
- 本文の line-height は **2.0** を基本にする（14px の本文なら 28px）
- 日本語の見出し・ラベルには **letter-spacing 0.04em** を適用する
- CTA は **ゴーストボタン**（枠線 `#00a9e0` + 透明背景 + 直角）を基本にする
- CTA のフォントは **Figtree + letter-spacing 0.2em** で欧文を大きく開く
- リンクには **ゴールド `#a17c51`** を使い、Brand Blue との温度差を出す
- セカンダリ背景には **ウォームベージュ `#f1e4d8`** を使い、コーヒーの温もりを表現する
- 余白を惜しまない。商品カード間、セクション間に十分な空白を確保する

### Don't（禁止）

- **weight 700（Bold）を多用しない** — Blue Bottle で太字が使われるのはランキング番号等の極めて限定的な場面のみ
- **border-radius を付けない** — CTA・入力欄・カードすべて radius 0 が基本。pill（9999px）や角丸（8px）は Blue Bottle の直線的な世界観を壊す
- **Brand Blue `#00a9e0` を広い面積に塗らない** — アナウンスメントバー以外では枠線・テキスト色として控えめに使う
- **本文に line-height 1.5 以下を使わない** — Blue Bottle の空気感は line-height 2.0 の余白から生まれる
- **冷たいグレー**（`#6b7280`、`#9ca3af`）を使わない — テキストは `#454545`（ウォームグレー）、補助は `#7e7e7e`
- **CTA の letter-spacing を狭くしない** — Figtree 12px / 0.2em の組み合わせが Blue Bottle の CTA アイデンティティ
- **派手なホバーアニメーション**を入れない — opacity 変化程度の静かなインタラクションに留める

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 749px | モバイルレイアウト（1カラム商品一覧） |
| Tablet | 750px〜989px | タブレット（2カラム商品一覧） |
| Desktop | ≥ 990px | デスクトップ（4カラム商品一覧） |

### モバイル時の調整

- Display H1: 40px → 28〜32px
- Section H2: 24px → 20px
- 本文サイズは 14px を維持（line-height 2.0 も維持）
- ナビはハンバーガーメニューに折りたたみ
- 商品グリッドは2カラム→1カラムに変化

### タッチターゲット

- CTA ボタン: 高さ約 42px（padding 14px x 2 + 12px font ≒ 40px。最低 44px 推奨）
- カテゴリタグ: 高さ約 34px（padding 5px x 2 + 14px font + line-height）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Blue (CTA border/text): #00a9e0
Link Gold: #a17c51
Text Primary: #454545
Header Text: #333333
Text Secondary: #7e7e7e
Warm Beige Surface: #f1e4d8
Border: #e3e3e3
Header Border: #e0e0e0
Sale Red: #f94c43
Star Rating: #f6a429
White: #ffffff

Font (和文): "A+mfCv-AXIS Font ベーシック R ProN", sans-serif
Font (CTA): Figtree, sans-serif
（AXIS Font 不在時の代替: Zen Kaku Gothic New）

Body: 14px / weight 400 / line-height 2.0 / letter-spacing normal / color #454545
Heading Display: 40px / weight 400 / line-height 1.5 / letter-spacing 0.04em
Section Heading: 24px / weight 400 / line-height 2.0 / letter-spacing 0.04em
Product Title: 12px / weight 400 / line-height 2.0 / letter-spacing 0.04em
CTA: Figtree 12px / weight 400 / letter-spacing 0.2em / uppercase

Border Radius: 0（全要素直角）
Shadow: 基本 none。フラットデザイン
```

### プロンプト例

```
Blue Bottle Coffee のデザインに従って、コーヒー商品一覧ページを作成してください。
- フォント（和文）: "A+mfCv-AXIS Font ベーシック R ProN", sans-serif（代替: Zen Kaku Gothic New）
- フォント（CTA）: Figtree, sans-serif / 12px / weight 400 / letter-spacing 0.2em / uppercase
- セクション見出し: 24px / weight 400 / line-height 2.0 / letter-spacing 0.04em / color #454545
- 商品タイトル: 12px / weight 400 / line-height 2.0 / letter-spacing 0.04em / color #454545
- 価格: 12px / weight 400 / color #7e7e7e
- 本文: 14px / weight 400 / line-height 2.0 / letter-spacing normal / color #454545
- CTA ボタン: border 1px solid #00a9e0 / 背景 transparent / 文字 #00a9e0 / radius 0 / padding 14px 28px
- リンク色: #a17c51（ゴールド）
- セール価格: #f94c43
- カード: ボーダーなし / radius 0 / shadow なし / フラット
- セカンダリ背景: #f1e4d8（ウォームベージュ）
- weight 700 は使わない（全要素 400 が基本）
- border-radius は付けない（直角が Blue Bottle のスタイル）
- 余白を惜しまず、静謐で呼吸のあるレイアウトにする
```
