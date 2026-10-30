# DESIGN.md — カンディハウス (Conde House)

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
>
> 対象サイト: https://www.condehouse.co.jp/
> カンディハウス（CondeHouse）は北海道旭川の木製家具メーカー。国産無垢材の家具づくりで知られ、
> ドイツ・ケルンの国際見本市などで評価される。実測は Shopify 上のコーポレート／EC トップおよび製品一覧に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 大判の家具・素材写真をタイル状に敷き詰めたギャラリー型。UI は無彩色の細い罫と余白に徹し、木と暮らしの写真そのものを主役にする
- **密度**: 中〜低密度。ファーストビューは写真モザイク＋細い Latin ロゴ「CondeHouse」とライトなナビのみ
- **キーワード**: 端正 / 静謐 / ナチュラル / エディトリアル / クラフト
- **形状言語**: 面のカードは角丸ゼロ（`border-radius: 0`）の直線基調。塗りボタンだけ `4px`、ページャ等の丸ボタンは `50%`、リンクのアウトラインは大きな `60px` ピル。混在させず用途で使い分ける
- **書体の性格**: 欧文 Aktiv Grotesk＋和文 源ノ角ゴシック（Source Han Sans）の中庸なグロテスク。見出しウェイトは **400（細身）** に統一し、線の細さで上品さを出す。差し色は深い森緑 `#15654c` 一点

---

## 2. Color Palette & Roles

<!-- 実サイトの computed style / customProperties / interactive 実測に基づく。写真を主役にするため UI 色はほぼ無彩色に絞り、緑を一点差す -->

### Base（下地）

- **Background** (`#fcfcfa`): ページ全体の下地。ごくわずかに温かみのあるオフホワイト（rgb(252,252,250)、`--background`）
- **Surface** (`#f5f4f0`): カテゴリタイル・パネルの面色。下地より一段沈んだウォームグレー
- **Surface Alt** (`#f5f5f5`): フォーム・補助パネルの面（`--secondary-background`）

### Brand / Accent（ブランド・差し色）

- **Brand Green** (`#15654c`): ブランドカラー。プライマリボタン・ニュースレター枠・アクセントに使う深い森緑（rgb(21,101,76)、`--primary-button-background` / `--wk-color-accent-1`）
- **Accent Yellow** (`#f3ff34`): セカンダリボタン・限定ラベルに使う蛍光イエロー（`--secondary-button-background`）。文字は `#282828`。ごく限定的に使う
- **Label Blue** (`#405de6`): 製品カスタムラベルの背景（`--product-custom-label-background`）

### Text（文字色）

- **Text Primary** (`#000000`): 見出し・本文（`--text-color` / `--heading-color`）。純黒
- **Text Muted** (`#333333`): セクションラベル・補助テキスト
- **Text on Image** (`#ffffff`): 写真上に重ねるロゴ・ヒーロー見出し

### Semantic（意味的な色）

- **Success** (`#2e9e7b`): 在庫あり等（`--success-color`）。背景 `#d3e9e1`
- **Error** (`#de2a2a`): エラー・セール・残りわずか（`--error-color`）。背景 `#faedeb`

### Line（罫）

- **Border** (`#d6d6d5`): 区切り線・入力欄の枠（rgb(214,214,213)、`--border-color`）
- **Border Outline** (`#e0e0d7`): アウトラインボタンの罫（rgb(224,224,215)）
- **Border Darker** (`#979796`): 強調したい罫

### 色に関する設計思想

- 下地・面・文字はほぼ無彩色（オフホワイト／ウォームグレー／黒）に絞り、写真の色を邪魔しない
- 彩度色はブランドの森緑 `#15654c` を主役に、蛍光イエローと青をラベル用途にごく限定的に添える
- 塗り面は最小限。色は「文字色」「罫線色」「緑のボタン」として現れる

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: 源ノ角ゴシック（`source-han-sans-japanese`, Adobe Fonts / = Noto Sans JP と同一設計）。フォールバックは ヒラギノ角ゴ ProN → 游ゴシック → メイリオ
- **明朝体**: 使用しない

### 3.2 欧文フォント

- **サンセリフ**: Aktiv Grotesk（`aktiv-grotesk`, Adobe Fonts）。Helvetica / Univers 系の中庸なネオグロテスク。和欧混植で **欧文を先頭**に置き、Latin グリフを Aktiv Grotesk で拾う
- **セリフ / 等幅**: 使用しない

> **代替フォントの注記**: Aktiv Grotesk・源ノ角ゴシックはいずれも Adobe Fonts のためローカル・preview.html では表示できない。
> - Aktiv Grotesk → **Inter**（中庸なグロテスクで印象が近い）
> - 源ノ角ゴシック → **Noto Sans JP**（源ノ角ゴシックと同一設計なので字形が一致する）

### 3.3 font-family 指定

```css
/* 本文・見出し・ナビすべて共通（--text-font-family / --heading-font-family） */
font-family: aktiv-grotesk, source-han-sans-japanese, "ヒラギノ角ゴシック",
  "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", YuGothic,
  "Yu Gothic", "メイリオ", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- **欧文（Aktiv Grotesk）を先頭**に置き、Latin グリフを欧文書体で拾う
- 続いて和文（源ノ角ゴシック）を指定し、日本語グリフを担わせる
- OS 内蔵（ヒラギノ→游ゴシック→メイリオ）を段階的にフォールバック
- 見出し・本文とも同一チェーンで統一し、**ウェイト（400 / 700）とサイズ**だけで階層を作る

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero (h1) | Aktiv Grotesk | 30px | 700 | 1.73 | normal | 写真上ヒーロー見出し（白） |
| Section (h3) | Aktiv Grotesk | 32px | 400 | 1.5 | 0.01em | セクション大見出し（細身） |
| Heading (h2) | Aktiv Grotesk | 26px | 400 | 1.5 | 0.02em | サブ見出し |
| Section Label | Aktiv Grotesk | 12px | 400 | 1.23 | 0.08em | 小ラベル（`#333`） |
| Body | Aktiv Grotesk | 15px | 400 | 1.73 | normal | 本文（`--base-font-size: 15px`） |
| Body Small | Aktiv Grotesk | 13px | 400 | 2.0 | normal | 補足本文 |
| Caption | Aktiv Grotesk | 12px | 400 | 1.5 | 0.03em | キャプション・注記 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.73`（15px 本文で 26px）。小さめ本文は `2.0`（13px で 26px）とゆったり
- **見出しの行間**: `1.5`（32px 見出しで 48px）。ヒーローは `1.73`
- **本文の字間 (letter-spacing)**: 基本 `normal`。見出し・ラベルにのみ `0.3〜1px`（≒0.01〜0.08em）を控えめに付ける
- **見出しの字間**: 大見出し `0.01em` 前後、小ラベル `0.08em`

**ガイドライン**:
- 見出しウェイトを 400 に保つことがこのサイトの品位の要。太くしない
- 字間は控えめ。ラベルなど小サイズだけわずかに開く

### 3.6 禁則処理・改行ルール

```css
overflow-wrap: break-word;
line-break: strict;
word-break: normal;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: normal;  /* palt は使わない */
```

- 実測では `font-feature-settings: normal`。**palt（プロポーショナル字詰め）は使っていない**。字間は letter-spacing で明示的に調整している
- 和欧混植のカーニングは Aktiv Grotesk / 源ノ角ゴシックのデフォルトに任せる

### 3.8 縦書き

該当なし（横書きのみ）。

---

## 4. Component Stylings

### Buttons

用途で 3 系統を使い分ける。塗りは緑、リンクは細罫ピル、操作系は円形。

**Primary（塗り・緑）**
- Background: `#15654c`
- Text: `#ffffff`
- Padding: `0 20px`（高さは line-height 50px で確保）
- Border Radius: `4px`（`--button-border-radius`）
- Font: 14px / weight 400
- 例: 「News Letter」登録・確定系

**Secondary（アウトライン・ピル）**
- Background: `transparent`
- Text: `#000000`
- Border: `1px solid #e0e0d7`
- Padding: `0 35px`
- Border Radius: `60px`（大きなピル）
- Font: 12px / weight 400
- 例: 「詳しく見る」

**Icon / Pager（円形）**
- Background: `#ffffff`
- Border: `1px solid #e0e0d7`
- Border Radius: `50%`
- 例: 「戻る」「次へ」のページャ

**Tag（小さな面ラベル）**
- Background: `#f5f4f0`
- Text: `#000000`
- Padding: `5px`
- Border Radius: `2px`
- Font: 12px
- 例: 「ショップ」「お知らせ」「法人」「プレス」

### Inputs

- Background: `#ffffff`
- Border: `1px solid #d6d6d5`（`--wk-input-border-width: 1px`）
- Border (focus): `1px solid #000000`
- Border Radius: `0px`（`--wk-input-border-radius: 0`）
- Padding: `12px 14px`
- Font Size: 15px
- フィールド間の間隔: `16px`（`--form-input-gap`）

### Cards

- Background: `#fcfcfa` または `#f5f4f0`
- Border: なし（余白と写真で区切る）
- Border Radius: `0px`（`--block-border-radius: 0`）
- Shadow: なし（フラット）
- 製品カードは大判写真＋シリーズ名・価格の最小構成。角丸ゼロで端正に

---

## 5. Layout Principles

### Spacing Philosophy

大判写真をタイル状に敷き、要素間はゆとりを持って空ける。テキストブロックは幅を絞り、写真の面積を大きく取る。

### Spacing Scale（推定）

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 16px |
| M | 24px（`--grid-gap`） |
| L | 40px |
| XL | 70px（コンテナ外側ガター） |
| XXL | 120px |

### Container

- Max Width: `1600px`（`--container-max-width`）
- Padding (horizontal): `70px`（左右ガター、狭い画面では縮小）

### Grid

- Columns: `20`（`--grid-column-width` は 20 分割）。製品一覧は実質 3〜4 カラム
- Gutter: `24px`（`--grid-gap`）
- 大判写真をタイル配置し、キャプションは短く添える

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 既定。ほぼ全ての面はフラット |
| 1 | `0 2px 4px rgba(0,0,0,0.15)` | ドロップダウン・カート（`--wk-shadow-*` 実測: offset 0/2px, blur 4px, opacity 15%） |
| 2 | `0 8px 24px rgba(0,0,0,0.12)` | モーダル・オーバーレイメニュー |

- 影は最小限。奥行きは「余白」と「写真」で表現する

---

## 7. Do's and Don'ts

### Do（推奨）

- 下地はウォームオフホワイト `#fcfcfa`、面は `#f5f4f0`、文字は黒 `#000000` で無彩色に絞る
- 差し色はブランドの森緑 `#15654c` を主役にする（塗りボタン・ニュースレター枠）
- 見出しは **weight 400（細身）** に保ち、サイズで階層を作る
- 欧文（Aktiv Grotesk）を font-family 先頭に置き、和文は源ノ角ゴシックで拾う
- 塗りボタンは緑・radius 4px、リンクは細罫の大きなピル（radius 60px）と使い分ける
- 大判写真をタイル状に敷き、カードは角丸ゼロ・影なしのフラットに

### Don't（禁止）

- 見出しを太字（700）で多用しない（細身 400 が品位の要）
- 彩度の高い色を面で広く使わない（緑・黄・青はアクセント/ラベルに限定）
- カードやパネルに角丸・強い影を付けない（`border-radius: 0`／フラット）
- 和文フォント1つだけを指定しない（必ずフォールバックチェーンを書く）
- palt を無理に効かせない（このサイトは letter-spacing で字間調整している）

---

## 8. Responsive Behavior

### Breakpoints（推定）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 1〜2 カラム。ナビはハンバーガー |
| Tablet | ≤ 1024px | 2〜3 カラム |
| Desktop | > 1024px | 3〜4 カラムのタイル＋広いガター |

### タッチターゲット

- 最小サイズ: 44px × 44px

### フォントサイズの調整

- モバイルでは大見出し（32px）を 22–24px 程度に、本文は 15px を維持
- ガター（70px）はモバイルで 20–24px 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Background:   #fcfcfa
Surface:      #f5f4f0
Text Primary: #000000
Text Muted:   #333333
Brand Green:  #15654c
Border:       #d6d6d5 / #e0e0d7
Font:         aktiv-grotesk, source-han-sans-japanese, "Hiragino Kaku Gothic ProN", sans-serif
Body Size:    15px
Line Height:  1.73
Heading:      weight 400（細身）
palt:         off
Button(緑):   #15654c bg / #fff / radius 4px
Button(線):   transparent / 1px solid #e0e0d7 / radius 60px（ピル）
Card:         radius 0 / shadow なし
```

### プロンプト例

```
カンディハウスのデザインシステムに従って、木製家具の製品一覧セクションを作成してください。
- 下地: #fcfcfa、面色: #f5f4f0、文字: #000000
- フォント: aktiv-grotesk, source-han-sans-japanese, sans-serif（代替: Inter + Noto Sans JP）
- 見出しは weight 400（細身）、本文 15px / line-height 1.73
- 差し色はブランド緑 #15654c（「詳しく見る」等の CTA）
- 製品カードは大判写真＋シリーズ名＋価格、border-radius: 0、影なしのフラット
- 塗りボタンは緑 radius 4px、リンクは透明背景＋1px罫の大きなピル（radius 60px）
- palt は使わず、字間は letter-spacing で控えめに調整
```

### Adobe Fonts が使えない環境での代替指針

- 欧文 Aktiv Grotesk → **Inter**
- 和文 源ノ角ゴシック → **Noto Sans JP**（同一設計）
- 代替でも「無彩色の下地・細身の見出し・森緑の差し色・角丸ゼロのフラットなカード・大判写真タイル」を守れば世界観は再現できる
