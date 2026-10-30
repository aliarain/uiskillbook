# DESIGN.md — 三菱商事（Mitsubishi Corporation）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-25 / 対象: `https://www.mitsubishicorp.com/jp/ja/`, `/jp/ja/about/message/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **角丸ゼロ・影ほぼゼロ・黒と白だけ。** 面は黒 `#000000`、文字は白、罫線は 1px。装飾を全部落として、字間と余白だけで格をつくる
- **密度**: 低い。本文 16px に対してコンテンツ幅は 1200px、左右の余白は 120px。1 画面に詰め込まない
- **キーワード**: たづがね角ゴシック、Neue Helvetica、角丸ゼロ、字間 0.1em、設計幅トークン

**このサイトの核心は4つある。**

1. **欧文と和文を Monotype で一式そろえ、FONTPLUS で配信している。** 欧文 **Neue Helvetica**、和文 **たづがね角ゴシック（Tazugane Gothic）**。どちらも `fonts.fontplus.dev` から来る（トップで **フォントファイル要求 30 件・全部 FONTPLUS**）。たづがねは Helvetica/Frutiger 系の欧文に合わせて設計された和文なので、**この 2 つは偶然の組み合わせではなく設計上のペア**
2. **使えるウェイトは 200 / 400 / 500 の 3 本だけで、太字が存在しない。** 実測で `font-weight: 100・200・300` は全部同じ面（200）、`500・600・700・900` も全部同じ面（500）に解決する。**実サイトの 50px 見出しは `font-weight: 300` と書いてあるが、描画されるのは 200**
3. **`palt` を 1 要素も使わず、字間は要素ごとに `em` で当てる。** CSS 全文に `palt` / `halt` は 0 件。代わりに本文 0.03em・ナビ 0.08em・見出し 0.1em と、**役割ごとに違う字間**を持たせている
4. **`--base-unit: 10px` と「設計幅における 1px」トークンで寸法を組む。** `--mc--quantity--of-design--horizontal--dt: 0.0520833333vw`（= 100vw / 1920）のように、**設計幅 1920 / 1440 / 768 / 375px それぞれの 1px に相当する vw 値**を変数に持っている

**ヒーローの `what comes to mind?` は DOM に存在しない。** 全画面の `<video>`（1440×720・blob 配信）に焼き込まれた文字で、DOM 側を全走査しても該当テキストは出てこない。**ここを Web フォントで実装しない。**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Black（面）** | **`#000000`** | **このサイトの主役。** タブの選択状態、`ニュース一覧` ボタン、カテゴリ切替ボタンの選択面。文字色としても可視 20 要素 |
| **MC Red** | **`#a22041`**（実装は `rgba(162,32,65,0.8)`） | **`ページ上部へ` ボタンのみ**（可視 1 要素）。三菱商事の赤。**面としてはここにしか出ない** |
| **Navy** | **`#0f2350`** | ニュース見出しリンク（トップ 6 要素）。本文リンクの色 |

> **赤は「ほぼ使わない」のが実装の実態。** ロゴ以外でブランド赤が面になるのは右下の戻るボタン 1 つだけ。**赤を CTA に広げると別のサイトになる。**

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 見出し・本文。**可視 20 要素**。このサイトは本文に純黒を使う
- **Text on Dark** (`#ffffff`): 黒面・メガメニュー上のテキスト（**可視 170 要素**。ナビが開いている状態の計測のため最多）
- **Text Secondary** (`#333333`): グローバルナビの項目（可視 11 要素）
- **Text Muted** (`#666666`) / (`#999999`): 言語切替の非選択、`Social media` ラベル
- **Border** (`#d5d5d5`): カードの枠・区切り線（最多の罫線色）
- **Border Strong** (`#000000`): 1px 黒罫。タブ・ボタンの枠
- **Surface Gray** (`#efefef`): メガメニューの開閉ボタン面（可視 32 要素）
- **Surface Light** (`#f7f7f8`): `ピックアップ` セクションの面
- **Surface Lighter** (`#f2f1f1`)
- **Background** (`#ffffff`): ページ背景（`pageBackground.resolved` = `rgb(255,255,255)` / 根拠 `body`）

> **計測に出る `#d52484`（ピンク）・`#151b17`・`#3860be` は Video.js のプレイヤー UI。** サンプル文字列が `0:05` `1x, selected` `Filter Icon` なので判別できる。**ブランド色ではないので採用しない。**

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（唯一）**: **たづがね角ゴシック（Tazugane Gothic）**。Monotype。FONTPLUS 配信。**ウェイトは 200 / 400 / 500 の 3 本だけ**
- **明朝体**: 下層ページに `--mc--str--of-font-family-name--serif`（游明朝）が宣言されているが、**実測 可視 1 要素**（`経営戦略2027` のラベル 1 つ）。実質使っていない
- **Noto Sans JP** はスタックの 3 番目。**トップページではフォント要求 0 件**、下層ページで `fonts.gstatic.com` から 5 件だけ読まれる。CSS 全文の `@font-face` 461 件はほぼ Noto Sans JP の `unicode-range` 分割なので、**件数を「読み込んでいる証拠」にしない**

### 3.2 欧文フォント

- **サンセリフ**: **Neue Helvetica**（Monotype・FONTPLUS 配信）。**ウェイトは 200 / 400 / 500 の 3 本だけ**
- 和文より**先頭**に置かれているので、欧文は必ず Neue Helvetica が取る

### 3.3 font-family 指定

```css
/* 変数 1 本にスタック全体を入れている（--mc--str--of-font-family-name--basic） */
font-family:
  "Neue Helvetica",        /* 欧文。先頭なので欧文は必ずこれ */
  "Tazugane Gothic",       /* 和文。たづがね角ゴシック */
  "Noto Sans JP",          /* 受け皿。Google Fonts から unicode-range で部分読み */
  "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "游ゴシック",
  "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
  "Osaka Meiryo", "メイリオ", "ＭＳ Ｐゴシック", "MS PGothic",
  sans-serif;
```

**フォールバックの考え方**:
- **欧文を先頭に置く構成**。和文書体に含まれる欧文グリフではなく、Neue Helvetica の欧文を使わせるため
- 游ゴシックは Medium を Regular より前に置く順（Windows 対策）になっている
- **`"Osaka Meiryo"` は実サイトの誤り。** Osaka と メイリオは別の書体で、この名前のフォントは存在しない。正しくは `Osaka, メイリオ` と 2 つに分ける

### 3.4 文字サイズ・ウェイト階層

ルートは `html { font-size: var(--mc--size--of-font--for-root, 16px) }`、`body { font-size: 0.625rem }` = **10px**。
サイズは px 直書きではなく `rem` で持つ。

| Role | Size | Weight（宣言） | **実際に出る Weight** | Line Height | Letter Spacing | 備考 |
|------|------|------|------|------|------|------|
| Display（トップの大見出し） | 50px | `300` | **200** | 64px (1.28) | 5px (**0.1em**) | `ニュース` `ピックアップ` |
| Heading 1（下層ページ） | 42px | `300` | **200** | 64px (1.52) | 5.04px (**0.12em**) | `社長メッセージ` |
| Heading 2 | 34px | `400` | 400 | 48px (1.41) | 3.4px (**0.1em**) | |
| Heading 3 | 28px | `400` | 400 | — | 2.8px (**0.1em**) | メガメニューの大見出し |
| Section Label | 24px | `400` | 400 | 1.5 | 0.72px (**0.03em**) | `三菱商事について` |
| Nav / Link | 20px | `400`〜`500` | 400 / 500 | 1.6 | 0.4px〜2px | 一覧リンク・タブ |
| Body | 16px | `400` | 400 | 28.8px (**1.8**) | 0.48px (**0.03em**) | **可視 94 要素で最多** |
| Caption | 15.008px | `400` | 400 | 1.67 | 0.7px | ニュースの日付・見出し |
| Small | 14px | `400` | 400 | — | — | 言語切替 |

> **`font-weight` は 3 段しかない。** `@font-face` は 200 / 400 / 500 のみ。実測（同一ページで幅を比較）:
> `100・200・300` → **全部 200 の面** ／ `400` → 400 の面 ／ `500・600・700・900` → **全部 500 の面**。
> **`font-weight: 700` と書いても太字にはならず、Medium が出る。** 合成太字も起きない。

### 3.5 行間・字間

- **本文の行間**: **1.8**（16px → 28.8px）。可視 33 要素
- **中間の行間**: **1.6**（最多 62 要素）/ **1.5**（41 要素）
- **見出しの行間**: 1.28〜1.52（50px → 64px、42px → 64px）
- **本文の字間**: **0.03em**（16px で 0.48px）。**可視 73〜76 要素で最多**
- **ナビの字間**: 0.08em（16px で 1.28px）
- **見出しの字間**: **0.1em**（28px→2.8px / 34px→3.4px / 50px→5px）。下層の h1 だけ **0.12em**

**字間は「継承」ではなく「各要素が `em` で持つ」設計。** 判定根拠: サイズが違う要素で px 値が比例して変わっている（16px→0.48px、24px→0.72px、34px→3.4px）。**body に 1 回書いて継承させる書き方ではない。**

```css
body { letter-spacing: normal; }   /* body は normal。継承させない */
.text   { font-size: 1rem;   letter-spacing: 0.03em; line-height: 1.8; }
.nav    { font-size: 1rem;   letter-spacing: 0.08em; }
.heading{ font-size: 3.125rem; letter-spacing: 0.1em; line-height: 1.28; font-weight: 300; }
```

> **`line-height` は body に無単位 `1` が入っている。** `body { font-size: 10px }` に対して computed line-height が 10px、かつ**両ページとも行間比 1 未満が 1 件も出ない**（14px の子要素が 14px の行送りになる）ので、絶対値 px ではなく無単位。
> **本文ブロックには必ず `line-height` を宣言すること。** 宣言を忘れると 1 が降りてきて行が潰れる。

### 3.6 禁則処理・改行ルール

```css
body { word-break: normal; }   /* 実測。break-all でも auto-phrase でもない */
```

`body` の `word-break` は **`normal`**（7 幅すべてで確認）。日本語の標準的な禁則処理がそのまま働く。
`word-break: break-all` を足すと熟語の途中で折れてしまうので入れない。

### 3.7 OpenType 機能

```css
/* 実サイトは font-feature-settings を一切書いていない */
font-feature-settings: normal;
```

- **`palt` / `halt` は CSS 全文で 0 件、実測も 0 要素。** 字詰めは一切していない
- 約物は**詰めずにそのまま**。代わりに `letter-spacing` を正の値で足して、ゆったりした字面をつくっている
- **`palt` を後から足さない。** 正の字間と併用すると設計意図（空ける）と逆の処理が混ざる

### 3.8 縦書き

実測 `writing-mode: vertical-rl` は **0 要素**。縦組みは使わない。

---

## 4. Component Stylings

### Buttons

**Primary（選択中のタブ・一覧ボタン）**
- Background: `#000000`
- Text: `#ffffff`
- Padding: `10px 20px`
- Border Radius: **`0`**
- Font Size: `20px`
- Font Weight: `500`
- Letter Spacing: `2px`（0.1em）

**Secondary（非選択のタブ）**
- Background: `#ffffff`
- Text: `#000000`
- Padding: `10px 20px`
- Border Radius: **`0`**
- Font Size / Weight / Letter Spacing: Primary と同じ

**Outlined（黒面・写真の上のリンク）**
- Background: `transparent`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Padding: `0 0 0 20px`（左だけ空けて罫線と文字を離す）
- Border Radius: **`0`**
- Font Size: `20px` / Weight `400` / Letter Spacing `0.48px`

**Scroll-to-top（唯一の丸い要素）**
- Background: `rgba(162, 32, 65, 0.8)`
- Border Radius: `1440px`（＝完全な円）
- Font Size: `10px`

### Cards

- Background: `#ffffff`
- Border: `1px solid #d5d5d5`
- Border Radius: **`0`**
- Shadow: なし

### Inputs

- Background: `transparent`
- Border: **なし**（`0px none`）。下線も枠も持たず、アイコンとプレースホルダだけ
- Border Radius: `0`
- Padding: `4px 28px 4px 36px`（左 36px はアイコン分）
- Font Size: `14px`

> **角丸はサイト全体で `0`。** 例外は `ページ上部へ`（完全な円）と、アイコン用の `50%` 円 17 要素だけ。
> **カードやボタンに `border-radius: 4px` などを足さない。**

---

## 5. Layout Principles

### Spacing Scale

`--base-unit: 10px` を基準に `calc(n * var(--base-unit))` で書く。実サイトの表のセルは
`padding: calc(1.3 * var(--base-unit)) calc(1.6 * var(--base-unit))` のように書かれている。

| Token | Value |
|-------|-------|
| XS | 8px |
| S | 12px |
| M | **10px**（`--base-unit`） |
| L | 24px |
| XL | 40px |
| XXL | **120px**（コンテンツの左右余白） |

### Container

```css
--width-contents: min(1200px, calc(100vw - 120px), 100%);
```

- Max Width: **1200px**
- Padding (horizontal): **120px**（最多。セクションによって 70px / 60px も使う）

### Grid

- Columns: 3〜4（メガメニュー・ニュースカード）
- Gutter: **12px**（最多）、セクション間は 24px / 32px

### 設計幅トークン（このサイト特有）

```css
--mc--quantity--of-design--horizontal--dt: 0.0520833333vw;  /* = 100vw / 1920 */
--mc--quantity--of-design--horizontal--lt: 0.0694444444vw;  /* = 100vw / 1440 */
--mc--quantity--of-design--horizontal--tb: 0.1302083333vw;  /* = 100vw /  768 */
--mc--quantity--of-design--horizontal--sp: 0.2666666667vw;  /* = 100vw /  375 */
```

**「設計幅における 1px」を vw で持つ変数。** `calc(240 * var(--mc--quantity--of-design--horizontal--lt))` と書けば、
1440px 設計のカンプ上の 240px がそのまま画面幅に追従する。**分母がそのまま設計幅**なので、
この 4 つの数字から **デスクトップ 1920 / ラップトップ 1440 / タブレット 768 / モバイル 375px** の 4 段設計だと読める。

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **ほぼ全部。** カード・ボタン・タブに影は無い |
| 1 | `rgba(0, 0, 0, 0.16) 0 3px 6px 0` | **可視 1 要素のみ**。固定ヘッダー |

> **影は実質ゼロ。** 計測に出るもう 1 つ（`rgba(0,0,0,0.2) 0 0 18px`）は Cookie バナー由来なので採用しない。
> 面の区別は**影ではなく 1px の罫線**（`#d5d5d5` / `#000000`）でつける。

---

## 7. Do's and Don'ts

### Do（推奨）

- 欧文を `font-family` の先頭に置く（`"Neue Helvetica", "Tazugane Gothic", …`）
- `font-weight` は **200 / 400 / 500 の 3 段だけ**を使う
- 字間は**要素ごとに `em` で**当てる（本文 0.03em / ナビ 0.08em / 見出し 0.1em）
- 本文の `line-height` は **1.8**。中間要素は 1.6 / 1.5
- 寸法は `--base-unit: 10px` の倍数で書く
- 面の区切りは **1px の罫線**でつける
- 本文ブロックには必ず `line-height` を宣言する（body の無単位 1 が降りてくるため）

### Don't（禁止）

- **`font-weight: 700` を書かない。** 500 の面が出るだけで太くならない（合成太字も起きない）
- **`font-weight: 300` を「Light」のつもりで書かない。** 実際に出るのは 200
- **`border-radius` を足さない。** このサイトは角丸ゼロ。円が許されるのは戻るボタンとアイコンだけ
- **`box-shadow` でカードを浮かせない。** 罫線で区切る
- **`font-feature-settings: "palt"` を足さない。** 正の字間と設計が衝突する
- **ブランド赤（`#a22041`）を CTA の面に広げない。** 実装では戻るボタン 1 つだけ
- **ヒーローの `what comes to mind?` をテキストで組まない。** 動画に焼き込まれた文字
- **`word-break: break-all` を足さない**（実測 `normal`）
- `"Osaka Meiryo"` という 1 つの名前で書かない（`Osaka, メイリオ` が正しい）

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | ルート `font-size` | 説明 |
|------|-------|------|------|
| Mobile | ≤ 767px | **`4.2667vw`**（= 100vw / 23.4375） | 設計幅 375px。375px でちょうど 16px に着地 |
| Tablet / Desktop | ≥ 768px | **`16px` 固定** | 768 / 834 / 1024 / 1200 / 1440 / 1920px すべて 16px |

> **768 / 767px の境目で 2.05 倍に跳ぶ。** 実測 `html`: 768px → **16px** / 767px → **32.7253px**。
> `body` も 10px → 20.4533px。これは壊れているのではなく、**モバイル側だけ 375px 設計のレイアウトを画面幅へ比例拡大する**作り。
> 規定の計測幅（1440 / 1200 / 834 / 375px）だけで測ると **834px も 375px も 16px なので完全に固定に見える**。必ず 768 / 767px を測る。

実測値（`html` / `body` / h1 / 本文 p）:

| 幅 | html | body | h1 | p |
|---|---|---|---|---|
| 1920〜768px | 16px | 10px | 42px | 16px / 28.8px |
| **767px** | **32.7253px** | **20.4533px** | **57.2693px** | **30.68px** |
| 375px | 16px | 10px | 28px | 15px |
| 374px | 15.9573px | 9.97333px | 27.9253px | 14.96px |

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG基準）。実サイトのボタンは `padding: 10px 20px` + 20px 文字で約 48px

### フォントサイズの調整

- 下層ページの h1: デスクトップ 42px → モバイル(375px) **28px**（67%）
- 本文: 16px → **15px**。モバイルでもほぼ落とさない

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color: #000000（面）
Brand Red:     #a22041（戻るボタンのみ）
Text Color:    #000000 / #333333
Link Color:    #0f2350
Border:        #d5d5d5
Background:    #ffffff
Font: "Neue Helvetica", "Tazugane Gothic", "Noto Sans JP", sans-serif
Weights: 200 / 400 / 500 のみ（700 は使えない）
Body Size: 16px
Line Height: 1.8
Letter Spacing: 0.03em（本文）/ 0.1em（見出し）
Border Radius: 0
```

### プロンプト例

```
三菱商事のデザインシステムに従って、ニュース一覧ページを作成してください。
- フォント: "Neue Helvetica", "Tazugane Gothic", "Noto Sans JP", sans-serif
- ウェイトは 200 / 400 / 500 のみ。700 は使わない（Medium しか出ない）
- 見出し 50px / weight 300 / letter-spacing 0.1em / line-height 1.28
- 本文 16px / letter-spacing 0.03em / line-height 1.8
- border-radius は 0。カードは 1px solid #d5d5d5 の罫線で区切る
- 選択中のタブは #000000 の面に白文字、padding 10px 20px、letter-spacing 2px
- box-shadow は使わない
- コンテナは max-width 1200px、左右 padding 120px
```
