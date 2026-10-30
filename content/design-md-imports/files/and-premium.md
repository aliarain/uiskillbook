# DESIGN.md — &Premium（アンド プレミアム）

> マガジンハウス発行のライフスタイル誌「&Premium」Web版（https://andpremium.jp/）のデザイン仕様書。
> タグライン "The guide to a better Life"。LIFESTYLE / FASHION / FOOD / TRAVEL /
> INTERIOR / BEAUTY / COLUMN を扱う、白×黒のミニマルで上質な editorial（雑誌的）デザイン。
> 欧文・見出しは Montserrat、和文・本文は游ゴシック Light(300)。"&"（アンパサンド）がブランドの象徴。
> 実サイトの computed style 実測（2026-06-27 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **白地（`#ffffff`）に純黒（`#000000`）**で組む、余白の多い上質な雑誌レイアウト。**Montserrat（欧文・見出し）＋游ゴシック Light(300)（和文・本文）**の組み合わせと、**サイト全域に適用された `palt`（プロポーショナル字詰め）**が &Premium らしさの核
- **&Premium について**: マガジンハウスが発行するライフスタイル誌の Web 版。"The guide to a better Life" を掲げ、衣食住・旅・美容を上質な編集視点で扱う。サイトも誌面の延長として、写真とタイポグラフィの規律で品位を出す**editorial（雑誌的）**構成
- **密度**: 低〜中密度。本文は **weight 300・line-height 1.8** とゆったり軽く組み、見出しは **Montserrat 700** で締める。原色のアクセントは使わず、セクションごとに**淡いパステル地**（青／黄／緑／グレー）で区切る
- **キーワード**: 白×黒、ミニマル、上質、editorial、雑誌、Montserrat、游ゴシック Light、グローバル palt、淡いパステル、アンパサンド
- **特徴**:
  - 欧文・見出し・ナビ・ラベルは **Montserrat**（display）、和文・本文は **游ゴシック Light(300)**。**weight 300 の軽い本文**が誌面的な上品さを生む
  - **`font-feature-settings: "palt"` がサイト全域に適用**（グローバル palt）。和欧混植のアキを詰めて誌面のような均質な字面にする — &Premium の最大の特徴
  - 基調は**白×黒**（背景 `#ffffff` / 主テキスト `#000000` / 補助テキスト `#2a2a2a`）。原色のブランドカラーは持たない
  - アクセントは**淡いパステルのセクション地**: 薄い青 `#eaeef9`（Pick Up）/ 薄い黄 `#fdf8ce`（Recommend）/ 薄い緑 `#d9e0d8`（Column）/ 薄グレー `#f5f5f5`（Mail Magazine）
  - CTA は**テキストリンク中心**の editorial。塗りボタンは少なく、必要時のみ**ダーク塗り `#2b2b2b`**（登録・もっと見る等）。**pill は使わない**（radius は 4px 程度か角丸なしの下線リンク）
  - 本文 line-height は **1.7〜1.8** と雑誌的にゆったり
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。基調は白×黒、アクセントは淡いパステル地。

### Brand / Core

- **Text Primary** (`#000000`): 見出し・本文・ナビ・ロゴの主要テキスト（白地）
- **Text Secondary** (`#2a2a2a`): 補足テキスト・キャプション・小さな本文（やや弱める黒）
- **Background (Main)** (`#ffffff`): ページ背景・メインキャンバス

### Pastel Section Tints（淡いパステルの面色）

> 原色のアクセントは使わず、セクションの地色で性格づけする。出現頻度の高い淡色。

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Pastel Blue | `#eaeef9` | (234, 238, 249) | "Pick Up 注目の記事" セクション地 |
| Pastel Yellow | `#fdf8ce` | (253, 248, 206) | "Recommend 連載一覧" セクション地 |
| Pastel Green | `#d9e0d8` | (217, 224, 216) | "Column 連載コラム" セクション地 |
| Soft Grey | `#f5f5f5` | (245, 245, 245) | "Mail Magazine" 等の薄い面 |
| Button Grey | `#e1e1e1` | (225, 225, 225) | 登録ボタンの地・淡いボタン面 |
| MOOK Grey | `#c0c7cd` | (192, 199, 205) | MOOK エリア等のやや濃いめの面 |

### Neutral / Dark

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Dark Button | `#2b2b2b` | (43, 43, 43) | ダーク塗りボタン（登録・もっと見る等）の地 |
| Input Text | `#282828` | (40, 40, 40) | 入力フィールドのテキスト |
| White | `#ffffff` | (255, 255, 255) | 背景・ダーク面上のテキスト |

### Overlay（画像上のテキスト）

| Token | rgba | 役割 |
|-------|------|------|
| Overlay 40 | `rgba(0, 0, 0, 0.4)` | 写真上に白テキストを乗せる軽いオーバーレイ |
| Overlay 50 | `rgba(0, 0, 0, 0.5)` | 写真上のやや強いオーバーレイ |

### Semantic（推奨値）

実サイトに明確なエラー／成功色は確認されなかった（アクセントは淡いパステル地のみ）。白×黒のトーンを崩さない範囲で推奨する補完値:

- **Danger**: `#c0392b`（誌面を壊さない落ち着いた赤。エラーの罫線・テキストに少量）
- **Success**: `#000000`（色ではなくチェックアイコン／テキストで表現）
- **Link Hover**: `#2a2a2a`（黒をわずかに弱める）または下線の表示

---

## 3. Typography Rules

### 3.1 和文フォント

- **本文（メイン）**: **游ゴシック Light(300)**。フルチェーン `游ゴシック, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ ゴシック", "MS Gothic", sans-serif`
- **weight 300 が基本**。游ゴシックの Light を本文に使うことで、誌面のような軽く上品な字面になる
- Mac / Windows ともに OS 標準の游ゴシックで描画（Web フォント非依存の和文）。Windows の游ゴシック Light 表示に注意（後述 preview 注記）
- **明朝体は本文には使わない**（全面ゴシック。タイトル写真等に明朝が入る場合は画像）

### 3.2 欧文フォント

- **display / 見出し（メイン）**: **Montserrat**。見出し・ナビ・カテゴリラベル・数字に使う幾何学サンセリフ
- 和文フォントの**先頭に Montserrat を付与**して和欧混植する。欧文・数字は Montserrat、和文は游ゴシックが当たる
- カテゴリ名（"LIFESTYLE" "FASHION" "FOOD" 等）やタグラインは Montserrat の端正な字面で見せる

### 3.3 font-family 指定

```css
/* 本文（和文中心） */
font-family: 游ゴシック, "Yu Gothic", YuGothic,
  "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ ゴシック", "MS Gothic", sans-serif;
font-weight: 300;

/* 見出し・ナビ・ラベル（欧文 display を先頭に） */
font-family: Montserrat, 游ゴシック, "Yu Gothic", YuGothic,
  "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro",
  メイリオ, Meiryo, "ＭＳ ゴシック", "MS Gothic", sans-serif;

/* 等幅 */
font-family: SFMono-Regular, Consolas, Menlo, monospace;
```

**フォールバックの考え方**:
- 欧文・数字は **Montserrat**（先頭）→ 和文フォントへフォールバック
- 和文は **游ゴシック → ヒラギノ角ゴ ProN → メイリオ → MS ゴシック**（Mac → Windows の順）
- 本文は **weight 300** を明示。游ゴシックの軽さが誌面的な上品さを担う

> **preview.html での注記**: Montserrat は Google Fonts で読み込み可能。游ゴシックは OS 依存（Web フォント非提供）で、特に **Windows では游ゴシック Light(300) のレンダリングが安定しない**ことがある。preview では和文の軽さを近づけるため、和文フォールバックに **Noto Sans JP（wght 300 も読み込む）**を補助的に置く（実機の本文は游ゴシック Light）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-06-27 取得）。**本文 17.6px・weight 300・line-height 1.8** のゆったりした軽さと、**見出し Montserrat 700** の締めが核。全テキストに `palt` 適用。

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Heading (h2) | Montserrat | 32px | 700 | 1.0 (32px) | -0.03em (-1px) | `#000000` | 大見出し。タイトに締める |
| Sub Heading (h4 大) | Montserrat | 18px | 700 | 1.4 | normal | `#000000` | ブロック見出し |
| Sub Heading (h4 小) | Montserrat | 14px | 700 | 1.4 | normal | `#2a2a2a` | 小見出し・補助見出し |
| Body | 游ゴシック | 17.6px (1.1rem) | 300 | 1.8 (31.7px) | normal | `#000000` | 標準本文。ゆったり軽く（palt） |
| Body Small / Caption | 游ゴシック | 13px | 300 | 1.7 (22px) | normal | `#2a2a2a` | 補足・キャプション |
| Nav / Category Label | Montserrat | 14px | 700 | 1.4 | 0.036em (0.5px) | `#000000` | "LIFESTYLE" 等のカテゴリ（palt） |
| Sub Nav | 游ゴシック | 13px | 300 | 1.6 | normal | `#2a2a2a` | モバイルの "問い合わせ" 等 |
| Button (emphasis) | Montserrat | 12px | 500 | 1.4 | 0.083em (1px) | `#ffffff`（`#2b2b2b` 地） | 登録・強調ラベル |
| Button (link) | Montserrat | 14px | 400 | 1.4 | normal | `#000000` | リンク内ボタン |
| Input | 游ゴシック | 14〜16px | 300 | 2.5〜2.9 (40px) | normal | `#282828` | フォーム入力 |
| Micro Label | Montserrat | 9px | 300 | 1.6 | normal | `#000000` | "CREATOR LIST" 等の極小ラベル |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **本文 (17.6px)**: `1.8`（31.7px。雑誌的にゆったり）
- **補足・キャプション (13px)**: `1.7`（22px）
- **大見出し h2 (32px)**: `1.0`（32px。タイトに締める）
- **見出し・ラベル**: `1.4` 前後

**字間 (letter-spacing)** — 実測:
- **本文・補足**: `normal`（trackingは加えず、palt で字詰めを効かせる）
- **大見出し h2**: `-0.03em`（-1px。Montserrat 700 をわずかに詰めて締める）
- **カテゴリラベル**: `0.036em`（0.5px。"LIFESTYLE" 等を均等に開く）
- **強調ボタンラベル**: `0.083em`（1px。Montserrat の小さい大文字を読みやすく開く）

**ガイドライン**:
- 本文は **17.6px / weight 300 / line-height 1.8** とゆったり軽く組む（誌面の余裕を再現）
- 見出しは **Montserrat 700**、大見出しは line-height 1.0・letter-spacing -0.03em でタイトに締める
- 欧文の小さいラベル（カテゴリ・ボタン）は letter-spacing をわずかに開く（0.5〜1px）

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 見出し・カテゴリ名の英字（"LIFESTYLE" 等）は折り返さない（`white-space: nowrap`）
- 本文の和文は標準の禁則（行頭の句読点・閉じ括弧を送る）に従う
- 長い記事タイトルは 2 行で省略（`-webkit-line-clamp`）

### 3.7 OpenType 機能

```css
/* サイト全域に適用 — &Premium の特徴 */
font-feature-settings: "palt";
```

- **`palt`（プロポーショナル字詰め）をサイト全域に適用**するのが &Premium の最大の特徴。和文・和欧混植のアキを詰め、誌面のような均質で締まった字面にする
- 見出し・本文・ナビ・ラベルすべてに効かせる（一部だけでなくグローバル適用）
- これにより、weight 300 の軽い本文でも字面が間延びせず、上質な印象を保つ

### 3.8 縦書き

- 該当なし。横書きのみ（誌面では縦組みもあるが、Web 版は横書き）

---

## 4. Component Stylings

> 実測値。CTA はテキストリンク中心。塗りボタンは少なく、必要時のみダーク `#2b2b2b`。pill は使わない（radius は控えめ）。

### Buttons / CTA

**Dark Solid Button（実測）** — "登録" / "もっと見る" 等
- Background: `#2b2b2b`
- Text: `#ffffff`（Montserrat 12px / weight 500 / letter-spacing 0.083em）
- Border: なし
- Border Radius: `4px`（控えめ。pill にしない）
- Padding: `14px 28px`（推奨）
- editorial の中で確実に押させたい登録系に使う

**Text Link Button（実測・基本）** — "VIEW MORE" / "READ" 等
- Background: `transparent`
- Text: `#000000`（Montserrat 14px / weight 400）
- 下線（hover で表示）または矢印付きのテキストリンク。&Premium の CTA の基本形
- letter-spacing は normal〜0.5px。pill・塗りにしない

**Soft Grey Button（推奨・補助）**
- Background: `#e1e1e1`
- Text: `#000000`（weight 400）
- Border Radius: `4px`
- メルマガ登録など淡く置きたいボタン。原色は使わない

### Category Label

**Category Label（実測）** — "LIFESTYLE" / "FOOD" / "TRAVEL" 等
- Font: Montserrat 14px / weight 700 / letter-spacing 0.036em / palt
- Color: `#000000`（白地）または `#ffffff`（写真上のオーバーレイ）
- 装飾は最小限。罫線で区切るか、写真上に直接乗せる

### Inputs

**Text Input（推奨）**
- Background: `#ffffff`
- Border: `1px solid #c0c7cd`（淡いグレー罫線）
- Border Radius: `4px`
- Padding: `0 12px`（高さ 40px / line-height で中央寄せ）
- Font: 14〜16px / weight 300 / `#282828`
- Focus: border を濃く（`#000000` 寄り）。強いリングは付けず罫線の濃淡で示す
- Error: border `#c0392b`（落ち着いた赤。少量）

### Cards / Surfaces

**Editorial Article Card（推奨）**
- Background: `#ffffff`、またはセクションに応じて**淡いパステル地**（`#eaeef9` / `#fdf8ce` / `#d9e0d8`）
- Border: なし（影なし）／必要なら淡いグレー罫線
- Border Radius: `4px`（控えめ。角丸なしも可）
- 記事写真 ＋ **カテゴリラベル（Montserrat 14px / 700）** ＋ タイトル（游ゴシック 300 / line-height 1.7）＋ 日付。余白で区切る
- 写真上にテキストを乗せる場合は `rgba(0,0,0,0.4〜0.5)` のオーバーレイ＋白テキスト

**Pastel Section（実測）**
- セクションごとに地色を変える: Pick Up → `#eaeef9` / Recommend → `#fdf8ce` / Column → `#d9e0d8` / Mail Magazine → `#f5f5f5`
- 原色を使わず、淡いパステルで雑誌の特集ページのような色分けをする

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | ラベル内側・アイコン間 |
| S | 8px | 小要素間 |
| M | 16px | 要素間・グリッドのガター |
| L | 32px | カード内余白・ブロック間 |
| XL | 64px | セクション内の縦区切り |
| XXL | 96px | セクション間の大きな縦余白（雑誌的な余白） |

### Container

- Max Width: `1080〜1200px`（推奨）
- Padding (horizontal): mobile `16px` / desktop `24〜40px`
- 写真と本文を余白たっぷりに並べる中央寄せレイアウト。雑誌の判面のように余白を端正にとる

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | 罫線・カード（角丸なしも基調に合う） |
| Small | 4px | ボタン・入力・カード（控えめな角丸） |

- &Premium は**控えめな角丸（最大 4px）**。**pill（9999px）は使わない**。直線的・端正に保つ

### Grid

- Columns: 推奨 12 カラム
- Gutter: 16〜24px
- 記事カード: 3列（desktop）→ 2列（tablet）→ 1列（mobile）。写真主導で整然と揃える

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | すべての要素（基本フラット） |
| 1 | `0 2px 8px rgba(0,0,0,0.06)` | 浮かせたいカード・ドロップダウン（ごく薄く） |

- **&Premium は基本的に影を使わない**（フラットな誌面）
- 立体感は **白地 ↔ 淡いパステル地のコントラスト**と、**写真のトリミング・余白**で表現する
- どうしても浮きが必要な場合のみ、ごく薄い `0 2px 8px rgba(0,0,0,0.06)` を推奨（多用しない）
- 写真上のテキストは影ではなく `rgba(0,0,0,0.4〜0.5)` のオーバーレイで可読性を確保する

---

## 7. Do's and Don'ts

### Do（推奨）

- 本文は **游ゴシック Light**（`游ゴシック, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif`）/ **weight 300**
- 見出し・ナビ・ラベルは **Montserrat を先頭に付与**して和欧混植する
- **`font-feature-settings: "palt"` をサイト全域に適用**する（&Premium の特徴。一部だけにしない）
- 本文は **17.6px / weight 300 / line-height 1.8** とゆったり軽く組む
- 大見出しは **Montserrat 32px / weight 700 / line-height 1.0 / letter-spacing -0.03em** でタイトに締める
- 基調は**白×黒**（背景 `#ffffff` / 主テキスト `#000000` / 補助 `#2a2a2a`）
- アクセントは**淡いパステルのセクション地**（青 `#eaeef9` / 黄 `#fdf8ce` / 緑 `#d9e0d8` / グレー `#f5f5f5`）で色分けする
- CTA は**テキストリンク中心**。確実に押させたいときだけ**ダーク塗り `#2b2b2b`**（radius 4px）
- カテゴリラベル（"LIFESTYLE" 等）は **Montserrat 14px / 700 / letter-spacing 0.5px**
- 写真を主役に、余白とグリッドで雑誌のような品位を出す

### Don't（禁止）

- **palt を外さない**／一部だけに留めない（グローバル palt が &Premium の字面を決める）
- 本文を **weight 400 以上で太く組まない**（300 の軽さが上質さを生む）／line-height を 1.5 未満に詰めない
- **pill（border-radius 9999px）を使わない**。角丸は最大 4px に抑える
- **原色のブランドカラー**を持ち込まない（白×黒＋淡いパステルが基調）
- パステル地を**彩度高く塗らない**（あくまで淡色。誌面の上品さを壊さない）
- 見出しに游ゴシックだけを当てない（欧文・数字は **Montserrat** を効かせる）
- 影を**多用しない**（基本フラット。奥行きは面色のコントラストと写真で）
- 和文を**weight 700 で本文全体に使わない**（強調は見出し・ラベルに限定）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 767px | スマートフォン。1カラム、メニュー折りたたみ |
| Tablet | 768px〜1023px | タブレット。2カラムグリッド |
| Desktop | ≥ 1024px | デスクトップ。3カラムグリッド |

### モバイル時の調整

- 大見出し h2: 32px → 24〜26px（line-height は 1.1 程度に少し緩める）
- 本文 17.6px は 16px まで縮小可（line-height 1.8・weight 300 は維持）
- 記事カード: 3列 → 2列 → 1列（写真主導で整然と）
- ナビはハンバーガー → フルスクリーン／ドロワーメニューに。サブナビは游ゴシック 13px / 300
- `palt` はモバイルでも維持する

### タッチターゲット

- ダーク塗りボタン: 高さ 44px 以上
- テキストリンク: 周囲に十分な余白を確保（タップ領域 44px 以上）
- 記事カード: カード全体をタップ可能に

### ダークモード

- 該当なし（実測時点で未対応）。写真上のテキストは `rgba(0,0,0,0.4〜0.5)` オーバーレイで可読性を担保

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #000000
Text Secondary: #2a2a2a
Background (Main): #ffffff

Pastel Blue: #eaeef9（Pick Up セクション地）
Pastel Yellow: #fdf8ce（Recommend セクション地）
Pastel Green: #d9e0d8（Column セクション地）
Soft Grey: #f5f5f5（Mail Magazine 等）
Button Grey: #e1e1e1
MOOK Grey: #c0c7cd

Dark Button: #2b2b2b（塗りボタン地）
Input Text: #282828
Overlay: rgba(0,0,0,0.4) / rgba(0,0,0,0.5)（写真上テキスト用）

Body Font: 游ゴシック, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ ゴシック", sans-serif（weight 300）
Heading/Nav Font: Montserrat, 游ゴシック, "Yu Gothic", ...（同じチェーン）, sans-serif

font-feature-settings: "palt"（サイト全域。&Premium の特徴）

Heading (h2): Montserrat 32px / weight 700 / line-height 1.0 / letter-spacing -0.03em / #000
Sub Heading: Montserrat 18px / 14px / weight 700
Body: 游ゴシック 17.6px(1.1rem) / weight 300 / line-height 1.8 / normal / #000
Body Small: 游ゴシック 13px / weight 300 / line-height 1.7 / #2a2a2a
Category Label: Montserrat 14px / weight 700 / letter-spacing 0.036em(0.5px) / palt / #000
Button (emphasis): Montserrat 12px / weight 500 / letter-spacing 0.083em(1px) / #fff on #2b2b2b
Input: 14-16px / weight 300 / line-height 40px / #282828

Dark Solid Button: bg #2b2b2b / text #fff / radius 4px（登録・もっと見る等）
Text Link Button: transparent / text #000 / 下線 or 矢印（基本形）
Input: bg #fff / border 1px #c0c7cd / radius 4px / focus は border を濃く
Card: bg #fff or pastel tint / radius 4px / 影なし
Radius: 最大 4px（pill 禁止）
Shadow: none（基本フラット）
```

### プロンプト例

```
&Premium（アンド プレミアム）のデザインシステムに従って、ライフスタイル記事の一覧セクションを作成してください。
- 本文フォント: 游ゴシック, "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ ゴシック", sans-serif（weight 300）
- 見出し・ナビ・ラベルは先頭に Montserrat を付与して和欧混植（欧文・数字は Montserrat、和文は游ゴシック）
- font-feature-settings: "palt" を全要素に適用する（&Premium の特徴。一部だけにしない）
- 基調は白×黒: 背景 #ffffff / 主テキスト #000000 / 補助テキスト #2a2a2a
- 本文: 游ゴシック 17.6px(1.1rem) / weight 300 / line-height 1.8 / letter-spacing normal / color #000（ゆったり軽く組む）
- 大見出し: Montserrat 32px / weight 700 / line-height 1.0 / letter-spacing -0.03em / #000（タイトに締める）
- カテゴリラベル（LIFESTYLE / FOOD / TRAVEL 等）: Montserrat 14px / weight 700 / letter-spacing 0.5px
- アクセントは原色を使わず、セクションごとの淡いパステル地で色分け: 青 #eaeef9 / 黄 #fdf8ce / 緑 #d9e0d8 / グレー #f5f5f5
- CTA はテキストリンク中心。確実に押させたいときだけダーク塗りボタン（bg #2b2b2b / text #fff / radius 4px）
- pill（border-radius 9999px）は使わない。角丸は最大 4px に抑える
- box-shadow は使わない（基本フラット。奥行きは面色のコントラストと写真で）
- 写真上にテキストを乗せる場合は rgba(0,0,0,0.4〜0.5) のオーバーレイ＋白テキスト
- 写真を主役に、余白とグリッド（3列）で雑誌のような品位を出す
```
