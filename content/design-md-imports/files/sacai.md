# DESIGN.md — sacai（サカイ）

> sacai 公式サイト（https://www.sacai.jp/）のデザイン仕様書。
> デザイナー阿部千登勢が 1999 年に立ち上げた東京発のファッションブランド。
> 既存のアイテムをハイブリッドに再構築する独自のデザイン言語で世界的に評価される。
> 実サイトの computed style 実測（2026-05-08 取得）に基づく。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **「Helvetica + 大文字 + 細い罫線」だけで構成された、極めて骨太なミニマル EC**。CSS Custom Properties で `--heading-text-transform: uppercase` と `--heading-letter-spacing: -0.02em` をブランド全体の規約として定義し、見出しはすべて大文字＆タイトトラッキングで統一
- **密度**: 大判のルックブック画像が主役、テキストは脇役。EC 機能は Shopify をベースに最低限の罫線とボタンだけで実装
- **キーワード**: Helvetica、Bold、UPPERCASE、Negative letter-spacing、ハイブリッド、骨太、ストイック、無装飾、撮影主役、純黒罫線、白地
- **特徴**:
  - **Helvetica 一本足打法** — 見出しも本文も Helvetica（フォールバックに Noto Sans JP）を使い、サブファミリーや欧文セリフを混ぜない
  - **見出しは `uppercase` + `letter-spacing: -0.02em`** — CSS 変数 `--heading-text-transform`、`--heading-letter-spacing` でグローバル定義
  - **CTA はゴースト型一択** — `border: 1px solid #000` + 透過背景 + 白文字、または同じく罫線 + 黒文字の uppercase ボタン
  - **本文は 14px / weight 400 / line-height 1.65 / letter-spacing 0** — 読みやすさよりブランドの統一感を優先する潔さ
  - **見出しサイズは clamp() で連続スケーリング** — h1 は `clamp(1.375rem, …, 2rem)`（22–32px）でビューポートに応じて滑らかに伸縮
  - **色は事実上モノクロ** — 純黒 `#000000`、ヘッディングは `#1f1f1f`、補助テキスト `rgba(0,0,0,0.65)`、白背景 `#ffffff`。装飾的なブランドカラーは持たない
  - **ボタンの専用 font 変数** — `--button-font: normal 400 0.8125rem / 1.65 Helvetica, "Noto Sans JP", …` で 13px のボタン専用タイポを定義
  - **ECは Shopify、装飾は最小** — Cookie バナーなど機能 UI もブランドルールに揃える徹底ぶり

---

## 2. Color Palette & Roles

> 実サイトの computed style 実測値。すべて hex 表記。

### Brand / Foreground

- **Sacai Black** (`#000000`): 本文・リンク・ロゴの基本色（`rgb(0, 0, 0)`）。**事実上のブランドカラー**
- **Heading Charcoal** (`#1f1f1f`): h2 / h3 のテキスト色（`rgb(31, 31, 31)`）。完全な純黒よりわずかに引いた濃グレー
- **Mid Gray** (`#333333`): ボタン内のテキスト色（`rgb(51, 51, 51)`）。Cookie バナー等
- **Soft Gray** (`#939393`): カテゴリーリンクの控えめな色（`rgb(147, 147, 147)`）
- **Muted** (`rgba(0, 0, 0, 0.65)`): 補助テキスト・キャプション
- **Label Muted** (`rgba(0, 0, 0, 0.6)`): フォームラベル

### Surface（背景）

- **Pure White** (`#ffffff`): ページ背景・モーダル・ボタンフィル
- **Cookie Banner Border** (`#1f1f1f`): バナーボタンの罫線
- **Banner Surface** (`#efefef`): スクリプト埋め込み等のシステム面色（`rgb(239, 239, 239)`）
- **Divider Line** (`#d9d9d9`): 区切り線（`rgb(217, 217, 217)`）

### Accent（限定的）

- なし。**装飾的アクセントカラーを持たないことがブランドの定義**。彩度は商品撮影のみが担う

> **Note**: sacai のパレットは **「黒・白・ごく薄いグレー」のみ**。ボタンも背景も罫線もすべてこの 3 色で構成され、ブランド固有の「色」を持たないことで、ハイブリッドな商品の意匠を最大限引き立てる。

---

## 3. Typography Rules

### 3.1 和文フォント

**ゴシック体（フォールバックスタック）**:
- Noto Sans JP（Web フォントが指定されているケースが多いが、CSS 上は OS フォールバック扱い）
- macOS / iOS は Hiragino Kaku Gothic にフォールバック（system fallback）
- Windows は Yu Gothic / Meiryo にフォールバック

### 3.2 欧文フォント

- **Helvetica**（最先頭、最重要。OS 依存だが macOS / iOS / 多くの社内環境で表示される）
- **-apple-system**（システムフォント、Helvetica が無い場合の Apple 標準）
- **Arial**（Windows 等での最終フォールバック）
- **sans-serif**（generic family）

### 3.3 font-family 指定

```css
/* CSS 変数による統一（実サイト Custom Properties） */
--heading-font-family: Helvetica, "Noto Sans JP", sans-serif, -apple-system, Arial, sans-serif;
--text-font-family:    Helvetica, "Noto Sans JP", sans-serif, -apple-system, Arial, sans-serif;
--button-font:         normal 400 0.8125rem / 1.65 Helvetica, "Noto Sans JP", sans-serif, -apple-system, Arial, sans-serif;

/* 適用例 */
body, h1, h2, h3, p, a, button, input {
  font-family: Helvetica, "Noto Sans JP", sans-serif, -apple-system, Arial, sans-serif;
}
```

**フォールバックの考え方**:
- **Helvetica が最先頭** — 欧文ベースで設計し、和文は Noto Sans JP または OS フォールバックに委ねる
- スタックの途中に `sans-serif` が混在しているのは Shopify テーマの自動生成によるもの（実害はない）
- 見出し・本文・ボタンを **同じファミリーで統一** することで、ブランドの「Helvetica 一本」ルールを徹底

### 3.4 文字サイズ・ウェイト階層

実サイトの CSS 変数（clamp）と computed style に基づく。

| Role | Font | Size (computed) | Weight | Line Height | Letter Spacing | Transform | 用途 |
|------|------|------|--------|-------------|----------------|-----------|------|
| Hero CTA | Helvetica | 32px | 700 | 52.8px (1.65) | 0 | uppercase | 「SPRING CAPSULE COLLECTION」等 |
| H1 (clamp) | Helvetica | 22–32px | 700 | 1.65 | -0.02em | uppercase | ページタイトル。`clamp(1.375rem, …, 2rem)` |
| H2 (clamp) | Helvetica | 20–28px | 700 | normal | -0.02em | uppercase | セクション見出し |
| H3 (clamp) | Helvetica | 18–22px | 700 | normal | -0.02em | uppercase | サブ見出し |
| Card Title | Helvetica | 18px | 700 | 28.8px (1.6) | -0.36px (-0.02em) | uppercase | 商品名・記事カード |
| Section Lead | Helvetica | 16px | 700 | 27.2px (1.7) | -0.32px | none | リード文・ナビ強調 |
| Body | Helvetica | 14px | 400 | 23.1px (1.65) | 0 | none | 本文 |
| Body Bold | Helvetica | 14px | 700 | 18.2px (1.3) | 0 | none | 強調本文・テーブルキー |
| Button | Helvetica | 13px | 700 | 21.45px (1.65) | 0 | uppercase | CTA ボタン |
| Caption | Helvetica | 12px | 700 | 19.8px (1.65) | -0.24px | none | バッジ・極小注釈 |
| Form Label | Helvetica | 12px | 400 | 19.8px (1.65) | 0 | none | フォーム |

### 3.5 行間・字間

- **本文 line-height**: `1.65`（23.1px / 14px）。日本語にしてはやや欧文寄りの詰まった行間
- **見出し line-height**: `normal`（ブラウザ依存。ほぼ 1.0〜1.2）
- **letter-spacing**:
  - 本文: `0`（`--text-letter-spacing: 0.0em`）
  - 見出し: `-0.02em`（`--heading-letter-spacing: -0.02em`）。Helvetica の Bold をタイトに詰めることで欧文ロゴ的な印象を作る
  - ボタン: `0`（`--button-letter-spacing: 0.0em`）
- **意図**: 大文字見出しのバランスのために負の字間を採用。本文は字間ゼロで詰めすぎず緩めず

### 3.6 禁則処理・改行ルール

- 特別な指定なし。ブラウザのデフォルト挙動を尊重
- 商品名・コレクション名はほぼ英大文字なので、和文禁則の出番が少ない設計

### 3.7 OpenType機能

```css
font-feature-settings: normal;
```

- **palt / kern とも強制しない** — Helvetica のメトリクスをそのまま使う
- 字間は letter-spacing（`-0.02em`）で物理的にコントロール

### 3.8 縦書き

- 未使用

---

## 4. Component Stylings

### Buttons

#### Primary CTA（透明 + 白罫線、画像オーバーレイ）

実例: ヒーローの「SPRING CAPSULE COLLECTION」

- 背景: `transparent`
- 文字色: `#000000` または `#ffffff`（背景画像に応じて反転）
- 罫線: `1px solid #ffffff`（暗い画像上）
- font-size: 32px / weight 700
- line-height: 52.8px (1.65)
- text-transform: `uppercase`
- letter-spacing: `0` または `-0.02em`
- padding: `10.4px 28px`
- border-radius: `0px`（**角丸を持たない**）

#### Secondary CTA（黒罫線・白背景）

実例: フッター「登録」、Cookie 同意

- 背景: `#ffffff`
- 文字色: `#333333` / `#000000`
- 罫線: `1px solid #1f1f1f`
- font-size: 13–14px / weight 700
- line-height: 16.8–21.45px
- letter-spacing: `0`
- padding: `10–10.4px 25–28px`
- border-radius: `2px`（極めて控えめ。ほぼ 0 と等価）
- text-transform: ボタンによっては `uppercase`

### Inputs

- 背景: `#ffffff`
- 罫線: `1px solid` 薄グレー
- 文字色: `#000000`
- font-size: 14px / weight 400
- line-height: 23.1px (1.65)
- padding-block: `0.65rem`（10.4px）
- padding-inline: `0.8rem`（12.8px）
- border-radius: `0px`

### Cards

- 背景: `#ffffff` または透過
- 罫線: なし
- 影: なし（フラット）
- 角丸: `0px`
- 商品画像が主役。下にキャプション（14–18px / weight 700 / uppercase）

### Navigation

- 背景: `#ffffff`
- 文字色: `#000000`
- font-family: Helvetica
- font-size: 14px / weight 700
- letter-spacing: 0（ナビは uppercase 化されないケースもあり）
- 装飾なし（罫線・背景なしのテキストリンク）

---

## 5. Layout Principles

### Container Tokens（実サイト変数）

| Token | Value |
|-------|-------|
| `--container-max-width` | 100% |
| `--container-xxs-max-width` | 27.5rem (440px) |
| `--container-xs-max-width` | 42.5rem (680px) |
| `--container-sm-max-width` | 61.25rem (980px) |
| `--container-md-max-width` | 71.875rem (1150px) |
| `--container-lg-max-width` | 78.75rem (1260px) |
| `--container-xl-max-width` | 85rem (1360px) |
| `--container-gutter` | 24px |

### Section Spacing

| Token | Value |
|-------|-------|
| `--section-vertical-spacing` | 3rem (48px) |
| `--section-vertical-spacing-tight` | 3rem (48px) |
| `--section-stack-gap` | 2.25rem (36px) |
| `--section-stack-gap-tight` | 2.25rem (36px) |

### Form Spacing

| Token | Value |
|-------|-------|
| `--form-gap` | 1.25rem (20px) |
| `--fieldset-gap` | 1rem (16px) |
| `--form-control-gap` | 0.625rem (10px) |
| `--checkbox-control-gap` | 0.75rem (12px) |
| `--input-padding-block` | 0.65rem (10.4px) |
| `--input-padding-inline` | 0.8rem (12.8px) |
| `--checkbox-size` | 0.875rem (14px) |

### Layout 原則

- **画像をフルブリードで配置** — ルックブック画像は左右マージンなしで端まで使う
- **テキスト要素は中央寄せ + 短文** — タイトルは 1〜2 行で大文字
- **罫線で区切る EC グリッド** — 商品グリッドは 2 列または 3 列、薄い罫線で仕切る
- **ヒーローの CTA は画像下中央** — 透過 + 罫線のゴーストボタン

---

## 6. Depth & Elevation

- **影**: `box-shadow: none` がデフォルト。**フラット**
- **段階表現**: 罫線 1px と余白で奥行きを作る
- **角丸**: `border-radius: 0px` または `2px`（ほぼ角丸を持たない）

---

## 7. Do's and Don'ts

### Do's

- **font-family は Helvetica + Noto Sans JP のチェーン** で統一する
- **見出しは `text-transform: uppercase` + `letter-spacing: -0.02em` + weight 700**
- **本文は 14px / weight 400 / line-height 1.65 / letter-spacing 0**
- **CTA はゴーストボタン**（罫線 1px + 透過背景）または白背景 + 黒罫線
- **`border-radius: 0px〜2px`** に抑える（角丸 UI を作らない）
- **CSS 変数で見出し・本文・ボタンの font / weight / letter-spacing を一括管理**
- **アクセントカラーを使わず、黒・白・薄いグレーのみで構成**
- **見出しサイズは `clamp()` で連続スケーリング**

### Don'ts

- **明朝体やセリフ体を見出しに使わない** — Helvetica 1 本で押し切る
- **角丸 8px 以上の丸いボタンを作らない** — 0〜2px が上限
- **ボタンに塗りの彩色を使わない** — 透過 + 罫線、または白 + 黒罫線
- **見出しを小文字や混在で書かない** — 必ず `uppercase`
- **本文に letter-spacing を持たせない** — 字間 0 が標準（見出しのみ -0.02em）
- **影をつけない**（box-shadow none を貫く）
- **彩色のブランドアクセントを足さない** — 撮影画像が彩りを担う

---

## 8. Responsive Behavior

### Breakpoints

実サイトの container 変数から逆算：

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 680px (xs) | スマホ縦 |
| Small | 680–980px (sm) | 小型タブレット |
| Medium | 980–1150px (md) | タブレット〜小デスクトップ |
| Large | 1150–1360px (lg / xl) | デスクトップ |

### タッチターゲット

- ボタンの最小高さは padding `10.4px 28px` × line-height で計算 ≈ 41px。**WCAG 44px をギリギリ下回るケースがあり、モバイル拡張時は要注意**

### フォントサイズの調整

- 見出しは `clamp()` でビューポート連動
  - h1: 22px ↔ 32px
  - h2: 20px ↔ 28px
  - h3: 18px ↔ 22px
  - h4: 16px ↔ 19.5px
- 本文は 14px 固定（モバイルでも縮小しない）

---

## 9. Agent Prompt Guide

sacai らしい UI を生成するときは以下を伝えるとよい：

```
- 全要素 font-family: Helvetica, "Noto Sans JP", sans-serif, -apple-system, Arial, sans-serif
- 見出しは uppercase + letter-spacing: -0.02em + font-weight: 700
- 本文 line-height: 1.65、letter-spacing: 0、font-size: 14px / weight 400
- 文字色 #000000（純黒）、見出しは #1f1f1f、補助は rgba(0,0,0,0.65)
- 背景は #ffffff（純白）
- CTA はゴーストボタン: border: 1px solid #000 / 透過背景 / uppercase / weight 700 / 13–14px
- border-radius: 0px〜2px（角丸を持たない）
- 影は使わない（box-shadow: none）
- 装飾的ブランドカラーを使わない（黒・白・薄グレーのみ）
- 見出しサイズは clamp() で連続スケーリング: h1=clamp(22px, …, 32px)
- アイテム名・コレクション名は英大文字で書く
- 商品画像をフルブリードで配置し、テキストは脇役にする
```
