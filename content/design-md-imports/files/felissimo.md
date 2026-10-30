# DESIGN.md — FELISSIMO

> FELISSIMO フェリシモ（https://www.felissimo.co.jp/）のデザイン仕様書。
> 実サイトの CSS computed style に基づく。ファッション・雑貨・手づくりキットの定期便通販サイト。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 白を基調としたクリーンで親しみやすい EC サイト。シアンブルーのアクセントカラーで「楽しさ」「発見」を表現。商品写真を主役にしたビジュアル重視のレイアウト
- **密度**: 商品カタログとしての情報密度は高いが、白背景と十分な余白で圧迫感を軽減
- **キーワード**: 親しみやすい、クリーン、シアンブルー、カタログ型、ハンドメイド
- **特徴**: CSS Custom Properties で `--skin-*` 系のテーマトークンと `--color-*` 系のベーストークンを二層で管理。游ゴシック 500（Medium）をベースに palt を適用。ブランドカラーのシアンブルー `#00a1e0` がヘッダーや見出しのアクセントに使われる

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Felissimo Cyan** (`#00a1e0`): プライマリカラー（`--skin-primary-color-1`）。見出しアクセント、CTA
- **Light Cyan** (`#7ed0ee`): サブアクセント（`--color-light-blue`）

### Secondary

- **Link Blue** (`#0070d2`): リンクテキスト（`--color-blue`, `--skin-link-color-2`）

### Neutral（ニュートラル）

- **Text Primary** (`#202020`): 本文テキスト
- **Text Menu** (`#444444`): メニューリンク（`--skin-menu-color-1`）
- **Text Dark** (`#222222`): 強調テキスト（`--skin-menu-color-2`）
- **Text Muted** (`#999999`): 補助テキスト（`--color-slightly-darker-gray`）
- **Text Light** (`#bbbbbb`): タグライン等の薄いテキスト
- **Background** (`#ffffff`): ページ背景
- **Background Section** (`#edece2`): セクション背景（温かみのあるグレージュ）
- **Background Light** (`#f9f9f9`): 明るいセクション背景（`--color-light-gray`）
- **Border** (`#cccccc`): 区切り線（`--color-horizontal-rule-grey`）
- **Search Button** (`#777576`): 検索ボタン背景

### Semantic（意味的な色）

- **Success** (`#008827`): 成功（`--color-success`）
- **Danger** (`#cc0000`): エラー・削除（`--color-danger`）
- **Warning** (`#ffc107`): 警告（`--warning`）

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（デフォルト）**:
- 游ゴシック / Yu Gothic / YuGothic
- ヒラギノ角ゴ Pro W3（macOS フォールバック）
- メイリオ（Windows フォールバック）
- Noto Sans / Noto Sans CJK JP（Linux / Android フォールバック）

### 3.2 欧文フォント

- **ヘッダーフォント**: Dosis（`--skin-header-font`）— Google Fonts のラウンデッドサンセリフ
- **ボディフォント**: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial（`--skin-body-font`）

### 3.3 font-family 指定

```css
/* 本文（和文） */
font-family: 游ゴシック, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", "ヒラギノ角ゴ W3",
             "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic", メイリオ, Meiryo,
             "Noto Sans", "Noto Sans CJK JP", "system-ui", sans-serif;

/* ヘッダー・ブランド（欧文） */
font-family: 'Dosis', sans-serif;

/* ボディ（欧文フォールバック） */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
             Arial, "Noto Sans", sans-serif;
```

**フォールバックの考え方**:
- 和文は游ゴシックを先頭に、macOS → Windows → Linux/Android のフォールバック
- 游ゴシックのウェイトは body で `500`（Medium 相当）を指定して太さを確保
- ヘッダーのブランドロゴ周辺に Dosis を使い、ラウンデッドな欧文で親しみやすさを演出
- Noto Sans CJK JP までフォールバックに含めた包括的な指定

### 3.4 文字サイズ・ウェイト階層

> 以下は computed style による実測値

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Section Title (h2) | 游ゴシック | 24px | 700 | 28.8px (x1.2) | normal | 「人気アイテム」等 |
| Category Title (h2) | 游ゴシック | 13px | 700 | 15.6px (x1.2) | normal | 「ファッション」等のカテゴリ名 |
| Footer Heading (h2) | 游ゴシック | 15px | 700 | 19.5px (x1.3) | normal | フッターリンクグループ見出し |
| Body | 游ゴシック | 16px | 500 | 24px (x1.5) | normal | 本文テキスト |
| Thumbnail Title (p) | 游ゴシック | 16px | 500 | 24px (x1.5) | normal | 商品サムネイルタイトル |
| Price (p) | 游ゴシック | 15px | 500 | 18px (x1.2) | normal | 価格表示、色 #999999 |
| Tagline (h1) | 游ゴシック | 12px | 500 | 14.4px (x1.2) | normal | タグライン、色 #bbbbbb |
| Keyword Tag | 游ゴシック | 14px | 500 | 21px (x1.5) | normal | キーワードタグ |
| Search Button | 游ゴシック | 14px | 400 | 14px (x1.0) | normal | 検索ボタン |

### 3.5 行間・字間

**行間 (line-height)** — 実測値:
- 本文 (body): `24px` (16px x **1.5**)
- 見出し (h2): `28.8px` (24px x **1.2**)
- カテゴリ名: `15.6px` (13px x **1.2**)
- 価格: `18px` (15px x **1.2**)

**字間 (letter-spacing)** — 実測値:
- 全要素: `normal`（letter-spacing の明示的な指定なし）

**ガイドライン**:
- 本文は line-height: 1.5 で標準的な可読性
- 見出しは line-height: 1.2 でコンパクト
- 字間は全て normal。字詰めの代わりに palt で調整

### 3.6 禁則処理・改行ルール

```css
word-wrap: break-word;
overflow-wrap: break-word;
```

### 3.7 OpenType 機能

```css
/* body レベルで palt を適用 */
font-feature-settings: "palt";
```

- **palt**: body で適用。本文・見出し共にプロポーショナル字詰め
- 一部のインタラクティブ要素（検索ボタン等）では `font-feature-settings: normal` にリセット

### 3.8 縦書き

- 該当なし。横書きのみ

---

## 4. Component Stylings

### Buttons

**Search Button**
- Background: `#777576`
- Text: `#ffffff`
- Padding: 1px 6px
- Border Radius: 0px
- Font Size: 14px
- Font Weight: 400

**Keyword Tag**
- Background: `#ffffff`
- Text: `#202020`
- Border: 1px solid `#ffffff`
- Padding: 8px 10px
- Border Radius: 4px
- Font Size: 14px
- Font Weight: 500

### Inputs

- 検索入力はヘッダーに統合（独立したフォーム要素の詳細は未確認）

### Cards

- Background: `#ffffff`
- Border: なし（写真ベースのカードレイアウト）
- Border Radius: なし
- 商品サムネイル + テキスト情報のシンプルな構成

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
| XXL | 64px |

### Container

- Max Width: 1200px（推定）
- Padding (horizontal): 20px

### Breakpoints（CSS Custom Properties）

- `--breakpoint-sm`: 544px
- `--breakpoint-md`: 769px
- `--breakpoint-lg`: 992px
- `--breakpoint-xl`: 1200px

### Grid

- Columns: 4–5（商品グリッド）
- Gutter: 16px（推定）

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | ほぼ全ての要素がフラット |

- サイト全体がフラットデザイン。シャドウはほとんど使用しない
- セクション区切りは背景色の切り替え（`#ffffff` ↔ `#edece2` ↔ `#f9f9f9`）で表現
- 検索オーバーレイは `rgba(255,255,255,0.7)` の半透明白

---

## 7. Do's and Don'ts

### Do（推奨）

- ブランドカラーのシアンブルー `#00a1e0` を見出しアクセントや CTA に使う
- リンクには `#0070d2` のブルーを使う（`--skin-link-color-2`）
- 和文テキストは游ゴシック 500（Medium）を使う。Windows での表示品質を確保
- body レベルで `font-feature-settings: "palt"` を適用する
- ページ背景は白 `#ffffff`、セクション背景に `#edece2` のグレージュを使い分ける
- 商品写真を大きく表示し、テキスト情報は最小限に
- キーワードタグは白背景 + 角丸 4px の控えめなスタイル
- ヘッダーのブランド要素に Dosis を使う

### Don't（禁止）

- シアンブルー `#00a1e0` をテキスト色として多用しない（見出しアクセント・CTA 限定）
- 游ゴシックのウェイトを 400 にしない（500 で Medium 相当を維持）
- 派手なシャドウや強い角丸を使わない（フラットでクリーンな美学を維持）
- テキストの色に純粋な `#000000` を使わない（`#202020` を使う）
- letter-spacing を明示的に設定しない（palt に任せる）
- セクション背景に鮮やかな色を使わない（白 / グレージュ / ライトグレーに限定）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | <= 543px | モバイルレイアウト（`--breakpoint-sm`） |
| Tablet | <= 768px | タブレットレイアウト（`--breakpoint-md`） |
| Desktop SM | <= 991px | 小デスクトップ（`--breakpoint-lg`） |
| Desktop LG | > 1200px | 大デスクトップ（`--breakpoint-xl`） |

### タッチターゲット

- 最小サイズ: 44px x 44px（WCAG 基準）

### フォントサイズの調整

- モバイルでは本文 16px を維持、見出しはデスクトップの 70–80% に縮小
- 商品グリッドは 2カラムに変更

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Felissimo Cyan: #00a1e0（プライマリ・CTA・見出しアクセント）
Light Cyan: #7ed0ee（サブアクセント）
Link Blue: #0070d2（リンク）
Success: #008827
Danger: #cc0000

Text Primary: #202020
Text Menu: #444444
Text Dark: #222222
Text Muted: #999999
Background: #ffffff
Background Section: #edece2（グレージュ）
Background Light: #f9f9f9
Border: #cccccc
Search Button: #777576

JP Font: 游ゴシック, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro W3", ..., sans-serif
Header Font: 'Dosis', sans-serif

Body Size: 16px / 500 / line-height: 1.5 / letter-spacing: normal
Section Title: 24px / 700 / line-height: 1.2
palt: あり（body 全体適用）

Keyword Tag: bg white / border white / radius 4px / 14px / 500
Search Button: bg #777576 / white / radius 0px
```

### プロンプト例

```
FELISSIMO のデザインに従って、商品一覧ページを作成してください。
- 和文フォント: 游ゴシック, "Yu Gothic", YuGothic, ..., sans-serif（weight: 500）
- ヘッダー欧文: 'Dosis', sans-serif
- テキスト色: #202020
- ページ背景: #ffffff
- セクション背景: #edece2（グレージュ）
- プライマリ: #00a1e0（CTA・見出しアクセント）
- リンク: #0070d2
- 見出し: 24px, 700, line-height: 1.2
- 本文: 16px, 500, line-height: 1.5
- 全体に font-feature-settings: "palt" を適用
- カード: フラット（シャドウなし）、写真主体
- キーワードタグ: 白背景、radius 4px
```
