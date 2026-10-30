# DESIGN.md — KURAND（クランド）

> KURAND（https://kurand.jp/）のデザイン仕様書。
> 500種以上のオリジナルクラフト酒を扱うオンライン酒屋。
> 実サイトの computed style 実測（2026-06-06 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **温かみのあるゴールド系アクセント + Noto Sans Japanese / Zen Kaku Gothic New** のモダンな EC サイト。クラフト酒の世界観を「和の温もり」と「モダンな UI」のバランスで表現。カテゴリタグはピル型、CTA は角丸 8px
- **密度**: 本文 15〜16px / line-height 1.5〜1.8 / 商品カードは画像主体でコンパクト。情報量は多いが余白で呼吸を確保
- **キーワード**: クラフト酒、温かみ、ゴールド、Zen Kaku Gothic New、Noto Sans Japanese、モダン EC、丸角、Tailwind CSS
- **特徴**:
  - **見出し専用フォント「Zen Kaku Gothic New」** を使用。柔らかいゴシック体でクラフト感を演出
  - **ゴールド系のブランドカラー**（`#8d6941` 〜 `#b79862`）がタイトル・タグ・アクセントに一貫して使われる
  - **CTA は角丸 8px**。ピルではなく控えめな丸み
  - **カテゴリナビはピル型（9999px）** で白地に黒文字
  - **商品タグは小さな角丸（4px）** でゴールド系背景
  - **テキストカラーは純黒ではなく暖かいダークブラウン `#2b281e`**

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。Tailwind CSS カスタムクラスに基づく。

### Brand

- **Gold Dark** (`#8d6941`): ブランドカラー。セクション見出し（text-text-info）
- **Gold Medium** (`#b79862`): アクセントカラー。年齢確認ボタン背景
- **Gold Light** (`#a5814d`): スライダードット・装飾

### CTA / Buttons

- **Primary CTA（黒ソリッド）**: 背景 `#111111` / 文字 `#ffffff` / **radius `8px`** / padding `8px 24px` / 12px / weight 700 / "ログイン/新規会員登録はこちら"
- **Secondary CTA（白ソリッド）**: 背景 `#ffffff` / 文字 `#111111` / border `1px solid #111111` / radius `8px` / padding `8px 24px` / 12px / weight 700 / "お問い合わせ"
- **Register CTA（ダークブラウン）**: 背景 `#2b281e` / 文字 `#ffffff` / radius `4px` / 16px / weight 400 / "登録する"
- **Category Pill（白ピル）**: 背景 `#ffffff` / 文字 `#111111` / radius `9999px` / 15px / weight 400
- **Tag Badge（ゴールド）**: 背景 `#f7f5ef` / 文字 `#8d6941` / radius `4px` / padding `3px 6px` / 13px / weight 700 / "期間限定"

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Near Black | `#111111` | (17, 17, 17) | CTA 背景・強調テキスト |
| Dark Brown | `#2b281e` | (43, 40, 30) | 本文テキスト・メインテキスト色 |
| Gray Dark | `#424a53` | (66, 74, 83) | ヒーロー背景オーバーレイ |
| Gray Mid | `#6e7781` | (110, 119, 129) | セカンダリテキスト |
| Gray Light | `#afb8c1` | (175, 184, 193) | プレースホルダー |
| Border | `#d0d7de` | (208, 215, 222) | 入力欄ボーダー・区切り |
| Surface Primary | `#eaeef2` | (234, 238, 242) | セット背景 |
| Surface Gold | `#f7f5ef` | (247, 245, 239) | タグ背景 |
| Surface Tertiary | `#f6f6f6` | (246, 246, 246) | ヘッダーサーチ背景 |
| Surface Warm | `#f9f5ed` | (249, 245, 237) | About ページ背景 |
| White | `#ffffff` | (255, 255, 255) | メイン背景・カード |

### Semantic

- **Danger / Sold Out** (`#e81903`): 在庫切れ表示・警告
- **Warning**: `#b79862`（ゴールドと共有）
- **Success**: `#2d8a4e`（推奨値）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文）**: **Noto Sans Japanese**（Google Fonts）
- **ゴシック体（見出し）**: **Zen Kaku Gothic New**（Google Fonts）—— セクションタイトルに使用

### 3.2 欧文フォント

- **サンセリフ**: Noto Sans Japanese 内の欧文グリフを使用（欧文専用フォント指定なし）

### 3.3 font-family 指定

```css
/* 本文・UI */
font-family: "Noto Sans Japanese", sans-serif;

/* セクション見出し */
font-family: "Zen Kaku Gothic New";
```

**フォールバックの考え方**:
- Noto Sans Japanese はフォールバックに sans-serif のみ
- Zen Kaku Gothic New は単独指定（フォールバックなし）

> **代替フォント注記**: "Noto Sans Japanese" は "Noto Sans JP" と同じ。Google Fonts からは `Noto+Sans+JP` で読み込む。Zen Kaku Gothic New も Google Fonts で利用可能。

### 3.4 文字サイズ・ウェイト階層

> 実測値（kurand.jp、2026-06-06 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section Title | Zen Kaku Gothic New | 22px | 700 | 33px (x1.5) | normal | `#8d6941` | "よくあるご質問" |
| Heading (Featured) | Zen Kaku Gothic New | 22px | 700 | 33px (x1.5) | normal | `#111111` | "今月の特集" |
| H4 (Card Title) | Noto Sans Japanese | 18px | 700 | 28px (x1.56) | normal | `#2b281e` | 商品名 |
| H3 (Nav Section) | Noto Sans Japanese | 15px | 700 | 27px (x1.8) | normal | `#111111` | "お酒" |
| Body | Noto Sans Japanese | 16px | 400 | 24px (x1.5) | normal | `#2b281e` | 本文 |
| Body (15px) | Noto Sans Japanese | 15px | 400 | 27px (x1.8) | normal | `#2b281e` | リスト・ナビ |
| Card Sub | Noto Sans Japanese | 14px | 700 | 21px (x1.5) | normal | `#2b281e` | カードタイトル |
| Tag | Noto Sans Japanese | 13px | 700 | 13px (x1.0) | normal | `#8d6941` | "期間限定" |
| CTA | Noto Sans Japanese | 12px | 700 | 18px (x1.5) | normal | `#ffffff` | ボタンラベル |
| Sold Out | Noto Sans Japanese | 24px | 700 | 32px (x1.33) | normal | `#e81903` | "SOLD OUT" |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.5〜1.8（サイズに応じて。15px は 1.8、16px は 1.5）
- **見出しの行間**: 1.5
- **本文の字間 (letter-spacing)**: normal（0）
- **見出しの字間**: normal（0）

### 3.6 禁則処理・改行ルール

```css
/* Tailwind CSS デフォルト */
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

**Primary（黒ソリッド）**
- Background: `#111111`
- Text: `#ffffff`
- Padding: 8px 24px
- Border Radius: 8px
- Font Size: 12px
- Font Weight: 700

**Secondary（白ソリッド）**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#111111`
- Padding: 8px 24px
- Border Radius: 8px

**Category Pill**
- Background: `#ffffff`
- Text: `#111111`
- Border Radius: 9999px
- Padding: 8px 16px
- Font Size: 15px

**Tag Badge**
- Background: `#f7f5ef`
- Text: `#8d6941`
- Padding: 3px 6px
- Border Radius: 4px
- Font Size: 13px
- Font Weight: 700

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#d0d7de`
- Border (focus): 1px solid `#111111`
- Border Radius: 6px
- Padding: 8px 12px
- Font Size: 15px
- Line Height: 27px

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 4px
- Padding: 0px
- Shadow: none
- 商品画像は角丸なし、下にタイトル＋価格

---

## 5. Layout Principles

### Spacing Scale

Tailwind CSS カスタムスケール:

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |

### Container

- Max Width: 1296px
- Padding (horizontal): 16px

### Grid

- Columns: 2〜4（レスポンシブ）
- Gutter: 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラットデザイン） |
| 1 | `0 1px 3px rgba(0,0,0,0.08)` | カードホバー |
| 2 | `0 4px 12px rgba(0,0,0,0.1)` | モーダル・ドロップダウン |

---

## 7. Do's and Don'ts

### Do（推奨）

- セクション見出しには **Zen Kaku Gothic New 700** を使い、ゴールド色（`#8d6941`）にする
- CTA は角丸 **8px** で統一する
- カテゴリナビは **ピル型（9999px）** にする
- テキスト色には暖かいダークブラウン `#2b281e` を使う（純黒を避ける）
- タグ・バッジには金色系の背景 `#f7f5ef` + テキスト `#8d6941` を使う

### Don't（禁止）

- 本文に Zen Kaku Gothic New を使わない（見出し専用）
- 純黒 `#000000` をテキスト色に使わない（`#2b281e` または `#111111` を使う）
- ボタンの角丸を 9999px にしない（カテゴリピル以外は 8px）
- 寒色系のアクセントカラーを使わない（ブランドはゴールド/暖色系）
- 商品画像に角丸を付けない

---

## 8. Responsive Behavior

### Breakpoints

Tailwind CSS ベース + カスタム:

| Name | Width | 説明 |
|------|-------|------|
| sp | < 768px | スマートフォン |
| lg | ≥ 768px | デスクトップ |

### タッチターゲット

- 最小サイズ: 44px x 44px

### フォントサイズの調整

- モバイル: 本文 15px 維持、カード並びは 2 列から 1 列へ

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Color: #8d6941 (gold dark), #b79862 (gold medium)
Text Color: #2b281e (main), #111111 (emphasis)
Background: #ffffff (main), #f6f6f6 (surface), #f9f5ed (warm)
Font Body: "Noto Sans Japanese", sans-serif
Font Heading: "Zen Kaku Gothic New"
Body Size: 15-16px
Line Height: 1.5-1.8
Button Radius: 8px
Tag Radius: 4px
Pill Radius: 9999px (category nav only)
```

### プロンプト例

```
KURANDのデザインシステムに従って、商品一覧ページを作成してください。
- 背景: #ffffff（メイン）
- セクション見出し: Zen Kaku Gothic New / 22px / 700 / #8d6941
- 本文: "Noto Sans Japanese" / 15px / 400 / #2b281e
- CTA: #111111 bg / #ffffff text / border-radius 8px
- カテゴリピル: #ffffff bg / #111111 text / border-radius 9999px
- タグ: #f7f5ef bg / #8d6941 text / border-radius 4px / 13px / bold
```
