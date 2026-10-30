# DESIGN.md — 旭化成（Asahi Kasei）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-10-18 / 対象: `https://www.asahi-kasei.com/jp`, `https://www.asahi-kasei.com/jp/company/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **書体の出し分けを `lang` 属性でやる多言語前提の設計。** 日本語ページに入ったときだけ `palt` が効き、英語・中国語では書体ごと差し替わる。見た目は角丸 `4px` 一種類と青 1 色の、装飾を削ったコーポレート
- **密度**: 中。1200px のコンテナに 12 / 20 / 40 / 48 / 72px の整数ギャップで積む。バナーカルーセルを持たず、見出し＋矢印リンクの繰り返しで通す
- **キーワード**: lang 属性で書体切替、palt、自前配信の Noto Sans JP、角丸 4px、青 1 色

**このサイトの核心は5つある。**

1. **`font-feature-settings: 'palt' on` が `[lang|="ja"]` の中に書いてある。** `body` でも `*` でもなく**言語セレクタに紐づいている**ため、日本語ページでだけ約物が詰まり、英語・中国語ページでは詰まらない。可視 1307 要素に継承されていて、実測でも効いている（同一書体で `normal` 800px → `palt` 685.17px ＝ **14.4% 詰まる**）
2. **書体は `--body-font-family` という 1 本の変数を `lang` ごとに差し替えて出し分ける。** `[lang|="ja"]` なら `--font-jp`、`[lang|="en"]` なら `--font-en`、`[lang|="zh"]` なら `--font-sc`。**書体スタックを要素ごとに書かない**
3. **Noto Sans JP を Google ではなく自社ドメインから配信している。** `www.asahi-kasei.com/.../fonts/noto-sans-jp/notosans-jp-regular.woff2` など 5 本。しかも **`unicode-range` でサブセット分割していないフル版**（`U+0-10FFFF`）なので、1 ファイルが重い
4. **`line-height` が `px` の絶対値で降りてくる。** `--body-line-tight-m: 16px` を `body` に当てているため、**宣言し直さない要素は文字サイズに関係なく 16px の行送りになる**。32px の見出しが 16px の行で組まれると重なるので、見出しは必ず自分で `line-height` を持っている
5. **ウェイトのトークンは `--fw-thin: 100` から `--fw-black: 900` まで 9 段あるが、実際に出るのは 400 / 500 / 700 の 3 段だけ。** `@font-face` も 300 / 400 / 500 / 600 / 700 の 5 本を宣言しているのに `loaded` は **400 / 500 / 700 の 3 本**で、300 と 600 は読まれない

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

| 役割 | 実装値 | 実測 |
|------|--------|------|
| **Asahi Kasei Blue** | **`#005bac`** | **面 7 要素（トップ）／ 4 要素（下層）、文字 1 要素**。塗りボタン、検索ボタン、事業領域の帯、スキップリンク。**このサイトで唯一の彩度の高い色** |
| **Deep Navy** | **`#04233c`** | **文字 14 要素**。タブの年号ラベル、帯グラデーションの左端 |
| **Pale Blue** | **`#e5eff7`** | **面 15 要素**。年号バッジ、選択中のタブ。日付・分類の背景に使う淡い青 |
| Pale Blue（下層） | `#f2f7fb` | 下層のセクション面（2 要素） |

```css
/* 事業領域の帯だけに使うグラデーション（1 要素） */
background: linear-gradient(90deg, #04233c 0%, #005bac 100%);
```

### Neutral（ニュートラル）

- **Text Primary** (`#222222`): 本文・見出し。**可視 59 要素（トップ）／ 62 要素（下層）で最多**。純黒にしない
- **Text Secondary** (`#646464`): タブの非選択ラベル、補足（可視 9 要素／1 要素）
- **Text on Dark** (`#ffffff`): 青面・動画上のテキスト（可視 21 要素／12 要素）
- **Background** (`#ffffff`): `pageBackground.resolved` = `rgb(255,255,255)`（根拠 `body`）。トップはヒーローの `<video>`（1440×720）が被さるが、**ページの地色は白**
- **Surface** (`#f8f8f8`): セクションの淡い地（可視 4 要素）
- **Border** (`#d3d3d3`): 線ボタンの枠、区切り線。`--separator-line-color`
- **Border Secondary** (`#7a7a7a`): 破線の区切り
- **Divider（濃）** (`#a7a7a7`): 1 要素

### 宣言されているが使われていない色（実装しない）

このサイトは **Adobe Experience Manager Edge Delivery Services** の雛形の上に組まれており、`:root` にその既定値が残っている:

- `--link-color: #3b63fb` / `--link-hover-color: #1d3ecf`（**EDS の既定の青**。可視 0。リンクは `#222222` のまま下線で表現する）
- `--text-color: #131313`（**宣言はこれだが実際の本文は `#222222`**。`#131313` が出るのは YouTube 埋め込みのラベル 1 要素だけ）
- `--dark-color: #505050` / `--light-color: #f8f8f8`（`--light-color` だけ使われている）

### 外部ウィジェット由来（実装しない）

- `確認しました` ボタン（`border-radius: 18px` / `font-size: 12px` / 白地に白枠）は **Cookie 同意バナー**。サイト本体に 18px の角丸は無い

---

## 3. Typography Rules

### 3.1 和文フォント

- **ゴシック体**: **Noto Sans JP**（**自社ドメインから配信**）。`loaded` は **400 / 500 / 700 の 3 本**
- `@font-face` は 300（Light）/ 400 / 500 / 600（SemiBold）/ 700 の **5 本を宣言**しているが、**300 と 600 は `unloaded`**（当たる要素が無い）
- **`unicode-range` を指定していない**ため、どのウェイトもフル版（`U+0-10FFFF`）が 1 ファイルで落ちてくる。フォント要求はトップで 5 件
- **明朝体**: 使わない。セリフ系の和文は 2 ページとも可視 0 要素

### 3.2 欧文フォント

- **Noto Sans**（400・Regular と Italic の 2 本を宣言）。**ただし日本語ページでは `unloaded`**。`[lang|="en"]` のときだけ `--font-en` 経由で使われる
- 日本語ページの欧文・数字は Noto Sans JP が受け持つ

### 3.3 font-family 指定

```css
/* 実サイトの宣言をそのまま */
:root {
  --font-jp: "Noto Sans JP", system-ui, -apple-system,
             "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif;
  --font-en: "Noto Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-sc: "Noto Sans SC", system-ui, -apple-system,
             "PingFang SC", "Microsoft YaHei", sans-serif;
}

[lang|="ja"] {
  --body-font-family: var(--font-jp);
  font-family: var(--font-jp);
  font-feature-settings: 'palt' on;      /* ★palt はここにしか無い */
}
[lang|="en"], html[lang=""] {
  --body-font-family: var(--font-en);
  font-family: var(--font-en);
}
[lang|="zh"] {
  --body-font-family: var(--font-sc);
  font-family: var(--font-sc);
}

body { font-family: var(--body-font-family); }
```

**ただし `--font-jp` の游ゴシックの指定は誤っている。** `"Yu Gothic"`（Regular）だけが書かれていて `"Yu Gothic Medium"` が無いため、Noto Sans JP が落ちた Windows では Regular に当たって細く出る。正しくは:

```css
/* 正しい並び（Windows で Medium を拾わせる） */
--font-jp: "Noto Sans JP", system-ui, -apple-system,
           "Hiragino Kaku Gothic ProN", "游ゴシック Medium", "Yu Gothic Medium",
           "Yu Gothic", "Meiryo", sans-serif;
```

実害は限定的（Noto Sans JP が `loaded` なので通常そこまで到達しない）が、**配信が落ちた時だけ細くなる**ので直す価値がある。

### 3.4 文字サイズ・ウェイト階層

| 役割 | サイズ | ウェイト | 行間 | 字間 | 実測 |
|------|--------|---------|------|------|------|
| ページ見出し h1（下層） | **40px** | 700 | 1.6 | normal | 1 要素 |
| セクション見出し | **32px** | 700 | 1.6 | normal | 6 要素／4 要素 |
| 中見出し | **24px** | 700 | 1.6 | normal | 4 要素／3 要素 |
| 小見出し・ナビ | **18px** | 700 | 1.6 | normal | 8 要素／2 要素 |
| **本文・ボタンラベル** | **16px**（768px 以下は **14px**） | 400 | **1.6** | normal | **可視 50 要素／49 要素で最多** |
| 補足・リード | 15px | 400 | 2.0 | normal | 6 要素 |
| キャプション | 14px | 400 | 1.6 | normal | 12 要素／5 要素 |
| 日付・分類 | 12px | 400 | 1.33 | **0.32px** | 6 要素／8 要素 |
| 年号バッジ | **11px** | 400 | 1.0 | **0.15px** | 14 要素 |

- **ウェイトは 400 と 700 の二択が基本**（可視 73 / 28 要素、下層 61 / 17）。500 は **5 要素だけ**で、しかも下層には 1 要素も無い
- **`--fw-thin: 100` 〜 `--fw-black: 900` の 9 段は宣言されているだけ。** 実装に存在するのは 400 / 500 / 700 の 3 段
- **600 を書かない。** `@font-face` に SemiBold があるが `unloaded` で、当てても読まれない

### 3.5 行間・字間

```css
/* 実サイトの宣言 */
body {
  font-size: var(--body-font-size-m);     /* 16px（768px 以下は 14px）*/
  line-height: var(--body-line-tight-m);  /* ★16px — 絶対値 */
  font-weight: 400;
}
```

- **`line-height` が `px` の絶対値で子へ降りる。** `--body-line-tight-m: 16px` なので、宣言し直さない要素は文字サイズに関係なく **16px の行送り**になる。実測でも「16px → 16px（比率 1.00）」が 8 要素ある
- **本文ブロック・見出しには必ず `line-height` を宣言する。** しないと 32px の見出しが 16px の行で組まれて行が重なる
- 実装で使われている行間比は **`1.6`（本文・見出し。可視 72 要素／55 要素で最多）と `2.0`（リード文。20 要素／7 要素）の 2 つ**
- **字間は `normal` が既定**（可視 98/106・73/78 要素）。当てるのは次の 2 つだけ:

| 対象 | 実測 px | 換算 |
|---|---|---|
| 年号バッジ（11px） | **0.15px** | ≒ 0.0136em |
| 日付・分類（12px〜） | **0.32px** / 0.16px | ≒ 0.027em / 0.013em |

- **どちらも小さな英数字ラベル専用で、和文の本文には一切当たっていない**

### 3.6 禁則処理・改行ルール

- `word-break` は `normal`（既定のまま）。`auto-phrase` も `break-all` も使っていない
- 改行の制御は `palt` と `line-height: 1.6` だけで済ませている

### 3.7 OpenType 機能

```css
/* 日本語ページのときだけ効く */
[lang|="ja"] { font-feature-settings: 'palt' on; }
```

- **`palt` が可視 1307 要素（トップ）／ 437 要素（下層の計測時点）に継承されている**
- **実測で効いていることを確認済み**: 同一ページ・同一書体（Noto Sans JP）で `「東京・大阪」（株式会社）、デザインの話。` を組むと `normal` 800px → **`palt` 685.17px**（14.4% 詰まる）。`halt` は 700px
- **宣言位置を `body` や `*` に移さない。** `[lang|="ja"]` に置くのがこの設計の要で、英語ページでは `palt` が外れる
- `palt` 以外の feature（`halt` / `tnum` / `pkna`）は使っていない
- **`palt` で詰めたあとに `letter-spacing` で空け直していない**（本文は `normal` のまま）

### 3.8 縦書き

使っていない（`writing-mode: vertical-*` は 2 ページとも 0 要素）。

---

## 4. Component Stylings

### Buttons

**塗りと線がペアで並ぶ（`Creating for Tomorrow` / `ニュース`）。角丸は 4px 一種類。**

```css
/* Primary（塗り） */
.btn-primary {
  background: #005bac;
  border: none;
  color: #ffffff;
  border-radius: 4px;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.6;          /* ★必ず宣言する（body の 16px が降りてくる） */
}

/* Secondary（線） */
.btn-secondary {
  background: #ffffff;
  border: 1px solid #d3d3d3;   /* 枠はニュートラルグレー。青にしない */
  color: #222222;
  border-radius: 4px;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 700;
}

/* 検索ボタンだけ角丸 2px */
.btn-search {
  background: #005bac;
  color: #ffffff;
  border-radius: 2px;
  padding: 0 24px;
  font-size: 13px;
  font-weight: 700;
}
```

- **線ボタンの枠は青ではなくグレー `#d3d3d3`。** 塗りが青、線がグレー＋黒文字という組み合わせ
- **影は付けない**（可視の `box-shadow` はモーダルの 1 要素だけ）

### Badges / Chips

```css
.badge-year {
  background: #e5eff7;
  color: #04233c;
  border-radius: 4px;
  padding: 0 8px 2px;        /* 下だけ 2px 多い */
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 1;
}
```

- ニュース一覧の `2026年` `業界・業績` `研究・開発` などに付く。**可視 14 要素**
- **淡い青の面に濃紺の文字**。青地に白ではない

### Tabs

```css
.tab {
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px 4px 0 0;   /* 上だけ角丸 */
}
.tab[aria-selected="true"] { background: #e5eff7; color: #005bac; }
.tab[aria-selected="false"] { background: #f8f8f8; color: #646464; }
```

- ニュースの `すべて / 経営・決算 / 事業・製品 / 研究・開発 / お知らせ`
- **選択中は淡い青＋青文字、非選択はグレー地＋グレー文字**

### Cards / Links

- カードは**枠も影も角丸も持たない**ことが多く、画像＋見出し＋右端の `→` で構成する
- 一覧のリンク行は**下線ではなく上下の区切り線**（`#d3d3d3` 1px）で仕切り、右端に `→` を置く

---

## 5. Layout Principles

### Spacing Scale

**整数の px トークン。流体スケールは使っていない。**

```css
--gap-vertical-l: 32px;
--scale-spacing-vertical-3xl: 72px;
--separator-margin-desktop: 40px;
--separator-margin-mobile: 32px;
```

- 実測のギャップは **20px（8 要素／6 要素）・12px（8 要素／4 要素）・40px（6 要素／4 要素）・48px（3 要素）・72px（2 要素／5 要素）・8px（5 要素）**
- **4 の倍数で、8 / 12 / 20 / 32 / 40 / 48 / 72px の 7 段**。16px と 24px はほぼ出ない

### Container

```css
.container { max-width: 1200px; margin-inline: auto; }
```

- **1200px が 42 要素（トップ）／ 29 要素（下層）で圧倒的に最多**
- 3 カラムは `calc(33.3333% - 13.3333px)`、2 カラムは `calc(50% - 10px)`（＝ギャップ 20px を割り付ける古典的な計算）
- 本文のナローカラムは `590px` / `564px` / `387px`

### Grid

- 3 カラム（ニュース・カード）と 2 カラム（テキスト＋画像）が基本。CSS Grid ではなく **flex ＋ `calc()`** で組んでいる

---

## 6. Depth & Elevation

**影をほぼ使わない。**

| 用途 | 値 | 実測 |
|---|---|---|
| モーダル・動画オーバーレイ | `0 5px 15px rgba(0, 0, 0, 0.5)` | **可視 1 要素のみ**（2 ページとも） |

- **カード・ボタン・バッジに影は付かない。** 階層は**面色（`#ffffff` / `#f8f8f8` / `#e5eff7`）と 1px の区切り線**だけで作る
- `filter: drop-shadow()` は使っていない（0 要素）
- 角丸は **`4px` が 58 要素（トップ）／ 36 要素（下層）で最多**。ほかは検索ボタンの `2px`、タブの `4px 4px 0 0`、Cookie バナーの `18px`（外部）

---

## 7. Do's and Don'ts

### Do（推奨）

- **`palt` は `[lang|="ja"]` に書く。** `body` や `*` ではなく言語セレクタに紐づける
- **書体は `--body-font-family` 1 本を `lang` ごとに差し替える。** 要素ごとにスタックを書かない
- **ブランド色は `#005bac` 1 色**。濃紺 `#04233c` と淡い青 `#e5eff7` で役割を分ける
- **本文色は `#222222`**（純黒にしない）
- **ウェイトは 400 と 700 の二択**で組む
- **行間は `1.6`（本文・見出し）／ `2.0`（リード文）**。**すべての本文ブロックと見出しで明示的に宣言する**
- **角丸は `4px` 一種類**
- **階層は面色と 1px の線で作る。影を使わない**
- **線ボタンの枠はグレー `#d3d3d3`**
- コンテナは **1200px**、ギャップは 8 / 12 / 20 / 32 / 40 / 48 / 72px

### Don't（禁止）

- **`line-height` を宣言し忘れない。** `body` の `16px` が**絶対値で降りてくる**ので、32px の見出しが 16px の行で組まれて重なる
- **`line-height` を `px` で新しく配らない**（実サイトはそうだが、これが上の事故の原因）
- **`font-weight: 100 / 200 / 300 / 600 / 800 / 900` を使わない。** `--fw-*` に 9 段あるが実装は 400 / 500 / 700 の 3 段で、300 と 600 は `@font-face` があっても `unloaded`
- **`--link-color: #3b63fb` を実装しない**（AEM Edge Delivery の雛形の既定値・可視 0）。リンクは `#222222` ＋下線
- **`--text-color: #131313` を本文色にしない**（宣言はこれだが実装は `#222222`）
- **`letter-spacing` を和文に当てない。** 当たっているのは 11〜12px の英数字ラベルだけ（0.15 / 0.32px）
- **明朝体を混ぜない**（2 ページとも可視 0）
- **カード・ボタンに影を付けない**
- **角丸 18px を使わない**（Cookie バナー由来）
- **Noto Sans JP を `unicode-range` 無しのフル版で配信する設計をそのまま真似しない。** 実サイトはそうだが、新規実装ではサブセット分割するほうがよい

---

## 8. Responsive Behavior

### Breakpoints

```css
/* 実サイトの宣言（Media Queries Level 4 のレンジ構文） */
@media (width >= 768px)  { }   /* 7 箇所 */
@media (width >= 1280px) { }   /* 4 箇所 */
@media (width > 767px) and (width < 1280px) { }
@media (prefers-reduced-motion: reduce) { }   /* 6 箇所 */
@media (prefers-contrast: more) { }           /* 2 箇所 */
```

- **境界は 768 / 1280 の 2 本。** `>=` `>` `<` のレンジ構文で書かれている
- **`prefers-reduced-motion` と `prefers-contrast` に対応している**（カルーセルの自動送りと配色）

### タッチターゲット

- ボタンの `padding: 8px 20px` ＋ 16px 文字で高さ約 42px。**モバイルで本文が 14px に落ちるとボタンも縮むので、`min-height: 44px` を別途保証する**
- ページネーションは `--pagination-height-desktop: 40px` / `-tablet: 36px` / `-mobile: 32px` と**モバイルで小さくなる**（44px を下回る）

### フォントサイズの調整

- **`html` は全幅 16px 固定。**
- **`body` だけが 768px を境に 16px → 14px に切り替わる**（769px = 16px、**768px = 14px** を実測で確認）。流体ではなく 1 段の階段
- 行送りも同時に 16px → 14px に切り替わる（`--body-line-tight-m` ごと差し替わる）
- 見出しは 6 幅（1440 / 1200 / 834 / 768 / 767 / 375px）とも固定値のまま

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
ブランド色: #005bac（青・唯一の彩度色）
濃紺: #04233c ／ 淡い青: #e5eff7（バッジ・選択タブ）
本文色: #222222 ／ 補足 #646464
地色: #ffffff ／ セクション面 #f8f8f8
線: #d3d3d3（1px）／ 破線 #7a7a7a
書体: --body-font-family を lang で切替
      ja → "Noto Sans JP", system-ui, -apple-system, "Hiragino Kaku Gothic ProN",
           "Yu Gothic Medium", "Yu Gothic", "Meiryo", sans-serif
ウェイト: 400 / 700（500 は例外・600 以上は使わない）
文字サイズ: 40 / 32 / 24 / 18 / 16 / 15 / 14 / 12 / 11px
本文: 16px（768px 以下は 14px）
行間: 1.6（本文・見出し）/ 2.0（リード）★必ず明示的に宣言
字間: normal（英数字ラベルだけ 0.15〜0.32px）
palt: [lang|="ja"] に 'palt' on（14.4% 詰まる）
角丸: 4px 一種類（検索ボタンのみ 2px）
影: 使わない（モーダルの 0 5px 15px rgba(0,0,0,.5) のみ）
コンテナ: 1200px ／ ギャップ 8/12/20/32/40/48/72px
ブレークポイント: 768 / 1280（width >= 構文）
```

### プロンプト例

> 旭化成のデザインシステムでサステナビリティのページを作って。
> ブランド色は `#005bac` の 1 色、濃紺 `#04233c` と淡い青 `#e5eff7` で役割を分ける。本文は `#222222`。
> 書体は `--body-font-family` を 1 本だけ定義して `[lang|="ja"]` で `--font-jp` に差し替える構造にし、**`font-feature-settings: 'palt' on` もその `[lang|="ja"]` の中に書く**。
> ウェイトは 400 と 700 の二択。**見出しにも本文にも `line-height` を必ず明示する**（`body` の行送りが 16px の絶対値で降りてくるため）。本文 1.6 / リード 2.0。
> 字間は `normal`。角丸は `4px` 一種類。**影は使わず**、面色（白 / `#f8f8f8` / `#e5eff7`）と 1px の `#d3d3d3` の線だけで階層を作る。
> 線ボタンは白地にグレー枠＋黒文字、塗りボタンは青地に白文字、どちらも `padding: 8px 20px` / 16px / 700。
> ニュースの年号バッジは `#e5eff7` 地に `#04233c` の 11px、`letter-spacing: 0.15px`。
> コンテナは 1200px、ギャップは 20px 基調。ブレークポイントは `@media (width >= 768px)`。
