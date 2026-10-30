# DESIGN.md — TOPPAN（TOPPANホールディングス）

> TOPPAN（https://www.holdings.toppan.com/ja/）のデザイン仕様書。
> 1900年創業の総合印刷会社。印刷テクノロジーを核に、情報コミュニケーション・生活産業・エレクトロニクス事業を展開。
> 実サイトの computed style 実測（2026-05-25 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 1900年創業の印刷会社としての精密さ・権威性を、**完全直角（radius 0px）のボタン**と**自社開発書体「凸版文久ゴシック」**で体現。クリーンで無駄のない、工業的な美しさ
- **密度**: 本文は 13–14px と小さめ。見出しは英文 Roboto Bold で大胆に（64px）、和文は控えめ（18–25px）。英語と日本語のコントラストで情報階層を作る
- **キーワード**: 印刷精密、直角ボタン、ブルー権威、自社書体、バイリンガル・タイポグラフィ
- **特徴**:
  - **自社開発書体「凸版文久ゴシック（Toppan Bunkyu Gothic）」** を全面採用。Pr6N R（Regular）と Pr6N DB（Demi Bold）の2ウェイト。Adobe Fonts（TypeKit）経由で配信。**印刷会社が自社の書体を Web に使うこと自体がブランドステートメント**
  - **英語見出しは Roboto Bold**。和文カスタム書体＋欧文 Roboto のバイリンガル・タイポグラフィ体系
  - **全ボタンが radius 0px（完全直角）**。pill や角丸を一切使わない。活版印刷の版面のような、紙の上のシャープさをデジタルに持ち込む設計思想
  - ブランドカラーは **`#0068b5`（TOPPAN ブルー）**。コーポレートサイト全体の基調色。ダークネイビー `#193264` をセクション背景に使い、奥行きを出す
  - 「**TOPPA!!! TOPPAN**」のブランドメッセージ — 限界を突破する（突破＝TOPPA）意志を社名に重ねた力強いコピー
  - ページ背景は白 `#ffffff`。ダークネイビーセクションとの二極構成
  - ダークモード非対応（実測時点）

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand

- **TOPPAN Blue** (`#0068b5`): メインのブランドカラー。CTA ボタン背景、見出しアクセント、リンク色（12要素で使用）
- **Dark Navy** (`#193264`): ダークセクション背景。フッター・特集エリアなどの重厚な面に使用
- **Deeper Blue** (`#00469b`): ホバー・アクティブ時のブルー。TOPPAN Blue のダーク派生

### Surface

- **Light Blue Surface** (`#dfeaff`): ブルー系の薄い面。ハイライト・バッジ背景
- **Light Gray** (`#f1f1f1`): ボタン面・セクション背景のニュートラルグレー
- **Near-light Gray** (`#f0f0f0` / `#f4f4f4`): カード面・セパレータ背景

### Neutral

| Token | hex | RGB | 役割 |
|-------|-----|-----|------|
| Text Primary | `#323232` | (50, 50, 50) | 本文テキスト（純黒ではなくダークグレー） |
| White | `#ffffff` | (255, 255, 255) | ページ背景・CTA テキスト |
| Light Gray | `#f1f1f1` | (241, 241, 241) | ボタン面・セクション背景 |
| Near-light Gray | `#f4f4f4` | (244, 244, 244) | カード面 |
| Border | `#cccccc` | (204, 204, 204) | 区切り線・入力欄の枠（推奨） |

### Overlay

- **Dark Overlay**: `rgba(0, 0, 0, 0.8)` — モーダル・メニューオーバーレイ

### Semantic（実測未確認・推奨値）

- **Danger**: `#cc0000`
- **Success**: `#008844`
- **Warning**: `#cc6600`

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **凸版文久ゴシック Pr6N（Toppan Bunkyu Gothic Pr6N）** — TOPPAN が開発した自社書体。Regular（R）と Demi Bold（DB）の2ウェイト。Adobe Fonts（TypeKit）経由で Web 配信
- **フォールバック**: `"Hiragino Sans"`, `"Hiragino Kaku Gothic ProN"`, `"Noto Sans JP"`, `"Yu Gothic"`, `Meiryo`, `sans-serif`
- **明朝体**: 使用しない（サイト全体ゴシック統一）

### 3.2 欧文フォント

- **サンセリフ**: **Roboto** — 英語見出し専用。Bold（700）を多用
- 和文の凸版文久ゴシック内の欧文グリフは本文で使用
- フォールバック: `Arial`, `Helvetica`, `sans-serif`

### 3.3 font-family 指定

```css
/* 和文（本文・和文見出し） */
font-family: "凸版文久ゴシック Pr6N R", "凸版文久ゴシック Pr6N DB",
  "Hiragino Sans", "Hiragino Kaku Gothic ProN",
  "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif;

/* 英語見出し */
font-family: Roboto, Arial, Helvetica, sans-serif;
```

**フォールバックの考え方**:
- 凸版文久ゴシックは Adobe Fonts ライセンスのため、未契約環境では Hiragino Sans へフォールバック
- 英語見出しは Roboto を最優先。和文と異なるフォントを意図的に使い分けるバイリンガル設計
- 和文フォールバックに欧文専用書体を挟まない

> **代替フォント注記**: 凸版文久ゴシック Pr6N は Adobe Fonts のドメインライセンスのため、デザインのプレビューや社外資料で再現できない場合がある。代替として **Noto Sans JP**（weight 400 / 700）を使用すると、幾何学的なゴシック体として近い印象を得られる（preview.html はこの代替を使用）。

### 3.4 文字サイズ・ウェイト階層

> 実測値（トップ／会社概要ページ、2026-05-25 取得）

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color | 備考 |
|------|------|------|--------|-------------|----------------|-------|------|
| Hero H2 (EN) | Roboto | 64px | 700 | 64px (×1.0) | 1px (0.016em) | `#ffffff` | 英語キャッチ "TOPPA!!! TOPPAN" |
| Section H2 (EN) | Roboto | 40px | 700 | 40px (×1.0) | 1.2px (0.03em) | `#ffffff` | セクション英語見出し |
| Page H1 (JP) | 凸版文久ゴシック Pr6N | 25px | 400 | 46.4px (×1.86) | normal | `#323232` | 和文ページタイトル |
| H3 Accent (JP) | 凸版文久ゴシック Pr6N DB | 24px | 400 (DB) | 33.6px (×1.4) | 0.5px (0.02em) | `#0068b5` | 小見出し（ブルー） |
| H3 (JP) | 凸版文久ゴシック Pr6N DB | 18px | 400 (DB) | normal | 0.5px (0.03em) | `#323232` | 小見出し（黒） |
| Body (JP) | 凸版文久ゴシック Pr6N | 14px | 400 | 21px (×1.5) | normal | `#323232` | 本文 |
| Body Small (JP) | 凸版文久ゴシック Pr6N | 13px | 400 | normal | normal | `#323232` | 補足本文 |
| Nav Link | 凸版文久ゴシック Pr6N | 13–14px | 400–700 | 14px (×1.0) | normal | `#323232` | グローバルナビ |
| Pagination | 凸版文久ゴシック Pr6N | 14px | 700 | normal | normal | `#0068b5` / `#323232` | ページング |
| Button Menu | 凸版文久ゴシック Pr6N | 10px | 400 | normal | normal | `#323232` | ハンバーガーメニューラベル |

### 3.5 行間・字間

**行間 (line-height)** — 実測:
- **英語見出し (40–64px)**: `1.0`（タイトに詰めて力強さを出す）
- **和文見出し (25px)**: `1.86`（46.4px / 25px — 和文は広め）
- **和文小見出し (18–24px)**: `1.4`（33.6px / 24px）
- **本文 (14px)**: `1.5`（21px / 14px）
- **ナビ (13–14px)**: `1.0`（一行高さ）

**字間 (letter-spacing)** — 実測:
- **英語見出し (64px)**: `1px`（0.016em — 微量の正トラッキング）
- **英語見出し (40px)**: `1.2px`（0.03em）
- **和文小見出し**: `0.5px`（0.02–0.03em）
- **本文**: `normal`（明示的な letter-spacing 指定なし）

**ガイドライン**:
- 英語見出しは **line-height 1.0 + 微量の正トラッキング** で活版印刷のような密度感
- 和文見出しは **line-height 1.4–1.86** で日本語の可読性を確保
- 本文の letter-spacing は **normal**（凸版文久ゴシックのメトリクスに委ねる）

### 3.6 禁則処理・改行ルール

```css
/* 推奨設定（実サイト準拠） */
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

- 和文見出しは `<br>` で改行位置を手動指定するケースがある

### 3.7 OpenType 機能

```css
font-feature-settings: normal;
```

- 実測上、`palt` / `kern` の明示的有効化は確認されなかった
- 凸版文久ゴシックのデフォルトメトリクスに任せる方針

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**全ボタン共通**: **border-radius: 0px（完全直角）**。TOPPAN の全ボタンは角丸なし。これは印刷版面のシャープさをデジタルに引き継ぐ意図的なデザイン

**Primary CTA（ブルー直角）** — "詳しく見る"
- Background: `#0068b5`
- Text: `#ffffff`
- Padding: `12px 32px`
- Border Radius: `0px`
- Font: 凸版文久ゴシック Pr6N, 14px, weight 400 (DB)
- Border: none

**Secondary CTA（白直角）** — ダークセクション上
- Background: `#ffffff`
- Text: `#323232`
- Padding: `12px 32px`
- Border Radius: `0px`
- Font: 凸版文久ゴシック Pr6N, 14px, weight 400 (DB)
- Border: none

**Tertiary（グレー面直角）** — 補助アクション
- Background: `#f1f1f1`
- Text: `#323232`
- Padding: `12px 32px`
- Border Radius: `0px`
- Font: 凸版文久ゴシック Pr6N, 14px, weight 400 (DB)
- Border: none

**Ghost Button（透明直角）** — 会社概要ページ
- Background: `transparent`
- Text: `#0068b5`
- Padding: `12px 32px`
- Border Radius: `0px`
- Border: `1px solid #0068b5`
- Font: 凸版文久ゴシック Pr6N, 14px, weight 400 (DB)

### Inputs（推奨実装）

- Background: `#ffffff`
- Border: `1px solid #cccccc`
- Border (focus): `1px solid #0068b5`
- Border Radius: `0px`（ボタンと統一）
- Padding: `12px 16px`
- Font: 凸版文久ゴシック Pr6N, 14px, weight 400
- Height: `44px`

### Cards / Surfaces

- Background: `#ffffff`（メイン）/ `#f1f1f1`（グレー面）/ `#f4f4f4`（薄いグレー面）
- Border: `1px solid #e0e0e0` または border なし
- Border Radius: `0px`（直角が基本）
- Shadow: 基本フラット（`box-shadow: none`）

### Header

- Background: `#ffffff`（白）
- Border Bottom: `1px solid #e0e0e0`
- Position: `fixed` or `sticky`
- 透過なし（STORES のような半透明 header ではない）

### Dark Section

- Background: `#193264`（ダークネイビー）
- Text: `#ffffff`
- ボタンは白直角（`bg #ffffff / text #323232`）
- 英語見出しは Roboto Bold 白

### Footer

- Background: `#193264`（ダークネイビー）
- Text: `#ffffff` / `rgba(255, 255, 255, 0.7)`
- Padding: `48px 24px`

---

## 5. Layout Principles

### Spacing Scale（8px グリッド推奨）

| Token | Value | 用途 |
|-------|-------|------|
| XS | 4px | アイコンと文字の間 |
| S | 8px | ボタン内の縦余白 |
| M | 16px | カード内の段落間 |
| L | 24px | カードの内側余白 |
| XL | 48px | セクション内の見出しと本文 |
| XXL | 80px | セクション間の縦余白 |

### Container

- Max Width: `1200px`
- Padding (horizontal): mobile `16px` / desktop `24–32px`

### Border Radius Scale

| Token | Value | 用途 |
|-------|-------|------|
| Square | 0px | **全ボタン・入力欄・カード** |

TOPPAN は単一の radius 値 `0px` で統一。角丸のスケールを持たない。

### Grid

- 12 カラムグリッドが実装上自然（CSS Grid または Flexbox）
- Gutter: 24px

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | カード・ボタン・ヘッダ（基本フラット） |
| 1 | `0 2px 8px rgba(0, 0, 0, 0.08)` | ホバー時の浮き上がり（推奨） |
| 2 | `0 4px 16px rgba(0, 0, 0, 0.10)` | ドロップダウン・メガメニュー（推奨） |
| 3 | `0 8px 32px rgba(0, 0, 0, 0.15)` | モーダル・ダイアログ（推奨） |

- 実測ではほぼ全要素 `box-shadow: none`
- 立体感は **ダークネイビー `#193264` セクション**と**白セクション**の二極構成で表現
- 階層はシャドウではなく**背景色の切り替え**で作る（印刷的な面分割）

---

## 7. Do's and Don'ts

### Do（推奨）

- 和文フォントは **凸版文久ゴシック Pr6N を最優先**、フォールバックは Hiragino Sans → Noto Sans JP → Yu Gothic → Meiryo
- 英語見出しは **Roboto Bold** を使い、和文と明確に書体を分ける
- 本文の line-height は **1.5** を基本にする
- 英語見出しの line-height は **1.0** でタイトに詰める
- 全ボタン・全入力欄は **border-radius: 0px（完全直角）** を徹底する
- 主要 CTA は **`#0068b5` の直角ブルーボタン** を使う
- ダークセクションは **`#193264`（Dark Navy）** を使い、白い直角ボタンを配置する
- 本文テキストは **`#323232`**（ダークグレー）を使う
- 色は **クールトーン**（ブルー系）で統一する

### Don't（禁止）

- **角丸ボタン（border-radius > 0）を使わない** — TOPPAN は全コンポーネントが直角。pill（9999px）は絶対に使わない
- 主要 CTA に **黒 `#000000` や緑 `#00ff00` を使わない** — TOPPAN Blue `#0068b5` がブランドカラー
- 英語見出しに **凸版文久ゴシックを使わない** — 英語は Roboto Bold
- 和文見出しに **Roboto を使わない** — 和文は凸版文久ゴシック
- 本文に **純黒 `#000000` を使わない** — `#323232` がテキストカラー
- **ウォームトーンのグレー**（`#737368` 等の R=G>B 傾向）を使わない — TOPPAN はクールニュートラル
- ダークセクションに **純黒 `#000000` を使わない** — `#193264`（ブルー系ネイビー）が正解
- **line-height: 1.0 を和文本文に使わない** — 1.0 は英語見出し専用

---

## 8. Responsive Behavior

### Breakpoints（推奨値）

| Name | Min Width | 説明 |
|------|-----------|------|
| Mobile | ≤ 767px | モバイルレイアウト |
| Tablet | 768–1023px | タブレットレイアウト |
| Desktop | ≥ 1024px | デスクトップレイアウト |

### モバイル時の調整

- 英語見出し H2: 64px → 36–40px
- セクション英語 H2: 40px → 24–28px
- 和文ページ H1: 25px → 20–22px
- 本文サイズは 14px を維持
- ナビはハンバーガーメニュー化（"Menu" 10px ラベル付き）

### タッチターゲット

- 主要 CTA: 高さ 44px 以上
- ナビリンク: padding で 44px × 44px を確保

### ダークモード

- 該当なし（実測時点で未対応）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
TOPPAN Blue (CTA): #0068b5
Deeper Blue (Hover): #00469b
Dark Navy (Section BG): #193264
Light Blue Surface: #dfeaff
Light Gray: #f1f1f1
Text Primary: #323232
White: #ffffff
Overlay: rgba(0, 0, 0, 0.8)

和文 Font: "凸版文久ゴシック Pr6N R", "凸版文久ゴシック Pr6N DB", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif
英語 Font: Roboto, Arial, Helvetica, sans-serif
（凸版文久ゴシック不在時の代替: Noto Sans JP）

Body Size: 14px / line-height 1.5 / weight 400 / letter-spacing normal
英語 Hero: 64px / line-height 1.0 / weight 700 / letter-spacing 0.016em / Roboto
和文 Heading: 25px / line-height 1.86 / weight 400 (DB) / letter-spacing normal
Sub Heading: 18–24px / line-height 1.4 / weight 400 (DB) / letter-spacing 0.02em

Border Radius: 0px（全コンポーネント完全直角）
Shadow: 基本 none。階層は背景色の切り替え（白 ↔ #193264）で表現
```

### プロンプト例

```
TOPPAN のデザインに従って、事業紹介セクションを作成してください。
- 和文フォント: "凸版文久ゴシック Pr6N R", "凸版文久ゴシック Pr6N DB", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", Meiryo, sans-serif
- 英語見出し: Roboto, 40px / weight 700 / line-height 1.0 / letter-spacing 0.03em / color #ffffff（ダークセクション上）
- 和文小見出し: 24px / weight DB / line-height 1.4 / letter-spacing 0.02em / color #0068b5
- 本文: 14px / weight 400 / line-height 1.5 / letter-spacing normal / color #323232
- 主要 CTA: 背景 #0068b5（TOPPAN Blue）/ 白文字 / border-radius 0px（完全直角）/ padding 12px 32px
- セカンダリ CTA: 背景 #ffffff / 文字 #323232 / radius 0px / padding 12px 32px
- ゴースト CTA: 背景 transparent / 文字 #0068b5 / border 1px solid #0068b5 / radius 0px
- ダークセクション: 背景 #193264 / テキスト #ffffff
- カード背景: 白 #ffffff / グレー面 #f1f1f1
- box-shadow は基本 none。立体感は白 ↔ #193264 の背景色切り替えで表現
- 全コンポーネントを border-radius: 0px で統一する（角丸は一切使わない）
```
