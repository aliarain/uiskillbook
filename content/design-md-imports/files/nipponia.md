# DESIGN.md — NIPPONIA

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-13 / 対象: `https://team.nipponia.or.jp/`, `/about/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **約物だけをサブセットフォントで詰め、`letter-spacing` には一切触らない。** 古民家再生ブランドの組織サイト。ゴシック（本文）と明朝（理念の言葉）の二層を、YakuHanJP / YakuHanMP という「約物専用フォント」で揃える
- **密度**: 低い。トップは深い紺地（`#080822`）に写真と縦の大見出しを置き、下層は白地で 1 カラムの読み物になる
- **キーワード**: 紺地、YakuHan、約物詰め、明朝の理念、MyFonts の欧文

**このサイトの核心は 4 つある。**

1. **`letter-spacing` を書かない。** 実測でトップ 205/208 要素、下層 170/173 要素が **`normal`**。例外はバナーのアイキャッチ（`0.22em` / `0.18em`）など CSS 全文で **9 宣言だけ**。**字間は「組まない」のが既定**
2. **`font-feature-settings: "palt"` は 1 要素も使っていない**（実測 0 件）。代わりに **`YakuHanJP` / `YakuHanMP`**（約物だけを収録したサブセットフォント）をスタックの**先頭**に置き、句読点・括弧だけを半角幅に詰める。**`palt` と違い、仮名漢字の字送りは一切変わらない**
3. **`html { font-size: 62.5%; line-height: 1 }`。** 無単位の `1` が全要素に降りるため、**行間を宣言し忘れた要素は行が潰れる**（実測 比率 `1.00` がトップ 107 要素）。本文ブロックは必ず `line-height` を書く
4. **ヒーローの縦組み大見出しは SVG スプライト**（`<use xlink:href="#icon-top-copy">`、154×490px）。**テキストではない。** 本物の `writing-mode: vertical-rl` は右端の「お問い合わせ」タブ（幅 40px）と「私たちの想い」アンカーだけ

**CSS Custom Properties は自社トークン 8 個のみ**（残り 60 個は WordPress / Gutenberg の preset）。**うち色の 4 個（`--rte-gold` `--rte-gold-hover` `--rte-line` `--rte-wash`）はトップ・ブログ記事の両方で可視 0 要素。** 宣言はあるが描画されていない。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Navy（トップの地色）** | **`#080822`** | **可視 47 要素の塗り面**。`body.home` にだけ当たる背景色。ヘッダー、プロジェクト一覧、フッター |
| **Crimson（CTA）** | **`#8a001a`** | **「お問い合わせ」ボタン専用**（トップ・下層とも 1 要素）。このサイトで唯一の彩度の高い面色 |
| Tag Gray | `rgba(153,153,153,0.6)` | 「城下町」「港町」などの分類タグ（**可視 43 要素**）。半透明なので写真の上に重なる |

> **下層ページの地色は紺ではなく白。** `body.home` にだけ `#080822` が当たる設計で、`/about/` 以下は `#ffffff`。
> `pageBackground.resolved` はトップでヒーロー（`div.TopSlideBgImg`）に覆われるため、**`heroCover.note` の「`body: rgb(8,8,34)` が本来のページ背景」を採る。**

### 宣言はあるが使われていない色（Don't）

```css
/* :root に宣言されているが、トップ・ブログ記事とも可視 0 要素 */
--rte-gold:       #9a6412;
--rte-gold-hover: #c8892f;
--rte-line:       #e8e0d2;
--rte-wash:       #faf5ec;
```

**この 4 色を「ブランドカラー」として実装しない。** リッチテキスト（記事本文）用に用意されたまま、実測した 2 ページでは一度も描画されていない。

### Neutral（ニュートラル）

- **Text Primary** (`#111111`): 見出し・リンク（**可視 59 要素**）
- **Text Body** (`#333333`): 本文（トップ 13 要素 / 下層 **39 要素**）
- **Text on Navy** (`#ffffff`): 紺地の上のテキスト（トップ 40 要素 / 下層 **82 要素**）
- **Text Muted** (`#aaaaaa`): 日付・カテゴリ（**可視 46 要素**）。`PAGE TOP` ボタンの面色でもある
- **Text Muted 2** (`#999999`): サブメニュー項目（可視 20 要素）
- **Text Caption** (`#666666`): 人物の肩書き（可視 6 要素）
- **Surface Card** (`#eceef1`): メディア掲載カードの面（**可視 40 要素**）
- **Surface Gray** (`#f6f6f6` / `#e6e6e6` / `#f3f3f3`): 下層の面（各 9 / 4 / 7 要素）
- **Surface Cream** (`#fbf8f1`): 下層の「株式会社NOTE」告知バナーの面（1 要素）
- **Border Cream** (`#d9d0bd`): 同バナーの枠（1px solid）
- **Background（トップ）** (`#080822`) / **Background（下層）** (`#ffffff`)

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・UI）**: **Noto Sans JP**（Google Fonts、`400 700` の可変レンジ）。約物は **YakuHanJP**（`400` / `500` / `700` が `loaded`）
- **明朝体（理念・見出し）**: **Noto Serif JP**（`300 500` の可変レンジ）。約物は **YakuHanMP**（`400` / `500` が `loaded`、下層では `300` も `loaded`）

> **明朝に `700` は存在しない。** `Noto Serif JP` の宣言が `300 500`、`YakuHanMP` の `700` は `unloaded`。**明朝へ `font-weight: 700` を当てるとブラウザの合成太字になる。**

### 3.2 欧文フォント

- **CarreNoirPro-Medium**（MyFonts 配信、`loaded`）: `NIPPONIA Sites` `Pick up` `About us` `LANDSCAPE` などの**欧文見出し専用**（トップ・下層とも 10 要素）。CSS に `@import url("//hello.myfonts.net/count/380055")` がある
- 本文中の欧文は和文スタック内の `"Helvetica Neue", Helvetica, Arial` に任せる

### 3.3 font-family 指定

```css
/* 本文・UI（ゴシック） */
font-family: YakuHanJP, "Noto Sans JP", "Helvetica Neue", Helvetica, Arial,
             游ゴシック体, "Yu Gothic", YuGothic,
             "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
             メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;

/* 理念・引用（明朝） */
font-family: YakuHanMP, "Noto Serif JP", Georgia,
             游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN", serif;

/* 欧文見出し */
font-family: CarreNoirPro-Medium;
```

**フォールバックの考え方**:
- **先頭の `YakuHanJP` / `YakuHanMP` は書体ではなく「約物だけのサブセット」。** 句読点・括弧・中黒のみを収録しているので、仮名漢字は次の `Noto Sans JP` / `Noto Serif JP` が受ける。**この順序を崩すと約物詰めが消える**
- `Georgia` は明朝スタックの 3 番目にあるが**欧文専用書体**なので、和文は後続の游明朝まで通る。generic family（`serif`）は末尾だけ
- **游ゴシックの Medium 指定が無い。** `游ゴシック体, "Yu Gothic", YuGothic` の順で、Windows で Light に当たりうる。ただし `Noto Sans JP` が `loaded` なので実際には到達しない。**Web フォントを外す改変をするなら `"游ゴシック Medium"` を足すこと**

### 3.4 文字サイズ・ウェイト階層

ルートは **`html { font-size: 62.5% }` = 10px**、`body { font-size: 1.4rem }` = **14px**。**6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）すべてで 10px / 14px から動かない**（流体ではない）。

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| **Hero Copy** | — | — | — | — | — | **SVG スプライト。テキストではない** |
| Display (EN) | CarreNoirPro-Medium | 56px | 400 | — | normal | 下層のページタイトル `NIPPONIAとは` |
| Section (EN) | CarreNoirPro-Medium | 32px | 400 | — | normal | `NIPPONIA Sites` `Pick up` |
| **Lead（明朝）** | YakuHanMP / Noto Serif JP | **36px** | **300** | **1.40** | normal | **`私たちの想い` `一日からの村人`。最も細い見出し** |
| Label (EN) | CarreNoirPro-Medium | 24px | 400 | — | normal | `LANDSCAPE` `COMMUNITY` |
| Lead Text（明朝） | YakuHanMP / Noto Serif JP | 26px | 500 | 1.60 (41.6px) | normal | リード文 |
| Site Link（明朝） | YakuHanMP / Noto Serif JP | 22px | 400 / 500 | — | normal | `NIPPONIA 活動サイト` |
| Sub Heading（明朝） | YakuHanMP / Noto Serif JP | 20px | 500 | 1.45 | normal | `NIPPONIAのVision` |
| Nav / Heading | Noto Sans JP | 16px | **700** | 1.65 | normal | `NIPPONIAとは` `全国のプロジェクト` |
| Quote（明朝） | YakuHanMP / Noto Serif JP | 16px | 500 | — | normal | `原風景の未来を創ります` |
| **Body** | YakuHanJP / Noto Sans JP | **14px** | 400 | **1.75** (24.5px) | normal | **本文の既定** |
| Body（長文） | YakuHanJP / Noto Sans JP | 16px | 400 | 1.65 | normal | 下層の読み物 |
| Caption | YakuHanJP / Noto Sans JP | 12px | 400 | 1.30 | normal | `私たちの想い` 等のサブメニュー（可視 81 要素で最多） |
| Tag | YakuHanJP / Noto Sans JP | 10px | 400 | 1.70 (17px) | normal | `城下町` `港町` |
| Micro | YakuHanJP / Noto Sans JP | 10px | 500 | 4.00 | normal | `視察・求人・物件`（縦組みタブ） |

**ウェイトは 300 / 400 / 500 / 700 の 4 段。** 実測は 400（トップ 127 / 下層 126）・500（62 / 19）・700（19 / 21）・300（下層のみ 7）。**300 は明朝にだけ当たる。**

### 3.5 行間・字間

- **本文の行間**: **1.75**（14px / 24.5px）。下層の長文は **1.65**（16px）
- **見出しの行間**: **1.40**（36px の明朝見出し）、**1.45**（20px）
- **カードの行間**: **1.30**（実測 36 要素）
- **字間**: **`normal` が既定。トップ 205/208 要素、下層 170/173 要素。** CSS 全文でも `letter-spacing` の宣言は **9 件**しかない

```css
/* CSS 全文にある letter-spacing 宣言（これで全部） */
.BtnSns              { letter-spacing: 0.1em; }   /* 別ブレークポイントで 0.05em */
.ProjectTitle        { letter-spacing: -0.01em; }
.RTE .RTELink__badge { letter-spacing: 0.06em; }
.AkariBanner__eyebrow{ letter-spacing: 0.22em; }  /* 別ブレークポイントで 0.18em */
.AkariBanner__copy   { letter-spacing: 0.03em; }
.AkariBanner__cta    { letter-spacing: 0.08em; }
.MapGuard__hint      { letter-spacing: 0.06em; }
```

**ガイドライン**:
- **本文・見出しに `letter-spacing` を足さない。** 約物詰めは YakuHanJP / YakuHanMP が担当しており、ここに字間を足すと「詰めてから空ける」二重の操作になる
- **`line-height` は必ず要素ごとに宣言する。** `html { line-height: 1 }` が降りてくるため、宣言し忘れた本文は行が潰れる（実測 比率 `1.00` が 107 要素）
- 比率は **無単位**で書く。`1.0em` のような絶対値にすると子要素まで巻き込む

### 3.6 禁則処理・改行ルール

```css
/* 実サイトの宣言（4 件のみ） */
.PublishSlideItem__noimg { word-break: break-word; }
.screen-reader-text      { word-break: normal !important; }
```

- **`word-break: auto-phrase` は使っていない。** 改行位置はブラウザ既定に任せている
- `overflow-wrap` / `line-break` の宣言も無い。**長い URL を置く場合は自前で `overflow-wrap: break-word` を足すこと**

### 3.7 OpenType 機能

```css
/* このサイトは font-feature-settings を一切書かない（実測 0 件） */
```

- **`palt` も `halt` も使わない。** 約物詰めは **`YakuHanJP` / `YakuHanMP` をスタック先頭に置く**ことで実現している
- **`palt` と YakuHan は別物。** `palt` は全文字の字送りを詰めるが、YakuHan は**約物（`、。「」（）・`）だけ**を半角幅に置き換える。仮名漢字の間隔は変わらない
- 再現するときは YakuHan をスタックに入れる。`palt` で代用すると**本文全体が詰まって別物になる**

### 3.8 縦書き

```css
/* 右端の固定タブ（実測 幅 40px） */
.SubMenuContact__inner { writing-mode: vertical-rl; line-height: 40px; }
.SubMenuContact__primary   { font-size: 14px; }  /* お問い合わせ */
.SubMenuContact__secondary { font-size: 10px; }  /* 視察・求人・物件 */
```

- **本物の縦組みは 6 要素だけ**（うち 2 件はアイコンの `<svg>` / `<use>`）。右端の固定タブと、サブメニューの `私たちの想い`（12px、12×72px）
- **ヒーローの大きな縦組みコピーは実装ではない。** `.TopSlideCopy__inner > svg > use[xlink:href="#icon-top-copy"]` ＝ **SVG スプライトのアウトライン**（`<text>` 要素は 0 個、`<path>` も 0 個）。**ここを `writing-mode` で再現しようとしない**
- 縦組みの `letter-spacing` は `normal`、`line-height` は **40px の絶対値**

---

## 4. Component Stylings

### Buttons

**Primary（お問い合わせ）**
- Background: `#8a001a`
- Text: `#ffffff` / 12px / weight 400
- Line Height: 24px
- Padding: `0 14px`
- Border Radius: **12px**（高さの半分＝ピル）
- Border: none

**Secondary（下層の告知バナー）**
- Background: `#fbf8f1`
- Text: `#000000` / 14px / weight 400
- Border: `1px solid #d9d0bd`
- Padding: `26px 40px`
- Border Radius: **0**

**Page Top**
- Background: `#aaaaaa`
- Text: `#000000` / Arial 13.33px
- Border Radius: 0

### Badges / Chips

**Tag（分類タグ）**
- Background: `rgba(153,153,153,0.6)`（**半透明。写真の上に重ねる前提**）
- Text: `#ffffff` / 10px / weight 400
- Line Height: 17px
- Padding: `0 7px`
- Border Radius: **9px**

### Cards

**Media Card（メディア掲載）**
- Background: `#eceef1`
- Border Radius: **3px**（実測 40 要素で最多の角丸）
- Text: `#7c828c` / 13.5px

**Floating Banner（AKARI SUPPORTER）**
- Background: `rgba(17,16,22,0.62)`（**ガラス調**）
- Border: `1px solid rgba(255,255,255,0.16)`
- Border Radius: **14px**
- Shadow: `rgba(0,0,0,0.42) 0 14px 36px`（**サイト唯一の影**）

### Inputs

- 実測した 2 ページに入力欄が無い。**新規実装では Tag の `radius: 9px` と Primary の `radius: 12px` に合わせる**

---

## 5. Layout Principles

### Spacing Scale

ルートが 10px なので **`rem` の値がそのまま「px ÷ 10」**になる。実測で使われている横余白:

| Token | Value |
|-------|-------|
| S | 14px (`1.4rem`) |
| M | 26px |
| L | 40px |
| XL | **80px**（`padding-left` の最多値・7 要素） |

### Container

- Max Width: **1440px**（実測 11 要素）。補助的に **1066px** が 1 要素
- Padding (horizontal): **80px**（デスクトップ）
- コンテンツ幅の実測値: **1280px**（1440 − 80×2）

### Grid

- トップのプロジェクト一覧・メディア掲載カードとも **`gap` の宣言は無く**、マージンで組んでいる

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **既定。サイトのほぼ全要素** |
| 1 | `rgba(0,0,0,0.42) 0 14px 36px` | **フローティングバナー（AKARI SUPPORTER）1 要素のみ** |

**影は実測 1 種類 1 要素しかない。** カード・ボタン・ナビはすべてフラット。**影で階層を作らず、紺地（`#080822`）と白地の面の切り替えで区切る設計。**

---

## 7. Do's and Don'ts

### Do（推奨）

- **`YakuHanJP` / `YakuHanMP` をスタックの先頭に置く。** 約物詰めはこれが全部
- **`line-height` を要素ごとに必ず宣言する**（`html { line-height: 1 }` が降りてくる）。無単位で書く
- **明朝（Noto Serif JP）は理念・引用の言葉にだけ使う。** ウェイトは **300 / 400 / 500**
- 欧文の見出しは **CarreNoirPro-Medium**。和文と混ぜず、独立した行に置く
- トップは `#080822`、下層は `#ffffff`。**ページ種別で地色を切り替える**
- 角丸は **3px（カード）/ 9px（タグ）/ 12px（ボタン）/ 14px（バナー）** の 4 値から選ぶ

### Don't（禁止）

- **`font-feature-settings: "palt"` を足さない。** このサイトは 0 件。YakuHan と併用すると約物が二重に詰まる
- **本文・見出しに `letter-spacing` を足さない。** 実測 205/208 要素が `normal`
- **明朝に `font-weight: 700` を当てない。** `Noto Serif JP` は `300 500`、`YakuHanMP 700` は `unloaded`。合成太字になる
- **ヒーローの縦組みコピーを `writing-mode` で実装しない。** 実サイトは SVG スプライト。`writing-mode: vertical-rl` が当たっているのは右端のタブ（幅 40px）だけ
- **`--rte-gold` `--rte-gold-hover` `--rte-line` `--rte-wash` を使わない。** 宣言はあるが実測 2 ページとも可視 0 要素
- **`line-height` を `em` や `px` で書かない。** 絶対値が子要素まで降りる
- 影を増やさない（実測 1 種類のみ）

---

## 8. Responsive Behavior

### Breakpoints

CSS 全文の `@media` 宣言数（実測）:

| Name | Width | 宣言数 | 説明 |
|------|-------|--------|------|
| **Mobile** | **≤ 800px** | **299** | **主ブレークポイント。ここで組み替える** |
| Tablet | ≤ 960px | 39 | 補助 |
| Desktop 微調整 | ≤ 1150 / 1200 / 1350px | 5 / 3 / 3 | 余白の詰め |

- **`max-width: 800px` が 299 宣言と圧倒的。** 実質 2 段階（〜800px / 801px〜）の設計
- **ルートサイズは全幅で 10px / body 14px のまま動かない。** フォントの流体スケールは使っていない

### タッチターゲット

- お問い合わせボタンは高さ 24px（line-height）＋ padding。**44px に満たないので、新規実装では縦 padding を足す**
- 縦組みタブは幅 40px × 高さ 252px

### フォントサイズの調整

- ルートが固定なので、**サイズ変更はコンポーネント側のメディアクエリで行う**（`.AkariBanner__eyebrow` が 0.22em → 0.18em に変わるなど）

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Primary Color:  #080822  (トップの地色)
CTA Color:      #8a001a
Text Color:     #111111 / 本文 #333333
Background:     #080822 (トップ) / #ffffff (下層)
Font (gothic):  YakuHanJP, "Noto Sans JP", "Helvetica Neue", Helvetica, Arial, 游ゴシック体, sans-serif
Font (mincho):  YakuHanMP, "Noto Serif JP", Georgia, 游明朝, "Hiragino Mincho ProN", serif
Font (latin):   CarreNoirPro-Medium
Root Size:      10px (html 62.5%)
Body Size:      14px
Line Height:    1.75 (本文) / 1.40 (見出し) ※必ず宣言する
Letter Spacing: normal （足さない）
palt:           使わない
```

### プロンプト例

```
NIPPONIA のデザインシステムに従って、プロジェクト一覧カードを作成してください。
- font-family は YakuHanJP を先頭に置いたゴシックスタックを使う（palt は書かない）
- letter-spacing は normal のまま。字間を足さない
- line-height は必ず宣言する（html に line-height: 1 が入っている前提）
- カードの角丸は 3px、分類タグは radius 9px / rgba(153,153,153,0.6) / 10px
- 見出しに明朝を使う場合は Noto Serif JP の weight 300〜500 まで。700 は使わない
- 影は付けない
```
