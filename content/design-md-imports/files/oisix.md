# DESIGN.md — Oisix ra daichi

> Oisix ra daichi（https://www.oisixradaichi.co.jp/）のデザイン仕様書。
> 食品宅配大手（Oisix、らでぃっしゅぼーや、大地を守る会の親会社）のコーポレートサイト。
> Morisawa 明朝体の見出し + ヒラギノ角ゴシックの本文という、セリフ×サンセリフの混植が特徴。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 食と農業をテーマにした、信頼感と温かみを兼ね備えたコーポレートサイト。明朝体の見出しがエディトリアルな品格を与え、オリーブグリーンのブランドカラーが自然・食の安心感を表現
- **密度**: ゆったりとした余白。大きなヒーローセクション、エディトリアル型のレイアウト
- **キーワード**: 自然、信頼、品格、エディトリアル、オリーブグリーン
- **特徴**: 3つの異なるフォントファミリーを役割別に使い分ける。見出しは Ryumin 明朝体、本文はヒラギノ角ゴシック、英字ディスプレイは Century Schoolbook。ボタンは角丸なし（radius: 0px）のシャープなスタイル

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Brand Green** (`#7B9437`): メインのブランドカラー。CTA ボタン、リンク、ヒーローオーバーレイに使用
- **Brand Green Light** (`#B5C474`): セカンダリボタン（お問い合わせ等）
- **Brand Green Footer** (`#76952F`): フッター背景。ブランドグリーンのやや暗いバリエーション
- **Hero Overlay** (`rgba(123, 148, 55, 0.8)`): ヒーロー画像上の半透明オーバーレイ

### Neutral（ニュートラル）

- **Text Primary** (`#333333`): 本文テキスト
- **Text Nav** (`#595757`): ナビゲーションリンク
- **Badge Gray** (`#89888C`): ニュースカテゴリバッジ（INFO、RELEASE）
- **Badge Light Gray** (`#A7A7A7`): NEWS ボタン
- **Section BG** (`#F2F2F2`): セクション背景（ライトグレー）
- **Border** (`#DDDDDD`): 区切り線、ボーダー
- **Background** (`#FFFFFF`): ページ背景（白）

---

## 3. Typography Rules

### 3.1 和文フォント

**明朝体（見出し専用）**:
- A-OTF Ryumin Pro M-KL（Morisawa ライセンスフォント）
- ヒラギノ明朝 Pro W3（macOS フォールバック）
- MS PMincho（Windows フォールバック）

**ゴシック体（本文・ナビゲーション）**:
- ヒラギノ角ゴ Pro W3（macOS）
- メイリオ / Meiryo（Windows）
- MS PGothic（レガシー Windows）

### 3.2 欧文フォント

- **セリフ（ディスプレイ）**: Century Schoolbook W01 Bd, Century, Georgia, Times New Roman
- **サンセリフ（ナロー）**: Arial W01 Narrow Bold, Arial Narrow, Arial, Helvetica
- **サンセリフ（太字）**: Arial W01 Black, Arial Black, Gadget
- **本文補助**: Osaka（macOS レガシー）

### 3.3 font-family 指定

```css
/* 本文・ナビゲーション（ゴシック体） */
font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 見出し（明朝体） */
font-family: "A-OTF Ryumin Pro M-KL", "ヒラギノ明朝 Pro W3",
  "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;

/* 英字ディスプレイ（セリフ） */
font-family: CenturySchoolbookW01-Bd, Century, Georgia,
  "Times New Roman", Times, "A-OTF Ryumin Pro M-KL",
  "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro",
  "ＭＳ Ｐ明朝", "MS PMincho", serif;

/* 英字ディスプレイ（サンセリフ太字） */
font-family: "Arial W01 Black", "Arial Black", Gadget,
  "ヒラギノ角ゴ Pro W6", sans-serif;

/* 英字ラベル（ナロー） */
font-family: "Arial W01 Narrow Bold", "arial narrow",
  Arial, Helvetica, sans-serif;
```

**フォールバックの考え方**:
- 見出しは Morisawa Ryumin を最優先し、OS 明朝体にフォールバック
- 本文はヒラギノ角ゴシック優先で、和文フォントが先頭
- 英字ディスプレイは Century Schoolbook → Ryumin 明朝と、欧文→和文の順
- 英字ナロー（カテゴリバッジ等）は Arial Narrow 系で統一

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (EN) | Century Schoolbook | 60px | 700 | 1.2 (72px) | normal | "STORY" 等の英字セクション見出し |
| Hero H2 (JP) | Ryumin 明朝 | 42px | 700 | 1.4 (58.8px) | normal | メインキャッチコピー |
| Section H2 (EN) | Arial W01 Black | 20px | 400 | 1.4 (28px) | 3px (0.15em) | "NEWS" 等の英字小見出し |
| Hero Body | ヒラギノ角ゴ | 20px | 400 | 1.8 (36px) | normal | ヒーロー内の本文テキスト |
| Nav Link | ヒラギノ角ゴ | 15px | 700 | 1.4 (21px) | normal | ナビゲーションリンク |
| Body | ヒラギノ角ゴ | 14px | 400 | 1.8 (25.2px) | normal | 本文テキスト |
| Nav Button | ヒラギノ角ゴ | 13px | 700 | 1.0 | normal | ナビゲーションボタン |
| Footer Nav | ヒラギノ角ゴ | 12px | 400 | 1.8 (21.6px) | normal | フッターナビゲーション |
| Badge (EN) | Arial Narrow Bold | 12.6px | 700 | — | 1.89px (0.15em) | "INFO", "RELEASE" バッジ |
| Detail Label (EN) | Arial Narrow Bold | 20px | 700 | 1.8 | 4px (0.2em) | "DETAIL" ラベル |

### 3.5 行間・字間

**行間 (line-height)** -- 実測値:
- 本文: `1.8`（14px × 1.8 = 25.2px）
- ヒーロー本文: `1.8`（20px × 1.8 = 36px）
- 見出し（明朝体）: `1.4`（42px × 1.4 = 58.8px）
- ディスプレイ（英字）: `1.2`（60px × 1.2 = 72px）
- フッター: `1.8`（12px × 1.8 = 21.6px）

**字間 (letter-spacing)** -- 実測値:
- 本文: `normal`（字間なし）
- 見出し: `normal`（字間なし）
- 英字セクション見出し "NEWS": `3px`（= 0.15em）
- 英字ラベル "DETAIL": `4px`（= 0.2em）
- バッジ "INFO": `1.89px`（= 0.15em）

**ガイドライン**:
- 和文テキストは `letter-spacing: normal` で統一。palt も不使用
- 英字のディスプレイ要素のみワイドな `letter-spacing` を適用（0.15em--0.2em）
- 本文の `line-height: 1.8` は日本語テキストの標準的な読みやすい行間

### 3.6 禁則処理・改行ルール

```css
/* グローバル設定 */
word-wrap: break-word;
overflow-wrap: break-word;
```

- 標準的な禁則処理を適用
- 特別な `word-break` や `line-break` の設定は確認されていない

### 3.7 OpenType 機能

```css
/* palt、kern 等の OpenType 機能は適用されていない */
font-feature-settings: normal;
```

- **palt**: 不使用。和文テキストにプロポーショナル字詰めは適用されていない
- **kern**: 不使用
- Morisawa Ryumin のデフォルトグリフメトリクスをそのまま使用

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（お買い物はこちら）**
- Background: `#7B9437`（ブランドグリーン）
- Text: `#FFFFFF`
- Padding: `9px 0px 7px`
- Border Radius: `0px`（角丸なし、シャープエッジ）
- Font Size: `13px`
- Font Weight: `700`

**Secondary（お問い合わせ）**
- Background: `#B5C474`（ライトグリーン）
- Text: `#FFFFFF`
- Border Radius: `0px`
- Font Size: `13px`
- Font Weight: `700`

**NEWS Button**
- Background: `#A7A7A7`（グレー）
- Text: `#FFFFFF`
- Border Radius: `0px`

**Navigation Tab**
- Background: `transparent`
- Text: `#333333`
- Border Radius: `5px 5px 0px 0px`（上部のみ角丸）
- Padding: `10px 12px`
- Font Size: `15px`
- Font Weight: `700`

### Badges

**Category Badge（INFO, RELEASE）**
- Background: `#89888C`
- Text: `#FFFFFF`
- Font: Arial W01 Narrow Bold
- Font Size: `12.6px`
- Letter Spacing: `1.89px`

### Cards

- Background: `#FFFFFF`
- Border: `1px solid #DDDDDD`
- Border Radius: `0px`（角丸なし）
- Shadow: なし（フラットデザイン）

### Inputs

- Background: `#FFFFFF`
- Border: `1px solid #DDDDDD`
- Border Radius: `0px`
- Padding: `8px 12px`
- Font Size: `14px`
- Font Family: ヒラギノ角ゴ系

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

- Max Width: 960px
- Padding (horizontal): 20px

### Grid

- ニュース一覧: 1カラム
- ヒーロー: フルブリード + 中央寄せテキスト

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 標準要素。フラットなデザインが基調 |
| 1 | `0 1px 3px rgba(0,0,0,0.1)` | ナビゲーション固定時 |
| 2 | `0 4px 8px rgba(0,0,0,0.12)` | ドロップダウンメニュー |

- サイト全体がフラットデザイン基調。影の使用は控えめ
- ボーダー（`#DDDDDD`）で区切りを表現するスタイル

---

## 7. Do's and Don'ts

### Do（推奨）

- 見出しには Ryumin 明朝体（またはセリフ系フォールバック）を使い、本文にはゴシック体を使う
- ブランドグリーン `#7B9437` を CTA の背景色として使う
- ボタンは `border-radius: 0px` のシャープエッジで統一する
- 英字ディスプレイには Century Schoolbook 系セリフを使い、ワイドな letter-spacing（0.15em 以上）を適用する
- 本文の行間は `line-height: 1.8` を維持する
- テキスト色は `#333333` を使う（純粋な `#000000` は避ける）
- カテゴリバッジには Arial Narrow Bold + ワイド letter-spacing を使う

### Don't（禁止）

- 見出しにゴシック体を使わない（エディトリアルな品格が失われる）
- ボタンに角丸（pill、radius: 8px 等）を付けない（シャープエッジが特徴）
- ブランドグリーン `#7B9437` を本文テキスト色に使わない（白背景でコントラスト不足）
- `letter-spacing` や `palt` を和文テキストに適用しない（実サイトでは不使用）
- 明朝体を本文に使わない（見出し専用）
- フッター背景に `#7B9437` を使わない（フッターは `#76952F` の別色）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <=768px | モバイルレイアウト |
| Tablet | <=1024px | タブレットレイアウト |
| Desktop | >1024px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは見出しをデスクトップの 60--70% に縮小（42px -> 28px 程度）
- 本文は 14px を維持
- ヒーロー本文は 16px に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Brand Green: #7B9437
Brand Green Light: #B5C474
Footer Green: #76952F
Text Primary: #333333
Text Nav: #595757
Background: #FFFFFF
Section BG: #F2F2F2
Border: #DDDDDD
Badge Gray: #89888C

Serif Font (見出し): "A-OTF Ryumin Pro M-KL", "ヒラギノ明朝 Pro W3",
  "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif
Sans Font (本文): "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif
Display Font (EN): CenturySchoolbookW01-Bd, Century, Georgia,
  "Times New Roman", Times, serif

Body Size: 14px / line-height: 1.8 / letter-spacing: normal
Hero Heading: 42px / 700 / Ryumin 明朝
Button: radius 0px / sharp edge
palt: 不使用
```

### プロンプト例

```
Oisix ra daichi のデザインに従って、ニュース一覧ページを作成してください。
- 見出しフォント: "A-OTF Ryumin Pro M-KL", "ヒラギノ明朝 Pro W3",
    "Hiragino Mincho Pro", serif（明朝体）
- 本文フォント: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
    メイリオ, sans-serif
- テキスト色: #333333
- ブランドグリーン: #7B9437（CTA ボタン背景）
- ボタン: border-radius: 0px（シャープエッジ）
- 英字見出し: Century Schoolbook 系、letter-spacing: 0.15em
- カテゴリバッジ: #89888C、Arial Narrow Bold、letter-spacing: 1.89px
- 本文行間: line-height: 1.8
- palt: 不使用
```
