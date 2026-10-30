# DESIGN.md — JILL STUART Beauty

> JILL STUART Beauty（https://www.jillstuart-beauty.com/）のデザイン仕様書。
> "sweets cosmetics" を掲げるフェミニン・ラグジュアリーコスメブランド。プリンセスのような甘く華やかな世界観を、ウォームピンクベージュの配色と明朝体・セリフ体の繊細なタイポグラフィで表現している。
> 実サイトの computed style 実測（2026-05-21 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: フェミニン・ラグジュアリー。ウォームピンクベージュ `#f5f0ef` を基調面に敷き、和文見出しに明朝体（Shippori Mincho）、欧文にクラシカルなセリフ（EB Garamond）を組み合わせて、華やかさの中に上品さを保つ。テキスト色はウォームブラウン `#4c4948` で、純黒を徹底的に避ける
- **密度**: ゆったり。大きなビジュアルと余白を活かした構成。本文 12px というファッション・コスメブランド特有の小さめサイズで、情報よりも世界観を優先する
- **キーワード**: フェミニン、エレガント、プリンセス、ウォームピンク、甘美
- **特徴**:
  - **3つのフォントファミリーの使い分け**: 和文見出しに Shippori Mincho（明朝体）、欧文ラベルに EB Garamond（セリフ）、和文本文に Inter Tight（サンセリフ）。用途別にフォントの性格を変える贅沢な設計
  - テキスト色 `#4c4948` はウォームブラウン。冷たいグレーや黒を一切使わない
  - ウォームピンクベージュ `#f5f0ef` が最も広い面積を占めるブランドサーフェス。白 `#ffffff` とのツートーンで構成
  - CTA はテキストリンク＋矢印が基本。塗りつぶしボタンをほとんど使わない、控えめで上品なインタラクション
  - `font-feature-settings: normal` — palt も kern も使わない。フォント本来のメトリクスを尊重する設計
  - フッターは `#3b4043` のクールダーク。ここだけ温度が下がり、情報的な印象に切り替わる

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand — Warm Pink-Beige Palette

- **Rose Beige Surface** (`#f5f0ef`): ブランドを象徴するウォームピンクベージュ。カード背景・セクション背景として最も広い面積を占める
- **Warm Pink** (`#f3e8e6`): Rose Beige よりやや暖かいピンク。アクセントサーフェス、ホバー面
- **Soft Rose** (`#eed2cd`): 柔らかいローズ。強調面、プロモーション帯

### Text

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#4c4948` | (76, 73, 72) | 本文・見出しの基本色。ウォームブラウン |
| Text Secondary | `#3b4043` | (59, 64, 67) | フッターテキスト、補助テキスト。わずかにクールなダーク |

### Surface

| Token | hex | 役割 |
|-------|-----|------|
| Background | `#ffffff` | ページ全体の基本背景 |
| Rose Beige | `#f5f0ef` | ブランドサーフェス。タブ Active、カード背景 |
| Warm Pink | `#f3e8e6` | アクセントサーフェス |
| Soft Rose | `#eed2cd` | 強調面、プロモーション帯 |
| Footer Dark | `#3b4043` | フッター背景 |

### Border

- **Border** (`#e7e7e7`): 区切り線、カードの枠線

### Interactive / Tab States

- **Tab Active**: `#f5f0ef`（Rose Beige）
- **Tab Inactive**: `#ffffff`（白）
- **Reset Button**: bg `#ffffff`, radius `6px`

---

## 3. Typography Rules

### 3.1 和文フォント

- **明朝体**: Shippori Mincho（Google Fonts）— 和文見出し・ラベルに使用。繊細で上品な印象
- **ゴシック体**: ヒラギノ角ゴ Pro W3（Hiragino Kaku Gothic Pro W3）— Inter Tight のフォールバック

### 3.2 欧文フォント

- **セリフ（ラベル）**: EB Garamond — カテゴリ名等の欧文ラベルに使用。クラシカルで優雅なセリフ
- **サンセリフ（見出し）**: Montserrat — 欧文見出しに使用。Weight 300 の細いストロークでエレガントさを出す
- **サンセリフ（本文）**: Inter Tight — 和文本文の欧文部分。コンパクトなプロポーション

### 3.3 font-family 指定

```css
/* 本文 */
font-family: "Inter Tight", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro W3", メイリオ, Meiryo, 游ゴシック体, YuGothic, "Yu Gothic M", "游ゴシック Medium", sans-serif;

/* 和文見出し・ラベル */
font-family: "Shippori Mincho", serif;

/* 欧文カテゴリラベル */
font-family: "EB Garamond", serif;

/* 欧文見出し */
font-family: "Montserrat", sans-serif;
```

**フォールバックの考え方**:
- 本文は `Inter Tight`（Google Fonts サンセリフ）を先頭に置き、欧文の表示品質を確保。続いて和文はヒラギノ → メイリオ → 游ゴシックのシステムフォント
- 見出しの Shippori Mincho はフォールバックを `serif` のみにし、明朝体の性格を保つ
- EB Garamond / Montserrat も同様に generic family のみ
- **3つのフォントファミリーを用途別に切り替える**のが JILL STUART Beauty の設計の核心

> **preview.html での注記**: Shippori Mincho、EB Garamond、Montserrat、Inter Tight はすべて Google Fonts で配信されており、プレビューでもそのまま使用可能

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| H2 和文 | Shippori Mincho | 30px | 500 | 1.5 | 0.04em | 「新商品 New Arrival」等 |
| H2 和文 Strong | Shippori Mincho | 30px | 700 | 1.5 | normal | 「ランキング」等 |
| H2 欧文 | Montserrat | 28px | 300 | 1.0 | 0.1em | "STAFF RECOMMEND" 等 |
| H2 Small | Shippori Mincho | 22px | 500 | 1.5 | 0.04em | 「カテゴリから探す」等 |
| Category Label | EB Garamond | 20px | 500 | — | 0.08em | "Lips リップ" 等の欧文カテゴリ |
| Body | Inter Tight | 12px | 400 | 1.5 | normal | 本文。ファッション・コスメの慣習的小サイズ |
| Body Serif | EB Garamond | 13px | 400 | — | normal | 欧文本文 |
| Nav Label | Shippori Mincho | 11px | 500 | — | normal | ナビゲーションの和文ラベル |
| Small Label | Shippori Mincho | 10px | 500 | — | normal | フッター・注釈等の最小テキスト |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文: 18px (12px x 1.5) — 小さい本文サイズに対して標準的な比率
- 和文見出し（30px）: 45px (30px x 1.5) — ゆったりとした見出し行間
- 欧文見出し（28px）: 28px (28px x 1.0) — タイトな欧文見出し。Montserrat weight 300 の細い字形に合わせた密な組み

**字間 (letter-spacing)** — 実測値:
- 和文見出し: `0.04em` (1.2px / 30px) — Shippori Mincho で控えめに字間を開ける
- 欧文見出し: `0.1em` (2.8px / 28px) — Montserrat weight 300 に広い字間。ラグジュアリーブランドの定番
- 欧文カテゴリラベル: `0.08em` (1.6px / 20px) — EB Garamond に上品な字間
- 本文: `normal` — 字間調整なし

**ガイドライン**:
- 明朝体・セリフ体の見出しには `0.04em`〜`0.1em` の字間を設定し、優雅さを出す
- 細いウェイト（Montserrat 300）ほど字間を広く取る（`0.1em`）。字間がエレガンスの演出装置
- 本文（12px）は字間を開けない。小さいサイズで字間を広げると可読性が落ちる

### 3.6 禁則処理・改行ルール

- ブラウザデフォルトの禁則処理に依存
- 明朝体見出しは短いフレーズが多く、改行が発生しにくい設計

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- **palt 不使用**: プロポーショナル字詰めをしない。明朝体（Shippori Mincho）の原型を保つ
- **kern 不使用**: EB Garamond / Montserrat のカーニングもブラウザデフォルトに委ねる
- フォント本来のメトリクスをそのまま活かす設計。字間の調整は `letter-spacing` で明示的に行う

### 3.8 縦書き

- 該当なし

---

## 4. Component Stylings

### Buttons

**JILL STUART Beauty は塗りつぶしボタンをほとんど使わない**。CTA は「テキストリンク＋矢印」が基本で、UI全体が控えめで上品。

**Reset / Utility Button**
- Background: `#ffffff`
- Text: `#4c4948`
- Border: なし
- Border Radius: 6px
- Font Size: 12px

**Tab Navigation**
- Active: bg `#f5f0ef`（Rose Beige）
- Inactive: bg `#ffffff`
- Border: なし（背景色の切り替えで状態を表現）

**Text Link CTA**
- Text: `#4c4948`
- Decoration: なし（矢印アイコン `>` や `→` で遷移を示唆）
- Hover: 下線表示

### Inputs

- Background: `#ffffff`
- Border: 1px solid `#e7e7e7`
- Border (focus): 1px solid `#4c4948`
- Border Radius: 0px（角ばった入力欄。ブランドのシャープさを保つ）
- Font Size: 12px
- Font Family: "Inter Tight", sans-serif

### Cards

**商品カード**
- Background: `#ffffff`
- Border: なし（影もなし。フラットで余白によるグルーピング）
- 画像 + テキストのシンプルな構成

**セクションカード**
- Background: `#f5f0ef`（Rose Beige）
- Border: なし
- Border Radius: 0px
- Padding: 24px–40px

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

- Max Width: 1200px（推定）
- Padding (horizontal): 16px–40px

### Grid

- 商品一覧: 4カラム（デスクトップ）
- ランキング: 横スクロール（Swiper / Vue Carousel）
- コンテンツ: 1カラム中央寄せ

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼすべての要素（フラットが基本） |
| 1 | `0 1px 4px rgba(76,73,72,0.08)` | ドロップダウン |
| 2 | `0 4px 16px rgba(76,73,72,0.1)` | モーダル |

- **基本方針はフラット**。影をほぼ使わない。要素の区別はサーフェスカラーの切り替え（`#ffffff` ↔ `#f5f0ef`）で行う
- 影を使う場合も `rgba(0,0,0,...)` ではなく **ウォームブラウン `rgba(76,73,72,...)` ベース**にする。冷たい黒影を避ける

---

## 7. Do's and Don'ts

### Do（推奨）

- テキスト色は `#4c4948`（ウォームブラウン）を使う。純黒 `#000` ではない
- サーフェスに `#f5f0ef`（Rose Beige）を広く使い、ウォームピンクベージュのトーンを保つ
- 和文見出しには Shippori Mincho（明朝体）を使い、繊細さ・優雅さを出す
- 欧文ラベルには EB Garamond、欧文見出しには Montserrat weight 300 を使う
- Montserrat には `letter-spacing: 0.1em` を必ず設定する（ラグジュアリーの定番）
- CTA はテキストリンク＋矢印を基本とし、塗りつぶしボタンは最小限にする
- ボーダーは `#e7e7e7` のニュートラルグレーを使う
- `font-feature-settings: normal` を指定する（palt / kern を使わない）
- ページ全体の温度をウォーム（暖色系）に統一する

### Don't（禁止）

- 純黒 `#000000` をテキストに使わない。`#4c4948` を使う
- 冷たいグレー（青みがかったグレー）をサーフェスに使わない。`#f5f0ef` / `#f3e8e6` / `#eed2cd` のウォームピンク系を使う
- ピル型ボタン（`border-radius: 9999px`）を使わない。角ばった形状〜6px radius まで
- 太い欧文ウェイト（700 等）を見出しに使わない。Montserrat は weight 300、EB Garamond は weight 500
- ゴシック体（サンセリフ）で見出しを組まない。見出しは必ず明朝体（Shippori Mincho）またはセリフ（EB Garamond / Montserrat）
- `palt` を使わない。明朝体のプロポーショナル字詰めはこのブランドにはそぐわない
- 派手な影や強いコントラストを使わない。フラット＋サーフェスカラーの切り替えで表現する
- フッター以外に `#3b4043` を使わない。フッターのみの色

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 480px | モバイルレイアウト |
| Tablet | ≤ 768px | タブレットレイアウト |
| Desktop | > 768px | デスクトップレイアウト |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）
- テキストリンク CTA はタッチ領域を 44px 以上確保する

### フォントサイズの調整

- モバイルでは和文見出し（30px）を 22–24px 程度に縮小
- 欧文見出し（28px）を 20–22px 程度に縮小
- 本文 12px はモバイルで 14px に拡大を推奨（可読性確保）
- カテゴリラベル（20px）は 16px 程度に縮小

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Text Primary: #4c4948 (warm brown)
Text Secondary: #3b4043
Background: #ffffff
Rose Beige Surface: #f5f0ef
Warm Pink Surface: #f3e8e6
Soft Rose: #eed2cd
Footer Dark: #3b4043
Border: #e7e7e7

Heading Font (JP): "Shippori Mincho", serif
Label Font (EN): "EB Garamond", serif
Heading Font (EN): "Montserrat", sans-serif
Body Font: "Inter Tight", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro W3", メイリオ, Meiryo, 游ゴシック体, YuGothic, "Yu Gothic M", "游ゴシック Medium", sans-serif

Body Size: 12px
Line Height: 1.5
Letter Spacing (JP heading): 0.04em
Letter Spacing (EN heading): 0.1em
font-feature-settings: normal
```

### プロンプト例

```
JILL STUART Beauty のデザインシステムに従って、商品一覧ページを作成してください。
- テキスト色: #4c4948（ウォームブラウン。純黒を使わない）
- 和文見出し: "Shippori Mincho", serif — 30px, weight 500, letter-spacing 0.04em
- 欧文見出し: "Montserrat", sans-serif — 28px, weight 300, letter-spacing 0.1em
- 欧文ラベル: "EB Garamond", serif — 20px, weight 500, letter-spacing 0.08em
- 本文: "Inter Tight", sans-serif — 12px, weight 400, line-height 1.5
- 背景: #ffffff、セクション面は #f5f0ef（Rose Beige）
- ボーダー: #e7e7e7
- CTA: テキストリンク + 矢印（塗りつぶしボタンではない）
- フラットデザイン。影は使わず、サーフェスカラーの切り替えで構成
- font-feature-settings: normal（palt / kern 不使用）
```
