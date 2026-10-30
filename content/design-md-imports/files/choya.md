# DESIGN.md -- CHOYA (チョーヤ梅酒)

> CHOYA 公式サイト (https://www.choya.co.jp/) のデザイン仕様書。
> 1914年創業の梅酒メーカー。「The CHOYA」「さらりとした梅酒」等で知られる日本を代表する梅酒ブランド。
> 明朝体見出し + ゴシック体本文の二書体構成で、老舗の品格と現代的な清潔感を両立。実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 明朝体の見出しとゴシック体の本文で、梅酒づくりの伝統と品格を表現。白背景にグレーテキスト (`#666`) という控えめな配色で、商品写真を主役にする洗練されたプレゼンテーション
- **密度**: ゆったりとした余白を持つプロダクトショーケース型。各商品カテゴリにアクセントカラーを割り当て、視覚的な分類を助ける
- **キーワード**: 明朝体、伝統、グリーン、マルチカラーカテゴリ、ゴーストボタン
- **特徴**: **Noto Serif JP（見出し）と Noto Sans JP（本文）の二書体構成**。ブランドグリーン `#16ae41` をセクション見出しに使用し、商品カテゴリごとに固有のアクセントカラー（ゴールド・レッド・ブルー・オレンジ・ピンク）を持つ。CTAは枠線のみのゴーストボタンが基本で、年齢確認ゲートのみピルボタン。見出しの `letter-spacing: 0.1~0.15em` が広く、格式のある佇まいを作る。`font-feature-settings: "palt"` がグローバルに適用されている

---

## 2. Color Palette & Roles

### Primary (ブランドカラー)

- **CHOYA Green** (`#16ae41`): メインのブランドカラー。セクション見出し（H2）、ブランドアイデンティティ要素に使用
- **Button Green** (`#2dae37`): 年齢確認ゲートのCTAボタン背景。ブランドグリーンのやや明るいバリエーション

### Category Accent (カテゴリ別アクセントカラー)

- **Gold** (`#ccac38`): CRAFT CHOYA カテゴリ。プレミアムラインを表現
- **Red** (`#e14141`): "その他" カテゴリ
- **Blue** (`#3d9cc8`): "ノンアルコール" カテゴリ
- **Orange** (`#ee9303`): "ソフトドリンク" カテゴリ
- **Pink** (`#fb5e82`): "食品" カテゴリ

### Neutral (ニュートラル)

- **Text Primary** (`#666666`): 本文テキスト、見出し。純黒ではなくミディアムグレーを採用し、上品で柔らかい印象
- **Text Dark** (`#333333`): 強調テキスト
- **Border** (`#666666`): ゴーストボタンの枠線、区切り線
- **Background** (`#ffffff`): ページ背景
- **Surface Dark** (`#323232`): CM/MOVIE セクションの暗い背景
- **Surface Light** (`#f5f5f5`): セクション背景、カード面

> **Note**: CHOYA の配色は **白地 + グレーテキスト + グリーンアクセント** が基本。商品カテゴリごとに固有のアクセントカラーを持つ多色設計だが、各色はカテゴリ見出しやラベルに限定して使い、全体の統一感を保っている。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: Noto Sans JP
- **明朝体（見出し）**: Noto Serif JP

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans JP に内包される欧文グリフを使用
- **セリフ**: Noto Serif JP に内包される欧文グリフを使用

### 3.3 font-family 指定

```css
/* 本文・ナビゲーション */
font-family: "Noto Sans JP", sans-serif;

/* 見出し・CTA */
font-family: "Noto Serif JP", serif;
```

**フォールバックの考え方**:
- Google Fonts の Noto Sans JP / Noto Serif JP を Web フォントとして読み込む設計
- フォールバックは generic family のみのシンプルな構成
- 見出しと本文で書体を明確に分ける二書体構成

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H1 Page Title | Noto Serif JP | 31px | 400 | 1.3 | 0.075em | 商品ページタイトル |
| H2 Section | Noto Serif JP | 36px | 600 | 1.3 | 0.1~0.15em | セクション見出し。色は `#16ae41` |
| H3 Product | Noto Sans JP | 16px | 400 | 1.3 | 0.1em | 商品名 |
| H3 Recommend | Noto Serif JP | 25px | 700 | 1.3 | 0.15em | おすすめセクション |
| Body | Noto Sans JP | 14px | 400 | 1.3 | normal | 本文テキスト |
| CTA | Noto Serif JP | 20px | 500 | 1.3 | 0.1em | ゴーストボタン |
| Caption | Noto Sans JP | 10px | 400 | 1.3 | normal | 注釈・キャプション |
| Nav | Noto Sans JP | 14px | 400 | 1.3 | normal | ナビゲーション |

> **Note**: 見出しは **明朝体 (Noto Serif JP)**、本文は **ゴシック体 (Noto Sans JP)** と明確に分けている。H2 の weight 600 は明朝体では太すぎない落ち着いた太さ。見出しの letter-spacing が 0.1~0.15em と広いのが特徴的。

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.3（日本語サイトとしてはやや詰まった設定）
- **見出しの行間**: 1.3
- **本文の字間 (letter-spacing)**: normal
- **見出しの字間**: 0.1~0.15em — 広めのトラッキングで格式のある印象

**ガイドライン**:
- line-height 1.3 は全体で統一されている。日本語サイトとしてはタイトだが、商品紹介中心のレイアウトでは情報密度を保てる
- 見出しの letter-spacing が 0.1em 以上と広く、明朝体の美しさを引き立てる
- 本文の字間は normal で、ゴシック体の自然な間隔を活かす

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: "palt" 1;  /* グローバルに適用 */
```

- **palt**: サイト全体にプロポーショナル字詰めが適用されている。見出し・本文を問わずグローバル設定
- 明朝体の見出しで palt + 広い letter-spacing の組み合わせにより、洗練された字詰めを実現

### 3.8 縦書き

該当なし。

---

## 4. Component Stylings

### Buttons

**Primary Ghost (メインCTA)**
- Background: transparent
- Text: `#666666`
- Border: 1px solid `#666666`
- Padding: 20px
- Border Radius: 0px
- Font Family: "Noto Serif JP", serif
- Font Size: 20px
- Font Weight: 500
- Letter Spacing: 0.1em
- 装飾: テキスト末尾に矢印 (→) を伴う

**Age Gate CTA (年齢確認)**
- Background: `#2dae37`
- Text: `#ffffff`
- Padding: 12px 32px
- Border Radius: 36px (pill)
- Font Family: "Noto Serif JP", serif
- Font Size: 15px
- Font Weight: 500

**Language Selector**
- Background: transparent
- Text: `#666666`
- Border: 1px solid `#666666`
- Padding: 4px 12px
- Border Radius: 20px
- Font Family: Arial, sans-serif
- Font Size: 12px

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Border (focus): 1px solid `#16ae41`
- Border Radius: 0px
- Padding: 10px 12px
- Font Size: 14px
- Font Family: "Noto Sans JP", sans-serif

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 0px
- Padding: 24px
- Shadow: none（フラットな設計）
- 商品カードは画像 + テキストの縦積みレイアウト

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

- Max Width: 1200px
- Padding (horizontal): 20px

### Grid

- Product Grid: 4 columns (デスクトップ) / 2 columns (モバイル)
- Gutter: 24px
- 商品画像はアスペクト比自由（商品パッケージの形状に合わせる）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準状態のカード・ボタン。**フラットが基本** |
| 1 | `0px 2px 8px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 | `0px 4px 16px rgba(0,0,0,0.12)` | モーダル・ポップオーバー |

> **Note**: CHOYA のデザインは **フラット指向**。影はホバー時の微細なフィードバック程度にしか使わず、基本はボーダーレスの白地設計。商品写真の美しさを阻害しないクリーンな表現。

---

## 7. Do's and Don'ts

### Do (推奨)

- 見出しには必ず Noto Serif JP（明朝体）を使い、本文は Noto Sans JP（ゴシック体）で分ける
- セクション見出し (H2) にはブランドグリーン `#16ae41` を使用する
- 見出しの `letter-spacing` は `0.1em` 以上に設定し、格式のある間隔を保つ
- CTAは枠線のみのゴーストボタンを基本とする — 矢印 (→) を末尾に添える
- テキストカラーは `#666666` を基本とし、柔らかく上品な印象を維持する
- `font-feature-settings: "palt"` をグローバルに適用する
- 各カテゴリの固有色はカテゴリ見出し・ラベルに限定して使う

### Don't (禁止)

- 本文テキストに明朝体を使わない — 明朝体は見出し・CTA専用
- 純黒 `#000000` をテキストに使わない — 基本は `#666666`
- CTAボタンを塗りつぶしにしない — ゴーストボタンが基本（年齢確認ゲートを除く）
- カテゴリ別アクセントカラーを本文やページ全体に広げない — カテゴリラベルに限定
- `border-radius` を大きくしない（pill ボタンは年齢確認ゲートのみ）
- 過度な影 (`box-shadow`) を使わない — フラットデザインが基本
- 見出しの letter-spacing を normal にしない — 広めのトラッキングがブランドの品格を支える

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | 1カラム、ハンバーガーメニュー |
| Tablet | <= 1023px | 2カラムグリッド |
| Desktop | > 1023px | 4カラムグリッド、フルナビゲーション |

### タッチターゲット

- 最小サイズ: 44px x 44px (WCAG 基準)

### フォントサイズの調整

- モバイルでは H2 を 36px -> 24px 程度に縮小
- 本文 14px は維持
- 商品グリッドは 4列 -> 2列に変更
- ゴーストボタンのパディングを縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #16ae41 (CHOYA Green)
Button Green: #2dae37 (Age Gate CTA)
Text Color: #666666
Background: #ffffff
Surface Dark: #323232
Heading Font: "Noto Serif JP", serif
Body Font: "Noto Sans JP", sans-serif
Body Size: 14px
Heading Letter Spacing: 0.1~0.15em
Line Height: 1.3
palt: グローバル適用
CTA Style: ゴーストボタン (border only, 矢印付き)
```

### プロンプト例

```
CHOYA のデザインシステムに従って、商品一覧ページを作成してください。
- 見出しフォント: "Noto Serif JP", serif (weight 600, letter-spacing: 0.1em)
- 本文フォント: "Noto Sans JP", sans-serif (weight 400)
- プライマリカラー: #16ae41 (セクション見出しに使用)
- テキストカラー: #666666
- 背景: #ffffff
- font-feature-settings: "palt" をグローバルに適用
- CTAはゴーストボタン (border: 1px solid #666, 矢印 → 付き)
- 商品カテゴリごとにアクセントカラーを変える
  - CRAFT: #ccac38, ノンアルコール: #3d9cc8, ソフトドリンク: #ee9303, 食品: #fb5e82
- グリッド: 4列 (デスクトップ), 2列 (モバイル)
```
