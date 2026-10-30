# DESIGN.md — KEYENCE（キーエンス）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 出典: https://www.keyence.co.jp/ — 2026-05-21 取得の computed style 実測値

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: B2B 産業機器メーカーとしての信頼性と機能性を前面に出したデザイン。CSS Custom Properties による設計トークン管理、赤をアクセントカラーに据えた堅実な構成
- **密度**: 商品カード・バナー・トピックスが密に配置された高情報密度の B2B サイト
- **キーワード**: テクニカル、信頼性、高機能、赤アクセント、B2B プロフェッショナル

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary / KEYENCE Red** (`#ea0437`): ブランドレッド。カルーセル矢印、CTA ボーダー、NEW バッジ、アクティブナビリンクに使用（`--KEYENCE_COLOR_RED`）
- **Primary Dark** (`#de0435`): テキスト上のレッド（`--KEYENCE_COLOR_FOREGROUND_RED`）

### Semantic（意味的な色）

- **Danger** (`#ea0437`): エラー（ブランドレッドと共用）
- **Warning** (`#e0a800`): 警告（推定値）
- **Success** (`#2e7d32`): 成功（推定値）
- **NEW Badge** (`#ea0437`): 新商品バッジ

### Neutral（ニュートラル）

- **Text Primary** (`#222222`): 本文テキスト（`--KEYENCE_COLOR_FOREGROUND_BLACK`）
- **Text Secondary** (`#6f6f6f`): 補足テキスト（`--KEYENCE_COLOR_FOREGROUND_GRAY`）
- **Text White** (`#ffffff`): ダーク背景上のテキスト
- **Border** (`#dddddd`): 区切り線（`--KEYENCE_COLOR_OUTLINE_LIGHTGRAY`）
- **Input Border** (`#e1e1e1`): フォーム入力欄の枠
- **Background** (`#fafafa`): ページ背景（`--KEYENCE_COLOR_BACKGROUND_EX_LIGHTGRAY`）
- **Background Light** (`#f3f3f3`): セクション背景（`--KEYENCE_COLOR_BACKGROUND_LIGHTGRAY`）
- **Background Light Red** (`#fef3f5`): 赤系の薄い背景（`--KEYENCE_COLOR_BACKGROUND_LIGHTRED`）
- **Surface** (`#ffffff`): カード、入力欄の背景
- **Surface Placeholder** (`#eeeeee`): 画像プレースホルダー
- **Footer Background** (`#222222`): フッター背景

### CSS Custom Properties

```css
:root {
  --KEYENCE_COLOR_RED: #ea0437;
  --KEYENCE_COLOR_FOREGROUND_RED: #de0435;
  --KEYENCE_COLOR_FOREGROUND_BLACK: #222;
  --KEYENCE_COLOR_FOREGROUND_GRAY: #6f6f6f;
  --KEYENCE_COLOR_BACKGROUND_LIGHTRED: #fef3f5;
  --KEYENCE_COLOR_BACKGROUND_LIGHTGRAY: #f3f3f3;
  --KEYENCE_COLOR_BACKGROUND_EX_LIGHTGRAY: #fafafa;
  --KEYENCE_COLOR_OUTLINE_LIGHTGRAY: #ddd;
  --BUTTON_SHADOW: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  --BORDER_RADIUS_SMALL: 4px;
  --LINE_HEIGHT: 1.75;
  --TRANSITION: 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
```

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: source-han-sans-japanese（Adobe Fonts）, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, Osaka, ＭＳ Ｐゴシック, MS PGothic

**注意**: source-han-sans-japanese は Adobe Fonts（ドメインライセンス）のため、ローカル環境では表示されない。Google Fonts の **Noto Sans JP** が同一起源の代替書体（Source Han Sans = Noto Sans CJK）

### 3.2 欧文フォント

- **サンセリフ**: Helvetica, Arial（電話番号・フッター用、`--FONT_FAMILY_ENG`）

### 3.3 font-family 指定

```css
/* 本文 (--FONT_FAMILY) */
font-family: source-han-sans-japanese, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 欧文専用 (--FONT_FAMILY_ENG) */
font-family: Helvetica, Arial, sans-serif;
```

**フォールバックの考え方**:
- source-han-sans-japanese（Adobe Fonts）を最優先
- ヒラギノ角ゴ Pro W3 で macOS をカバー
- メイリオ / Osaka / ＭＳ Ｐゴシック で Windows をカバー
- 電話番号等の欧文テキストには Helvetica, Arial を専用指定

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | source-han-sans-japanese | 40px | 700 | 1.75 | normal | ページタイトル（トップ） |
| Heading 1 | source-han-sans-japanese | 36px | 700 | 1.5 | normal | ページタイトル（下層） |
| Heading 2 | source-han-sans-japanese | 28px | 700 | 1.5 | normal | セクション見出し |
| Heading 3 | source-han-sans-japanese | 28px | 700 | 1.75 | normal | 小見出し |
| Body | source-han-sans-japanese | 16px | 400 | 1.75 | normal | 本文（`--LINE_HEIGHT: 1.75`） |
| Nav Link | source-han-sans-japanese | 16px | 700 | 1.75 | normal | グローバルナビゲーション |
| Sub Nav | source-han-sans-japanese | 14px | 400 | 1.75 | normal | サブナビ、アンカーリンク |
| Caption | source-han-sans-japanese | 12px | 400 | 1.75 | normal | 補足テキスト |
| Phone (EN) | Helvetica, Arial | 26px | 700 | 1.5 | normal | 電話番号（ヘッダー） |
| Phone Large (EN) | Helvetica, Arial | 42px | 700 | 1.5 | normal | 電話番号（フッター） |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.75（`--LINE_HEIGHT`）
- **見出しの行間**: 1.5
- **本文の字間 (letter-spacing)**: normal
- **見出しの字間**: normal

**ガイドライン**:
- 本文は `line-height: 1.75` で日本語としてはやや広めの行間
- `letter-spacing` は全テキストで `normal`

### 3.6 禁則処理・改行ルール

```css
word-break: break-all;
overflow-wrap: break-word;
line-break: strict;
```

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- palt, kern ともに適用なし

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（「新商品一覧」等）**
- Background: `#ffffff`
- Text: `#222222`
- Padding: 18px 56px 18px 24px
- Border Radius: 4px（`--BORDER_RADIUS_SMALL`）
- Font Size: 16px
- Font Weight: 700
- Shadow: `0px 1px 4px 0px rgba(0,0,0,0.15)`（`--BUTTON_SHADOW`）

**Floating Search（「商品を探す」）**
- Background: `#ffffff`（推定）
- Text: `#222222`
- Border: 2px solid `#ea0437`
- Border Radius: 1440px（pill 型）
- Shadow: `0px 8px 15px rgba(0,0,0,0.15)`

**Carousel Arrow**
- Background: `#ea0437`（ブランドレッド）
- Border: 1px solid `#ea0437`
- Border Radius: 50%（円形）

**Product Card**
- Background: `#ffffff`
- Border Radius: 4px
- Shadow: `0px 1px 4px 0px rgba(0,0,0,0.15)`（`--BUTTON_SHADOW`）

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e1e1e1`
- Border Radius: 4px（`--BORDER_RADIUS_SMALL`）
- Padding: 8px 48px 8px 16px
- Font Size: 16px

### Select

- Background: `#ffffff`
- Border: 1px solid `#e1e1e1`
- Border Radius: 4px
- Padding: 8px 42px 8px 16px
- Font Size: 16px
- Font Weight: 700

### Cards

- Background: `#ffffff`
- Border: none
- Border Radius: 4px（`--BORDER_RADIUS_SMALL`）
- Padding: 16px
- Shadow: `0px 1px 4px 0px rgba(0,0,0,0.15)`（`--BUTTON_SHADOW`）

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
| XXL | 56px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 推定 24px

### Grid

- Columns: 4〜6列（商品カード）
- Gutter: 推定 16px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | フラットな要素 |
| 1 | `0px 1px 4px 0px rgba(0,0,0,0.15)` | カード、ボタン（`--BUTTON_SHADOW`） |
| 2 | `0px 8px 15px rgba(0,0,0,0.15)` | フローティングボタン |

---

## 7. Do's and Don'ts

### Do（推奨）

- アクセントカラーには必ずブランドレッド `#ea0437` を使用する
- カード・ボタンの角丸は `4px`（`--BORDER_RADIUS_SMALL`）で統一する
- 本文の `line-height` は `1.75`（`--LINE_HEIGHT`）を厳守する
- 電話番号には欧文フォント（Helvetica, Arial）を使用する
- カードには `--BUTTON_SHADOW` を適用する

### Don't（禁止）

- ブランドレッド `#ea0437` をテキストカラーとして広範に使用しない（アクセント要素に限定）
- `border-radius` を 4px 以外に変更しない（pill 型のフローティングボタンは例外）
- `line-height` を 1.75 以外に変更しない（CSS 変数で一元管理）
- 純粋な `#000000` をテキストに使わない（`#222222` が標準）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | モバイルレイアウト |
| Tablet | ≤ 1024px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）

### フォントサイズの調整

- モバイルでは本文 14–16px、見出しはデスクトップの 70–80% 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Red: #ea0437 (--KEYENCE_COLOR_RED)
Text Color: #222222 (--KEYENCE_COLOR_FOREGROUND_BLACK)
Text Gray: #6f6f6f (--KEYENCE_COLOR_FOREGROUND_GRAY)
Background: #fafafa (--KEYENCE_COLOR_BACKGROUND_EX_LIGHTGRAY)
Card Shadow: 0px 1px 4px rgba(0,0,0,0.15) (--BUTTON_SHADOW)
Radius: 4px (--BORDER_RADIUS_SMALL)
Font: source-han-sans-japanese (→ Noto Sans JP)
Font EN: Helvetica, Arial, sans-serif
Body Size: 16px
Line Height: 1.75 (--LINE_HEIGHT)
```

### プロンプト例

```
キーエンスのデザインシステムに従って、商品カタログページを作成してください。
- ブランドレッド: #ea0437
- フォント: "Noto Sans JP"（source-han-sans-japanese の代替）, sans-serif
- 電話番号: Helvetica, Arial, sans-serif
- 本文: 16px / line-height: 1.75 / color: #222222
- 見出し: font-weight: 700
- 背景: #fafafa
- カード: radius 4px, shadow 0px 1px 4px rgba(0,0,0,0.15)
- ボタン: radius 4px, shadow あり, padding: 18px 56px 18px 24px
- フッター: #222222 背景
```
