# DESIGN.md — 三陽商会（SANYO SHOKAI）

> このファイルはAIエージェントが正確な日本語UIを生成するためのデザイン仕様書です。
> セクションヘッダーは英語、値の説明は日本語で記述しています。
> 実測日: 2026-09-28 / 対象: `https://www.sanyo-shokai.co.jp/`, `/company/`

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: **`html { font-size: 62.5% }` で 1rem = 10px。生成り `#e8e4d9` の地に、凸版文久ゴシックを `palt` で詰めて組むアパレルのコーポレートサイト**
- **密度**: 低〜中。本文 16px / 行間 28px、角丸ゼロ、影ゼロ。線と余白だけで区切る
- **キーワード**: 62.5% ルート、生成りの地、凸版文久ゴシック、`word-break: auto-phrase`、400 と 600 の 2 段

**このサイトの核心は6つある。**

1. **`html { font-size: 62.5%; background: var(--color-type1) }`。** rem の基準を 10px に落とし、`body { font-size: 1.6rem }`（= 16px）で戻している。**日本の受託 Web 制作で最も普及している rem の置き方**で、「px 値をそのまま 10 で割って rem にできる」ことが狙い
2. **ページの地色は白ではなく生成り `#e8e4d9`。** しかも `body` ではなく **`html` に塗っている**（`body` は `rgba(0,0,0,0)`）。`--color-type1` として変数化されている
3. **`body` に組版の指定を 5 つまとめて書いている。**
   `font-family: var(--font-type2)` / `font-weight: 400` / `font-feature-settings: "palt"` / `line-height: 1.75em` / `letter-spacing: .05em` / `word-break: auto-phrase`。**`palt` は可視 583 要素に効いている**
4. **`line-height` が `em` 宣言。** `1.75em` × 16px = **28px が絶対値として継承される**。子要素でサイズを変えても行間は 28px のまま動かない（比率に直すと壊れる）
5. **`font-weight` は 400 と 600 の 2 段だけ。** 実測 400 が 146 要素、600 が 3 要素。**`@font-face` も `normal` と `600` の 2 本しか無い**ので、`700` を当てるとブラウザの合成太字になる
6. **影が無く、代わりに「白の内側 1px 縁」を使う。** `inset 1px 1px 0 0 #fff, inset -1px -1px 0 0 #fff` が 28 要素。生成りの地にカードを**浮かせるのではなく彫る**

---

## 2. Color Palette & Roles

### `:root` の色トークン（17 個・番号で命名されている）

```css
:root {
  --color-type1:  #e8e4d9;                 /* ★ページ地色。html に塗る */
  --color-type2:  #c5b8a6;                 /* ヘッダー／面の濃いベージュ */
  --color-type3:  #cccccc;
  --color-type4:  #403d3c;                 /* ドロップダウンナビの面・日付の文字 */
  --color-type5:  #a28d73;                 /* 検索ボタン・ロゴ帯 */
  --color-type6:  rgba(255, 255, 255, 0.5);
  --color-type7:  #886d4b;                 /* 「適時開示」バッジの面 */
  --color-type8:  #888888;
  --color-type9:  #f4f2ec;
  --color-type10: #e4e7ab;
  --color-type11: #c6c9d2;
  --color-type12: #2256a2;
  --color-type13: rgba(224, 223, 217, 0.9);
  --color-type14: rgba(255, 255, 255, 0.9);
  --color-type15: #a68a72;
  --color-type16: #8c6e5d;
  --color-type17: #594539;
}
```

> **命名が役割ではなく通し番号。** `--color-primary` のような意味づけが無いので、**変数名からは用途が読めない**。下の「実測で確認できた用途」の対応表を使うこと。
> **17 個すべてが描画に出るわけではない。** トップで実際に面として観測できたのは `#e8e4d9` / `#c5b8a6` / `#403d3c` / `#a28d73` / `#886d4b` / `#cccccc` と、**変数に無い `#655c5d`** の 7 色だけだった（宣言 ≠ 実装）。

### 実測で確認できた用途

| 実装値 | 変数 | 実測 |
|---|---|---|
| **`#e8e4d9`** | `--color-type1` | **ページ地色**（`html` の背景）。このサイトの土台 |
| **`#c5b8a6`** | `--color-type2` | ヘッダー帯・「重要なお知らせ」「投資家情報」の面（1,166,400px² で最大面積） |
| **`#403d3c`** | `--color-type4` | ドロップダウンナビの面（571,680px²）。日付の文字色（10 要素） |
| **`#a28d73`** | `--color-type5` | ロゴ帯・検索ボタンの面 |
| **`#886d4b`** | `--color-type7` | 「適時開示」バッジの面（文字 `#ffffff`） |
| **`#655c5d`** | **（変数に無い）** | 「プレスリリース」バッジの面。**ベタ書き**。反転版は面 `#ffffff` / 文字 `#655c5d` |
| **`#000000`** | — | 本文・見出し（文字 50 要素）。**純黒を使う** |
| **`#ffffff`** | — | 濃い面の上の文字（87 要素） |

> **`--color-type12: #2256a2`（青）は IR 系のリンク色だが、トップ・企業情報では 1 要素も描画されなかった。** 変数にあるからといって使わない。

### Neutral（ニュートラル）

- **Text Primary** (`#000000`): 本文・見出し
- **Text Meta** (`#403d3c`): ニュースの日付
- **Text on Dark** (`#ffffff`): 濃ベージュ／墨の面の上
- **Background** (`#e8e4d9`): ページ地色。**`html` に塗る**
- **Surface** (`#ffffff`): カード・白抜きバッジ

> **`pageBackground.resolved` は `html` を根拠に `rgb(232, 228, 217)` を返しており、これは正しい。** `heroCover.heroCovered` は `false`。ただし `viewportTopByArea` の上位は `<a>` の白い面（972,000px²）なので、面積だけ見て白と判断しない。

---

## 3. Typography Rules

### 3.1 和文フォント

- **本文ゴシック**: **凸版文久ゴシック Pr6N**（`toppan-bunkyu-gothic-pr6n`・Adobe Fonts）。可視 134 要素。**このサイトのほぼ全文**
- **見出し明朝**: **ヒラギノ明朝 ProN**（`hiragino-mincho-pron`・Adobe Fonts）。下層ページの h2 など。「TIMELESS WORK．ほんとうにいいものを」のブランドステートメント
- 両方とも Adobe Fonts で、**`document.fonts` の状態は `loaded`**

### 3.2 欧文フォント

- **セリフ**: **Minion Pro**（`minion-pro`・Adobe Fonts）。`News` / `IR News` / `Pick Up` / `Brands` / `About Us` の欧文見出し（36px・50px）
- **サンセリフ**: **FF Basic Gothic Pro**（`ff-basic-gothic-pro`・Adobe Fonts）。言語切替（`JP` / `EN`）だけ
- **和文と欧文でセリフ／サンセリフが逆。** 和文はゴシック（本文）、欧文はセリフ（見出し）という組み合わせ

### 3.3 font-family 指定

```css
/* ★実サイトの宣言をそのまま。フォールバックが 2 箇所とも誤っている */
:root {
  --font-type1: "hiragino-mincho-pron", sans-serif;      /* ★明朝なのに sans-serif */
  --font-type2: "toppan-bunkyu-gothic-pr6n", serif;      /* ★ゴシックなのに serif */
  --font-type3: "minion-pro", serif;                     /* 正しい */
  --font-type4: "ff-basic-gothic-pro", sans-serif;       /* 正しい */
}

body {
  font-family: var(--font-type2);
  font-weight: 400;
  font-feature-settings: "palt";
  line-height: 1.75em;
  letter-spacing: .05em;
  word-break: auto-phrase;
}
```

**フォールバックの考え方**:
- **実サイトは `--font-type1` と `--font-type2` の generic family を取り違えている。** Adobe Fonts が落ちると、本文ゴシックが明朝に、見出し明朝がゴシックに化ける
- **正しくは** `--font-type1: "hiragino-mincho-pron", serif` / `--font-type2: "toppan-bunkyu-gothic-pr6n", sans-serif`
- Adobe Fonts はドメインライセンスなので、手元で再現するときは**同じ系統の代替**を置く。凸版文久ゴシック → **Zen Kaku Gothic New**（ふところが近い）、ヒラギノ明朝 ProN → **Zen Old Mincho** または **Noto Serif JP**

### 3.4 Web フォントの実際

| ファミリー | 宣言ウェイト | `document.fonts` の状態 | 判断 |
|---|---|---|---|
| `toppan-bunkyu-gothic-pr6n` | `normal` / `600` | **どちらも `loaded`** | **2 本しか無い。`700` を当てると合成太字** |
| `hiragino-mincho-pron` | `300` | `loaded` | **Light 1 本だけ**。見出しに `400` 以上を当てると合成される |
| `minion-pro` | `normal` | `loaded` | 欧文見出し |
| `ff-basic-gothic-pro` | `300` | `loaded` | 言語切替のみ |
| `swiper-icons` / `FontAwesome` | — | `unloaded` | 使われていない |

> **`hiragino-mincho-pron` は W3（Light）1 本。** 実測の h2 は `font-weight: 400` だが、**描画は 300 のまま**（合成が効く環境では太る）。ブランドステートメントの繊細さはこの 1 本で作られている。

### 3.5 文字サイズ・ウェイト階層

**★ `1rem = 10px`。px 値を 10 で割ればそのまま rem になる（`16px = 1.6rem`）。**

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Counter | 凸版文久ゴシック Pr6N | 80px | 400 | 1.94 | 0.05em | 「49」「1,068」「17」の実績数字（3 要素） |
| EN Display | Minion Pro | 50px | 400 | 1.00 | — | `Brands` / `About Us` |
| Page Title | 凸版文久ゴシック Pr6N | 70px | 400 | — | 3.5px | 下層ページの大見出し（1 要素） |
| EN Heading | Minion Pro | 36px | 400 | 1.00 | — | `News` / `IR News` / `Pick Up` |
| Heading (h1) | 凸版文久ゴシック Pr6N | 32px | 400 | 28px | 0.8px | **`line-height` が font-size より小さい**（em 継承の結果） |
| Statement (h2) | ヒラギノ明朝 ProN | 30px | 400 | 30px (1.00) | 1.5px | 「TIMELESS WORK．ほんとうにいいものを」 |
| Sub Heading | 凸版文久ゴシック Pr6N | 24px | 600 | 28px (1.17) | 0.9px | ナビの大項目（6 要素） |
| Lead | 凸版文久ゴシック Pr6N | 20px | 400 | 1.40 | 1px | 下層の導入（10 要素） |
| Nav | 凸版文久ゴシック Pr6N | 18px | 400 | 28px (1.56) | 0.9px | グローバルナビ（7 要素） |
| Body | 凸版文久ゴシック Pr6N | 16px | 400 | 28px (1.75) | 0.8px | 本文（30 要素） |
| Link / List | 凸版文久ゴシック Pr6N | 15px | 400 | 21px (1.40) | normal | 最頻サイズ（65 要素） |
| Caption | 凸版文久ゴシック Pr6N | 14px | 400 | 21px (1.50) | 0.7px | フッター・注記（23 要素） |
| Badge | 凸版文久ゴシック Pr6N | 13px | 400 | 13px (1.00) | **1.3px** | ニュース種別（8 要素）。**字間だけ広げる** |

> **`font-weight: 700` は 2 ページの実測で 1 要素も出ない。** 強調は太さではなく**サイズと面色**で作る。

### 3.6 行間・字間

- **本文の行間**: `body` に **`line-height: 1.75em`**。16px に対して **28px が絶対値として継承される**
- **見出しの行間**: 個別に上書き。`1.00`（欧文見出し）/ `1.17`（ナビ大項目）/ `1.40`（リード）/ `1.94`（実績カウンター）
- **本文の字間**: `body` に **`letter-spacing: .05em`**。16px で **0.8px**（可視 146 要素中 102 要素）
- **見出しの字間**: 継承のまま。大見出しだけ `3.5px` / `1.5px` / `1.3px` を個別に当てる

```css
/* ★ line-height を em で書いているので、継承されるのは比率ではなく px */
body { line-height: 1.75em; letter-spacing: .05em; }
/* 16px × 1.75 = 28px が確定し、13px のバッジも 20px のリードも
   上書きしない限り 28px のまま動く */
```

> **`line-height: 1.75em` を `1.75`（単位なし）に書き換えてはいけない。** 単位なしなら各要素のサイズに比例して伸縮するが、`em` は**計算済みの 28px が子へ降りる**。実測で `lineHeightRatio` が `0.00` / `1.17` / `1.56` / `1.75` / `1.87` と散らばるのはこのため。
> **字間は逆に `em` 宣言のまま比例する。** モバイル（375px）では body が 14px になり、字間も **0.7px**（= 0.05em）に追従した。**px に読み替えない。**

### 3.7 OpenType 機能

```css
body { font-feature-settings: "palt"; }
```

- **`palt` を `body` に書いて全体に効かせている。** 実測 **583 要素**（トップ）/ **293 要素**（企業情報）
- `palt` ＋ `letter-spacing: .05em` の併用。**詰めてから 0.05em 空ける**のがこのサイトの字送り
- `tnum` などの数値系は使っていない

### 3.8 縦書き

```css
/* 実測: writing-mode が horizontal-tb 以外の要素は 0。縦組みは使わない */
```

該当なし。

### 3.9 禁則処理・改行ルール

```css
body { word-break: auto-phrase; }   /* ★文節で折り返す */
.break-auto { word-break: auto-phrase; }
```

- **`word-break: auto-phrase` を `body` に書いている。** 日本語の**文節単位**で改行位置を決める新しい値で、`<br>` や `<wbr>` を手で入れずに「ほんとうにいい/ものを」のような不自然な折り返しを避ける
- ユーティリティクラス `.break-auto` も用意されている
- 未対応ブラウザでは `normal` にフォールバックするだけなので、**書いておいて損が無い**

---

## 4. Component Stylings

### Buttons / Links

**このサイトに「面で塗った CTA ボタン」はほぼ無い。** 押せるものは下線リンクとして表現される。

**Text Link（主役）**
- Background: `transparent`
- Text: `#000000`（濃い面の上では `#ffffff`）
- **下線は `border-bottom` ではなく `background-image: linear-gradient(90deg, …)`**（ホバーで左右に伸ばすため）
- Padding: `0 0 4px`（下線との間隔）/ 大きいものは `20px 0`
- Border Radius: `0`
- Font: 16px / 400 / `line-height: 28px` / 字間 0.8px / `palt`

**Search Button（唯一の面ボタン）**
- Background: `#a28d73`（`--color-type5`）/ Text: `#eeeeee`
- Padding: `0 7.5px` / Border Radius: **`0 3px 3px 0`**（**サイト内で唯一の角丸**）
- Font: Arial 16px / 400

### Badges（ニュース種別）

| 種別 | 面 | 文字 | Padding | Radius | Font |
|---|---|---|---|---|---|
| プレスリリース | `#655c5d` | `#ffffff` | `5px 8px` | `0` | 13px / 400 / 字間 1.3px |
| 適時開示 | `#886d4b` | `#ffffff` | `5px 8px` | `0` | 13px / 400 / 字間 1.3px |
| （反転） | `#ffffff` | `#655c5d` | `5px 8px` | `0` | 13px / 400 / 字間 1.3px |
| カテゴリ（企業／組織・人事） | `#655c5d` | `#ffffff` | `0` | `0` | 16px / 400 / `line-height: 28px` |

> **バッジも角丸ゼロ。** 面色だけで種別を分け、形は変えない。文字は 13px まで落とすが、**字間を 1.3px（= 0.1em）まで広げて読ませる**。

### Cards

- Background: `#ffffff`
- Border: なし
- Border Radius: `0`
- **Shadow の代わりに白の内側 1px 縁**: `inset 1px 1px 0 0 #ffffff, inset -1px -1px 0 0 #ffffff`（実測 28 要素）
- Font: 15px / 400 / `line-height: 21px`

### Nav（ドロップダウン）

- Background: `#403d3c`（`--color-type4`）
- Text: `#ffffff`
- Item Font: 24px / 600（大項目）/ 16px / 400（小項目）/ 字間 0.9px・0.8px
- Border Radius: `0`

### Counter（実績数字）

- Font: 80px / 400 / `line-height: 1.94` / 字間 0.05em
- ラベルは 16px / 400。**数字も本文と同じ凸版文久ゴシックで組む**（欧文書体に切り替えない）

---

## 5. Layout Principles

### Root / rem

```css
html {
  font-size: 62.5%;            /* ★1rem = 10px */
  background: var(--color-type1);
}

@media screen and (min-width: 769px) {
  body { font-size: 1.6rem; }              /* = 16px */
}
@media screen and (max-width: 768px) {
  body { font-size: 3.7333333333vw; }      /* ★モバイルだけ流体。375px で 14px */
}
```

> **`html` は 10px 固定だが、`body` はモバイルだけ `vw`。** 375px 幅で 14px、`letter-spacing: .05em` が 0.7px、`line-height: 1.75em` が 24.5px に追従する（実測で確認）。**「このサイトの本文は 16px」と一言で書かない。**

### Container

- 実測: `.guide::before { width: calc(100% - 80px); max-width: 1200px }`
- **Max Width: 1200px** / **左右余白: 40px ずつ**

### Spacing Scale

余白トークンは無い。実測のパディングは **4 / 5 / 6 / 7.5 / 8 / 20 / 40px**。
**角丸が無い分、余白の刻みも粗い**（4 / 8 の倍数に寄せてよい）。

### Grid

- 明示的なグリッド変数は無い
- カラムはフレックスで、コンテナ幅 1200px を基準に分割する

---

## 6. Depth & Elevation

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | `none` | **ほぼ全要素**。ボタン・バッジ・ナビは影を持たない |
| 1 | `inset 1px 1px 0 0 #ffffff, inset -1px -1px 0 0 #ffffff` | **実測 28 要素**。生成りの地に置く白カードの縁 |

> **影が 1 種類しかなく、しかもそれは `inset`（内側の縁）。** 面を**浮かせる**のではなく、地色 `#e8e4d9` との境界に**白い 1px の光**を入れて彫る。
> **新規実装で `0 2px 8px rgba(0,0,0,.1)` のような一般的なドロップシャドウを足さない。** 生成りの地の上では汚れて見える。

---

## 7. Do's and Don'ts

### Do（推奨）

- **`html { font-size: 62.5% }` を先に置く。** 以降の px は 10 で割って rem で書ける（`16px → 1.6rem`）
- **ページ地色 `#e8e4d9` は `html` に塗る。** `body` は透明のままにする
- **`body` に組版をまとめて書く**: `font-feature-settings: "palt"` / `line-height: 1.75em` / `letter-spacing: .05em` / `word-break: auto-phrase`
- **ウェイトは 400 と 600 の 2 段だけ**にする
- **角丸は書かない。** 例外は検索ボタンの `0 3px 3px 0` のみ
- **カードの縁は `inset` の白 1px** で作る
- フォールバックは**正しい generic family** を書く（実サイトの取り違えは写さない）

### Don't（禁止）

- **`line-height: 1.75em` を `1.75`（単位なし）に直さない。** 継承されるのは 28px という絶対値で、そこが設計の要
- **`letter-spacing` を px に読み替えない。** モバイルで body が `vw` になるため、0.8px 固定にすると字間だけ比率が崩れる
- **`font-weight: 700` を当てない。** `@font-face` が `normal` / `600` の 2 本しか無く、合成太字になる
- **ヒラギノ明朝 ProN に `600` 以上を当てない。** 読み込んでいるのは `300`（W3）1 本だけ
- **`border-radius` を足さない。** 実測は検索ボタン 1 箇所と円 9 個だけ
- **ドロップシャドウを足さない。** このサイトの奥行きは `inset` の白縁と面色の明度差で作る
- **`--color-type12: #2256a2`（青）など、描画に出ていない変数を使わない。** 17 個のうち実際に面として観測できたのは 6 個 ＋ ベタ書きの `#655c5d` だけ

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | ≤ 768px | `@media screen and (max-width: 768px)`。**body が `3.7333vw` の流体になる** |
| Desktop | ≥ 769px | `@media screen and (min-width: 769px)`。body `1.6rem` = 16px |
| Wide | ≥ 1024 / 1200 / 1280 / 1600px | コンテナと画像まわりの微調整 |
| Narrow | ≤ 374px | 最小幅の保険 |

### 実測（幅ごとの body）

| Viewport | `html` | `body` font-size | line-height | letter-spacing |
|---|---|---|---|---|
| 1440px | 10px | 16px | 28px | 0.8px |
| 1200px | 10px | 16px | 28px | 0.8px |
| 834px | 10px | 16px | 28px | 0.8px |
| 375px | 10px | **14px** | **24.5px** | **0.7px** |

> **`html` は全幅で 10px。変わるのは `body` だけ。** 0.05em / 1.75em の宣言が、そのまま比率を保って縮む。

### タッチターゲット

- 最小サイズ: 44px × 44px（WCAG 基準）
- 下線リンクは `padding: 20px 0` で高さを稼いでいる箇所がある。**13px のバッジは押せる要素ではない**ので対象外

---

## 9. Agent Prompt Guide

### クイックリファレンス

```
Root Font Size: 62.5%（= 1rem 10px）★ px を 10 で割って rem にする
Background:  #e8e4d9   （html に塗る。body は透明）
Surface:     #ffffff
Primary Face:#c5b8a6   （ヘッダー・告知帯）
Dark Face:   #403d3c   （ドロップダウンナビ）
Accent:      #a28d73 / #886d4b / #655c5d
Text Color:  #000000（濃い面の上は #ffffff）
Font (本文): "toppan-bunkyu-gothic-pr6n", sans-serif  ※実サイトは serif と誤記
Font (明朝): "hiragino-mincho-pron", serif            ※実サイトは sans-serif と誤記
Font (欧文): "minion-pro", serif
Body Size: 16px（1.6rem） / Weight 400
Line Height: 1.75em  ★em。28px が絶対値で継承される
Letter Spacing: .05em（= 0.8px）
font-feature-settings: "palt"
word-break: auto-phrase
Weight: 400 と 600 の2段だけ（700 を使わない）
Radius: 0
Shadow: inset 1px 1px 0 0 #fff, inset -1px -1px 0 0 #fff
```

### プロンプト例

```
三陽商会のデザインシステムに従って、IR ニュース一覧を作成してください。

- html に font-size: 62.5% と background: #e8e4d9 を書く（body の背景は透明のまま）
- body に font-family: "toppan-bunkyu-gothic-pr6n", sans-serif /
  font-weight: 400 / font-feature-settings: "palt" / line-height: 1.75em /
  letter-spacing: .05em / word-break: auto-phrase を書く
  （line-height は必ず em。単位なしに直さない）
- 欧文の見出し「IR News」は "minion-pro", serif で 36px / 400 / line-height 1.0
- 記事行: 日付 14px / #403d3c、見出し 16px / 400 / line-height 28px、
  下線は border-bottom ではなく background-image: linear-gradient(90deg, …) で引く
- 種別バッジ: 面 #655c5d（プレスリリース）/ #886d4b（適時開示）、文字 #ffffff、
  13px / 400 / letter-spacing 1.3px、padding 5px 8px、border-radius 0
- カード: 背景 #ffffff、border-radius 0、
  box-shadow: inset 1px 1px 0 0 #fff, inset -1px -1px 0 0 #fff
- font-weight は 400 と 600 だけ。700 は使わない
- border-radius とドロップシャドウは書かない
- コンテナは max-width 1200px、左右余白 40px
```
