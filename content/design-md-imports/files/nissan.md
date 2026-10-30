# DESIGN.md --- NISSAN (日産自動車)

> 日産自動車（https://www.nissan.co.jp/）のデザイン仕様書。
> グローバル自動車メーカーの日本向けコーポレートサイト。車両ラインナップ、WEBカタログ、試乗予約等を提供。
> 実サイトの computed style 実測（2026-05-22 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 直線的で構造的な自動車メーカーらしいレイアウト。**角型CTA（border-radius: 0px）** がブランドの最大の視覚的特徴。NISSAN Red `#c3002f` を差し色に使い、ダークヘッダーとホワイト基調のコンテンツエリアで堅実さと先進性を両立
- **密度**: 車両カード中心のグリッドレイアウト。本文 line-height 1.5 で標準的。見出しはタイトに line-height 1.0 で詰める。情報密度は中程度で、車両画像とCTAの視認性を優先
- **キーワード**: 角型CTA、NISSAN Red、ダークヘッダー、ShinGoPro の端正な字面、自動車メーカーの堅実さ
- **特徴**:
  - 和文フォントに **ShinGoPro（新ゴ Pro、Morisawa Adobe Fonts）** を採用。日本語を主体に組まれた代表的なゴシック体で、自動車メーカーの堅実なイメージと合致
  - **ブランドカラーは `#c3002f`（NISSAN Red）**。「WEBカタログ」「詳しくはこちら」等の主要CTAすべてに使用。背景色として面で使い、白文字を載せる
  - **ダークカラー `#1a1a1a`** をヘッダー、カード背景、オーバーレイに使用。`#070707` はヘッダー内ボタンのニアブラック
  - **角型ボタン（border-radius: 0px）が最大のブランド要素**。pill や角丸を使わず、直線的・構造的なデザイン言語を貫徹
  - テキストカラーは `#343434`（見出し）と `#666666`（本文）の2段階。純黒 `#000000` は避け、やや柔らかいダークグレーを使用
  - サーフェスは `#f6f6f6`（タブ非活性）/ `#eeeeee`（セカンダリボタン・お知らせ面）の控えめなグレー
  - リガチャ無効化 `font-feature-settings: "clig" 0, "liga" 0` をナビに適用
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **NISSAN Red** (`#c3002f`): メインのブランドカラー。主要CTA「WEBカタログ」「詳しくはこちら」の背景色。uniqueBackgrounds で 19 件出現
- **Dark** (`#1a1a1a`): ダークカード・ヘッダー背景・オーバーレイ。36 件出現
- **Near Black** (`#070707`): ヘッダー内ボタンの背景

### CTA / Buttons

- **Primary CTA**: 背景 `#c3002f` / 文字 `#ffffff` / border `1px solid #c3002f` / radius `0px`（角型）/ padding `12px 25px`
- **Secondary CTA**: 背景 `#eeeeee` / 文字 `#000000` / border `1px solid #eeeeee` / radius `0px`（角型）/ padding `12px 25px`
- **Header Button**: 背景 `#070707` / 文字 `#ffffff` / padding `6px 20px` / font 12px / weight 700 / letter-spacing 0.9px
- **Guide CTA**: 背景 `#c3002f` / radius `8px` / border `1px solid #c3002f` / padding `8px 28px 8px 12px`（右矢印用の非対称パディング）

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#343434` | (52, 52, 52) | 見出し・主要テキスト |
| Text Secondary | `#666666` | (102, 102, 102) | 本文テキスト |
| Text Muted | `#8a8a8a` | (138, 138, 138) | ミュートリンク・補助テキスト |
| Text Black | `#000000` | (0, 0, 0) | ナビリンク・一部本文 |
| Surface Light | `#f6f6f6` | (246, 246, 246) | タブ非活性の背景 |
| Surface Gray | `#eeeeee` | (238, 238, 238) | セカンダリボタン・お知らせ面 |
| Surface Notice | `#f2f2f2` | (242, 242, 242) | お知らせ背景のバリエーション |
| Background | `#ffffff` | (255, 255, 255) | ページ背景 |

### Semantic（実測未確認・推奨値）

実サイトには明確なエラー／成功色は表面化していない。自動車メーカーサイト向けに推奨する補完値:

- **Danger**: `#d32f2f` 程度の赤（NISSAN Red と区別するためやや明るめ）
- **Success**: `#2e7d32` 程度のグリーン
- **Warning**: `#f57c00` 程度のオレンジ

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **ShinGoPro（新ゴ Pro）** を最優先。Morisawa Adobe Fonts のフォント。Regular（400）と Bold（700）の2ウェイト
- **フォールバック**: `"Hiragino Kaku Gothic ProN"`（Apple OS）→ `"Noto Sans JP"`（Linux／Android）→ `"Yu Gothic"`（Windows）→ `"Meiryo"`（古い Windows）→ `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- 専用の欧文書体は持たず、**ShinGoPro の欧文グリフ**を優先
- フォールバックに各OSのシステム和文フォントの欧文グリフ
- 純粋な欧文サンセリフ（Helvetica Neue / Inter 等）は font-family に含まれない

### 3.3 font-family 指定

```css
/* 全要素共通（body, h1~h4, p, a, span, button, nav, header, footer） */
font-family: ShinGoPro-Regular, "Hiragino Kaku Gothic ProN",
  "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif;

/* 見出し・ボタン（Bold ウェイト） */
font-family: ShinGoPro-Bold, "Hiragino Kaku Gothic ProN",
  "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif;
```

**フォールバックの考え方**:
- ShinGoPro（Adobe Fonts）を最優先し、和文・欧文ともにブランド書体で統一する
- Adobe Fonts ライセンス上 Web では `use.typekit.net` 経由でしか配信されないため、未契約環境では即座に Hiragino Kaku Gothic ProN へフォールバック
- フォールバックは **和文を持つフォント**だけで構成。Helvetica Neue 等の欧文専用書体は挟まない

> **代替フォント注記**: ShinGoPro は Adobe Fonts のドメインライセンスのため、デザインのプレビューや社外資料で再現できない場合がある。代替として **Zen Kaku Gothic New**（weight 400 / 700）を使用すると、同じ Morisawa 系の書体であり字面の端正さが近い印象を出せる（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップページ、2026-05-22 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Section H2 | ShinGoPro-Bold | 28px | 700 | 28px (x1.0) | 0.1px (0.004em) | `#343434` | 「人気モデルランキング」等 |
| H3 Card Title | ShinGoPro-Bold | 18px | 700 | 20px (x1.11) | 0.1px (0.006em) | `#343434` | 「セレナ」「ノート」等の車名 |
| Body | ShinGoPro-Regular | 14px | 400 | 22px (x1.57) | normal | `#666666` | 本文テキスト |
| Tab Label | ShinGoPro-Regular | 18px | 400 | 18px (x1.0) | 0.1px (0.006em) | `#343434` | 「ボディタイプ」「価格帯」等 |
| Body P | ShinGoPro-Regular | 14px | 400 | 21px (x1.5) | normal | `#000000` | 一部の段落テキスト |
| Caption | ShinGoPro-Regular | 13px | 400 | 13px (x1.0) | normal | `#666666` | 補足テキスト・キャプション |
| Small | ShinGoPro-Regular | 12px | 400 | 16.8px (x1.4) | normal | `#666666` | 注釈・免責事項 |
| Nav Link | ShinGoPro-Regular | 14px | 400 | 24px (x1.71) | 0.9px (0.064em) | `#000000` | グローバルナビ |
| Header Button | ShinGoPro-Bold | 12px | 700 | — | 0.9px (0.075em) | `#ffffff` | 「販売店検索」等 |

### 3.5 行間・字間

**行間 (line-height)** --- 実測:
- **本文 (14px)**: `1.5~1.57`（21~22px / 14px）--- 自動車サイトの標準的な値
- **補助テキスト (13px)**: `1.0`（13px / 13px）--- タイトに詰める
- **小注釈 (12px)**: `1.4`（16.8px / 12px）
- **見出し (28px)**: `1.0`（28px / 28px）--- 極めてタイト
- **タブ (18px)**: `1.0`（18px / 18px）--- 一行高さ
- **ナビ (14px)**: `1.71`（24px / 14px）--- ナビは広め

**字間 (letter-spacing)** --- 実測:
- **本文**: `normal`（明示的な指定なし）
- **見出し**: `0.1px`（微小な正のトラッキング、ほぼゼロに近い）
- **ナビ・ヘッダーボタン**: `0.9px`（0.064~0.075em）--- 広めのトラッキングでゆったり

**ガイドライン**:
- 日本語本文は **line-height 1.5 + letter-spacing normal** が NISSAN の基本リズム
- 見出しは **line-height 1.0** で極めてタイトに詰め、ブロック感を出す
- ナビとヘッダーボタンのみ **letter-spacing 0.9px** で広めに。ブランドの堅実さを文字の間隔で表現

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 車名・価格等の固有名詞は `white-space: nowrap` で折り返し防止を推奨

### 3.7 OpenType 機能

```css
/* ナビゲーション */
font-feature-settings: "clig" 0, "liga" 0;
```

- ナビリンクでリガチャ（合字）を明示的に無効化。`clig`（文脈依存合字）と `liga`（標準合字）をともに off
- **palt は使用しない**。ShinGoPro のメトリクスをそのまま活かす方針
- 本文には `font-feature-settings: normal` が適用されている

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Primary CTA（NISSAN Red・角型）** --- 「WEBカタログ」「詳しくはこちら」
- Background: `#c3002f`
- Text: `#ffffff`
- Border: `1px solid #c3002f`
- Padding: `12px 25px`
- Border Radius: `0px`（**角型 --- NISSAN の最大のブランド要素**）
- Font: ShinGoPro-Regular, 14px, weight 400
- Transition: opacity 0.3s

**Secondary CTA（グレー・角型）** --- 「オンライン見積り」等
- Background: `#eeeeee`
- Text: `#000000`
- Border: `1px solid #eeeeee`
- Padding: `12px 25px`
- Border Radius: `0px`（角型）
- Font: ShinGoPro-Regular, 14px, weight 400

**Header Button（ニアブラック・角型）** --- 「販売店検索」「試乗車検索」
- Background: `#070707`
- Text: `#ffffff`
- Padding: `6px 20px`
- Border Radius: `0px`
- Font: ShinGoPro-Bold, 12px, weight 700, letter-spacing 0.9px

**Guide CTA（NISSAN Red・角丸）** --- ガイドページ内
- Background: `#c3002f`
- Text: `#ffffff`
- Border: `1px solid #c3002f`
- Padding: `8px 28px 8px 12px`（右矢印アイコン用の非対称パディング）
- Border Radius: `8px`（例外的に角丸を使用）

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #c3002f`
- Border Radius: `0px`（ボタンと統一して角型を推奨）
- Padding: `12px 16px`
- Font: ShinGoPro-Regular, 14px, weight 400
- Height: `44px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#1a1a1a`（ダークカード）/ `#eeeeee`（お知らせ面）
- Border: なし（画像カードが多く、枠線を使わない）
- Border Radius: `0px`（角型が基本）
- Shadow: 基本フラット（`box-shadow: none`）
- 車両カードは画像が全幅を占め、その下にテキスト情報を配置

### Header

- Background: `#1a1a1a` ~ `#070707`（ダーク）
- Position: `fixed top: 0`
- z-index: 100 程度
- 白文字ナビ + NISSAN Red/ニアブラックのCTAボタン

### Tab Navigation

- Active Tab: `#ffffff` 背景、`#343434` テキスト
- Inactive Tab: `#f6f6f6` 背景、`#343434` テキスト
- Border Radius: `0px`
- Font: 18px, weight 400, letter-spacing 0.1px

### Footer

- Background: `#1a1a1a`（ダーク）
- Text: `#ffffff` / `#8a8a8a`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（推奨 8px グリッド）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | カード内の段落間 |
| L | 25px | CTAボタンの横余白（実測） |
| XL | 48px | セクション間の縦余白 |
| XXL | 80px | ヒーロー上下のゆとり |

### Container

- Max Width: `1200px` 程度（中央寄せのコンテナ）
- Padding (horizontal): mobile `16px` / desktop `24~32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| None | 0px | **主要CTA・セカンダリCTA・カード・タブ（基本）** |
| Small | 8px | ガイドCTAの例外的な角丸 |

**重要**: NISSAN のデザイン言語は **角型（radius 0px）が基本**。pill（9999px）や大角丸（16px）は使用しない。

### Grid

- 車両一覧: 3~4カラムグリッド（CSS Grid / Flexbox）
- Gutter: 16~24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・タブ（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ホバー時のカード浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.12)` | ドロップダウン・メガメニュー |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.16)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ダークサーフェス `#1a1a1a`** と **ライトサーフェス `#ffffff`** のコントラストで表現
- 影を使う場合も控えめな黒の透明度で、自動車メーカーの堅実さを維持

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **ShinGoPro を最優先**、フォールバックは Hiragino Kaku Gothic ProN → Noto Sans JP → Yu Gothic → Meiryo
- **主要CTAは角型（border-radius: 0px）** を徹底する。これが NISSAN の最大のブランド要素
- 主要CTAの背景色は **`#c3002f`（NISSAN Red）** を使い、白文字を載せる
- 見出しの line-height は **1.0** でタイトに。本文は **1.5** で標準的に
- ナビ・ヘッダーボタンの letter-spacing は **0.9px** で広めにとる
- ダークヘッダー `#1a1a1a` + 白文字ナビの配色を維持する
- テキストカラーは `#343434`（見出し）/ `#666666`（本文）の2段階で使い分ける
- セカンダリCTAは `#eeeeee` 背景 + 黒文字の角型ボタン

### Don't（禁止）

- **CTAに pill（border-radius: 9999px）や角丸（8px 以上）を使わない** --- NISSAN は角型が基本（ガイドページの例外を除く）
- 主要CTAに **黒やグレーを使わない** --- NISSAN Red `#c3002f` が主要CTAの唯一のブランドカラー
- テキストの色に **純粋な `#000000`** を見出しに使わない --- `#343434` を使う（ナビリンクの `#000000` は例外）
- ヘッダーを **白やライトグレーにしない** --- NISSAN はダークヘッダーが基本
- `palt`（プロポーショナル字詰め）を **有効にしない** --- ShinGoPro のメトリクスをそのまま使う
- **冷たいブルーやグリーンをアクセント色にしない** --- NISSAN のアクセントは赤（`#c3002f`）のみ
- 本文に **line-height: 1.2 以下** を使わない（可読性が著しく低下する）

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 767px | モバイルレイアウト（ハンバーガーナビ） |
| Tablet | <= 1023px | タブレットレイアウト |
| Desktop | > 1024px | デスクトップレイアウト |

### モバイル時の調整

- Section H2: 28px → 22~24px
- 車両グリッド: 3~4カラム → 1~2カラム
- 本文サイズは 14px を維持（line-height も 1.5 維持）
- ナビはハンバーガー化、展開時にフルスクリーンメニュー

### タッチターゲット

- 主要CTA: 高さ 44px 以上（padding `12px 25px` + 14px font + line-height >= 44px）
- ヘッダーボタン: 高さ 34px 程度（padding `6px 20px`）

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
NISSAN Red (CTA): #c3002f
Dark (Header/Card): #1a1a1a
Near Black (Header Button): #070707
Text Primary (見出し): #343434
Text Secondary (本文): #666666
Text Muted: #8a8a8a
Surface Light: #f6f6f6
Surface Gray: #eeeeee
Background: #ffffff

Font: ShinGoPro-Regular, "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif
（ShinGoPro 不在時の代替提案: Zen Kaku Gothic New）

Body Size: 14px / line-height 1.5 / weight 400 / letter-spacing normal
Heading Size: 28px / line-height 1.0 / weight 700 / letter-spacing 0.1px
Caption: 13px / line-height 1.0 / letter-spacing normal
Small: 12px / line-height 1.4 / letter-spacing normal
Nav: 14px / line-height 1.71 / letter-spacing 0.9px

Border Radius: 0px（角型が基本。pill や大角丸は使わない）
Shadow: 基本 none。階層はダークサーフェスとライトサーフェスのコントラストで表現
```

### プロンプト例

```
NISSAN のデザインに従って、車両ラインナップのグリッドセクションを作成してください。
- フォント: ShinGoPro-Regular, "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif
- セクション見出し: 28px / weight 700 / line-height 1.0 / letter-spacing 0.1px / color #343434
- カードタイトル（車名）: 18px / weight 700 / line-height 1.11 / letter-spacing 0.1px / color #343434
- 本文: 14px / weight 400 / line-height 1.5 / letter-spacing normal / color #666666
- 主要CTA: 背景 #c3002f（NISSAN Red）/ 白文字 / border-radius 0px（角型）/ border 1px solid #c3002f / padding 12px 25px
- セカンダリCTA: 背景 #eeeeee / 黒文字 / border-radius 0px（角型）/ padding 12px 25px
- ヘッダー: 背景 #1a1a1a（ダーク）/ 白文字ナビ
- カード背景: 白 #ffffff（基本）、ダークカード #1a1a1a も可
- box-shadow は基本 none。フラットなデザイン
- 見出しは #343434、本文は #666666。純黒 #000000 は見出しに使わない
- CTAに pill（radius 9999px）や角丸を使わない --- 角型（0px）が NISSAN のブランド
```
