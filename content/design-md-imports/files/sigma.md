# DESIGN.md — SIGMA（シグマ）

> SIGMA（https://www.sigma-global.com/jp/）のデザイン仕様書。
> 2026-05-09 取得の computed style に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 会津（福島）で一貫生産を行うカメラ・レンズメーカー。**独自のカスタムセリフ書体「Sigma Serif」** を全面的に使用し、光学機器メーカーとしての精密さとクラフツマンシップをタイポグラフィで表現。テックカンパニーでありながら serif-first のアプローチを取る希少な例。ウォームホワイト背景（`#fefefd`）と密度の高いエディトリアルレイアウトで、製品カタログと読み物を融合
- **密度**: エディトリアル型。大型のヒーローセクション（88px ディスプレイ）と製品カード、読み物記事を組み合わせた雑誌的レイアウト。本文は適度な密度で、技術的な情報も読みやすく伝える
- **キーワード**: カスタムセリフ、Made in Aizu、セリフファースト、エディトリアル、精密工学、ウォームホワイト
- **特徴**: **「Sigma Serif」「Sigma Serif head」「Sigma Sans」** の3つのカスタムフォントを持つ独自タイポグラフィシステム。見出しには「Sigma Serif head」（ネガティブ letter-spacing -1.32px で密に詰める）、本文には「Sigma Serif」、ナビゲーション・UIテキストには「Sigma Sans」を使い分け。フォールバックは Noto Serif JP / Noto Sans JP。border-radius 0px で直線的、影なしのフラットデザイン

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

SIGMA のカラーパレットは極めて抑制的。ブランドカラーは特定の色ではなく、**ダークグレーとウォームホワイトのコントラスト**で精密さを表現。

- **Brand Dark** (`#333333`): CTA ボタン背景・フッター・ダークセクション背景（rgb 51, 51, 51）
- **Text Primary** (`#333333`): 本文テキスト（見出し・本文共通）

### Text & Neutral

- **Text Primary** (`#333333`): 本文・見出しテキスト（rgb 51, 51, 51）
- **Text on Dark** (`#ffffff`): ダークセクション上のテキスト
- **Border Light** (`#cccccc`): 製品カードのセパレータ・ボーダー（rgb 204, 204, 204）— レンズ一覧ページで多用

### Surface

- **Surface Warm White** (`#fefefd`): 標準背景（rgb 254, 254, 253）— 純白ではないウォームホワイト
- **Surface Dark** (`#333333`): ダークセクション・フッター背景
- **Surface Overlay** (`rgba(0,0,0,0.6)`): モーダル・オーバーレイ
- **Surface Frosted** (`rgba(253,253,252,0.9)`): ヘッダー（スクロール時の半透明背景）

---

## 3. Typography Rules

### 3.1 和文フォント

SIGMA は**カスタム Web フォント + Noto ファミリーのフォールバック**の構成。

- **Sigma Serif** / **Sigma Serif head**: 本文・見出し用のカスタムセリフ書体。SIGMA が独自に開発・ホスティング
- **Noto Serif JP**: Sigma Serif のフォールバック和文セリフ
- **Noto Sans JP**: Sigma Sans のフォールバック和文ゴシック

### 3.2 欧文フォント

- **Sigma Serif head**: ディスプレイ・大見出し用。ネガティブ letter-spacing で密に詰める
- **Sigma Serif**: 本文・中見出し用セリフ
- **Sigma Sans**: ナビゲーション・UI テキスト用サンセリフ

### 3.3 font-family 指定

```css
/* ディスプレイ・大見出し（Sigma Serif head） */
font-family: "Sigma Serif head", "Sigma Serif", "Noto Serif JP", sans-serif;

/* 本文・中見出し（Sigma Serif） */
font-family: "Sigma Serif", "Noto Serif JP", serif;

/* ナビゲーション・UI テキスト（Sigma Sans） */
font-family: "Sigma Sans", "Noto Sans JP", sans-serif;
```

**フォールバックの考え方**:
- カスタムフォントが読み込まれない環境では Noto ファミリーで代替
- Sigma Serif head のフォールバック先に Sigma Serif を挟み、段階的にフォールバック
- ディスプレイ用フォントスタックの generic family が `sans-serif` なのは実サイトの設定に準拠（serif の可能性もあるが実測値を尊重）

> **preview.html 向け代替**: Sigma Serif はドメインライセンスのカスタムフォントのため、preview.html では **Noto Serif JP**（Google Fonts）で代替する

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display (hero) | Sigma Serif head | 88px | 500 | 1.5 (132px) | -0.015em (-1.32px) | "the bf camera" 等。ネガティブスペーシング |
| Display (sub) | Sigma Serif head | 84px | 500 | 1.5 (125px) | -0.015em | レスポンシブ縮小版 |
| Heading 1 (section) | Sigma Serif head | 48px | 500 | 1.5 (72px) | -0.015em | "本質に宿る美しさ" |
| Heading 2 (card) | Sigma Serif | 28px | 400 | 1.5 (42px) | 0.005em | 製品名・記事タイトル |
| Heading 3 (label) | Sigma Serif | 15.2px | 500 | 1.5 (22.8px) | 0.005em | "NEW PRODUCT" 等 |
| Body | Sigma Serif | 15.2px | 500 | 1.7 (25.84px) | 0.005em | 本文 |
| Nav | Sigma Sans | 13px | 400 | 1.25 (16.25px) | 0.02em | ナビゲーション |
| Nav EN | Sigma Sans | 13.5px | 400 | 1.25 (16.875px) | 0.02em | 英文ナビ "Made in Aizu" 等 |
| UI Small | Noto Sans JP | 13px | 500 | 1.54 (20px) | 0.01em | フッターテキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.7（15.2px / 25.84px）
- **見出しの行間**: 1.25〜1.5（ディスプレイ・セクション見出し）
- **ディスプレイの字間 (letter-spacing)**: -0.015em（ネガティブスペーシング）— 大きな文字を密に詰めて力強い印象
- **本文の字間**: 0.005em（ほぼニュートラル）
- **ナビの字間**: 0.02em

**ガイドライン**:
- ディスプレイサイズ（48px 以上）ではネガティブ letter-spacing を使用し、密度と迫力を出す
- 本文サイズではほぼニュートラルな letter-spacing で可読性を優先
- weight 500 を標準とし（通常の 400 より少し太め）、精密さと存在感を両立

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

- `font-feature-settings: normal` — カスタムフォント自体にカーニング情報が組み込まれていると推定

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary（ダークグレー・角丸なし）**
- Background: `#333333`
- Text: `#ffffff`
- Padding: `12px 16px`
- Border Radius: `0px`
- Font: Sigma Sans / Noto Sans JP, 13px, weight 500
- Border: なし

### Links

- Color: `#333333`（本文と同色）
- Decoration: underline（hover 時）
- Font: コンテキストに応じて Sigma Serif または Sigma Sans

### Cards（製品）

- Background: `#fefefd`（ウォームホワイト）
- Border: なし（またはセパレータとして `#cccccc`）
- Border Radius: `0px`
- Shadow: なし

### Inputs

- Background: `#fefefd`
- Border: 1px solid `#cccccc`
- Border Radius: `0px`
- Font: Sigma Sans, 13px

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 40px |
| XL | 64px |
| XXL | 120px |

### Container

- Max Width: 約 1280px
- Padding (horizontal): 24〜40px

### Grid

- Columns: 1〜3（製品一覧）
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | すべての通常要素 |
| Overlay | 背景 `rgba(0,0,0,0.6)` | モーダル・オーバーレイ |
| Header | 背景 `rgba(253,253,252,0.9)` | スクロール時のヘッダー（backdrop-filter 使用） |

SIGMA はフラットデザインを採用。影ではなくコンテンツの密度とタイポグラフィで階層を表現。

---

## 7. Do's and Don'ts

### Do（推奨）

- ディスプレイサイズ（48px 以上）の見出しにはネガティブ letter-spacing（-0.015em）を使用する
- 本文は Sigma Serif（またはフォールバック Noto Serif JP）の weight 500 で統一する
- ナビ・UI テキストには Sigma Sans（またはフォールバック Noto Sans JP）を使い分ける
- 背景色はウォームホワイト `#fefefd` を使用する（純白 `#ffffff` ではない）
- border-radius は 0px を維持する
- テキストカラーは `#333333` で統一する

### Don't（禁止）

- 純白 `#ffffff` を背景に使用しない（`#fefefd` を使用）
- ディスプレイ見出しに正の letter-spacing を使用しない（密に詰めるのが SIGMA のスタイル）
- セリフ体の代わりにサンセリフを本文・見出しに使用しない（ナビ・UI テキストのみサンセリフ）
- weight 300 や 700 を使用しない（400〜500 の範囲に収める）
- border-radius や box-shadow を追加しない
- アクセントカラーを導入しない（モノトーンを維持）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | ≤ 1023px | タブレットレイアウト |
| Desktop | > 1023px | デスクトップレイアウト |

### タッチターゲット

- ナビゲーション: padding 8〜16px で十分なタッチ領域
- ボタン: padding 12px 16px

### フォントサイズの調整

- ディスプレイは 88px → 48px 程度に縮小（レスポンシブ）
- 本文 15.2px はほぼ維持
- ナビ 13px は維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Color: #333333
Background: #fefefd (warm white)
Dark Section BG: #333333
Border: #cccccc
Heading Font: "Noto Serif JP", serif (Sigma Serif 代替)
Body Font: "Noto Serif JP", serif
Nav Font: "Noto Sans JP", sans-serif
Display Size: 88px / Weight 500 / Letter Spacing -0.015em
Body Size: 15.2px / Weight 500 / Line Height 1.7
Border Radius: 0px (everywhere)
Button: #333333 bg, white text, 12px 16px padding
```

### プロンプト例

```
SIGMA のデザインシステムに従って、製品一覧ページを作成してください。
- 見出し: Noto Serif JP, 48px, weight 500, letter-spacing -0.015em
- 本文: Noto Serif JP, 15.2px, weight 500, line-height 1.7
- ナビ・UI: Noto Sans JP, 13px, weight 400
- 背景: ウォームホワイト #fefefd
- テキストカラー: #333333
- ボタン: #333333 背景、角丸なし
- 影なしのフラットデザイン
- 全体的にセリフ体ベースの落ち着いたエディトリアルトーン
```
