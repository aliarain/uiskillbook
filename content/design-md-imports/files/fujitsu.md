# DESIGN.md — Fujitsu (富士通)

> Fujitsu（https://www.fujitsu.com/jp/）のデザイン仕様書。
> 実サイトの computed style および CSS Custom Properties（145変数）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: テクノロジー企業としての先進性と信頼感を両立。大胆な赤とグラデーションを使った力強いビジュアルと、整然としたグリッドレイアウト
- **密度**: 情報密度が高い。ニュース、事例、ソリューション等の多様なコンテンツを構造的に配置
- **キーワード**: 先進的、力強い、信頼、テクノロジー、グラデーション
- **特徴**: 独自コーポレートフォント「FujitsuInfinityPro」を使用。赤 `#ea0000` を基調に、青 `#2400b0` 、グリーン `#008224` のマルチカラーグラデーションで各事業領域を色分け

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Fujitsu Red** (`#ea0000`): 主要 CTA、ブランドアクセント。`--color-red`
- **Deep Blue** (`#2400b0`): テクノロジー領域。`--background-color-blue`
- **Vivid Blue** (`#0048ff`): アクセシビリティフォーカス色

### Gradients（グラデーション — CSS Custom Properties）

- **H1B**: `#ea0000` → `#d80084`（赤→マゼンタ）
- **H2B**: `#ea0000` → `#ff8000`（赤→オレンジ）
- **H3B**: `#2400b0` → `#0c7fd5`（紫→ブルー）
- **H4B**: `#008224` → `#00a470`（グリーン系、推定）

### Semantic（意味的な色）

- **Danger / Error**: `--color-red` (`#ea0000`)
- **Error Background**: `--background-color-red` (`#fde5e5`)

### Neutral（ニュートラル — CSS Custom Properties）

- **Text Primary** (`#000000`): 本文テキスト。`--color-black`
- **Text Dark Gray** (`#333333`): 強調テキスト。`--color-gray-1`
- **Text Mid Gray** (`#5f5f5f`): 補足テキスト。`--color-gray-6`
- **Text Light Gray** (`#696969`): メタ情報
- **Background White** (`#ffffff`): ページ背景。`--background-color-white`
- **Background Light** (`#f3f3f3`): セクション背景
- **Background Gray** (`#efefef`): カード背景。`--background-color-gray-4`
- **Surface Dark** (`#3c3c3c`): ダーク面。`--background-color-gray-1`
- **Surface Mid** (`#6d6e70`): ミッド面。`--background-color-gray-2`
- **Border Light** (`#dcdcdc`): 区切り線。`--color-gray-7`
- **Border Mid** (`#e8e8e8`): 標準ボーダー。`--color-gray-2`
- **Border Gray5** (`#c6c6c0`): `--color-gray-5`
- **Footer Dark** (`#27455c`): フッター背景（rgb(39, 69, 92)）

---

## 3. Typography Rules

### 3.1 和文フォント

**コーポレートフォント**:
- FujitsuInfinityPro — 独自の Web フォント。和欧兼用

**フォールバック（和文）**:
- メイリオ / Meiryo（Windows）
- ＭＳ Ｐゴシック（Windows レガシー）
- ヒラギノ角ゴシック系（macOS）

### 3.2 欧文フォント

- **FujitsuInfinityPro**: 欧文も含むコーポレートフォント
- **Arial**: フォールバック

### 3.3 font-family 指定

```css
/* 全要素共通 */
font-family: FujitsuInfinityPro, Arial, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", sans-serif;
```

**フォールバックの考え方**:
- FujitsuInfinityPro を最優先。和欧両方のグリフを含むコーポレートフォント
- Arial を早い段階でフォールバックに置き、FujitsuInfinityPro がない環境でも欧文の品質を確保
- 和文はメイリオ→ＭＳ Ｐゴシック→ヒラギノの順

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | FujitsuInfinityPro | 60px | 700 | 1.7 | normal | ヒーロー見出し |
| Heading 1 | FujitsuInfinityPro | 40px | 700 | 1.25 | normal | ページタイトル |
| Heading 2 | FujitsuInfinityPro | 24–26px | 700 | 1.5–1.7 | normal | セクション見出し |
| Heading 3 | FujitsuInfinityPro | 16px | 700 | 1.3 | normal | 小見出し |
| Lead | FujitsuInfinityPro | 18px | 700 | 1.7 | normal | リード文 |
| Body | FujitsuInfinityPro | 15–16px | 400 | 1.7 | normal | 本文 |
| Nav | FujitsuInfinityPro | 14px | 700 | 1.7 | normal | ナビゲーション |
| Caption | FujitsuInfinityPro | 14px | 400 | 1.7 | normal | 補足テキスト |

### 3.5 行間・字間

- **本文の行間 (line-height)**: 1.7（15px → 25.5px）
- **見出しの行間**: 1.25〜1.7（見出しレベルにより変動）
- **本文の字間 (letter-spacing)**: normal（0）
- **見出しの字間**: normal（0）

**ガイドライン**:
- line-height: 1.7 は全体で統一。日本語コーポレートサイトとして標準的な値
- letter-spacing はグローバルに normal。font-feature-settings も normal

### 3.6 禁則処理・改行ルール

明示的な指定なし（ブラウザデフォルトに依存）

### 3.7 OpenType 機能

- font-feature-settings は全要素 `normal`
- FujitsuInfinityPro のカーニング情報に依存

### 3.8 縦書き

該当なし

---

## 4. Component Stylings

### Buttons

**Primary CTA（Red）**
- Background: `#ea0000`
- Text: `#ffffff`
- Border: none
- Padding: 推定 12px 24px
- Border Radius: 0px（シャープエッジ）
- Font Size: 14px
- Font Weight: 700

**Secondary CTA（Blue）**
- Background: `#2400b0`
- Text: `#ffffff`
- Border: none
- Padding: 推定 12px 24px
- Border Radius: 0px
- Font Size: 14px
- Font Weight: 700

**Outline（Ghost）**
- Background: transparent
- Text: `#ffffff`
- Border: 推定 1px solid white
- Padding: 推定 12px 24px
- Border Radius: 30px
- Font Size: 14px

**Accessibility Button**
- Background: `#ffffff`
- Text: `#000000`
- Border: 2px solid `#0038ff`
- Border Radius: 8px

### Cards

**Event / Article Card**
- Background: `#ffffff` または `#efefef`
- Border: none
- Border Radius: 0px（シャープエッジが基本）
- Shadow: none

### Inputs

明示的な input 要素の実測データなし

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px |
| L | 32px |
| XL | 48px |
| XXL | 80px |

### Container

- Max Width: 推定 1200px
- セクション背景: 全幅（`#f3f3f3` と `#ffffff` の交互）

### Grid

- ニュース / 事例: 3カラムグリッド
- ソリューション: 2カラム

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | カード、ボタン（フラットが基本） |
| 1 (Subtle) | 推定 `0 2px 8px rgba(0,0,0,0.08)` | ホバー時のカード |
| 2 (Overlay) | `rgba(0,0,0,0.5)` background | モーダルオーバーレイ |

---

## 7. Do's and Don'ts

### Do（推奨）

- Fujitsu Red `#ea0000` を主要 CTA に使用する
- グラデーション（赤→マゼンタ、赤→オレンジ、青→ブルー）で事業領域を色分けする
- ボタンはシャープエッジ（border-radius: 0）を基本とする
- セクション背景は `#ffffff` と `#f3f3f3` を交互に使って区切る
- FujitsuInfinityPro をベースフォントとして指定する

### Don't（禁止）

- ブランドカラーの赤を薄めた色（ピンク系）を安易に使わない（グラデーションで遷移させる）
- ボタンに大きな角丸を付けない（pill 型は使わない）
- 複数のグラデーション方向を混在させない（水平方向で統一）
- テキストに直接グラデーションを適用しない（背景面にのみ適用）
- letter-spacing や palt を追加しない（コーポレートフォントのメトリクスに依存）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1カラム、ハンバーガーメニュー |
| Tablet | ≤ 1024px | 2カラムグリッド |
| Desktop | > 1024px | 3カラムグリッド |

### タッチターゲット

- ボタン: 推定 44px 以上（アクセシビリティ重視）
- アクセシビリティツールバー常駐

### フォントサイズの調整

- Display 見出し: 60px → モバイルで 24〜28px 推定
- 本文: 15px を維持

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #ea0000 (Fujitsu Red)
Secondary Color: #2400b0 (Deep Blue)
Text Color: #000000
Background: #ffffff / #f3f3f3 (alternating sections)
Font: FujitsuInfinityPro, Arial, メイリオ, Meiryo, sans-serif
Body Size: 15px
Line Height: 1.7
Button Style: sharp edge (0px radius), solid fill
```

### プロンプト例

```
Fujitsu のデザインシステムに従って、ソリューション紹介ページを作成してください。
- ブランドカラー: #ea0000 の赤を CTA に使用
- グラデーション: 赤→オレンジ (#ea0000 → #ff8000) をヒーローに
- フォント: FujitsuInfinityPro（フォールバック: Arial, メイリオ）
- ボタン: シャープエッジ（radius 0px）、赤ベタ塗り
- セクション背景: #ffffff と #f3f3f3 を交互に
- 行間: line-height 1.7
```
