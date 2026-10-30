# DESIGN.md — Sghr（スガハラ / 菅原工芸硝子）

> Sghr 公式サイト（https://www.sugahara.com/）のデザイン仕様書。
> 1932年創業のハンドメイドガラスメーカー。職人の手仕事から生まれるガラス製品のブランド。
> サイトデザインは「ガラスの透明感と柔らかさ」を静かなブルーグレーのパレットで表現。
> 実サイトの computed style に基づいて記述。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: ブルーグレーのテキストカラーと純白背景で「ガラスの透明感」を表現。装飾を抑え、製品写真と余白で語るギャラリー型レイアウト
- **密度**: 情報密度は低い。大きな製品写真とゆとりある行間（line-height 2.0）で、ショールームのような空気感
- **キーワード**: 透明感、ブルーグレー、手仕事、ギャラリー型、静けさ
- **特徴**: テキストカラーに純黒を使わず **`#505f6e`（ブルーグレー）** を基調にする珍しい構成。和文に DNP秀英ゴシック銀（Adobe Fonts）、英語見出しに Larsseit（カスタムフォント）を使用。CTAは控えめなグレー塗りの角型ボタン。全体的に weight 400 のレギュラーウェイトで統一

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Steel Blue** (`#7495a6`): リンクカラー。ロゴや見出しアクセントに使用。ガラスの冷たい透明感を表現

### Text

- **Text Primary** (`#505f6e`): 本文・見出しの基本色。ブルーグレーで柔らかい印象
- **Text Nav** (`#333333`): ナビゲーションテキスト。やや濃いめ
- **Text Muted** (`#666666`): 小テキスト・キャプション（rgb(102,102,102)）
- **Text Sub** (`#66798a`): SNS テキスト・補助情報（rgb(102,121,138)）
- **Text Footer** (`#8c8c8c`): フッターテキスト
- **Text on Image** (`#ffffff`): 画像上のテキスト

### Surface

- **Background** (`#ffffff`): ページ標準背景
- **Surface Light** (`#fafafa`): フッター・セクション背景
- **Surface Footer** (`#fafafa`): フッターの薄いグレー面

### CTA / Button

- **CTA Background** (`#b2b2b2`): メインCTAボタンの背景（グレー）
- **CTA Text** (`#ffffff`): CTAテキスト
- **CTA Radius**: 0px（完全な矩形）

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: DNP秀英ゴシック銀 Std（dnp-shuei-gothic-gin-std / Adobe Fonts）

> **注意**: DNP秀英ゴシック銀はドメインライセンス。Google Fonts では **Zen Kaku Gothic New** が最も近い代替（同じくシャープで知的な印象のゴシック体）。

### 3.2 欧文フォント

- **ディスプレイ**: Larsseit-Regular（カスタム Web フォント。幾何学的でモダンなサンセリフ）

> **注意**: Larsseit はライセンスフォント。Google Fonts では **DM Sans** または **Plus Jakarta Sans** が幾何学的サンセリフとして代替候補。

### 3.3 font-family 指定

```css
/* 本文・UI 全般 */
font-family: dnp-shuei-gothic-gin-std, sans-serif;

/* 英語見出し・ブランド名 */
font-family: Larsseit-Regular, dnp-shuei-gothic-gin-std, sans-serif;
```

**フォールバックの考え方**:
- 和文は dnp-shuei-gothic-gin-std 一本。フォールバックは sans-serif のみ
- 英語の見出し・コレクション名に Larsseit を前に配置
- シンプルで潔い構成

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display EN | Larsseit | 36px | 400 | 1.5 | 0.06em | "Sghr ONLINE SHOP" 等 |
| Heading 1 EN | Larsseit | 32px | 400 | 1.5 | 0.06em | "COLLECTION" 等 |
| Heading 1 EN (image) | Larsseit | 32px | 400 | 1.3 | 0.12em | 画像上テキスト |
| Heading 2 JP | 秀英ゴシック銀 | 28px | 400 | 1.5 | 0.03em | 「お知らせ」等 |
| Heading 3 JP | 秀英ゴシック銀 | 24px | 400 | 2.0 | 0.035em | 本文見出し |
| Heading 4 JP | 秀英ゴシック銀 | 22px | 400 | 2.0 | 0.06em | サブ見出し |
| Body | 秀英ゴシック銀 | 15px | 400 | 2.0 | 0.056em | 本文 |
| Body Small | 秀英ゴシック銀 | 14px | 400 | 2.0 | 0.06em | 通常テキスト |
| Caption | 秀英ゴシック銀 | 12px | 400 | 2.0 | 0.06–0.07em | 補助・キャプション |
| Nav | 秀英ゴシック銀 | 13px | 400 | 60px | normal | グローバルナビ（高さ60pxの行） |
| Logo | 秀英ゴシック銀 | 18px | 700 | 1.0 | 0.047em | ロゴテキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 2.0（30px / 15px）。日本語として広め、ガラスの「空気」を含む
- **見出しの行間**: 1.5（和文見出し）/ 1.3–1.5（英語見出し）
- **本文の字間 (letter-spacing)**: 0.056–0.06em（0.84px / 14–15px）
- **見出しの字間**: 0.03–0.06em
- **英語見出しの字間**: 0.06–0.12em（画像上はより広め）

**ガイドライン**:
- line-height 2.0 が全体の統一値。本文もキャプションも 2.0
- letter-spacing は 0.84px がほぼ全要素で共通（0.06em 前後）
- weight は 400 一貫。700 はロゴテキストのみ

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt 不使用**: dnp-shuei-gothic-gin-std はそのままの字間で使用。palt による字詰めは適用していない

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（角型グレー）**
- Background: `#b2b2b2`
- Text: `#ffffff`
- Padding: 推定 12px 24px
- Border Radius: 0px（完全な矩形）
- Font Size: 14px
- Font Weight: 400

**テキストリンク**
- Text: `#7495a6`（Steel Blue）
- Decoration: none
- Font Weight: 400

### Carousel Dots

- Shape: circle
- Border Radius: 50%
- Color active: `#000000`
- Color inactive: transparent + border

### Inputs

- Background: `#ffffff`
- Border: none（下線のみの場合あり）
- Border Radius: 0px
- Font Size: 22px
- Letter Spacing: 1.32px (0.06em)
- Padding: 10px 0px
- Color placeholder: `#8c8c8c`

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 0px
- Shadow: none
- 余白のみで区切るフラットな構成

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 15px |
| M | 30px |
| L | 48px |
| XL | 80px |
| XXL | 120px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 40px

### Grid

- 製品一覧: 3–4カラム
- ギャラリー型レイアウト

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての要素 |

> Sghr のサイトはフラットデザイン。影を使わず、余白と背景色の微妙な変化で区切る。

---

## 7. Do's and Don'ts

### Do（推奨）

- テキストカラーは `#505f6e`（ブルーグレー）を基調にする
- line-height は 2.0 を基本とする
- letter-spacing は 0.06em 程度で統一する
- font-weight は 400 をデフォルトに（Bold は使わない）
- CTAは控えめなグレー背景（`#b2b2b2`）の矩形ボタンで

### Don't（禁止）

- テキストに純黒 `#000000` を使わない — ブルーグレーのトーンが壊れる
- border-radius を CTA に使わない — Sghr は完全な矩形
- box-shadow を使わない — フラットを維持
- font-weight: 700 を本文や見出しに使わない — ロゴのみ
- 彩度の高いアクセントカラーを使わない — モノクロ＋ブルーグレーの世界観

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### フォントサイズの調整

- モバイルでは英語見出し 32px → 24px 程度に縮小
- 本文の line-height 2.0 と letter-spacing 0.06em は維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #7495a6 (Steel Blue)
Text Color: #505f6e (Blue-Grey)
Background: #ffffff
Surface: #fafafa
CTA: #b2b2b2 bg / #ffffff text / 0px radius
Font JP: dnp-shuei-gothic-gin-std, sans-serif
Font EN: Larsseit-Regular, dnp-shuei-gothic-gin-std, sans-serif
Body Size: 14–15px
Body Weight: 400
Line Height: 2.0
Letter Spacing: 0.06em
OpenType: normal（palt 不使用）
```

### プロンプト例

```
Sghr（スガハラ）のデザインシステムに従って、製品一覧ページを作成してください。
- フォント: "Zen Kaku Gothic New", sans-serif（秀英ゴシック銀の代替）
- 英語見出し: "DM Sans", sans-serif（Larsseit の代替）
- テキスト色: #505f6e（ブルーグレー、純黒は使わない）
- リンク色: #7495a6
- 背景: #ffffff、セクション背景 #fafafa
- 行間: line-height 2.0 を全体に
- 字間: letter-spacing 0.06em
- CTA: 背景 #b2b2b2、白文字、角丸なし（矩形）
- 影: 使わない。余白のみで区切る
- ウェイト: 400 のみ（Bold 不使用）
```
