# DESIGN.md — 誠文堂新光社（SEIBUNDO SHINKOSHA）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-28 / 対象: `https://www.seibundo-shinkosha.net/`, `/book/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **`html` はブラウザ既定の 16px のまま。Web フォントを 1 本も読まず、游ゴシック体の OS ローカル書体だけで組む出版社サイト**
- **密度**: 高め。本文 13〜14px、書名 20px。960px 固定幅に書影を敷き詰める
- **キーワード**: 16px ルート、游ゴシック体スタック、字間 normal、縦組みのジャンル見出し、pill 30px、960px 固定

**このサイトの核心は6つある。**

1. **`html` に `font-size` の宣言が無い。** ブラウザ既定の **16px** のまま（1440 / 1200 / 834 / 375px の 4 条件で計測して全て 16px）。本文は `body { font-size: 14px }` と px で直接書く。**rem をほぼ使わない設計**
2. **Web フォントを 1 本も読み込まない。** `common.css` には Roboto と Noto Sans JP の `@font-face` が 9 件書かれているが、**まるごとコメントアウトされている**（`/*font*/` の後ろが全部 `/* … */`）。実測でも**フォントファイルのリクエストは 0 件**、`document.fonts` は空
3. **本文は游ゴシック体スタック。** 可視 366 要素中 **348 要素**。Windows の游ゴシック Regular 問題は `@font-face` の別名ではなく、**スタックの並び順**（`游ゴシック体` → `YuGothic` → `游ゴシック Medium` → …）で処理している
4. **`letter-spacing` は実測 366 要素中 364 要素が `normal`。** 字間を設計しない。例外は 2 要素の `-0.96px` だけ
5. **縦組みを実装している。** `/book/` の 12 ジャンル見出し（「科学・テクノロジー・農業」など）が `writing-mode: vertical-rl`・游ゴシック体 20px。トップのローディング表示も縦組みで、こちらだけ明朝 24px / `line-height: 48px`（＝ちょうど 2 倍）
6. **角丸は `30px` の pill 一択。** 実測 `30px` が 70 要素、ほかは円（`50%`・`99%`）だけ。**中間の角丸（4px / 8px）を持たない**

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **新刊バッジ** | **`#ff5224`** | 面 45 要素。書影の左上に貼る「新刊」 |
| **近刊バッジ** | **`#00a7e5`** | 面 19 要素。「近刊」 |
| **Link Blue** | **`#006cb8`** | 面 4 要素。外部リンク・資料請求系 |

> **ブランド色は「新刊」と「近刊」の 2 色だけ。** ロゴの青も含め、面として広く塗る色を持たない。
> **この 2 色はバッジ以外に使わない。** 見出しにもボタンにも出てこない。

### Neutral（ニュートラル）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Text Primary** | **`#222222`** | 文字 208 要素。書名・説明文・日付 |
| **Text Heading** | **`#111111`** | `body { color: #111 }` の宣言値。見出し（h1 / h2 / h3）と一覧の項目 |
| **Text Pure Black** | **`#000000`** | 文字 31 要素。グローバルナビ・パンくず。**リセット CSS の `body { line-height: 1; color: #000 }` が残っているため、3 段の黒が混在している** |
| **Button Fill** | **`#222222`** | 黒の pill ボタン |
| **Button Gray** | **`#cccccc`** | 角丸なしの押下型ボタン（文字 `#111111` / 700） |
| **Rail** | **`#f2f6f9`** | トップ左の縦タイムライン帯（289,800px²） |
| **Divider** | **`#eeeeee`** | 区切り |
| **Overlay** | **`rgba(0, 0, 0, 0.75)`** | 66 要素。書影にかぶせる説明文のレイヤー |
| **Background** | **`#ffffff`** | ページ背景（`body { background-color: #fff }`） |

> **黒が `#000000` / `#111111` / `#222222` の 3 段ある。** 設計意図というより**リセット CSS と本体 CSS の二重宣言**の結果。
> 新規実装では **`#111111` を見出し、`#222222` を本文**に割り当て、`#000000` は使わないのが安全。

> **地色は `body` を根拠に `#ffffff`。** `heroCover.heroCovered` は `false` で、`html` は `rgba(0,0,0,0)`。左の `#f2f6f9` はタイムラインのレールなので地色ではない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体（本文・見出し・縦組み）**: **游ゴシック体**。可視 366 要素中 348 要素
- **明朝体（限定）**: `"Noto Serif JP", 游明朝, "Yu Mincho", 游明朝体, YuMincho, "ヒラギノ明朝 Pro W3", …` のスタック。トップの h3（「玉川児童百科大辞典」発行 など・10 要素）と、`/book/` のジャンル見出し（13 要素）
- **`Noto Serif JP` は読み込んでいない**（`@font-face` はコメントアウト）。**実体は游明朝／ヒラギノ明朝**

### 3.2 欧文フォント

- **`Roboto, sans-serif`** を `Since 1912` / `1967` / `12 genres` / `Book` などの欧文ラベルに指定（トップ 10 要素・`/book/` 15 要素）
- **ただし Roboto も読み込んでいない。** 実体は OS の既定サンセリフ（macOS なら Helvetica、Windows なら Arial）
- h1 内の小見出しだけ `font-style: italic`（`"Roboto", sans-serif` / 16px / `#666666`）

### 3.3 font-family 指定

```css
/* 本文（実サイトの body 宣言そのまま） */
body {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
               "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: #111;
  background-color: #fff;
}

/* 見出し・ジャンル名の明朝 */
font-family: "Noto Serif JP", 游明朝, "Yu Mincho", 游明朝体, YuMincho,
             "ヒラギノ明朝 Pro W3", "Hiragino Mincho Pro", HiraMinProN-W3,
             HGS明朝E, "ＭＳ Ｐ明朝", "MS PMincho", serif;

/* IE 向けにだけスタックを差し替える */
@media all and (-ms-high-contrast: none) {
  body {
    font-family: "メイリオ", Meiryo, "游ゴシック体", YuGothic,
                 "游ゴシック Medium", "Yu Gothic Medium",
                 "游ゴシック", "Yu Gothic", sans-serif;
  }
}
```

**フォールバックの考え方**:
- **Windows の游ゴシック問題を `@font-face` の別名ではなくスタック順で処理する型。** macOS は 1〜2 番目（`游ゴシック体` / `YuGothic` = Regular）、Windows は 3〜4 番目（`游ゴシック Medium` / `Yu Gothic Medium`）が当たる
- 利点は CSS 1 行で済むこと。**欠点は macOS が Regular、Windows が Medium になって太さが揃わないこと**。厳密に揃えたい案件では `@font-face` の別名方式を選ぶ
- IE だけメイリオを先頭に差し替える分岐が残っている

### 3.4 Web フォントの実際

| ファミリー | CSS 上の記述 | ブラウザの挙動 | 判断 |
|---|---|---|---|
| Roboto 400 / 500 / 700 | `@font-face` あり — **ただし丸ごとコメントアウト** | フォントファイルのリクエスト **0 件** | **実体は OS の既定サンセリフ** |
| Roboto-italic 400 / 700 | 同上 | 同上 | 同上 |
| Noto-sans（Noto Sans JP）400 / 500 / 700 | 同上 | 同上 | **CSS の `font-family` にも出てこない**（完全な死にコード） |
| Noto Serif JP | `@font-face` 自体が無い | 取得されない | **実体は游明朝／ヒラギノ明朝** |

> **`document.fonts` は空、フォントリクエストは 0 件。** CSS を grep して `@font-face` が見つかっても、**コメントアウトされていることがある**。
> `document.fonts.check('400 16px "Roboto"')` は **`true` を返すが、これは根拠にならない**（読み込んでいない書体でも true になる）。
> **新規実装で親切のつもりに Google Fonts を足さない。** 足すと別のサイトになる。

### 3.5 文字サイズ・ウェイト階層

**★ `1rem = 16px`（ブラウザ既定のまま）。ただし実サイトはサイズを px で直接書いている。**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Hero Serif | 明朝スタック | 42px | 600 | 1.00 | normal | 「「玉川児童百科大辞典」発行」（年表の見出し） |
| Section Title | 明朝スタック | 40px | 600 | 52px (1.30) | normal | 「好きに出合える12ジャンル」「誠文堂新光社について」 |
| EN Numeral | Roboto 指定（実体は OS） | 30px | 700 | 1.00 | normal | 「1967」などの年号 |
| Sub Heading | 明朝スタック | 30px | 600 | 1.67 | normal | 「書籍　新刊・近刊情報」 |
| Genre (縦組み) | 游ゴシック体 | 20px | 700 | 20px (1.00) | normal | `writing-mode: vertical-rl` |
| Book Title | 游ゴシック体 | 20px | 400 | 1.40 | normal | 書名（83 要素） |
| Description | 游ゴシック体 | 16px | 400 | 1.80 | normal | 書影に重ねる紹介文（39 要素） |
| Body | 游ゴシック体 | 14px | 400 | 25.2px (1.80) | normal | `body` の既定 |
| Nav / Meta | 游ゴシック体 | 13px | 400 | 1.20〜1.60 | normal | 最頻サイズ（89 要素） |
| Label | Roboto 指定（実体は OS） | 11px | 400 | 1.00 | normal | 「Book」ラベル（66 要素） |
| Badge | 游ゴシック体 | 12px | 400 | 12px (1.00) | normal | 「新刊」「近刊」（63 要素） |

> **`font-weight` は 400（269 要素）/ 700（86 要素）/ 600（10 要素）/ 500（1 要素）。**
> 游ゴシックは macOS で Regular・Medium・Bold の 3 本、Windows で Regular・Medium・Bold。**`600` は Medium または合成、`500` は Medium に落ちる**ので、**400 / 700 の 2 段で設計するのが安全**。600 は明朝の見出しにしか使われていない。

### 3.6 行間・字間

- **本文の行間**: `body { line-height: 1.8 }`（単位なし＝比率で継承）。**モバイルでは `2.0` に広げる**
- **見出しの行間**: `1.00`（163 要素）。**ラベル・見出しはベタ組み**
- **書名の行間**: `1.40`（70 要素）、**紹介文だけ `1.80`**（56 要素）、日付は `1.60`（66 要素）
- **字間**: **書かない**。可視 366 要素中 364 要素が `normal`

```css
/* ★ line-height は単位なし。子要素のサイズに比例して伸縮する */
body { font-size: 14px; line-height: 1.8; }

@media screen and (max-width: 768px) {
  body { font-size: 14px; line-height: 2; }   /* ★モバイルだけ行間を広げる */
}
```

> **1 回の計測を「このサイトの行間」と書かない。** デスクトップ 1.8 → モバイル 2.0 と、画面幅で変わる。
> **`letter-spacing` を足さない。** 字間を書かないことが、書影を敷き詰めたときの密度を保っている。

### 3.7 OpenType 機能

```css
/* 実測: font-feature-settings はトップで 2 要素のみ。/book/ では 0 件 */
```

- **`palt` を使わない。** トップの 2 要素は外部スクリプト由来で、サイト本体は `normal`
- 約物サブセット（YakuHanJP 系）も使っていない
- **新規実装で `palt` を足さない。** 20px の書名が詰まって、一覧の行が揃わなくなる

### 3.8 縦書き

```css
/* ジャンル見出しを縦組みにする。モバイルでは横組みに戻す */
#genre .module_12genre_menu a .module_12genre_menu_wrapper p {
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

@media screen and (max-width: 768px) {
  #genre .module_12genre_menu a .module_12genre_menu_wrapper p {
    writing-mode: horizontal-tb;
  }
}
```

- **本物の縦組み。** `/book/` のジャンル見出し **12 要素**（「科学・テクノロジー・農業」「コンピューター・ＩＴ」「天文・宇宙」「アート・デザイン」ほか）。游ゴシック体 20px / `line-height: 20px`（ベタ組み）/ 700
- トップのローディング表示も縦組み **4 要素**。こちらは**明朝スタック 24px / `line-height: 48px`（＝ちょうど 2 倍）**
- **縦組みでも `letter-spacing` は `normal`**。字間で調整しない
- モバイルでは横組みに戻す。**縦組みはデスクトップだけの表現**

> 縦組みの中の全角カタカナ長音・英数字は `text-orientation` を指定していないため既定（`mixed`）で処理される。**「ＩＴ」のように全角英字を使って縦中横を避けている**のが実装上の工夫。

---

## 4. Component Stylings

### Buttons

**Primary（黒の pill）**
- Background: `#222222`
- Text: `#ffffff`
- Border: `1px solid #000000`
- Padding: `15px 15px 15px 25px`（**左右非対称**。右端に矢印を置くため）
- Border Radius: `30px`
- Font: 14px / 400 / `line-height: 14px`（ベタ組み）

**Secondary（白地・細枠の pill）**
- Background: `#ffffff`
- Text: `#222222`
- Border: `1px solid #222222`
- Padding: `3px 10px`
- Border Radius: `30px`
- Font: 11px / 400 / `line-height: 11px`

**Tertiary（グレーの角ボタン）**
- Background: `#cccccc`
- Text: `#111111`
- Padding: `12px 30px`
- Border Radius: **`0`**
- Font: 14px / **700**

> **押せるものは基本 pill（`30px`）。角のままなのはグレーのボタンだけ。**

### Badges

| 種別 | 面 | 文字 | Padding | Radius | Font |
|---|---|---|---|---|---|
| 新刊 | `#ff5224` | `#ffffff` | `3px 15px` | **`0`** | 12px / 400 / `line-height: 12px` |
| 近刊 | `#00a7e5` | `#ffffff` | `3px 15px` | **`0`** | 12px / 400 / `line-height: 12px` |

> **ボタンは丸く、バッジは角のまま。** 押せるものと押せないものを形で分けている。**バッジに `border-radius` を足さない。**

### Cards（書影カード）

- Background: `#ffffff`
- Border: なし
- Border Radius: `0`（**カード自体は角のまま**）
- Padding: `40px 30px`
- Shadow: **なし**（実測 `box-shadow` 0 種類）
- 書影の上に **`rgba(0, 0, 0, 0.75)`** のレイヤーを重ねて紹介文を白 16px / `line-height: 1.8` で載せる（66 要素）

### Section Title の下線

```css
.title_h2::after {
  content: "";
  display: block;
  width: 160px;
  height: 12px;
  margin: 15px auto 0;
  background: url(../images/common/h3_underline.svg) no-repeat center bottom / contain;
}
@media screen and (max-width: 768px) {
  .title_h2::after { width: 120px; height: 9px; }
}
```

> **見出しの下線が CSS の `border` ではなく SVG 画像。** 手描き風のかすれた線で、`border-bottom` では出せない表情を出している。

---

## 5. Layout Principles

### Container

```css
#wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 960px;     /* ★可変ではなく最小幅を切る */
  overflow: hidden;
}

.parts.section { width: 960px; margin: 100px auto 0; overflow: hidden; }
h1             { width: 960px; margin: 160px auto 0; line-height: 1; }
#breadcrumb ul { width: 960px; margin: 0 auto; padding-left: 30px; }
```

- **Max Width ではなく固定幅 `960px`。** `max-width` ではなく `width: 960px` ＋ `margin: auto` で中央に置き、`#wrapper` に `min-width: 960px` を切る
- **デスクトップは横スクロールを許す設計**（768px 以下で別レイアウトに切り替わる）
- セクション間の余白は `margin-top: 100px`、ページ頭は `160px`

### Spacing Scale

余白トークンは無い。実測のパディングは **3 / 10 / 12 / 15 / 25 / 30 / 40px**、マージンは **20 / 40 / 100 / 160px**。
**5 の倍数に寄せる**のがこのサイトの刻み。

### Grid

- CSS 変数は **0 個**（`customPropertiesSummary.total = 0`）。グリッドのトークン化はしていない
- 960px を 3 列（書影一覧）／12 列（ジャンル）に割る
- 年表は左に固定レール（`#f2f6f9`）、右にコンテンツという**左右非対称の 2 カラム**

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **全要素**。実測 2 ページで `box-shadow` は **0 種類** |

> **影を一切持たない。** 奥行きは
> (a) **`rgba(0,0,0,0.75)` のオーバーレイ**（書影に重ねる紹介文）
> (b) **`#ffffff` / `#eeeeee` / `#f2f6f9` の明度差**
> (c) **`30px` の pill と角のままの面の対比**
> の 3 つで作る。
> **`filter: drop-shadow()` も使っていない**（書影の白背景がそのまま地に溶ける）。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html` に `font-size` を書かない。** ブラウザ既定の 16px のままにして、サイズは px で直接指定する
- **游ゴシック体スタックは順番どおりに写す。** `游ゴシック体` → `YuGothic` → `游ゴシック Medium` → `Yu Gothic Medium` → `游ゴシック` → `Yu Gothic` → `sans-serif`
- **`letter-spacing` を書かない。** 実測 364/366 が `normal`
- **`line-height` は単位なし。** デスクトップ 1.8 / モバイル 2.0
- **押せるものは `border-radius: 30px` の pill、バッジは角のまま**にする
- **明朝は見出しとジャンル名だけ**に使う。本文はゴシック
- 縦組みはデスクトップのみ。モバイルでは `writing-mode: horizontal-tb` に戻す

### Don't（禁止）

- **Web フォントを足さない。** `@font-face` はコメントアウトされており、フォントリクエストは 0 件。Google Fonts の Roboto / Noto Serif JP を親切に補うと別物になる
- **`document.fonts.check()` の結果を根拠にしない。** 読み込んでいない書体でも `true` を返す
- **`font-feature-settings: "palt"` を足さない。** 実測は本体で 0 件
- **`font-weight: 500` を当てない。** 実測 1 要素だけ。游ゴシックでは Medium に落ちて 400 と見分けがつかない
- **`box-shadow` / `filter: drop-shadow()` を使わない。** どちらも 0 件
- **バッジを丸めない。** 「新刊」「近刊」は `border-radius: 0`
- **`#000000` を新しく使わない。** リセット CSS の残りで、設計上の黒は `#111111` / `#222222`
- **`max-width` に直さない。** 実サイトは `width: 960px` ＋ `min-width: 960px` の固定幅

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | 主要な切り替え点。**`body` の行間が 1.8 → 2.0、縦組みが横組みに戻る** |
| Desktop | ≥ 769px | 固定幅 960px。`#wrapper { min-width: 960px }` |
| Narrow Desktop | 769〜1000px / 769〜980px | ナビの折り返し |
| Mid | 960〜1280px | 年表まわりの調整 |
| WP Admin Bar | ≤ 782px | WordPress 由来 |
| IE | `(-ms-high-contrast: none)` | フォントスタックをメイリオ先頭に差し替える |
| Short Screen | `(max-height: 790px) and (min-width: 768px)` | **高さで切り替える分岐**（ヒーローの高さ） |

### 実測（幅ごとの body）

| Viewport | `html` | `body` font-size | line-height | letter-spacing |
|---|---|---|---|---|
| 1440px | 16px | 14px | 25.2px (1.8) | normal |
| 1200px | 16px | 14px | 25.2px (1.8) | normal |
| 834px | 16px | 14px | 25.2px (1.8) | normal |
| 375px | 16px | 14px | **28px (2.0)** | normal |

> **サイズは変えず、行間だけ広げる。** モバイルで文字を大きくしない代わりに、`line-height` を 1.8 → 2.0 にして読みやすさを確保している。

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）
- 黒 pill は `padding: 15px 15px 15px 25px` ＋ 14px / `line-height: 14px` で約 44px 高。**そのまま基準を満たす**
- 白 pill（`padding: 3px 10px` / 11px）は**押せるタグとしては小さい**。実装するなら縦パディングを増やす

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Root Font Size: 16px（ブラウザ既定。html に font-size を書かない）
Web Fonts: なし ★@font-face は全てコメントアウト／フォント取得 0 件
Font (本文): "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
             "游ゴシック", "Yu Gothic", sans-serif
Font (明朝): "Noto Serif JP", 游明朝, "Yu Mincho", 游明朝体, YuMincho,
             "ヒラギノ明朝 Pro W3", … , serif   ※実体は游明朝／ヒラギノ明朝
Body Size: 14px / Weight 400
Line Height: 1.8（モバイルは 2.0）
Letter Spacing: normal（書かない）
palt: 使わない
Text: #111111（見出し） / #222222（本文）
Accent: #ff5224（新刊） / #00a7e5（近刊） / #006cb8（リンク）
Surface: #ffffff / Rail: #f2f6f9 / Divider: #eeeeee
Overlay: rgba(0,0,0,0.75)
Radius: 30px（ボタン）/ 0（バッジ・カード）
Shadow: none
Container: width 960px 固定（min-width: 960px）
```

### プロンプト例

```
誠文堂新光社のデザインシステムに従って、書籍一覧のセクションを作成してください。

- html に font-size を書かない（ブラウザ既定の 16px のまま使う）
- Web フォントは読み込まない。body に
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
               "游ゴシック", "Yu Gothic", sans-serif;
  font-size: 14px; line-height: 1.8; color: #111; background-color: #fff;
  を書く（letter-spacing と font-feature-settings は書かない）
- コンテナは width: 960px / margin: 100px auto 0（max-width に直さない）
- セクション見出しは明朝スタックで 40px / 600 / line-height 1.3、
  下に width 160px / height 12px の手描き風 SVG 下線を ::after で置く
- 書籍カード: 背景 #ffffff、border-radius 0、box-shadow なし、padding 40px 30px
  書名 20px / 400 / line-height 1.4 / #222、日付 13px / line-height 1.6
  紹介文は書影の上に rgba(0,0,0,0.75) を重ねて白 16px / line-height 1.8
- バッジ「新刊」= 面 #ff5224、「近刊」= 面 #00a7e5、文字 #fff、
  12px / 400 / line-height 12px、padding 3px 15px、border-radius 0
- 「一覧を見る」ボタン: 面 #222222、文字 #fff、border 1px solid #000、
  padding 15px 15px 15px 25px、border-radius 30px、14px / 400
- ジャンル見出しは writing-mode: vertical-rl で游ゴシック体 20px / 700 /
  line-height 20px。@media (max-width: 768px) で horizontal-tb に戻す
- モバイル（≤768px）では body の line-height を 2 に広げる（文字サイズは変えない）
```
